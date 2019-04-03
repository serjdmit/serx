<template lang="pug">

    .admin-template
        header.header
            .admin-panel
                .container
                    .admin
                        img(src="../images/content/user.jpg").admin__avatar
                        .admin__name Сергей Дмитриев
                        .admin-panel-name Панель администратора
                    a.logout(href="#") Выйти
            .menu
                .container
                    nav.nav
                        ul.nav__list
                            li.nav__item
                                a.nav__link.nav__link--active Обо мне
                            li.nav__item
                                a.nav__link Работы
                            li.nav__item
                                a.nav__link Отзывы
        main.page
            .container
                section.page.skills-page
                    .title-block
                        h1.title Блок "Обо мне"
                        button.add-skills-group
                            .add-icon.add-icon__title
                                .plus-icon +
                            .add-button__title Добавить группу
                    ul.skills-group
                        li.skills-group-block
                            .skills-group-block__name Workflow
                            input(type="text" placeholder="Название новой группы" value="Workflow").skills-group-block__input.hidden
                            .skills-group-block__buttons
                                .buttons-block.active
                                    button.buttons-block__button.buttons-block__button--check
                                    button.buttons-block__button.buttons-block__button--remove
                                .buttons-block.hidden
                                    button.buttons-block__button.buttons-block__button--change
                                    button.buttons-block__button.buttons-block__button--delete
                            hr.skills-line
                            table.skills
                                tr.skills-row
                                    td HTML5
                                    td 100
                                    td %
                                    td 
                                        .buttons-block
                                            button.buttons-block__button.buttons-block__button--check
                                            button.buttons-block__button.buttons-block__button--remove
                                        .buttons-block.hidden
                                            button.buttons-block__button.buttons-block__button--change
                                            button.buttons-block__button.buttons-block__button--delete
                                tr.skills-row.active
                                    td CSS3
                                    td 90
                                    td %
                                    td 
                                        .buttons-block.hidden
                                            button.buttons-block__button.buttons-block__button--check
                                            button.buttons-block__button.buttons-block__button--remove
                                        .buttons-block
                                            button.buttons-block__button.buttons-block__button--change
                                            button.buttons-block__button.buttons-block__button--delete
                                tr.skills-row
                                    td JavaScript
                                    td 80
                                    td %
                                    td 
                                        .buttons-block.hidden
                                            button.buttons-block__button.buttons-block__button--check
                                            button.buttons-block__button.buttons-block__button--remove
                                        .buttons-block
                                            button.buttons-block__button.buttons-block__button--change
                                            button.buttons-block__button.buttons-block__button--delete

</template>

<script>
export default {
    
}
</script>

<style lang="pcss">
    @import "normalize.css";
    @import "../styles/mixins.pcss";
    @import "../styles/layout/base.pcss";
    @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
    
    .hidden {
        display: none;
    }
    .header {
        width: 100vw;
    }

    /*************************** HEADER ********************************/
    /************************** ADMIN-PANEL *********************************/

    .admin-panel {
        height: 80px;
        background-color: #3e3e59;
        background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
    }
    .admin-panel {
        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
        }
    }

    .admin {
        width: 70%;
    }
    .admin__avatar {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 20px;
        vertical-align: middle;
    }
    .admin__name {
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        line-height: 34px;
        display: inline-block;
        margin-right: 30px;
        vertical-align: middle;
    }
    .admin-panel-name {
        opacity: 0.5;
        color: #fff;
        font-family: "Open Sans";
        font-size: 14px;
        font-weight: 400;
        line-height: 34px;
        display: inline-block;
        vertical-align: middle;
    }
    .logout {
        opacity: 0.7;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-decoration: underline;
        cursor: pointer;
    }

    /***************************** MENU ******************************/

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
        color: #414c63;
        font-size: 16px;
        font-weight: 400;
        line-height: 36.14px;
        padding: 30px;
        display: inline-block;

        &--active {
            color: #383bcf;
            border-bottom: 3px solid #383bcf;
            font-weight: 600;
        }
    }

    /******************************** MAIN *********************************/

    .page {
        background-color: rgba(255, 255, 255, 0.9);
        padding: 15px 0;
    }

    .title-block {
        padding: 15px 0;
        display: block;
    }

    .title {
        color: #414c63;
        font-size: 21px;
        font-weight: 700;
        line-height: 34px;
        display: inline-block;
        vertical-align: middle;
    }
    .add-skills-group {
        color: #383bcf;
        font-size: 16px;
        font-weight: 600;
        line-height: 33.89px;
        display: inline-block;
        vertical-align: middle;
    }

    .plus-icon {
        color: #fff;
        font-size: 15px;
        font-weight: 700;
        line-height: 7px;
        width: 8px;
        height: 8px;
    }

    .add-icon {
        display: inline-flex;
        border-radius: 50%;  
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        position: relative;
        vertical-align: middle;
        align-items: center;
        justify-content: center;


        &__title {
            margin-right: 20px;
            margin-left: 50px;
            width: 21px;
            height: 21px;
        }
    }

    .add-button__title {
        color: #383bcf;
        font-size: 16px;
        font-weight: 600;
        line-height: 33.89px;
        display: inline-block;
    }

    .skills-group {
        display: block;
        padding: 15px 0;
    }

    .skills-group-block {
        display: inline-block;
        margin-right: 15px;
        width: 525px;
        height: 387px;
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
        background-color: #fff;
    }

    .skills-group-block__name {
        color: #414c63;
        font-size: 18px;
        font-weight: 600;
        line-height: 34px;
    }

    .skills-line {
        width: 100%;
        height: 1px;
        color: #1f232d;
        opacity: 0.15;
    }

    
</style>

