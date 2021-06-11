
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMin : 3,
      nombreLengthMax : 15,
      notaMin:0,
      notaMax:10,
      lista: [],
      user:{
        nombre:'',
        apellido:'',
        nota:''
      }
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        apellido: '',
        nota: '',
      }
    },

    sendDates(){
      this.user = {
        nombre: this.formData.nombre,
        apellido: this.formData.apellido,
        nota: this.formData.nota
      };
      
      this.lista.push(this.user);

      this.formData = this.getInicialData()
      this.formState._reset()
      this.user = {};
    },
    obtenerPromedio(){
      let cantidadAlumnos = this.lista.length;
      let notas = 0;
      if(cantidadAlumnos>0){
        this.lista.forEach(user =>{
          notas+=user.nota;
        })
      }
      let promedio = notas/cantidadAlumnos;
      return promedio;
    },
    getEstilo(){
      if(this.obtenerPromedio() <=3){
        return{
          'background-color':'black',
          'color':'red'
        }
      }else if(this.obtenerPromedio()>=7){
        return{
          'background-color':'black',
          'color':'green'
        }
      }else{
        return{
          'background-color':'black',
          'color':'yellow'
        }
      }
    }
  }
}


