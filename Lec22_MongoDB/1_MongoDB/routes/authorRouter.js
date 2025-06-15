import express from 'express'
import {addAuthor, getAuthor} from '../controllers/authorController.js'

const router=express.Router();

router.post('/add-author',addAuthor)
router.get('/get-author',getAuthor)

export default router
