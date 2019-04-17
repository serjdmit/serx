<template lang="pug">
    .admin-panel
        .container
            .admin
                img(src="../../images/content/user.jpg").admin__avatar
                .admin__name Сергей Дмитриев
                .admin-panel-name Панель администратора
            a.logout(href="#/login") Выйти
</template>
<style lang="postcss" scoped>
    .header {
        width: 100vw;
    }

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
</style>
