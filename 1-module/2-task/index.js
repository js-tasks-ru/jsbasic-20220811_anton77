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
  let result = true;

  if(Boolean(name) == false) {
    result = false;
    return false;
  }

  if (name.length < 4) {
    result = false;
    return false;
  }

  if (name.includes(' ') == true) {
    result = false;
    return false;
  }

  if (result == true) {
    return true;
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
