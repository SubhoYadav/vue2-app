import axios from "axios";
export const companyMixin = {
  data() {
    return {
      company: "Apple.Inc",
      copyright: "An outcome of Jobs' madness",
      names: [],
      input: "",
    };
  },
  mounted() {
    console.log("Mounted hook of company mixin");
    this.greetings();
    this.getNames();
  },
  methods: {
    greetings() {
      console.log("Hi there!");
    },
    getInput(want) {
      this.input = this.names.find((name) => name == want);
    },
    faultyFunction: () => {
      return this.names;
    },
    async getNames() {
      const names = await axios.get("http://localhost:8089/names");
      console.log({ names });
      this.names = names.data.names;
    },
    conflicting: () => {
      console.log("Method from mixin");
    },
  },
};

// Mixin Notes
/**
 Mixins hooks are called before the component's hooks
 In case of conflicting properties/hooks the component's data has the higher priority

 We cannot access the data of the mixin directly if it is poppulated using an api call(asynchronous) in that case we need to create a function that returns the data synchronously. like gerInput(), a function in the mixin which sets the state input in the mixin itself and getInput is called on the click of the button.

 However the state in the mixin can not be returned directly , and the "Run faulty function" button does the same thing!
 */

/**
  General Learning: 
  Jab bhi koi aisa issue ho jo solve na ho to jo cheeze already kam kar rahi ho unko hi use karne ki koshish karo 
  */
