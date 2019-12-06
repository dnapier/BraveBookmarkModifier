chrome.runtime.onInstalled.addListener(() => {
  var re = /_/gi;
  var replace = '.'
  var x = '1';

  do {
    chrome.bookmarks.get(x, (results) => {
      let newTitle = results[0].title.replace(re, replace);

      id = results[0].id;
      chrome.bookmarks.update(id, { title: newTitle });
    });
    x++;
    x = String(x)
  } while(x < 10000);
});
