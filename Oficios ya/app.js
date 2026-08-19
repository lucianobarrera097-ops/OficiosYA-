// ===== DATA & STORAGE =====
const STORAGE_KEYS = {
  users: 'oficiosya_users',
  currentUser: 'oficiosya_currentUser',
  reviews: 'oficiosya_reviews',
  notifications: 'oficiosya_notifications',
  photos: 'oficiosya_photos'
};

// Datos de ejemplo de profesionales
const DEMO_PROFESIONALES = [
  {
    id: 'demo1',
    tipo: 'oficio',
    nombre: 'Carlos Méndez',
    email: 'carlos.plomero@demo.com',
    password: 'demo123',
    telefono: '11 4567-8901',
    oficio: 'Plomería',
    experiencia: 12,
    edad: 38,
    domicilio: 'Villa Crespo',
    localidad: 'Villa Crespo',
    provincia: 'CABA',
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
    oficio: 'Gasista',
    experiencia: 8,
    edad: 32,
    domicilio: 'Caballito',
    localidad: 'Caballito',
    provincia: 'CABA',
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
    oficio: 'Electricista',
    experiencia: 15,
    edad: 45,
    domicilio: 'Flores',
    localidad: 'Flores',
    provincia: 'CABA',
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
    oficio: 'Pintor',
    experiencia: 10,
    edad: 35,
    domicilio: 'Palermo',
    localidad: 'Palermo',
    provincia: 'CABA',
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
    oficio: 'Albañil',
    experiencia: 20,
    edad: 48,
    domicilio: 'Nueva Córdoba',
    localidad: 'Córdoba Capital',
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
function init() {
  // Cargar datos demo si no existen
  let users = getUsers();
  if (users.length === 0) {
    users = [...DEMO_PROFESIONALES];
    saveUsers(users);
  }

  let reviews = getReviews();
  if (reviews.length === 0) {
    reviews = [...DEMO_REVIEWS];
    saveReviews(reviews);
  }

  updateNav();
  showSection('home');
  setupRatingStars();
}

// ===== STORAGE HELPERS =====
function getUsers() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.users) || '[]');
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.currentUser) || 'null');
}

function setCurrentUser(user) {
  localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(user));
}

function getReviews() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.reviews) || '[]');
}

function saveReviews(reviews) {
  localStorage.setItem(STORAGE_KEYS.reviews, JSON.stringify(reviews));
}

function getNotifications(userId) {
  const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.notifications) || '{}');
  return all[userId] || [];
}

function saveNotification(userId, notif) {
  const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.notifications) || '{}');
  if (!all[userId]) all[userId] = [];
  all[userId].unshift(notif);
  localStorage.setItem(STORAGE_KEYS.notifications, JSON.stringify(all));
}

function markNotificationsRead(userId) {
  const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.notifications) || '{}');
  if (all[userId]) {
    all[userId].forEach(n => n.read = true);
    localStorage.setItem(STORAGE_KEYS.notifications, JSON.stringify(all));
  }
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

function updateNav() {
  const user = getCurrentUser();
  const navRegister = document.getElementById('navRegister');
  const navLogin = document.getElementById('navLogin');
  const navProfile = document.getElementById('navProfile');
  const navLogout = document.getElementById('navLogout');
  const navNotifications = document.getElementById('navNotifications');

  if (user) {
    navRegister.style.display = 'none';
    navLogin.style.display = 'none';
    navLogout.style.display = 'block';
    
    if (user.tipo === 'oficio') {
      navProfile.style.display = 'block';
      navNotifications.style.display = 'block';
      updateNotifBadge();
    } else {
      navProfile.style.display = 'none';
      navNotifications.style.display = 'none';
    }
  } else {
    navRegister.style.display = 'block';
    navLogin.style.display = 'block';
    navProfile.style.display = 'none';
    navLogout.style.display = 'none';
    navNotifications.style.display = 'none';
  }
}

