<template lang="html">

  <section class="src-components-Preguntas">
    <div class="table-responsive">
        <table class="table table-dark">
          <thead>
            <tr>
              <th>Pregunta</th>
              <th>Respuesta</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(respuesta,index) in respuestas" :key="index">
              <td>{{respuesta.numero}}</td>
              <td>{{respuesta.respuesta}}</td>
            </tr>
          </tbody>
        </table>
      </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'Preguntas',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas:[
          {numero:1, respuesta:'c'},
          {numero:2,respuesta:'c'},
          {numero:3,respuesta:'b'}
        ]
      }
    },
    methods: {
      
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  
  hr{
    background-color:#123;
  }
  button{
    margin-right: 5px;
  }
  .alert{
    margin-top:10px;
    margin-left:50%;
    right:25%;
    text-align:center;
  }
</style>
