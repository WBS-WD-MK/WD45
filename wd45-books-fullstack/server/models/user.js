const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
    },

    email: {
      type: String,
      unique: true,
      required: [true, 'Email address is required'],
    },

    password: {
      type: String,
      required: [true, 'Password is required'],
      minLength: [8, 'Passwords MUST be at least 8 characters'],
    },
    role: {
      type: String,
      required: true,
      default: 'user',
      enum: ['user', 'editor', 'admin'],
    },
  },
  { timestamps: true },
);
// by default mongoose will not treat unique fields errors similar to other validation errors so by adding this we are returning the same error message structure so later we can use it in our frontend
UserSchema.path('email').validate(async value => {
  const emailCount = await mongoose.models.User.countDocuments({ email: value });
  return !emailCount;
}, 'Email already exists');
//Virtual field
//stores info from our req, but will not be saved to the
//collection/db (need conf pass, but not storing it)
// MAKE SURE THE "_confirmPassword" start with "_"
UserSchema.virtual('confirmPassword')
  .get(() => this._confirmPassword)
  .set(value => (this._confirmPassword = value));

//https://mongoosejs.com/docs/middleware.html#pre
//https://mongoosejs.com/docs/middleware.html
//middleware affects/aides in the middle of a process
//pre validate automatically runs before any save middleware ... makes this go before the next one

// ALL MIDDLEWARE FUNCTIONS NEED TO BE IN es5 FUNCTIONS NOT ARROW FUNCTIONS
UserSchema.pre('validate', function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Passwords must match!!!');
    console.log("Passwords don't match!");
  }
  next();
});

UserSchema.pre('save', async function (next) {
  console.log('in pre save');
  //hash the password BEFORE it's saved to the db
  //Remember, we know they match from middleware above
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    //give our password the value of the returned hash
    console.log('HASHED', hashedPassword);
    this.password = hashedPassword;
    next();
  } catch (error) {
    console.log('IS THERE ANY ERROR', error);
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
