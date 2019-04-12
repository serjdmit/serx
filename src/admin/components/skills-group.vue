<template lang="pug">
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
</template>
