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

                //////////////////////// ABOUT /////////////////////////////

                section.page.skills-page
                    .title-block
                        h1.title.title__skills-page Блок "Обо мне"
                        button.add-skills-group
                            .add-icon.add-icon__title
                                .plus-icon.plus-icon--small +
                            .add-button__title Добавить группу
                    .content-block
                        ul.cards-group
                            li.card-block.card-block__skills
                                .container
                                    .container
                                        .card-block__header
                                            .card-block__name Workflow
                                            input(type="text" placeholder="Название новой группы" value="Workflow").card-block__input.hidden
                                            .card-block__buttons
                                                .buttons-block
                                                    button.buttons-block__button.buttons-block__button--change
                                    hr.card-line
                                    .container
                                        .card-block__body
                                            table.card-table
                                                tr.card-table__row
                                                    td.card-table__cell.card-table__cell--name
                                                        input(type="text" placeholder="Навык" value="HTML5").card-cell-input
                                                    td.card-table__cell.card-table__cell--percents.skill-percents
                                                        input(type="text" placeholder="100" value="100").card-cell-input
                                                    td.card-table__cell.card-table__cell--percents-sign %
                                                    td.card-table__cell.card-table__cell--buttons
                                                        .buttons-block
                                                            button.buttons-block__button.buttons-block__button--check
                                                            button.buttons-block__button.buttons-block__button--remove
                                                tr.card-table__row.skills-row
                                                    td.card-table__cell.card-table__cell--name
                                                        .card-cell-label CSS3
                                                    td.card-table__cell.card-table__cell--percents
                                                        .card-cell-label 90
                                                    td.card-table__cell.card-table__cell--percents-sign %
                                                    td.card-table__cell.card-table__cell--buttons
                                                        .buttons-block
                                                            button.buttons-block__button.buttons-block__button--change
                                                            button.buttons-block__button.buttons-block__button--delete
                                                tr.card-table__row
                                                    td.card-table__cell.card-table__cell--name
                                                        .card-cell-label JavaScript
                                                    td.card-table__cell.card-table__cell--percents
                                                        .card-cell-label 80
                                                    td.card-table__cell.card-table__cell--percents-sign %
                                                    td.card-table__cell.card-table__cell--buttons
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

                //////////////////////// WORKS /////////////////////////////

                section.page.works-page
                    .title-block
                        h1.title.title__skills-page Блок "Работы"
                    .content-block
                        .card-block.card-block--full-width
                            .container
                                .container
                                    .card-block__header
                                        .card-block__name Редактирование работы
                                hr.card-line
                                .card-block__body.card-block__body--flex-row
                                    .card-block__left
                                        .container
                                            .upload
                                                .upload__desc Перетащите или загрузите для загрузки изображения
                                                button.button.button__upload Загрузить
                                    .card-block__right
                                        .container
                                            form.card-block__form
                                                .card-block__form-field
                                                    label.card-block__label Название
                                                    input(type="text" placeholder="Название работы" value="").card-block__input
                                                .card-block__form-field
                                                    label.card-block__label Ссылка
                                                    input(type="text" placeholder="Введите ссылку" value="").card-block__input
                                                .card-block__form-field
                                                    label.card-block__label Описание
                                                    textarea
                                                .card-block__form-field
                                                    label.card-block__label Добавление тега
                                                    input(type="text" placeholder="Впишите теги через запятую" value="").card-block__input
                                                    .tags
                                                        .tag
                                                            .tag__name HTML
                                                            .tag__remove.buttons-block__button.buttons-block__button--remove
                                                        .tag
                                                            .tag__name CSS
                                                            .tag__remove.buttons-block__button.buttons-block__button--remove
                                                        .tag
                                                            .tag__name Javascript
                                                            .tag__remove.buttons-block__button.buttons-block__button--remove
                                                .card-block__form-buttons
                                                    button.button.button--cancel Отмена
                                                    button.button Сохранить
                                                
                    

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
        min-height: 100vh;
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
        font-weight: 700;
        line-height: 36.14px;
        padding: 20px 25px;
        margin-right: 5px;
        display: inline-block;
        transition: ease-in-out .2s;

        &--active, &:hover {
            color: #383bcf;
            border-bottom: 3px solid #383bcf;
        }
    }

    /******************************** MAIN *********************************/

    .page {
        padding: 15px 0;
    }

    .title-block {
        padding: 15px 0 40px;
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

    /******************************** BUTTONS *********************************/

    .button {
        border-radius: 25px;
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        line-height: 50px;
        height: 50px;
        text-transform: uppercase;
        padding: 0 40px;
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

    /******************************** CARDS-GROUP *********************************/

    .cards-group {
        display: block;
        padding: 15px 0;
    }

    .card-block {
        display: inline-block;
        margin-right: 15px;
        width: 30%;
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
        background-color: #fff;

        &--full-width {
            width: 100%;
            display: block;
        }
    }

    .card-block__skills {
        width: 45%;
    }

    /******************************** CARD-HEADER *********************************/

    .card-block__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 75px;
    }

    .card-block__name {
        color: #414c63;
        font-size: 18px;
        font-weight: 700;
        line-height: 15px;
    }
    .card-block__input {
        color: #414c63;
        font-size: 18px;
        font-weight: 700;
        line-height: 15px;
        border: none;
        border-bottom: 1px solid #000;
        width: 70%;
        max-width: 273px;
        height: 40px;
        font-weight: 700;
    }

    .card-line {
        width: 100%;
        height: 1px;
        color: #1f232d;
        opacity: 0.15;
        margin: 0;
    }

    .card-block__body {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        width: 100%;
        min-height: 375px;
        padding-top: 15px;

        &--flex-row {
            flex-direction: row;
            align-items: flex-start;
        }
    }

    .card-block__left, .card-block__right {
        width: 50%;
        display: block;
        padding-top: 15px;
    }

    /******************************** CARD-TABLE *********************************/

    .card-table {
        width: 100%;
    }

    .card-table__cell {
        height: 40px;
        padding: 5px 0;
        color: rgba(65, 76, 99, .7);
        font-weight: 600;
        line-height: 32px;

        &--name {
            width: 60%;
            padding-right: 10px;
        }
        &--percents {
            width: 10%;
        }
        &--buttons {
            display: flex;
            justify-content: flex-end;
        }
    }
    .card-cell-input {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        border-bottom: 1px solid #000;
        font-weight: 600;
    }

    /******************************** UPLOAD *********************************/

    .upload {
        width: 100%;
        height: 276px;
        border: 1px dashed #a1a1a1;
        background-color: #dee4ed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .upload__desc {
        max-width: 250px;
        opacity: 0.5;
        color: #414c63;
        font-size: 16px;
        font-weight: 600;
        line-height: 33.89px;
        margin-bottom: 25px;
        display: block;
    }

    /******************************** ADD-SKILL-TABLE *********************************/

    .add-skill {
        max-width: 80%;
        border-spacing: 5px;
        padding: 30px 0;
    }

    .add-skill-name {
        border-bottom: 1px solid #1f232d;
        padding: 0 15px;
    }
    .add-skill-name__input {
        background: transparent;
        border: none;
        width: 100%;
        height: 50px;
        outline: none;
        color: #414c63;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.2;
    }

    .add-skill-percents {
        width: 110px;
        border-bottom: 1px solid #1f232d;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
    }
    .add-skill-percents__input {
        background: transparent;
        border: none;
        display: inline-block;
        width: 100%;
        height: 50px;
        outline: none;
        color: #414c63;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.2;
    }
    .add-skill-percents__sign {
        display: inline-block;
        padding: 15px;
        color: #414c63;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.2;
    }

    .add-skill-button {
        width: 40px;
    }
    .add-skill-button__add {
        padding: 0;
        margin: 0;
    }

    
</style>

