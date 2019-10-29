<template>
    <div>
        <div class="header">
            <div class="header__search-wrapper">
                <input type="text" name="search" class="header__search" v-model="search">
                <img src="../assets/images/icons/search.svg" alt="icon search" class="header__search-icon">
            </div>
            
            <div class="header__user">
                <router-link to="/settings">
                    <a class="header__user-link">
                        <img src="../assets/images/users/user-004.jpg" alt="user avatar">
                    </a>
                    <div class="header__user-dropdown">
                        <ul>
                            <li>Vlad Kosachev</li>
                            <li>Settings</li>
                        </ul>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="content">
            
            <h2 class="content__title">Today</h2>
            <div class="content__items-wrapper">
                <PostCard v-for="(post, index) in filteredPosts" 
                    :key="index" 
                    :title="post.title" 
                    :body="post.body"
                    :userId="post.userId"
                    :comments="post.comments"
                    :id="post.id"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import PostCard from '@/components/Content/PostCard.vue'
export default {
    name: "Content",
    data() {
        return {
            search: ''
        }
    },
    components: {
        PostCard
    },
    computed: {
        filteredPosts() {
            return this.posts.filter(post => {
                return post.title.toLowerCase().includes(this.search.toLowerCase())
            })
        },
        ...mapState({
            'posts': 'posts',
        })
    },
    created() {
        this.$store.dispatch('fetchPosts')
    }
}
</script>