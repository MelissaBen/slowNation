<template>
  <Layout>
    <div class="articlePage">
      <div class="articlePage__img"></div>
      <div class="container container--article">
        <img :src="$page.article.image ">
        <g-link to="/" class="back">Back</g-link>
        <h1 class="articlePage__title">{{$page.article.title}}</h1>
        <p>{{$page.article.author}}</p>
        <p>{{$page.article.date}}</p>
        <div v-html="$page.article.content"></div>
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
.container--article {
  margin-top: -140px;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px 60px;
  margin-bottom: 100px;
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
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
}
.svg-inline--fa{
  width: 20px;
  margin-right: 15px;
  color: #333;
}