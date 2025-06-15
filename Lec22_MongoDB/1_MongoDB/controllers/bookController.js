import authorsModel from '../models/authors.js'
import booksModel from '../models/books.js'

async function addBook(req,res) {
    let {name,year,author}=req.body
    if(!name || !author){
        res.status(400).json({message:'Name and Author are required'})
    }

    try{
        let authorData=await authorsModel.findOne({name:author})
        if(!authorData){
            authorData=await authorsModel.create({name:author,})
        }

        let bookData=await booksModel.insertOne({name,year,author:authorData._id})

        if(authorData.books){
            authorData.books.push(bookData._id)
        }
        else{
            authorData.books=[bookData._id]
        }

        await authorData.save()

        res.status(201).json({message:'Book added successfully',book: bookData})
    }
    catch(err){
        res.status(500).json({message:'Error adding book',error: err.message})
    }
}

async function getBook(req,res) {
    //Controller Function Body
    const {name}=req.query;
    if(!name){
        return res.status(400).json({message:'Name is required'})
    }

    try{
        let bookData=await booksModel.findOne({name})
        if(!bookData){
            return res.status(400).json({message:'Book does not exist in the database.'})
        }
        else{
            //Converts object id to actual object as saved in the database
            bookData=await bookData.populate('author');
            return res.status(200).json({book:bookData,message:'Book found'})
        }
    }
    catch(err){
        return res.status(500).json({message:`Internal Server Error: ${err}`})
    }
}

export {addBook, getBook};
