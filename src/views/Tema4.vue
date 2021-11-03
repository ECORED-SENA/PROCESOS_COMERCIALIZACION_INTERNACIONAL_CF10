<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 	Modos y medios de transporte 

    figure.mb-5
      img(src='@/assets/tema3/img-1.svg')

    p.mb-5  Dentro del proceso logístico, el transporte es de suma importancia, pues garantiza el traslado de la mercancía de un lugar a otro, para que esta llegue a su destino en las mejores condiciones y cumpliendo con acuerdos principales, como:

      .col-sm.mb-5.mb-sm-0

        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | <b>Llegar dentro del plazo acordado</b>, usando los vehículos adecuados.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | <b>Entregar sin deterioro</b>, con protección física idónea.
    
        p Para seleccionar el mejor modo y medio de transporte, es importante conocer y tener en cuenta tanto la naturaleza de la carga como su volumen y, asimismo, los recursos económicos, ya que algunos casos pueden ser costosos o no, dependiendo de los requerimientos que se tengan para su traslado, como el tiempo, el destino, la disponibilidad, la confiabilidad, las restricciones, entre otros. 

      separador 

    #t_2_1.titulo-segundo
      h2 3.1 Modos de transporte 

    p Es el sistema o el método que se utiliza para realizar el traslado de la mercancía. Puede ser marítimo, aéreo, terrestre o ferroviario. 
      separador 

    #t_2_1.titulo-segundo
      h2 3.2	Medios de transporte
    
    p.mb-5  Es el vehículo utilizado para realizar la operación, teniendo en cuenta el modo de transporte seleccionado. Pueden ser buque, avión, camión o ferrocarril.

        //- TabsB debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        TabsB.color-acento-contenido.mb-5
          .py-4.py-md-5(titulo="Buques" :icono="require('@/assets/tema3/img-7.svg')")
            .row
              SlyderB.mb-5(:datos="datosSlyder1")  
            
              
          .py-4.py-md-5(titulo="Aviones" :icono="require('@/assets/tema3/img-8.svg')")
            .row
              SlyderB.mb-5(:datos="datosSlyder2")   
            
          .py-4.py-md-5(titulo="Camiones" :icono="require('@/assets/tema3/img-9.svg')")
            .row
              SlyderB.mb-5(:datos="datosSlyder3")              
            
          .py-4.py-md-5(titulo="Ferrocarril" :icono="require('@/assets/tema3/img-10.svg')")
            .row
              SlyderB.mb-5(:datos="datosSlyder4")       


    

          
       
   

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder1: [
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder2: [
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
