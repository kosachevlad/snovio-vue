<template>
    <div class="overlay" v-hotkey="{'esc': closeModal}">
        
        <div class="modal">
            <button class="modal__close" @click="closeModal">&times;</button>
            <h4 class="modal__title">
                Add comment
            </h4>
            <textarea class="modal__text" name="comment" v-model="commentText"></textarea>
            <a class="modal__btn comments__add" @click="sendComment">Add comment</a>
            <div v-if="validationError" class="validation__warn">Message should not be empty</div>
            <div v-if="contentState.success" class="alert">Success</div>
        </div>
        <Preloader v-if="contentState.isLoading"/>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import Preloader from '@/components/Preloader.vue'
export default {
    name: 'Modal',
    data() {
        return {
            commentText: '',
            validationError: false
        }
    },
    methods: {
        closeModal() {
            this.contentState.isModal = false
        },
        sendComment() {
            this.validationError = false
            const commentBody = {
                body: this.commentText,
                postId: this.contentState.currentPostId
            }
            if (this.commentText.length !== 0) {
                this.$store.dispatch('postComment', commentBody)
            } else {
                this.validationError = true
            }
            
        }
    },
    components: {Preloader},
    computed: mapState({
        'contentState': 'contentState',
    }),
    created() {
        this.contentState.success = false
    }
}
</script>