import express from 'express'
const app =express()
import { welcom } from './welcom'

app.get('/',(req,res)=>{
    res.send(welcom)
})



app.listen(4000,()=>{
    console.log('Server is running at port 4000...')
})