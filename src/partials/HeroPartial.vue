<template>
  <div class="hero mb-5">
    <slot name="hero-image"></slot>
    <div class="hero-info">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="jumbotron bg-transparent mb-0">
              <slot name="title"></slot>
              <slot name="lead"></slot>
              <slot name="btn"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero',
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss">
.hero{
  position: relative;
  .hero-image{
    min-height: 500px;
    -ms-background-position-x: center;
      -ms-background-position-y: center;
      background-position: center center;
      background-size: cover;
      background-image: url('../assets/images/image-default.jpg');  
  }
  .hero-info{
    position: absolute;
    width: 100%;
    top: 0px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>