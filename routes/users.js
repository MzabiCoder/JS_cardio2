const express=require('express')
const router=express.Router()
const app=express();

router.get('/login',(req,res)=>res.render('login'))

router.get('/register',(req,res)=>res.render('register'))



// const PORT=process.env.PORT || 3000
// app.listen(PORT,()=>{
//   console.log(`app listening on port ${PORT}...`)
// })

module.exports=router