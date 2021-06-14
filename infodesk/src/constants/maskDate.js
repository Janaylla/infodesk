export default function maskDate(dt) {
  if(!dt){
    return "";
  }
  const date = new Date(dt);
  const nameMonth = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
  ];
  let stringDate =
    date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;

  stringDate += ` ${nameMonth[date.getMonth()]} `;

  stringDate += `${date.getFullYear()} `;

  return stringDate;
}
