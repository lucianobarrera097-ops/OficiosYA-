// ===== DATA & STORAGE (Firebase) =====
// currentUser se mantiene en memoria + sessionStorage para la UI
let currentUserCache = null;

function requireFirebase() {
  if (typeof firebaseReady === 'undefined' || !firebaseReady) {
    showToast('Firebase no está configurado. Completá firebase-config.js', 'error');
    throw new Error('Firebase no configurado');
  }
}

// ===== PROVINCIAS Y LOCALIDADES (principales) =====
const PROVINCIAS_LOCALIDADES = {
  "Buenos Aires": [
    "La Plata", "Mar del Plata", "Bahía Blanca", "Quilmes", "Lanús", "General San Martín",
    "Lomas de Zamora", "La Matanza", "Almirante Brown", "Avellaneda", "San Isidro", "Tigre",
    "Vicente López", "Morón", "San Miguel", "José C. Paz", "Malvinas Argentinas", "Pilar",
    "Escobar", "Campana", "Zárate", "Luján", "Mercedes", "Chivilcoy", "Junín", "Pergamino",
    "San Nicolás", "Olavarría", "Tandil", "Necochea", "Azul", "Tres Arroyos", "Balcarce",
    "General Pueyrredón", "Berazategui", "Florencio Varela", "Esteban Echeverría", "Ezeiza",
    "Hurlingham", "Ituzaingó", "Moreno", "Merlo", "La Costa", "Pinamar", "Villa Gesell",
    "San Fernando", "Berisso", "Ensenada", "Brandsen", "Cañuelas", "Lobos", "Chascomús",
    "Dolores", "General Belgrano", "Las Flores", "Rauch", "Ayacucho", "Benito Juárez",
    "Coronel Suárez", "Coronel Pringles", "Coronel Dorrego", "Punta Alta", "Pedro Luro",
    "Carmen de Patagones", "Viedma (límite)", "9 de Julio", "Carlos Casares", "Pehuajó",
    "Lincoln", "General Villegas", "Trenque Lauquen", "América", "Bragado", "Chacabuco",
    "Salto", "Rojas", "Colón", "San Antonio de Areco", "Baradero", "Ramallo", "San Pedro",
    "Arrecifes", "Capitán Sarmiento", "Carmen de Areco", "Suipacha", "Navarro", "General Las Heras",
    "Marcos Paz", "General Rodríguez", "Luján", "Exaltación de la Cruz", "San Andrés de Giles"
  ],
  "Ciudad Autónoma de Buenos Aires": [
    "Agronomía", "Almagro", "Balvanera", "Barracas", "Belgrano", "Boedo", "Caballito",
    "Chacarita", "Coghlan", "Colegiales", "Constitución", "Flores", "Floresta", "La Boca",
    "La Paternal", "Liniers", "Mataderos", "Monte Castro", "Monserrat", "Nueva Pompeya",
    "Núñez", "Palermo", "Parque Avellaneda", "Parque Chacabuco", "Parque Chas", "Parque Patricios",
    "Puerto Madero", "Recoleta", "Retiro", "Saavedra", "San Cristóbal", "San Nicolás",
    "San Telmo", "Vélez Sársfield", "Versalles", "Villa Crespo", "Villa del Parque",
    "Villa Devoto", "Villa General Mitre", "Villa Lugano", "Villa Luro", "Villa Ortúzar",
    "Villa Pueyrredón", "Villa Real", "Villa Riachuelo", "Villa Santa Rita", "Villa Soldati",
    "Villa Urquiza"
  ],
  "Catamarca": [
    "San Fernando del Valle de Catamarca", "Valle Viejo", "Fray Mamerto Esquiú", "Capayán",
    "Santa María", "Belén", "Andalgalá", "Tinogasta", "Fiambalá", "Recreo", "Santa Rosa",
    "Ancasti", "El Alto", "La Paz", "Paclín", "Pomán", "Mutquín", "Londres", "Hualfín"
  ],
  "Chaco": [
    "Resistencia", "Barranqueras", "Fontana", "Puerto Vilelas", "Presidencia Roque Sáenz Peña",
    "Villa Ángela", "Charata", "General San Martín", "Juan José Castelli", "Machagai",
    "Quitilipi", "Las Breñas", "General Pinedo", "Corzuela", "Campo Largo", "Tres Isletas",
    "Makallé", "La Leonesa", "Puerto Tirol", "Colonia Elisa", "Villa Berthet", "Santa Sylvina"
  ],
  "Chubut": [
    "Rawson", "Trelew", "Puerto Madryn", "Comodoro Rivadavia", "Esquel", "Sarmiento",
    "Gaiman", "Dolavon", "28 de Julio", "Rada Tilly", "Playa Unión", "Camarones",
    "Trevelin", "El Hoyo", "Epuyén", "Lago Puelo", "El Maitén", "Cushamen", "Gastre",
    "Paso de Indios", "José de San Martín", "Río Mayo", "Alto Río Senguer"
  ],
  "Córdoba": [
    "Córdoba", "Villa María", "Río Cuarto", "San Francisco", "Villa Carlos Paz", "Alta Gracia",
    "Río Tercero", "Bell Ville", "Jesús María", "La Calera", "Villa Allende", "Unquillo",
    "Mendiolaza", "Río Segundo", "Pilar", "Oncativo", "Oliva", "Las Varillas", "Arroyito",
    "Marcos Juárez", "Leones", "Cruz del Eje", "Deán Funes", "Villa Dolores", "Mina Clavero",
    "Cosquín", "La Falda", "Capilla del Monte", "Villa General Belgrano", "Embalse",
    "Santa Rosa de Calamuchita", "Laboulaye", "General Cabrera", "Adelia María", "Coronel Moldes",
    "Huinca Renancó", "Villa Huidobro", "Morrison", "Inriville", "Monte Cristo", "Malvinas Argentinas"
  ],
  "Corrientes": [
    "Corrientes", "Goya", "Mercedes", "Paso de los Libres", "Curuzú Cuatiá", "Esquina",
    "Bella Vista", "Santo Tomé", "Monte Caseros", "Ituzaingó", "Saladas", "San Luis del Palmar",
    "Empedrado", "Lavalle", "Mburucuyá", "San Roque", "Concepción", "Sauce", "Alvear",
    "La Cruz", "Gobernador Virasoro", "San Martín", "Felipe Yofre"
  ],
  "Entre Ríos": [
    "Paraná", "Concordia", "Gualeguaychú", "Concepción del Uruguay", "Gualeguay", "Villaguay",
    "Colón", "Federación", "Chajarí", "La Paz", "Victoria", "Nogoyá", "Rosario del Tala",
    "San José", "Villa Elisa", "Crespo", "Diamante", "Federal", "Basavilbaso", "Urdinarrain",
    "Santa Elena", "Hasenkamp", "Viale", "Oro Verde", "Villa Urquiza"
  ],
  "Formosa": [
    "Formosa", "Clorinda", "Pirané", "El Colorado", "Las Lomitas", "Ingeniero Juárez",
    "Ibarreta", "Comandante Fontana", "Laguna Blanca", "General Belgrano", "Estanislao del Campo",
    "Villa General Güemes", "Herradura", "Palo Santo", "General Lucio V. Mansilla", "Riacho He-Hé"
  ],
  "Jujuy": [
    "San Salvador de Jujuy", "Palpalá", "Perico", "San Pedro de Jujuy", "Libertador General San Martín",
    "La Quiaca", "Humahuaca", "Tilcara", "Abra Pampa", "El Carmen", "Monterrico", "Yuto",
    "Calilegua", "Fraile Pintado", "Caimancito", "Maimará", "Purmamarca", "Susques", "Rinconada"
  ],
  "La Pampa": [
    "Santa Rosa", "General Pico", "Toay", "Realicó", "General Acha", "Victorica", "Intendente Alvear",
    "Eduardo Castex", "Macachín", "Guatraché", "Winifreda", "Anguil", "Catriló", "Quemú Quemú",
    "Trenel", "Bernardo Larroudé", "Ingeniero Luiggi", "25 de Mayo", "La Adela", "Jacinto Aráuz"
  ],
  "La Rioja": [
    "La Rioja", "Chilecito", "Aimogasta", "Chamical", "Chepes", "Villa Unión", "Nonogasta",
    "Famatina", "Vinchina", "Villa Castelli", "Ulapes", "Olta", "Tama", "Patquía", "Anillaco",
    "Sanagasta", "Villa San José de Vinchina", "Guandacol"
  ],
  "Mendoza": [
    "Mendoza", "Godoy Cruz", "Guaymallén", "Las Heras", "Maipú", "Luján de Cuyo", "San Martín",
    "San Rafael", "Tunuyán", "Rivadavia", "Junín", "La Paz", "Santa Rosa", "Lavalle",
    "General Alvear", "Malargüe", "Tupungato", "San Carlos", "Cacheuta", "Potrerillos",
    "Uspallata", "Villa Nueva", "Palmira", "Rodeo del Medio", "Russell"
  ],
  "Misiones": [
    "Posadas", "Oberá", "Eldorado", "Puerto Iguazú", "Apóstoles", "Leandro N. Alem", "San Vicente",
    "Montecarlo", "Jardín América", "Aristóbulo del Valle", "Puerto Rico", "Wanda", "Capioví",
    "San Pedro", "El Soberbio", "Bernardo de Irigoyen", "Candelaria", "Garupá", "Gobernador Roca",
    "San Ignacio", "Corpus", "Puerto Esperanza", "Colonia Victoria", "Dos de Mayo"
  ],
  "Neuquén": [
    "Neuquén", "Cutral Có", "Plaza Huincul", "Zapala", "San Martín de los Andes", "Villa La Angostura",
    "Centenario", "Plottier", "Senillosa", "Añelo", "Rincón de los Sauces", "Chos Malal",
    "Junín de los Andes", "Aluminé", "Las Lajas", "Picún Leufú", "Piedra del Águila", "Villa Pehuenia",
    "Caviahue", "El Cholar", "Andacollo", "Tricao Malal"
  ],
  "Río Negro": [
    "Viedma", "San Carlos de Bariloche", "General Roca", "Cipolletti", "Allen", "Cinco Saltos",
    "Villa Regina", "Catriel", "Choele Choel", "Luis Beltrán", "Lamarque", "Chimpay",
    "El Bolsón", "Ingeniero Jacobacci", "Río Colorado", "Sierra Grande", "Las Grutas", "San Antonio Oeste",
    "Valcheta", "Los Menucos", "Maquinchao", "Ñorquinco", "Dina Huapi", "Villa Mascardi"
  ],
  "Salta": [
    "Salta", "San Ramón de la Nueva Orán", "Tartagal", "General Güemes", "Metán", "Rosario de la Frontera",
    "Cafayate", "Cachi", "Joaquín V. González", "Embarcación", "Pichanal", "Profesor Salvador Mazza",
    "Aguaray", "Campo Quijano", "Rosario de Lerma", "El Carril", "Chicoana", "La Caldera",
    "San Antonio de los Cobres", "Iruya", "Santa Victoria", "Vaqueros", "San Lorenzo", "Coronel Moldes"
  ],
  "San Juan": [
    "San Juan", "Rawson", "Rivadavia", "Santa Lucía", "Chimbas", "Pocito", "Caucete", "Albardón",
    "Angaco", "San Martín", "9 de Julio", "25 de Mayo", "Sarmiento", "Jáchal", "Iglesia",
    "Calingasta", "Valle Fértil", "Ullum", "Zonda", "Villa Krause", "Villa Aberastain"
  ],
  "San Luis": [
    "San Luis", "Villa Mercedes", "Merlo", "La Punta", "Justo Daract", "Naschel", "Concarán",
    "Tilisarao", "Santa Rosa del Conlara", "Quines", "San Francisco del Monte de Oro", "Buena Esperanza",
    "Unión", "Arizona", "Villa de la Quebrada", "El Trapiche", "Potrero de los Funes", "Juana Koslay"
  ],
  "Santa Cruz": [
    "Río Gallegos", "Caleta Olivia", "Pico Truncado", "Puerto Deseado", "Puerto San Julián",
    "El Calafate", "El Chaltén", "Las Heras", "Perito Moreno", "Los Antiguos", "Gobernador Gregores",
    "Puerto Santa Cruz", "Comandante Luis Piedra Buena", "Río Turbio", "28 de Noviembre", "Hipólito Yrigoyen"
  ],
  "Santa Fe": [
    "Rosario", "Santa Fe", "Rafaela", "Venado Tuerto", "Reconquista", "Santo Tomé", "Villa Gobernador Gálvez",
    "San Lorenzo", "Capitán Bermúdez", "Granadero Baigorria", "Pérez", "Funes", "Roldán", "Casilda",
    "Cañada de Gómez", "Firmat", "Rufino", "Villa Constitución", "San Nicolás (límite)", "Esperanza",
    "San Justo", "Gálvez", "Sunchales", "Ceres", "Tostado", "Vera", "Avellaneda", "Malabrigo",
    "Arroyo Seco", "Puerto General San Martín", "Fray Luis Beltrán", "Coronda", "Sauce Viejo"
  ],
  "Santiago del Estero": [
    "Santiago del Estero", "La Banda", "Termas de Río Hondo", "Añatuya", "Frías", "Fernández",
    "Monte Quemado", "Quimilí", "Loreto", "Suncho Corral", "Clodomira", "Beltrán", "Villa Ojo de Agua",
    "Tintina", "Campo Gallo", "Pinto", "Bandera", "Selva", "Sumampa", "Villa Atamisqui"
  ],
  "Tierra del Fuego, Antártida e Islas del Atlántico Sur": [
    "Ushuaia", "Río Grande", "Tolhuin", "Puerto Almanza", "San Sebastián"
  ],
  "Tucumán": [
    "San Miguel de Tucumán", "Yerba Buena", "Tafí Viejo", "Banda del Río Salí", "Alderetes",
    "Concepción", "Aguilares", "Monteros", "Famaillá", "Lules", "Tafí del Valle", "Simoca",
    "Bella Vista", "Juan Bautista Alberdi", "La Cocha", "Graneros", "Trancas", "Burruyacú",
    "Lastenia", "El Manantial", "San Pablo", "Villa Mariano Moreno", "Ingenio San Pablo"
  ]
};

