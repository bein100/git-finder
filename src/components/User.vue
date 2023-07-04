<template lang="pug">
.user(v-if="user")
    .user-left
        img(:src="user.avatar_url", alt="alt")
        a(:href="user.html_url") ПОСЕТИТЬ
    .user-right
        p {{user.login}}
        p Репозиториев: 
            span {{user.public_repos}}
        p Создан: 
            span {{new Date(user.created_at).toLocaleDateString()}}
        p Подписчиков: 
            span {{user.followers}}
        p Подписок: 
            span {{user.following}}
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['user'])
    }
    
}
</script>
<style lang="scss">
    
</style>