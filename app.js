//import { setupMaster } from "cluster";


// reerange=(input)=>{

    
//     let res = input.split('').sort((a, b) => a > b)
//     let res2=[];
//     //let res3=[];

//     res.forEach((val,i) => {
      
//        if (res2.indexOf(val)==-1) res2.push(val) 
         
//       })

//       //console.log(res3);
//     }


//     reerange('aaabc'); 


// let val=-1234

//  //let tab=val.toString()

//  console.log(parseInt(val.toString().split('').reverse().join(''))*Math.sign(val))

// str=

//  let tab2=str.toLowerCase().split(' ')
//  //console.log(tab);
//     // for (i=0;i<tab.length;i++) {
//     //   tab[i]=tab[i].charAt(0).toUpperCase() + tab[i].slice(1);
//     // }


//     test=(str)=>{
//      return str
//       .toLowerCase()
//       .split(' ')
//       .map(tab=>tab[0].toUpperCase() + tab.substr(1));

//      //console.log(tab2);
//     }


// console.log(test('i love javsscript'))

//  change=(str)=>{

//    let tab=str.split('')
//    let obj={}
//    let maxv=0;
//    let maxn='';

//     for (let val of tab){
//       if (obj[val]){
//         obj[val]++
//       }else{
//         obj[val]=1
//       }
//     }

//      //return obj

//       for (let char in obj){
//         if (obj[char]> maxv){
//            maxv=obj[char]
//            maxn=char
//         }
        
//       }

//       return maxv
//  }

  //console.log(change('javascripta'))




  //let str='i love javascript more than others'

  //  test=(str)=>{
  //   let tab=str.toLowerCase().match(/[a-z0-9]+/g)

     //console.log(tab);
 

  //     const sort=tab.sort((a,b)=>b.length-a.length)

  //    // return sort[0]

  //     const filter=sort.filter(word=>word.length === sort[0].length)

  //    filter.length===1 ?  console.log(filter[0]) : console.log(filter)
       

  //  }

  // //   console.log(test('i love javascriptsldkjfglsdjkglfs abcdefghig than others klmnopqrst'))
   

  //  chunk=(tab,ind)=>{
    
  //    let res=[]
  //    let i=0

   
  //   while(i<=tab.length-1){

  //    res.push(tab.slice(i,i+ind))
  //    i+=ind
  //   }

  //   //console.log(res);

  //    let res2=res.reduce((a,b)=>{

  //     return a.concat(b)
  //    })

  //     console.log(res2);
   


  //  }

  //  chunk([1,2,3,4,5,6,7,8,9,10,11,9],3)



// isnagram=(str1,str2)=>{

//   //   let tab2=str2.toLowerCase().match(/[a-z,' ']+/g)
//   //   let tab1=str1.toLowerCase().match(/[a-z,' ']+/g)

//   //  console.log(tab1.sort())
//   //  console.log(tab2.sort())
   


   

// }


// isnagram('elbow','Below')

// test=(...rest)=>{

//  //console.log(tab.toString().split('').reduce((a,b)=>a+b))
//  //let args=Array.prototype.sice.call(arguments)

//  return rest.reduce((a,b)=>a+b);

  

// }


// // console.log(test(4,4,4,4))


// // seek=(tab,...rest)=>{
// //  //console.log(tab);
// //  //console.log(rest);


// //      return tab.filter(val=>(rest.indexOf(val) === -1))
     

// // }
// // //seek([2,3,4,6,6,'hello'],2,6)

// // console.log(seek([2,3,4,6,6,'hello'],2,6,'hello'))



// missin=(str)=>{

//   let compare= str.charCodeAt(0);
//   //console.log(missing)

//   let missing;

//   str.split('').map((char,i)=>{
//     if (char.charCodeAt(0) === compare){
//       ++compare
//     }else {
//       missing=String.fromCharCode(compare)
//     }
//   })


//   return missing
// }


// console.log(missin('efgijkl'))



// const express=require('express')
// const jwt=require('jsonwebtoken')

// const app=express();

// app.get('/api',(req,res)=>{
//   res.json({
//     message:'welcom to the api'
//   })
// })


