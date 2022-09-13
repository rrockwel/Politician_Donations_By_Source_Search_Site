import  senateDemocrats from '/static/arrays.js'

// console.log(senateDemocrats)
// console.log(senateDemocrats['senateDemocrats']);
// console.log(senateDemocrats['senateRepublicans']);

// Create results of search when "search" is clicked
document.getElementById('submit').addEventListener('click', getPoliticians);
// Clear 
document.getElementById('clear').addEventListener('click', clearCandidateDiv)
// Add selected candidate to "selected" section
document.getElementById('addToSelection').addEventListener('click', getCandidateCheckboxes)
// Remove candidate from "selected" section



function getPoliticians(){
	// If "candidateDiv" also exists, remove it
	if(document.getElementById('candidateDiv')){
		clearCandidateDiv();
	}
	// Get Values search for in dropdowns
	let chamber = document.getElementById('congress').value.toLowerCase();
	let party = document.getElementById('party').value;
	// create string to search arrays.js with
	let searchString = `${chamber}${party}s`;
	// search arrays.js
	let results = senateDemocrats[searchString];

	// create div inside which results will be created
	let candidateDiv = document.createElement('div');
	candidateDiv.id = 'candidateDiv';
	// check that search actually went well
	console.log(results.length);

	// for every result inside of searched array
	for(let i = 0; i < results.length; i++){
		// create a div for the returned candidate
		let candEl = document.createElement('div');
		candEl.id = `${results[i]}`

		// create span with candidate name for next to checkbox
		// span specifically so it will be inline checkbox
		const candName = document.createElement('span');
		candName.innerHTML =`${results[i]}`
		// create checkbox for candidate name
		let candElChild = document.createElement('input');
		candElChild.type='checkbox';
		candElChild.id=`${results[i]}`;
		candElChild.name=`${results[i]}`;

		// add checkbox to candidate div element
		candEl.appendChild(candElChild);
		// add span tag after checkbox element
		candElChild.insertAdjacentElement('afterend', candName)
		// add candidate div element to candidateDiv div element
		candidateDiv.appendChild(candEl);
	}
	// remember to actually add candidateDiv to body of document
	document.body.appendChild(candidateDiv);

}

function getCandidateCheckboxes(){
	/// TODO: Check to see whether certain candidates have been added to "Selected" section already. If so, do not add them again ////

	// Finda all existing inputs
	// TODO: make more specific so it only finds candidate checkboxes if other inputs exist.
	let candidateCheckboxes = document.getElementsByTagName('input')
	for(let i = 0; i < candidateCheckboxes.length; i++){
		// if checkbox is checked
		if(candidateCheckboxes[i].checked){
			// create div to put in "currentSelection" at top
			let selectedCandidateDiv = document.createElement('div');
			// create span for name
			let innerSelectedCandidate = document.createElement('span');
			// insert name into span
			innerSelectedCandidate.innerHTML = candidateCheckboxes[i].name;
			// append name span into div
			selectedCandidateDiv.appendChild(innerSelectedCandidate);
			// create span for "remove" button
			let exitButton = document.createElement('span');
			// create something to click on in "remove" button
			exitButton.innerHTML = "X"
			// insert script so "remove" button will remove "selectedCandidateDiv" when clicked
			exitButton.setAttribute('onclick', 'removeDiv(this)')
			// insert "remove" button after candidate name span
			innerSelectedCandidate.insertAdjacentElement('afterend', exitButton)
			// add entirety of 'selectedCandidateDiv' to 'Current Selection' section
			document.getElementById('currentSelection').appendChild(selectedCandidateDiv);
		}
	}
}

// remove the candidateDiv div element from body of document
function clearCandidateDiv(){
	// Sanity check: make sure candidateDiv exists before trying to remove it, otherwise errors might bit you in the ___ in the future
	if(document.getElementById('candidateDiv')){
		document.getElementById('candidateDiv').remove();
	}else{
		console.log('There is nothing to clear')
	}
}



// add selected candidates to "Selected Candidates Section"
function addToSelectedCandidates(){

}