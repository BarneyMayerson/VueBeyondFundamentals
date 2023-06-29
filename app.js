const vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },

  template: `<p>{{ message }}</p>`,
});

vm.mount("#app");

const vm2 = Vue.createApp({
  data() {
    return {
      message: "Hello 22222!"
    }
  },

  render() {
    return Vue.h(
      "h1",
      this.message
    );
  },
});

vm2.mount("#app2");
