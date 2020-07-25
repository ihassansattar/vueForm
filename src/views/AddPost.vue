<template>
  <div class="add-post">
    <div class="row mb-3">
      <div class="col text-right">
        <button v-on:click="formShow" class="btn btn-primary">Create New Post</button>
      </div>
    </div>
    <div class="card bg-dark mb-3" v-if="formDiv">
      <div class="card-body">
        <form @submit.prevent="addPost">
          <div class="form-group">
            <label>Post Title</label>
            <input
              type="text"
              v-model="title"
              name
              class="form-control"
              placeholder="ENter POst Title"
            />
          </div>
          <div class="form-group">
            <label>Post Details</label>
            <textarea v-model="body" name class="form-control" placeholder="ENter POst Details"></textarea>
          </div>
          <div class="row">
            <div class="col-6 mx-auto">
              <button class="btn btn-success btn-block">CREATE POST</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AddPost",
  data() {
    return {
      formDiv: false,
      title: "",
      body: ""
    };
  },
  methods: {
    ...mapActions(["addNewPost"]),
    formShow() {
      this.formDiv = true;
    },
    addPost() {
    
     
      this.addNewPost({
        title: this.title,
        body: this.body
      })
      this.title='',
      this.body = ""
      //  const newPost = {
      //   title: this.title,
      //   body: this.body
      // };
      //send to parent
      // this.$emit("add-post", newPost);
      // (this.title = ""), (this.body = "");
    }
  }
};
</script>