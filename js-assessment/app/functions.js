exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn(arr[0],arr[1],arr[2]);
  },
//answer from internet
  speak : function(fn, obj) {
    return fn.call(obj);
  },
//answer from internet
  functionFunction : function(str) {
    return function(str2){
       return str + ", " + str2;
     }

  },
//works but throwing error
  makeClosures : function(arr, fn) {
    var array = [];
    var maths = function(num){
      return function() { return fn(num) };
    }
    for (var i = 0; i < arr.length; i++) {
      array.push(maths(arr[i]));
    }

    return array;
  },

  partial : function(fn, str1, str2) {
    var punctuation = '';
    var hello = function(){
      return fn(str1,str2,punctuation);
    }
    return function(item){
      var stringer = hello(item) + item;
      var newString='';
      for(var i = 0; i<stringer.length-1;i++){
        newString = newString + stringer[i];
      }
      return newString;
    }
  },

  useArguments : function() {
    var args = Array.prototype.slice.call(arguments);
      var total = 0;
      for (var i = 0; i < args.length; i++) {
        total += args[i];
      }
      return total;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    return fn.apply(null,args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    return function(){
      var argumented = Array.prototype.slice.call(arguments);
      return fn.apply(this,args.concat(argumented));
    };
  },

  curryIt : function(fn) {
    var args = Array.prototype.slice.call(arguments);

  }
};
