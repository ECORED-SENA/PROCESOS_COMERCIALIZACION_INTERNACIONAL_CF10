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
                 

    #t_2_1.titulo-segundo
      h2 3.3 Fletes de transporte 

    p Es el precio o los costos inherentes al transporte, es decir, lo que se debe pagar por el traslado de una mercancía, desde su lugar de origen hasta su lugar de destino, en el medio de transporte seleccionado, y este se calcula de acuerdo con el peso o volumen de la carga, encontrando: 

      h4 Flete marítimo

      p Es el costo que debe pagarse por el transporte de mercancía de un puerto a otro. Esta tarifa se establece de acuerdo con el peso, volumen de la carga o unidad (contenedor) de transporte utilizada. Se componen de:

      //- TabsA debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      TabsA.color-acento-botones.mb-5
        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.color-acento-botones--borde.p-4(titulo="Tarifa básica")

      TabsA.color-acento-botones.mb-5
        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.color-acento-botones--borde.p-4(titulo="Recargos")          
          h4 Recargos

          .row
              p Son aquellos costos adicionales que están determinados por situaciones puntuales que pueden afectar los costos del transportador, ya que no los puede controlar directamente, y que finalmente se suman a la tarifa básica. Dichos costos son:
              p Fluctuaciones en el precio del combustible (BAF). Ajustes por tipo de cambio (CAF). Recargo por demoras congestión) en los puertos (CS).Seguridad en los puertos (CSF).Manejo portuario (THC).

      TabsA.color-acento-botones.mb-5
        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.color-acento-botones--borde.p-4(titulo="Descuentos")      
   
    #t_2_1.titulo-segundo
      h2 Tipos de contratación 
    p De acuerdo con el servicio contratado, es posible encontrar:
      
            //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Servicio intermodal")

              
              .row(numero="2" titulo="Servicio puerta (door)")

              
              .row(numero="3" titulo="Servicio puerto (pier)")

                  p.text-small La línea naviera es responsable de transportar la carga desde el puerto de origen hasta el puerto de destino. Aquí, el usuario es el responsable de su costo, y se clasifican en: 
                  p.text-small Servicio house to house: el exportador es responsable del transporte, desde el punto de origen hasta el punto de destino, incluidos los distintos pasos intermedios.

                  p.text-small Servicio house to pier: el exportador es responsable del transporte desde el punto de partida hasta que la mercancía se halle a bordo del buque en el puerto de origen.

                  p.text-small Servicio pier to house: el importador es responsable del transporte, desde que la mercancía se encuentra a bordo del buque en el puerto de destino, hasta el punto de destino final.

    #t_2_1.titulo-segundo
      h2 Tipos de flete 
    p Dependiendo de la operación incluida dentro del proceso de transporte de la mercancía, es posible encontrar diferentes tipos de fletes o tarifas:


    #t_2_1.titulo-segundo
      h2 Liquidación 
    p El flete consiste en una tarifa básica y diferentes tipos de recargos que se aplican por tráfico y para todas las mercancías movilizadas. Así pues, la tarifa básica es el costo del transporte de un producto determinado entre dos puntos o lugares específicos; y los recargos son los elementos que se suman a dicha tarifa con la finalidad de poder compensar las variaciones en los costos y/o condiciones de la operación.

    p Para la liquidación de los fletes marítimos, se toma el factor que más favorezca, ya sea por el peso (tonelada) o por el volumen (m3-p3) de cada embarque; y dicha relación también es conocida como "factor de estiba", el cual varía según la densidad y peso específico de cada producto. Por esto, es importante que el exportador siempre conozca cuál es la relación de su mercancía, para conocer por qué factor se le realizará la liquidación; y esta relación se puede calcular así:

     p Para la liquidación de




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
