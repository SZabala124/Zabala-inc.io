import React, { useState, useEffect } from 'react';
import { FiStar, FiZap, FiActivity, FiLoader, FiCpu, FiChevronRight } from 'react-icons/fi';
import '../styles/ZabalaLogo.css';

const ZabalaLogo = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showFullText, setShowFullText] = useState(false);
  const [logoColor, setLogoColor] = useState('purple-blue');
  const [fontFamily, setFontFamily] = useState('serif');
  const [showEnterButton, setShowEnterButton] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Iniciar animación automáticamente
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowFullText(true);
      
      // Mostrar el botón después de que aparezca el texto
      setTimeout(() => {
        setShowEnterButton(true);
      }, 1000);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Cambiar color del logo cada 3 segundos
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setLogoColor(prevColor => {
        if (prevColor === 'purple-blue') return 'pink-yellow';
        if (prevColor === 'pink-yellow') return 'green-teal';
        return 'purple-blue';
      });
    }, 3000);

    return () => clearInterval(colorInterval);
  }, []);

  // Cambiar la fuente de la Z cada 5 segundos
  useEffect(() => {
    const fontInterval = setInterval(() => {
      setFontFamily(prevFont => {
        if (prevFont === 'serif') return 'playfair';
        if (prevFont === 'playfair') return 'cinzel';
        return 'serif';
      });
    }, 5000);

    return () => clearInterval(fontInterval);
  }, []);

  // Función para manejar la transición de salida
  const handleEnterClick = () => {
    setIsExiting(true);
    
    // Esperar a que termine la animación antes de llamar a onComplete
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 1000); // Duración de la animación de salida
  };

  return (
    <div className={`zabala-container ${isExiting ? 'exiting' : ''}`}>
      <div className="logo-wrapper">
        {/* Logo Z */}
        <div className={`logo-circle ${logoColor} ${isLoading ? 'loading' : ''}`}>
          {isLoading ? (
            <FiLoader className="loader-icon" />
          ) : (
            <span className={`logo-text ${fontFamily}`}>Z</span>
          )}
        </div>

        {/* Nombre de la empresa */}
        <div className={`company-name ${showFullText ? 'visible' : ''}`}>
          Zabala.Inc
        </div>

        {/* Iconos decorativos */}
        <div className="icon-sparkles"><FiStar /></div>
        <div className="icon-zap"><FiZap /></div>
        <div className="icon-flame"><FiActivity /></div>
        <div className="icon-brain"><FiCpu /></div>
      </div>
      
      {/* Botón para ingresar */}
      {showEnterButton && (
        <button 
          className="enter-button"
          onClick={handleEnterClick}
        >
          Ingresar a la Galería
        </button>
      )}
    </div>
  );
};

export default ZabalaLogo;