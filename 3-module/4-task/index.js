function showSalary(users, age) {
  let resultArray = [];
  for (let item = 0; item < users.length; item++){
      if(users[item]['age'] <= age){
          resultArray.push(users[item]);
      };
  };
  let resultstr = '';
  for (let item = 0; item < resultArray.length; item++) {
      if(item == (resultArray.length - 1)){
          resultstr += (resultArray[item]['name'] + ', ' + resultArray[item]['balance']); 
      }
      else{
          resultstr += (resultArray[item]['name'] + ', ' + resultArray[item]['balance'] + "\n");  
      };
  };
  return(resultstr);
}
