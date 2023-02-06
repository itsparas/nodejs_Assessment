const express = require("express");
const connectDB = require("./config/db");

const userRouter = require("./routes/manageUser");
const postRouter = require("./routes/managePost");

const app = express();

app.use(express.json());

connectDB();

app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(3000, () => {
  console.log("server is runing at port 3000");
});
