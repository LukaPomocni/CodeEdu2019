import React, { Component } from "react";

import Post from "./post";

import { GetPosts } from "../api";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    (async () => {
      let posts = await GetPosts();
      this.setState({ posts: posts });
    })();
  }

  render() {
    return (
      <div>
        {/* Mapiramo niz postova koji smo dobili sa servera u niz komponenti <Post> */}
        {this.state.posts.map(p => (
          <Post post={p} key={p.id} />
        ))}
      </div>
    );
  }
}

export default Posts;
