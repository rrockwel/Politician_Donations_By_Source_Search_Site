// Get First Candidate in NJ 

let options = {
	method:"GET",
	contentType:"application/json"
}

// fetch('http://www.opensecrets.org/api/?output=json&method=getLegislators&id=NJ&apikey=fba2513a673668cadd3ad0a3525965e6', options)
// 	.then(response=>{
// 		// console.log("TypeOf(response): ", typeof(response));
// 		// console.log("Response: ",response);
// 		// console.log("Response.response: ",response.response);
// 		// console.log("Response.legislator: ",response.legislator);
// 		// console.log("Response[0]: ",response[0]);
// 		return response.json();
// 	})
// 	.then(data=>{
// 		console.log("Data: ", data);

// 		let legislators = data.response.legislator;
// 		console.log("Legislators: ", legislators);

// 		document.getElementById('name').innerHTML = legislators[0]['@attributes']['firstlast'];
// 		document.getElementById('party').innerHTML = legislators[0]['@attributes']['party'];
// 		document.getElementById('birthDate').innerHTML = legislators[0]['@attributes']['birthdate']
// 		})


// Candidate OpenSecrets CID
let cid = 'N00007360';


// fetch and return data on contributors
fetch(`https://www.opensecrets.org/api/?output=json&method=candContrib&cid=${cid}&apikey=fba2513a673668cadd3ad0a3525965e6`, options)
	.then(response=>{
		return response.json();
	})
	.then(data=>{
		console.log("Data: ",data);
	})
	.catch(error=>{
		console.log(error);
	})

