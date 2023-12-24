import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
  id: Number,
  writer: String,
  writerImg: String,
  img: String,
  date: String,
  bgColor: String,
  lightBgColor: String,
  cat: String,
  title: String,
  desc: String,
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
