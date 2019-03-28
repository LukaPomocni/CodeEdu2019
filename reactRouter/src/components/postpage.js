import React, { Component } from "react";

import { GetPost } from "../api";
import Post from "./post";

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      post: undefined
    };
  }

  componentDidMount() {
    (async () => {
      // this.props.match.params je objekat koji cuva sve parametre koji su prosledjeni iz putanje
      let postId = this.props.match.params.postId;
      this.setState({
        post: await GetPost(postId)
      });
    })();
  }

  render() {
    // Inicijalno je undefined (konstruktor)
    if (this.state.post === undefined) return <div>Ucitava se...</div>;

    // U api.js na 404 vraca null
    if (this.state.post === null) return <div>Ne postoji</div>;

    return (
      <div>
        Detaljan opis naseg posta
        <Post post={this.state.post} />
      </div>
    );
  }
}

export default PostPage;
