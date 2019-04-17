<template lang="pug">
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
                                form.upload
                                    label.upload__label
                                        .upload__desc Перетащите или загрузите для загрузки изображения
                                        .button.button__upload Загрузить
                                        input(name="review-avatar" type="file").upload__input
                        .card-block__right
                            .container
                                form.card-block__form
                                    .card-block__form-field
                                        label.card-block__label Название
                                        input(type="text" placeholder="Название работы" value="").card-block__input.card-block__input--long
                                    .card-block__form-field
                                        label.card-block__label Ссылка
                                        input(type="text" placeholder="Введите ссылку" value="").card-block__input.card-block__input--long
                                    .card-block__form-field
                                        label.card-block__label Описание
                                        textarea.card-block__textarea
                                    .card-block__form-field
                                        label.card-block__label Добавление тега
                                        input(type="text" placeholder="Впишите теги через запятую" value="").card-block__input.card-block__input--long
                                        .tags
                                            .tag
                                                .tag__inner
                                                    .tag__name HTML
                                                    .tag__remove.buttons-block__button.buttons-block__button--remove
                                            .tag
                                                .tag__inner
                                                    .tag__name CSS
                                                    .tag__remove.buttons-block__button.buttons-block__button--remove
                                            .tag
                                                .tag__inner
                                                    .tag__name Javascript
                                                    .tag__remove.buttons-block__button.buttons-block__button--remove
                                    .card-block__form-buttons
                                        button.button.button--cancel Отмена
                                        button.button Сохранить
                    
            ul.cards-group
                li.card-block.card-add
                    .add-icon.add-icon--big
                        .plus-icon.plus-icon--big +
                    .card-add__label Добавить работу

                li.card-block.card-block__works
                    .card-block__header
                        img(src="../../../images/works/slider-1.jpg").card-block__preview
                        .tags.tags--absolute
                            .tag.tag--to-left
                                .tag__inner
                                    .tag__name HTML
                            .tag.tag--to-left
                                .tag__inner
                                    .tag__name CSS
                            .tag.tag--to-left
                                .tag__inner
                                    .tag__name JavaScript
                    .container
                        .card-block__body
                            .container
                                .card-block__name Сайт школы образования
                                .card-block__content(
                                ) Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                                a(href="http://loftschool.ru").card-block__link http://loftschool.ru
                                .card-block__edit-block
                                    button.card-block__edit
                                        .card-block__edit-lable Править
                                        .card-block__edit-icon.buttons-block__button
                                    button.card-block__delete
                                        .card-block__edit-lable Удалить
                                        .card-block__edit-icon.card-block__edit-icon--remove.buttons-block__button
</template>
