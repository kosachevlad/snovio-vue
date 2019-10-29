<template>
    <div class="post-card" :data-user-id="userId">
        <div class="post-card__content">
            <h3 class="post-card__title">{{title}}</h3>
            <vue-scroll :ops="ops">
                <div class="post-card__text">
                    {{body}}
                </div>
            </vue-scroll>
        </div>
        <div class="post-card__comments-icon">
            <img src="../../assets/images/icons/message.svg" alt="comment icon" >
            <p class="post-card__comments-count">{{comments.length}}</p>
        </div>
        <div class="post-card__comments-list comments">
            <h4 class="comments__title">
                Comments
            </h4>
            <vue-scroll :ops="ops">
                <ul>
                    <li v-for="(comment, index) in comments" :key="index" class="comments__item">
                        {{comment}}
                    </li>
                </ul>
            </vue-scroll>
            <a class="comments__add" @click="showModal(id)">Add comment</a>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex' 
export default {
    name: 'Postcard',
    data() {
        return {
            ops: {
                bar: {
                    showDelay: 1000, 
                },
                scrollButton: {
                    enable: false,
                    background: 'rgb(3, 185, 118)',
                    opacity: 1,
                    step: 1,
                    mousedownStep: 10
                },
                vuescroll: {
                wheelScrollDuration: 280,
                wheelDirectionReverse: false
                }
            } // Your options
        };
    },
    computed: mapState({
        'contentState': 'contentState',
    }),
    methods: {
        showModal(id) {
            this.contentState.currentPostId = id
            this.contentState.isModal = true
        }
    },
    props: ['title', 'body', 'userId', 'comments', 'id']
};
</script>