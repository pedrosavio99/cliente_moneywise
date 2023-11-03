import React, { useRef } from 'react';

const OTPInput = ({ otp, setOTP }) => {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      // Atualiza o valor do OTP no estado
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      // Move o foco para o próximo campo, se houver
      if (value !== '' && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      // Move o foco para o campo anterior quando pressionada a tecla "Backspace" em um campo vazio
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      {otp.map((value, index) => (
        <input
          key={index}
          ref={inputRefs[index]}
          type="text"
          className="w-10 h-10 text-center border rounded focus:outline-none focus:ring focus:border-blue-300 bg-slate-100"
          value={value}
          onChange={(e) => handleInputChange(e, index)}
          onKeyUp={(e) => handleBackspace(e, index)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
