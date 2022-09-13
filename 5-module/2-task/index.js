function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let div = document.querySelector('#text');
  function hiddenStaus () {
    div.hidden = !(div.hidden);
  }
  button.addEventListener("click", hiddenStaus);
}
