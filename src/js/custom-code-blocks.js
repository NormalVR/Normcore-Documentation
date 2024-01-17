import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export function onRouteDidUpdate({location, previousLocation}) {
  setTimeout(checkForCodeBlocks, 1500);

  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;
}

// if (ExecutionEnvironment.canUseDOM) {

// }

//this expands and collapses code blocks
export function toggleCodeBlockExpand(elem) {
	// console.log(elem.previousElementSibling);
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

export function checkForCodeBlocks() {
	//get all code blocks on a page
	// check if they are over 500px;
	//if not hide the show more button
	var codeBlocks = document.getElementsByClassName("theme-code-block");
	// console.log("we checked! "+codeBlocks.length);
	var i;
	for (i = 0; i < codeBlocks.length; i++) {
		if(codeBlocks[i].classList.contains("has-been-checked")) {
			return;
		}
		if(codeBlocks[i].clientHeight > 500) {
			codeBlocks[i].classList.add("has-been-checked");
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
    if(e.target && e.target.id == 'brnPrepend'){
        toggleCodeBlockExpand(e.target);
     }
 });