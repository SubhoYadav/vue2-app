export const companyMixin = {
  data() {
    return {
      company: "Apple.Inc",
      copyright: "An outcome of Jobs' madness",
    };
  },
  mounted() {
    this.greetings();
  },
  methods: {
    greetings() {
      console.log("Hi there!");
    },
  },
};
