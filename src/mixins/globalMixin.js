export const globalMixin = {
  data() {
    return {
      name: "Subho Yadav",
      profession: "Software Engineer",
    };
  },
  created() {
    console.log("Created hook of global mixin!");
  },
};