// Lista ordenada de provincias para los selects
const LISTA_PROVINCIAS = Object.keys(PROVINCIAS_LOCALIDADES).sort((a, b) => a.localeCompare(b, 'es'));

// Datos de ejemplo de profesionales
const DEMO_PROFESIONALES = [
  {
    id: 'demo1',
    tipo: 'oficio',
    nombre: 'Carlos Méndez',
    email: 'carlos.plomero@demo.com',
    password: 'demo123',
    telefono: '11 4567-8901',
    dni: '28456789',
    oficio: 'Plomería',
    experiencia: 12,
    edad: 38,
    domicilio: 'Villa Crespo',
    localidad: 'Villa Crespo',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    descripcion: 'Plomero matriculado con más de 12 años de experiencia. Especialista en reparaciones de urgencia, instalaciones de baño y cocina.',
    fotos: [
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=300&h=300&fit=crop'
    ]
  },
  {
    id: 'demo2',
    tipo: 'oficio',
    nombre: 'Martín López',
    email: 'martin.gasista@demo.com',
    password: 'demo123',
    telefono: '11 2345-6789',
    dni: '31234567',
    oficio: 'Gasista',
    experiencia: 8,
    edad: 32,
    domicilio: 'Caballito',
    localidad: 'Caballito',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    descripcion: 'Gasista matriculado. Instalaciones de gas natural, termotanques y calefactores. Certificaciones al día.',
    fotos: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop'
    ]
  },
  {
    id: 'demo3',
    tipo: 'oficio',
    nombre: 'Roberto Fernández',
    email: 'roberto.elec@demo.com',
    password: 'demo123',
    telefono: '11 3456-7890',
    dni: '25678901',
    oficio: 'Electricista',
    experiencia: 15,
    edad: 45,
    domicilio: 'Flores',
    localidad: 'Flores',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    descripcion: 'Electricista con 15 años de trayectoria. Instalaciones residenciales y comerciales, tableros y automatización.',
    fotos: [
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop'
    ]
  },
  {
    id: 'demo4',
    tipo: 'oficio',
    nombre: 'Diego Ramírez',
    email: 'diego.pintor@demo.com',
    password: 'demo123',
    telefono: '11 5678-9012',
    dni: '29876543',
    oficio: 'Pintor',
    experiencia: 10,
    edad: 35,
    domicilio: 'Palermo',
    localidad: 'Palermo',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    descripcion: 'Pintor profesional. Especializado en pintura interior, exterior y trabajos decorativos. Acabados de calidad.',
    fotos: [
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=300&h=300&fit=crop'
    ]
  },
  {
    id: 'demo5',
    tipo: 'oficio',
    nombre: 'Jorge Acosta',
    email: 'jorge.albanil@demo.com',
    password: 'demo123',
    telefono: '351 123-4567',
    dni: '22345678',
    oficio: 'Albañil',
    experiencia: 20,
    edad: 48,
    domicilio: 'Nueva Córdoba',
    localidad: 'Córdoba',
    provincia: 'Córdoba',
    descripcion: 'Albañil con dos décadas de experiencia. Reformas, ampliaciones, revoques y colocación de pisos.',
    fotos: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=300&fit=crop'
    ]
  },
  {
    id: 'demo6',
    tipo: 'oficio',
    nombre: 'Luis Gómez',
    email: 'luis.carpintero@demo.com',
    password: 'demo123',
    telefono: '341 987-6543',
    dni: '26789012',
    oficio: 'Carpintero',
    experiencia: 14,
    edad: 41,
    domicilio: 'Centro',
    localidad: 'Rosario',
    provincia: 'Santa Fe',
    descripcion: 'Carpintero artesanal. Muebles a medida, puertas, ventanas y restauraciones de madera.',
    fotos: [
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=300&h=300&fit=crop'
    ]
  },
  {
    id: 'demo7',
    tipo: 'oficio',
    nombre: 'Pablo Suárez',
    email: 'pablo.plomero@demo.com',
    password: 'demo123',
    telefono: '11 6789-0123',
    dni: '34567890',
    oficio: 'Plomería',
    experiencia: 6,
    edad: 29,
    domicilio: 'San Isidro',
    localidad: 'San Isidro',
    provincia: 'Buenos Aires',
    descripcion: 'Plomero joven y confiable. Trabajos residenciales, destapes y mantenimiento preventivo.',
    fotos: []
  },
  {
    id: 'demo8',
    tipo: 'oficio',
    nombre: 'Andrés Torres',
    email: 'andres.elec@demo.com',
    password: 'demo123',
    telefono: '261 555-1234',
    dni: '30123456',
    oficio: 'Electricista',
    experiencia: 9,
    edad: 34,
    domicilio: 'Godoy Cruz',
    localidad: 'Godoy Cruz',
    provincia: 'Mendoza',
    descripcion: 'Electricista matriculado. Especialista en instalaciones de LED, domótica y energías renovables.',
    fotos: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=300&fit=crop'
    ]
  }
];

