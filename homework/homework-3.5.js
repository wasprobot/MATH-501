module.exports.equation = (r, tolerance) => {
  console.log("checking:", r);
  let r_prime = (r ** 3 + 1) / 5;
  if (Math.abs(r_prime - r) < tolerance) return r_prime;
  return this.equation(r_prime, tolerance);
};

console.log("r:", this.equation(0.5, 0.00001))
