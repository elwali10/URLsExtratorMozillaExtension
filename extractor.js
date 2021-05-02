//https://www.codevoila.com/post/30/export-json-data-to-downloadable-file-using-javascript 

"use strict";

function getURLslist() {

    var urls = document.getElementsByTagName('a'); 
    var jsonObject = {};
    //filter out duplicate https://stackoverflow.com/questions/22614275/remove-duplicate-objects-from-json-file-in-javascript
    for (url in urls) 
    { 
    	var element = urls[url].href; jsonObject[url] = element
    }

return JSON.stringify(jsonObject);
}


function exportToJsonFile(dataStr) {
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    let exportFileDefaultName = 'data.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

data = getURLslist();
exportToJsonFile(data);