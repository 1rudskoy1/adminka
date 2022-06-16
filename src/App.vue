<template>
  <header :class="$style.header" class="bg-blue-500">
    <div class="_container py-5 flex align-items-center">
      <router-link to="Dashbord" class="text-4xl text-white uppercase" :class="$style.link">family-accounting</router-link>
      <router-link to="Dashbord" class="text-lg ml-4" :class="$style.link">Дашборд</router-link>
      <router-link to="/" class="text-lg ml-4" :class="$style.link">Операции</router-link>
      <Button label = "Добавить операцию"  @click="isShow = !isShow" class="ml-auto"/>
    </div>
  </header>
  <router-view/>
</template>

<script>
  import Button from "primevue/button"
  import {ref} from "@vue/reactivity"

export default{
  components:{
    Button
  },
  setup(){
    const isShow = ref();
  }
}

</script>

<style lang="scss" module>
  .header{
    position: relative;
  }
  
  .link{
    color: #fff;
    
    &hover{
      color: #ddd;
    }
  }
</style>
