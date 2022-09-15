const fetch = require('node-fetch');
const fs = require('fs');








// Write JSON file from data on all legislators

// Loop Through Each Abbreviation
	// Perform fetch
	// Loop Through Each Legislator Result
		// Create Object From Result
		// Write JSON to members.json






// for(j=0;j<states.length;j++){
// fetch(`http://www.opensecrets.org/api/?output=json&method=getLegislators&id=${states[j]}&apikey=fba2513a673668cadd3ad0a3525965e6`)
// 	.then(response=>{
// 		return response.json();
// 	})
// 	.then(data=>{
// 		// console.log("Data: ",data)
// 		// console.log(data['response']['legislator'][0]['@attributes']['cid'])
// 		let legislatorsFromState = data['response']['legislator'];
// 		for(i=0;i<legislatorsFromState.length;i++){
// 			let firstLast = legislatorsFromState[i]['@attributes']['firstlast'];
// 			let cid = legislatorsFromState[i]['@attributes']['cid'];
// 			let firstlast = legislatorsFromState[i]['@attributes']['firstlast']
// 			let lastname = legislatorsFromState[i]['@attributes']['lastname']
// 			let party = legislatorsFromState[i]['@attributes']['party']
// 			let gender = legislatorsFromState[i]['@attributes']['gender']
// 			let website = legislatorsFromState[i]['@attributes']['website']
// 			let birthdate = legislatorsFromState[i]['@attributes']['birthdate']
// 			console.log(typeof(firstLast));
// 			let toArray = `{
// 				"cid": "${cid}",
// 				"firstlast": "${firstlast}",
// 				"lastname": "${lastname}",
// 				"party": "${party}",
// 				"gender": "${gender}",
// 				"website": "${website}",
// 				"birthdate": "${birthdate}"
// 			},\n`;
// 			fs.appendFileSync('./members.js', toArray, err=>{
// 				console.log(err);
// 			})
// 		}

// let urls = ['AL','AK',"AZ"]
// let results = new Array;

// function get(page){
// 	return new Promise((resolve,reject)=>{
// 		fetch(page)
// 			.then(response=>{
// 				return response.json()
// 			})
// 			.then(data=>{
// 				let legislatorsFromState = data['response']['legislator'];
// 				for(let i = 0; i < legislatorsFromState.length; i++){
// 					let cid = legislatorsFromState[i]["@attributes"].cid
// 					let firstlast= legislatorsFromState[i]["@attributes"].firstlast
// 					let party= legislatorsFromState[i]["@attributes"].party
// 					let website= legislatorsFromState[i]["@attributes"].website
// 					let webform= legislatorsFromState[i]["@attributes"].webform
// 					let twitter_id= legislatorsFromState[i]["@attributes"].twitter_id
// 					let facebook_id= legislatorsFromState[i]["@attributes"].facebook_id
// 					let youtube_url= legislatorsFromState[i]["@attributes"].youtube_url
// 					let birthdate= legislatorsFromState[i]["@attributes"].birthdate
// 					let phone= legislatorsFromState[i]["@attributes"].phone
// 					let toMembers = {
// 						"cid":cid,
// 						"firstlast":firstlast,
// 						"website":website,
// 						"webform":webform,
// 						"twitter_id":twitter_id,
// 						"facebook_id":facebook_id,
// 						"youtube_url":youtube_url,
// 						"birthdate":birthdate,
// 						"phone":phone
// 					};

// 					console.log(toMembers);
// 					console.log(JSON.stringify(toMembers));
// 					fs.appendFileSync('./members.js', JSON.stringify(toMembers));
// 					fs.appendFileSync('./members.js', ", \n");
// 					resolve(data);