// Reseñas de ejemplo
const DEMO_REVIEWS = [
  {
    id: 'r1',
    profId: 'demo1',
    clienteId: 'cliente_demo',
    clienteNombre: 'María González',
    calidad: 5,
    tiempo: 5,
    precio: 4,
    comentario: 'Excelente trabajo. Carlos resolvió una pérdida de agua en minutos y dejó todo impecable. Muy recomendable.',
    fecha: '2026-07-15'
  },
  {
    id: 'r2',
    profId: 'demo1',
    clienteId: 'cliente_demo2',
    clienteNombre: 'Juan Pérez',
    calidad: 5,
    tiempo: 4,
    precio: 5,
    comentario: 'Muy profesional y puntual. Cambió el tanque de agua sin problemas. Precio justo.',
    fecha: '2026-06-22'
  },
  {
    id: 'r3',
    profId: 'demo2',
    clienteId: 'cliente_demo',
    clienteNombre: 'Ana Rodríguez',
    calidad: 5,
    tiempo: 5,
    precio: 4,
    comentario: 'Martín es un genio con el gas. Instalación perfecta del termotanque y me explicó todo.',
    fecha: '2026-08-01'
  },
  {
    id: 'r4',
    profId: 'demo3',
    clienteId: 'cliente_demo3',
    clienteNombre: 'Laura Martínez',
    calidad: 4,
    tiempo: 5,
    precio: 4,
    comentario: 'Buen trabajo en la instalación eléctrica de mi local. Llegó a tiempo y trabajó limpio.',
    fecha: '2026-05-10'
  },
  {
    id: 'r5',
    profId: 'demo4',
    clienteId: 'cliente_demo',
    clienteNombre: 'Sofía López',
    calidad: 5,
    tiempo: 4,
    precio: 5,
    comentario: 'Diego pintó mi departamento completo. Quedó hermoso, prolijo y el precio fue excelente.',
    fecha: '2026-07-28'
  }
];

// ===== INIT =====
async function init() {
  poblarSelectsProvincias();
  [
    ['filterProvincia', 'filterLocalidad'],
    ['clienteProvincia', 'clienteLocalidad'],
    ['oficioProvincia', 'oficioLocalidad']
  ].forEach(([provId, locId]) => {
    const el = document.getElementById(provId);
    if (el) {
      el.addEventListener('change', () => cargarLocalidades(provId, locId));
    }
  });
  setupRatingStars();
  showSection('home');

  if (typeof firebaseReady === 'undefined' || !firebaseReady) {
    console.warn('Firebase no configurado — la app no persistirá datos en la nube.');
    showToast('Configurá Firebase (firebase-config.js) para guardar datos en la nube', 'error');
    updateNav();
    return;
  }

  // Sesión persistente de Firebase Auth
  auth.onAuthStateChanged(async (firebaseUser) => {
    if (firebaseUser) {
      try {
        const profile = await loadUserProfile(firebaseUser.uid);
        if (profile) {
          currentUserCache = { ...profile, id: firebaseUser.uid, email: firebaseUser.email };
          sessionStorage.setItem('oficiosya_uid', firebaseUser.uid);
        } else {
          currentUserCache = null;
        }
      } catch (err) {
        console.error(err);
        currentUserCache = null;
      }
    } else {
      currentUserCache = null;
      sessionStorage.removeItem('oficiosya_uid');
    }
    updateNav();
  });

  // Sembrar profesionales demo solo si no hay ninguno
  try {
    await seedDemoIfEmpty();
  } catch (e) {
    console.warn('No se pudieron cargar demos:', e);
  }
}

// ===== PROVINCIAS / LOCALIDADES DINÁMICAS =====
function poblarSelectsProvincias() {
  const ids = ['filterProvincia', 'clienteProvincia', 'oficioProvincia'];
  ids.forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    // Si ya hay más de 1 opción (las del HTML), no reemplazar
    if (sel.options.length > 1) return;
    const first = sel.options[0] ? sel.options[0].outerHTML : '<option value="">Seleccionar...</option>';
    sel.innerHTML = first;
    LISTA_PROVINCIAS.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p;
      opt.textContent = p;
      sel.appendChild(opt);
    });
  });
}

function cargarLocalidades(provinciaSelectId, localidadSelectId, selectedLocalidad) {
  const provSel = document.getElementById(provinciaSelectId);
  const locSel = document.getElementById(localidadSelectId);
  if (!provSel || !locSel) return;

  const provincia = (provSel.value || '').trim();
  locSel.innerHTML = '';

  if (!provincia) {
    locSel.setAttribute('disabled', 'disabled');
    const opt = document.createElement('option');
    opt.value = '';
    opt.textContent = 'Primero elegí provincia';
    locSel.appendChild(opt);
    return;
  }

  // Buscar localidades (coincidencia exacta o por si hay variación de nombre)
  let localidades = PROVINCIAS_LOCALIDADES[provincia];
  if (!localidades) {
    const key = Object.keys(PROVINCIAS_LOCALIDADES).find(
      k => k.toLowerCase() === provincia.toLowerCase()
    );
    localidades = key ? PROVINCIAS_LOCALIDADES[key] : [];
  }
  if (!localidades) localidades = [];

  locSel.removeAttribute('disabled');
  locSel.disabled = false;

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = localidades.length
    ? 'Seleccionar localidad...'
    : 'Sin localidades cargadas';
  locSel.appendChild(placeholder);

  localidades.forEach(loc => {
    const opt = document.createElement('option');
    opt.value = loc;
    opt.textContent = loc;
    if (selectedLocalidad && selectedLocalidad === loc) opt.selected = true;
    locSel.appendChild(opt);
  });

  // Si la localidad guardada no está en la lista, la agregamos
  if (selectedLocalidad && !localidades.includes(selectedLocalidad)) {
    const opt = document.createElement('option');
    opt.value = selectedLocalidad;
    opt.textContent = selectedLocalidad + ' (actual)';
    opt.selected = true;
    locSel.appendChild(opt);
  }
}

// Exponer en window por si se llama desde HTML
window.cargarLocalidades = cargarLocalidades;

// ===== FIRESTORE HELPERS =====
function getCurrentUser() {
  return currentUserCache;
}

function setCurrentUser(user) {
  currentUserCache = user;
}

async function loadUserProfile(uid) {
  const doc = await db.collection('users').doc(uid).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
}

