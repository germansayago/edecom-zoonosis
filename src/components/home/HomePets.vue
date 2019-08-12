<template>
  <div class="row">
    <div class="col-md-4 col-lg-3" v-for="pet in pets" :key="pet.index">
      <div class="card">
        <div class="card-header">
         {{ pet.estado }}
        </div>
        <div :style="`background-image: url(http://drive.google.com/uc?export=view&id=${pet.IDFOTO1}); height: 200px;`" class="bg-image"></div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Edad: <b>{{ pet.edad }}</b></li>
          <li class="list-group-item">Tamaño: <b>{{ pet.medida }}</b></li>
          <li class="list-group-item">Antirrábica: <b>{{ pet.antirrabica }}</b></li>
          <li class="list-group-item"><router-link :to="{ name: 'mascota', params: { id: pet.id }}" class="btn btn-brand">Ver más</router-link></li>
        </ul>
      </div>
    </div>
    <Loading v-if="loading" />
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '../Loading'

export default {
  data () {
    return {
      pets: null,
      loading: true
    }
  },
  components: {
    Loading
  },
  mounted() {
    this.Pets()
  },
  methods: {
    Pets() {
      axios
        .get('https://script.google.com/macros/s/AKfycbwI68_FYAYzOLKHwbxIJSX1RH_21MBF1nrxXOpHZlNsKkqvPRHh/exec?spreadsheetId=1Qw85phKJHXxd5ue1PYUcbjZ1uoqZjCpEW-wai0qmLKg&sheet=mascotas')
        .then( res => {
          this.pets = res.data
          this.loading = false
        })
        .catch()
    } 
  },
}
</script>

<style lang="scss">
.loading{
  text-align: center;
}
.bg-image{
  -ms-background-position-x: center;
  -ms-background-position-y: center;
  background-position: top center;
  background-size: cover;
}
</style>
