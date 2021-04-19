//this expands and collapses code blocks
function toggleCodeBlockExpand(elem) {
	console.log(elem.previousElementSibling);
	var codeBlockElement = elem.previousElementSibling;
	if(codeBlockElement.classList.contains("code-expanded")){
		//we are toggling this closed
		codeBlockElement.classList.remove("code-expanded");
		elem.innerHTML="Show More";

	} else {
		//we are expanding the code block
		codeBlockElement.classList.add("code-expanded");
		elem.innerHTML="Show Less";
	}
}


function checkForCodeBlocks() {
	//get all code blocks on a page
	// check if they are over 500px;
	//if not hide the show more button
	var codeBlocks = document.getElementsByClassName("extra-class");
	console.log("we checked! "+codeBlocks.length);
	var i;
	for (i = 0; i < codeBlocks.length; i++) {
		if(codeBlocks[i].classList.contains("has-been-checked")) {
			return;
		}
		if(codeBlocks[i].clientHeight > 500) {
			codeBlocks[i].classList.add("has-been-checked");
			// codeBlocks[i].style.backgroundColor = "red";

			codeBlocks[i].classList.add("code-block-custom")
			var newNode = document.createElement('div');
			newNode.classList.add("code-collapse-toggle");
			newNode.id = "brnPrepend";
			newNode.innerHTML = "Show More";
			codeBlocks[i].after(newNode);
		}
	}
}


 document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'brnPrepend'){
          //do something
          console.log("click worked!!")
          toggleCodeBlockExpand(e.target);
     }
 });