import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import OTPInput from "./components/Otp";
import "./index.css";

const App = () => {
  useEffect(() => {
    // obter_informacoes_fundo('MXRF11')
      // .then((info) => {
      //   console.log(info);
      // })
      // .catch((error) => {
      //   console.error("Erro na requisição: ", error);
      // });
  }, []);

  const [otp, setOTP] = useState(['', '', '', '']); // Define o estado do OTP
  const [submittedOTP, setSubmittedOTP] = useState(''); // Inicialize submittedOTP

  const handleOTPSubmit = () => {
    const submittedOTP = otp.join(''); // Agora submittedOTP é definido corretamente

    // Aqui você pode adicionar a lógica para enviar o OTP para verificação
    // Neste exemplo, apenas atualizaremos o estado com o OTP digitado
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
      <Button
        onClick={handleOTPSubmit}
        variant="secundario"
        status="default"
      >
        dale otp
      </Button>
      {submittedOTP && <p>OTP Submetido: {submittedOTP}</p>}
    </>
  );
};

export default App;
