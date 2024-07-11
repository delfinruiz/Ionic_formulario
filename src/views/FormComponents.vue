<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Formularios</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      
      <ion-grid>
        <ion-row>
          <ion-col>

            <h1>Input</h1>
            <ion-input label="Nombre" label-placement="floating" placeholder="Escriba su Nombre" helper-text="Primer Nombre y Segundo Apellido" maxlength="15" :counter="15" :clear-input="true" color="primary" v-model="nombre"></ion-input>
            
            <br><hr>
            <h1>Select</h1>
            <ion-select label="Paises" placeholder="Seleccionar" label-placement="stacked" fill="solid" cancel-text="Cerrar" ok-text="Seleccionar" color="primary" v-model="paises">
              <ion-select-option value="Chile">Chile</ion-select-option>
              <ion-select-option value="peru">Peru</ion-select-option>
              <ion-select-option value="bolivia">Bolivia</ion-select-option>
            </ion-select>

            <br><hr>
            <h1>Checkbox</h1>
            <ion-checkbox label-placement="end" color="primary" value="PlayStation" v-model="consolas[0]">PlayStation</ion-checkbox>
            <br>
            <ion-checkbox label-placement="end" color="primary" value="Xbox" v-model="consolas[1]">Xbox</ion-checkbox>
            <br>
            <ion-checkbox label-placement="end" color="primary" value="Nintendo" v-model="consolas[2]">Nintendo</ion-checkbox>
            <br>
            <ion-checkbox label-placement="end" color="primary" value="PC" v-model="consolas[3]">PC</ion-checkbox>

            <br><hr>
            <h1>Radio</h1>
            <ion-radio-group allow-empty-selection="true" v-model="genero">
              <ion-radio value="mujer" label-placement="end" color="primary">Mujer</ion-radio>
              <br>
              <ion-radio value="hombre" label-placement="end" color="primary">Hombre</ion-radio>
            </ion-radio-group>

            <br><hr>
            <h1>Boton</h1>
            <ion-button color="dark" expand="block" shape="round" @click="imprimirDatos">Enviar</ion-button>

          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col v-show="datos">
            <h2>Impresion de datos</h2>
            <div v-html="datos"></div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonInput, IonSelect, IonSelectOption,
  IonCheckbox, IonRadioGroup, IonRadio, IonButton } from '@ionic/vue';

export default{
    name: 'FormComponents',
    components:{
        IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonInput, IonSelect, IonSelectOption,
        IonCheckbox, IonRadioGroup, IonRadio, IonButton},
    data(){
      return{
        nombre: '',
        paises: '',
        consolas: [],
        genero: '',
        datos: ''
      }
    },
    methods:{

      imprimirDatos(){

        let consolasSeleccionadas = '';
        consolasSeleccionadas += (this.consolas[0]) ? 'Playstation <br>' : '';
        consolasSeleccionadas += (this.consolas[1]) ? 'Xbox <br>' : '';
        consolasSeleccionadas += (this.consolas[2]) ? 'Nintendo <br>' : '';
        consolasSeleccionadas += (this.consolas[3]) ? 'PC <br>' : '';

        this.datos = '<h3> Nombre: </h3>'+this.nombre+'<br>'+
        '<h3> Pais: </h3>'+this.paises+'<br>'+
        '<h3> Consola: </h3>'+consolasSeleccionadas+'<br>'+
        '<h3> Genero: </h3>'+this.genero+'<br>'

        console.log(this.datos);
      }
    }

}
</script>

<style scoped>

</style>
