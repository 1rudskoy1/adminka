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
  <Sidebar v-model:visible="isShow" position="right">
    <form @submit.prevent="handleSubmit(!v$.$invalid)">
      <div class="p-float-label mt-2">
        <Calendar 
        id="date"
        class="w-full"
        :class="{'p-invalid': v$.date.$invalid && v$.date.$dirty}"
        v-model = "v$.date.$model"
        @blur="v$.date.$touch()"
        />
        <label for="date">Дата операции</label>
      </div>
      <div class="p-float-label mt-2">
        <InputText 
        id="place"
        class="w-full"
        :class="{'p-invalid': v$.place.$invalid && v$.place.$dirty}"
        v-model = "v$.place.$model"
        @blur="v$.place.$touch()"
        />
        <label for="place">Место</label>
      </div>
      <div class="p-float-label mt-2">
        <InputText 
        id="category"
        class="w-full"
        :class="{'p-invalid': v$.category.$invalid && v$.category.$dirty}"
        v-model = "v$.category.$model"
        @blur="v$.category.$touch()"
        />
        <label for="date">Категория</label>
      </div>

      <div class="p-float-label mt-2">
        <inputnumber 
        id="amount"
        class="w-full"
        :class="{'p-invalid': v$.amount.$invalid && v$.amount.$dirty}"
        v-model = "v$.amount.$model"
        @blur="v$.amount.$touch()"
        mode="decimal"
        locale = "ru-RU"
        :minFractionDigits = "2"
        />
        <label for="amount">Сумма</label>
      </div>

      <div class="p-float-label mt-2">
        <Dropdown
        id="card"
        class="w-full"
        :options="cards"
        optionLabel = "label"
        optionValue = "value"
        :class="{'p-invalid': v$.card.$invalid && v$.card.$dirty}"
        v-model = "v$.card.$model"
        @blur="v$.card.$touch()"
        />
        <label for="date">С какой карты?</label>
      </div>

      <div class="p-float-label mt-2">
        <TextArea 
        id="description"
        class="w-full"
        :class="{'p-invalid': v$.description.$invalid && v$.description.$dirty}"
        v-model = "v$.description.$model"
        @blur="v$.description.$touch()"
        :autoResize = "true"
        rows = "2"
        />
        <label for="description">Описание</label>
      </div>
      <Button label = "Отправить"  type="submit" class="w-full"/>
    </form>
  </Sidebar>
</template>

<script>
  import {reactive, ref} from "@vue/reactivity"
  import {useVuelidate} from "@vuelidate/core"
  import {required} from "@vuelidate/validators"

  import Button from "primevue/button"
  import Sidebar from "primevue/sidebar"
  import Calendar from "primevue/calendar"
  import InputText from "primevue/inputtext"
  import Inputnumber from "primevue/inputnumber"
  import Dropdown from "primevue/dropdown"
  import TextArea from "primevue/textarea"


export default{
  components:{
    Button, 
    Sidebar,
    Calendar,
    InputText,
    Inputnumber,
    TextArea,
    Dropdown
  },
  setup(){
    const isShow = ref(false);
    const model = reactive(
      {
        date: null,
        place: null,
        category: null,
        amount: null,
        card: null,
        description: null
     });

    const cards = [
      {value: '*5379', label: 'Alpha'},
      {value: '*8522', label: 'Тинькофф'}

    ];

    const rule = {
      date: [required],
      place: [required],
      category: [required],
      amount: [required],
      card: [required],
      description: [required],
    }
    const v$ = useVuelidate(rule, model);

    function handleSubmit(invalid){
      v$.value.$touch();
      if(!invalid){
        console.log('Invalid');
        return
      }
      console.log("Valid");      
    }
    return {
      isShow, v$, handleSubmit,cards
    }
  },
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
