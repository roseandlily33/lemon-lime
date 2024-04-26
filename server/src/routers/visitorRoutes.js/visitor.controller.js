// const Recipe = require('../../models/recipes.mongo');
// const User = require('../../models/user.mongo');

// //Gets another user that user is visiting
// async function httpGetUser(req, res){
//     try{
//         let userId = req.params.id;
//         const foundUser = await User.find({_id: userId}, {
//             'authId': 0, 'email': 0, 'comments': 0, '__v': 0
//         })
//         return res.status(201).json(foundUser)
//     } catch (err){
//         return res.status(404).json({msg: 'Could not get the user'})
//     }
// }

