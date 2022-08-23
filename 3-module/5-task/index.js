function getMinMax(str) {
  let resultArray = str.split(' ');
    let arrayNumber = [];
    for (let item of resultArray){
        if(!isNaN(Number(item))){
            arrayNumber.push(Number(item));
        }
    }
    let resultObject = {};
    let min = Math.min(...arrayNumber);
    let max = Math.max(...arrayNumber);
    resultObject.min = min;
    resultObject.max = max;
    return(resultObject);
}
