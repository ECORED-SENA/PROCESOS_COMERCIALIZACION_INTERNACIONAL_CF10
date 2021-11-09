<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Costeo de la DFI

    figure.mb-5
      img(src='@/assets/tema6/img-1.svg')

    p.mb-5  En el proceso de internacionalización, y dependiendo de la operación que se esté realizando, es posible verse enfrentado a cumplir con una serie de obligaciones y responsabilidades, así como al pago de costos o tarifas por los diferentes movimientos, maniobras que se requieran o actores que intervienen. Dichos costos se relacionan a continuación, de acuerdo con el punto donde se originan:  
      separador 

    #t_6_1.titulo-segundo
      h2 6.1 Costos en origen
    
    p.mb-5  De acuerdo con los actores que intervienen y con los movimientos requeridos para la preparación y traslado de la mercancía en origen, se encuentran los siguientes costos relacionados:

      .col-sm.mb-5.mb-sm-0

        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | <b>Embalaje:</b>, son los costos relacionados con la preparación de la mercancía en origen.

          li 
            .lista-ol--cuadro__vineta
              span 2
            | <b>Documentación:</b>, costos de la documentación requerida en el país de origen. Se pueden encontrar aquí: facturas, certificados, licencias, vistos buenos, documentos de transporte.

          li 
            .lista-ol--cuadro__vineta
              span 3
            | <b>Unitarización:</b>, aquí se incluyen el costo de los pallets, los instrumentos de seguridad, la maquinaria, el costo del contenedor, entre otros.

          li 
            .lista-ol--cuadro__vineta
              span 4
            | <b>Almacenamiento:</b>, son los costos de bodegaje en los que se puede incurrir antes de que la mercancía sea embarcada, durante el tránsito internacional, o si hay lugar a transbordos. 

          li 
            .lista-ol--cuadro__vineta
              span 5
            | <b>Manipuleo:</b>, durante la operación del proceso de internacionalización de la mercancía, esta debe ser trasladada o movida de un lugar a otro, implicando manipulación en el país de origen.     

          li 
            .lista-ol--cuadro__vineta
              span 6
            | <b>Transporte:</b>, son los costos o fletes que se deben pagar por la prestación del servicio. 

          li 
            .lista-ol--cuadro__vineta
              span 7
            | <b>Seguro:</b>, costos para asegurar la mercancía; dependen de las características de la carga, del modo de transporte, de la cobertura, entre otros.

          li 
            .lista-ol--cuadro__vineta
              span 8
            | <b>Aduaneros:</b>, relacionados con los derechos e impuestos de aduanas.

          li 
            .lista-ol--cuadro__vineta
              span 9
            | <b>Agente de carga:</b>, costos relacionados con el flete aéreo y terrestre, así como documentación.

          li 
            .lista-ol--cuadro__vineta
              span 10
            | <b>Bancarios:</b>, estos costos dependen de las condiciones pactadas en el contrato de compraventa internacional.

      separador 

    #t_6_2.titulo-segundo
      h2 6.2 Costos durante el transporte principal
    
    p.mb-5  De acuerdo con los actores que intervienen y los movimientos requeridos para el traslado de la mercancía durante su transporte, se encuentran los siguientes costos relacionados:

    .row.justify-content-around.align-items-center
      .col-lg-10
        .row.mb-5
              .col-md-4
                figure
                  img(src='@/assets/tema6/img-2.svg', alt='Texto que describa la imagen')
                  
              .col-md-8.mb-4.mb-md-0

                h4 Agente portuario o aeroportuario: 
                p Costos relacionados con la operación de tránsito en puertos y/o aeropuertos.

              .col-md-4
                figure
                  img(src='@/assets/tema6/img-3.svg', alt='Texto que describa la imagen')
                  
              .col-md-8.mb-4.mb-md-0

                h4 Agentes de aduana:    
                p Costos por representación ante la autoridad aduanera.

              .col-md-4
                figure
                  img(src='@/assets/tema6/img-4.svg', alt='Texto que describa la imagen')
                  
              .col-md-8.mb-4.mb-md-0

                h4 Agente de carga:     
                p Costos relacionados con el flete aéreo y terrestre, así como documentación.

              .col-md-4
                figure
                  img(src='@/assets/tema6/img-5.svg', alt='Texto que describa la imagen')
                  
              .col-md-8.mb-4.mb-md-0

                h4 Transporte:     
                p Son los costos o fletes que se deben pagar por la prestación del servicio. 

              .col-md-4
                figure
                  img(src='@/assets/tema6/img-6.svg', alt='Texto que describa la imagen')
                  
              .col-md-8.mb-4.mb-md-0

                h4 Manipuleo:     
                p Durante la operación del proceso de internacionalización de la mercancía, esta debe ser trasladada o movida de un lugar a otro, implicando manipulación en el tránsito internacional.               

              .col-md-4
                figure
                  img(src='@/assets/tema6/img-7.svg', alt='Texto que describa la imagen')
                  
              .col-md-8.mb-4.mb-md-0

                h4 Seguro:      
                p Costos para asegurar la mercancía; dependen de las características de la carga, del modo de transporte, de la cobertura, entre otros.         

      separador 

    #t_6_3.titulo-segundo
      h2 6.3 Costos en destino
    
    p.mb-5  De acuerdo con los actores que intervienen y los movimientos requeridos para la entrega y el traslado de la mercancía en destino, encontramos los siguientes costos relacionados:

    .row.justify-content-around.align-items-center
      .col-lg-10
        .row.mb-5
              .col-md-4
                h4 Documentación: 
                p costos de la documentación requerida en el país de destino. Se pueden encontrar aquí: facturas, certificados, licencias, vistos buenos, documentos de transporte.
                  
                h4 Almacenamiento: 
                p son los costos de bodegaje en los que se puede incurrir durante el tránsito internacional, si hay lugar a transbordos, o antes de que la mercancía llegue a las instalaciones del comprador en el país de destino. 

                h4 Manipuleo: 
                p durante la operación del proceso de internacionalización de la mercancía, esta debe ser trasladada o movida de un lugar a otro, implicando manipulación en el país de destino.

                h4 Transporte
                p son los costos o fletes que se deben pagar por la prestación del servicio. 

                h4 Seguro:
                p  costos para asegurar la mercancía; dependen de las características de la carga, del modo de transporte, de la cobertura, entre otros. 

                h4 Aduaneros:
                p  relacionados con los derechos e impuestos de aduanas.

                h4 Bancarios:
                p   estos costos dependen de las condiciones pactadas en el contrato de compraventa internacional. 

              .col-md-4
                figure
                  img(src='@/assets/tema6/img-8.svg', alt='Texto que describa la imagen')
                
      separador 

    #t_6_4.titulo-segundo
      h2 6.4 Costos varios
    
    p.mb-5  En el proceso de internacionalización, no solamente nos encontramos con los costos que están directamente relacionados con la operación, sino que también incurrimos en aquellos costos varios o indirectos que son necesarios para cumplir con todo el proceso y que la mercancía finalmente llegue al destino seleccionado. Dichos costos son: 


    .row.justify-content-around.align-items-center.fnd-1
      .col-lg-10
        .row.mb-5
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/tema6/img-9.svg' alt='AvatarTop')
              .tarjeta.t2.color-primario--borde
                .p-4
                  h2.text-center Administrativos: 
                  ul.lista-ul
                    li                       
                      | Son todos aquellos costos que no están directamente relacionados con la operación, pero que son necesarios para su cumplimiento. Por ejemplo: talento humano..

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/tema6/img-10.svg' alt='AvatarTop')
              .tarjeta.color-primario--borde.t2
                .p-4
                  h2.text-center Capital: 
                  ul.lista-ul
                    li                       
                      | Son los costos del inventario que se tiene para realizar la operación.

      separador 

    #t_6_5.titulo-segundo
      h2 6.5  Costos totales
    
    p.mb-5  Finalmente, y luego de conocer los costos de acuerdo a la actividad o al punto donde se originen, es posible resumirlos en la siguiente tabla:       


      //- .titulo-sexto debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      .titulo-sexto.color-acento-contenido
        h5 Tabla 3
        span Costos totales


      //- .tabla-a debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      .tabla-b.color-acento-contenido.mb-5
        .tabla-b__header
          h5.mb-0 Costos totales
        table
     
          tr
            th Embalaje
            td Transporte
            td Agente portuario o Aeroportuario

          tr
            th Documentación
            td Seguro
            td Agente de aduana

          tr
            th Unitarización
            td Aduaneros
            td Agente de carga

          tr
            th Almacenamiento
            td Agente de Carga
            td Administrativos

          tr
            th Manipuleo
            td Bancarios
            td De capital









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
