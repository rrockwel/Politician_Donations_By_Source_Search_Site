const fetch = require('node-fetch');
const fs = require('fs');


let states = ['AL','AK','AZ','AR','AS','CA','CO','CT','DE','DC','FL','GA','GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','CM','OH','OK','OR','PA','PR','RI','SC','SD','TN','TX','TT','UT','VT','VA','VI','WA','WV','WI','WY']

console.log(states.length)



// Write JSON file from data on all legislators

// Loop Through Each Abbreviation
	// Perform fetch
	// Loop Through Each Legislator Result
		// Create Object From Result
		// Write JSON to members.json






for(j=0;j<states.length;j++){




fetch(`http://www.opensecrets.org/api/?output=json&method=getLegislators&id=${states[j]}&apikey=fba2513a673668cadd3ad0a3525965e6`)
	.then(response=>{
		return response.json();
	})
	.then(data=>{
		// console.log("Data: ",data)
		// console.log(data['response']['legislator'][0]['@attributes']['cid'])

		let legislatorsFromState = data['response']['legislator'];

		for(i=0;i<legislatorsFromState.length;i++){
			let firstLast = legislatorsFromState[i]['@attributes']['firstlast'];
			let cid = legislatorsFromState[i]['@attributes']['cid'];
			let firstlast = legislatorsFromState[i]['@attributes']['firstlast']
			let lastname = legislatorsFromState[i]['@attributes']['lastname']
			let party = legislatorsFromState[i]['@attributes']['party']
			let gender = legislatorsFromState[i]['@attributes']['gender']
			let website = legislatorsFromState[i]['@attributes']['website']
			let birthdate = legislatorsFromState[i]['@attributes']['birthdate']
			console.log(typeof(firstLast));
			let toJSON = `"${firstLast}" : {
				"cid": "${cid}",
				"firstlast": "${firstlast}",
				"lastname": "${lastname}",
				"party": "${party}",
				"gender": "${gender}",
				"website": "${website}",
				"birthdate": "${birthdate}"
			},\n`
			console.log(toJSON);
			fs.appendFileSync('./members.json', toJSON, err=>{
				console.log(err);
			})



			// let person = {
			// 	"cid": legislatorsFromState[i]['@attributes']['cid'],
			// 	"firstlast": legislatorsFromState[i]['@attributes']['firstlast'],
			// 	"lastname": legislatorsFromState[i]['@attributes']['lastname'],
			// 	"party": legislatorsFromState[i]['@attributes']['party'],
			// 	"gender":legislatorsFromState[i]['@attributes']['gender'],
			// 	"website":legislatorsFromState[i]['@attributes']['website'],
			// 	"birthdate":legislatorsFromState[i]['@attributes']['birthdate']
			// }

			// // let stringPerson = JSON.stringify(person, null, 4);

			// fs.appendFileSync('./members.json', personObj, err=>{
			// 	console.log(err);
			// })
			// fs.appendFileSync('./members.json', ",\n", err=>{
			// 	console.log(err);
			// })
		}
/*

"Legislator Name":{
	cid:"",
	firstLast:"",

}

*/




		// Create person object with data
		// let person = {
		// 	"cid": data['response']['legislator'][0]['@attributes']['cid'],
		// 	"firstlast": data['response']['legislator'][0]['@attributes']['firstlast'],
		// 	"lastname": data['response']['legislator'][0]['@attributes']['lastname'],
		// 	"party": data['response']['legislator'][0]['@attributes']['party'],
		// 	"gender": data['response']['legislator'][0]['@attributes']['gender'],
		// 	"website": data['response']['legislator'][0]['@attributes']['website'],
		// 	"birthdate": data['response']['legislator'][0]['@attributes']['birthdate']
		// }

		// // To string so it can be written to file
		// let stringPerson = JSON.stringify(person,null,4);

		// // write JSON to file
		// // fs.writeFileSync('./members.json', stringPerson, err=>{
		// // 	console.log(err);
		// // })

		// fs.appendFileSync('./members.json', stringPerson, err=>{
		// 	console.log(err);
		// });
		// fs.appendFileSync('./members.json', ',',err=>{
		// 	console.log(err);
		// })

		// console.log("Person: ",person)
	})
	.catch(error=>{
		console.log(error);
	})





}






// Desired JSON Output 
// {
// 	cid: "",
// 	firstlast: "",
// 	lastname: "",
// 	party: "",
// 	gender: "",
// 	website:"",
// 	birthdate:""
// }

/*

"Legislator Name":{
	cid:"",
	firstLast:"",

}

*/