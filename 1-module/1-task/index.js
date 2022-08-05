function factorial(n) {
  if (n == 0) {
    return 1;
}
  else {
    let result = n;
    for (let i = 1; i < n; i++) {
    result = result*(n - i);    
    }
    return result;
  }
}
