export default function orderByProps(obj, args) {
  const arrTemp = [];
  const arrArgs = [];

  Object.keys(obj).forEach((prop) => {
    arrTemp.push({ key: prop, value: obj[`${prop}`] });
    arrTemp.sort((a, b) => (a.key > b.key ? 1 : -1));
  });

  args.forEach((i) => {
    arrArgs.push(arrTemp.find((el) => el.key === `${i}`));
  });

  for (let i = 0; i < args.length; i += 1) {
    arrTemp.splice(arrTemp.indexOf(arrTemp.find((el) => el.key === `${args[i]}`)), 1);
  }

  const arrTotal = arrArgs.concat(arrTemp);
  return arrTotal;
}
