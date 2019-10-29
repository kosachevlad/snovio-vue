<template>
  <div class="main">
    <Sidebar />
    <div class="content-container">
      <Content />
    </div>
    <transition name="fade">
    <Modal  v-if="contentState.isModal" v-scroll-lock="contentState.isModal" />
    </transition>
    <Preloader v-if="contentState.isLoading"/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Content from '@/components/Content.vue'
import Modal from '@/components/Modal.vue'
import Preloader from '@/components/Preloader.vue'
import { mapState } from 'vuex' 

export default {
  name: 'dashboard',
  computed: mapState({
        'contentState': 'contentState',
  }),
  components: {
    Sidebar,
    Content,
    Modal,
    Preloader
  }
}
</script>
