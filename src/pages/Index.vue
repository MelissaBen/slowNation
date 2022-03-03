<template>
  <Layout>
      <aboutUs/>
      <events/>
       <blog/>
      <contact/>
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
import aboutUs from "~/components/aboutUs.vue";
import events from "~/components/Events.vue";
import blog from "~/components/Blog.vue";
import contact from "~/components/Contact.vue";
export default {
  metaInfo: {
    title: "My blog",
  },
  components: {
    aboutUs,
    events,
    blog,
    contact

  }
};
</script>
<style>

</style>
