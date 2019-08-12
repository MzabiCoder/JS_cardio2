const express=require('express')
const router=express.Router()
const fetch=require('node-fetch')

router.get('/:platform/:gamerid',async (req,res)=>{
  const {gamerid,platform}=req.params
       try {
           const headers={
               'TRN_Api_Key':process.env.API_KEY
           }
           const res=await fetch(`${process.env.URL}/profile/${platform}/${gamerid}`,{headers})
           const data = await res.json()
           res.json(data)
     } catch (error) {
         console.log(error)
         res.status(500).json({
             message:'Server error'
         })
     }
   })

   module.exports=router