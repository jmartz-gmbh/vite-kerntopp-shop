export default {
  state: () => ({
    token: "",
  }),
  mutations: {
    "user-add-token": function (state, { that, token }) {
      state.token = token;
      that.$store.commit("auth-token-save");
    },
    "user-logout": function (state, { that }) {
      state.token = "";
      that.$store.commit("auth-token-save");
      that.$store.commit("cart-destroy", {
        that: that,
      });
    },
    "auth-token-save": function (state) {
      localStorage.setItem("token", state.token);
    },
    "auth-token-load": function (state) {
      state.token = localStorage.getItem("token");
    },
  },
};
