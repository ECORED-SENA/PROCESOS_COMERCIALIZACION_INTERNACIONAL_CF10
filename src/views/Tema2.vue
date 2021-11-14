<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 	Análisis de la carga 

    .row.justify-content-center
      .col-lg-10
        figure.mb-5
          img.mx.auto(src='@/assets/tema2/img-1.png')
          
        p.mb-5 Dentro del proceso de la Distribución Física Internacional, se encuentran los diferentes tipos de carga que deben ser transportados de un lugar a otro, teniendo en cuenta las características principales, para facilitar su manejo, distribución y transporte, con el fin de poder determinar y tomar las decisiones más acertadas, de tal manera que llegue a su destino cumpliendo con todos los términos pactados, en el menor tiempo posible y al menor costo.   


    #t_2_1.titulo-segundo
      h2 2.1 Concepto de carga 

    .row.justify-content-center.mb-4
        
      .col-auto.col-lg-3.mb-4.mb-lg-0
        figure
          img.mx.auto(src='@/assets/tema2/img-2.svg' style='width: 295px;')
          
      .col.col-sm-auto.col-lg.align-self-end
        .p-4(style='background-color: #F6F6F6;')
          p.mb-0 La carga es un conjunto de bienes, productos o mercancías, que se encuentran protegidas por un embalaje adecuado y óptimo para facilitar su movilización.          

    separador
    #t_2_2.titulo-segundo
      h2 2.2 Tipos de carga

    p.mb-5 Dentro de la carga, se encuentra una clasificación de acuerdo con sus características y presentación, que se relaciona en la siguiente figura:      
    
    figure.mb-5
      img.mx-auto(src='@/assets/tema2/img-3.svg' style='width: 1135px')   
    


    .row.justify-content-center.p-5.pb-0.mb-5(style='background-color: #F3F9FF;')
      h3 Carga general
      p.mb-5 Son cargas de diferente naturaleza, que se transportan conjuntamente en varias cantidades y en unidades independientes. Su principal característica es que se pueden contar el número de bultos y manipular como unidades. Por ejemplo: cilindros, cajas, cartones, botellas, entre otros. La carga general, a su vez, se divide en: 
        
      TabsC.color-acento-contenido.mb-4
        .pb-4(titulo="Carga con embalaje")
          .row.justify-content-center.py-5(style='b border-radius: 10px; background-color: #FFF;')
            .col-7.col-md-5.mb-4.mb-lg-0
              figure
                img.mx-auto(src='@/assets/tema2/img-4.svg', style='width: 500px')
              
            .col-md-5.align-self-center
              h4 Carga con embalaje
              p.mb-0 Es la carga que requiere de la protección de un recipiente o embalaje por tener unas características especiales. Por ejemplo: cajas de conservas alimenticias, cajones de repuestos para maquinaria, bidones con químicos, entre otros. 
          
        .pb-4(titulo="Carga suelta, sin embalaje")
          .row.justify-content-center.py-5(style='b border-radius: 10px; background-color: #FFF;')
            .col-7.col-md-5.mb-4.mb-lg-0
              figure
                img.mx-auto(src='@/assets/tema2/img-5.png', style='width: 295px;')
                
            .col-md-6.align-self-center
              h4 Carga suelta, sin embalaje
              p.mb-0 Este tipo de carga, no requiere embalaje; por ejemplo: rieles, tubos, llantas, piezas, entre otros.
          
        .pb-4(titulo="Carga unitarizada")
          .row.justify-content-center.py-5(style='b border-radius: 10px; background-color: #FFF;')
            .col-7.col-md-5.mb-4.mb-lg-0
              figure
                img.mx-auto(src='@/assets/tema2/img-6.png', style='width: 500px;')
              
            .col-md-6.align-self-center
              h4 Carga unitarizada
              p.mb-0 Es cuando se agrupa una carga general y se embala, con el fin de tener un solo bulto y así poder manipularlo en una sola operación, agilizando también su estiba.
                  
        .pb-4(titulo="Carga paletizada")
          .row.justify-content-center.py-5(style='b border-radius: 10px; background-color: #FFF;')
            .col-7.col-md-5.mb-4.mb-lg-0
              figure
                img.mx-auto(src='@/assets/tema2/img-7.png', style='width: 460px')
              
            .col-md-6.align-self-center
              h4 Carga paletizada
              p.mb-0 Son aquellas mercancías de una misma clase con embalaje estandarizado, que son agrupadas y aseguradas sobre unas paletas, formando un solo bulto, listo para manipularlo con mayor rapidez.
            
        .pb-4(titulo="Carga preeslingada")
          .row.justify-content-center.py-5(style='b border-radius: 10px; background-color: #FFF;')
            .col-7.col-md-5.mb-4.mb-lg-0
              figure
                img.mx-auto(src='@/assets/tema2/img-8.png', style='width: 500px')
                
            .col-md-6.align-self-center
              h4 Carga preeslingada
              p.mb-0 Son aquellas cargas que ya vienen listas para ser enganchadas, generalmente son parte de un gran lote. También tienen un embalaje estandarizado.
              
        .pb-4(titulo="Carga contenedorizada")
          .row.justify-content-center.py-5(style='b border-radius: 10px; background-color: #FFF;')
            .col-7.col-md-5.mb-4.mb-lg-0
              figure
                img.mx-auto(src='@/assets/tema2/img-9.png', style='width: 500px')
              
            .col-md-6.align-self-center
              h4 Carga contenedorizada
              p Mercancías unitarizadas dentro de un contenedor.

    .row.justify-content-center.p-5.pb-0.mb-5(style='background-color: #F3F9FF;')
      h3 Carga granel
      p.mb-5 Es aquella carga que es transportada en grandes cantidades y sin embalaje; y que se estiba directamente en la bodega de los buques. Esta puede ser: 
        
      .col-lg-12
        .row.justify-content-around.align-items-center.fnd-1
          .col-lg-10
            .row.mb-5
              .col-md-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar
                  img(src='@/assets/tema2/img10.png' alt='AvatarTop')
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
                  img(src='@/assets/tema2/img11.png' alt='AvatarTop')
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
                  img(src='@/assets/tema2/img12.png' alt='AvatarTop' style='width: ')
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

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    


    separador
    #t_2_4.titulo-segundo
      h2 2.4 Empaque, envase y embalaje

    p.mb-4 Son las condiciones y detalles que se tienen en cuenta a la hora de preparar los productos para su transporte y venta final. Asimismo, pueden garantizar un envío seguro, en las mejores condiciones y con unos costos bajos.           
    p.mb-5 Comprenda un poco más:

    .row.justify-content-center
      .col-lg-10
        .row.mb-5
          AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris2")
            .row.justify-content-center(titulo="Empaque")
              .col-8.col-md-4.mb-4.mb-lg-0.align-self-center
                figure
                  img(src='@/assets/tema2/img-13.svg', alt='imagen ambiental')
                  
              .col-md-8.align-self-center
                p Es aquel cuyas funciones principales son las de contener, conservar, proteger y facilitar el almacenamiento y la distribución de los productos. En este, podemos encontrar una amplia variedad de materiales, entre los más utilizados para empaques de exportación se pueden mencionar:
                p Plásticos rígidos, semi flexibles y flexibles
                p Cartón rígido y corrugado, papel, madera y sus derivados.
                p.mb-0 Papeles flexibles, como bolsas, láminas y multicapas.

            .row.justify-content-center(titulo="Envase")
            
              .col-8.col-md-4.mb-4.mb-lg-0.align-self-center
                figure
                  img(src='@/assets/tema2/img-14.svg', alt='Texto que describa la imagen')
                  
              .col-md-8.align-self-center
                p.mb-0 Es aquel que exhibe o contiene el producto en su presentación individual, dispuesto para la venta de primera mano, y que cumple una función especial, ya que puede impulsar o motivar a los consumidores para adquirir el producto. A este grupo pertenecen las bolsas plásticas, botellas, sistema tetra-brik, enlatados y frascos, entre otros. 

            .row.justify-content-center(titulo="Embalaje")
                  
              .col-8.col-md-4.mb-4.mb-lg-0.align-self-center
                figure
                  img(src='@/assets/tema2/img-15.svg')
                  
              .col-md-8.align-self-center
                p.mb-0 Es aquel que sirve para proteger el producto durante las operaciones de traslado, transporte, y distribución, para que este llegue al destino seleccionado sin sufrir ningún tipo de deterioro, desde el momento en que sale de las instalaciones en que se realizó la producción o el acondicionamiento. Asimismo, facilita el proceso de almacenamiento, unitarización, distribución y manipuleo.
                
          .row.justify-content-around.align-items-center
            .col-lg-10
              .row.fnd-3
                p.px-5.py-1.text-center.pt-1.text-bold En la siguiente imagen, se puede observar claramente la diferencia entre los tres conceptos vistos: 

          .row.justify-content-around.align-items-center.fnd-1.mb-0
            .col-lg-10                
              .row
                .col-md-4
                  h5.text-center Envase primario
                  figure
                    img.img-c.img-150.mb-3(src='@/assets/tema2/img-16.png')
                  ul.lista-ul
                    li.img-c
                      i.fas.fa-angle-right.tt1
                      | Envase o envoltura
                .col-md-4
                  h5.text-center Envase secundario
                  figure
                    img.img-c.img-150.mb-3(src='@/assets/tema2/img-17.png')
                  ul.lista-ul
                    li.img-c
                      i.fas.fa-angle-right.tt1
                      | Empaque
                .col-md-4
                  h5.text-center Envase terciario
                  figure
                    img.img-c.img-150.mb-3(src='@/assets/tema2/img-18.png')
                  ul.lista-ul
                    li.img-c
                      i.fas.fa-angle-right.tt1
                      | Embalaje                                       
          
    .row.justify-content-center
      .col-lg-10    
        p.mb-5 Finalmente, es importante tener en cuenta la marca o el rotulado del empaque, ya que este ayuda en el proceso de identificación o reconocimiento de los productos y, asimismo, facilita el manejo y la ubicación al momento de ser monitoreados. Para realizar una correcta aplicación de la marca, es necesario tener en cuenta los siguientes aspectos, usando las normas internacionales: 
          
        .tarjeta.tarjeta--azul.p-4.pb-0.px-0.mb-5
          SlyderA
            .row.justify-content-center
              .col-lg-12
                .row.justify-content-center.mb-4.pb-lg-5
                  .col-md-12.mb-4.mb-md-0.align-self-center.align-items-center
                    figure.mb-lg-3
                      img.mx-auto(src='@/assets/tema2/img-19.svg', alt='', style='width: 750px')
                  
                .row.justify-content-center.mb-0
                  .col-lg-12
                    .p-4(style="background-color: #bdadf540; border-bottom-right-radius: 20px; border-bottom-left-radius: 20px;")
                      .row.justify-content-center
                        .col-md-11
                          p.mb-0.ps-lg-2 
                            b Marcas estándar: 
                            b-none refiere información general sobre el importador, destino, dirección, número de referencia, número de unidades.
            
            .row.justify-content-center
              .col-lg-12
                .row.justify-content-center.mb-4
                  .col-md-12.mb-4.mb-md-0.align-self-center
                    figure
                      img.mx-auto(src='@/assets/tema2/img-20.svg', alt='', style='width: 400px')
                  
                .row.justify-content-center.mb-0
                  .col-lg-12
                    .p-4(style="background-color: #bdadf540; border-bottom-right-radius: 20px; border-bottom-left-radius: 20px;")
                      .row.justify-content-center
                        .col-md-11
                            p.mb-0.ps-lg-2 
                              b Marcas informativas: 
                              b-none muestra información adicional, como: país de origen, puerto de salida, puerto de llegada, peso bruto, peso neto, dimensiones de las cajas.
            
            .row.justify-content-center
              .col-lg-12
                .row.justify-content-center.mb-4
                  .col-md-12.mb-4.mb-md-0.align-self-center
                    figure
                      img.mx-auto(src='@/assets/tema2/img-21.svg', alt='', style='width: 370px')
                  
                .row.justify-content-center.mb-0
                  .col-lg-12
                    .p-4(style="background-color: #bdadf540; border-bottom-right-radius: 20px; border-bottom-left-radius: 20px;")
                      .row.justify-content-center
                        .col-md-11
                            p.mb-0.ps-lg-2
                              b Marca de manipulación:  
                              b-none muestra toda la información que se requiere conocer para el manejo y las advertencias que se deben tener presentes en el momento de la manipulación y/o el transporte de la carga; para este caso, se deben utilizar los símbolos pictóricos internacionalmente aceptados.



    separador
    #t_2_5.titulo-segundo
      h2 2.5 Unitarización y factor de estiba 

    p.mb-5 El concepto de unidad de carga significa el agrupamiento de uno o más ítems de carga general que se movilizan como unidad indivisible de carga, con el fin de facilitar el transporte, la manipulación y conservación de la misma y, asimismo, permite evitar daños, pérdidas o saqueos durante su movilización.
          
    p.mb-5 Las dos modalidades más comunes en la unitarización son:
    .row.justify-content-around.align-items-center
      .col-lg-10
        .row.mb-5    
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.color-primario.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/tema2/img-22.svg', alt='Texto que describa la imagen')
                
              h2.text-center a. Paletización<br>
              p Consiste en colocar la carga sobre pallets, los cuales son fabricados en diferentes materiales, como es madera, metal, cartón, plástico, entre otros; y que se encuentran regulados con base en dimensiones estándar de la ISO  <em>(International Organization for Standardization).</em>

              p Sus principales características son:

              p <span class='text-white'> ●	</span>Alta resistencia al maltrato de la carga y a los daños accidentales que esta pueda sufrir.
              p <span class='text-white'> ●	</span>Capacidad para soportar la carga.
              p <span class='text-white'> ●	</span>Resistir la manipulación y el almacenamiento sin estropearse.

              p  Sus ventajas:

              p <span class='text-white'> ●	</span>Minimizar las operaciones de cargue y descargue.
              p <span class='text-white'> ●	</span>Optimizar los espacios de almacenamiento, ya que permite mayores alturas de apilado.
              p <span class='text-white'> ●	</span>Mejor aprovechamiento de los espacios de carga y en los vehículos.
              p <span class='text-white'> ●	</span>Reducción del riesgo de roturas y pérdidas durante la manipulación y el transporte.


            .col-md.tarjeta.color-secundario.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/tema2/img-23.svg', alt='Texto que describa la imagen')
                
              h2.text-center b. Contenerización<br>
              p Es el transporte de la mercancía en una unidad llamada contenedor, el cual es un recipiente de carga con unas características específicas, y cuya finalidad es proteger y reunir las mercancías, haciendo más fácil su movilización y transporte; y, además, es lo suficientemente fuerte para ser utilizado varias veces. Se considera como una carga unitaria.            
              p Están fabricados de acuerdo con la normativa ISO <em>(International Organization for Standardization).</em>
              p Sus ventajas:
              p <span class='tt1'> ●	</span>Proteger la carga.
              p <span class='tt1'> ●	</span>Facilitar el manejo de la carga.
              p <span class='tt1'> ●	</span>Facilitar el tráfico de mercancía en el transporte internacional.
              p <span class='tt1'> ●	</span>Ahorro de costos.



    .row.justify-content-center
      .col-lg-10
        .row.fnd-33
          p.text-white.px-5.py-1.text-center.pt-1.text-bold Tipos de contenedores
                
    .row.justify-content-center(style=' background-color: #F6F6F6;')
      .col-lg-10.pt-5.mb-5
        p.mb-5 De acuerdo con las características de la carga, existen diferentes tipos de contenedores:
        .row.justify-content-center.mb-5
          .col-lg-12
            ImagenInfografica.color-acento-contenido
              template(v-slot:imagen)
                figure
                  img(src='@/assets/tema2/img-24.svg', alt='Tipos de contenedores') 
                    
              .tarjeta.color-acento-contenido.p-3(x="3%" y="32.5%" style="b border-radius: 10pxackground-color: #FFD400; border-radius: 10px")  
                h4 Estándar o <em>Dryvan</em>
                p.mb-0  Contenedores en varias dimensiones estandarizados por la ISO, cerrados herméticamente y sin refrigeración o ventilación. Este tipo de contenedor es el más utilizado, y se puede encontrar en tamaños de 20 y 40 pies.
                        
              .tarjeta.color-acento-contenido.p-3(x="39%" y="32.8%" style="b border-radius: 10pxackground-color: #FFD400; border-radius: 10px")
                h4 <em>Reefer</em>
                p.mb-0 Son contenedores refrigerados, que cuentan con sistemas para la conservación del frío o del calor. Requieren siempre de conexión en el camión, en puerto y en el buque. Son utilizados para el transporte de carga perecedera como frutas y flores.frescas
                          
              .tarjeta.color-acento-contenido.p-3(x="75.3%" y="32.5%" style="b border-radius: 10pxackground-color: #FFD400; border-radius: 10px")  
                h4 <em> Tank</em> o contenerdo tanque
                p.mb-0  Están hechos de acero u otros materiales corrosivos que proporcionan seguridad. Son utilizados para el transporte de gases o líquidos, y los podemos encontrar en diferentes medidas, siendo los más utilizados los de 20 y 40 pies.
                        
              .tarjeta.color-acento-contenido.p-3(x="3%" y="94.5%" style="b border-radius: 10pxackground-color: #FFD400; border-radius: 10px")  
                h4 <em>Open Side</em>
                p.mb-0  Este contenedor tiene apertura en uno de sus lados. Se utilizan para transporte de carga de mayor longitud, que requieren de espacios más amplios y que no pueden ser cargados por la puerta del contenedor.
                        
              .tarjeta.color-acento-contenido.p-3(x="39%" y="94.8%" style="b border-radius: 10pxackground-color: #FFD400; border-radius: 10px")
                      h4 <em>Open Top</em>
                      p.mb-0 Este tipo de contenedor es con apertura superior. Pueden ser de 20 o 40 pies y se utilizan para transporte donde la mercancía puede sobresalir.
                          
              .tarjeta.color-acento-contenido.p-3(x="75.3%" y="94.8%" style="b border-radius: 10pxackground-color: #FFD400; border-radius: 10px")
                h4 <em>Flash Rack</em>
                p.mb-0 Contenedores con paredes abatibles y con apertura superior. Pueden ser de 20 o 40 pies, y se utilizan para el transporte de cargas atípicas. 
                          
        .row.justify-content-center.mb-5
          .col-lg-10
            .row.fnd-33.mb-5
              p.text-white.px-5.py-1.text-center.pt-1.text-bold De las marcas, números y otras anotaciones de los contenedores 
          p Todos los contenedores deben tener una identificación con códigos y marcas, los cuales son regulados por la ISO 6346 y su actualización ISO 2716. 
          p.mb-5 El propietario tiene un código con los siguientes elementos:
            
          p.mb-5 <b>a) Identificación del propietario:</b> consta de 4 letras, donde las primeras tres letras identifican al propietario y la cuarta letra puede tomar los siguientes valores:
            
          .row.justify-content-center
            .col-lg-10
              .row.justify-content-center
                .col-md-6.col-lg.mb-5
                  .tarjeta-avatar
                    img(src='@/assets/tema2/img-25.svg' alt='AvatarTop')
                    .tarjeta.color-secundario--borde.t2.fnd-2
                      .p-4
                        p.text-center <b>U</b> - Para todos los contenedores que cumplen la normativa ISO.
                  
                
                .col-md-6.col-lg.mb-5
                  .tarjeta-avatar
                    img(src='@/assets/tema2/img-26.svg' alt='AvatarTop')
                    .tarjeta.color-secundario--borde.t2.fnd-2
                      .p-4
                        p.text-center <b>J </b>- Para contenedores desmontables.
                        
                
                .col-md-6.col-lg.mb-5
                  .tarjeta-avatar
                    img(src='@/assets/tema2/img-27.svg' alt='AvatarTop')
                    .tarjeta.color-secundario--borde.t2.fnd-2
                      .p-4
                        p.text-center <b>Z</b> -  Para tráiler y chasis.
                
                p.mb-0 Este código debe estar registrado en el <em>Bureau International des Containers</em> (BIC).
          
        .row.justify-content-center.mb-5
          p.mb-4 <b>b) Número de serie:</b> consta de 6 dígitos, seguidos de otro separado y que normalmente está encuadrado. Este último es el número de verificación y es usado para validar si el código del propietario, el código del grupo y el número de registro han sido adecuadamente transmitidos según normativa ISO. 
          p.mb-0 Aparte, se encuentra también una serie de marcas de código que indican las medidas y el tipo de contenedor en cada país, así:
              
        .row.justify-content-center.md-5
          .col-lg-10
            LineaTiempoD.color-acento-contenido.mb-5
              .row(numero="1" titulo="Para indicar el país del contenedor")
                .col-md-12
                  p Se usa la abreviación de dicho país (US para Estados Unidos de América, GB para Gran Bretaña, entre otros).
                  
              .row(numero="2" titulo="El primer dígito")
                .col-md-12
                  p  Indica el tamaño del contenedor, por ejemplo, con el número 2, se hace referencia a un contenedor de 20 pies, y con el número 4, se hace referencia a un contenedor de 40 pies.
                  
              .row(numero="3" titulo="El segundo dígito")
                .col-md-12
                  p Indica la altura del contenedor, por ejemplo, el número 3 indica que es un contenedor de 8’6’’ con túnel para remolque. 
                  
                  
              .row(numero="4" titulo="El tercer dígito")
                .col-md-12
                  p Indica el tipo de contenedor, por ejemplo, el número 1 indica que es un contenedor cerrado con ventilación al exterior.
                  
                  
              .row(numero="5" titulo="El último dígito")
                .col-md-12
                  p Especifica características especiales.
                  
                  
                  
        .row.justify-content-center.md-5
          .col-lg-12
            p.mb-5 Adicional a esto, contiene información como el peso máximo autorizado, la tara o el peso neto. (Comunidad Andina, 2021), encontrando marcas adicionales así:
            
            
        .row.justify-content-center
          .col-lg-8
            ImagenInfografica.color-acento-contenido
              template(v-slot:imagen)
                figure
                  img(src='@/assets/tema2/img-28.svg', alt='Tipos de contenedores') 
                        
              .tarjeta.color-acento-contenido.p-3(x="15%" y="10.5%" style="background-color: #FFD400; border-radius: 10px")  
                p.mb-0.text-center Sello de certificación
                  
              .tarjeta.color-acento-contenido.p-3(x="15%" y="32.5%" style="background-color: #FFD400; border-radius: 10px")  
                p.mb-0.text-center Aviso de peso
                    
              .tarjeta.color-acento-contenido.p-3(x="15%" y="48.5%" style="background-color: #FFD400; border-radius: 10px")  
                p.mb-0.text-center Aviso de altura
                    
              .tarjeta.color-acento-contenido.p-3(x="35%" y="10.5%" style="background-color: #FFD400; border-radius: 10px")  
                p.mb-0.text-center Logotipo del propietario
                    
              .tarjeta.color-acento-contenido.p-3(x="35%" y="32.5%" style="background-color: #FFD400; border-radius: 10px")  
                p.mb-0.text-center Placa CSC-CCC
                    
                    
              .tarjeta.color-acento-contenido.p-3(x="52.5%" y="13%" style="background-color: #FFD400; border-radius: 10px")  
                p.mb-0.text-center Código del propietario
                    
              .tarjeta.color-acento-contenido.p-3(x="52.5%" y="17.5%" style="background-color: #FFD400; border-radius: 10px")  
                p.mb-0.text-center Número de serie
                    
              .tarjeta.color-acento-contenido.p-3(x="52.5%" y="22.5%" style="background-color: #FFD400; border-radius: 10px")  
                p.mb-0.text-center Propiedades del contenedor
                    
              .tarjeta.color-acento-contenido.p-3(x="52.5%" y="32.5%" style="background-color: #FFD400; border-radius: 10px")  
                p.mb-0.text-center Masa bruta máxima
                    
              .tarjeta.color-acento-contenido.p-3(x="52.5%" y="37.5%" style="background-color: #FFD400; border-radius: 10px")  
                p.mb-0.text-center Tara
              
              .tarjeta.color-acento-contenido.p-3(x="52.5%" y="53.5%" style="background-color: #FFD400; border-radius: 10px")  
                p.mb-0.text-center Peso neto
                    
              .tarjeta.color-acento-contenido.p-3(x="52.5%" y="48.5%" style="background-color: #FFD400; border-radius: 10px")  
                p.mb-0.text-center Volumen interno
                    
              .tarjeta.color-acento-contenido.p-3(x="83%" y="17%" style="background-color: #FFD400; border-radius: 10px")  
                p.mb-0.text-center Dígito de control
                    
                    







</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({}),
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
