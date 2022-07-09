import { defineStore } from "pinia";

export const useCheckoutUserAddress = defineStore("user_address", {
  state() {
    return {
      addresses: [
        {
          surename: "man",
          firstname: "Jonathan",
          lastname: "Martz",
          street: "Othestrasse 2",
          postcode: "51702",
          city: "Bergneustadt",
          country: "Deutschland",
        },
        {
          surename: "man",
          firstname: "Jonathan",
          lastname: "Martz",
          street: "Eckenhagenerstrasse 34",
          postcode: "51645",
          city: "Gummersbach",
          country: "Deutschland",
        },
      ],
    };
  },
  actions: {},
});
