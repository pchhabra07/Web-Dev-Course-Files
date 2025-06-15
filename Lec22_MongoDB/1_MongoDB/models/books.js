import mongoose,{Schema} from 'mongoose'

const booksSchema=new Schema({
    name: {type: String,required: true},
    year: {type: Number},
    author: {type: Schema.Types.ObjectId, required:true, ref:'Authors'}
})

export default mongoose.model('Books',booksSchema)
