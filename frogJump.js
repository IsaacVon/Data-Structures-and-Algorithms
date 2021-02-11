function solution(X, Y, D) {

  if (X >= Y) return 0;
  if (1 < X > 1000000000) return;
  if (1 < Y > 1000000000) return;
  if (1 < D > 1000000000) return;

  return Math.ceil((Y - X)/D)

}


solution(10,85,30)