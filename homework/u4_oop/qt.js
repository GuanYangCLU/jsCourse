const Singleton = (function() {
  var instance = null;
  return function() {
    if (!instance) {
      instance = this;
      return instance;
    } else {
      return instance;
    }
  };
})();

const a = new Singleton();
const b = new Singleton();
console.log(a === b);
