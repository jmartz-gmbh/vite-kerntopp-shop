<template>
  <div class="vp-checkout-account">
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-2">
        <h2>Login</h2>
        <div class="form login">
          <div class="form-group">
            <label>Username</label>
            <input type="text" v-model="form.login.username" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="form.login.password" />
          </div>
          <div class="form-group"><button @click="login()">Login</button></div>
        </div>
      </div>
      <div class="col-span-6 md:col-span-2">
        <h2>Register</h2>
        <div class="form register">
          <div class="form-group">
            <label>Username</label>
            <input type="text" v-model="form.register.username" />
          </div>
          <div class="form-group">
            <label>email</label>
            <input type="email" v-model="form.register.email" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="form.register.password" />
          </div>
          <div class="form-group">
            <button @click="register()">Register</button>
          </div>
        </div>
      </div>
      <div class="col-span-6 md:col-span-2">
        <h2>Guest Order</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutAccount",
  mounted() {
    if (
      this.$store.state.auth.token != null &&
      this.$store.state.auth.token != ""
    ) {
      this.$router.push("/checkout/shipping");
    }
    if (this.$store.state.cart.items.length <= 0) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      form: {
        register: {
          username: "",
          email: "",
          password: "",
        },
        login: {
          username: "",
          password: "",
        },
      },
    };
  },
  methods: {
    register: function () {
      const that = this;
      fetch("https://auth.kerntopp.shop/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: that.form.register.email,
          password: that.form.register.password,
          username: that.form.register.username,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          that.$router.go();
        });
    },
    login: function () {
      const that = this;
      fetch("https://auth.kerntopp.shop/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: that.form.login.username,
          password: that.form.login.password,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          if (json.token) {
            that.$store.commit("user-add-token", {
              that: this,
              token: json.token,
            });
            that.$router.go();
          }
        });
    },
  },
};
</script>
