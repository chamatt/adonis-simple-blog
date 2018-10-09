"use strict";

const Post = use("App/Models/Post");

class PostController {
  async index({ view }) {
    const posts = await Post.query()
      .orderBy("created_at", "desc")
      .fetch();

    return view.render("posts.index", {
      title: "Latest Posts",
      posts: posts.toJSON()
    });
  }

  async details({ view, params }) {
    const post = await Post.find(params.id);
    return view.render("posts.details", { post });
  }

  async add({ view }) {
    return view.render("posts.add");
  }

  async store({ request, response, session }) {
    const post = new Post();
    post.title = request.input("title");
    post.body = request.input("body");

    await post.save();

    session.flash({ notification: "Post Added!" });
    return response.redirect("/posts");
  }
}

module.exports = PostController;
