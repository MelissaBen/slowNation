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
    <footer class="d-flex justify-content-around p-5 ">
      <div>
          <g-image src="~/assets/images/logo.png" class="img-fluid img-footer" alt="logo" />
      </div>
      <div>
        <h2>Menu</h2>
        <div class="footer">
          <a href="">Accueil</a>
          <a href="">ÉVÉNements</a>
          <a href="">éco-responsable</a>
          <a href="">à propos</a>
          <a href="">blog</a>
          <a href="">contact</a>
        </div>
      </div>
      <div>
        <h2>reseaux sociaux</h2>
        <div class="footer">
          <a href="">Instgrame</a>
          <a href="">facebook</a>
          <a href="">twitter</a>
          <a href="">tiktok</a>
        </div>
      </div>
      <div>
        <h2>newsletter</h2>
        <div class=" s d-flex mt-3">
          <input type="text" name="" id="">
          <span>s'inscrire</span>
        </div>
      </div>
   

    </footer>
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
  font-family: Montserrat;
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
footer a:hover, .nav__link:hover {
    background: -webkit-linear-gradient(#84FFBD 15%,  #AAB2FF, #aa00d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}

footer {
    background-color: black;

}

.footer {
  display: flex;
  flex-direction: column;
}

input {
  background-color: transparent;
  border: 1px solid white;
  width: 250px;
  height: 35px;
}

.img-footer {
  width: 150px;
}

.s span {
  border: 1px solid white;
  padding: 5px;
  height: 35px;

}

.footer a {
  color: white;
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.05em;

}
</style>
