// //import { setupMaster } from "cluster";


// // reerange=(input)=>{


// //     let res = input.split('').sort((a, b) => a > b)
// //     let res2=[];
// //     //let res3=[];

// //     res.forEach((val,i) => {

// //        if (res2.indexOf(val)==-1) res2.push(val) 

// //       })

// //       //console.log(res3);
// //     }


// //     reerange('aaabc'); 


// // let val=-1234

// //  //let tab=val.toString()

// //  console.log(parseInt(val.toString().split('').reverse().join(''))*Math.sign(val))

// // str=

// //  let tab2=str.toLowerCase().split(' ')
// //  //console.log(tab);
// //     // for (i=0;i<tab.length;i++) {
// //     //   tab[i]=tab[i].charAt(0).toUpperCase() + tab[i].slice(1);
// //     // }


// //     test=(str)=>{
// //      return str
// //       .toLowerCase()
// //       .split(' ')
// //       .map(tab=>tab[0].toUpperCase() + tab.substr(1));

// //      //console.log(tab2);
// //     }


// // console.log(test('i love javsscript'))

// //  change=(str)=>{

// //    let tab=str.split('')
// //    let obj={}
// //    let maxv=0;
// //    let maxn='';

// //     for (let val of tab){
// //       if (obj[val]){
// //         obj[val]++
// //       }else{
// //         obj[val]=1
// //       }
// //     }

// //      //return obj

// //       for (let char in obj){
// //         if (obj[char]> maxv){
// //            maxv=obj[char]
// //            maxn=char
// //         }

// //       }

// //       return maxv
// //  }

//   //console.log(change('javascripta'))




//   //let str='i love javascript more than others'

//   //  test=(str)=>{
//   //   let tab=str.toLowerCase().match(/[a-z0-9]+/g)

//      //console.log(tab);


//   //     const sort=tab.sort((a,b)=>b.length-a.length)

//   //    // return sort[0]

//   //     const filter=sort.filter(word=>word.length === sort[0].length)

//   //    filter.length===1 ?  console.log(filter[0]) : console.log(filter)


//   //  }

//   // //   console.log(test('i love javascriptsldkjfglsdjkglfs abcdefghig than others klmnopqrst'))


//   //  chunk=(tab,ind)=>{

//   //    let res=[]
//   //    let i=0


//   //   while(i<=tab.length-1){

//   //    res.push(tab.slice(i,i+ind))
//   //    i+=ind
//   //   }

//   //   //console.log(res);

//   //    let res2=res.reduce((a,b)=>{

//   //     return a.concat(b)
//   //    })

//   //     console.log(res2);



//   //  }

//   //  chunk([1,2,3,4,5,6,7,8,9,10,11,9],3)



// // isnagram=(str1,str2)=>{

// //   //   let tab2=str2.toLowerCase().match(/[a-z,' ']+/g)
// //   //   let tab1=str1.toLowerCase().match(/[a-z,' ']+/g)

// //   //  console.log(tab1.sort())
// //   //  console.log(tab2.sort())





// // }


// // isnagram('elbow','Below')

// // test=(...rest)=>{

// //  //console.log(tab.toString().split('').reduce((a,b)=>a+b))
// //  //let args=Array.prototype.sice.call(arguments)

// //  return rest.reduce((a,b)=>a+b);



// // }


// // // console.log(test(4,4,4,4))


// // // seek=(tab,...rest)=>{
// // //  //console.log(tab);
// // //  //console.log(rest);


// // //      return tab.filter(val=>(rest.indexOf(val) === -1))


// // // }
// // // //seek([2,3,4,6,6,'hello'],2,6)

// // // console.log(seek([2,3,4,6,6,'hello'],2,6,'hello'))



// // missin=(str)=>{

// //   let compare= str.charCodeAt(0);
// //   //console.log(missing)

// //   let missing;

// //   str.split('').map((char,i)=>{
// //     if (char.charCodeAt(0) === compare){
// //       ++compare
// //     }else {
// //       missing=String.fromCharCode(compare)
// //     }
// //   })


// //   return missing
// // }


// // console.log(missin('efgijkl'))



//const express = require('express')
// // const jwt=require('jsonwebtoken')

// // const app=express();

// // app.get('/api',(req,res)=>{
// //   res.json({
// //     message:'welcom to the api'
// //   })
// // })


// // app.post('/api/posts',verify,(req,res)=>{

// //   jwt.verify(req.token,'mamama',(err,data)=>{
// //     if (err){
// //       res.sendStatus(403)
// //     }else{
// //       res.json({
// //         message:'post created...',
// //         data
// //       })
// //     }
// //   })

// // })


