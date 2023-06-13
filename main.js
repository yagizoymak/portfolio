export async function JsA_ScrollToH1Title(h1_Title) {
	// BEGIN USER CODE
		
    //get list of all h1s on the page.
    var h1_list = document.querySelectorAll('h1');

    //convert to array so we can use .click() or .scrollIntoView() later...
    let arrayList = Array.from(h1_list);

    //find the right element; in this case the h1 that has an innertext that matches our input variable
    let index = arrayList.findIndex(e => e.innerText == h1_Title);

    //if found, we target this specific element, and call the function we need.
    if (index > -1){
        arrayList[index].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    }

	// END USER CODE
}