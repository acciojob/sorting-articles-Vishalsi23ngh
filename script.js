//your JS code here. If required.
const item = document.getElementById("articles");

item.addEventListender(function () {

	const inuputEle = item.value;
	const output = inuputEle.sort();
	item.value = output;
	
})
