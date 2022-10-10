// src/plugins/keyboardPlugin.js

let keyboardPlugin = {
  install(Vue) {
    // create a mixin
    Vue.mixin({
      created() {
        //  console.log("Hello from my Vue plugin =>", document.getElementById("app"));
      }
    });
  }
};
// Automatically install if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(keyboardPlugin);
}

export default keyboardPlugin