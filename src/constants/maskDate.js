export default function maskDate(dt) {
  const date = new Date(dt);
  const nameMonth = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  let stringDate =
    date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;

  stringDate += ` ${nameMonth[date.getMonth()]} `;

  stringDate += `${date.getFullYear()} `;

  return stringDate;
}