function updateNotifBadge() {
  const user = getCurrentUser();
  if (!user || user.tipo !== 'oficio') return;
  
  const notifs = getNotifications(user.id);
  const unread = notifs.filter(n => !n.read).length;
  const badge = document.getElementById('notifBadge');
  
  if (unread > 0) {
    badge.style.display = 'flex';
    badge.textContent = unread > 9 ? '9+' : unread;
  } else {
    badge.style.display = 'none';
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

function registrarCliente(e) {
  e.preventDefault();
  
  const email = document.getElementById('clienteEmail').value.trim().toLowerCase();
  const users = getUsers();
  
  if (users.find(u => u.email === email)) {
    showToast('Ya existe una cuenta con ese email', 'error');
    return;
  }
  
  const nuevo = {
    id: 'u_' + Date.now(),
    tipo: 'cliente',
    nombre: document.getElementById('clienteNombre').value.trim(),
    email: email,
    password: document.getElementById('clientePass').value,
    telefono: document.getElementById('clienteTelefono').value.trim(),
    localidad: document.getElementById('clienteLocalidad').value.trim(),
    provincia: document.getElementById('clienteProvincia').value
  };
  
  users.push(nuevo);
  saveUsers(users);
  setCurrentUser(nuevo);
  updateNav();
  showToast('¡Cuenta creada con éxito! Ya podés buscar profesionales.');
  showSection('search');
  
  // Limpiar form
  e.target.reset();
}

function registrarOficio(e) {
  e.preventDefault();
  
  const email = document.getElementById('oficioEmail').value.trim().toLowerCase();
  const users = getUsers();
  
  if (users.find(u => u.email === email)) {
    showToast('Ya existe una cuenta con ese email', 'error');
    return;
  }
  
  const nuevo = {
    id: 'u_' + Date.now(),
    tipo: 'oficio',
    nombre: document.getElementById('oficioNombre').value.trim(),
    email: email,
    password: document.getElementById('oficioPass').value,
    telefono: document.getElementById('oficioTelefono').value.trim(),
    oficio: document.getElementById('oficioTipo').value,
    experiencia: parseInt(document.getElementById('oficioExperiencia').value),
    edad: parseInt(document.getElementById('oficioEdad').value),
    domicilio: document.getElementById('oficioDomicilio').value.trim(),
    localidad: document.getElementById('oficioLocalidad').value.trim(),
    provincia: document.getElementById('oficioProvincia').value,
    descripcion: document.getElementById('oficioDescripcion').value.trim(),
    fotos: []
  };
  
  users.push(nuevo);
  saveUsers(users);
  setCurrentUser(nuevo);
  updateNav();
  showToast('¡Perfil profesional creado! Completá tu perfil y agregá fotos de tus trabajos.');
  showMyProfile();
  
  e.target.reset();
}

// ===== LOGIN / LOGOUT =====
function iniciarSesion(e) {
  e.preventDefault();
  
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass = document.getElementById('loginPass').value;
  
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === pass);
  
  if (!user) {
    showToast('Email o contraseña incorrectos', 'error');
    return;
  }
  
  setCurrentUser(user);
  updateNav();
  showToast(`¡Bienvenido/a, ${user.nombre.split(' ')[0]}!`);
  
  if (user.tipo === 'oficio') {
    showMyProfile();
  } else {
    showSection('search');
  }
  
  e.target.reset();
}

function logout() {
  localStorage.removeItem(STORAGE_KEYS.currentUser);
  updateNav();
  showToast('Sesión cerrada correctamente');
  showSection('home');
}

// ===== SEARCH =====
function quickSearch(oficio) {
  showSection('search');
  document.getElementById('filterOficio').value = oficio;
  document.getElementById('filterLocalidad').value = '';
  document.getElementById('filterProvincia').value = '';
  realizarBusqueda();
}

function realizarBusqueda() {
  const oficio = document.getElementById('filterOficio').value;
  const localidad = document.getElementById('filterLocalidad').value.trim().toLowerCase();
  const provincia = document.getElementById('filterProvincia').value;
  
  const users = getUsers().filter(u => u.tipo === 'oficio');
  
  let resultados = users.filter(u => {
    if (oficio && u.oficio !== oficio) return false;
    if (provincia && u.provincia !== provincia) return false;
    if (localidad && !u.localidad.toLowerCase().includes(localidad) && !u.domicilio.toLowerCase().includes(localidad)) return false;
    return true;
  });
  
  const container = document.getElementById('resultados');
  const noRes = document.getElementById('noResultados');
  
  if (resultados.length === 0) {
    container.innerHTML = '';
    noRes.style.display = 'block';
    return;
  }
  
  noRes.style.display = 'none';
  
  container.innerHTML = resultados.map(p => {
    const avg = getAverageRating(p.id);
    const starsHtml = renderStars(avg.promedio);
    const iniciales = p.nombre.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    
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
            <span><i class="fas fa-briefcase"></i> ${p.experiencia} años exp.</span>
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
}

// ===== RATINGS =====
function getAverageRating(profId) {
  const reviews = getReviews().filter(r => r.profId === profId);
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
function verPerfil(profId) {
  const users = getUsers();
  const prof = users.find(u => u.id === profId);
  if (!prof) {
    showToast('Profesional no encontrado', 'error');
    return;
  }
  
  const avg = getAverageRating(profId);
  const reviews = getReviews().filter(r => r.profId === profId).sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  const iniciales = prof.nombre.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
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
    
    <div style="margin-top:2rem;text-align:center;">
      <button class="btn btn-secondary" onclick="showSection('search')">
        <i class="fas fa-arrow-left"></i> Volver a la búsqueda
      </button>
    </div>
  `;
  
  document.getElementById('profileContent').innerHTML = content;
  showSection('profile');
}

// ===== MY PROFILE (profesional logueado) =====
function showMyProfile() {
  const user = getCurrentUser();
  if (!user || user.tipo !== 'oficio') {
    showSection('home');
    return;
  }
  
  // Refrescar datos del usuario
  const users = getUsers();
  const prof = users.find(u => u.id === user.id);
  if (!prof) return;
  
  const avg = getAverageRating(prof.id);
  const reviews = getReviews().filter(r => r.profId === prof.id).sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  const iniciales = prof.nombre.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  
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
            <label>Teléfono</label>
            <input type="tel" id="editTelefono" value="${prof.telefono}" required>
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
            <label>Edad</label>
            <input type="number" id="editEdad" value="${prof.edad}" min="18" max="80" required>
          </div>
          <div class="form-group">
            <label>Domicilio / Zona</label>
            <input type="text" id="editDomicilio" value="${prof.domicilio}" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Localidad</label>
            <input type="text" id="editLocalidad" value="${prof.localidad}" required>
          </div>
          <div class="form-group">
            <label>Provincia</label>
            <select id="editProvincia" required>
              ${['Buenos Aires','CABA','Córdoba','Santa Fe','Mendoza','Tucumán','Entre Ríos','Salta'].map(p => 
                `<option value="${p}" ${p === prof.provincia ? 'selected' : ''}>${p}</option>`
              ).join('')}
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
  showSection('myProfile');
}

function actualizarPerfil(e) {
  e.preventDefault();
  const user = getCurrentUser();
  if (!user) return;
  
  const users = getUsers();
  const idx = users.findIndex(u => u.id === user.id);
  if (idx === -1) return;
  
  users[idx].nombre = document.getElementById('editNombre').value.trim();
  users[idx].telefono = document.getElementById('editTelefono').value.trim();
  users[idx].oficio = document.getElementById('editOficio').value;
  users[idx].experiencia = parseInt(document.getElementById('editExperiencia').value);
  users[idx].edad = parseInt(document.getElementById('editEdad').value);
  users[idx].domicilio = document.getElementById('editDomicilio').value.trim();
  users[idx].localidad = document.getElementById('editLocalidad').value.trim();
  users[idx].provincia = document.getElementById('editProvincia').value;
  users[idx].descripcion = document.getElementById('editDescripcion').value.trim();
  
  saveUsers(users);
  setCurrentUser(users[idx]);
  showToast('Perfil actualizado correctamente');
  showMyProfile();
}

function subirFoto(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  if (!file.type.startsWith('image/')) {
    showToast('Solo se permiten imágenes', 'error');
    return;
  }
  
  // Limitar tamaño a ~2MB
  if (file.size > 2 * 1024 * 1024) {
    showToast('La imagen es muy grande (máx 2MB)', 'error');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(ev) {
    const user = getCurrentUser();
    const users = getUsers();
    const idx = users.findIndex(u => u.id === user.id);
    if (idx === -1) return;
    
    if (!users[idx].fotos) users[idx].fotos = [];
    if (users[idx].fotos.length >= 8) {
      showToast('Máximo 8 fotos por perfil', 'error');
      return;
    }
    
    users[idx].fotos.push(ev.target.result);
    saveUsers(users);
    setCurrentUser(users[idx]);
    showToast('Foto agregada correctamente');
    showMyProfile();
  };
  reader.readAsDataURL(file);
}

function eliminarFoto(index) {
  const user = getCurrentUser();
  const users = getUsers();
  const idx = users.findIndex(u => u.id === user.id);
  if (idx === -1) return;
  
  users[idx].fotos.splice(index, 1);
  saveUsers(users);
  setCurrentUser(users[idx]);
  showToast('Foto eliminada');
  showMyProfile();
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

function enviarResena(e) {
  e.preventDefault();
  
  const user = getCurrentUser();
  if (!user || user.tipo !== 'cliente') return;
  
  if (currentRatings.calidad === 0 || currentRatings.tiempo === 0 || currentRatings.precio === 0) {
    showToast('Por favor calificá las tres categorías', 'error');
    return;
  }
  
  const profId = document.getElementById('reviewProfId').value;
  const comentario = document.getElementById('reviewComentario').value.trim();
  
  const reviews = getReviews();
  
  // Evitar reseñas duplicadas del mismo cliente al mismo prof
  const yaReseno = reviews.find(r => r.profId === profId && r.clienteId === user.id);
  if (yaReseno) {
    showToast('Ya dejaste una reseña para este profesional', 'error');
    return;
  }
  
  const nueva = {
    id: 'r_' + Date.now(),
    profId: profId,
    clienteId: user.id,
    clienteNombre: user.nombre,
    calidad: currentRatings.calidad,
    tiempo: currentRatings.tiempo,
    precio: currentRatings.precio,
    comentario: comentario,
    fecha: new Date().toISOString().split('T')[0]
  };
  
  reviews.push(nueva);
  saveReviews(reviews);
  
  // Crear notificación para el profesional
  const notif = {
    id: 'n_' + Date.now(),
    tipo: 'resena',
    mensaje: `${user.nombre} te dejó una reseña y valoración.`,
    detalle: `"${comentario.substring(0, 60)}${comentario.length > 60 ? '...' : ''}" — Calidad: ${currentRatings.calidad}★, Tiempo: ${currentRatings.tiempo}★, Precio: ${currentRatings.precio}★`,
    fecha: new Date().toISOString(),
    read: false
  };
  saveNotification(profId, notif);
  
  cerrarModal();
  showToast('¡Reseña enviada con éxito!');
  verPerfil(profId);
}

// ===== NOTIFICATIONS =====
function showNotifications() {
  const user = getCurrentUser();
  if (!user || user.tipo !== 'oficio') return;
  
  const notifs = getNotifications(user.id);
  markNotificationsRead(user.id);
  updateNotifBadge();
  
  const container = document.getElementById('notificationsList');
  
  if (notifs.length === 0) {
    container.innerHTML = `
      <div class="empty-notifs">
        <i class="fas fa-bell-slash"></i>
        <p>No tenés notificaciones todavía.</p>
        <p style="font-size:0.9rem;">Te avisaremos cuando alguien deje una reseña en tu perfil.</p>
      </div>
    `;
  } else {
    container.innerHTML = notifs.map(n => `
      <div class="notif-item ${n.read ? '' : 'unread'}">
        <div class="notif-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="notif-content">
          <p><strong>${n.mensaje}</strong></p>
          ${n.detalle ? `<p style="font-size:0.9rem;color:var(--text-light);">${n.detalle}</p>` : ''}
          <span class="notif-time">${formatDateTime(n.fecha)}</span>
        </div>
      </div>
    `).join('');
  }
  
  showSection('notifications');
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

// ===== START =====
document.addEventListener('DOMContentLoaded', init);
