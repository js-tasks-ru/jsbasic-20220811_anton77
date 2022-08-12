function ucFirst(str) {
  if (Boolean(str) == false) {
    return str;
  }
  else {  
    let str2 = str[0].toUpperCase() + str.slice(1)
    return str2;
  }
}