// app.post('/api/posts',verify,(req,res)=>{

//   jwt.verify(req.token,'mamama',(err,data)=>{
//     if (err){
//       res.sendStatus(403)
//     }else{
//       res.json({
//         message:'post created...',
//         data
//       })
//     }
//   })

// })


// app.post('/api/login',(req,res)=>{
// // mock user
// const user={
//   id:1,
//   username:'brad@gmail'
// }
//   jwt.sign({user},'mamama',(er,token)=>{
//     res.json({
//       token
//     })
//   })
// })


// // verify token

// function verify(req,res,next){

//   const bearerHeader=req.headers['authorization']
//   if (typeof bearerHeader !== 'undefined' ){
//      const bearer=bearerHeader.split(' ')
//      const gettoken =bearer[1]
//      req.token=gettoken

//      next()

//   }else{
//    // res.json('sir t9awed');
//    res.sendStatus(403)
//   }

// }
// app.listen(3000,()=>{
//   console.log(`server is listenning on port 3000...`)
// })


//    const express=require('express')
//   //const path=require('path')
//   //const cookieParser=require('cookie-parser')
//   const bodyParser=require('body-parser')
//   //const exphs=require('express-handlebars')
//   const validator=require('express-validator')
//   const flas=require('connect-flash')
//    const session=require('express-session')
//    const passport=require('passport')
//    const LocalStrategy=require('passport-local').Strategy;
//    const mongo=require('mongodb')
//    const mongoose=require('mongoose')
//    const expressLayouts=require('express-ejs-layouts')
//    //const key=require('./mongokey')
//    const app=express();
//    const db=mongoose.connection
//     mongoose.connect('mongodb://nabil:nabil1982@cluster1-shard-00-00-clmu9.mongodb.net:27017,cluster1-shard-00-01-clmu9.mongodb.net:27017,cluster1-shard-00-02-clmu9.mongodb.net:27017/test?ssl=true&replicaSet=Cluster1-shard-0&authSource=admin&retryWrites=true')


//     // const db=require('./mongokey').mongoKEY
//     // mongoose.connect(db,{useNewUrlParser:true})
//     // .then(()=>console.log('mongo db connected'))
//     // .catch(er=>console.log(er))
   
  

//  app.use(expressLayouts)
//  app.set('view engine','ejs')

//   app.use('/',require('./routes/index'))
//   app.use('/users',require('./routes/users'))


//   mongoose.connection.once('open',()=>{
//     console.log('connected to mongoATlAS....')
//   })
 


//  const PORT=process.env.PORT || 3000
//   app.listen(PORT,()=>{
//     console.log(`app listening on port ${PORT}...`)
//   })



//  const fs=require('fs')
//  const path=require('path')

//   fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
   
//     if (err) throw err

//     console.log(data)
//   })



// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus())


// console.log(os.freemem())
// console.log(os.totalmem())


// console.log(os.homedir())

// const url=require('url')

// const myUrl=new URL('http://nabilfannane?id=100&status=active')

// console.log(myUrl.search)



// http.createServer((req,res)=>{

//   res.write('hellow worl')
//   res.end()

// }).listen(5000,()=>{
//   console.log('server running...')
// })




//  function sum(){

  //return  rest.reduce((a,b)=>a+b);

  //return arguments;

//   let tab=Array.from(arguments)
//   let total=0;

//    tab.forEach(val=>{
//      total+=val
//    })
//  return total;

//  }



  



// function sum(tab,...ser){
// //  console.log(tab)
// //  console.log(ser)

//  return tab.filter(val=>{
  
//     return ser.indexOf(val)===-1

//   })



// }

// function sum(str){
//  let compare=str.charCodeAt(0)
//  let missing;
 

//    str.split('').map((char,i)=>{
//    if (str.charCodeAt(i) == compare){
//      compare++
//    }
//    else {
//       missing=String.fromCharCode(compare)
//    }

   
//    })

//    return missing
// }

// console.log(sum('abcdef'))

//  //console.log(indice)


tab=[50,60,60,45,71]

let even=0
let odd=0;
 tab.forEach(val => val % 2 == 0 ?  even+=val : odd+=val );


 console.log([even,odd])