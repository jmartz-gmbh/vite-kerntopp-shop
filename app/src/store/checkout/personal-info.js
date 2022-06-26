export default {
  "checkout-load-personal-info": function (state) {
    state.personal_info = JSON.parse(localStorage.getItem("personal_info"));
    if (state.personal_info === null) {
      state.personal_info = {
        surename: "woman",
        firstname: "",
        lastname: "",
        phone: "",
      };
    }
  },
  "checkout-update-personal-info": function (state, { that, info }) {
    state.personal_info = info;
    localStorage.setItem("personal_info", JSON.stringify(info));
  },
};