async function getUsers() {
  requireFirebase();
  const snap = await db.collection('users').get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

async function getProfesionales() {
  requireFirebase();
  const snap = await db.collection('users').where('tipo', '==', 'oficio').get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

async function getReviews() {
  requireFirebase();
  const snap = await db.collection('reviews').get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

async function getReviewsByProf(profId) {
  requireFirebase();
  const snap = await db.collection('reviews').where('profId', '==', profId).get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

async function getNotifications(userId) {
  requireFirebase();
  const snap = await db.collection('notifications')
    .where('userId', '==', userId)
    .orderBy('fecha', 'desc')
    .limit(50)
    .get()
    .catch(async () => {
      // Si falta índice compuesto, traer sin orderBy
      const s = await db.collection('notifications').where('userId', '==', userId).get();
      return s;
    });
  const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  list.sort((a, b) => (b.fecha || '').localeCompare(a.fecha || ''));
  return list;
}

async function saveNotification(userId, notif) {
  requireFirebase();
  await db.collection('notifications').add({
    ...notif,
    userId,
    fecha: notif.fecha || new Date().toISOString(),
    read: false
  });
}

async function markNotificationsRead(userId) {
  requireFirebase();
  const snap = await db.collection('notifications')
    .where('userId', '==', userId)
    .where('read', '==', false)
    .get()
    .catch(async () => db.collection('notifications').where('userId', '==', userId).get());
  const batch = db.batch();
  snap.docs.forEach(d => {
    if (d.data().read === false || d.data().read === undefined) {
      batch.update(d.ref, { read: true });
    }
  });
  await batch.commit();
}

async function getQuotes() {
  requireFirebase();
  const snap = await db.collection('quotes').get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

async function uploadImage(path, dataUrl) {
  requireFirebase();
  const ref = storage.ref().child(path);
  await ref.putString(dataUrl, 'data_url');
  return await ref.getDownloadURL();
}

async function seedDemoIfEmpty() {
  const snap = await db.collection('users').where('tipo', '==', 'oficio').limit(1).get();
  if (!snap.empty) return;

  const batch = db.batch();
  DEMO_PROFESIONALES.forEach(p => {
    const { password, ...rest } = p;
    const ref = db.collection('users').doc(p.id);
    batch.set(ref, { ...rest, demo: true, createdAt: new Date().toISOString() });
  });
  DEMO_REVIEWS.forEach(r => {
    const ref = db.collection('reviews').doc(r.id);
    batch.set(ref, r);
  });
  await batch.commit();
  console.log('Datos demo cargados en Firestore');
}

// ===== NAV & SECTIONS =====
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const section = document.getElementById(sectionId);
  if (section) section.classList.add('active');
  
  // Cerrar menú mobile
  document.getElementById('navLinks').classList.remove('open');
  
  // Si es search, cargar todos
  if (sectionId === 'search') {
    realizarBusqueda();
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function getUserIniciales(nombre) {
  if (!nombre) return '?';
  return nombre.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
}

function updateNav() {
  const user = getCurrentUser();
  const navRegister = document.getElementById('navRegister');
  const navLogin = document.getElementById('navLogin');
  const navNotifications = document.getElementById('navNotifications');
  const navUserMenu = document.getElementById('navUserMenu');

  closeUserMenu();

  if (user) {
    navRegister.style.display = 'none';
    navLogin.style.display = 'none';
    if (navUserMenu) navUserMenu.style.display = 'block';

    const iniciales = getUserIniciales(user.nombre);
    const firstName = user.nombre.split(' ')[0];
    const avatar = document.getElementById('userAvatar');
    const avatarDrop = document.getElementById('userAvatarDrop');
    const nameEl = document.getElementById('userMenuName');
    const dropName = document.getElementById('userDropName');
    const dropRole = document.getElementById('userDropRole');

    if (avatar) avatar.textContent = iniciales;
    if (avatarDrop) avatarDrop.textContent = iniciales;
    if (nameEl) nameEl.textContent = firstName;
    if (dropName) dropName.textContent = user.nombre;
    if (dropRole) dropRole.textContent = user.tipo === 'oficio' ? (user.oficio || 'Profesional') : 'Cliente';

    const menuMyProfile = document.getElementById('menuMyProfile');
    const menuNotifs = document.getElementById('menuNotifs');

    if (user.tipo === 'oficio') {
      if (navNotifications) navNotifications.style.display = 'block';
      if (menuMyProfile) menuMyProfile.style.display = 'flex';
      if (menuNotifs) menuNotifs.style.display = 'flex';
      updateNotifBadge();
    } else {
      if (navNotifications) navNotifications.style.display = 'none';
      if (menuMyProfile) menuMyProfile.style.display = 'none';
      if (menuNotifs) menuNotifs.style.display = 'none';
    }
  } else {
    navRegister.style.display = 'block';
    navLogin.style.display = 'block';
    if (navUserMenu) navUserMenu.style.display = 'none';
    if (navNotifications) navNotifications.style.display = 'none';
  }
}

function toggleUserMenu(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('navUserMenu');
  if (!menu) return;
  menu.classList.toggle('open');
}

function closeUserMenu() {
  const menu = document.getElementById('navUserMenu');
  if (menu) menu.classList.remove('open');
}

function abrirEditarPerfil() {
  closeUserMenu();
  const user = getCurrentUser();
  if (!user) {
    showSection('login');
    return;
  }

  // Profesionales: ir al perfil completo editable
  if (user.tipo === 'oficio') {
    showMyProfile();
    // Scroll al formulario de edición
    setTimeout(() => {
      const form = document.querySelector('#myProfileContent .detail-card form');
      if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
    return;
  }

  // Clientes: sección de cuenta
  document.getElementById('accNombre').value = user.nombre || '';
  document.getElementById('accEmail').value = user.email || '';
  document.getElementById('accTelefono').value = user.telefono || '';

  const provSel = document.getElementById('accProvincia');
  if (provSel && provSel.options.length <= 1) {
    LISTA_PROVINCIAS.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p;
      opt.textContent = p;
      provSel.appendChild(opt);
    });
  }
  if (provSel) {
    provSel.value = user.provincia || '';
    cargarLocalidades('accProvincia', 'accLocalidad', user.localidad || '');
  }

  document.getElementById('accClienteFields').style.display = 'block';
  document.getElementById('accOficioHint').style.display = 'none';
  showSection('editAccount');
}

async function guardarCuenta(e) {
  e.preventDefault();
  const user = getCurrentUser();
  if (!user) return;

  try {
    const data = {
      nombre: document.getElementById('accNombre').value.trim(),
      telefono: document.getElementById('accTelefono').value.trim()
    };
    if (user.tipo === 'cliente') {
      data.provincia = document.getElementById('accProvincia').value;
      data.localidad = document.getElementById('accLocalidad').value;
    }
    await db.collection('users').doc(user.id).update(data);
    currentUserCache = { ...user, ...data };
    updateNav();
    showToast('Perfil actualizado correctamente');
    showSection('home');
  } catch (err) {
    console.error(err);
    showToast('Error al guardar el perfil', 'error');
  }
}

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
  const menu = document.getElementById('navUserMenu');
  if (!menu || !menu.classList.contains('open')) return;
  if (!menu.contains(e.target)) closeUserMenu();
});

window.toggleUserMenu = toggleUserMenu;
window.closeUserMenu = closeUserMenu;
window.abrirEditarPerfil = abrirEditarPerfil;
window.guardarCuenta = guardarCuenta;

async function updateNotifBadge() {
  const user = getCurrentUser();
  if (!user || user.tipo !== 'oficio' || !firebaseReady) return;

  try {
    const notifs = await getNotifications(user.id);
    const unread = notifs.filter(n => !n.read).length;
    const badge = document.getElementById('notifBadge');
    if (!badge) return;
    if (unread > 0) {
      badge.style.display = 'flex';
      badge.textContent = unread > 9 ? '9+' : unread;
    } else {
      badge.style.display = 'none';
    }
  } catch (e) {
    console.warn(e);
  }
}

// ===== TOAST =====
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ===== REGISTER =====
function switchRegisterTab(tipo) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.register-form').forEach(f => f.classList.remove('active'));
  
  if (tipo === 'cliente') {
    document.querySelector('.tab-btn:first-child').classList.add('active');
    document.getElementById('formCliente').classList.add('active');
  } else {
    document.querySelector('.tab-btn:last-child').classList.add('active');
    document.getElementById('formOficio').classList.add('active');
  }
}

async function registrarCliente(e) {
  e.preventDefault();
  try {
    requireFirebase();
  } catch (err) {
    return;
  }

  const email = document.getElementById('clienteEmail').value.trim().toLowerCase();
  const password = document.getElementById('clientePass').value;

  try {
    showToast('Creando cuenta...');
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    const uid = cred.user.uid;

    const perfil = {
      tipo: 'cliente',
      nombre: document.getElementById('clienteNombre').value.trim(),
      email: email,
      telefono: document.getElementById('clienteTelefono').value.trim(),
      localidad: document.getElementById('clienteLocalidad').value,
      provincia: document.getElementById('clienteProvincia').value,
      createdAt: new Date().toISOString()
    };

    await db.collection('users').doc(uid).set(perfil);
    currentUserCache = { id: uid, ...perfil };
    updateNav();
    showToast('¡Cuenta creada con éxito! Ya podés buscar profesionales.');
    showSection('search');
    e.target.reset();
  } catch (err) {
    console.error(err);
    if (err.code === 'auth/email-already-in-use') {
      showToast('Ya existe una cuenta con ese email', 'error');
    } else if (err.code === 'auth/weak-password') {
      showToast('La contraseña debe tener al menos 6 caracteres', 'error');
    } else {
      showToast(err.message || 'Error al registrarse', 'error');
    }
  }
}

async function registrarOficio(e) {
  e.preventDefault();
  try {
    requireFirebase();
  } catch (err) {
    return;
  }

  const email = document.getElementById('oficioEmail').value.trim().toLowerCase();
  const password = document.getElementById('oficioPass').value;
  const dni = document.getElementById('oficioDni').value.trim().replace(/\D/g, '');

  if (dni.length < 7 || dni.length > 8) {
    showToast('El DNI debe tener 7 u 8 dígitos numéricos', 'error');
    return;
  }

  try {
    // Verificar DNI único
    const dniSnap = await db.collection('users').where('dni', '==', dni).limit(1).get();
    if (!dniSnap.empty) {
      showToast('Ya existe un profesional registrado con ese DNI', 'error');
      return;
    }

    showToast('Creando cuenta profesional...');
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    const uid = cred.user.uid;

    const perfil = {
      tipo: 'oficio',
      nombre: document.getElementById('oficioNombre').value.trim(),
      email: email,
      telefono: document.getElementById('oficioTelefono').value.trim(),
      dni: dni,
      oficio: document.getElementById('oficioTipo').value,
      experiencia: parseInt(document.getElementById('oficioExperiencia').value),
      edad: parseInt(document.getElementById('oficioEdad').value),
      domicilio: document.getElementById('oficioDomicilio').value.trim(),
      localidad: document.getElementById('oficioLocalidad').value,
      provincia: document.getElementById('oficioProvincia').value,
      descripcion: document.getElementById('oficioDescripcion').value.trim(),
      fotos: [],
      createdAt: new Date().toISOString()
    };

    await db.collection('users').doc(uid).set(perfil);
    currentUserCache = { id: uid, ...perfil };
    updateNav();
    showToast('¡Perfil profesional creado! Completá tu perfil y agregá fotos de tus trabajos.');
    showMyProfile();
    e.target.reset();
  } catch (err) {
    console.error(err);
    if (err.code === 'auth/email-already-in-use') {
      showToast('Ya existe una cuenta con ese email', 'error');
    } else if (err.code === 'auth/weak-password') {
      showToast('La contraseña debe tener al menos 6 caracteres', 'error');
    } else {
      showToast(err.message || 'Error al registrarse', 'error');
    }
  }
}

// ===== LOGIN / LOGOUT =====
async function iniciarSesion(e) {
  e.preventDefault();
  try {
    requireFirebase();
  } catch (err) {
    return;
  }

  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass = document.getElementById('loginPass').value;

  try {
    showToast('Ingresando...');
    const cred = await auth.signInWithEmailAndPassword(email, pass);
    const profile = await loadUserProfile(cred.user.uid);
    if (!profile) {
      showToast('No se encontró el perfil de usuario', 'error');
      await auth.signOut();
      return;
    }
    currentUserCache = { id: cred.user.uid, ...profile, email: cred.user.email };
    updateNav();
    showToast(`¡Bienvenido/a, ${currentUserCache.nombre.split(' ')[0]}!`);
    if (currentUserCache.tipo === 'oficio') {
      showMyProfile();
    } else {
      showSection('search');
    }
    e.target.reset();
  } catch (err) {
    console.error(err);
    showToast('Email o contraseña incorrectos', 'error');
  }
}

async function logout() {
  closeUserMenu();
  try {
    if (firebaseReady) await auth.signOut();
  } catch (e) {
    console.error(e);
  }
  currentUserCache = null;
  updateNav();
  showToast('Sesión cerrada correctamente');
  showSection('home');
}

// ===== SEARCH =====
function quickSearch(oficio) {
  showSection('search');
  document.getElementById('filterOficio').value = oficio;
  document.getElementById('filterProvincia').value = '';
  cargarLocalidades('filterProvincia', 'filterLocalidad');
  realizarBusqueda();
}

async function realizarBusqueda() {
  const oficio = document.getElementById('filterOficio').value;
  const localidad = document.getElementById('filterLocalidad').value;
  const provincia = document.getElementById('filterProvincia').value;
  const container = document.getElementById('resultados');
  const noRes = document.getElementById('noResultados');

  if (!firebaseReady) {
    container.innerHTML = '';
    noRes.style.display = 'block';
    noRes.innerHTML = '<p>Configurá Firebase para buscar profesionales.</p>';
    return;
  }

  container.innerHTML = '<p style="text-align:center;color:var(--text-light);padding:2rem;">Buscando...</p>';
  noRes.style.display = 'none';

  try {
    let users = await getProfesionales();

    let resultados = users.filter(u => {
      if (oficio && u.oficio !== oficio) return false;
      if (provincia && u.provincia !== provincia) return false;
      if (localidad && u.localidad !== localidad && !(u.domicilio || '').toLowerCase().includes(localidad.toLowerCase())) return false;
      return true;
    });

    if (resultados.length === 0) {
      container.innerHTML = '';
      noRes.style.display = 'block';
      noRes.innerHTML = '<i class="fas fa-search"></i><p>No se encontraron profesionales con esos filtros.</p>';
      return;
    }

    noRes.style.display = 'none';
    const allReviews = await getReviews();

    container.innerHTML = resultados.map(p => {
      const avg = getAverageRatingFromList(allReviews, p.id);
      const starsHtml = renderStars(avg.promedio);
      const iniciales = (p.nombre || '?').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

      return `
        <div class="prof-card">
          <div class="prof-header">
            <div class="prof-avatar">${iniciales}</div>
            <div class="prof-header-info">
              <h3>${p.nombre}</h3>
              <span class="oficio-tag">${p.oficio}</span>
            </div>
          </div>
          <div class="prof-body">
            <div class="prof-meta">
              <span><i class="fas fa-map-marker-alt"></i> ${p.localidad}, ${p.provincia}</span>
              <span><i class="fas fa-briefcase"></i> ${p.experiencia || 0} años exp.</span>
            </div>
            <div class="prof-rating">
              ${starsHtml}
              <span style="color:var(--text-light);font-size:0.9rem;">(${avg.count} reseñas)</span>
            </div>
            <p style="font-size:0.9rem;color:var(--text-light);">${p.descripcion ? p.descripcion.substring(0, 100) + (p.descripcion.length > 100 ? '...' : '') : 'Sin descripción'}</p>
          </div>
          <div class="prof-actions">
            <button class="btn btn-primary btn-sm" onclick="verPerfil('${p.id}')">
              <i class="fas fa-user"></i> Ver perfil
            </button>
            <a href="tel:${p.telefono}" class="btn btn-secondary btn-sm">
              <i class="fas fa-phone"></i> Llamar
            </a>
          </div>
        </div>
      `;
    }).join('');
  } catch (err) {
    console.error(err);
    container.innerHTML = '';
    noRes.style.display = 'block';
    noRes.innerHTML = '<p>Error al buscar. Revisá la configuración de Firebase.</p>';
  }
}

// ===== RATINGS =====
function getAverageRatingFromList(reviewsAll, profId) {
  const reviews = reviewsAll.filter(r => r.profId === profId);
  if (reviews.length === 0) return { promedio: 0, count: 0, calidad: 0, tiempo: 0, precio: 0 };

  const sumCalidad = reviews.reduce((a, r) => a + r.calidad, 0);
  const sumTiempo = reviews.reduce((a, r) => a + r.tiempo, 0);
  const sumPrecio = reviews.reduce((a, r) => a + r.precio, 0);
  const total = reviews.length;
  const promedio = ((sumCalidad + sumTiempo + sumPrecio) / (total * 3)).toFixed(1);

  return {
    promedio: parseFloat(promedio),
    count: total,
    calidad: (sumCalidad / total).toFixed(1),
    tiempo: (sumTiempo / total).toFixed(1),
    precio: (sumPrecio / total).toFixed(1)
  };
}

async function getAverageRating(profId) {
  const reviews = await getReviewsByProf(profId);
  return getAverageRatingFromList(reviews, profId);
}

function renderStars(rating) {
  let html = '<span class="stars">';
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  
  for (let i = 1; i <= 5; i++) {
    if (i <= full) {
      html += '<i class="fas fa-star"></i>';
    } else if (i === full + 1 && half) {
      html += '<i class="fas fa-star-half-alt"></i>';
    } else {
      html += '<i class="far fa-star"></i>';
    }
  }
  html += `</span> <strong>${rating > 0 ? rating : '—'}</strong>`;
  return html;
}

// ===== PROFILE VIEW =====
async function verPerfil(profId) {
  let prof;
  try {
    const doc = await db.collection('users').doc(profId).get();
    if (!doc.exists) {
      showToast('Profesional no encontrado', 'error');
      return;
    }
    prof = { id: doc.id, ...doc.data() };
  } catch (err) {
    console.error(err);
    showToast('Error al cargar el perfil', 'error');
    return;
  }

  const reviews = (await getReviewsByProf(profId)).sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  const avg = getAverageRatingFromList(reviews, profId);
  const iniciales = (prof.nombre || '?').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  const currentUser = getCurrentUser();
  const puedeResenar = currentUser && currentUser.tipo === 'cliente';
  
  let fotosHtml = '';
  if (prof.fotos && prof.fotos.length > 0) {
    fotosHtml = prof.fotos.map(f => `
      <div class="photo-item">
        <img src="${f}" alt="Trabajo de ${prof.nombre}">
      </div>
    `).join('');
  } else {
    fotosHtml = '<p style="color:var(--text-light);">Aún no hay fotos de trabajos.</p>';
  }
  
  let reviewsHtml = '';
  if (reviews.length > 0) {
    reviewsHtml = reviews.map(r => `
      <div class="review-card">
        <div class="review-header">
          <span class="review-author">${r.clienteNombre}</span>
          <span style="font-size:0.85rem;color:var(--text-light);">${formatDate(r.fecha)}</span>
        </div>
        <div class="review-ratings">
          <span>Calidad: <span class="stars">${'★'.repeat(r.calidad)}${'☆'.repeat(5 - r.calidad)}</span></span>
          <span>Tiempo: <span class="stars">${'★'.repeat(r.tiempo)}${'☆'.repeat(5 - r.tiempo)}</span></span>
          <span>Precio: <span class="stars">${'★'.repeat(r.precio)}${'☆'.repeat(5 - r.precio)}</span></span>
        </div>
        <p class="review-text">${r.comentario}</p>
      </div>
    `).join('');
  } else {
    reviewsHtml = '<p style="color:var(--text-light);">Todavía no hay reseñas. ¡Sé el primero en comentar!</p>';
  }
  
  const content = `
    <div class="profile-header">
      <div class="profile-avatar-lg">${iniciales}</div>
      <div class="profile-info">
        <h2>${prof.nombre}</h2>
        <span class="oficio-badge">${prof.oficio}</span>
        <div class="profile-stats">
          <div class="profile-stat"><i class="fas fa-map-marker-alt"></i> ${prof.localidad}, ${prof.provincia}</div>
          <div class="profile-stat"><i class="fas fa-briefcase"></i> ${prof.experiencia} años de experiencia</div>
          <div class="profile-stat"><i class="fas fa-birthday-cake"></i> ${prof.edad} años</div>
          <div class="profile-stat"><i class="fas fa-phone"></i> ${prof.telefono}</div>
        </div>
      </div>
    </div>
    
    <div class="profile-details">
      <div class="detail-card">
        <h3><i class="fas fa-info-circle"></i> Información</h3>
        <div class="detail-item"><span>Domicilio / Zona</span><span>${prof.domicilio}</span></div>
        <div class="detail-item"><span>Localidad</span><span>${prof.localidad}</span></div>
        <div class="detail-item"><span>Provincia</span><span>${prof.provincia}</span></div>
        <div class="detail-item"><span>Contacto</span><span>${prof.telefono}</span></div>
      </div>
      <div class="detail-card">
        <h3><i class="fas fa-star"></i> Valoraciones</h3>
        <div class="avg-rating">
          ${renderStars(avg.promedio)}
          <span style="color:var(--text-light);font-size:0.95rem;">(${avg.count} reseñas)</span>
        </div>
        ${avg.count > 0 ? `
          <div class="detail-item"><span>Calidad del trabajo</span><span>${avg.calidad} ★</span></div>
          <div class="detail-item"><span>Tiempo de respuesta</span><span>${avg.tiempo} ★</span></div>
          <div class="detail-item"><span>Precio</span><span>${avg.precio} ★</span></div>
        ` : '<p style="color:var(--text-light);">Sin valoraciones aún</p>'}
      </div>
    </div>
    
    ${prof.descripcion ? `
      <div class="detail-card" style="margin-bottom:2rem;">
        <h3><i class="fas fa-comment"></i> Sobre mí</h3>
        <p>${prof.descripcion}</p>
      </div>
    ` : ''}
    
    <div class="photos-section">
      <h3><i class="fas fa-camera"></i> Trabajos realizados</h3>
      <div class="photos-grid">${fotosHtml}</div>
    </div>
    
    <div class="reviews-section">
      <h3><i class="fas fa-comments"></i> Reseñas de clientes</h3>
      ${puedeResenar ? `
        <button class="btn btn-primary" style="margin-bottom:1.2rem;" onclick="abrirModalResena('${prof.id}')">
          <i class="fas fa-pen"></i> Dejar reseña
        </button>
      ` : currentUser ? '' : `
        <p style="margin-bottom:1rem;color:var(--text-light);">
          <a href="#" onclick="showSection('login')" style="color:var(--primary);font-weight:600;">Iniciá sesión</a> como cliente para dejar una reseña.
        </p>
      `}
      ${reviewsHtml}
    </div>
    
    <div style="margin-top:2rem;text-align:center;display:flex;gap:0.8rem;justify-content:center;flex-wrap:wrap;">
      ${puedeResenar ? `
        <button class="btn btn-primary" onclick="abrirModalPresupuesto('${prof.id}', '${prof.nombre.replace(/'/g, "\\'")}')">
          <i class="fas fa-file-invoice-dollar"></i> Solicitar presupuesto
        </button>
      ` : !currentUser ? `
        <button class="btn btn-primary" onclick="showSection('login')">
          <i class="fas fa-file-invoice-dollar"></i> Iniciá sesión para pedir presupuesto
        </button>
      ` : ''}
      <button class="btn btn-secondary" onclick="showSection('search')">
        <i class="fas fa-arrow-left"></i> Volver a la búsqueda
      </button>
    </div>
  `;
  
  document.getElementById('profileContent').innerHTML = content;
  showSection('profile');
}

// ===== MY PROFILE (profesional logueado) =====
async function showMyProfile() {
  const user = getCurrentUser();
  if (!user || user.tipo !== 'oficio') {
    showSection('home');
    return;
  }

  let prof;
  try {
    const doc = await db.collection('users').doc(user.id).get();
    if (!doc.exists) {
      showToast('No se pudo cargar tu perfil', 'error');
      return;
    }
    prof = { id: doc.id, ...doc.data() };
    currentUserCache = { ...prof, email: user.email };
  } catch (err) {
    console.error(err);
    showToast('Error al cargar el perfil', 'error');
    return;
  }

  const reviews = (await getReviewsByProf(prof.id)).sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  const avg = getAverageRatingFromList(reviews, prof.id);
  const iniciales = (prof.nombre || '?').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  
  let fotosHtml = '';
  if (prof.fotos && prof.fotos.length > 0) {
    fotosHtml = prof.fotos.map((f, i) => `
      <div class="photo-item">
        <img src="${f}" alt="Trabajo">
        <button onclick="eliminarFoto(${i})" style="position:absolute;top:5px;right:5px;background:rgba(0,0,0,0.6);color:white;border:none;border-radius:50%;width:28px;height:28px;cursor:pointer;">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `).join('');
  }
  
  fotosHtml += `
    <label class="photo-upload">
      <i class="fas fa-plus"></i>
      <span style="font-size:0.8rem;">Agregar foto</span>
      <input type="file" accept="image/*" onchange="subirFoto(event)">
    </label>
  `;
  
  let reviewsHtml = '';
  if (reviews.length > 0) {
    reviewsHtml = reviews.map(r => `
      <div class="review-card">
        <div class="review-header">
          <span class="review-author">${r.clienteNombre}</span>
          <span style="font-size:0.85rem;color:var(--text-light);">${formatDate(r.fecha)}</span>
        </div>
        <div class="review-ratings">
          <span>Calidad: <span class="stars">${'★'.repeat(r.calidad)}${'☆'.repeat(5 - r.calidad)}</span></span>
          <span>Tiempo: <span class="stars">${'★'.repeat(r.tiempo)}${'☆'.repeat(5 - r.tiempo)}</span></span>
          <span>Precio: <span class="stars">${'★'.repeat(r.precio)}${'☆'.repeat(5 - r.precio)}</span></span>
        </div>
        <p class="review-text">${r.comentario}</p>
      </div>
    `).join('');
  } else {
    reviewsHtml = '<p style="color:var(--text-light);">Todavía no recibiste reseñas.</p>';
  }
  
  const content = `
    <h2 class="section-title">Mi Perfil Profesional</h2>
    
    <div class="profile-header">
      <div class="profile-avatar-lg">${iniciales}</div>
      <div class="profile-info">
        <h2>${prof.nombre}</h2>
        <span class="oficio-badge">${prof.oficio}</span>
        <div class="profile-stats">
          <div class="profile-stat"><i class="fas fa-map-marker-alt"></i> ${prof.localidad}, ${prof.provincia}</div>
          <div class="profile-stat"><i class="fas fa-briefcase"></i> ${prof.experiencia} años</div>
          <div class="profile-stat"><i class="fas fa-star"></i> ${avg.promedio > 0 ? avg.promedio + ' ★' : 'Sin valoraciones'} (${avg.count})</div>
        </div>
      </div>
    </div>
    
    <div class="detail-card" style="margin-bottom:2rem;">
      <h3><i class="fas fa-edit"></i> Editar información</h3>
      <form onsubmit="actualizarPerfil(event)">
        <div class="form-row">
          <div class="form-group">
            <label>Nombre</label>
            <input type="text" id="editNombre" value="${prof.nombre}" required>
          </div>
          <div class="form-group">
            <label>DNI</label>
            <input type="text" id="editDni" value="${prof.dni || ''}" required pattern="[0-9]{7,8}" maxlength="8" title="DNI sin puntos (7 u 8 dígitos)">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Teléfono</label>
            <input type="tel" id="editTelefono" value="${prof.telefono}" required>
          </div>
          <div class="form-group">
            <label>Edad</label>
            <input type="number" id="editEdad" value="${prof.edad}" min="18" max="80" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Oficio</label>
            <select id="editOficio" required>
              ${['Plomería','Gasista','Electricista','Pintor','Albañil','Carpintero','Jardinero','Cerrajero'].map(o => 
                `<option value="${o}" ${o === prof.oficio ? 'selected' : ''}>${o}</option>`
              ).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>Años de experiencia</label>
            <input type="number" id="editExperiencia" value="${prof.experiencia}" min="0" max="50" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Domicilio / Zona</label>
            <input type="text" id="editDomicilio" value="${prof.domicilio}" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Provincia</label>
            <select id="editProvincia" required onchange="cargarLocalidades('editProvincia','editLocalidad')">
              <option value="">Seleccionar provincia...</option>
              ${LISTA_PROVINCIAS.map(p => 
                `<option value="${p}" ${p === prof.provincia ? 'selected' : ''}>${p}</option>`
              ).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>Localidad</label>
            <select id="editLocalidad" required>
              <option value="">Seleccionar localidad...</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Descripción</label>
          <textarea id="editDescripcion" rows="3">${prof.descripcion || ''}</textarea>
        </div>
        <button type="submit" class="btn btn-primary">Guardar cambios</button>
      </form>
    </div>
    
    <div class="photos-section">
      <h3><i class="fas fa-camera"></i> Mis trabajos (fotos)</h3>
      <div class="photos-grid">${fotosHtml}</div>
    </div>
    
    <div class="reviews-section">
      <h3><i class="fas fa-comments"></i> Reseñas recibidas (${reviews.length})</h3>
      ${reviewsHtml}
    </div>
  `;
  
  document.getElementById('myProfileContent').innerHTML = content;
  // Cargar localidades de la provincia actual y preseleccionar
  cargarLocalidades('editProvincia', 'editLocalidad', prof.localidad);
  showSection('myProfile');
}

async function actualizarPerfil(e) {
  e.preventDefault();
  const user = getCurrentUser();
  if (!user) return;

  const dni = document.getElementById('editDni').value.trim().replace(/\D/g, '');
  if (dni.length < 7 || dni.length > 8) {
    showToast('El DNI debe tener 7 u 8 dígitos numéricos', 'error');
    return;
  }

  try {
    const dniSnap = await db.collection('users').where('dni', '==', dni).get();
    if (dniSnap.docs.some(d => d.id !== user.id)) {
      showToast('Ya existe otro profesional con ese DNI', 'error');
      return;
    }

    const data = {
      nombre: document.getElementById('editNombre').value.trim(),
      dni: dni,
      telefono: document.getElementById('editTelefono').value.trim(),
      oficio: document.getElementById('editOficio').value,
      experiencia: parseInt(document.getElementById('editExperiencia').value),
      edad: parseInt(document.getElementById('editEdad').value),
      domicilio: document.getElementById('editDomicilio').value.trim(),
      localidad: document.getElementById('editLocalidad').value,
      provincia: document.getElementById('editProvincia').value,
      descripcion: document.getElementById('editDescripcion').value.trim()
    };

    await db.collection('users').doc(user.id).update(data);
    currentUserCache = { ...user, ...data };
    showToast('Perfil actualizado correctamente');
    showMyProfile();
  } catch (err) {
    console.error(err);
    showToast('Error al guardar el perfil', 'error');
  }
}

async function subirFoto(e) {
  const file = e.target.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showToast('Solo se permiten imágenes', 'error');
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    showToast('La imagen es muy grande (máx 2MB)', 'error');
    return;
  }

  const user = getCurrentUser();
  if (!user) return;

  try {
    const doc = await db.collection('users').doc(user.id).get();
    const fotos = (doc.data().fotos || []).slice();
    if (fotos.length >= 8) {
      showToast('Máximo 8 fotos por perfil', 'error');
      return;
    }

    showToast('Subiendo foto...');
    const reader = new FileReader();
    reader.onload = async function (ev) {
      try {
        const url = await uploadImage(`users/${user.id}/fotos/${Date.now()}.jpg`, ev.target.result);
        fotos.push(url);
        await db.collection('users').doc(user.id).update({ fotos });
        currentUserCache = { ...user, fotos };
        showToast('Foto agregada correctamente');
        showMyProfile();
      } catch (err) {
        console.error(err);
        showToast('Error al subir la foto (revisá Storage en Firebase)', 'error');
      }
    };
    reader.readAsDataURL(file);
  } catch (err) {
    console.error(err);
    showToast('Error al subir la foto', 'error');
  }
}

async function eliminarFoto(index) {
  const user = getCurrentUser();
  if (!user) return;

  try {
    const doc = await db.collection('users').doc(user.id).get();
    const fotos = (doc.data().fotos || []).slice();
    fotos.splice(index, 1);
    await db.collection('users').doc(user.id).update({ fotos });
    currentUserCache = { ...user, fotos };
    showToast('Foto eliminada');
    showMyProfile();
  } catch (err) {
    console.error(err);
    showToast('Error al eliminar la foto', 'error');
  }
}

// ===== REVIEWS =====
let currentRatings = { calidad: 0, tiempo: 0, precio: 0 };

function setupRatingStars() {
  ['ratingCalidad', 'ratingTiempo', 'ratingPrecio'].forEach(id => {
    const container = document.getElementById(id);
    if (!container) return;
    
    container.querySelectorAll('i').forEach(star => {
      star.addEventListener('click', () => {
        const value = parseInt(star.dataset.value);
        const key = id.replace('rating', '').toLowerCase();
        currentRatings[key] = value;
        
        container.querySelectorAll('i').forEach(s => {
          const v = parseInt(s.dataset.value);
          s.className = v <= value ? 'fas fa-star active' : 'far fa-star';
        });
      });
      
      star.addEventListener('mouseenter', () => {
        const value = parseInt(star.dataset.value);
        container.querySelectorAll('i').forEach(s => {
          const v = parseInt(s.dataset.value);
          s.className = v <= value ? 'fas fa-star' : 'far fa-star';
        });
      });
    });
    
    container.addEventListener('mouseleave', () => {
      const key = id.replace('rating', '').toLowerCase();
      const current = currentRatings[key];
      container.querySelectorAll('i').forEach(s => {
        const v = parseInt(s.dataset.value);
        s.className = v <= current ? 'fas fa-star active' : 'far fa-star';
      });
    });
  });
}

function abrirModalResena(profId) {
  const user = getCurrentUser();
  if (!user || user.tipo !== 'cliente') {
    showToast('Debés iniciar sesión como cliente para dejar reseñas', 'error');
    return;
  }
  
  document.getElementById('reviewProfId').value = profId;
  currentRatings = { calidad: 0, tiempo: 0, precio: 0 };
  
  // Reset stars
  ['ratingCalidad', 'ratingTiempo', 'ratingPrecio'].forEach(id => {
    document.getElementById(id).querySelectorAll('i').forEach(s => {
      s.className = 'far fa-star';
    });
  });
  document.getElementById('reviewComentario').value = '';
  
  document.getElementById('reviewModal').classList.add('active');
}

function cerrarModal() {
  document.getElementById('reviewModal').classList.remove('active');
}

async function enviarResena(e) {
  e.preventDefault();

  const user = getCurrentUser();
  if (!user || user.tipo !== 'cliente') return;

  if (currentRatings.calidad === 0 || currentRatings.tiempo === 0 || currentRatings.precio === 0) {
    showToast('Por favor calificá las tres categorías', 'error');
    return;
  }

  const profId = document.getElementById('reviewProfId').value;
  const comentario = document.getElementById('reviewComentario').value.trim();

  try {
    const existentes = await getReviewsByProf(profId);
    if (existentes.find(r => r.clienteId === user.id)) {
      showToast('Ya dejaste una reseña para este profesional', 'error');
      return;
    }

    const nueva = {
      profId: profId,
      clienteId: user.id,
      clienteNombre: user.nombre,
      calidad: currentRatings.calidad,
      tiempo: currentRatings.tiempo,
      precio: currentRatings.precio,
      comentario: comentario,
      fecha: new Date().toISOString().split('T')[0]
    };

    await db.collection('reviews').add(nueva);

    await saveNotification(profId, {
      tipo: 'resena',
      mensaje: `${user.nombre} te dejó una reseña y valoración.`,
      detalle: `"${comentario.substring(0, 60)}${comentario.length > 60 ? '...' : ''}" — Calidad: ${currentRatings.calidad}★, Tiempo: ${currentRatings.tiempo}★, Precio: ${currentRatings.precio}★`
    });

    cerrarModal();
    showToast('¡Reseña enviada con éxito!');
    verPerfil(profId);
  } catch (err) {
    console.error(err);
    showToast('Error al enviar la reseña', 'error');
  }
}

// ===== NOTIFICATIONS =====
async function showNotifications() {
  const user = getCurrentUser();
  if (!user || user.tipo !== 'oficio') return;

  const container = document.getElementById('notificationsList');
  container.innerHTML = '<p style="text-align:center;color:var(--text-light);">Cargando...</p>';
  showSection('notifications');

  try {
    const notifs = await getNotifications(user.id);
    await markNotificationsRead(user.id);
    updateNotifBadge();

    if (notifs.length === 0) {
      container.innerHTML = `
        <div class="empty-notifs">
          <i class="fas fa-bell-slash"></i>
          <p>No tenés notificaciones todavía.</p>
          <p style="font-size:0.9rem;">Te avisaremos cuando dejen una reseña o te pidan un presupuesto.</p>
        </div>
      `;
      return;
    }

    const quotes = await getQuotes();
    container.innerHTML = notifs.map(n => {
      const icon = n.tipo === 'presupuesto' ? 'fa-file-invoice-dollar' : 'fa-star';
      let extra = '';
      if (n.tipo === 'presupuesto' && n.quoteId) {
        const q = quotes.find(x => x.id === n.quoteId);
        if (q) {
          const fotos = (q.fotos || []).map(f => `<img src="${f}" alt="foto" style="width:56px;height:56px;object-fit:cover;border-radius:6px;margin:4px 4px 0 0;">`).join('');
          extra = `
            <p style="font-size:0.85rem;margin-top:0.4rem;"><strong>Contacto:</strong> ${q.telefono} · <strong>Urgencia:</strong> ${q.urgencia}</p>
            ${fotos ? `<div style="margin-top:0.4rem;">${fotos}</div>` : ''}
          `;
        }
      }
      return `
        <div class="notif-item ${n.read ? '' : 'unread'}">
          <div class="notif-icon">
            <i class="fas ${icon}"></i>
          </div>
          <div class="notif-content">
            <p><strong>${n.mensaje}</strong></p>
            ${n.detalle ? `<p style="font-size:0.9rem;color:var(--text-light);">${n.detalle}</p>` : ''}
            ${extra}
            <span class="notif-time">${formatDateTime(n.fecha)}</span>
          </div>
        </div>
      `;
    }).join('');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<p style="text-align:center;color:var(--text-light);">Error al cargar notificaciones.</p>';
  }
}

// ===== UTILS =====
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('es-AR', { day: 'numeric', month: 'short', year: 'numeric' });
}

