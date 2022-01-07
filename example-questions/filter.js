//  non-repetative elements using filter-----------

const array = [20,30,30,40,50,60,60,60];
 const aar3= array.filter((ele,index)=>{
    return array.indexOf(ele)===index
  })
console.log(aar3);