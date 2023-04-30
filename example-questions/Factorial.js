function factorial(n){
    let product = 1
    for(let i=n;i>=1;i--){
      product*=i
    }
    return product
  }
  
  let fact = factorial(3)
  console.log(fact,"fact")
  
 //recursion 
  function factorialRec(n){
    if(n==1){
      return n
    }
    else{
     return n*factorialRec(n-1)
    }
  }
  
  let rec = factorialRec(3)
  console.log(rec,"rec")
  