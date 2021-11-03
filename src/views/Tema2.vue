<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 	Análisis de la carga 

    figure.mb-5
      img(src='@/assets/tema2/img-1.svg')

    p.mb-5  Dentro del proceso de la Distribución Física Internacional, se encuentran los diferentes tipos de carga que deben ser transportados de un lugar a otro, teniendo en cuenta las características principales, para facilitar su manejo, distribución y transporte, con el fin de poder determinar y tomar las decisiones más acertadas, de tal manera que llegue a su destino cumpliendo con todos los términos pactados, en el menor tiempo posible y al menor costo.   

    separador

    #t_2_1.titulo-segundo
      h2 2.1 Concepto de carga 

    .row.fnd-1.py-4

      .col-lg-4
        figure
          img.mb-3.img-190(src='@/assets/tema2/img-2.svg')                 

      .col-lg-8.align-self-end.px-5
      
        p La carga es un conjunto de bienes, productos o mercancías, que se encuentran protegidas por un embalaje adecuado y óptimo para facilitar su movilización.          

    separador

    #t_2_2.titulo-segundo
      h2 2.2 Tipos de carga

    p.mb-5 Dentro de la carga, se encuentra una clasificación de acuerdo con sus características y presentación, que se relaciona en la siguiente figura:      

        figure.px-5
          img.mb-5.img-c(src='@/assets/tema2/img-3.svg')   
    br
    h3 Carga general

    p.mb-5 Son cargas de diferente naturaleza, que se transportan conjuntamente en varias cantidades y en unidades independientes. Su principal característica es que se pueden contar el número de bultos y manipular como unidades. Por ejemplo: cilindros, cajas, cartones, botellas, entre otros. La carga general, a su vez, se divide en: 

    TabsC.color-acento-contenido.mb-5.fnd-1
      .py-5.py-md-4(titulo="Carga con embalaje")
        .row.fnd-2.py-5
          .col-md-6
            figure
              img.img-a300(src='@/assets/tema2/img-4.svg', alt='Texto que describa la imagen')     

          .col-md-6.align-self-center
            h4 Carga con embalaje
            p Es la carga que requiere de la protección de un recipiente o embalaje por tener unas características especiales. Por ejemplo: cajas de conservas alimenticias, cajones de repuestos para maquinaria, bidones con químicos, entre otros. 

      .py-3.py-md-4(titulo="Carga suelta, sin embalaje")
        .row.fnd-2.py-3
          .col-md-6
            figure
              img.img-a300(src='@/assets/tema2/img-5.svg', alt='Texto que describa la imagen')

          .col-md-6.align-self-center
            h4 Carga suelta, sin embalaje
            p Este tipo de carga, no requiere embalaje; por ejemplo: rieles, tubos, llantas, piezas, entre otros.
        
      .py-3.py-md-4(titulo="Carga unitarizada")
        .row.fnd-2.py-3
          .col-md-6
            figure
              img.img-a300(src='@/assets/tema2/img-6.svg', alt='Texto que describa la imagen')

          .col-md-6.align-self-center
            h4 Carga unitarizada
            p Es cuando se agrupa una carga general y se embala, con el fin de tener un solo bulto y así poder manipularlo en una sola operación, agilizando también su estiba.
                
      .py-3.py-md-4(titulo="Carga paletizada")
        .row.fnd-2.py-3
          .col-md-6
            figure
              img.img-a300(src='@/assets/tema2/img-7.svg', alt='Texto que describa la imagen')

          .col-md-6.align-self-center
            h4 Carga paletizada
            p Son aquellas mercancías de una misma clase con embalaje estandarizado, que son agrupadas y aseguradas sobre unas paletas, formando un solo bulto, listo para manipularlo con mayor rapidez.

      .py-3.py-md-4(titulo="Carga preeslingada")
        .row.fnd-2.py-3
          .col-md-6
            figure
              img.img-a300(src='@/assets/tema2/img-8.svg', alt='Texto que describa la imagen')

          .col-md-6.align-self-center
            h4 Carga preeslingada
            p Son aquellas cargas que ya vienen listas para ser enganchadas, generalmente son parte de un gran lote. También tienen un embalaje estandarizado.

      .py-3.py-md-4(titulo="Carga contenedorizada")
        .row.fnd-2.py-3
          .col-md-6
            figure
              img.img-a300(src='@/assets/tema2/img-9.svg', alt='Texto que describa la imagen')

          .col-md-6.align-self-center
            h4 Carga contenedorizada
            p Mercancías unitarizadas dentro de un contenedor.


    h3 Carga granel

    p.mb-5 Es aquella carga que es transportada en grandes cantidades y sin embalaje; y que se estiba directamente en la bodega de los buques. Esta puede ser: 

    .row.justify-content-around.align-items-center.fnd-1
      .col-lg-10
        .row.mb-5
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/tema2/img-10.svg' alt='AvatarTop')
              .tarjeta.t2.color-primario--borde
                .p-4
                  h2.text-center Sólida
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right.tt1
                      | Granos comestibles
                    li 
                      i.fas.fa-angle-right.tt1
                      | Minerales
                    li 
                      i.fas.fa-angle-right.tt1
                      | Fertilizantes
                    li 
                      i.fas.fa-angle-right.tt1
                      | Abonos

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/tema2/img-11.svg' alt='AvatarTop')
              .tarjeta.color-primario--borde.t2
                .p-4
                  h2.text-center Líquida
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right.tt1
                      | Petróleo
                    li 
                      i.fas.fa-angle-right.tt1
                      | Lubricantes
                    li 
                      i.fas.fa-angle-right.tt1
                      | Gasolina
                    li 
                      i.fas.fa-angle-right.tt1
                      | Diesel
                    li 
                      i.fas.fa-angle-right.tt1
                      | Sebo  

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/tema2/img-12.svg' alt='AvatarTop')
              .tarjeta.color-primario--borde.t2
                .p-4
                  h2.text-center Gaseosa
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right.tt1
                      | Gas propano
                    li 
                      i.fas.fa-angle-right.tt1
                      | Butano 
                    li 
                      i.fas.fa-angle-right.tt1
                      | Otros 


    separador

    #t_2_3.titulo-segundo
      h2 2.3 Naturaleza de la carga    

    p.mb-5 La naturaleza de la carga determina la elección del transporte y los cuidados que se deben tener. El siguiente recurso detalla cada uno de los tipos que hay:    

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    

    #t_2_4.titulo-segundo
      h2 2.4 Empaque, envase y embalaje

    p.mb-5 Son las condiciones y detalles que se tienen en cuenta a la hora de preparar los productos para su transporte y venta final. Asimismo, pueden garantizar un envío seguro, en las mejores condiciones y con unos costos bajos.           

    p.mb-5 Comprenda un poco más:         
    .row.justify-content-around.align-items-center
      .col-lg-10
        .row.mb-5
          AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta ")
            .row(titulo="Empaque")
              .col-md-4
                figure
                  img(src='@/assets/tema2/img-13.svg', alt='Texto que describa la imagen')
                  
              .col-md-8.mb-4.mb-md-0

                h4 Empaque
                p Es aquel cuyas funciones principales son las de contener, conservar, proteger y facilitar el almacenamiento y la distribución de los productos. En este, podemos encontrar una amplia variedad de materiales, entre los más utilizados para empaques de exportación se pueden mencionar:

                p Plásticos rígidos, semi flexibles y flexibles
                p Cartón rígido y corrugado, papel, madera y sus derivados.
                p Papeles flexibles, como bolsas, láminas y multicapas.

            .row(titulo="Envase")
            
              .col-md-4
                figure
                  img(src='@/assets/tema2/img-14.svg', alt='Texto que describa la imagen')
                  
              .col-md-8.mb-4.mb-md-0

                h4 Envase
                p Es aquel que exhibe o contiene el producto en su presentación individual, dispuesto para la venta de primera mano, y que cumple una función especial, ya que puede impulsar o motivar a los consumidores a adquirir el producto. A este grupo pertenecen las bolsas plásticas, botellas, sistema tetra-brik, enlatados y frascos, entre otros. 

            .row(titulo="Embalaje")
            
              .col-md-4
                figure
                  img(src='@/assets/tema2/img-15.svg')
                  
              .col-md-8.mb-4.mb-md-0

                h4 Embalaje
                p Es aquel que sirve para proteger el producto durante las operaciones de traslado, transporte, y distribución, para que este llegue al destino seleccionado sin sufrir ningún tipo de deterioro, desde el momento en que sale de las instalaciones en que se realizó la producción o el acondicionamiento. Asimismo, facilita el proceso de almacenamiento, unitarización, distribución y manipuleo.    


          .row.justify-content-around.align-items-center
            .col-lg-10
              .row.fnd-3
                p.px-5.py-1.text-center.pt-1.text-bold En la siguiente imagen, se puede observar claramente la diferencia entre los tres conceptos vistos: 

          .row.justify-content-around.align-items-center.fnd-1.mb-5 
            .col-lg-10                
              .row
                .col-md-4
                  h5.text-center Envase primario
                  figure
                    img.img-c.img-150.mb-3(src='@/assets/tema2/img-16-.svg')
                  ul.lista-ul
                    li.img-c
                      i.fas.fa-angle-right.tt1
                      | Lugar y fecha de embarque.
                .col-md-4
                  h5.text-center Envase secundario
                  figure
                    img.img-c.img-150.mb-3(src='@/assets/tema2/img-17-.svg')
                  ul.lista-ul
                    li.img-c
                      i.fas.fa-angle-right.tt1
                      | Empaque
                .col-md-4
                  h5.text-center Envase terciario
                  figure
                    img.img-c.img-150.mb-3(src='@/assets/tema2/img-18-.svg')
                  ul.lista-ul
                    li.img-c
                      i.fas.fa-angle-right.tt1
                      | Embalaje                                       


          p.mb-5 Finalmente, es importante tener en cuenta la marca o el rotulado del empaque, ya que este ayuda en el proceso de identificación o reconocimiento de los productos y, asimismo, facilita el manejo y la ubicación al momento de ser monitoreados. Para realizar una correcta aplicación de la marca, es necesario tener en cuenta los siguientes aspectos, usando las normas internacionales: 

          .row
            SlyderC.mb-5(:datos="datosS")

    separador

    #t_2_5.titulo-segundo
      h2 2.5 Unitarización y factor de estiba 

    p.mb-5 El concepto de unidad de carga significa el agrupamiento de uno o más ítems de carga general que se movilizan como unidad indivisible de carga, con el fin de facilitar el transporte, la manipulación y conservación de la misma y, asimismo, permite evitar daños, pérdidas o saqueos durante su movilización.
          
    p.mb-5 Las dos modalidades más comunes en la unitarización son:
    .row.justify-content-around.align-items-center.fnd-1
      .col-lg-10
        .row.mb-5    
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.color-primario.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/tema2/img-22.svg', alt='Texto que describa la imagen')
                
              h2.text-center a. Paletización<br>
              p consiste en colocar la carga sobre pallets, los cuales son fabricados en diferentes materiales, como es madera, metal, cartón, plástico, entre otros; y que se encuentran regulados con base en dimensiones estándar de la ISO  <em>(International Organization for Standardization).</em>

              p Sus principales características son:

              p ●	Alta resistencia al maltrato de la carga y a los daños accidentales que esta pueda sufrir.
              p ●	Capacidad para soportar la carga.
              p ●	Resistir la manipulación y el almacenamiento sin estropearse.

              p  Sus ventajas:

              p ●	Minimizar las operaciones de cargue y descargue.
              p ●	Optimizar los espacios de almacenamiento, ya que permite mayores alturas de apilado.
              p ●	 Mejor aprovechamiento de los espacios de carga y en los vehículos.
              p ●	Reducción del riesgo de roturas y pérdidas durante la manipulación y el transporte.


            .col-md.tarjeta.color-acento-botones.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/tema2/img-23.svg', alt='Texto que describa la imagen')
                
              h2.text-center b. Contenerización<br>
              p Es el transporte de la mercancía en una unidad llamada contenedor, el cual es un recipiente de carga con unas características específicas, y cuya finalidad es proteger y reunir las mercancías, haciendo más fácil su movilización y transporte; y, además, es lo suficientemente fuerte para ser utilizado varias veces. Se considera como una carga unitaria.            
              p Están fabricados de acuerdo con la normativa ISO <em>(International Organization for Standardization).</em>
              p Sus ventajas:
              p ●	Proteger la carga.
              p ●	Facilitar el manejo de la carga.
              p ●	Facilitar el tráfico de mercancía en el transporte internacional.
              p ●	 Ahorro de costos.


    h2.text-center Tipos de contenedores
              figure
                img(src='@/assets/tema2/img-24.svg', alt='Texto que describa la imagen')

    h2.text-center De las marcas, números y otras anotaciones de los contenedores 
    p Todos los contenedores deben tener una identificación con códigos y marcas, los cuales son regulados por la ISO 6346 y su actualización ISO 2716. 

    p El propietario tiene un código con los siguientes elementos:

    p a) Identificación del propietario: consta de 4 letras, donde las primeras tres letras identifican al propietario y la cuarta letra puede tomar los siguientes valores:


      .row.

      h2 Carga granel

      p.mb-5 Es aquella carga que es transportada en grandes cantidades y sin embalaje; y que se estiba directamente en la bodega de los buques. Esta puede ser: 

        .row.mb-5
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/tema2/img-25.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-primario
                .text-white.p-4
                  p.text-center U - Para todos los contenedores que cumplen la normativa ISO.

                  
                  

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/tema2/img-26.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-primario
                .text-white.p-4
                  p.text-center J - Para contenedores desmontables.
   
                  

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/tema2/img-27.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-primario
                .text-white.p-4
                  p.text-center Z -  Para tráiler y chasis.

          p.mb-5 Este código debe estar registrado en el <em>Bureau International des Containers</em> (BIC).

        p b) Número de serie: consta de 6 dígitos, seguidos de otro separado y que normalmente está encuadrado. Este último es el número de verificación y es usado para validar si el código del propietario, el código del grupo y el número de registro han sido adecuadamente transmitidos según normativa ISO. 

        p Aparte, se encuentra también una serie de marcas de código que indican las medidas y el tipo de contenedor en cada país, así:

        p Adicional a esto, contiene información como el peso máximo autorizado, la tara o el peso neto. (Comunidad Andina, 2021), encontrando marcas adicionales así:

              figure
                img(src='@/assets/tema2/img-28.svg', alt='Texto que describa la imagen')       

 





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosS: [
      {
        texto:
          '<b> Marcas estándar:</b>refiere información general sobre el importador, destino, dirección, número de referencia, número de unidades.',
        imagen: require('@/assets/tema2/img-19.png'),
      },
      {
        texto:
          '<b>Marcas informativas:</b> muestra información adicional, como: país de origen, puerto de salida, puerto de llegada, peso bruto, peso neto, dimensiones de las cajas.',
        imagen: require('@/assets/tema2/img-20.png'),
      },
      {
        texto:
          '<b>Marca de manipulación:</b> muestra toda la información que se requiere conocer para el manejo y las advertencias que se deben tener presentes en el momento de la manipulación y/o el transporte de la carga; para este caso, se deben utilizar los símbolos pictóricos internacionalmente aceptados.',
        imagen: require('@/assets/tema2/img-21.png'),
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
