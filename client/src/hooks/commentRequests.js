const API_URL = 'http://localhost:8000';

//Allows a user to comment on a recipe
async function httpAddComment(comment){
    console.log('Sending', comment);
    try{
      return await fetch(`${API_URL}/comments/add`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment)
      })
    } catch(err){
      return {
        ok: false,
      };
    }
  }
  async function httpDeleteComment(id){
    try{
      console.log('The deleting id for the HTTP', id);
      return await fetch(`${API_URL}/comments/${id}`, {
        method: 'delete',
        headers: {
          "Content-Type": "application/json",
        },
      })
    }catch(err){
      return {
        ok: false,
      };
    }
  }
  
  async function httpGetAllCommentsForRecipe(id){
    try{
      const response = await fetch(`${API_URL}/comments/${id}`);
      let allComments = await response.json();
      return allComments;
    }catch(err){
      return {
        ok: false,
      };
    }
  }

  

  export {
    httpAddComment,
    httpGetAllCommentsForRecipe,
    httpDeleteComment,
  }