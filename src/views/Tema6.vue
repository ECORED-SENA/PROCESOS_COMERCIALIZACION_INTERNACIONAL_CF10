<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Costeo de la DFI


    .row.justify-content-center
      .col-lg-10
        figure.mb-5
          img.mx.auto(src='@/assets/tema6/img-1.png')
          
        p.mb-5 En el proceso de internacionalización, y dependiendo de la operación que se esté realizando, es posible verse enfrentado a cumplir con una serie de obligaciones y responsabilidades, así como al pago de costos o tarifas por los diferentes movimientos, maniobras que se requieran o actores que intervienen. Dichos costos se relacionan a continuación, de acuerdo con el punto donde se originan:  
        
        

    #t_6_1.titulo-segundo
      h2 6.1 Costos en origen
    
    p.mb-5  De acuerdo con los actores que intervienen y con los movimientos requeridos para la preparación y traslado de la mercancía en origen, se encuentran los siguientes costos relacionados:

    .row.justify-content-center
      .col-lg-7.mb-5.mb-lg-0
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta(style='border-radius: 100%; min-width: 30px; height: 30px;')
              span #[strong 1]
            p.mb-0 <b>Embalaje:</b>, son los costos relacionados con la preparación de la mercancía en origen.

          li 
            .lista-ol--cuadro__vineta.lista-ol--cuadro__vineta(style='border-radius: 100%; min-width: 30px; height: 30px;')
              span #[strong 2]  
            p.mb-0 <b>Documentación:</b>, costos de la documentación requerida en el país de origen. Se pueden encontrar aquí: facturas, certificados, licencias, vistos buenos, documentos de transporte.

          li 
            .lista-ol--cuadro__vineta(style='border-radius: 100%; min-width: 30px; height: 30px;')
              span #[strong 3]
            p.mb-0 <b>Unitarización:</b>, aquí se incluyen el costo de los pallets, los instrumentos de seguridad, la maquinaria, el costo del contenedor, entre otros.

          li 
            .lista-ol--cuadro__vineta(style='border-radius: 100%; min-width: 30px; height: 30px;')
              span #[strong 4]
            p.mb-0 <b>Almacenamiento:</b>, son los costos de bodegaje en los que se puede incurrir antes de que la mercancía sea embarcada, durante el tránsito internacional, o si hay lugar a transbordos. 

          li 
            .lista-ol--cuadro__vineta(style='border-radius: 100%; min-width: 30px; height: 30px;')
              span #[strong 5]
            p.mb-0 <b>Manipuleo:</b>, durante la operación del proceso de internacionalización de la mercancía, esta debe ser trasladada o movida de un lugar a otro, implicando manipulación en el país de origen.     

          li 
            .lista-ol--cuadro__vineta(style='border-radius: 100%; min-width: 30px; height: 30px;')
              span #[strong 6]
            p.mb-0 <b>Transporte:</b>, son los costos o fletes que se deben pagar por la prestación del servicio. 

          li 
            .lista-ol--cuadro__vineta(style='border-radius: 100%; min-width: 30px; height: 30px;')
              span #[strong 7]
            p.mb-0 <b>Seguro:</b>, costos para asegurar la mercancía; dependen de las características de la carga, del modo de transporte, de la cobertura, entre otros.

          li 
            .lista-ol--cuadro__vineta(style='border-radius: 100%; min-width: 30px; height: 30px;')
              span #[strong 8]
            p.mb-0 <b>Aduaneros:</b>, relacionados con los derechos e impuestos de aduanas.

          li 
            .lista-ol--cuadro__vineta(style='border-radius: 100%; min-width: 30px; height: 30px;')
              span #[strong 9]
            p.mb-0 <b>Agente de carga:</b>, costos relacionados con el flete aéreo y terrestre, así como documentación.

          li 
            .lista-ol--cuadro__vineta(style='border-radius: 100%; min-width: 30px; height: 30px;')
              span #[strong 10]
            p.mb-0 <b>Bancarios:</b>, estos costos dependen de las condiciones pactadas en el contrato de compraventa internacional.
          
      .col-10.col-lg-5.mb-5.mb-lg-0.align-self-center
        figure
          img(src='@/assets/tema6/img2.svg', alt='imagen ambiental' style=' width: 340px')

    
    separador 
    #t_6_2.titulo-segundo
      h2 6.2 Costos durante el transporte principal
    
    p.mb-5  De acuerdo con los actores que intervienen y los movimientos requeridos para el traslado de la mercancía durante su transporte, se encuentran los siguientes costos relacionados:

    .row.justify-content-center
      .col-lg-8
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/tema6/img-2.svg' alt='AvatarTop')
          .tarjeta(style= "background-color: #F3F9FF;")
            .p-4
              h4 Agente portuario o aeroportuario
              p.mb-0 Costos relacionados con la operación de tránsito en puertos y/o aeropuertos.
            
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/tema6/img-3.svg' alt='AvatarTop')
          .tarjeta(style= "background-color: #F3F9FF;")
            .p-4
              h4 Agentes de aduana
              p.mb-0 Costos por representación ante la autoridad aduanera.
            
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/tema6/img-4.svg' alt='AvatarTop')
          .tarjeta(style= "background-color: #F3F9FF;")
            .p-4
              h4 Agente de carga
              p.mb-0 Costos relacionados con el flete aéreo y terrestre, así como documentación.
            
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/tema6/img-5.svg' alt='AvatarTop')
          .tarjeta(style= "background-color: #F3F9FF;")
            .p-4
              h4 Transporte
              p.mb-0 Son los costos o fletes que se deben pagar por la prestación del servicio.
            
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/tema6/img-6.svg' alt='AvatarTop')
          .tarjeta(style= "background-color: #F3F9FF;")
            .p-4
              h4 Manipuleo
              p.mb-0 Durante la operación del proceso de internacionalización de la mercancía, esta debe ser trasladada o movida de un lugar a otro, implicando manipulación en el tránsito internacional.
            
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/tema6/img-7.svg' alt='AvatarTop')
          .tarjeta(style= "background-color: #F3F9FF;")
            .p-4
              h4 Seguro
              p.mb-0 Costos para asegurar la mercancía; dependen de las características de la carga, del modo de transporte, de la cobertura, entre otros.
            
    
    
    separador 
    #t_6_3.titulo-segundo
      h2 6.3 Costos en destino
    
    p.mb-5 De acuerdo con los actores que intervienen y los movimientos requeridos para la entrega y el traslado de la mercancía en destino, encontramos los siguientes costos relacionados:

    .row.justify-content-between(style=' background-color: #bdabf540;')
      .col-lg-7.py-5
        ul.lista-ul.ps-lg-4
          li 
            i.fas.fa-circle(style='color: #FD8F25')
            p.mb-0 #[strong Documentación: ] costos de la documentación requerida en el país de destino. Se pueden encontrar aquí: facturas, certificados, licencias, vistos buenos, documentos de transporte.
              
          li 
            i.fas.fa-circle(style='color: #FD8F25')
            p.mb-0 #[strong Almacenamiento: ]son los costos de bodegaje en los que se puede incurrir durante el tránsito internacional, si hay lugar a transbordos, o antes de que la mercancía llegue a las instalaciones del comprador en el país de destino.
              
          li 
            i.fas.fa-circle(style='color: #FD8F25')
            p.mb-0 #[strong Manipuleo: ] durante la operación del proceso de internacionalización de la mercancía, esta debe ser trasladada o movida de un lugar a otro, implicando manipulación en el país de destino.
              
          li 
            i.fas.fa-circle(style='color: #FD8F25')
            p.mb-0 #[strong Transporte: ] son los costos o fletes que se deben pagar por la prestación del servicio.
              
          li 
            i.fas.fa-circle(style='color: #FD8F25')
            p.mb-0 #[strong Seguro:] costos para asegurar la mercancía; dependen de las características de la carga, del modo de transporte, de la cobertura, entre otros.
              
          li 
            i.fas.fa-circle(style='color: #FD8F25')
            p.mb-0 #[strong Aduaneros: ] relacionados con los derechos e impuestos de aduanas.
              
          li 
            i.fas.fa-circle(style='color: #FD8F25')
            p.mb-0 #[strong Bancarios:] estos costos dependen de las condiciones pactadas en el contrato de compraventa internacional.
            
          
      .col-md-4.pe-0.py-5.align-self-center
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
              .tarjeta.t2.color-acento-botones
                .p-4
                  h2.text-center Administrativos: 
                  ul.lista-ul
                    li                       
                      | Son todos aquellos costos que no están directamente relacionados con la operación, pero que son necesarios para su cumplimiento. Por ejemplo: talento humano..

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/tema6/img-10.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones.t2
                .p-4
                  h2.text-center Capital: 
                  ul.lista-ul
                    li                       
                      | Son los costos del inventario que se tiene para realizar la operación.

    separador 
    #t_6_5.titulo-segundo
      h2 6.5  Costos totales
    
    .row.justify-content-center
      .col-lg-10
        p.mb-5  Finalmente, y luego de conocer los costos de acuerdo a la actividad o al punto donde se originen, es posible resumirlos en la siguiente tabla:       

    .row.justify-content-center
      .col-auto
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 3
          span Costos totales
          
        
        .tabla-b.color-secundario.mb-5
          .tabla-b__header
            h5.mb-0 Costos totales
          table
            tr
              td(style='border-right: 1px solid #e8e8e8') Embalaje
              td(style='border-right: 1px solid #e8e8e8') Transporte
              td Agente portuario o Aeroportuario

            tr(style='background-color: #D2E1F1')
              td(style='border-right: 1px solid #e8e8e8') Documentación
              td(style='border-right: 1px solid #e8e8e8') Seguro
              td Agente de aduana

            tr
              td(style='border-right: 1px solid #e8e8e8') Unitarización
              td(style='border-right: 1px solid #e8e8e8') Aduaneros
              td Agente de carga

            tr(style='background-color: #D2E1F1')
              td(style='border-right: 1px solid #e8e8e8') Almacenamiento
              td(style='border-right: 1px solid #e8e8e8') Agente de Carga
              td Administrativos

            tr
              td(style='border-right: 1px solid #e8e8e8') Manipuleo
              td(style='border-right: 1px solid #e8e8e8') Bancarios
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
