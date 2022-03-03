<template>
  <div class="layout">
    <header class="header">
      <div  style="width:150px">
        <g-image src="~/assets/images/logo.png" class="img-fluid" alt="logo" />
      </div>      
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/events/">Events</g-link>
        <g-link class="nav__link" to="/">Les marques </g-link>
        <g-link class="nav__link" to="/blog">Blog</g-link>
        <g-link class="nav__link" to="/about/">À propos de nous</g-link>
        <g-link class="nav__link" to="/about/">Contact</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: black;
}

.layout {
  max-width: 100%;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 90%;
  margin: auto;
  padding: 0 40px;

}

.nav__link {
  color: white;
  margin-left: 20px;
}
.nav__link:hover {
     background: -webkit-linear-gradient(#84FFBD 15%,  #AAB2FF, #aa00d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}
</style>
