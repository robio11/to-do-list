import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
// import User from '../models/User.js';

const router = express.Router();

// router.post('/',async (req,res) => {
//     const savedUser = new User (req.body)

//     try{
//         const savedUser = await newUser.save()
//         res.status(200).json(savedUser)
//     }catch(err){
//         res.status(500).json(err)
//     }
// })

router.put('/:id', updateUser,verifyUser);

router.delete('/:id', deleteUser,verifyUser);

router.get('/:id', getUser,verifyUser);

router.get('/', getUsers,verifyAdmin);

export default router;