const fs = require('fs');
const fetch = require('node-fetch');
// // Get First Candidate in NJ 

// let options = {
// 	method:"GET",
// 	contentType:"application/json"
// }

// // fetch('http://www.opensecrets.org/api/?output=json&method=getLegislators&id=NJ&apikey=fba2513a673668cadd3ad0a3525965e6', options)
// // 	.then(response=>{
// // 		// console.log("TypeOf(response): ", typeof(response));
// // 		// console.log("Response: ",response);
// // 		// console.log("Response.response: ",response.response);
// // 		// console.log("Response.legislator: ",response.legislator);
// // 		// console.log("Response[0]: ",response[0]);
// // 		return response.json();
// // 	})
// // 	.then(data=>{
// // 		console.log("Data: ", data);

// // 		let legislators = data.response.legislator;
// // 		console.log("Legislators: ", legislators);

// // 		document.getElementById('name').innerHTML = legislators[0]['@attributes']['firstlast'];
// // 		document.getElementById('party').innerHTML = legislators[0]['@attributes']['party'];
// // 		document.getElementById('birthDate').innerHTML = legislators[0]['@attributes']['birthdate']
// // 		})


// // Candidate OpenSecrets CID
// let cid = 'N00007360';


// // fetch and return data on contributors
// fetch(`https://www.opensecrets.org/api/?output=json&method=candContrib&cid=${cid}&apikey=fba2513a673668cadd3ad0a3525965e6`, options)
// 	.then(response=>{
// 		return response.json();
// 	})
// 	.then(data=>{
// 		console.log("Data: ",data);
// 	})
// 	.catch(error=>{
// 		console.log(error);
// 	})

fetch('https://www.opensecrets.org/api/?output=json&method=candIndustry&cid=N00007360&apikey=fba2513a673668cadd3ad0a3525965e6')
	.then(response=>{
		return response.json();
	})
	.then(data=>{
		fs.appendFileSync('./test.js', JSON.stringify(data));
	})


['response']['industries']['@attributes']['industry']

	{"response":
		{"industries":
			{"@attributes":
				{"cand_name":"Nancy Pelosi (D)",
				"cid":"N00007360",
				"cycle":"2018",
				"origin":"Center for Responsive Politics",
				"source":"https://www.opensecrets.org/members-of-congress/industries?cid=N00007360&cycle=2018",
				"last_updated":"06/10/2019"
			 	},
				"industry":[
					{"@attributes":
						{"industry_code":"W06","industry_name":"Retired","indivs":"756397","pacs":"0","total":"756397"
						}
					},
					{"@attributes":
						{"industry_code":"H01","industry_name":"Health Professionals","indivs":"109547","pacs":"205500","total":"315047"
						}
					},
					{"@attributes":
						{"industry_code":"W04","industry_name":"Education","indivs":"166009","pacs":"0","total":"166009"}},{"@attributes":{"industry_code":"F10","industry_name":"Real Estate","indivs":"100329","pacs":"35000","total":"135329"}},{"@attributes":{"industry_code":"K01","industry_name":"Lawyers/Law Firms","indivs":"96480","pacs":"34000","total":"130480"}},{"@attributes":{"industry_code":"H02","industry_name":"Hospitals/Nursing Homes","indivs":"17505","pacs":"76500","total":"94005"}},{"@attributes":{"industry_code":"F07","industry_name":"Securities & Investment","indivs":"55262","pacs":"38500","total":"93762"}},{"@attributes":{"industry_code":"B12","industry_name":"Electronics Mfg & Equip","indivs":"47664","pacs":"45000","total":"92664"}},{"@attributes":{"industry_code":"P04","industry_name":"Public Sector Unions","indivs":"215","pacs":"88500","total":"88715"}},{"@attributes":{"industry_code":"F13","industry_name":"Misc Finance","indivs":"74062","pacs":"1000","total":"75062"}}]}}}