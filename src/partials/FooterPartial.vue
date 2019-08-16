<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4>CAMPAÑA</h4>
            <ul>
              <li><a href="">Fundamentos</a></li>
              <li><a href="">Cursos Colegio</a></li>
              <li><a href="">Cuidado Responsable</a></li>
              <li><a href="">Comportamiento Animal</a></li>
              <li><a href="">Evitá la Rabia!</a></li>
            </ul>
        </div>
        <div class="col-md-4">
          <h4>SERVICIOS</h4>
          <ul>
            <li><a href="">Animales Accidentados</a></li>
            <li><a href="">Castración Gratuita</a></li>
            <li><a href="">Vacunación Antirrábica</a></li>
            <li><a href="">Adopción de Mascotas</a></li>
          </ul>  
        </div>
        <div class="col-md-4">
          <h4>MAPA DE SITIO</h4>
          <ul>
            <li><a href="">a desarrollar ...</a></li>
          </ul>        
        </div>
      </div>
      <div class="row">
        <div class="col text-muted">
          Dirección Gral de Zoonosis / EDECOM / Secretaría de Control y Prevención Ciudadana / Gobierno de Río Cuarto.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterPartial',
}
</script>

<style lang="scss">
@import "../../node_modules/bootstrap/scss/functions";
@import '../assets/scss/variables';

.footer {  
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 30px 0;

  background-color: $gray-900;
  color: white;

  h4{
    font-weight: 300;
  }
  ul{
    list-style: none;
    padding: 0px;
    li {
      a{
        color: $gray-300;
        text-decoration: none;        
        &:hover{
          color: lighten($brand, 25%);        
        }
      }
    }
    
  }
}

@media (max-width: 767px){
  .footer{
    text-align: center;
  }
}

</style>
