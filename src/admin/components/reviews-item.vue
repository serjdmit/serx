<template lang="pug">
    .reviews-item
        .card-block__header
            .container
                .container
                    .card-block__header--user
                        .card-block__header-avatar
                            // img(src="../../../../images/content/user.jpg").admin__avatar
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
