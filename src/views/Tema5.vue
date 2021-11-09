<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Distribución Física Internacional (DFI)

    figure.mb-5
      img(src='@/assets/tema5/img-1.svg')

    p.mb-5  Es la planificación, organización, control y verificación para llevar a cabo la operación de transporte de la mercancía desde su lugar de origen hasta el destino convenido, buscando siempre cumplir con su objetivo principal de llevar el producto adecuado, en las cantidades requeridas, al lugar acordado y logrando los costos más bajos. 
      separador 

    #t_5_1.titulo-segundo
      h2 5.1  Agentes que intervienen en la cadena DFI
    
    p.mb-5  Al realizar una operación de internacionalización (importación o exportación), se encuentran diferentes actores o agentes que intervienen dentro del proceso en diferentes momentos, para realizar una actividad específica, y dentro de ellos, están:

    figure.mb-5
      img(src='@/assets/tema5/img-2.svg')

      separador 

    #t_5_2.titulo-segundo
      h2 5.2   Proceso de exportación en la DFI
    
    p.mb-5  La exportación es la salida de bienes o servicios hacia los mercados internacionales, dando cumplimiento a toda la normatividad aduanera. De forma general, se puede resumir el proceso así:   

      separador

    #t_5_3.titulo-segundo
      h2 5.3  Proceso de importación en la DFI 
    p.mb-5  La importación es la compra de bienes o servicios en el exterior para ser utilizados en el Territorio Aduanero Nacional, dando cumplimiento a toda la normatividad aduanera. De forma general, se puede resumir el proceso de la siguiente manera:La exportación es la salida de bienes o servicios hacia los mercados internacionales, dando cumplimiento a toda la normatividad aduanera. De forma general, se puede resumir el proceso así:         

      separador

    #t_5_4.titulo-segundo
      h2 5.4  Proyección de la oferta y la demanda
    p.mb-5  Para una empresa, es importante contar y tener una planificación, donde se tienen en cuenta aspectos como el análisis del sector, el comportamiento del producto y del mercado, la innovación, los nuevos desarrollos, la materia prima disponible, entre otros, y para ello también es importante evaluar la oferta y la demanda en el mercado, pues refleja la conducta actual y los comportamientos cambiantes que se dan por efectos de la globalización y los constantes cambios tecnológicos, asimismo, son parte fundamental para poder lograr los objetivos de dicha planificación.   

    .row.justify-content-around.align-items-center
      .col-lg-10
        .row.mb-5

                  
              .col-md-8.mb-4.mb-md-0
          
                p Para ello, se debe elaborar una proyección de la oferta y la demanda, teniendo en cuenta el comportamiento de estas en un período de tiempo determinado, apoyándose en las fuentes primarias y secundarias para la obtención de la información. Así pues, este estudio nos lleva a obtener dichas proyecciones, con cifras actualizadas y analizadas, que son de gran importancia y valor para la empresa. 

                p También es importante tener claro que la demanda de un bien o servicio se puede incrementar cuando se aumentan los ingresos de los consumidores y, por tanto, esto conlleva que la oferta también aumente. 

              .col-md-4
                figure
                  img(src='@/assets/tema5/img-5.svg', alt='Texto que describa la imagen')

            









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
