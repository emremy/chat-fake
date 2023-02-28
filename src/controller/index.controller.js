import { userInfo } from "../socketProcess.js";
export const indexHandler = (req, res) => {
  let UUID;
  if (req.query.i) {
    UUID = req.query.i;
  } else {
    UUID = Math.round(Math.random() * 10000000);
    return res.redirect("/?i=" + UUID);
  }
  return res.render("index/index.pug", {
    title: "TEST",
    id: UUID,
    userMessages: userInfo.messages,
  });
};