// // app.post('/api/login',(req,res)=>{
// // // mock user
// // const user={
// //   id:1,
// //   username:'brad@gmail'
// // }
// //   jwt.sign({user},'mamama',(er,token)=>{
// //     res.json({
// //       token
// //     })
// //   })
// // })


// // // verify token

// // function verify(req,res,next){

// //   const bearerHeader=req.headers['authorization']
// //   if (typeof bearerHeader !== 'undefined' ){
// //      const bearer=bearerHeader.split(' ')
// //      const gettoken =bearer[1]
// //      req.token=gettoken

// //      next()

// //   }else{
// //    // res.json('sir t9awed');
// //    res.sendStatus(403)
// //   }

// // }
// // app.listen(3000,()=>{
// //   console.log(`server is listenning on port 3000...`)
// // })


// //    const express=require('express')
// //   //const path=require('path')
// //   //const cookieParser=require('cookie-parser')
//const bodyParser = require('body-parser')


// //   //const exphs=require('express-handlebars')
// //   const validator=require('express-validator')
// //   const flas=require('connect-flash')
// //    const session=require('express-session')
// //    const passport=require('passport')
// //    const LocalStrategy=require('passport-local').Strategy;
// //    const mongo=require('mongodb')
// //    const mongoose=require('mongoose')
// //    const expressLayouts=require('express-ejs-layouts')
// //    //const key=require('./mongokey')
// //    const app=express();
// //    const db=mongoose.connection
// //     mongoose.connect('mongodb://nabil:nabil1982@cluster1-shard-00-00-clmu9.mongodb.net:27017,cluster1-shard-00-01-clmu9.mongodb.net:27017,cluster1-shard-00-02-clmu9.mongodb.net:27017/test?ssl=true&replicaSet=Cluster1-shard-0&authSource=admin&retryWrites=true')


// //     // const db=require('./mongokey').mongoKEY
// //     // mongoose.connect(db,{useNewUrlParser:true})
// //     // .then(()=>console.log('mongo db connected'))
// //     // .catch(er=>console.log(er))



// //  app.use(expressLayouts)
// //  app.set('view engine','ejs')

// //   app.use('/',require('./routes/index'))
// //   app.use('/users',require('./routes/users'))


// //   mongoose.connection.once('open',()=>{
// //     console.log('connected to mongoATlAS....')
// //   })



// //  const PORT=process.env.PORT || 3000
// //   app.listen(PORT,()=>{
// //     console.log(`app listening on port ${PORT}...`)
// //   })



// //  const fs=require('fs')
// //  const path=require('path')

// //   fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{

// //     if (err) throw err

// //     console.log(data)
// //   })



// // console.log(os.platform())
// // console.log(os.arch())
// // console.log(os.cpus())


// // console.log(os.freemem())
// // console.log(os.totalmem())


// // console.log(os.homedir())

// // const url=require('url')

// // const myUrl=new URL('http://nabilfannane?id=100&status=active')

// // console.log(myUrl.search)



// // http.createServer((req,res)=>{

// //   res.write('hellow worl')
// //   res.end()

// // }).listen(5000,()=>{
// //   console.log('server running...')
// // })




// //  function sum(){

//   //return  rest.reduce((a,b)=>a+b);

//   //return arguments;

// //   let tab=Array.from(arguments)
// //   let total=0;

// //    tab.forEach(val=>{
// //      total+=val
// //    })
// //  return total;

// //  }






//   // function capital(str){

//   //   return str
//   //   .toLowerCase()
//   //   .split(' ')
//   //   .map(char=>char = char.charAt(0).toUpperCase()+char.substring(1))
//   //   .join(' ')




//   // }




//   //  function one(str){
//   //  let obj={}
//   //  let tab=str.split('')
//   //  let max=''
//   //  let val=''

//   //     tab.forEach(el => {
//   //        if (obj[el]){
//   //          obj[el]++
//   //        }else{
//   //          obj[el]=1
//   //        }
//   //     });

//   //      for (let char in obj){
//   //        if (max<obj[char]){
//   //          max=obj[char]
//   //          val=char
//   //        }
//   //      }

//   //    console.log(max,val)

//   //  }

//   //match(/[a-z0-9]+/g) string.prototype

//   //  function  maxcar(str){

//   //    const tab=str.toLowerCase().match(/[a-z0-9]+/g)
//   //     const sorted=tab.sort((a,b)=>b.length-a.length)

//   //     const filterr=sorted.filter(val=>val.length===sorted[0].length)
//   //      if (filterr.length>1){
//   //        return filterr
//   //      }    else {
//   //        return filterr[0]
//   //      }
//   //  }

