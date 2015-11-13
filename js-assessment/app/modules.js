exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
    greeting = str1;
    name = str2;
    function sayIt() {
      return greeting + ", " + name;
    }
    return {
      name: name,
      greeting: greeting,
      sayIt: sayIt
    }
  }
};
