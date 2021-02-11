// Double
// Subtract one

const brokenCalc = (X, Y) => {
  if (X >= Y) return X - Y;
  const mid = Math.ceil(Y / 2);
  if (X >= mid) return (X - mid) + (2 * mid - Y) + 1;
  return brokenCalc(X, mid) + (2 * mid - Y) + 1;
};

console.log("end", brokenCalc(1, 1000000000));
