import { defineStore } from "pinia";

export const useCheckoutPersonalInfoStore = defineStore("personal_info", {
  state() {
    return {
      info: {
        surename: "",
        firstname: "",
        lastname: "",
        phone: "",
      },
    };
  },
  actions: {
    save: function () {
      localStorage.setItem("personal-info", JSON.stringify(this.info));
    },
    update: function (value) {
      this.info = value;
    },
    reload: function () {
      this.info = JSON.parse(localStorage.getItem("personal-info"));
      if (this.info == null) {
        this.$reset();
      }
    },
  },
});
