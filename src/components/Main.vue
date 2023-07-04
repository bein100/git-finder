<template>
  <main class="main">
      <Search />
      <h2 class="error" v-if="user == null">{{error}}</h2>
      <User />
      <Repos />
  </main>
</template>
<script>
import { mapState } from "vuex";
import Repos from './Repos.vue';
import Search from './Search.vue'
import User from './User.vue'
export default {
  components: { Search, User, Repos },
  computed: {
    ...mapState(['error', 'user'])
  },
}
</script>
<style lang="scss">
    
</style>