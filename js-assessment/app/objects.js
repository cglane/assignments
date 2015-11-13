exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return  fn.call(obj,name,greeting);

  },

  alterObjects : function(constructor, greeting) {
    function constructor(){
      this.greeting = greeting;
    }
  },

  iterate : function(obj) {
    var arrayStrings = [];
    _.each(obj,function(el,idx){
      arrayStrings.push(''+idx+": "+el);
    });
    return arrayStrings;
  }
};
