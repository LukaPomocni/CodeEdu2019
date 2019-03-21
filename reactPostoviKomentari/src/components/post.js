import React, { Component } from "react";
import Comment from "./comment";

import { GetAuthorById, GetCommentsByPostId } from "../api";

class Post extends Component {
  constructor() {
    super();
    this.state = { author: undefined, comments: [] };
  }

  // Ova komponenta se zove kada se element veze za virtualno DOM stablo, odnosno kad bude pozvana od svog roditelja
  componentDidMount() {
    // Funkcija zove samu sebe, koristimo je da koristimo awaitove unutra
    (async () => {
      let author = await GetAuthorById(this.props.post.authorId);
      let comments = await GetCommentsByPostId(this.props.post.id);

      // Set state zove render
      this.setState({ author: author, comments: comments });
    })();
  }

  render() {
    // NE PISATI SET STATE OVDE!
    function printAuthor(author) {
      if (author) return <div>Author: {author.name}</div>;
      else return <React.Fragment />;
    }

    function printComments(comments) {
      if (comments)
        return (
          <div>
            {" "}
            {comments.map(comment => (
              <Comment key={comment.id} comment={comment.body} />
            ))}
          </div>
        );
      // React fragment je prazan element -> u htmlu nece praviti elemente
      else return <React.Fragment />;
    }

    return (
      <div className="post">
        <div>Id: {this.props.post.id}</div>
        <div>Title: {this.props.post.title}</div>
        {printAuthor(this.state.author)}
        {printComments(this.state.comments)}
        <hr />
      </div>
    );
  }
}

export default Post;
