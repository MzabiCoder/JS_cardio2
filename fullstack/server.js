const express=require('express')
const morgan=require('morgan')
const dotenv=require('dotenv')

// load the config file
const app=express()
dotenv.config({path:'./config.env'})

// Dev Logging

if(process.env.NODE__ENV== 'development'){
    app.use(morgan())
}



app.use('/api/v1/profile',require('./routes/profile'))




const port=process.env.PORT || 5000

app.listen(5000,()=>{
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`)
})