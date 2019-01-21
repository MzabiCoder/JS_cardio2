

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


// seek=(tab,...rest)=>{
//  //console.log(tab);
//  //console.log(rest);


//      return tab.filter(val=>(rest.indexOf(val) === -1))
     

// }
// //seek([2,3,4,6,6,'hello'],2,6)

// console.log(seek([2,3,4,6,6,'hello'],2,6,'hello'))



missin=(str)=>{

  let compare= str.charCodeAt(0);
  //console.log(missing)

  let missing='';

  str.split('').map((char,i)=>{
    if (str.charCodeAt(i) === compare){
      ++compare
    }else {
      missing=String.fromCharCode(compare)
    }
  })


 // return tab
}


console.log(missin('xsllokdgsrwd'))
  