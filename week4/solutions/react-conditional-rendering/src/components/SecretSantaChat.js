import secretSantaGift from '../utils/secretSantaGift';
import ChatFrame from './ChatFrame';
import Ferrari from './Ferrari';
import NewMessage from './NewMessage';

const SecretSantaChat = () => {
  const wishlist = 'teddy';

  const gift = secretSantaGift(wishlist);

  return (
    <>
      <ChatFrame>
        <NewMessage>Hey there</NewMessage>
        <NewMessage>How are you?</NewMessage>
        {wishlist === gift ? (
          <NewMessage>I have received a {gift}</NewMessage>
        ) : (
          <NewMessage>I got a {gift}</NewMessage>
        )}
        {gift === 'ferrari' && (
          <NewMessage>
            <Ferrari />
          </NewMessage>
        )}
      </ChatFrame>
    </>
  );
};

export default SecretSantaChat;
