const blightsources

// Register a function for the 'ready' event.  When it occurs, which happens only once
//   this function will get called.  This avoids getting events resulting from the
//   loading of all the game state into the API
on('ready', () => {
  const myFunc = () => {
    sendChat('Test Script', 'Hello World!');
  };

  // Register a function for the 'chat:message' event.  This event occurs for all
  //   chat messages, so it's important to filter down to just the ones you care about
  on('chat:message', (msg) => {
    const messageType = msg.type;
    const messageContent = msg.content;

    if (messageType === 'api') {
      
    }


    //  First check the type is an API message.  API messages are not show shown in chat
    //    and begin with a ! in the first character of the message.
    if (msg.type === 'api' && /^!test(\b\s|$)/i.test(msg.content)) {
      myFunc();
    }
  });
});
