const createMessage = (data) => {
  if (data.message) {
    const messageBox = document.querySelector(".messagePanel > ul");
    const newMessage = document.createElement("li");
    const searchUrl = new URLSearchParams(document.location.search);
    const userId = searchUrl.get("i");
    const whoSend = data.id === userId ? "rightMessage" : "leftMessage";
    newMessage.classList = `messageBox ${whoSend}`;
    newMessage.innerText = data.message;
    const dateElement = document.createElement("p");
    dateElement.classList = "date";
    dateElement.innerText = data.date;
    newMessage.appendChild(dateElement);
    messageBox.appendChild(newMessage);
  }
};
