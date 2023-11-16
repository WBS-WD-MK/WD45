const ChatFrame = ({ children }) => {
  return (
    <>
      <div className="iphone">
        <img src={'./assets/iphone6'} alt="IPhone 6" />
        <div className="border">
          <div className="responsive-html5-chat">
            <form className="chat">
              <div className="messages">
                <div className="message">
                  <div className="fromThem">
                    <p>
                      Hey hey! I got a cute scarf this time around. What did you get from your
                      secret santa?
                    </p>
                  </div>
                  {children}
                </div>
              </div>
              <input type="text" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatFrame;
