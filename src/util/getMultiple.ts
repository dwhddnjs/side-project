export const getMultiple = (weight: number, bodyWeight: number) => {
  return Math.floor((weight / bodyWeight) * 100) / 100;
};
