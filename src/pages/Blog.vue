<template>
  <Layout>
  
    <div class="container-blog m-auto">
            <h1> Les blogs </h1> 
      <div class="row">
      <div
        v-for="article in $page.articles.edges"
        :key="article.id"
        class="article d-flex my-5 mx-3 hover-bg-indigo-lightest-10 hover-scale-up-1 ease-300"
      >
      <b-card
        title="Card Title"
        :img-src="article.node.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"

      >
        <b-card-text> {{ article.node.abstract }}</b-card-text>
       <h1 class="article__title">{{ article.node.title }}</h1>
          <g-link :to="article.node.path" variant="primary" class="article__link"></g-link>
      </b-card>
        </div>
      </div>
       
      
    </div>
  </Layout>
</template>
<page-query>
query {
  articles: allArticles {
    edges {
      node {
        title
        abstract
        image
        path
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "My blog",
  },
};
</script>
<style>

.container-blog {
  justify-content: space-evenly;
  width: 90%;
}
.article {
  display: flex;
  align-items: center;
  box-shadow: 5px 5px 11px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  position: relative;
  margin-top: 50px;
  background-color: #fff;
  color: black;

}
@media screen and (max-width: 992px) {
  .article {
    display: block;
  }
}
.article__title {
  margin-top: 0;
}
.article__body {
  padding: 15px 30px;
}
.article__link {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.article__img {
  width: 250px;
  height: 140px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-right: 15px;
}
@media screen and (max-width: 992px) {
  .article__img {
    width: 100%;
    height: 180px;
  }
}
</style>