//   //  console.log(maxcar('la vie, en rlksjf asdjfghas,adjfhgadf,adkadfoij,adosa lkjghjgjhghgdgfdgfdgf')) 

//     function format(str){
//       return str.toLowerCase()    
//        .replace(/[^\w]+/g,'')
//        .split('')
//        .sort()
//        .join('')
//     }
//      const isanagram=(str1,str2)=>{

//       return format(str1)===format(str2)


//      }


//      function letterChanges(str) {

//       return str.toLowerCase().replace(/[a-z]/g, char => (
//         char == 'z' ? 'a' : String.fromCharCode(char.charCodeAt() + 1)
//       )).replace(/[aeiou]/g, vowel => vowel.toUpperCase());
//     }


//  //let str="1-2+3+13"



//   // function change(str){

//   // let tab=[]
//   // let sum=0


//   //  tab=str.split('')
//   //  //return tab.reduce((a,b)=>parseInt(a)+parseInt(b))

//   //   if ( tab.filter(val=>val=="-" || val=="+" ).length == 0 ){
//   //     return parseInt(str)
//   //   }else {

//   //     for (let i=0;i<tab.length;i++){

//   //        if (tab[i]==='+'){
//   //          sum+=parseInt(tab[i+1])
//   //        }

//   //        else if (tab[i]==='-'){
//   //         sum=sum-parseInt(tab[i+1])
//   //       } else{
//   //         sum+=parseInt(tab[i])
//   //       }

//   //     }

//   //     return sum
//   //    }

//   // }


//   // console.log(change("9+9-8"))

//   import Redux from 'redux'

//   const {createStore} = Redux
//   const initState={
//     todos:[],
//     posts:[]
//   }

//   function myreducer(state = initState,action){
// a
//     console.log(action,state)

//   }
// //   const store=createStore(myreducer)

// //   const todoAction={type:'ADD_TODO',todo:'buy milk'}

// //   store.dispatch(initState)

// const exphbs=require('express-handlebars')
// const nodemailer=require('nodemailer')
// const path=require('path')


// const app=express()
// // view engine
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// app.engine('handlebars',exphbs())
// app.set('view engine','handlebars')

// // static folder
// app.use('/public',express.static(path.join(__dirname,'public')))

// app.get('/',(req,res)=>{
//   res.render('contact')
//   //res.send('hellow ')
// })



// app.post('/send',(req,res)=>{
// //  console.log(req.body)

// const output=`
// <p>you have new contact request</p>
// <h3>Contact Details</h3>
//  <ul>
//  <li>${req.body.name}</li>
//  <li>${req.body.company}</li>
//  <li>${req.body.email}</li>
//  <li>${req.body.phone}</li>
//  </ul>
//  <h3>Message</h3>
//  <p>${req.body.message}</p>

// `
// nodemailer.createTestAccount();
//  // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "ns6617.hostgator.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'mzabi@fannane.online', // generated ethereal user
//       pass: '@5nackattacK' // generated ethereal password
//     },
//     tls:{
//       rejectUnauthorized:false
//     }
//   });

//   // setup email data with unicode symbols
//   let mailOptions = {
//     from: '"Nodemailer" <mzabi@fannane.online>', // sender address
//     to: "nabil@goadroit.com,nfannane41@gmail.com", // list of receivers
//     subject: "Hello from nodemailer", // Subject line
//     text: "Hello world?", // plain text body
//     html: output // html body
//   };

//   // send mail with defined transport object
//   let info =  transporter.sendMail(mailOptions)

//   console.log("Message sent: %s", info.messageId);
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

//   res.render('contact',{msg:"Email has been sent"})


// })


// app.listen(3000,()=>{
//   console.log('server is up running... ')
// })




// if (meeting.length == 1) {
//   if (meeting.hours < havehrs) return meeting
//   else {
//     return 'no meeting for this person'
//   }

// } else {



// const test = (rest) => {

//   //console.log(rest.toString().split('').sort((a, b) => a - b)[2])
//   let tab = rest.toString().split('').sort((a, b) => a - b)
//   let val1 = rest.toString().split('').sort((a, b) => a - b)[0];

//   console.log(tab.filter(val => val != val1)[0])


// }

// test(87351037456)


// test=(str)=>{


//   let tab=str.toLowerCase().replace(/[a-b]+/g)


// }








scene = new THREE.Scene();

// Init camera (PerspectiveCamera)
camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

renderer = new THREE.WebGLRenderer({
    antialias: true
});

// Set size (whole window)
renderer.setSize(window.innerWidth, window.innerHeight);

// Render to canvas element
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(3, 3, 3);
const material = new THREE.MeshBasicMaterial({
    color: 0x0000ff
});
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5;

const animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
}
animate();