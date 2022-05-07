<template>

<div>
   <h1 class="titulo">Personajes de Ricky and Morty</h1>
   <div class="contenedor">
      <Avatar
      v-for="(personaje, index) in personajes" 
      :key="index"
      :name="personaje.name"
      :image="personaje.image"
      />
    </div>
</div>
  
</template>

<script>
import axios from 'axios';
import Avatar from '@/components/Avatar.vue'


export default {
  components: { Avatar },
  data() {
    return {
      personajes: [],
      
    };
  },
  mounted(){
    this.getTodos();
  },
  methods:{
    getTodos() {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(res=>{
      (this.personajes = res.data.results)
    })
    .catch(e=>{
    console.log(e)
  })
  }
  
  
  }
  
};
</script>

<style>
body{
  background-image: url("../public/assets/img.png");
  background-size: cover;
}
.contenedor{
      display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
}
.card{
  display: flex;
    flex-direction: row;
    padding: 10px;
    margin: 10px;
    width: 25%;
    justify-content: center;
    align-content: center;
}
.titulo{
  text-align: center;
  color: white;
  font-size: 32px;
}

</style>
