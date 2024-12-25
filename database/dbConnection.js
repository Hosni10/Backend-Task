import mongoose from 'mongoose'

export const dbConnection = function(){
    mongoose.connect('mongodb://127.0.0.1:27018/task')
   .then(() => console.log('Connected to Database')).catch((err)=>{
    console.log('Failed to connect to Database:', err)
   })
}