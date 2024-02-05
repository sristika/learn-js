window.onload = function () {
  const list = document.getElementById('Top5');
  const inp = document.getElementById('inp');
  const btn = document.getElementById('btn');
  list.innerHTML = '';

  const myHistory = [];
  const MAX_HISTORY = 5;

  btn.onclick = () => {
    // we will only allow a term to be entered if the search input isn't empty
    if (inp.value !== '') {
      // empty the list so that we don't display duplicate entries
      // the display is regenerated every time a search term is entered.
      list.innerHTML = '';

      myHistory.push(inp.value);

      const myHistoryCopy = [...myHistory].reverse();

      // loop through the sorted array, and display all the search terms in the list
      for (const itemText of myHistoryCopy) {
        const li = document.createElement('li');
        li.textContent = itemText;
        list.appendChild(li);
      }

      // If the array length is 5 or more, remove the oldest search term
      if (myHistory.length >= MAX_HISTORY) {
        myHistory.shift();
      }

      // empty the search input and focus it, ready for the next term to be entered
      inp.value = '';
      btn.focus();
    }
  };
};
