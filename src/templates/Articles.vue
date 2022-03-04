<template>
  <Layout>
    <div class="m-5">
      <div class="d-flex justify-content-between">
        <div>
           <img :src="$page.article.image ">
        </div>
        <div class="content">
          <h1 class="articlePage__title">{{$page.article.title}}</h1>
          <p>Auteur : {{$page.article.author}}</p>
          <p>{{$page.article.date}}</p>
          <div v-html="$page.article.content"></div>
          <g-link to="/" class="back">Back</g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($path: String!) {
  article: articles (path: $path) {
    title
    content
    author
    image
  }
}
</page-query>
<script>
export default {
  components: {},
  metaInfo() {
    return {
      title: this.$page.article.title
    };
  }
};
</script>
<style>

.content {
  width: 100%;
  padding: 5%;
}

@media screen and (max-width: 992px) {
  .container--article {
    padding: 15px 20px;
  }
}
.articlePage__img {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
}
.back {
  color: #AAB2FF ;
  font-size: 25px;
}
.svg-inline--fa{
  width: 20px;
  margin-right: 15px;
  color: #333;
}

h1 {
   background: -webkit-linear-gradient(#84FFBD 15%,  #AAB2FF, #aa00d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>