<template>
    <b-navbar toggleable="md" type="dark" variant="brand" sticky>        
      <b-container>          
        
        <b-navbar-brand>
          <router-link to="/" class="navbar-brand">
            <img src="../assets/images/gobierno-rio-cuarto-white.svg" alt="logo gobierno rio cuarto">
          </router-link>
        </b-navbar-brand>    
              
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <li class="nav-item>">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item>">
              <router-link to="/cuida" class="nav-link">Cuida</router-link>
            </li>
            <li class="nav-item>">
              <router-link to="/castra" class="nav-link">Castrá</router-link>
            </li>
            <li class="nav-item>">
              <router-link to="/adopta" class="nav-link">Adopta</router-link>
            </li>
            <li class="nav-item>">
              <router-link to="/servicios" class="nav-link">Servicios</router-link>
            </li>
            <li class="nav-item>">
              <router-link to="/contacto" class="nav-link">Contacto</router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>

      </b-container>
    </b-navbar>
  
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss" scoped>
@import "../../node_modules/bootstrap/scss/functions";
@import '../assets/scss/variables';
.navbar{
  background-color: $brand;
  padding-top: 16px;
  padding-bottom: 16px;
  transition: 0.5s;
  
  &.navbar-animated{
    padding-top: 4px;
    padding-bottom: 4px;
    .navbar-brand{ 
      padding: 8px 0px;
    }
  }

  .navbar-brand{ 
    height: 60px;
    transition: 0.5s;

    img{
      height: 100%;
      border: 0px;
    }
  }

  .nav-link{
    &.router-link-exact-active {
      color: white;
    }
  }
}

</style>
