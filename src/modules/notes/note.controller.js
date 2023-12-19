import noteModel from './../../../database/models/note.model.js'
import userModel from './../../../database/models/user.model.js'
// add note
export const addNote = async(req,res)=>{
    try{
    let checkuser = await userModel.findOne({
        where :{
            id : req.body.userId
        }
    })
    if (!checkuser){
    res.json({message : 'user not found'})
    }else {
    await noteModel.create(req.body)
    res.send({message : 'success'})
    }
}catch(err){
res.send({message :"error",errorMessage:err.message})
}}

//delete note
export const deleteNote = async(req,res)=>{
    const {id} = req.params
    try{
    let checkuser = await userModel.findOne({
        where :{
            id : req.body.userId
        }
    })
    if (!checkuser){
    res.json({message : 'user not have premetion'})
    }else {
    await noteModel.destroy({
        where :{
            id : id
        } 
    })
    res.send({message : 'success'})
    }
}catch(err){
res.send({message :"error",errorMessage:err.message})
}}


// get all notes 
export const getNotes = async(req,res)=>{
    const allNotes =await noteModel.findAll()
    res.send({message : 'success',allNotes})
}
//update Note
export const updateNote = async(req,res)=>{
    const {id} = req.params
    try{
    let checkuser = await userModel.findOne({
        where :{
            id : req.body.userId
        }
    })
    if (!checkuser){
    res.json({message : 'user not have premetion'})
    }else {
    await noteModel.update(req.body,{
        where : {
            id : id
        }
    })
    res.send({message : 'success'})
    }
}catch(err){
res.send({message :"error",errorMessage:err.message})
}}

//get all notes with their owners informaion
export const getNoteswithown = async(req,res)=>{
    const notesWithOwners = await noteModel.findAll({
        include: [{
        model: userModel,
        attributes: ['id', 'name', 'email'],
        }]
    });
    res.send({message : 'success',notesWithOwners})
}
