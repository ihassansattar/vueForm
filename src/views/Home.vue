<template>
  <div class="home">
   <AddPost v-on:add-post="addPost"/>
   <PostList v-on:del-post="deletePost" v-bind:posts="posts" v-bind:errors="erroes"/>
  </div>
</template>

<script>
import AddPost from "@/views/AddPost.vue";
import PostList from "@/views/PostList.vue";
import axios from 'axios';
export default {
  name: 'Home',
  components: {
  AddPost,
  PostList
  },
  data(){
return{
  posts:[],
  errors:[],
}
  },
  methods:{
// addPost(newPost){
//   const{title,body}=newPost;
//   axios.post(`https://jsonplaceholder.typicode.com/posts`,{
//     title,
//     body
//   }).then(res=>{this.posts=[...this.posts,res.data]}).catch(err=>{
//     console.log(err)
//   })
// },
// deletePost(id){
// axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(()=>{
// this.posts=this.posts.filter(post=>post.id !==id)
// }).catch(err=>{
//   console.log(err)
// })
// }
  },
created(){
  axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5`).then(res=>{
    this.posts=res.data;
  }).catch(e=>{
    this.errors.push(e);
  })
}
}
</script>
