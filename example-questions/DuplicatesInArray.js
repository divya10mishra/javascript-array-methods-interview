//  Return unique elements only or remove duplicates

const array = [20,30,30,40,50,60,60,60];
 const aar3= array.filter((ele,index)=>{
    return array.indexOf(ele)===index
  })
console.log(aar3);
//output - [20,30,40,50,60]

//------------------------------------------------------------------------


// Return elemnt which occured once/ elements don't have any duplicates

const arr = [3,4,6,4,3]
const uniqueElements = arr.reduce((acc,ele)=>{
  acc[ele] = (acc[ele]||0)+1
  return acc
},{})
//console.log(uniqueElements,"uniqueElements"). output:{"3":2,"4":2,"6":1}

//if initial is not set to object. output:3(count of unique elements) 

const noRepeat = Object.keys(uniqueElements).find(key => uniqueElements[key] === 1)
console.log(noRepeat)//output:6 (elemts occured once)
