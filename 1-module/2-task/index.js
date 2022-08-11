/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if(Boolean(name) == false) {
    return false;
  }
  if (name.length < 4) {
    return false;
  }
  for (let i = 0; i < 4; i++) {
    if (name[i] == " ") {
      return false;
    }
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
