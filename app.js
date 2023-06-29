const vm = Vue.createApp({
  
});

vm.component("Hello", {
   template: `<h3>{{ message }}</h3>`,

   data() {
     return {
       message: "Here is a component",
     }
   }
});

vm.mount("#app");
