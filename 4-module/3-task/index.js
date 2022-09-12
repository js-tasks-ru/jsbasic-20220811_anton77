function highlight(table) {
    let rows = table.querySelectorAll("tr");
    for(let row of rows) {
      for(let cell of row.cells) {
        //1
        if (cell.hasAttribute("data-available"))
        switch (cell.dataset.available) {
          case "true":
            row.classList.add("available");
            break;
          case "false":
            row.classList.add("unavailable");
        }
        else {
          //2
          row.hidden = true;
        }
        //3
        switch(cell.textContent) {
          case "m":
            row.classList.add('male');
            break;
          case "f":
            row.classList.add('female');
        }
        //4
        if (parseInt(cell.innerText) < 18) {
          row.style['text-decoration'] = 'line-through';
        }
        }
      }
    }