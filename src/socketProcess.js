export const userInfo = {
  users: [],
  messages: [],
};

export const socketProcess = (socketIO) => {
  socketIO.on("join", (result) => {
    if (!userInfo.users.includes(result)) {
      userInfo.users.push(result);
    }
  });
  socketIO.emit("init", userInfo.messages);
  socketIO.on("send", (result) => {
    if (userInfo.users.includes(result.id)) {
      userInfo.messages.push(result);
      socketIO.broadcast.emit("message", result);
    }
    console.log(userInfo);
  });
};
