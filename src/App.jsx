import { useState, useEffect } from 'react';
import './App.css';
import './MoreComingSoon.css';
import ZabalaLogo from './components/ZabalaLogo';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [targetImageIndex, setTargetImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showSplash, setShowSplash] = useState(true); // Estado para controlar la pantalla de inicio
  
  const images = [
    { 
      name: 'Alejandra Merentes', 
      src: '/Alejandra Fondo.png', 
      details: {
        categoría: 'Amigos',
        carrera: 'Idiomas',
        pasatiempo: 'Arte contemporáneo'
      }
    },
    { 
      name: 'Alessio Parrella', 
      src: '/Alessio Fondo.png', 
      details: {
        categoría: 'Amigos',
        carrera: 'Ingeniería',
        pasatiempo: 'Diseño 3D'
      }
    },
    { 
      name: 'Alexandra Carvajalino', 
      src: '/Alex Fondo.png', 
      details: {
        categoría: 'Amigos',
        carrera: 'Psicología',
        pasatiempo: 'Ilustración digital'
      }
    },
    { 
      name: 'Andrés Castro', 
      src: '/Andrés Fondo.png', 
      details: {
        categoría: 'Amigos',
        carrera: 'Idiomas',
        pasatiempo: 'Pintura al óleo'
      }
    },
    { 
      name: 'Dana González', 
      src: '/Dana Fondo.png', 
      details: {
        categoría: 'Amigos',
        carrera: 'Psicología',
        pasatiempo: 'Fotografía'
      }
    },
    { 
      name: 'Emilio Ucha', 
      src: '/Emilio Fondo.png', 
      details: {
        categoría: 'Amigos',
        carrera: 'Ingeniería',
        pasatiempo: 'Fotografía artística'
      }
    },
    { 
      name: 'Fabiana Galavis', 
      src: '/Fabs Fondo.png', 
      details: {
        categoría: 'Amigos',
        carrera: 'Psicología',
        pasatiempo: 'Dibujo de personajes'
      }
    },
    { 
      name: 'Ildemar Pérez', 
      src: '/Ildemar Fondo.png', 
      details: {
        categoría: 'Amigos',
        carrera: 'Ingeniería',
        pasatiempo: 'Diseño gráfico'
      }
    },
    { 
      name: 'Leonel Abache', 
      src: '/Leonel Fondo.png', 
      details: {
        categoría: 'Amigos',
        carrera: 'Psicología',
        pasatiempo: 'Creación de mundos fantásticos'
      }
    },
    { 
      name: 'Luis Noriega', 
      src: '/Foncho Fondo.png', 
      details: {
        categoría: 'Amigos',
        carrera: 'Ingeniería',
        pasatiempo: 'Arte digital'
      }
    },
    { 
      name: 'Miranda Gómez', 
      src: '/Mori Fondo.png', 
      details: {
        categoría: 'Amigos',
        carrera: 'Psicología',
        pasatiempo: 'Arte minimalista'
      }
    },
    { 
      name: 'Pablo Pelliccioni', 
      src: '/Pablo Fondo.png', 
      details: {
        categoría: 'Amigos',
        carrera: 'Ingeniería',
        pasatiempo: 'Ilustración'
      }
    },
    { 
      name: 'Sebastian Marval', 
      src: '/Marval Fondo.png', 
      details: {
        categoría: 'Amigos',
        carrera: 'Ingeniería',
        pasatiempo: 'Arte conceptual'
      }
    },
    { 
      name: 'Sofía Machado', 
      src: '/Sofía Machado Fondo.png', 
      details: {
        categoría: 'Amigos',
        carrera: 'Ingeniería',
        pasatiempo: 'Fusión de estilos'
      }
    }
  ];
  
  const colors = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#DB2777'];

  useEffect(() => {
    // Inicializar el siguiente índice
    setTargetImageIndex((currentImageIndex + 1) % images.length);
    
    // Precargar la siguiente imagen
    const imgPreload = new Image();
    imgPreload.src = images[(currentImageIndex + 1) % images.length].src;
  }, []);

  // Función simplificada para cambiar imágenes
  const changeImage = (direction) => {
    // Si ya hay una transición en curso, no hacer nada
    if (isTransitioning) return;
    
    // Calcular el nuevo índice
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % images.length 
      : (currentImageIndex - 1 + images.length) % images.length;
    
    // Configurar la transición
    setIsTransitioning(true);
    setTargetImageIndex(newIndex);
    setColorIndex(prev => (prev + 1) % colors.length);
    
    // Completar la transición después de la animación
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsTransitioning(false);
    }, 600);
  };

  // Generar el gradiente de colores para el texto
  const getTextGradient = () => {
    const c1 = colors[colorIndex];
    const c2 = colors[(colorIndex + 1) % colors.length];
    const c3 = colors[(colorIndex + 2) % colors.length];
    const c4 = colors[(colorIndex + 3) % colors.length];
    const c5 = colors[(colorIndex + 4) % colors.length];
    
    return `linear-gradient(to right, ${c1}, ${c2}, ${c3}, ${c4}, ${c5})`;
  };

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  // Función mejorada para cerrar el modal con animación
  const closeModal = () => {
    // Añadir clase para animación de salida
    const modalElement = document.querySelector('.modal');
    modalElement.classList.add('closing');
    
    // Esperar a que termine la animación antes de ocultar
    setTimeout(() => {
      setShowModal(false);
      document.body.style.overflow = '';
      // Eliminar la clase después de cerrar
      setTimeout(() => {
        modalElement.classList.remove('closing');
      }, 100);
    }, 500); // Tiempo igual a la duración de la animación
  };

  // Función para ocultar la pantalla de inicio
  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Verificar si estamos en la última imagen
  const isLastImage = currentImageIndex === images.length - 1;

  return (
    <>
      {showSplash ? (
        <ZabalaLogo onComplete={handleSplashComplete} />
      ) : (
        <div className="gallery-container">
          <h1 className="gallery-title">Galería de Dibujos</h1>
          
          <div 
            className="image-name"
            style={{ 
              backgroundImage: getTextGradient(),
              transform: isTransitioning ? 'scale(1.2)' : 'scale(1)',
              textShadow: isTransitioning ? '2px 2px 6px rgba(0,0,0,0.3)' : 'none'
            }}
          >
            {isTransitioning ? images[targetImageIndex].name : images[currentImageIndex].name}
          </div>
          
          {/* Nuevo título para la sección de imágenes */}
          <h2 className="image-section-title">Ilustraciones</h2>
          
          <div className="image-display">
            <button 
              className="nav-button prev-button" 
              onClick={() => changeImage('prev')}
              disabled={isTransitioning}
              aria-label="Imagen anterior"
            >
              &lt;
            </button>
            
            <div className="image-frame" onClick={openModal}>
              <div className="image-container">
                <img 
                  id="imagenActual"
                  src={images[currentImageIndex].src} 
                  alt={images[currentImageIndex].name} 
                  className={`gallery-image ${isTransitioning ? 'imagen-saliendo' : ''}`}
                />
                <img 
                  id="imagenSiguiente"
                  src={images[targetImageIndex].src} 
                  alt={images[targetImageIndex].name} 
                  className={`gallery-image ${isTransitioning ? 'imagen-entrando' : ''}`}
                />
                
                {/* Mensaje de "Próximamente más ilustraciones" cuando estamos en la última imagen */}
                {isLastImage && !isTransitioning && (
                  <div className="more-coming-soon">
                    <p>Próximamente más ilustraciones...</p>
                  </div>
                )}
              </div>
            </div>
            
            <button 
              className="nav-button next-button" 
              onClick={() => changeImage('next')}
              disabled={isTransitioning}
              aria-label="Imagen siguiente"
            >
              &gt;
            </button>
          </div>
          
          {/* Modal */}
          <div className={`modal ${showModal ? 'show' : ''}`}>
            <div className="modal-content">
              <button className="close-button" onClick={closeModal}>&times;</button>
              
              <div className="modal-grid">
                <h2 className="modal-title">{images[currentImageIndex].name}</h2>
                
                <div className="modal-image-container">
                  <img 
                    className="modal-image" 
                    src={images[currentImageIndex].src} 
                    alt={images[currentImageIndex].name} 
                  />
                </div>
                
                <div className="modal-info">
                  <ul className="modal-details-list">
                    {Object.entries(images[currentImageIndex].details)
                      .filter(([key]) => key !== 'pasatiempo') // Filter out the pasatiempo entry
                      .map(([key, value]) => (
                        <li key={key} className="modal-detail-item">
                          <span className="detail-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> 
                          <span className="detail-value">{value}</span>
                        </li>
                    ))}
                  </ul>
                  
                  {/* Adding the "Coming Soon" message */}
                  <div className="coming-soon-message">
                    <h3>Próximamente más info...</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;