function getRandomInt(min: number, max: number) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.round(Math.random() * (newMax - newMin)) + newMin;
}

export default getRandomInt;
