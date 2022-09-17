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
	// Also, if "donorDiv" currently exists, remove it
	if(document.getElementById('donorDiv')){
		clearDonorDiv();
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

	// create currentSelection div
	let currentSelection = document.createElement('div');
	currentSelection.id='currentSelection';
	document.body.prepend(currentSelection);
	// Find all existing inputs
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

function clearDonorDiv(){
	// Make sure donorDiv exists before trying to remove it
	if(document.getElementById('donorDiv')){
		document.getElementById("donorDiv").remove();
	}else{
		console.log("Donor Div Does Not Exist")
	}
}

function fetchCandidateInfo(){
	// For each name in 'currentSelection'
	// fetch url with name parameter
	// wait for response
	// add response data to 'candidateDonors' section
	// then continue to fetch info for next name
	// Start by clearing donorDiv
	clearDonorDiv();
	// Get all spans with class 'current-selection-candidate'
	let currentSelectionSpans = document.querySelectorAll('.current-selection-candidate');
	// create empty array
	let searchArray = [];
	
	// push innerHTML (i.e. candidate name) into search array
	currentSelectionSpans.forEach(el=>{
		searchArray.push((el.innerHTML));
	})

	let donorDiv = document.createElement('div');
	donorDiv.id = 'donorDiv'
	document.body.appendChild(donorDiv)

	let cidArray = [];
	for(let i = 0; i < searchArray.length; i++){
		for(let j = 0; j < members.length; j++){
			if(searchArray[i] == members[j]['firstlast']){
				cidArray.push(members[j]['cid'])
			}
		}
	}

	if(cidArray.length>2){
		alert("Please Only Search For 2 Candidates At A Time.");
	}else{
		for(let i = 0; i< cidArray.length; i++){
			fetch(`https://www.opensecrets.org/api/?output=json&method=candContrib&cid=${cidArray[i]}&apikey=fba2513a673668cadd3ad0a3525965e6`)
			.then(response=>{
				return response.json();
			})
			.then(data=>{
				console.log("Data: ",data);
				console.log("Contributors Array: ", data['response']['contributors']['contributor']);
				let candName = data['response']['contributors']['@attributes']['cand_name'];
				let candNameDiv = document.createElement('div');
				candNameDiv.setAttribute('class','cand-name');
				let candNameNameDiv = document.createElement('div');
				candNameNameDiv.innerHTML = `${candName}`
				candNameDiv.appendChild(candNameNameDiv);

				let contributorsArray = data['response']['contributors']['contributor'];
				for (let i = 0; i < contributorsArray.length; i++){
					let orgName = contributorsArray[i]['@attributes']['org_name'];
					let total = contributorsArray[i]['@attributes']['total'];
					let fromPACs = contributorsArray[i]['@attributes']['pacs'];

					let orgDiv = document.createElement('div');
					orgDiv.setAttribute('class','donor-org');
					orgDiv.innerHTML = `${orgName}`;
					let totalDiv = document.createElement('div');
					totalDiv.setAttribute('class','donor-org-total');
					totalDiv.innerHTML = `Total Donated: ${total}`;
					
					candNameDiv.appendChild(orgDiv);
					candNameDiv.appendChild(totalDiv);
					document.body.appendChild(candNameDiv);
					}
				donorDiv.appendChild(candNameDiv)

				})
				.catch(err=>{
					console.log(err);
				})
		}
	}
}