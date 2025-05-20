document.addEventListener('DOMContentLoaded', () => {
  const listaEventos = document.getElementById('listaEventos');
  const destacados = document.getElementById('destacados');

  // Agregar botón de perfil al header
  const header = document.querySelector('header');
  if (header) {
    const perfilBtn = document.createElement('a');
    perfilBtn.href = 'perfil.html';
    perfilBtn.className = 'perfil-link';
    perfilBtn.textContent = '👤 Mi Perfil';
    header.appendChild(perfilBtn);
  }

  const eventos = [
    { id: 1, artista: "Los Bunkers", ciudad: "Santiago", genero: "rock", fecha: "2025-06-15", destacado: true },
    { id: 2, artista: "Mon Laferte", ciudad: "Valparaíso", genero: "pop", fecha: "2025-06-20", destacado: false },
    { id: 3, artista: "Paloma Mami", ciudad: "Concepción", genero: "urbano", fecha: "2025-06-25", destacado: true },
    { id: 4, artista: "DJ Bitman", ciudad: "La Serena", genero: "electrónica", fecha: "2025-07-01", destacado: false },
    { id: 5, artista: "Los Bunkers", ciudad: "Viña del Mar", genero: "rock", fecha: "2025-07-10", destacado: true },
  ];

  function mostrarEventos(filtrados) {
    listaEventos.innerHTML = "";
    filtrados.forEach(ev => {
      const div = document.createElement('div');
      div.className = 'event-card';
      div.innerHTML = `
        <h3>${ev.artista}</h3>
        <p>Ciudad: ${ev.ciudad}</p>
        <p>Género: ${ev.genero}</p>
        <p>Fecha: ${new Date(ev.fecha).toLocaleDateString('es-ES')}</p>
        ${ev.id === 1 ? '<button class="boton-pequeno" onclick="location.href=\'evento.html\'">Comprar Entrada</button>' : ''}
      `;
      listaEventos.appendChild(div);
    });
  }

  function cargarDestacados() {
    destacados.innerHTML = "";
    const eventosDestacados = eventos.filter(e => e.destacado);
    eventosDestacados.forEach(ev => {
      const div = document.createElement('div');
      div.className = 'event-card';
      div.innerHTML = `
        <h3>${ev.artista}</h3>
        <p>${ev.ciudad} - ${new Date(ev.fecha).toLocaleDateString('es-ES')}</p>
      `;
      destacados.appendChild(div);
    });
  }

  function filtrarEventos() {
    const artista = document.getElementById('filtroArtista').value.toLowerCase();
    const ciudad = document.getElementById('filtroCiudad').value.toLowerCase();
    const genero = document.getElementById('filtroGenero').value;
    const fecha = document.getElementById('filtroFecha').value;

    const filtrados = eventos.filter(ev => {
      const matchArtista = ev.artista.toLowerCase().includes(artista);
      const matchCiudad = ev.ciudad.toLowerCase().includes(ciudad);
      const matchGenero = genero ? ev.genero === genero : true;
      const matchFecha = fecha ? ev.fecha === fecha : true;
      return matchArtista && matchCiudad && matchGenero && matchFecha;
    });

    mostrarEventos(filtrados);
  }

  document.getElementById('btnFiltrar').addEventListener('click', filtrarEventos);

  // Carga inicial
  cargarDestacados();
  mostrarEventos(eventos);

  
});
