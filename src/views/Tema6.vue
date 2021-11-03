<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 1.	Logística y cadena de abastecimiento (SCM) 

    figure.mb-5
      img(src='@/assets/tema1/img-1.svg')

    p.mb-5  La logística y la cadena de abastecimiento (en inglés, Supply Chain Management) son todas las actividades u operaciones que se llevan a cabo dentro de la empresa para poder dar cumplimiento a su actividad u objetivo principal, que es el de llegar al consumidor final con su producto o servicio; operación que incluye, entre otras cosas, la fabricación, la manipulación, el transporte y la distribución, así como el personal idóneo para el buen funcionamiento de la misma.

    p.mb-5 La logística comprende toda la operación de almacenamiento, inventarios, transporte y distribución, dentro de la empresa. Al respecto, se encuentran los siguientes conceptos fundamentales:
 
    figure.mb-5
      img(src='@/assets/tema1/img-2.svg')


    .row.fnd-1.py-4
      .col-lg-8.align-self-end.px-5
      
        p En cuanto a la cadena de abastecimiento, está enfocada al cumplimiento de aquellas actividades asociadas con el movimiento de bienes, desde la selección y compra de insumos, hasta la programación de la producción, el procesamiento de órdenes, el control de inventarios, el transporte, el almacenaje, la distribución de las mercancías y la venta y servicio al cliente (Ballou, 2004); tal como se muestra en la siguiente la figura:

      .col-lg-4
        figure
          img.mb-3.img-190(src='@/assets/tema1/img-3.svg')              

















</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
