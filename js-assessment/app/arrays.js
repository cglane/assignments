 exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    arr.forEach(function (el, idx, arr) {
      total += el;
    });
    return total;
  },

  remove : function(arr, item) {
    var array = [];
    arr.forEach(function(el,idx,arr){
      if(el !== item){array.push(el)};
    });
    return array;
  },

  removeWithoutCopy : function(arr, item) {
    var item = 2;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === item){
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
  },

  append : function(arr, item) {
    var array = arr;
     arr.push(item);
     return array;
  },

  truncate : function(arr) {
    var array = arr;
    array.pop();
    return array;
  },

  prepend : function(arr, item) {
    var array = arr;
    array.unshift(item);
    return array;
  },

  curtail : function(arr) {
    var array = arr;
    array.shift();
    return array;
  },

  concat : function(arr1, arr2) {
    var array = arr1;
     return array.concat(arr2);
  },

  insert : function(arr, item, index) {
    var array = arr;
    array.splice(index,0,item);
    return array;
  },

  count : function(arr, item) {
    var array = arr;
    var count = 0;
    for(var i = 0; i<array.length;i++){
      if(array[i] == item){
        count ++;
      }
      };
    return count;
  },

  duplicates : function(arr) {
    var sortedArray = arr.sort();
    var arrayDup = [];
    var arraySingleDuplicates = [];
    var newArray = [];
    for (var i = 0; i < arr.length-1; i++) {
          if(sortedArray[i]==sortedArray[i+1]){
            arrayDup.push(sortedArray[i]);
          }
    };
    for (var i = 0; i < arrayDup.length-1; i++) {
      newArray = arrayDup;
      if(newArray[i+1] == newArray[i]){
        newArray.splice(i,1);
      }
    };
    return newArray;
  },

  square : function(arr) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
      array.push(arr[i]*arr[i]);
    };
    return array;
  },

  findAllOccurrences : function(arr, target) {
    var target = 'a';
    var array = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i]=== target){
        array.push(i);
      }
    }
  return array;
}
};
