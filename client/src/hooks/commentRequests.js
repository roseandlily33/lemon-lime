const API_URL = process.env.REACT_APP_API_URL;
// prettier-ignore
// POST: Allows a user to comment on a recipe
async function httpAddComment(comment) {
  try {
    return await fetch(`${API_URL}/comments/add`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
  } catch (err) {
    return err;
  }
}

//PUT: Edit a comment from the user
async function httpEditComment(id, comment) {
  try {
    return await fetch(`${API_URL}/comments/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
  } catch (err) {
    return err;
  }
}

// DELETE: Deletes a comment
async function httpDeleteComment(id) {
  try {
    return await fetch(`${API_URL}/comments/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return err;
  }
}

export { httpAddComment, httpDeleteComment, httpEditComment };
