function camelize(str) {
  let array = str.split('-');
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
      let newFirstSymbolItem = array[i][0].toUpperCase();
      let newItem = array[i].replace(array[i][0], newFirstSymbolItem);
      result += newItem;
  }
  return(result);
}