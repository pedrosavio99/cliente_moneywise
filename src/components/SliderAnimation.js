import React, { useEffect, useState } from "react";

const SlideEffect = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Adiciona um atraso de 2 segundos antes de tornar o conteúdo visível
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div  className="overflow-hidden">
      <div
        className={`transition-transform duration-700 transform overflow-hidden ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideEffect;
