function truncate(str, maxlength) {
  if (str.length < maxlength) {
    return str;
  }
  else {
    let str2 = str.substr(0, maxlength - 1);
    return(str2 = str2 +  "…");
  }
}
