import axios from "axios";
export const companyMixin = {
  data() {
    return {
      company: "Apple.Inc",
      copyright: "An outcome of Jobs' madness",
      names: [],
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
 */
