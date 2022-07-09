import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state() {
    return {
      token: "",
    };
  },
  actions: {
    update: function (token) {
      this.token = token;
      this.save();
    },
    save: function(){
      localStorage.setItem('token', this.token);
    },
    refresh: function(){
      this.token = localStorage.getItem('token');
    },
    logout: function(){
      this.token = '';
      this.save();
    }
  },
});
