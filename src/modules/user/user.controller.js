import userModel from './../../../database/models/user.model.js'
import {Op} from 'sequelize'

export const  SignUp = async(req,res)=>{
await userModel.create(req.body)
res.send({message : 'success'})
}

export const  SignIn = async(req,res)=>{
    let {email , password} = req.body
    const users = await userModel.findAll({
        where : {
            email : email,
            password : password
        }
    });
    res.send({message : 'success' , users })
    }

export const updateUser = async(req,res)=>{
    let {id} = req.params
    let {name , email , age , password} = req.body
    const updatedUser = await userModel.update({name : `${name}` , email : `${email}` , age : age , password : `${password}`},{
        where : {
            id : id
        }
    })
    res.send({message : 'success' , updateUser})
}    

export const deleteUser = async(req,res)=>{
    let {id} = req.params
    const deletedUser = await userModel.destroy({
        where :  {
            id : id
        }
    })    
    res.send({message : 'success'})
}

export const  getUsers = async(req,res)=>{
    const users = await userModel.findAll();
    res.send({message : 'success' , users })
}


export const  getUserslike = async(req,res)=>{
    const SearchUsersName = await userModel.findAll({
        where : {
            name : {
                [Op.like] : 'a%' 
            },
            age : {
                [Op.lt] : 30
            }
        }
    })
    res.send({message : 'success' , SearchUsersName })
    
}

export const  getUsersage = async(req,res)=>{
    const SearchUsersAge = await userModel.findAll({
        attributes : {
        [Op.between] : [20,30]
        }
    })
    res.send({message : 'success' , SearchUsersAge })
}

export const  getOldestUser = async(req,res)=>{
    const OldestUser = await userModel.findAll({
        order:[['age', 'DESC']],
        limit: 3,
    })
    res.send({message : 'success' , OldestUser })
}

export const  SearchUsers = async(req,res)=>{
    let {id} = req.body
    const OldestUser = await userModel.findAll({
        where : {
        id : id
        }
    })
    res.send({message : 'success' , OldestUser })
}




