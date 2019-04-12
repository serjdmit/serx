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

    .menu {
        display: block;
        background-color: #fff;
    }
    .nav {
        height: 100%;
        display: block;
    }
    .nav__list {
        display: block;
        height: 100%;
    }
    .nav__item {
        display: inline-block;
        vertical-align: top;
        height: 100%;
    }
    .nav__link {
        color: rgba(65,76,99,.7);
        font-size: 16px;
        font-weight: 700;
        line-height: 36.14px;
        padding: 20px 25px;
        margin-right: 5px;
        display: inline-block;
        transition: ease-in-out .2s;
        text-decoration: none;

        &--active, &:hover {
            color: #383bcf;
            border-bottom: 3px solid #383bcf;
        }
    }
</style>
