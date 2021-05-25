const maskCPF = (valueCpf) => {
  let cpf = "";
  for (let i = 0; i < valueCpf.length; i++) {
    if (!isNaN(Number(valueCpf.substr(i, 1)))) {
      cpf += valueCpf.substr(i, 1);
    }
  }
  if (cpf.length > 3 && cpf.length <= 6) {
    cpf = cpf.substr(0, 3) + "." + cpf.substr(3);
  } else if (cpf.length > 6 && cpf.length <= 9) {
    cpf = cpf.substr(0, 3) + "." + cpf.substr(3, 3) + "." + cpf.substr(6);
  } else if (cpf.length > 9) {
    cpf =
      cpf.substr(0, 3) +
      "." +
      cpf.substr(3, 3) +
      "." +
      cpf.substr(6, 3) +
      "-" +
      cpf.substr(9, 2);
  }
  //741.259.260-26
  return cpf;
};

export default maskCPF;
