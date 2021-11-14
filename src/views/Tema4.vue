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
          img(src='@/assets/tema4/img-1.png')
          
        p.mb-5  Dentro de un proceso de negociación internacional (venta), intervienen un exportador (vendedor) y un importador (comprador), los cuales se rigen por la legislación de sus países y adquieren, al realizar la operación, unas responsabilidades y unas obligaciones para el manejo de la mercancía. Teniendo en cuenta esto, los Incoterms, o Términos de Negociación Internacional, definen las responsabilidades, costos y riesgos para la entrega de mercancía, desde su punto de origen hasta la llegada a su destino.

    
    
    separador 
    #t_4_1.titulo-segundo
      h2 4.1  Historia de los Incoterms
    
    p.mb-5  Los Incoterms nacen de la necesidad de crear un lenguaje internacional uniforme para los términos comerciales, que puedan utilizar todos los actores involucrados en el proceso de internacionalización (exportación e importación). Este conjunto de normas ha sido revisado y actualizado cada diez años, por lo que su última actualización y versión son los Incoterms 2020. Estos son creados y actualizados por la Cámara de Comercio Internacional, CCI, con sede en Francia. A continuación, una breve cronología:

    .row.mb-5
      .tarjeta.p-4(style='background-color: #bbabf52e')
        LineaTiempoC.color-acento-contenido()
          .row.justify-content-center(titulo="1936")
            .col-md-4.mb-4.mb-md-0
              figure
                img.mx-auto(src='@/assets/tema4/img-2.svg', alt='imagen ambiental' style='width: 250px;')
            .col-md-6.align-self-center
              .p-4(style='background-color: #fff')
                p.mb-0 Nacen los <em>Incoterms</em>, creados por la Cámara de Comercio Internacional, CCI. La primera versión de la CCI incluye 6 <em>incoterms: FOB, FAS, CIF, C&F, Ex Chip y EX Quay</em>

          .row.justify-content-center(titulo="1953")
            .col-md-4.mb-4.mb-md-0
              figure
                img.mx-auto(src='@/assets/tema4/img-2.svg', alt='imagen ambiental' style='width: 250px;')
            .col-md-6.align-self-center
              .p-4(style='background-color: #fff')          
                p.mb-0 Primera revisión de los <em>Incoterms</em>. Se incluyen 3 nuevos términos para el transporte marítimo: <em>FOR (Free on Rail), FOT (Free on Truck)</em> y <em>DCP (Delivered Costs Paid)</em>, más el <em>incoterm EXW.</em>

          .row.justify-content-center(titulo="1967")
            .col-md-4.mb-4.mb-md-0
              figure
                img.mx-auto(src='@/assets/tema4/img-2.svg', alt='imagen ambiental' style='width: 250px;')
            .col-md-6.align-self-center
              .p-4(style='background-color: #fff')
                p Se incorporan dos términos destinados a la entrega en frontera  <em>DAF</em> y entrega en destino <em>DDP.</em>

          .row.justify-content-center(titulo="1976")
            .col-md-6.mb-4.mb-md-0
              figure
                img.mx-auto(src='@/assets/tema4/img-2.svg', alt='imagen ambiental' style='width: 250px;')
            
            .col-md-6.align-self-center
              .p-4(style='background-color: #fff')
                p Se adiciona el <em>Incoterm FOB Airport</em>, para tener mayor claridad en la interpretación de este término en el transporte aéreo.

          .row.justify-content-center(titulo="1980")
            .col-md-4.mb-4.mb-md-0
              figure
                img.mx-auto(src='@/assets/tema4/img-2.svg', alt='imagen ambiental' style='width: 250px;')
            .col-md-6.align-self-center
              .p-4(style='background-color: #fff')               
                p Se adicionan los términos <em>FRC</em> y <em>FCI</em>, que luego evolucionaron a <em>FCA</em> y <em>CIP</em>, respectivamente.

          .row.justify-content-center(titulo="1990")
            .col-md-4.mb-4.mb-md-0
              figure
                img.mx-auto(src='@/assets/tema4/img-2.svg', alt='imagen ambiental' style='width: 250px;')
            .col-md-6.align-self-center
              .p-4(style='background-color: #fff')               
                p Se eliminaron los términos <em>FOR, FOT y FOB airport</em>.

          .row.justify-content-center(titulo="2000")
            .col-md-4.mb-4.mb-md-0
              figure
                img.mx-auto(src='@/assets/tema4/img-2.svg', alt='imagen ambiental' style='width: 250px;')
            .col-md-6.align-self-center
              .p-4(style='background-color: #fff')               
                p Se realiza una revisión con el objetivo de simplificar los términos y  distribuir mejor las responsabilidades y usos de los mismos.

          .row.justify-content-center(titulo="2010")
            .col-md-4.mb-4.mb-md-0
              figure
                img.mx-auto(src='@/assets/tema4/img-2.svg', alt='imagen ambiental' style='width: 250px;')
            .col-md-6.align-self-center
              .p-4(style='background-color: #fff')               
                p Se eliminan los términos <em>DAF, DES, DEQ y DDU</em>, y se añaden dos nuevos, <em>DAT</em> y <em>DAP</em>, quedando en total 11.

          .row.justify-content-center(titulo="2020")
            .col-md-4.mb-4.mb-md-0
              figure
                img.mx-auto(src='@/assets/tema4/img-2.svg', alt='imagen ambiental' style='width: 250px;')
            .col-md-6.align-self-center
              .p-4(style='background-color: #fff')              
                p Se elimina el término <em>DAT</em> y se añade uno nuevo <em>DPU</em> (<em>Delivered at Place Unloaded</em>). Esta actualización se da por:
                p - Expansión en zonas de libre comercio.
                p - Preocupación por la seguridad en los movimientos de mercancía.
                p - Aumento en el uso de las comunicaciones

    .row.justify-content-around.align-items-center 
      .col-lg-10
        .row.p-5(style='background-color: #2cffe242;')
          h4.mb-4 Dentro del alcance de los Incoterms, se tiene que determinar:
          .col-md-8.mb-4.mb-md-0
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
    
    .row.justify-content-center
      .col-lg-10
        .row
          p.mb-5.text-center Dependiendo del modo de transporte, los Incoterms se dividen en dos grupos:
          figure.mb-5
            img(src='@/assets/tema3/img-66.svg')  


    .row.justify-content-center.mb-5
      .col-lg-10
        h4.text-center Aplicables a cualquier modo de transporte
        p.text-center.mb-0 Indiferente del modo de transporte utilizado, se encuentran los siguientes términos de negociación:

        //////tab custom
    .row.justify-content-center.mb-5
        .col-lg-12.mb-4
          
          .row.justify-content-center
            .col-auto.col-sm-6.col-lg-3.mb-4.botone2#defaultOpen(@click="efecTab(events, 'pri')")
              .p-4.cajon-tab
                p.mb-0.text-center EXW –<em> Ex Works </em>/ En Fábrica
              
          .row.justify-content-center
            .col-auto.col-sm-6.col-lg-3.mb-4(@click="efecTab(events, 'seg')")
              .p-4.botone2.cajon-tab
                p.mb-0.text-center FCA – <em>Free Carrier </em>/ Franco Porteador
              
            .col-auto.col-sm-6.col-lg-3.mb-4.botone2(@click="efecTab(events, 'ter')")
              .p-4.cajon-tab
                p.mb-0.text-center CPT – <em>Carriage Paid To </em>/ Transporte Pagado Hasta
              
            .col-auto.col-sm-6.col-lg-3.mb-4.botone2(@click="efecTab(events, 'cuar')")
              .p-4.px-1.cajon-tab
                p.mb-0.text-center CIP – <em>Carriage and Insurance Paid To </em>/ Transporte y Seguros pagados Hasta
              
          .row.justify-content-center
            .col-auto.col-sm-6.col-lg-3.mb-4.botone2(@click="efecTab(events, 'quin')")
              .p-4.cajon-tab
                p.mb-0.text-center DAP – <em>Delivered At Place </em>/ Entregada En Lugar
            
            .col-auto.col-sm-6.col-lg-3.mb-4.botone2(@click="efecTab(events, 'sext')")
              .p-4.px-0.cajon-tab
                p.mb-0.text-center DPU – <em>Delivered At Place Unloaded </em>/ Entregada En Lugar Descargada
                
            .col-auto.col-sm-6.col-lg-3.mb-4.botone2(@click="efecTab(events, 'sept')")
              .p-4.px-3.cajon-tab
                p.mb-0.text-center DDP – <em>Delivered Duty Paid </em>/ Entregada Derechos Pagados
                
        .col-lg-8.px-0
          .row
            .col-auto.bloque2#pri
              .p-4(style='background-color: #F3F9FF')
                h4 EXW – <em>Ex Works </em>/ En Fábrica
                p.mb-0 El vendedor pone la mercancía a disposición del comprador en su propio establecimiento o bodega, y el comprador es responsable desde el cargue de la mercancía. El vendedor no está obligado a realizar el despacho de la exportación.
          .row
            .col-auto.bloque2#seg
              .p-4(style='background-color: #F3F9FF')
                h4 FCA – <em>Free Carrier </em>/ Franco Porteador
                p.mb-0 El vendedor entrega la mercancía en el lugar pactado a la persona designada por el comprador y asume todos los costos y los riesgos hasta este punto de entrega.
          .row
            .col-auto.bloque2#ter
              .p-4(style='background-color: #F3F9FF')
                h4 CPT – <em>Carriage Paid To </em>/ Transporte Pagado Hasta
                p.mb-0 El vendedor entrega la mercancía a la persona designada en el lugar convenido y debe contratar y pagar el transporte hasta el lugar de destino.
          .row
            .col-auto.bloque2#cuar
              .p-4(style='background-color: #F3F9FF')
                h4 CIP – <em>Carriage and Insurance Paid To </em>/ Transporte y Seguros pagados Hasta
                p.mb-0 El vendedor entrega la mercancía a la persona designada en el lugar acordado y debe contratar y pagar el transporte y el seguro de la mercancía hasta el lugar de destino.
          .row
            .col-auto.bloque2#quin
              .p-4(style='background-color: #F3F9FF')
                h4 DAP – <em>Delivered At Place </em>/ Entregada En Lugar 
                p.mb-0 El vendedor entrega la mercancía en el momento que la pone a disposición del comprador en el medio de transporte de llegada y preparada para la descarga en el lugar de destino convenido.
          .row
            .col-auto.bloque2#sext
              .p-4(style='background-color: #F3F9FF')
                h4 DPU – <em>Delivered At Place Unloaded </em>/ Entregada En Lugar Descargada
                p.mb-0 El vendedor entrega la mercancía descargada en lugares de destino en el país del comprador, asegurándose de que tengan los medios para el descargue de la mercancía. Este es el único término donde la mercancía se entrega descargada en destino.
          .row
            .col-auto.bloque2#sept
              .p-4(style='background-color: #F3F9FF')
                h4 DDP – <em>Delivered Duty Paid </em>/ Entregada Derechos Pagados
                p.mb-0 El vendedor entrega la mercancía al comprador en destino, ya nacionalizada y lista para su descargue en el lugar acordado.
              
        ////// end tab custom


    .row.justify-content-center.mb-5
      .col-lg-10
        h4 Marítimo y fluvial
        p.mb-0 Al utilizar el modo de transporte marítimo o fluvial, se encuentran los siguientes términos de negociación:


    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-lg-8
            .row.mb-5
                
              .tarjeta-avatar-b.mb-4
                .tarjeta-avatar-b__img
                  img(src='@/assets/tema4/img-5.svg' alt='AvatarTop')
                .tarjeta(style='background-color: #F3F9FF; border-radius: 0')
                  .p-4
                    h4 <em>FAS – Free Alongside Ship</em> / Franco Al Costado del Buque
                    p.mb-0 El vendedor entrega la mercancía cuando ha sido colocada al costado del buque en el puerto acordado.
              
                  
              .tarjeta-avatar-b.mb-3
                .tarjeta-avatar-b__img
                  img(src="@/assets/tema4/img-6.svg", alt="AvatarTop")
                .tarjeta(style='background-color: #F3F9FF; border-radius: 0')
                  .p-4
                    h4 <em>FOB - Free On Board</em> / Franco A Bordo.   
                    p.mb-0 El vendedor entrega la mercancía cuando ha sido colocada a bordo del buque en el puerto acordado.
                
              .tarjeta-avatar-b.mb-3
                .tarjeta-avatar-b__img
                  img(src="@/assets/tema4/img-7.svg", alt="AvatarTop")
                .tarjeta(style='background-color: #F3F9FF; border-radius: 0')
                  .p-4
                    h4 <em>CFR – Cost And Freight</em> / Costo y Flete  
                    p.mb-0 El vendedor entrega la mercancía cuando esta ha sido colocada a bordo del buque en el puerto convenido, y paga los costos y fletes hasta el puerto de destino.
                
              .tarjeta-avatar-b.mb-3
                .tarjeta-avatar-b__img
                  img(src="@/assets/tema4/img-8.svg", alt="AvatarTop")
                .tarjeta(style='background-color: #F3F9FF; border-radius: 0')
                  .p-4
                    h4 <em>CIF – Cost, Insurance and Freight</em> / Costo, Seguro y Flete  
                    p.mb-0 El vendedor entrega la mercancía cuando ha sido colocada a bordo del buque en el puerto acordado, y paga los costos, el seguro y los fletes hasta el puerto de destino.
        
    
    
    separador 
    #t_4_3.titulo-segundo
      h2 4.3  Obligaciones del comprador y del vendedor


    p.mb-5 Al utilizar los diferentes términos de negociación, el comprador y el vendedor deben cumplir con ciertas responsabilidades y obligaciones, dependiendo del Incoterms seleccionado, las cuales se relacionan en las siguientes tablas:

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 1
      span Obligaciones del comprador.
    
    .row.justify-content-center.mb-5(style='background-color: #f6f6f6')
      .col-lg-12
        .p-5
          figure
            img.mb5(src='@/assets/tema4/img-9.svg')
    
    
    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 2
      span Obligaciones del vendedor.

    .row.justify-content-center(style='background-color: #f6f6f6')
      .col-lg-12
        .p-5
          figure
            img.mx-auto(src='@/assets/tema4/img-10.svg')    








</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })

    document.getElementById('defaultOpen').click()
  },

  updated() {
    this.$aosRefresh()
  },
  methods: {
    efecTab(event, imgName) {
      let i, bloque2, botones2
      bloque2 = document.getElementsByClassName('bloque2')
      for (i = 0; i < bloque2.length; i++) {
        bloque2[i].style.display = 'none'
      }

      botones2 = document.getElementsByClassName('botones2')
      for (i = 0; i < botones2.length; i++) {
        botones2[i].className = bloque2[i].className.replace('active', '')
      }
      document.getElementById(imgName).style.display = 'block'
      event.currentTarget.className += 'active'
    },
  },
}
</script>

<style lang="sass" scoped></style>
