import  senateDemocrats from '/static/arrays.js'

// expected js module script but server responded with MIME type 'application/json'. Strict MIME type checking is enforced for module scripts per HTML spec
import members from '/static/members.js'
// could just turn this into an array, even though this degrades performance as it's much easier to access json element with candidate name than search through entire array of names


// Create results of search when "search" is clicked
document.getElementById('submit').addEventListener('click', getPoliticians);
// Clear results of search
document.getElementById('clear').addEventListener('click', clearCandidateDiv);
// Add selected candidate to "selected" section
document.getElementById('addToSelection').addEventListener('click', getCandidateCheckboxes)
// Remove candidate from "selected" section

// Search for donor information of candidates in 'currentSelection' when "Get Donor Information" button is clicked
document.getElementById('getCandidateInfo').addEventListener('click', fetchCandidateInfo)



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
			innerSelectedCandidate.setAttribute('class','current-selection-candidate');
			// innerSelectedCandidate.setAttribute('value',`${candidateCheckboxes[i].name}`);
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

	clearCandidateDiv();
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

function fetchCandidateInfo(){
	// For each name in 'currentSelection'
	// fetch url with name parameter
	// wait for response
	// add response data to 'candidateDonors' section
	// then continue to fetch info for next name

	// Get all spans with class 'current-selection-candidate'
	let currentSelectionSpans = document.querySelectorAll('.current-selection-candidate');
	// create empty array
	let searchArray = [];
	// push innerHTML (i.e. candidate name) into search array
	currentSelectionSpans.forEach(el=>{
		searchArray.push((el.innerHTML));
	})
	
}






let sampleArray = [ 'Mike D Rogers', 'Doris Matsui']
// add selected candidates to "Selected Candidates Section"
async function getCandidatesDonorInfo(inputArray){
	// Search members.json for records that match names passed in sampleArray
	// Return CID from each candidate
	for(let i = 0; i < inputArray.length; i++){

	}


}

getCandidatesDonorInfo(sampleArray);