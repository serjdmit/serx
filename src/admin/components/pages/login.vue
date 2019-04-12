<template lang="pug">
  .login
    .login__content
      form.login__form(@submit.prevent="login")
        .login__form-title Авторизация
        .login__row
          app-input(
            title="Логин"
            icon="user"
            v-model="user.name"
          )
        .login__row
          app-input(
            title="Пароль"
            icon="key"
            type="password"
            v-model="user.password"
          )
        .login__btn
          button(
            type="submit"
          ).login__send-data Отправить
</template>

<script>
import $axios from "@/requests";
export default {
  components: {
    appInput: () => import("components/input.vue")
  },
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      try {
        const {
          data: { token }
        } = await $axios.post("/login", this.user);
        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        this.$router.replace("/");
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>