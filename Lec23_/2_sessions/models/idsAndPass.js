import mongoose, {Schema} from 'mongoose'

const idsAndPassSchema=new Schema({
    username:{type:String, unique:true, required:true},
    password:{type:String, required:true}
})

export default mongoose.model('idsAndPass',idsAndPassSchema)