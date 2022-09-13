import  senateDemocrats from '/static/arrays.js'

// console.log(senateDemocrats)
// console.log(senateDemocrats['senateDemocrats']);
// console.log(senateDemocrats['senateRepublicans']);


document.getElementById('submit').addEventListener('click', getPoliticians);
document.getElementById('clear').addEventListener('click', clearCandidateDiv)

function getPoliticians(){

	// If "candidateDiv" also exists, remove it
	if(document.getElementById('candidateDiv')){
		clearCandidateDiv();
	}

	let chamber = document.getElementById('congress').value.toLowerCase();
	let party = document.getElementById('party').value;
	let searchString = `${chamber}${party}s`;
	let results = senateDemocrats[searchString];
	let candidateDiv = document.createElement('div');
	candidateDiv.id = 'candidateDiv';
	console.log(results);
	for(let i = 0; i < results.length; i++){
		let candEl = document.createElement('div');
		candEl.id = `${results[i]}`
		const candName = document.createElement('span');
		candName.innerHTML =`${results[i]}`
		let candElChild = document.createElement('input');
		// let candElName = document.createElement('p');
		// candElName.innerHTML=`${results[i]}`
		candElChild.type='checkbox';
		candElChild.id=`${results[i]}`;
		candElChild.name=`${results[i]}`;
		candEl.appendChild(candElChild);
		candElChild.insertAdjacentElement('afterend', candName)
		// candEl.appendChild(candElName);
		candidateDiv.appendChild(candEl);



		// <div id='${results[i]}`><input type='checkox' id='${results[i]}' name='${results[i]}'>${results[i]}</div>
	}
	document.body.appendChild(candidateDiv);
}

function clearCandidateDiv(){
	document.getElementById('candidateDiv').remove();
}





// <div id='candidates'>

// <input type='checkbox' id='candidateName' name='candidateName' value='candidateName'>
// <label for='candidateName'>candidateName</label>

// // Keep Adding Input Elements Here //

// </div>