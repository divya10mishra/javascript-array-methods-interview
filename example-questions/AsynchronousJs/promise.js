// async promise with error handling

function square(num){
    let promise = new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(typeof num !=='number'){
              reject(new Error('Argument should be number'))
            }
            let result = num*num;
            resolve(result)
        },1000)
      
    })
    return promise;
}
square(8)
.then(value => {
    console.log('onfullfilment: '+value)
}
    ,reason => {
        console.log('onrejection: '+reason)
    })