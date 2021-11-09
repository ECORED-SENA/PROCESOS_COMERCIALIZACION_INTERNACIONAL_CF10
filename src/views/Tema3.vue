<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 	Modos y medios de transporte 
    .row.justify-content-around.align-items-center
      .col-lg-10
        .row.mb-5
          figure.mb-5
            img(src='@/assets/tema3/img-1.svg')

          p.mb-5  Dentro del proceso logístico, el transporte es de suma importancia, pues garantiza el traslado de la mercancía de un lugar a otro, para que esta llegue a su destino en las mejores condiciones y cumpliendo con acuerdos principales, como:
          .row.justify-content-around.align-items-center
            .col-lg-10
              .row.mb-5
                hr
                .crd_01
                  .crd_01__icon
                    .cc1
                      h1.cc3 1           
                  .crd_01__txt
                    p <b>Llegar dentro del plazo acordado</b>, usando los vehículos adecuados.
                hr
                .crd_01
                  .crd_01__icon
                    .cc1
                      h1.cc3 2      
                  .crd_01__txt
                    p <b>Entregar sin deterioro</b>, con protección física idónea.
                hr
          p Para seleccionar el mejor modo y medio de transporte, es importante conocer y tener en cuenta tanto la naturaleza de la carga como su volumen y, asimismo, los recursos económicos, ya que algunos casos pueden ser costosos o no, dependiendo de los requerimientos que se tengan para su traslado, como el tiempo, el destino, la disponibilidad, la confiabilidad, las restricciones, entre otros. 

      separador 

    #t_3_1.titulo-segundo
      h2 3.1 Modos de transporte 

    p Es el sistema o el método que se utiliza para realizar el traslado de la mercancía. Puede ser marítimo, aéreo, terrestre o ferroviario. 

    ImagenInfograficaB.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/tema3/img-3-.svg')

      div(x="33.75%" y="39.6%" tooltip="Aéreo")
        .row.justify-content-around.align-items-center.align-self-center.fnd-b
          .col-md-8 
            h3 Aéreo
            P Es el medio más ágil y rápido para el desarrollo de operaciones logísticas en el comercio internacional.
            h5 Ventajas:
            ul.lista-ul
              li
                | Entrega de las mercancías justo en el momento que se necesitan. 
              li
                | Tasa de siniestralidad muy baja.
              li
                | Idóneo para tránsitos de mercancía de alto valor, documentos, muestras, piezas, mercancías urgentes, perecederos.
              li
                | Es una vía muy utilizada para llegar a mercados poco accesibles.
              li
                | La logística es menos compleja.

            .h5 Desventajas:
            ul.lista-ul
              li
                |  Restricciones técnicas y de seguridad.
              li
                | Altamente contaminante.
              li
                | Precios elevados de flete.
              li
                | Inadecuado para transporte de mercancías a granel, peso o volumen.
              li
                | Limitaciones en cuanto a las dimensiones, tamaño y peso.

            
          .col-md-4
            figure
              img(src='@/assets/tema3/img-4.svg')

      div(x="66.6%" y="38.1%" tooltip="Terrestre")
        .row.justify-content-around.align-items-center.align-self-center.fnd-b
          .col-md-8 
            h3 Terrestre
            p Es el modo más utilizado para el transporte de mercancía y el más asequible para todo tipo de empresas. 
            h5 Ventajas:
            ul.lista-ul
              li
                | Ofrece entregas rápidas y confiables.
              li
                | Es más flexible, ya que permite la entrega de la mercancía puerta a puerta.
              li
                |Versátil.
            h5 Desventajas:
            ul.lista-ul
              li
                | Guerra en tarifas y fletes.
              li
                | Inseguridad en las carreteras.
              li
                |Congestiones de tráfico.
              li
                |Condiciones de las vías.
              li
                |Limitaciones en cuanto a las dimensiones y tamaño, por restricciones en carretera.

          .col-md-4
            figure
              img(src='@/assets/tema3/img-5.svg')


      div(x="35%" y="69%" tooltip="Ferroviario")
        .row.justify-content-around.align-items-center.align-self-center.fnd-b
          .col-md-8 
            h3 Ferroviario
            p Es el transporte de mercancía sobre una vía férrea.
            h5 Ventajas:
            ul.lista-ul
              li
                | Capacidad para transportar grandes cantidades.
              li
                | Recorrido de largas distancias.
              li
                | Menor contaminación.
              li
                | Ofrece diferentes tipos de vehículos, de acuerdo con las características de la carga. 
                
            h5 Desventajas:
            ul.lista-ul
              li
                | No tiene acceso a todas las rutas.
              li
                | Es inadecuado y muy costoso para recorridos cortos.
              li
                | Baja velocidad.
          .col-md-4
            figure
              img(src='@/assets/tema3/img-6.svg')
      div(x="67.8%" y="67.5%" tooltip="Marítimo")
        .row.justify-content-around.align-items-center.align-self-center.fnd-b
          .col-md-8 
            h3 Marítimo
            p Es utilizado para el transporte de mercancía de grandes volúmenes, para recorrer largas distancias y a unos costos bajos. 
            h5 Ventajas:
            ul.lista-ul
              li
                | El volumen y la capacidad de almacenaje de los buques.
              li 
                | Los fletes marítimos son muy competitivos y económicos. 
              li 
                | Las condiciones climatológicas no impiden su flujo, gracias a la robustez, resistencia y fiabilidad de los buques, ya que estos pueden desenvolverse con gran facilidad en ambientes complejos o inestables.
              li 
                | Es un modo de transporte que permite el traslado de carga líquida o peligrosa.
              li 
                | El nivel de alcance y cobertura de este medio es casi absoluto. 
              li 
                | Es muy seguro.

            h6 Desventajas:
            ul.lista-ul
              li
                | La tramitología es extensa y complicada, por el número de permisos y formularios que deben tramitarse para su utilización.
              li 
                | El tiempo es uno de los puntos más débiles, puesto que este es lento y más elevado que el transporte aéreo/terrestre.
          .col-md-4
            figure
              img(src='@/assets/tema3/img-3.svg')
    
    separador 

    #t_3_2.titulo-segundo
      h2 3.2	Medios de transporte
    
    p.mb-5  Es el vehículo utilizado para realizar la operación, teniendo en cuenta el modo de transporte seleccionado. Pueden ser buque, avión, camión o ferrocarril.

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
                 
    separador

    #t_3_3.titulo-segundo
      h2 3.3 Fletes de transporte 

    p.mb-5 Es el precio o los costos inherentes al transporte, es decir, lo que se debe pagar por el traslado de una mercancía, desde su lugar de origen hasta su lugar de destino, en el medio de transporte seleccionado, y este se calcula de acuerdo con el peso o volumen de la carga, encontrando: 

    .row.justify-content-around.align-items-center
      .col-lg-10
        .row.mb-0 
          .row.justify-content-around.align-items-center
            .col-lg-10
              .row.mb-0.fnd-3a
                h4.text-white.text-center.pt-3 Flete marítimo

        .row.mb-5.fnd-1  
          p.mb-5 Es el costo que debe pagarse por el transporte de mercancía de un puerto a otro. Esta tarifa se establece de acuerdo con el peso, volumen de la carga o unidad (contenedor) de transporte utilizada. Se componen de:
          
          .row
            TabsA.color-acento-contenido.mb-5
              .tarjeta.color-secundario--borde.p-4(titulo="Tarifa básica")
                p Es el pago que se realiza directamente al transportador, o por medio de un agente, por el transporte y llegada de las mercancías en óptimas condiciones a su destino. Estos valores dependen de factores como: el tipo de mercancía, los costos de operación tanto del buque como los portuarios, la ruta seleccionada y la oferta y demanda de estos.

              .tarjeta.color-secundario--borde.p-4(titulo="Recargos")          
                p Son aquellos costos adicionales que están determinados por situaciones puntuales que pueden afectar los costos del transportador, ya que no los puede controlar directamente, y que finalmente se suman a la tarifa básica. Dichos costos son:
                ul.lista-ul
                  li 
                    i.fas.fa-angle-circule
                    | Fluctuaciones en el precio del combustible (BAF). 
                  li 
                    i.fas.fa-angle-circule
                    | Ajustes por tipo de cambio (CAF). 
                  li 
                    i.fas.fa-angle-circule
                    | Recargo por demoras congestión) en los puertos (CS).
                  li 
                    i.fasfa-angle-circule
                    | Seguridad en los puertos (CSF).
                  li 
                    i.fas.fa-angle-circule
                    | Manejo portuario (THC).

              .tarjeta.color-secundario--borde.p-4(titulo="Descuentos")      
                p Son los descuentos que se realizan teniendo en cuenta la fidelidad de los clientes, los volúmenes transportados y su frecuencia, por operaciones especiales, entre otros, y que se calculan sobre la tarifa básica.

          h3.mb-5 Tipos de contratación 
          p.mb-5 De acuerdo con el servicio contratado, es posible encontrar:
            
          LineaTiempoD.color-primario.mb-5
            .row(numero="1" titulo="Servicio intermodal")
              p Es el servicio que se utiliza al usar dos o más medios de transporte diferentes entre dos puntos, y para los cuales se deben tener presentes los requerimientos efectuados por el contratante de la carga.

            .row(numero="2" titulo="Servicio puerta (door)")
              p Es el servicio que se utiliza para entregar la mercancía en destino, teniendo en cuenta que el transportador es responsable de transportar la carga desde la bodega definida por el embarcador (origen) hasta la bodega designada por el consignatario (destino). Todos los costos relacionados corren por cuenta del transportista.

            .row(numero="3" titulo="Servicio puerto (pier)")
              p La línea naviera es responsable de transportar la carga desde el puerto de origen hasta el puerto de destino. Aquí, el usuario es el responsable de su costo, y se clasifican en:
            
              ul.lista-ul
                li 
                  i.fas.fa-circle.cle
                  | <b>Servicio house to house:</b> el exportador es responsable del transporte, desde el punto de origen hasta el punto de destino, incluidos los distintos pasos intermedios.
                li 
                  i.fas.fa-circle.cle
                  | <b> Servicio house to pier:</b> el exportador es responsable del transporte desde el punto de partida hasta que la mercancía se halle a bordo del buque en el puerto de origen.
                li 
                  i.fas.fa-circle.cle
                  | <b>Servicio pier to house:</b> el importador es responsable del transporte, desde que la mercancía se encuentra a bordo del buque en el puerto de destino, hasta el punto de destino final.


          h3.mb-5 Tipos de flete 
          p.mb-5 Dependiendo de la operación incluida dentro del proceso de transporte de la mercancía, es posible encontrar diferentes tipos de fletes o tarifas:


          TabsA.color-acento-contenido.mb-5
              .tarjeta.fnd-2.p-4.tab-aaa(titulo="Free In (F.I.)")
                p Incluye transporte, desestiba y descargue en puerto destino. El vendedor queda a cargo del cargue y estibe en puerto de origen.
              .tarjeta.fnd-2.p-4.tab-aaa(titulo="Free Out (F.O.)")
                p Incluye cargue en origen, estiba y transporte. El comprador queda a cargo de desestibe y descargue en puerto destino.
              .tarjeta.fnd-2.p-4.tab-aaa(titulo="Free In and Out (F.I.O)")
                p No incluye cargue ni descargue, solamente incluye el transporte.
              .tarjeta.fnd-2.p-4.tab-aaa(titulo="Free In, Out and Stowed (F.I.O.S.)")
                p No incluye cargue ni descargue ni trimado.
              .tarjeta.fnd-2.p-4.tab-aaa(titulo="Free In, Out, Stowed and Trimmed (F.I.O.S.T.)")
                p No incluye el transporte
              .tarjeta.fnd-2.p-4.tab-aaa(titulo="Free In/Liner Out (F.I.L.O.)")
                p Aquí es posible escoger entre el costo del cargue, o cargue y estibe o cargue, estibe y trincado.
              .tarjeta.fnd-2.p-4.tab-aaa(titulo="Liner In/Free Out (L.I.F.O)")
                p Aquí es posible escoger entre descargue, o descargue y desestibe, o descargue, desestibe y destrincado.

          h3 Liquidación 
          p El flete consiste en una tarifa básica y diferentes tipos de recargos que se aplican por tráfico y para todas las mercancías movilizadas. Así pues, la tarifa básica es el costo del transporte de un producto determinado entre dos puntos o lugares específicos; y los recargos son los elementos que se suman a dicha tarifa con la finalidad de poder compensar las variaciones en los costos y/o condiciones de la operación.
          
          .row.fondo-i
            .col-lg-10
              .row
                .col-lg-8.align-self-center.fnd-bl
                
                  p Para la liquidación de los fletes marítimos, se toma el factor que más favorezca, ya sea por el peso (tonelada) o por el volumen (m3-p3) de cada embarque; y dicha relación también es conocida como "factor de estiba", el cual varía según la densidad y peso específico de cada producto. Por esto, es importante que el exportador siempre conozca cuál es la relación de su mercancía, para conocer por qué factor se le realizará la liquidación; y esta relación se puede calcular así:  
                  figure
                    img.img-c.img-190(src='@/assets/tema3/frml.svg')   

                .col-lg-4  
                    
    .row.justify-content-around.align-items-center
      .col-lg-10
        .row.mb-0 
          .row.justify-content-around.align-items-center
            .col-lg-10
                .row.mb-0.fnd-3a
                  h4.text-white.text-center.pt-3 Flete aéreo

          .row.fnd-1a  
            
            .col-md-8.p-5
              p Es el costo que debe pagarse por el transporte de mercancía de un aeropuerto a otro.
              ul.lista-ul
                li 
                  i.fas.fa-circle.cle
                  | <b>Tipos de fletes</b>
              ul.lista-ul
                li
                  | Dependiendo del peso y características de la carga, es posible encontrar diferentes tipos de fletes o tarifas:
            .col-md-4.align-self-start.a-izq   
                  figure
                    img(src='@/assets/tema3/img-45.svg')

          .row.justify-content-around.align-items-center.fnd-1
            .col-lg-9

              .row.mb-5
                hr
                .crd_01
                  .crd_01__icon
                    .cc1
                      h1.cc3 a           
                  .crd_01__txt
                    p <b>Por carga general (General Cargo Rates): </b>para todo tipo de carga. Es posible encontrar:
                      ul.lista-ul                    
                  
                      li 
                        i.fas.fa-angle-circule.cle
                        | <b>Flete normal,</b> para cargas con peso máximo de 45 kilos
                      li 
                        i.fas.fa-angle-circule
                        | <b>Flete con descuento,</b>  para cargas con peso superior a los 45 kilos. Existen escalas de descuento dependiendo del peso.
                hr
                .crd_01
                  .crd_01__icon
                    .cc1
                      h1.cc3 b      
                  .crd_01__txt
                    p <b>Por clase de mercancía (Class Rates):</b>, aplica para algunos tipos de mercancía, como catálogos, revistas, oro, animales vivos, entre otros.
                hr
                .crd_01
                  .crd_01__icon
                    .cc1
                      h1.cc3 c      
                  .crd_01__txt
                    p <b>Por carga específica (Specific Commodity Rates): </b>, aplica cuando, regularmente, se realizan envíos con un peso mínimo del mismo producto al mismo destino.
                hr

                .crd_01
                  .crd_01__icon
                    .cc1
                      h1.cc3 d      
                  .crd_01__txt
                    p <b>Por unidd de transporte (ULD Rates): </b>,se aplica una tarifa fija según la unidad o medio utilizado.
                hr
            h3 Liquidación 
            p.mb-5 Para la liquidación del flete aéreo, se debe tener en cuenta la cantidad en dólares, u otra moneda, que se cobra por cada kilo de peso bruto o de volumen, a conveniencia de la aerolínea.  


            .row.justify-content-around.align-items-center
              
                .row.fnd-gris.mb-5.justify-content-around.align-items-center
                  .col-lg-8.align-self-center
                  
                    p El exportador podrá aproximar la cantidad de kilos a la escala de la tarifa inmediatamente superior si con esto ve que el flete total es más bajo. Para calcular y conocer los kilos de volumen, se tiene la siguiente fórmula:
                    figure
                      img.img-c.img-190(src='@/assets/tema3/forml2.svg')   

                  .col-lg-4
                    figure
                      img.py-3.img-400(src='@/assets/tema3/img-46.svg')             

            p La tarifa depende del volumen del embarque, así pues, a mayor cantidad, menor tarifa. En este sentido, se encuentran escalas de 1 a 44kg, de 45 a 99Kg, más de 100kg, más de 300kg, más de 500kg y más de 1.000 kg.

            p Cada una de las aerolíneas, a través de la IATA, establece tarifas generales de carga para cada una de sus rutas, teniendo en cuenta el origen y el destino, esto es, el valor mínimo por contrato y las escalas y tarifas correspondientes. 

            p De igual forma, el exportador debe pagar otros cargos adicionales como son:

            .row.mb-5
              .col-md-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar.mt-0.pt-0
                  figure
                    img.py-3.img-400(src='@/assets/tema3/img-63.svg')   
              .col-md-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar.mt-0.pt-0
                  figure
                    img.py-3.img-400(src='@/assets/tema3/img-63.svg')   

              .col-md-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar.mt-0.pt-0
                  figure
                    img.py-3.img-400(src='@/assets/tema3/img-63.svg')   

            h3 Modalidades de pago
            p Dependiendo del momento en el que se realizará el pago del flete, se pueden encontrar las siguientes modalidades:

            .row.mb-5


              .col-md-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar.t-av
                  img.img-65(src='@/assets/tema3/1.svg' alt='AvatarTop')
        
                  .tarjeta.color-primario--borde
                    .p-4
                      p.text-center 
                        b Prepagado (Prepaid):  
                      p.text-center Los fletes son cancelados en el momento del embarque de la mercancía.

              .col-md-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar.t-av
                  img.img-65(src='@/assets/tema3/2.svg' alt='AvatarTop')
        
                  .tarjeta.color-acento-contenido--borde
                    .p-4
                      p.text-center 
                        b Por cobrar (Collect):  
                      p.text-center  Los fletes se cancelan en destino por el comprador.

              .col-md-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar.t-av
                  img.img-65(src='@/assets/tema3/3.svg' alt='AvatarTop')
        
                  .tarjeta.color-acento-botones--borde
                    .p-4
                      p.text-center 
                        b De retorno (Return Freight): 
                      p.text-center Flete que paga el exportador cuando la mercancía enviada es rechazada en el puerto de destino o cuando esta se entrega en un puerto distinto al pactado en el conocimiento de embarque.

              .col-md-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar.t-av
                  img.img-65(src='@/assets/tema3/4.svg' alt='AvatarTop')
        
                  .tarjeta.color-secundario--borde.fnd-2
                    .p-4
                  
                      p.text-center 
                        b Prorrateado (Prorate Freight): 
                      p.text-center Se paga cuando no es posible entregar la mercancía en el puerto de destino y por tanto debe desviarse a otro puerto, por lo cual se genera un flete proporcional por el nuevo trayecto.

            p.mb-5.text-center Al momento de fijar o negociar el flete, es importante tener en cuenta algunos factores:
  
            .crd_02.mb-5
              .crd_02__icon
                figure
                  img(src='@/assets/tema3/img-47.svg')      
              .crd_02__txt
                h4 Ruta: 
                p Existen tarifas específicas en cada ruta, relacionadas con características como puertos, tiempo de tránsito, entre otros.


            .crd_02.mb-5
              .crd_02__icon
                figure
                  img(src='@/assets/tema3/img-48.svg')      
              .crd_02__txt
                h4 Producto: 
                p Este factor es importante, ya que los productos se encuentran clasificados por su nombre técnico y sus características, con el fin de poder fijar con precisión la tarifa.


            .crd_02.mb-5
              .crd_02__icon
                figure
                  img(src='@/assets/tema3/img-49.svg')      
              .crd_02__txt
                h4 Valor comercial:  
                p Para ciertos productos, las tarifas siguen una escala progresiva y ascendente, pues el valor de la mercancía por tonelada – flete define el costo final del mismo.

            .crd_02.mb-5
              .crd_02__icon
                figure
                  img(src='@/assets/tema3/img-50.svg')      
              .crd_02__txt
                  h4 Relación peso-volumen:   
                  p En este factor, las tarifas siguen una escala progresiva y ascendente, teniendo en cuenta el factor de estiba.

            .crd_02.mb-5
              .crd_02__icon
                figure
                  img(src='@/assets/tema3/img-51.svg')      
              .crd_02__txt
                          h4 Tipo de embalaje:    
                          p Este factor determina el grado de complejidad de la mercancía para su manipulación y transporte.

            .crd_02.mb-5
              .crd_02__icon
                figure
                  img(src='@/assets/tema3/img-52.svg')      
              .crd_02__txt
                          h4 Unitarización de la carga:    
                          p Se cotizan las tarifas de acuerdo con la unidad de carga de que se trate, que por lo general son menores, debido a su fácil manejo.

            .crd_02.mb-5
              .crd_02__icon
                figure
                  img(src='@/assets/tema3/img-53.svg')      
              .crd_02__txt
                  h4 Productos peligrosos:     
                  p Este factor para fijar el flete depende del grado de peligrosidad de los productos, y se verá reflejado en los recargos aplicados.

    separador

    #t_3_3.titulo-segundo
      h2 3.4  Consolidación y desconsolidación (FCL, LCL)

    p.mb-5 Permite lograr la optimización del espacio del contenedor, así como facilitar la manipulación y circulación de la mercancía dentro de este. Generalmente, es utilizada por las pequeñas y medianas empresas, por el bajo volumen que manejan. Se consolida la carga, que consiste en la agrupación de varias cargas de diferentes empresas, en una misma unidad de transporte, a menores costos; y la desconsolidación, que consiste en desagrupar aquella carga consolidada. 

    .row.justify-content-around.align-items-center
      .col-lg-10
        .row.mb-0 
          .row.mb-0.fnd-3a.pt-4
            p.text-white.text-center.pt-6 <b>A la hora de contratar el contenedor, se puede hacer de la siguiente forma:   </b>
          .row.justify-content-around.align-items-center.degra
            .col-lg-10
          
              .row.mb-5    
                .tarjeta--container.row.mb-5
                  .col-md.tarjeta.p-5
                    .row.justify-content-center.mb-4
                      .col-10
                        figure
                          img(src='@/assets/tema3/img-54.svg')
                      
                    h3.text-center FCL (Full Container Load)<br>
                    p En este caso, el importador o el exportador hacen uso exclusivo de todo el contenedor, es decir, es llenado únicamente con su mercancía. En este caso, ya el transportador o el agente reciben el contenedor con la carga lista y embalada. Hay un único dueño y una única carga en el contenedor.     

                  .col-md.tarjeta.p-5
                    .row.justify-content-center.mb-4
                      .col-10
                        figure
                          img(src='@/assets/tema3/img-55.svg', alt='Texto que describa la imagen')
                      
                    h3.text-center ZONAS FRANCAS DE SERVICIOS<br>
                    p A diferencia del término anterior, en este caso, el llenado del contenedor se realiza con mercancías de diferentes empresas, ya que no es posible hacer el llenado de este con una sola carga de una sola empresa; por tanto, aquí la responsabilidad corre por cuenta de la línea naviera. En este caso, el transportador o el agente reciben las piezas de diferentes exportadores para ser consolidadas. 
                    p Es esta una de las mejores opciones para aquellas empresas pequeñas y medianas que manejan bajos volúmenes de mercancía.  

    separador

    #t_3_5.titulo-segundo
      h2 3.5  Riesgos y seguros
    p.mb-5 El seguro es la forma más obvia y antigua de controlar el riesgo. A continuación, se encuentran los principales riesgos de transporte y las pólizas con mejor cobertura:

    .row.justify-content-around.align-items-center
      .col-lg-10
        .row.mb-0 
          .row.justify-content-around.align-items-center
            .col-lg-10
              .row.mb-0.fnd-3a
                p.text-white.text-center.pt-2 <b>Riesgos</b>
      
    .row.justify-content-around.align-items-center.fnd-1.mb-5
      .col-lg-10
        .row.mb-5
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/tema3/img-56.svg' alt='AvatarTop')
              .tarjeta.t2.color-primario--borde
                .p-4
                  h2.text-center Marítimo
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right.tt1
                      | Incendios y explosión.
                    li 
                      i.fas.fa-angle-right.tt1
                      | Hundimientos, varada o colisión
                    li 
                      i.fas.fa-angle-right.tt1
                      | Pérdidas de bultos.
                    li 
                      i.fas.fa-angle-right.tt1
                      | Avería gruesa o general.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/tema3/img-57.svg' alt='AvatarTop')
              .tarjeta.color-primario--borde.t2
                .p-4
                  h2.text-center Aéreo
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right.tt1
                      | Accidentes o colisiones.
                    li 
                      i.fas.fa-angle-right.tt1
                      | Caída de la aeronave.
                    li 
                      i.fas.fa-angle-right.tt1
                      | Escalas o paradas forzosas.
                    li 
                      i.fas.fa-angle-right.tt1
                      | Incendios.
                    li 
                      i.fas.fa-angle-right.tt1
                      | Rayos o explosión. 

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/tema3/img-58.svg' alt='AvatarTop')
              .tarjeta.color-primario--borde.t2
                .p-4
                  h2.text-center Terrestre
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right.tt1
                      | Accidentes.
                    li 
                      i.fas.fa-angle-right.tt1
                      | Choque por volcamiento.
                    li 
                      i.fas.fa-angle-right.tt1
                      | Derrumbes. 
                    li 
                      i.fas.fa-angle-right.tt1
                      | Incendios o explosiones.
                    li 
                      i.fas.fa-angle-right.tt1
                      | Huelgas o paros.
                    li 
                      i.fas.fa-angle-right.tt1
                      | Saqueos. 

           
                    
    .row.justify-content-around.align-items-center
      .col-lg-10
        .row.mb-0 
          .row.justify-content-around.align-items-center
            .col-lg-10
              .row.mb-0.fnd-3a
                p.text-white.text-center.pt-2 <b>Seguros</b>

        .row.mb-5.fnd-1  
          p En los seguros, las pólizas ofrecen una cobertura completa, que comprende:  
                 
          TabsA.color-secundario.mb-5
            .tarjeta.color-acento-botones--borde.p-4(titulo="Cobertura básica o pérdida total")
              h4 Cobertura básica o pérdida total
              p Esta cubre las pérdidas o daños (parciales o totales) que sufra la mercancía transportada, como consecuencia de los siguientes eventos:
               ul.lista-ul
                li
                  | Accidente del vehículo transportador.
                li
                  | Incendio, rayo, explosión y los hechos tendientes a extinguir el fuego originado por estas causas.
                li
                  | Caídas accidentales de bultos al mar durante la navegación o durante las operaciones de cargue, descargue o transbordo.
                li
                  | Avería general, común o gruesa, entendiéndose como tal la contribución que proporcionalmente corresponda al asegurado cuando, durante el transporte marítimo o fluvial, se incurra intencional y razonablemente en algún sacrificio o gasto extraordinario para preservar la seguridad de las propiedades comprometidas en la misma aventura, ejemplo: gastos para desencallar un buque, echazón de la mercancía al agua para evitar un naufragio, entre otros.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Falta de entrega") 
              h4 Falta de entrega
              p Cubre la desaparición por extravío, hurto o hurto calificado de uno o más bultos completos (empaque y contenido) en que se halle dividido el despacho.      
            .tarjeta.color-acento-botones--borde.p-4(titulo="Avería particular") 
              h4 Avería particular
              p Cubre los daños físicos que sufran las mercancías durante el trayecto asegurado, tales como roturas, abolladuras, derrame de líquidos, contaminación y similares. Es conveniente tener en cuenta que cuando los daños son como consecuencia de un accidente del vehículo transportador, estos están cubiertos bajo el amparo básico.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Saqueo")                
              h4 Saqueo
              p Este amparo cubre las sustracciones parciales o totales del contenido que se encuentre en una o varias de las unidades de empaque que configuran el despacho. La diferencia entre los amparos de falta de entrega y saqueo consiste en que el primero hace relación tanto al empaque como al contenido. 
              p Los siguientes bienes no podrán asegurarse en la póliza de mercancías, ya que son objeto de la póliza de transporte de valores:
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Monedas y billetes.

                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Metales y piedras preciosas, objetos y joyas de piedras preciosas.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Billetes de lotería, bonos oficiales, cédulas hipotecarias, acciones, títulos valores, estampillas de timbre y correo sin sellar, cheques de viajero y, en general, toda clase de documentos representativos de valores.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Cartas geográficas, mapas o planos.  

          h3 Vigencia 

          p La vigencia del seguro se da cuando los bienes quedan a disposición del transportador y este finaliza con su entrega al destinatario o a quien los represente, en el lugar de destino establecido en la póliza. Puede ser:
          .row
            .col-lg-9.px-5
              hr
              .crd_01
                .crd_01__icon.mx-4
                  .cc1
                    h1.cc3 a

                .crd_01__txt
                  p En importaciones: aquí la vigencia del seguro se da con el evento que ocurra primero: la entrega de los bienes en su destino final o el vencimiento de 45 días comunes contados a partir de la fecha de llegada del vehículo que los haya transportado desde el exterior.
              hr
              .crd_01
                .crd_01__icon.mx-4
                  .cc1
                    h1.cc3 b

                .crd_01__txt
                  p En exportaciones: aquí la vigencia del seguro se da con el evento que ocurra primero: la entrega de la mercancía en su destino final o el vencimiento de 30 días comunes contados a partir de la fecha de llegada del vehículo que los haya transportado hasta el lugar de embarque o desembarque.
              hr
            .col-lg-3.align-self-center
              figure
                img(src='@/assets/tema3/img-59.svg')


    separador        

    #t_3_6.titulo-segundo
      h2 3.6  Documentos de transporte
    p.mb-5 De acuerdo con el medio de transporte, existe un documento o contrato de transporte, que es un acuerdo entre las partes para disponer la mercancía a cargo de un transportista para su traslado desde el lugar de origen hasta el destino, y estos son emitidos por las compañías de transporte. Representan:


    .row.justify-content-around.align-items-center
      .col-lg-10
        .row.mb-5
            .crd_02.mb-5.crd_a 
              .crd_02__icon
                figure
                  img(src='@/assets/tema3/img-60.svg')      
              .crd_02__txt.p-3
                h4 Marítimo: 
                p El documento de transporte es el Conocimiento de Embarque o BL, donde consta la titularidad de la mercancía, el recibo de la mercancía y las condiciones y términos en las que se realiza el transporte (contrato). Este documento es negociable y puede transferirse a un tercero. Es emitido por la naviera.

            .crd_02.mb-5.crd_a 
              .crd_02__icon
                figure
                  img(src='@/assets/tema3/img-61.svg')      
              .crd_02__txt.p-3
                h4 Aéreo:   
                p El documento de transporte es la Guía Aérea o Air Waybill, donde solo se indica la aceptación de las mercancías para ser transportadas, y es un documento no negociable que cubre el envío entre dos aeropuertos. Es emitida por la aerolínea. 

            .crd_02.mb-5.crd_a 
              .crd_02__icon
                figure
                  img(src='@/assets/tema3/img-62.svg')      
              .crd_02__txt.p-3
                h4 Terrestre:   
                p El documento de transporte es la Carta Porte o CMR, donde se establecen las responsabilidades y obligaciones de las partes. Generalmente, es el conductor quien completa el formulario, pero es finalmente el exportador el responsable de toda la información y quien firma dicho documento. No se considera título de propiedad y es un documento no negociable.




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder1: [
      {
        titulo: 'Buques',
        texto:
          'De acuerdo con las características de la carga, como naturaleza, peso, volumen, entre otras, existen diferentes tipos de buques: Portacontenedores: Son buques que, por su capacidad y forma, transportan su carga en contenedores estándar. ',

        imagen: require('@/assets/tema3/img-11.svg'),

        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Buques',
        texto:
          'De acuerdo con las características de la carga, como naturaleza, peso, volumen, entre otras, existen diferentes tipos de buques:Graneleros para cargas sólidas (en inglés, Bulk Carrier): Son buques que transportan mercancía a granel, como minerales, granos, semillas, y que, para tal fin, tienen un diseño que permite el acceso a sus bodegas para facilitar el cargue y el descargue. ',
        imagen: require('@/assets/tema3/img-12.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Buques',
        texto:
          'De acuerdo con las características de la carga, como naturaleza, peso, volumen, entre otras, existen diferentes tipos de buques:Buque tanque: Son buques que se utilizan para el transporte de carga líquida y, de acuerdo al tipo de líquido que llevan, reciben su nombre. Por ejemplo, si transportan crudos de petróleo, se llaman petroleros; para gases licuados, se llaman gaseros (por ejemplo, los metaneros); para productos químicos, se llaman quimiqueros. ',
        imagen: require('@/assets/tema3/img-13.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Buques',
        texto:
          'De acuerdo con las características de la carga, como naturaleza, peso, volumen, entre otras, existen diferentes tipos de buques: Frigorífico: Se utilizan para el transporte de productos perecederos, los cuales, por su condición, requieren un ambiente con temperatura controlada, como son las frutas, verduras, carnes, pescados, productos lácteos y otros alimentos.',
        imagen: require('@/assets/tema3/img-14.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Buques',
        texto:
          'De acuerdo con las características de la carga, como naturaleza, peso, volumen, entre otras, existen diferentes tipos de buques: Roll on/Roll Off (Ro-Ro): Utilizados para el transporte de carga rodante, es decir, son capaces de transportar cualquier plataforma con ruedas y esto gracias a su diseño que cuenta con una rampa de acceso.',
        imagen: require('@/assets/tema3/img-15.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Buques',
        texto:
          'De acuerdo con las características de la carga, como naturaleza, peso, volumen, entre otras, existen diferentes tipos de buques: Buque de ganado: Diseñados para el transporte de animales vivos, con áreas especiales para su alimentación.',
        imagen: require('@/assets/tema3/img-16.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
    ],

    datosSlyder2: [
      {
        titulo: 'Aviones de carga y pasajeros',
        texto:
          'Dentro del transporte aéreo, se cuenta con los aviones mixtos, aquellos que transportan carga y pasajeros. Las personas se encuentran en la cabina y las mercancías en las bodegas. Lo más usados son: Airbus 319: Es un avión mixto, es decir, entre pasajeros y carga, esta última va en su bodega, la diferencia de este es que solo es para carga suelta.',
        imagen: require('@/assets/tema3/img-20.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Airbus 320 y 321: ',
        texto:
          'Tienen  capacidad para cargar una línea de pallets al igual que una aeronave mayor, pero con una altura más reducida. El Airbus a320 tiene capacidad para 4 pallets y carga suelta, con un volumen de 19 m3 y una capacidad de 1.5 toneladas.',
        imagen: require('@/assets/tema3/img-21.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Airbus 330:',
        texto:
          'Tienen una capacidad para 5 pallets y carga suelta, con un volumen de 64.5 m3 y una  capacidad: 10.3 toneladas.',
        imagen: require('@/assets/tema3/img-22.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Airbus 440:',
        texto:
          'Es un avión mixto, es decir, transporta pasajeros y transporta carga, la cual va en su bodega. Posee amplias zonas para el cargue de pallets, un área trasera de carga a granel, y está equipado con amplias puertas de carga en su parte delantera y posterior, para carga de pallets o contenedores de 88″ X 125″ o 96″ X 125″.',
        imagen: require('@/assets/tema3/img-23.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Boeing 737:',
        texto:
          'Posee dos bahías centrales de carga, es solo para el transporte de carga suelta y tiene una capacidad de 2 toneladas.',
        imagen: require('@/assets/tema3/img-24.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Boeing 777 – 200:',
        texto:
          'Posee zonas de carga adelante y atrás, el área para la carga suelta se encuentra en la parte trasera de la aeronave, con una capacidad para 6 pallets y carga suelta, con un volumen de 80 m3 y una capacidad de 18 toneladas.',
        imagen: require('@/assets/tema3/img-25.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Boeing 747: ',
        texto:
          'Es un avión mixto, es decir, entre pasajeros y carga, posee zonas de carga para pallets en sus partes delanteras y posteriores. Está dotado con amplias puertas para cargar pallets o contenedores de 88″ o 96″ x 125″, con una capacidad para 6 pallets y carga suelta y hasta 13 toneladas.',
        imagen: require('@/assets/tema3/img-26.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
    ],

    datosSlyder3: [
      {
        titulo: 'Camiones',
        texto:
          'De acuerdo con laDe acuerdo con las características de la carga, como naturaleza, peso, volumen, entre otros, existen diferentes tipos de camiones:s características de la carga, como naturaleza, peso, volumen, entre otras, existen diferentes tipos de buques: Camión: Vehículo utilizado para el transporte de carga mediana, gracias a su gran tamaño, capacidad y fuerza.',
        imagen: require('@/assets/tema3/img-29.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tracto camión:',
        texto:
          'Vehículos utilizados para el transporte de contenedores y de grandes cantidades de carga, por lo que están destinados a soportar y arrastrar tráiler, semirremolques y remolques. ',
        imagen: require('@/assets/tema3/img-30.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Remolque articulado:',
        texto:
          'Vehículos que están formados por al menos dos estructuras rígidas, unidas por un punto de articulación..',
        imagen: require('@/assets/tema3/img-31.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Camión refrigerado:',
        texto:
          'Vehículo especializado para el transporte de mercancía perecedera y diseñado con un dispositivo especial para regular y controlar la temperatura interior.',
        imagen: require('@/assets/tema3/img-32.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Camión cisterna:',
        texto:
          'Vehículo especializado para el transporte de líquidos, gases y químicos.',
        imagen: require('@/assets/tema3/img-33.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Camión tolva:',
        texto:
          'Diseñado con un cajón especial que puede levantarse a través de un sistema hidráulico para volcar su contenido. Utilizado para el transporte de productos granulados o pulverizados.',
        imagen: require('@/assets/tema3/img-34.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Camión cama baja:',
        texto:
          'Diseñado con una plataforma que permite el transporte de maquinaria o equipos pesados, como excavadoras, maquinaria especial, entre otros.',
        imagen: require('@/assets/tema3/img-35.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Camión jaula:',
        texto:
          'Vehículo diseñado para el transporte de ganado, con una jaula metálica.',
        imagen: require('@/assets/tema3/img-36.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Camión porta vehículos o niñera:',
        texto:
          'Diseñado con una plataforma para transportar automóviles, de una manera ágil y rápida, gracias a su mecanismo de cargue y descargue.',
        imagen: require('@/assets/tema3/img-37.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder4: [
      {
        titulo: 'Cerrado multiusos: ',
        texto: 'Utilizado para el transporte de carga seca.',
        imagen: require('@/assets/tema3/img-38.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Góndola:',
        texto: 'Utilizado para el transporte de carga a granel.',
        imagen: require('@/assets/tema3/img-39.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tolva:',
        texto:
          'Utilizado para el transporte de productos como carbón, arena, piedra, entre otros.',
        imagen: require('@/assets/tema3/img-40.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tanque:',
        texto: 'Utilizado para el transporte de gases, químicos y líquidos.',
        imagen: require('@/assets/tema3/img-41.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Multipropósito:',
        texto:
          'Utilizado para el transporte de madera, hierro, acero, entre otros.',
        imagen: require('@/assets/tema3/img-42.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Plataforma:',
        texto: 'Utilizado para el transporte de contenedores.',
        imagen: require('@/assets/tema3/img-43.svg'),
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
