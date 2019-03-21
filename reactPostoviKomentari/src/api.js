const serverUrl = "http://localhost:3001";
// u package json pogledati konfiguraciju
// koristimo -p 3001, da bi se pokretalo na tom portu, umesto na default 3000, koji vec react server zauzima

async function GetPosts() {
  const responsePosts = await fetch(`${serverUrl}/posts`);
  const posts = await responsePosts.json();
  return posts;
}

async function GetAuthorById(id) {
  const responsePosts = await fetch(`${serverUrl}/authors/${id}`);
  const author = await responsePosts.json();
  return author;
}

async function GetCommentsByPostId(id) {
  const responsePosts = await fetch(`${serverUrl}/comments/?postId=${id}`);
  const comments = await responsePosts.json();
  return comments;
}

export { GetPosts, GetAuthorById, GetCommentsByPostId };
