let button = document.getElementById('buttonInput');

button.addEventListener('click', function() {
  var x = document.getElementById('input1').value;
  var y = document.getElementById('input2').value;
  var re = new RegExp(x, "g");

  chrome.bookmarks.search(x, (results) => {
    for(x in results) {
      chrome.bookmarks.update(
        results[x].id,
        { title: results[x].title.replace(re, y) }
      );
    }
  });
});
