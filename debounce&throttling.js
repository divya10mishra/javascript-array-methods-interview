// debounce
let counter = 0;
const getData = () => {
  console.log("data..", counter);
};
getData();

const debounceMagic = function (fn, delay) {
  let timer;
  return function () {
    context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, args);
    }, delay);
  };
};

let betterFunction = debounceMagic(getData, 3000);

// throttling
let count = 0;
const fetchData = () =>{
    console.log("Api call..",count);
}

const throttleMagic = function(fn,delay) {
    let timerr;
    return function (){
        context = this;
        args = arguments;
        if(!timerr){
            fn.apply(context,args);
            timerr = true;
            setTimeout(()=>{
                timerr = false
            },delay)
        }
    }
}

const betterThrottleFunction = throttleMagic(fetchData, 3000);