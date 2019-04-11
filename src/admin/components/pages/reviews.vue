<template lang="pug">
    section.page.reviews-page
        .title-block
            h1.title.title__skills-page Блок "Отзывы"
        .content-block
            .card-block.card-block--full-width
                .container
                    .container
                        .card-block__header
                            .card-block__name Новый отзыв
                    hr.card-line
                    .container
                        .card-block__body.card-block__body--flex-row
                            .card-block__left.card-block__left--content-width
                                .container
                                    form.upload.upload--avatar
                                        label.upload__label.upload__label--avatar
                                            .upload__avatar-wrap
                                                i.fas.fa-user.upload__avatar
                                            .upload__desc.upload__desc--avatar Добавить фото
                                            input(name="review-avatar" type="file").upload__input
                            .card-block__right.card-block__right--content-width
                                .container
                                    form.card-block__form
                                        .card-block__form-header
                                            .card-block__form-field.card-block__form-field--row
                                                label.card-block__label Имя автора
                                                input(type="text" placeholder="Имя автора" value="").card-block__input.card-block__input--long
                                            .card-block__form-field.card-block__form-field--row
                                                label.card-block__label Титул автора
                                                input(type="text" placeholder="Титул автора" value="").card-block__input.card-block__input--long
                                        .card-block__form-field
                                            label.card-block__label Отзыв
                                            textarea.card-block__textarea.card-block__form-buttons
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
                        .container
                            .container
                                .card-block__header--user
                                    .card-block__header-avatar
                                        img(src="../../../images/content/user.jpg").admin__avatar
                                    .card-block__name
                                        .card-block__user-name Владимир Сабанцев
                                        .card-block__user-occ Преподаватель
                            hr.card-line
                    .container
                        .card-block__body
                            .container
                                .card-block__name Сайт школы образования
                                .card-block__content(
                                ) Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                                .card-block__edit-block
                                    button.card-block__edit
                                        .card-block__edit-lable Править
                                        .card-block__edit-icon.buttons-block__button
                                    button.card-block__delete
                                        .card-block__edit-lable Удалить
                                        .card-block__edit-icon.card-block__edit-icon--remove.buttons-block__button
</template>
