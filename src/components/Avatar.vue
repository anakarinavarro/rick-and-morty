<template>
        <div class="card container">
              <img :src="image"/>
              <p> {{ name }}</p>
        </div>

</template>
<script>
export default {
  props: ["name", "image"]
}
</script>
<style>
.card img{
    border-radius: 50%;
    width: 100px;
    object-fit: cover;
    object-position: center;
}   
p{
    color: green;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-left: 20px;
}
</style>