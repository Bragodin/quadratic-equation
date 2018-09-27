module.exports = function solveEquation(equation) {
  // your implementation
  let i = equation.split(' ');
  let a = i[0];
  let b = i[3] + i[4];
  let c = i[7] + i[8];
  let d = (b * b) - (4 * a * c);
  d = Math.sqrt(d);
  x1 = (-b + d) / (2 * a);
  x2 = (-b - d) / (2 * a);
  let x1_int = Math.round(x1);
  let x2_int = Math.round(x2);
  let arr = [x1_int, x2_int];
  return arr.sort(function(x1_int, x2_int) {
    return x1_int - x2_int;
  });
  return arr;
}
