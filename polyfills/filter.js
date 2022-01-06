Array.prototype.myFilter = function(callback){
    var arr = [];
    for(let i=0;i<this.length;i++){
      if(callback.call(this,this[i],i)){
        arr.push(this[i])
      }
    }
    return arr
 }