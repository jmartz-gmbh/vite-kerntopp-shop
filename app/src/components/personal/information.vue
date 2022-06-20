<template>
  <div class="vc-personal-information">
    <h2 class="font-bold text-xl">Personal Informationen</h2>
    <div class="form p-3 border-gray-400 border-2">
      <div class="form-group w-full px-2 py-2">
        <label class="mr-2">Anrede</label>
        <select v-model="form.surename" class="px-2 py-2 bg-gray-400">
          <option value="man">Herr</option>
          <option value="woman">Frau</option>
        </select>
      </div>
      <div class="form-group w-full px-2 py-2">
        <label class="mr-2">Vorname</label>
        <input
          type="text"
          placeholder="Jonathan"
          v-model="form.firstname"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>Nachname</label>
        <input
          type="text"
          placeholder="Martz"
          v-model="form.lastname"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
      <div class="form-group w-full px-2 py-2">
        <label class="mr-2">Telefon</label>
        <input
          type="text"
          placeholder="Jonathan"
          v-model="form.phone"
          class="px-2 py-2 bg-gray-400"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalInformation",
  data() {
    return {
      form: {
        surename: "",
        firstname: "",
        lastname: "",
        phone: "",
      },
    };
  },
};
</script>
