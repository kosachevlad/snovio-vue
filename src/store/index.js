import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serverUrl: 'https://jsonplaceholder.typicode.com/',
    responseLength: 30,
    usersList: [
      {
        id: 0,
        name: 'All Subscriptions',
        image: 'avatar-logo.svg',
        class: 'active'
      },
      {
        id: 1,
        name: 'Donna Harvey',
        image: 'user-001.jpg',
        class: null
      },
      {
        id: 2,
        name: 'Angela Johnson',
        image: 'user-002.jpg',
        class: null
      },
      {
        id: 3,
        name: 'Ronald Sherman',
        image: 'user-003.jpg',
        class: null
      }
    ],
    contentState: {
      isLoading: false,
      isModal: false,
      currentPostId: null,
      success: false
    },
    search: '',
    posts: []
  },
  actions: {
    fetchPosts (context, payload) {
      return fetch(context.state.serverUrl+'posts')
                .then(response => response.json())
                .then(response => {
                  
                  let posts
                  context.state.contentState.isLoading = true
                  if (payload === 0 || payload === undefined ) {
                    posts = response.slice(0, context.state.responseLength)
                  } else {
                    posts = response.filter(post => {
                      return post.userId === payload
                    })
                  }
                  posts.forEach(el => {
                    el.comments = []
                  })
                
                  fetch(context.state.serverUrl+'comments')
                    .then(response => response.json())
                    .then(response => {
                      response.forEach(elem => {
                        posts.forEach((post, id) => {
                          if (elem.postId === post.id) {
                            posts[id].comments.push(elem.body)
                          }
                        })
                      })
                      context.state.contentState.isLoading = false
                      context.state.posts = posts
                    })
                    .catch(error => console.warn('Comments error!',error))
                })
                .catch(error => console.warn('Posts error!', error))      
    },
    postComment(context, postBody) {
      context.state.contentState.isLoading = true
      const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postBody)
      }
      return fetch(context.state.serverUrl+'comments', options)
                .then(response => response.json())
                .then(response => {
                  context.state.posts.forEach(post => {
                    if(post.id === response.postId) {
                      post.comments.push(response.body)
                    } 
                  })
                  context.state.contentState.currentPostId = null
                  context.state.contentState.success = true
                  
                  context.state.contentState.isLoading = false
                  setTimeout(function(){context.state.contentState.isModal = false},700)
                  
                })
                .catch(error => console.warn('Post comment error!', error))
    }
  },
})
