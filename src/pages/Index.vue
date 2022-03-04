<template>
  <Layout>
      <aboutUs/>
      <events/>
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
import contact from "~/components/Contact.vue";
export default {
  metaInfo: {
    title: "My blog",
  },
  components: {
    aboutUs,
    events,
    contact

  }
};
</script>

