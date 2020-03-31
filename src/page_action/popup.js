chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {method: "getText"}, function(response) {

        if(response.method=="getText") {
            alltext = response.data;
            document.getElementById("counter").innerHTML = countWords(alltext)
            // alert(alltext);
        }
    });
});

function countWords(str) {
    return str.trim().split(/\s+/).length;
  }