import express from 'express'
import auth from '../middleware/authMiddleware.js'
import userModel from '../models/userModel.js';


const userRouter = express.Router();
userRouter.get('/',auth,async(req,res)=>{
    try {
            const users = await userModel.find();
            res.json(users);
          } catch (err) {
            console.error('Error fetching users:', err);
            res.status(500).json({ message: 'Server Error' });
          }
})
export default userRouter;