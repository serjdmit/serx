<template lang="pug">
    .container
        nav.nav
            ul.nav__list
                li.nav__item(v-for="tab in tabs")
                    router-link(
                        :data-text="tab.title" 
                        :to="tab.href"
                        exact-active-class="nav__link--active"
                    ).nav__link {{tab.title}}

</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Отзывы", href: "/reviews" },
        { title: "Работы", href: "/works" }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
    .nav__link {
        text-decoration: none;
    }
</style>
