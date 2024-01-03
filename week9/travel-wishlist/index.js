const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator');
app.use(express.json());
let countries = [
  {
    id: 1,
    name: 'Bhutan',
    alpha2Code: 'BT',
    alpha3Code: 'BTN',
    visited: false,
  },
  {
    id: 2,
    name: 'Turkey',
    alpha2Code: 'TR',
    alpha3Code: 'CUR',
    visited: true,
  },
  {
    id: 3,
    name: 'Germany',
    alpha2Code: 'DE',
    alpha3Code: 'DEU',
    visited: true,
  },
  {
    id: 4,
    name: 'Egypt',
    alpha2Code: 'EG',
    alpha3Code: 'EGY',
    visited: true,
  },
  {
    id: 5,
    name: 'France',
    alpha2Code: 'FR',
    alpha3Code: 'FRA',
    visited: false,
  },
];

app.get('/api/countries', (req, res) => {
  const sortedCountries = [...countries];
  if (req.query.sort === 'true') {
    sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
    res.json(sortedCountries);
  } else {
    res.json(countries);
  }
});
app.get('/api/countries/:code', (req, res) => {
  const code = req.params.code.toLowerCase();
  const country = countries.find(
    c => c.alpha2Code.toLowerCase() === code || c.alpha3Code.toLowerCase() === code,
  );
  if (!country) {
    res.status(404).json({ error: 'Country not found!' });
  } else {
    res.json(country);
  }
});
const validateCountry = [
  body('name').trim().notEmpty(),
  body('alpha2Code').trim().isLength({ min: 2, max: 2 }),
  body('alpha3Code').trim().isLength({ min: 3, max: 3 }),
  (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
      const { name, alpha2Code, alpha3Code } = req.body;
      if (
        countries.find(
          country => country.alpha2Code === alpha2Code || country.alpha3Code === alpha3Code,
        )
      ) {
        res.status(400).json({ error: 'Country is already in the list' });
      } else {
        req.country = { ...req.body, id: countries.length + 1, visited: false };
        next();
      }
    }
  },
];
app.post('/api/countries', validateCountry, (req, res) => {
  countries.push(req.country);
  res.status(201).json(req.country);
});
app.put('/api/countries/:code', validateCountry, (req, res) => {
  const code = req.params.code.toLowerCase();
  let country = {};
  countries = countries.map(c => {
    if (c.alpha2Code.toLowerCase() === code || c.alpha3Code.toLowerCase() === code) {
      country = { ...c, ...req.body };
      return country;
    } else {
      return c;
    }
  });
  res.json(country);
});
app.delete('/api/countries/:code', (req, res) => {
  const code = req.params.code.toLowerCase();
  const country = countries.find(
    c => c.alpha2Code.toLowerCase() === code || c.alpha3Code.toLowerCase() === code,
  );
  if (!country) {
    res.status(404).json({ error: 'Country not found!' });
  } else {
    country.visited = !country.visited;
    res.json(country);
  }
});

app.listen(4000, () => {
  console.log('ok');
});
