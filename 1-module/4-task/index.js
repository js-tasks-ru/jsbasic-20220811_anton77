function checkSpam(str) {
  let strnew = str.toLowerCase();
  if ((strnew.includes('1xBet'.toLowerCase())) || (strnew.includes('XXX'.toLowerCase()))) {
    return true;
  }
  else {
    return false;
  }
}
