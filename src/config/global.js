export default {
  global: {
    componenteFormativo: 'Logística y Distribución Física Internacional (DFI)',
    descripcionCurso:
      'En la logística y la Distribución Física Internacional, se lleva a cabo la operación de desplazar una carga desde su origen al lugar adecuado, encontrando la solución más satisfactoria para llevar el producto, en las cantidades requeridas, al lugar acordado y logrando los costos más bajos; de acuerdo con las condiciones pactadas y los términos de negociación establecidos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Logística y cadena de abastecimiento (SCM)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis de la carga ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto de carga ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de carga',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Naturaleza de la carga',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Empaque, envase y embalaje',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Unitarización y factor de estiba ',
            hash: 't_2_5',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Modos y medios de transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Modos de transporte',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Medios de transporte',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Fletes de transporte',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Consolidación y desconsolidación (FCL, LCL)',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Riesgos y seguros',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Documentos de transporte ',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Incoterms 2020',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Historia de los Incoterms',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Términos multimodales y marítimos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Obligaciones del comprador y del vendedor',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Distribución Física Internacional (DFI)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Agentes que intervienen en la cadena DFI',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Proceso de exportación en la DFI',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Proceso de importación en la DFI ',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Proyección de la oferta y la demanda ',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Costeo de la DFI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Costos en origen ',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Costos durante el transporte principal',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Costos en destino',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Costos varios',
            hash: 't_6_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.5',
            titulo: 'Costos totales',
            hash: 't_6_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cámara de Comercio de Bogotá. (2010). Guía práctica: logística y distribución física internacional: clave en las operaciones de comercio exterior',
      link: 'http://hdl.handle.net/11520/25206',
    },
    {
      referencia:
        'Comunidad Andina. (2013). Manual sobre Control de Contenedores.',
      link: 'http://www.comunidadandina.org/DS/Manual%20Contenedores.pdf',
    },
    {
      referencia:
        'Decreto 1165 de 2019. Por el cual se dictan disposiciones relativas al Régimen de Aduanas en desarrollo de la Ley 1609 de 2013. Julio 2 de 2019. D.O. Nº 51.002',
      link: 'http://www.suin-juriscol.gov.co/viewDocument.asp?id=30036618',
    },
    {
      referencia:
        'Diario del Exportador. (s. f.). Portal especializado en Comercio Exterior y Gestión de los Negocios Internacionales.',
      link: 'https://www.diariodelexportador.com/',
    },
    {
      referencia:
        'Ruibal, A. (1994). Gestión logística de la Distribución Física Internacional. Grupo Editorial Norma S.A.',
    },
    {
      referencia:
        'Navarro, J.,  y Lafuente, M. (2010). Ilustración de moda: dibujo plano. Sistema de Bibliotecas SENA:',
      link:
        'https://dokumen.tips/documents/distribucion-fisica-internacional-alberto-ruibal-handabaka.html',
    },
  ],
  glosario: [
    {
      termino: 'Carga',
      significado:
        'Conjunto de mercancías que son objeto de una operación de transporte desde un puerto, aeropuerto, terminal terrestre o lugar de entrega, con destino a otro puerto, aeropuerto, terminal terrestre o lugar de destino, amparadas en un documento de transporte. (Decreto 1165, 2019, art. 3).',
    },
    {
      termino: 'Distribución Física Internacional',
      significado:
        'Es el proceso logístico que se desarrolla en torno a situar un producto en el mercado internacional cumpliendo con los términos negociados entre el vendedor y el comprador. (Cámara de Comercio de Bogotá, 2019). ',
    },
    {
      termino: 'Documento de Transporte',
      significado:
        'Término genérico que comprende el documento marítimo, aéreo, terrestre, fluvial o ferroviario, que el transportador respectivo o el agente de carga internacional o el operador de transporte multimodal entrega como certificación del contrato de transporte y recibo de la mercancía que será entregada al consignatario o destinatario en el lugar de destino. (Decreto 1165, 2019, art. 3).',
    },
    {
      termino: 'Incoterms',
      significado:
        'Términos de negociación que definen las responsabilidades y obligaciones para el vendedor y el comprador.',
    },
    {
      termino: 'Medio de transporte',
      significado:
        'Es cualquier nave, aeronave, vagón de ferrocarril o vehículo de transporte por carretera, incluidos los remolques y semirremolques, cuando están incorporados a un tractor o a otro vehículo automóvil. (Decreto 1165, 2019, art. 3).',
    },
    {
      termino: 'Mercancía',
      significado:
        'Son todos los bienes susceptibles de ser clasificados en la nomenclatura arancelaria y sujetos a control aduanero. (Decreto 1165, 2019, art. 3).',
    },
    {
      termino: 'Territorio Aduanero Nacional - TAN',
      significado:
        'Demarcación dentro de la cual se aplica la legislación aduanera; cubre todo el territorio nacional, incluyendo el subsuelo, el mar territorial, la zona contigua, la plataforma continental, la zona económica exclusiva, el espacio aéreo, el segmento de la órbita geoestacionaria, el espectro electromagnético y el espacio donde actúa el Estado colombiano, de conformidad con el derecho internacional o con las leyes colombianas a falta de normas internacionales. (Decreto 1165, 2019, art. 3).',
    },
    {
      termino: 'Transporte multimodal',
      significado:
        'Es el traslado de mercancías por dos o más modos de transporte diferentes, en virtud de un único contrato de transporte multimodal, desde un lugar situado en un país en que el operador de transporte multimodal toma las mercancías bajo su custodia y responsabilidad, hasta otro lugar designado para su entrega, y en el que se cruza por lo menos una frontera. (Decreto 1165, 2019, art. 3).',
    },
    {
      termino: 'Unidad de carga',
      significado:
        'El continente utilizado para el acondicionamiento de mercancías con el objeto de posibilitar o facilitar su transporte, susceptible de ser remolcado, pero que no tenga tracción propia. Estas unidades de carga son las que se detallan a continuación: barcazas o planchones, contenedores, furgones, paletas, los remolques y semirremolques, tanques, vagones o plataformas de ferrocarril y otros elementos similares. (Decreto 1165, 2019, art. 3).',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
