import { Schema ,model} from "mongoose";
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email:{type:String,require:true,unique:true},
    password: { type: String, required: true },
    role: { type: String, enum: ['admin','member'], required: true }, 
})
const userModel = model('User',userSchema);
export default userModel;