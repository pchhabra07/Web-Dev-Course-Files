import mongoose, {Schema} from 'mongoose'

const authorSchema=new Schema({
    name: {type:String, required: true},
    age: {type:Number},
    books: [{type:Schema.Types.ObjectId, ref:'Books'}]
})

export default mongoose.model('Authors',authorSchema)
