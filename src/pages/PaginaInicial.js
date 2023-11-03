import React, { useState } from "react";
import Button from "../components/Button";
import OTPInput from "../components/Otp";

const PaginaInicial = ({onclick}) => {
  const [otp, setOTP] = useState(["", "", "", ""]); // Define o estado do OTP
  const [submittedOTP, setSubmittedOTP] = useState(""); // Inicialize submittedOTP

  const handleOTPSubmit = () => {
    const submittedOTP = otp.join("");
    setSubmittedOTP(submittedOTP);
    onclick && onclick()
  };

  return (
    <div className="px-4 h-screen bg-violet-500 flex flex-col justify-center items-center text-slate-100">
      sou a apagina inicial
      <h1>Verificação de OTP</h1>
      <p>Por favor, insira o OTP de 4 casas:</p>
      <div className="text-slate-950">
      <OTPInput otp={otp} setOTP={setOTP} />
      </div>
      
      <Button onClick={handleOTPSubmit} variant="secundario" status="default">
        dale otp
      </Button>
      {submittedOTP && <p>OTP Submetido: {submittedOTP}</p>}
    </div>
  );
};

export default PaginaInicial;
