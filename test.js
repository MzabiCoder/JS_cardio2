

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

 change=(str)=>{

   let tab=str.split('')
   let obj={}
   let maxv=0;
   let maxn='';

    for (let val of tab){
      if (obj[val]){
        obj[val]++
      }else{
        obj[val]=1
      }
    }

     //return obj

      for (let char in obj){
        if (obj[char]> maxv){
           maxv=obj[char]
           maxn=char
        }
        
      }

      return maxv
 }

  console.log(change('javascripta'))















  