function formatDateTime(isoStr) {
  const d = new Date(isoStr);
  return d.toLocaleDateString('es-AR', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

// ===== PRESUPUESTOS =====
let quoteFotosData = [];

function abrirModalPresupuesto(profId, profNombre) {
  const user = getCurrentUser();
  if (!user || user.tipo !== 'cliente') {
    showToast('Debés iniciar sesión como cliente para solicitar presupuestos', 'error');
    showSection('login');
    return;
  }

  document.getElementById('quoteProfId').value = profId;
  document.getElementById('quoteProfName').textContent = 'Profesional: ' + profNombre;
  document.getElementById('quoteDescripcion').value = '';
  document.getElementById('quoteTelefono').value = user.telefono || '';
  document.getElementById('quoteUrgencia').value = 'Normal';
  quoteFotosData = [];
  document.getElementById('quotePhotosPreview').innerHTML = '';
  const input = document.getElementById('quoteFotosInput');
  if (input) input.value = '';

  document.getElementById('quoteModal').classList.add('active');
}

function cerrarModalPresupuesto() {
  document.getElementById('quoteModal').classList.remove('active');
}

function previewQuoteFotos(e) {
  const files = Array.from(e.target.files || []);
  const remaining = 4 - quoteFotosData.length;
  if (remaining <= 0) {
    showToast('Máximo 4 fotos', 'error');
    return;
  }

  const toRead = files.slice(0, remaining);
  toRead.forEach(file => {
    if (!file.type.startsWith('image/')) return;
    if (file.size > 2 * 1024 * 1024) {
      showToast('Alguna imagen supera 2MB', 'error');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      quoteFotosData.push(ev.target.result);
      renderQuotePreview();
    };
    reader.readAsDataURL(file);
  });
}

function renderQuotePreview() {
  const container = document.getElementById('quotePhotosPreview');
  container.innerHTML = quoteFotosData.map((src, i) => `
    <div style="position:relative;">
      <img src="${src}" alt="Foto ${i + 1}">
      <button type="button" onclick="quitarQuoteFoto(${i})" style="position:absolute;top:-6px;right:-6px;width:22px;height:22px;border:none;border-radius:50%;background:#c1121f;color:white;cursor:pointer;font-size:0.7rem;">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `).join('');
}

function quitarQuoteFoto(index) {
  quoteFotosData.splice(index, 1);
  renderQuotePreview();
}

async function enviarPresupuesto(e) {
  e.preventDefault();
  const user = getCurrentUser();
  if (!user || user.tipo !== 'cliente') return;

  const profId = document.getElementById('quoteProfId').value;
  const descripcion = document.getElementById('quoteDescripcion').value.trim();
  const telefono = document.getElementById('quoteTelefono').value.trim();
  const urgencia = document.getElementById('quoteUrgencia').value;

  if (!descripcion) {
    showToast('Completá la descripción del trabajo', 'error');
    return;
  }

  try {
    showToast('Enviando solicitud...');
    const fotoUrls = [];
    for (let i = 0; i < quoteFotosData.length; i++) {
      try {
        const url = await uploadImage(`quotes/${user.id}/${Date.now()}_${i}.jpg`, quoteFotosData[i]);
        fotoUrls.push(url);
      } catch (err) {
        console.warn('Foto de presupuesto no subida:', err);
      }
    }

    const quote = {
      profId,
      clienteId: user.id,
      clienteNombre: user.nombre,
      clienteEmail: user.email,
      telefono,
      descripcion,
      urgencia,
      fotos: fotoUrls,
      fecha: new Date().toISOString(),
      estado: 'pendiente'
    };

    const ref = await db.collection('quotes').add(quote);

    await saveNotification(profId, {
      tipo: 'presupuesto',
      mensaje: `${user.nombre} te solicitó un presupuesto (${urgencia}).`,
      detalle: descripcion.substring(0, 120) + (descripcion.length > 120 ? '...' : ''),
      quoteId: ref.id
    });

    cerrarModalPresupuesto();
    showToast('¡Solicitud de presupuesto enviada! El profesional te contactará.');
  } catch (err) {
    console.error(err);
    showToast('Error al enviar el presupuesto', 'error');
  }
}

// ===== SOPORTE TÉCNICO (CHAT) =====
function toggleSupportChat() {
  const chat = document.getElementById('supportChat');
  if (!chat) return;
  chat.classList.toggle('open');
  if (chat.classList.contains('open')) {
    const input = document.getElementById('supportInput');
    if (input) setTimeout(() => input.focus(), 100);
  }
}

function appendSupportMsg(text, type) {
  const box = document.getElementById('supportMessages');
  if (!box) return;
  const div = document.createElement('div');
  div.className = 'support-msg ' + type;
  div.innerHTML = `<p>${text}</p>`;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function respuestaSoporte(mensaje) {
  const m = mensaje.toLowerCase();
  if (m.includes('sesión') || m.includes('login') || m.includes('ingresar') || m.includes('contraseña')) {
    return 'Para iniciar sesión usá el menú <strong>Iniciar Sesión</strong> con el email y contraseña con los que te registraste. Si olvidaste la clave, por ahora tenés que registrarte de nuevo (demo sin recuperación de contraseña).';
  }
  if (m.includes('presupuesto') || m.includes('cotiz')) {
    return 'Para pedir un presupuesto: 1) Iniciá sesión como <strong>cliente</strong>. 2) Buscá un profesional. 3) Entrá a su perfil y tocá <strong>Solicitar presupuesto</strong>. Podés adjuntar fotos y describir el problema.';
  }
  if (m.includes('profesional') || m.includes('oficio') || m.includes('registrar')) {
    return 'En <strong>Registrarse → Soy Persona de Oficio</strong> completá tus datos, DNI, oficio, zona y experiencia. Después podés subir fotos de trabajos en Mi Perfil.';
  }
  if (m.includes('reseña') || m.includes('valor')) {
    return 'Las reseñas las dejan los clientes desde el perfil del profesional (calidad, tiempo y precio). El profesional recibe una notificación.';
  }
  if (m.includes('hola') || m.includes('buenas') || m.includes('buen día')) {
    return '¡Hola! Contame en qué te ayudo: registro, presupuestos, reseñas o inicio de sesión.';
  }
  return 'Gracias por tu mensaje. Podés consultar sobre: registro, inicio de sesión, cómo pedir presupuesto o dejar reseñas. Si el problema continúa, escribí con más detalle y te orientamos.';
}

function supportQuickReply(text) {
  appendSupportMsg(text, 'user');
  setTimeout(() => {
    appendSupportMsg(respuestaSoporte(text), 'bot');
  }, 450);
}

function enviarMensajeSoporte(e) {
  e.preventDefault();
  const input = document.getElementById('supportInput');
  const text = (input.value || '').trim();
  if (!text) return;
  appendSupportMsg(text, 'user');
  input.value = '';
  setTimeout(() => {
    appendSupportMsg(respuestaSoporte(text), 'bot');
  }, 500);
}

window.toggleSupportChat = toggleSupportChat;
window.supportQuickReply = supportQuickReply;
window.enviarMensajeSoporte = enviarMensajeSoporte;
window.abrirModalPresupuesto = abrirModalPresupuesto;
window.cerrarModalPresupuesto = cerrarModalPresupuesto;
window.previewQuoteFotos = previewQuoteFotos;
window.quitarQuoteFoto = quitarQuoteFoto;
window.enviarPresupuesto = enviarPresupuesto;

// ===== START =====
document.addEventListener('DOMContentLoaded', init);
