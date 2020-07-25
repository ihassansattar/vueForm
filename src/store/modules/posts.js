import axios from "axios";
const state = {
  posts: []
};
const getters = {
  getPosts: state => state.posts
};
const actions = {
  async fetchPosts({ commit }) {
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
    commit("setPosts", posts.data)
  },
  async addNewPost({ commit }, post) {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, post)
    commit("newPost", res.data)
  },
  async removePost({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    commit("deletePost", id)
  },
  
};
const mutations = {
  setPosts: (state, payload) => (state.posts = payload),
  newPost: (state, payload) => (state.posts.unshift(payload)),
  deletePost:(state, payload)=>(state.posts=state.posts.filter(post=>post.id !==payload))
};
export default {
  state,
  getters,
  actions,
  mutations
}
