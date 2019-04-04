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
                        h1.title.title__skills-page Блок "Обо мне"
                        button.add-skills-group
                            .add-icon.add-icon__title
                                .plus-icon.plus-icon--small +
                            .add-button__title Добавить группу
                    ul.skills-group
                        li.skills-group-block
                            .container
                                .skills-group-header
                                    .skills-group-block__name Workflow
                                    input(type="text" placeholder="Название новой группы" value="Workflow").skills-group-block__input.hidden
                                    .skills-group-block__buttons
                                        .buttons-block
                                            button.buttons-block__button.buttons-block__button--check
                                            button.buttons-block__button.buttons-block__button--remove
                                        .buttons-block.hidden
                                            button.buttons-block__button.buttons-block__button--change
                            hr.skills-line
                            .container
                                .skills-group-body
                                    table.skills
                                        tr.skills-row
                                            td.skills-name HTML5
                                            td.skill-percents 100
                                            td.skill-percents-sign %
                                            td.skill-buttons
                                                .buttons-block
                                                    button.buttons-block__button.buttons-block__button--check
                                                    button.buttons-block__button.buttons-block__button--remove
                                                .buttons-block.hidden
                                                    button.buttons-block__button.buttons-block__button--change
                                                    button.buttons-block__button.buttons-block__button--delete
                                        tr.skills-row.active
                                            td.skills-name CSS3
                                            td.skill-percents 90
                                            td.skill-percents-sign %
                                            td.skill-buttons
                                                .buttons-block.hidden
                                                    button.buttons-block__button.buttons-block__button--check
                                                    button.buttons-block__button.buttons-block__button--remove
                                                .buttons-block
                                                    button.buttons-block__button.buttons-block__button--change
                                                    button.buttons-block__button.buttons-block__button--delete
                                        tr.skills-row
                                            td.skills-name JavaScript
                                            td.skill-percents 80
                                            td.skill-percents-sign %
                                            td.skill-buttons
                                                .buttons-block.hidden
                                                    button.buttons-block__button.buttons-block__button--check
                                                    button.buttons-block__button.buttons-block__button--remove
                                                .buttons-block
                                                    button.buttons-block__button.buttons-block__button--change
                                                    button.buttons-block__button.buttons-block__button--delete
                                    table.add-skill
                                        tr.add-skill__row
                                            td.add-skill-name
                                                input(type="text" placeholder="Новый навык").add-skill-name__input
                                            td.add-skill-percents
                                                input(type="text" placeholder="100").add-skill-percents__input
                                                .add-skill-percents__sign %
                                            td.add-skill-button
                                                button.add-skill-button__add.add-button
                                                    .add-icon
                                                        .plus-icon +

                                        

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
        display: none !important;
    }
    .header {
        width: 100vw;
    }

    /*************************** HEADER ********************************/
    /************************** ADMIN-PANEL *********************************/

    .admin-template {
        background-color: #f9fafe;
        height: 100vh;
        min-height: 630px;
    }
    .admin-panel {
        height: 80px;
        background-color: #3e3e59;
        background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);

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
        font-weight: 600;
        line-height: 34px;
        display: inline-block;
        vertical-align: middle;
    }
    .logout {
        opacity: 0.7;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
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
        color: rgba(65,76,99,.7);
        font-size: 16px;
        font-weight: 600;
        line-height: 36.14px;
        padding: 30px;
        display: inline-block;

        &--active {
            color: #383bcf;
            border-bottom: 3px solid #383bcf;
            font-weight: 700;
        }
    }

    /******************************** MAIN *********************************/

    .page {
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

        &__skills-page {
            margin-right: 50px;
        }
    }
    
    .add-skills-group {
        color: #383bcf;
        font-size: 16px;
        font-weight: 600;
        line-height: 33.89px;
        display: inline-block;
        vertical-align: middle;
        background-color: transparent;
    }

    .plus-icon {
        color: #fff;
        font-weight: 600;
        line-height: 20px;
        width: 20px;
        height: 20px;
        font-size: 30px;

        &--small {
            width: 8px;
            height: 8px;
            line-height: 7px;
            font-size: 15px;
        }
    }

    .add-icon {
        display: inline-flex;
        border-radius: 50%;  
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        position: relative;
        vertical-align: middle;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;

        &__title {
            margin-right: 20px;
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

    /******************************** SKILLS-GROUP *********************************/

    .skills-group {
        display: block;
        padding: 15px 0;
    }

    .skills-group-block {
        display: inline-block;
        margin-right: 15px;
        width: 45%;
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
        background-color: #fff;
    }

    /******************************** SKILLS-GROUP-HEADER *********************************/

    .skills-group-header {
        display: flex;
        justify-content: space-between;
        align-content: center;
        height: 75px;
        padding: 30px 0;
    }

    .skills-group-block__name {
        color: #414c63;
        font-size: 18px;
        font-weight: 600;
        line-height: 15px;
    }
    .skills-group-block__input {
    }
    .skills-group-block__buttons {
    }

    .skills-line {
        width: 100%;
        height: 1px;
        color: #1f232d;
        opacity: 0.15;
        margin: 0;
    }

    .buttons-block {
        display: inline-block;
    }

    .buttons-block__button {
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-left: 15px;
        background-size: contain !important;

        &--check {
            background: svg-load('tick.svg', fill=#00d70a);
            /* background-size: contain; */
        }
        &--remove {
            background: svg-load('remove.svg', fill=#bf2929);
            /* background-size: contain; */
        }
        &--change {
            background: svg-load('pencil.svg', fill=rgba(65, 76, 99, .7));
            /* background-size: contain; */
        }
        &--delete {
            background: svg-load('trash.svg', fill=rgba(65, 76, 99, .7));
            /* background-size: contain; */
        }
    }

    /******************************** SKILLS-BODY *********************************/

    .skills-group-body {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        width: 100%;
        min-height: 375px;
    }

    /******************************** SKILLS-TABLE *********************************/

    .skills {
        width: 100%;
    }
    .skills-row {
        td {
            padding: 10px 0 0 0;
            color: rgba(65, 76, 99, .7);
            font-weight: 600;
            line-height: 32px;
        }

        .skills-name {
            width: 60%;
            padding-right: 10px;
        }
        .skill-percents {
            width: 10%;
        }
        .skill-buttons {
            display: flex;
            justify-content: flex-end;
        }
    }

    /******************************** ADD-SKILL-TABLE *********************************/

    .add-skill {
        width: 80%;
        border-spacing: 5px;
        padding: 30px 0;
    }

    .add-skill-name {
        border-bottom: 1px solid #1f232d;
        padding: 15px;
    }
    .add-skill-name__input {
        background: transparent;
        border: none;
    }

    .add-skill-percents {
        width: 100px;
        border-bottom: 1px solid #1f232d;
        padding: 15px;
        display: flex;
        justify-content: space-between;
    }
    .add-skill-percents__input {
        background: transparent;
        border: none;
        display: inline-block;
        width: 40px;
    }
    .add-skill-percents__sign {
        display: inline-block;
    }

    .add-skill-button {
        padding: 0 15px;
        padding-right: 0;
    }
    .add-skill-button__add {
        padding: 0;
        margin: 0;
    }

    
</style>

