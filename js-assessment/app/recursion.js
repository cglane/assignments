exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var array = [];
     function recur(data){
      _.each(data,function(el,idx){
        if(idx == "files"){
          _.each(el,function(element,index){
            if(typeof(element) == "string"){
              array.push(element);
            }
            else{
              recur(element);
            }
          })
        }
      })
    }
    recur(data);
    var args = Array.prototype.slice.call(arguments);
    if(args.length<=1){
      return array;
    }else{
      var newArray = [];
      _.each(array,function(el){
        var splitDoc = el.split('.');
        if(splitDoc[1] == dirName){
          newArray.push(el);
        }
      })
      return newArray;
    }
  },
//from internet
  permute: function(arr) {
    arr = arr.slice();
    var permutations = [];
    var stack = [];
    function doPerm() {
    if (arr.length == 0) {
        permutations.push(stack.slice());
    }
    for (var i = 0; i < arr.length; i++) {
        var x = arr.splice(i, 1);
        stack.push(x);
        doPerm();
        stack.pop();
        arr.splice(i, 0, x);
    }
  }
  doPerm();
  return permutations;
  },
//killed it
  fibonacci: function(n) {
    var sequence = n ;
    var fib = 1;
    function recur(num){
        while(n>1){
      var number = fib;
      fib += num;
      n--;
      recur(number);
    }
  }
  recur(0);
  return fib;
  },

  validParentheses: function(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
      arr.push('(');
      arr.push(')');
    }
    var goodArray = [];
    var badArray = [];
    function recur(){

    }
}
};
