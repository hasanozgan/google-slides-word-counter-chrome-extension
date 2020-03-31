chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});

function getText(){
    // return document.body.innerText
    return document.getElementById("pages").innerText
}
function getHTML(){
    // return document.body.outerHTML
    return document.getElementById("pages").outerHTML
}

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "getText"){
            // sendResponse({data: document.all[0].innerText, method: "getText"}); //same as innerText
            sendResponse({data: document.getElementById("pages").innerText, method: "getText"}); //same as innerText
        }
    }
);