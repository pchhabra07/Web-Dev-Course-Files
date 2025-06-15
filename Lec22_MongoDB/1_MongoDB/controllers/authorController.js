import authorsModel from '../models/authors.js'
import booksModel from '../models/books.js'

async function addAuthor(req,res) {
    let {name,age,books}=req.body;
    if(!name){
        res.status(400).json({message:'Name is required'})
    }

    try {
        let authorData=await authorsModel.findOne({name:name})
        if(!authorData){
            authorData=await authorsModel.create({name,age})

        }

        books=books.map(book=>{
            return{
                ...book,
                author:authorData._id
            }
        })

        let booksData=await booksModel.insertMany(books)

        let bookIds=booksData.map(book=>book._id)
        authorData.books=[...authorData.books, ...bookIds]

        authorData=await authorData.save()
        res.status(201).json({message:'Author added successfully',authorData})

    } catch (error) {
        res.status(500).json({message:`Internal Server Error: ${error}`})
    }
}

async function getAuthor(req,res) {
    let {name} = req.query;

    if(!name){
        res.status(400).json({message: 'Name is required'});
    }
    try {
        let authorData = await authorsModel.findOne({name: name}).populate('books');
        if (!authorData) {
            return res.status(404).json({message: 'Author not found'});
        }

        res.status(200).json({message: 'Author found', authorData});    
    } catch (error) {
        res.status(500).json({message: 'Error fetching author', error: error.message});
    }
}

export {addAuthor, getAuthor};
