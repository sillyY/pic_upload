<template>
<div>
  <div class="pic">
    <div class="pic_upload">
      <span>添加图片</span>
      <input id="file" type="file" hidden="true" @change="picChange($event)">
      <label for="file">
      <img src="../assets/add.png" alt="添加图片" srcset="">
      </label>
    </div>
    <div class="pic_show">
      <img :src="image" alt="">
    </div>
  </div>
  <div class="pic_submit">
    <button @click="upload()">上传图片</button>
  </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      image: ""
    };
  },
  methods: {
    picChange(e) {
      var file = e.target.files;
      if (!file.length) return;
      this.picCreate(file);
    },
    picCreate(file) {
      if (typeof FileReader === "undefined") {
        alert("您的浏览器不支持图片上传，请升级您的浏览器");
        return false;
      }
      var image = new Image(),
        reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = e => {
        this.image = e.target.result;
      };
    },
    upload() {
      var obj = {
        img: this.image
      };
      axios({
        method: "post",
        url: "http://localhost:3000/1/upload",
        data: obj
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.pic {
  margin: 5px 10px;
  border: 1px solid #eaeaea;
}
.pic_upload {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eaeaea;
  background-color: #ececec;
}
.pic_upload > span {
  font-size: 18px;
  color: #333;
  line-height: 24px;
}
.pic_upload img {
  width: 24px;
  height: 24px;
}
.pic_show {
  min-height: 160px;
  max-height: 230px;
  text-align: center;
}
.pic_show img {
  max-width: 337px;
  max-height: 230px;
}
.pic_submit {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.pic_submit > button {
  width: 90%;
  height: 45px;
  background: linear-gradient(to right, #347eff, #1ea3ff);
  color: #fff;
}
</style>
