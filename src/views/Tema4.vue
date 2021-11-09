<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 	Incoterms 2020
    .row.justify-content-around.align-items-center
      .col-lg-10
        figure.mb-5
          img(src='@/assets/tema4/img-1.svg')

        p.mb-5  Dentro de un proceso de negociación internacional (venta), intervienen un exportador (vendedor) y un importador (comprador), los cuales se rigen por la legislación de sus países y adquieren, al realizar la operación, unas responsabilidades y unas obligaciones para el manejo de la mercancía. Teniendo en cuenta esto, los Incoterms, o Términos de Negociación Internacional, definen las responsabilidades, costos y riesgos para la entrega de mercancía, desde su punto de origen hasta la llegada a su destino.

    
      separador 

    #t_4_1.titulo-segundo
      h2 4.1  Historia de los Incoterms
    
    p.mb-5  Los Incoterms nacen de la necesidad de crear un lenguaje internacional uniforme para los términos comerciales, que puedan utilizar todos los actores involucrados en el proceso de internacionalización (exportación e importación). Este conjunto de normas ha sido revisado y actualizado cada diez años, por lo que su última actualización y versión son los Incoterms 2020. Estos son creados y actualizados por la Cámara de Comercio Internacional, CCI, con sede en Francia. A continuación, una breve cronología:

      .tarjeta.tarjeta--gris.p-4.mb-5
        LineaTiempoC.color-acento-contenido(text-small)
          .row(titulo="1936")
            .col-md-4.mb-4.mb-md-0
              figure
                img.img-240(src='@/assets/tema4/img-2.svg', alt='Texto que describa la imagen')
            .col-md-8.align-self-center          
               p Nacen los Incoterms, creados por la Cámara de Comercio Internacional, CCI. La primera versión de la CCI incluye 6 incoterms: FOB, FAS, CIF, C&F, Ex Chip y EX Quay

          .row(titulo="1953")
            .col-md-4.mb-4.mb-md-0
              figure
                img.img-240(src='@/assets/tema4/img-2.svg', alt='Texto que describa la imagen')
            .col-md-8.align-self-center            
               p Primera revisión de los Incoterms. Se incluyen 3 nuevos términos para el transporte marítimo: FOR (Free on Rail), FOT (Free on Truck) y DCP (Delivered Costs Paid), más el incoterm EXW.

          .row(titulo="1967")
            .col-md-4.mb-4.mb-md-0
              figure
                img.img-240(src='@/assets/tema4/img-2.svg', alt='Texto que describa la imagen')
            .col-md-8.align-self-center  
               p Se incorporan dos términos destinados a la entrega en frontera  DAF y entrega en destino DDP.

          .row(titulo="1976")
            .col-md-6.mb-4.mb-md-0
              figure
                img.img-240(src='@/assets/tema4/img-2.svg', alt='Texto que describa la imagen')
             
            .col-md-8.align-self-center  
              p Se adiciona el Incoterm FOB Airport, para tener mayor claridad en la interpretación de este término en el transporte aéreo.

          .row(titulo="1980")
            .col-md-4.mb-4.mb-md-0
              figure
                img.img-240(src='@/assets/tema4/img-2.svg', alt='Texto que describa la imagen')
            .col-md-8.align-self-center                 
               p Se adicionan los términos FRC y FCI, que luego evolucionaron a FCA y CIP, respectivamente.

          .row(titulo="1953")
            .col-md-4.mb-4.mb-md-0
              figure
                img.img-240(src='@/assets/tema4/img-2.svg', alt='Texto que describa la imagen')
            .col-md-8.align-self-center                 
               p Primera revisión de los Incoterms. Se incluyen 3 nuevos términos para el transporte marítimo: FOR (Free on Rail), FOT (Free on Truck) y DCP (Delivered Costs Paid), más el incoterm EXW.

          .row(titulo="1990")
            .col-md-4.mb-4.mb-md-0
              figure
                img.img-240(src='@/assets/tema4/img-2.svg', alt='Texto que describa la imagen')
            .col-md-8.align-self-center                 
               p Se eliminaron los términos FOR, FOT y FOB airport.T (Free on Truck) y DCP (Delivered Costs Paid), más el incoterm EXW.

          .row(titulo="2000")
            .col-md-4.mb-4.mb-md-0
              figure
                img.img-240(src='@/assets/tema4/img-2.svg', alt='Texto que describa la imagen')
            .col-md-8.align-self-center                 
               p Se realiza una revisión con el objetivo de simplificar los términos y  distribuir mejor las responsabilidades y usos de los mismos.

          .row(titulo="2010")
            .col-md-4.mb-4.mb-md-0
              figure
                img.img-240(src='@/assets/tema4/img-2.svg', alt='Texto que describa la imagen')
            .col-md-8.align-self-center                 
               p Se eliminan los términos DAF, DES, DEQ y DDU, y se añaden dos nuevos, DAT y DAP, quedando en total 11.

          .row(titulo="2020")
            .col-md-4.mb-4.mb-md-0
              figure
                img.img-240(src='@/assets/tema4/img-2.svg', alt='Texto que describa la imagen')
            .col-md-8.align-self-center                
               p Se elimina el término DAT y se añade uno nuevo DPU (Delivered at Place Unloaded). Esta actualización se da por:
               p - Expansión en zonas de libre comercio.
               p - Preocupación por la seguridad en los movimientos de mercancía.
               p - Aumento en el uso de las comunicaciones

    .row.justify-content-around.align-items-center 
      .col-lg-10
        .row
          h4 Dentro del alcance de los Incoterms, se tiene que determinar:
          p.mb-5  Los Incoterms nacen de la necesidad de crear un lenguaje internacional uniforme para los términos comerciales, que puedan utilizar todos los actores involucrados en el proceso de internacionalización (exportación e importación). Este conjunto de normas ha sido revisado y actualizado cada diez años, por lo que su última actualización y versión son los Incoterms 2020. Estos son creados y actualizados por la Cámara de Comercio Internacional, CCI, con sede en Francia. A continuación, una breve cronología:
        .row.fnd-1
          .col-md-8.mb-4.mb-md-0
            h4 Tipo de embalaje: 
            ul.lista-ul
              li 
                i.fas.fa-circle.cle
                | Las obligaciones tanto del vendedor como del comprador.
              li 
                i.fas.fa-circle.cle
                | Los riesgos, es decir, el punto de transferencia del riesgo para ambas partes.
              li 
                i.fas.fa-circle.cle
                | Los costos.
              li 
                i.fas.fa-circle.cle
                | Las condiciones de entrega de la mercancía.
              li 
                i.fas.fa-circle.cle
                | El lugar de entrega de la mercancía.
              li 
                i.fas.fa-circle.cle
                | Quién contrata y paga el transporte, así como el seguro de la mercancía.
              li 
                i.fas.fa-circle.cle
                | Los documentos que cada parte tramita y sus costos.


          .col-md-4
            figure
              img.img-240(src='@/assets/tema4/img-3.svg')  


      separador 

    #t_4_2.titulo-segundo
      h2 4.2  Términos multimodales y marítimos
    .row.justify-content-around.align-items-center 
      .col-lg-10
        .row


          p.mb-5.text-center Dependiendo del modo de transporte, los Incoterms se dividen en dos grupos:

            figure.mb-5
              img(src='@/assets/tema3/img-66.svg')  


          h4.text-center Aplicables a cualquier modo de transporte
          p.text-center Indiferente del modo de transporte utilizado, se encuentran los siguientes términos de negociación:



          h2 FCA – Free Carrier/Franco Porteador
          p El vendedor entrega la mercancía en el lugar pactado a la persona designada por el comprador y asume todos los costos y los riesgos hasta este punto de entrega.
          
        h4 Marítimo y fluvial
        p.mb-5 Al utilizar el modo de transporte marítimo o fluvial, se encuentran los siguientes términos de negociación:

      .row.justify-content-around.align-items-center
        .col-lg-10
          .row.mb-5
            .crd_01
              .crd_01__icon
                img(src="@/assets/tema4/img-5.svg", alt="alt").class          
              .crd_01__txt
                h4 FAS – Free Alongside Ship/Franco Al Costado del Buque
                p El vendedor entrega la mercancía cuando ha sido colocada al costado del buque en el puerto acordado.

            .crd_01
              .crd_01__icon
                img(src="@/assets/tema4/img-6.svg", alt="alt").class          
              .crd_01__txt
                h4 FOB - Free On Board/Franco A Bordo.   
                p El vendedor entrega la mercancía cuando ha sido colocada a bordo del buque en el puerto acordado.
           
            .crd_01
              .crd_01__icon
                img(src="@/assets/tema4/img-7.svg", alt="alt").class          
              .crd_01__txt
                    h4 CFR – Cost And Freight/Costo y Flete  
                    p El vendedor entrega la mercancía cuando esta ha sido colocada a bordo del buque en el puerto convenido, y paga los costos y fletes hasta el puerto de destino.
              
            .crd_01
              .crd_01__icon
                img(src="@/assets/tema4/img-8.svg", alt="alt").class          
              .crd_01__txt
                    h4 CIF – Cost, Insurance and Freight/Costo, Seguro y Flete  
                    p El vendedor entrega la mercancía cuando ha sido colocada a bordo del buque en el puerto acordado, y paga los costos, el seguro y los fletes hasta el puerto de destino.       
      
      separador 

    #t_4_3.titulo-segundo
      h2 4.3  Obligaciones del comprador y del vendedor


    p Al utilizar los diferentes términos de negociación, el comprador y el vendedor deben cumplir con ciertas responsabilidades y obligaciones, dependiendo del Incoterms seleccionado, las cuales se relacionan en las siguientes tablas:



    .p.r-n Tabla 1. Obligaciones del comprador
    .row.justify-content-around.align-items-center 
      .col-lg-10
        .row 
          figure
            img.mb5(src='@/assets/tema4/img-9.svg')
    .p.r-n Tabla 2. Obligaciones del vendedor
    .row.justify-content-around.align-items-center 
      .col-lg-10
        .row 
          figure
            img.mb5(src='@/assets/tema4/img-10.svg')    








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
