const Post = require("../models/post");

const createPost = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.id;

  const post = new Post({
    userId,
    title,
    description,
  });

  post
    .save()
    .then((response) => {
      res.json({
        message: "post is created",
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
};

const getPost = async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.id });
    res.json({
      message: "reterived post",
      posts,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const updatePost = async (req, res) => {
  const { postId, title, description } = req.body;
  const post = await Post.findOne({ _id: postId });

  post.title = title || post.title;
  post.description = description || post.description;

  post
    .save()
    .then((data) => {
      res.json({
        message: "post is updated",
        updatedPost: data,
      });
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
};

const deletePost = async (req, res) => {
  const postId = req.body.postId;
  Post.deleteOne({ _id: postId })
    .then((data) => {
      res.json({
        message: "post id deleted",
        deletedPost: data,
      });
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
};

module.exports = {
  createPost,
  getPost,
  updatePost,
  deletePost,
};