// 				}
// 				// for(let i = 0; i < legislatorsFromState.length; i++){
// 				// 	let firstLast = legislatorsFromState[i]['@attributes']['firstlast'];
// 				// 	let cid = legislatorsFromState[i]['@attributes']['cid'];
// 				// 	let firstlast = legislatorsFromState[i]['@attributes']['firstlast']
// 				// 	let lastname = legislatorsFromState[i]['@attributes']['lastname']
// 				// 	let party = legislatorsFromState[i]['@attributes']['party']
// 				// 	let gender = legislatorsFromState[i]['@attributes']['gender']
// 				// 	let website = legislatorsFromState[i]['@attributes']['website']
// 				// 	let birthdate = legislatorsFromState[i]['@attributes']['birthdate']
// 				// 	console.log(typeof(firstLast));
// 				// 	let toArray = `{
// 				// 		"cid": "${cid}",
// 				// 		"firstlast": "${firstlast}",
// 				// 		"lastname": "${lastname}",
// 				// 		"party": "${party}",
// 				// 		"gender": "${gender}",
// 				// 		"website": "${website}",
// 				// 		"birthdate": "${birthdate}"
// 				// 	},\n`;
// 					// return toArray;
// 					// console.log(toArray);
// 				// }
				
// 			})
// 			.catch(err=>{
// 				console.log(err);
// 			})
// 	})
// }

// ['AL','AK','AZ','AR','AS','CA','CO','CT','DE','DC','FL','GA','GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','CM','OH','OK',]

let states = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];

let statessection = ["WA","WV","WI","WY"]

// async function writeToPage(){
// 	console.log(states.length)
// 	for(let i = 0; i < states.length; i++){
// 		const value = await get(`http://www.opensecrets.org/api/?output=json&method=getLegislators&id=${states[i]}&apikey=fba2513a673668cadd3ad0a3525965e6`);
// 		console.log("I: ",i)
// 		results.push(value);
// 	}
// 	console.log(results.length)
// 	console.log("Results: ", results)
// }

// writeToPage();
for(let i=0; i<statessection.length;i++){
fetch(`http://www.opensecrets.org/api/?output=json&method=getLegislators&id=${statessection[i]}&apikey=fba2513a673668cadd3ad0a3525965e6`)
			.then(response=>{
				return response.json();
			})
			.then(data=>{
				let legislatorsFromState = data['response']['legislator'];
				for(let i = 0; i < legislatorsFromState.length; i++){
				 	console.log(legislatorsFromState[i]);
				 	let cid = legislatorsFromState[i]['@attributes']['cid'];
				 	let firstlast = legislatorsFromState[i]['@attributes']['firstlast'];
				 	let lastname = legislatorsFromState[i]['@attributes']['lastname'];
				 	let party = legislatorsFromState[i]['@attributes']['party'];
				 	let gender = legislatorsFromState[i]['@attributes']['gender'];
				 	let website = legislatorsFromState[i]['@attributes']['website'];
				 	let webform = legislatorsFromState[i]['@attributes']['webform'];
				 	let birthdate = legislatorsFromState[i]['@attributes']['birthdate'];
				 	let phone = legislatorsFromState[i]['@attributes']['phone'];
				 	let twitter = legislatorsFromState[i]['@attributes']['twitter_id'];
				 	let youtube = legislatorsFromState[i]['@attributes']['youtube_url'];
				 	let facebook = legislatorsFromState[i]['@attributes']['facebook_id'];


				 	let toMembers = `{
				 		"cid": "${cid}",
				 		"firstlast": "${firstlast}",
				 		"lastname": "${lastname}",
				 		"party": "${party}",
				 		"gender": "${gender}",
				 		"website": "${website}",
				 		"webform": "${webform}",
				 		"birthdate": "${birthdate}",
				 		"phone": "${phone}",
				 		"twitter": "${twitter}",
				 		"youtube":"${youtube}",
				 		"facebook":"${facebook}"

				 	},`;
				 	fs.appendFileSync('./members.js', toMembers)
				}
				
			})
			.catch(err=>{
				console.log(err);
			})


}






/// TODO: Possibly run all promises at the same time to avoid timeout (https://www.codegrepper.com/code-examples/javascript/fetch+in+for+loop+javascript)





