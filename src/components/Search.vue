<template lang="pug">
.search
    .search-box
        input(
            type="text"
            placeholder="Введите имя пользователя"
            v-model="search"
            @keydown.enter="getUserInfo"
            )
        img(src="@/assets/img/close.jpg", alt="alt" @click="clear")
    button(@click="getUserInfo") Найти
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {
        ...mapMutations(["clearUserInfo"]),
        ...mapActions(["userInfo"]),
        getUserInfo(){
            this.userInfo(this.search)
        },
        clear(){
            this.clearUserInfo()
            this.search = ''
        }
    },
}
</script>
<style lang="scss">
    
</style>