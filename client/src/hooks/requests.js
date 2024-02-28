//const API_URL = 'http://localhost:8000';




//Some functionailty for maybe a login page
// async function httpCreateNewUser(info){
//     try {
//         let res = await fetch(`${API_URL}/user/create`, {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(info),
//       });
//       console.log('CRAETING NEW USER', res);
//       return res;
//     } catch(err) {
//       return {
//         ok: false,
//       };
//     }
// }

// async function httpLoginUser(info){
//    try{
//     const response = await fetch(`${API_URL}/user/login`, {
//         method: "post",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(info)
//     });
//     let userJSON = await response.json();
//     console.log('HTTP RETURNED USER', userJSON)
//     return userJSON;
//    } catch(err){
//     return {
//       ok: false,
//     };
//    }
// }

