exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var newArray = []
    for (var i = 0; i < str.length; i++) {
      var number = str.split(str[i]).length-1;
      if(!_.contains(newArray,str[i])){
        if(number > 1){
          for (var i = 0; i < amount; i++) {
            newArray.push(str[i]) }
        }else{
          newArray.push(str[i]);
        }
      }
    }
    return newArray;
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {

  }
};
