<template>
  <layout-default>
    <section class="container pb-5">
      <div class="row py-5">
        <div class="col-md-4">
          <div :style="`background-image: url(http://drive.google.com/uc?export=view&id=${pet.IDFOTO1}); height: 400px;`" class="bg-image"></div>
        </div>
        <div class="col-md-8">
          <h1>Detalle de la Mascota {{ $route.params.id }}</h1>
          <p>{{ pet.medida }}</p>
        </div>
      </div>
    </section>
  </layout-default>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import axios from 'axios'

export default {
  name: 'Mascota',

  components: {
    LayoutDefault
  },

  data() {
    return {
      pet: []
    }
  },

  mounted() {
    this.Pet()
  },

  methods: {
    Pet() {
      axios
        .get('https://script.google.com/macros/s/AKfycbwI68_FYAYzOLKHwbxIJSX1RH_21MBF1nrxXOpHZlNsKkqvPRHh/exec?spreadsheetId=1Qw85phKJHXxd5ue1PYUcbjZ1uoqZjCpEW-wai0qmLKg&sheet=mascotas')
        .then( res => {
          
          const id = this.$route.params.id
          const data = res.data;

          const pet = data.filter((obj)=>{
            return obj.id === id;
          }).pop();
          console.log(pet);
          this.pet = pet
        })
        .catch()
    }
  },

}
</script>