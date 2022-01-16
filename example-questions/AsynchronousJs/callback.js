// error handling with async callback,'error first callback'

function square(num,callback){
  setTimeout(()=>{
      if(typeof num !== 'number'){
          callback(new Error('Argument should be number'));
          return;
      }
    let result = num*num;
    callback(null,result);
  },2000)
}

square('divya',function (error,result){
    if(error!==null){
        console.log(String(error))
    }
    console.log(result)
})
//output: Error:Argument should be number

square(8,function (error,result){
    if(error!==null){
        console.log(String(error))
    }
    console.log(result)
})
//output: 64