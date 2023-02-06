const express = require("express");
const authorization = require("../middleware/userAuthorization");

const {
  createPost,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/managePost");

const postRouter = express.Router();

postRouter.post("/createpost", authorization, createPost);
postRouter.post("/getpost", authorization, getPost);
postRouter.put("/updatepost", authorization, updatePost);
postRouter.delete("/deletepost", authorization, deletePost);

module.exports = postRouter;
