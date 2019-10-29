<template>
  <div class="sidebar">
    <div class="sidebar__head">
      <router-link to="/" >
        <img src="../assets/images/logo.svg" alt="logo" class="logo">
      </router-link>
    </div>
    <div class="sidebar__nav">
      <h2 class="sidebar__title">Subscriptions</h2>
      <ul>
        <li 
          :class="user.class" v-for="(user,index) in usersList" 
          :key="index"
          @click="chooseUser(index)"
        >
          <img :src="getImgUrl(user.image)"><span>{{user.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex' 
export default {
  name: 'Sidebar',
  methods: {
    getImgUrl(pic) {
      return require('../assets/images/users/'+pic)
    },
    chooseUser(index) {
      this.usersList.forEach(user => {
        user.class = null
      })
      this.usersList[index].class = 'active'
      this.$store.dispatch('fetchPosts', index)
    }
  },
  computed: mapState({
      'usersList': 'usersList'
  }),
}
</script>