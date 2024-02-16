const express=require('express')
const userRouter=express()

const userController=require('../controller/userController')


userRouter.get('/',userController.loadHome)




module.exports=userRouter