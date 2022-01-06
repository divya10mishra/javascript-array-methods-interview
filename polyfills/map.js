Array.prototype.myMap = function(callbackfn){
    var arr = [];
    for(let i = 0;i<this.length;i++){
      arr.push(callbackfn(this[i],i,this))
    }
    return arr
  }