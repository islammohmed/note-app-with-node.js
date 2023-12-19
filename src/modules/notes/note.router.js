import express from 'express'
import {addNote, deleteNote, getNotes, getNoteswithown, updateNote} from './note.controller.js'
const noteRouter = express.Router();

noteRouter.post('/addNote',addNote)
noteRouter.delete('/deleteNote/:id',deleteNote)
noteRouter.get('/getNotes',getNotes).get('/getNoteswithown',getNoteswithown)
noteRouter.put('/updateNote/:id',updateNote)
export default noteRouter