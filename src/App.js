import React, { useEffect, useState } from "react";
import SlideEffect from "./components/SliderAnimation";
import "./index.css";
import PaginaInicial from "./pages/PaginaInicial";

const App = () => {
  const [activeCase, setActiveCase] = useState(1);

  const handleSwitchCase = (caseNumber) => {
    setActiveCase(caseNumber);
  };

  useEffect(() => {
    // obter_informacoes_fundo('MXRF11')
    // .then((info) => {
    //   console.log(info);
    // })
    // .catch((error) => {
    //   console.error("Erro na requisição: ", error);
    // });
  }, []);

  const renderCase = () => {
    switch (activeCase) {
      case 1:
        return (
          <>
            <SlideEffect>
              <PaginaInicial onclick={() => handleSwitchCase(2)} />
            </SlideEffect>
          </>
        );
      case 2:
        return (
          <SlideEffect>
            <div>
              Caso 2
              <button
                className={`py-2 px-4 rounded ${
                  activeCase === 3
                    ? "bg-red-600 text-white"
                    : "bg-red-200 text-red-800"
                }`}
                onClick={() => handleSwitchCase(1)}
              >
                voltar
              </button>
            </div>
          </SlideEffect>
        );
      case 3:
        return <div>Caso 3</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="h-screen bg-violet-500">
        {activeCase === 1 && <div className="">{renderCase()}</div>}
        {activeCase === 2 && <div className="">{renderCase()}</div>}
      </div>
      {/* <div className="py-6 block sm:hidden">
      <button
            className={`py-2 px-4 rounded ${
              activeCase === 3
                ? "bg-red-600 text-white"
                : "bg-red-200 text-red-800"
            }`}
            onClick={() => handleSwitchCase(3)}
          >
            Caso 3
          </button>
              </div>
      <div className="mt-6">
        <div className="flex space-x-2">
          <button
            className={`py-2 px-4 rounded ${
              activeCase === 1
                ? "bg-blue-600 text-white"
                : "bg-blue-200 text-blue-800"
            }`}
            onClick={() => handleSwitchCase(1)}
          >
            Caso 1
          </button>
          <button
            className={`py-2 px-4 rounded ${
              activeCase === 2
                ? "bg-green-600 text-white"
                : "bg-green-200 text-green-800"
            }`}
            onClick={() => handleSwitchCase(2)}
          >
            Caso 2
          </button>
          <button
            className={`py-2 px-4 rounded ${
              activeCase === 3
                ? "bg-red-600 text-white"
                : "bg-red-200 text-red-800"
            }`}
            onClick={() => handleSwitchCase(3)}
          >
            Caso 3
          </button>
        </div> */}

      {/* </div> */}
    </>
  );
};

export default App;
