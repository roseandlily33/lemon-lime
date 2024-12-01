import dotenv from "dotenv";
dotenv.config();
//let process;
if (!process.env.REACT_APP_API_URL) {
  throw new Error(
    "REACT_APP_API_URL is not defined in the environment variables"
  );
}

const API_URL = process.env.REACT_APP_API_URL;

//GET:  Gets all the comments for a recipe
async function httpGetAllCommentsForRecipe(id) {
  try {
    const response = await fetch(`${API_URL}/comments/${id}`);
    const allComments = await response.json();
    return allComments;
  } catch (err) {
    return err;
  }
}

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

export {
  httpAddComment,
  httpGetAllCommentsForRecipe,
  httpDeleteComment,
  httpEditComment,
};
