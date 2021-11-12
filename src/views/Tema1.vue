<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Logística y cadena de abastecimiento (SCM) 

    .row.justify-content-center
      .col-lg-10
        figure.mb-5
          img.mx.auto(src='@/assets/tema1/img-1.png')
        
        p.mb-4  La logística y la cadena de abastecimiento (en inglés, <em>Supply Chain Management</em>) son todas las actividades u operaciones que se llevan a cabo dentro de la empresa para poder dar cumplimiento a su actividad u objetivo principal, que es el de llegar al consumidor final con su producto o servicio; operación que incluye, entre otras cosas, la fabricación, la manipulación, el transporte y la distribución, así como el personal idóneo para el buen funcionamiento de la misma.
          
        p.mb-5 La logística comprende toda la operación de almacenamiento, inventarios, transporte y distribución, dentro de la empresa. Al respecto, se encuentran los siguientes conceptos fundamentales:


    .row.justify-content-center
      .col-lg-10
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/tema1/img2.svg', alt='conceptos fundamentales') 
          
          
          .tarjeta.color-acento-contenido.p-3(x="49.5%" y="26.5%" style="background-color: #FFD400; border-radius: 10px")
            
            p.mb-0 #[strong Proveedor:] persona natural o jurídica que provee un producto, un recurso o un servicio a un tercero.
              
          .tarjeta.color-acento-contenido.p-3(x="65.8%" y="32.5%" style="background-color: #FFD400; border-radius: 10px")
            
            p.mb-0 #[strong Aprovisionamiento:] es el suministro de insumos, materia prima o productos necesarios para el proceso de producción.
              
          .tarjeta.color-acento-contenido.p-3(x="77.2%" y="50.8%" style="background-color: #FFD400; border-radius: 10px")
            
            p.mb-0 #[strong Inventarios:] son la relación detallada que se tiene de los materiales necesarios para llevar a cabo todo el proceso y, finalmente, poder atender la demanda del mercado
              
          .tarjeta.color-acento-contenido.p-3(x="75.8%" y="70.5%" style="background-color: #FFD400; border-radius: 10px")
            
            p.mb-0 #[strong Maquinaria:] destinada para el proceso de producción.
            
          .tarjeta.color-acento-contenido.p-3(x="60.2%" y="86.8%" style="background-color: #FFD400; border-radius: 10px")
            
            p.mb-0 #[strong Producción:] es el proceso de transformación que se da para obtener finalmente un producto.
              
          .tarjeta.color-acento-contenido.p-3(x="39%" y="86.5%" style="background-color: #FFD400; border-radius: 10px")
            
            p.mb-0 #[strong Almacenamiento:] implica destinar un lugar o puntos especiales para guardar mercancía por cierto periodo de tiempo, sin que haya lugar al deterioro o daño de las mismas. 
              
          .tarjeta.color-acento-contenido.p-3(x="23.5%" y="70.5%" style="background-color: #FFD400; border-radius: 10px")
            
            p.mb-0 #[strong Canales de distribución:] es la selección del mejor canal de acuerdo con las características del producto, para llegar al consumidor final.
              
          .tarjeta.color-acento-contenido.p-3(x="21.5%" y="50.8%" style="background-color: #FFD400; border-radius: 10px")
            
            p.mb-0 #[strong Medios de transporte:] son los diferentes medios que se utilizan para el traslado y transporte de la mercancía.
              
          .tarjeta.color-acento-contenido.p-3(x="32.8%" y="32.5%" style="background-color: #FFD400; border-radius: 10px")
            
            p.mb-0 #[strong Distribución:] es el proceso que se realiza desde que el producto está siendo elaborado hasta que es entregado al consumidor final.
              
              
    
    
    .row.justify-content-center
      .col-lg-10(style='border-top: 6px solid #472EA6; background-color: #F6F6F6;')
        .row.justify-content-center.mt-5.mb-5
          .col-lg-4.align-self-center.mb-4.mb-lg-5
          
            p.px-4.px-lg-0.mb-0 En cuanto a la cadena de abastecimiento, está enfocada al cumplimiento de aquellas actividades asociadas con el movimiento de bienes, desde la selección y compra de insumos, hasta la programación de la producción, el procesamiento de órdenes, el control de inventarios, el transporte, el almacenaje, la distribución de las mercancías y la venta y servicio al cliente (Ballou, 2004); tal como se muestra en la siguiente la figura:
              
          .col-8.col-lg-auto.align-self-center
            figure
              img.mx-auto(src='@/assets/tema1/img-3.svg', style='width: 400px;')              

















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
