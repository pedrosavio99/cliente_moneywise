import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import OTPInput from "./components/Otp";
import SlideEffect from "./components/SliderAnimation";
import "./index.css";

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

  const [otp, setOTP] = useState(["", "", "", ""]); // Define o estado do OTP
  const [submittedOTP, setSubmittedOTP] = useState(""); // Inicialize submittedOTP

  const handleOTPSubmit = () => {
    const submittedOTP = otp.join("");
    setSubmittedOTP(submittedOTP);
  };

  return (
    <>
      <Button
        onClick={() => console.log("teste")}
        variant="primario"
        status="default"
      >
        projeto base
      </Button>

      <h1>Verificação de OTP</h1>
      <p>Por favor, insira o OTP de 4 casas:</p>
      <OTPInput otp={otp} setOTP={setOTP} />
      <Button onClick={handleOTPSubmit} variant="secundario" status="default">
        dale otp
      </Button>
      {submittedOTP && <p>OTP Submetido: {submittedOTP}</p>}

      <div className="App">
        <h1 className="text-2xl font-bold">
          Efeito de Slide com Fade (Tailwind CSS)
        </h1>
        <SlideEffect>
          <p className="text-xl">
            Este conteúdo aparecerá com um efeito de slide da direita para a
            esquerda com fade após 2 segundos.
          </p>
        </SlideEffect>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-2">Switch de Casos</h2>
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
        </div>

        <div className="mt-4 px-4">
          {activeCase === 1 && (
            <SlideEffect>
              <div className="bg-blue-100 p-4">Conteúdo do Caso 1</div>
            </SlideEffect>
          )}
          {activeCase === 2 && (
            <SlideEffect>
            <div className="bg-blue-100 p-4">Conteúdo do Caso 2</div>
          </SlideEffect>
          )}
          {activeCase === 3 && (
            <SlideEffect>
            <div className="bg-blue-100 p-4">Conteúdo do Caso 3</div>
          </SlideEffect>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
