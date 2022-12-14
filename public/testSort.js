const fs = require('fs');

let senateRepublicansUnsorted = 
[
	'Jerry Carl',
	'Barry Moore',
	'Mike D Rogers',
	'Robert B Aderholt',
	'Mo Brooks',
	'Gary Palmer',
	'Aumua Amata Radewagen',
	'Paul Gosar',
	'Andy Biggs',
	'David Schweikert',
	'Debbie Lesko',
	'Rick Crawford',
	'French Hill',
	'Steve Womack',
	'Bruce Westerman',
	'Doug LaMalfa',
	'Tom McClintock',
	'Jay Obernolte',
	'David Valadao',
	'Connie Conway',
	'Kevin McCarthy',
	'Mike Garcia',
	'Young Kim',
	'Ken Calvert',
	'Michelle Steel',
	'Darrell Issa',
	'Lauren Boebert',
	'Ken Buck',
	'Doug Lamborn',
	'Matt Gaetz',
	'Neal Dunn',
	'Kat Cammack',
	'John Rutherford',
	'Michael Waltz',
	'Bill Posey',
	'Daniel Webster',
	'Gus Bilirakis',
	'Scott Franklin',
	'Vernon Buchanan',
	'Greg Steube',
	'Brian Mast',
	'Byron Donalds',
	'Mario Diaz-Balart',
	'Carlos Gimenez',
	'Maria Salazar',
	'Buddy Carter',
	'Drew Ferguson',
	'Austin Scott',
	'Andrew Clyde',
	'Jody Hice',
	'Barry Loudermilk',
	'Richard W Allen',
	'Marjorie Taylor Greene',
	'Russ Fulcher',
	'Mike Simpson',
	'Mike Bost',
	'Rodney Davis',
	'Mary Miller',
	'Adam Kinzinger',
	'Darin LaHood',
	'Jim Banks',
	'Jim Baird',
	'Victoria Spartz',
	'Greg Pence',
	'Larry Bucshon',
	'Trey Hollingsworth',
	'Ashley Hinson',
	'Mariannette Miller-Meeks',
	'Randy Feenstra',
	'Tracey Mann',
	'Jake Laturner',
	'Ron Estes',
	'James Comer',
	'Brett Guthrie',
	'Thomas Massie',
	'Hal Rogers',
	'Andy Barr',
	'Steve Scalise',
	'Clay Higgins',
	'Mike Johnson',
	'Julia Letlow',
	'Garret Graves',
	'Andy Harris',
	'Jack Bergman',
	'Bill Huizenga',
	'Peter Meijer',
	'John Moolenaar',
	'Fred Upton',
	'Tim Walberg',
	'Lisa McClain',
	'Brad Finstad',
	'Tom Emmer',
	'Michelle Fischbach',
	'Pete Stauber',
	'Trent Kelly',
	'Michael Guest',
	'Steven Palazzo',
	'Ann Wagner',
	'Blaine Luetkemeyer',
	'Vicky Hartzler',
	'Sam Graves',
	'Billy Long',
	'Jason Smith',
	'Matt Rosendale',
	'Mike Flood',
	'Don Bacon',
	'Adrian Smith',
	'Mark Amodei',
	'Chris Smith',
	'Yvette Herrell',
	'Lee Zeldin',
	'Andrew Garbarino',
	'Nicole Malliotakis',
	'Elise Stefanik',
	'Claudia Tenney',
	'John Katko',
	'Chris Jacobs',
	'Greg Murphy',
	'Virginia Foxx',
	'David Rouzer',
	'Richard Hudson',
	'Dan Bishop',
	'Patrick McHenry',
	'Madison Cawthorn',
	'Ted Budd',
	'Kelly Armstrong',
	'Steve Chabot',
	'Brad Wenstrup',
	'Jim Jordan',
	'Bob Latta',
	'Bill Johnson',
	'Bob Gibbs',
	'Warren Davidson',
	'Michael R Turner',
	'Troy Balderson',
	'David P Joyce',
	'Mike Carey',
	'Anthony Gonzalez',
	'Kevin Hern',
	'Markwayne Mullin',
	'Frank D Lucas',
	'Tom Cole',
	'Stephanie Bice',
	'Cliff Bentz',
	'Brian Fitzpatrick',
	'Dan Meuser',
	'Scott Perry',
	'Lloyd Smucker',
	'Fred Keller',
	'John Joyce',
	'Guy Reschenthaler',
	'Glenn Thompson',
	'Mike Kelly',
	'Nancy Mace',
	'Joe Wilson',
	'Jeff Duncan',
	'William Timmons',
	'Ralph Norman',
	'Tom Rice',
	'Dusty Johnson',
	'Diana Harshbarger',
	'Tim Burchett',
	'Chuck Fleischmann',
	'Scott Desjarlais',
	'John Rose',
	'Mark Green',
	'David Kustoff',
	'Louie Gohmert',
	'Dan Crenshaw',
	'Van Taylor',
	'Patrick Fallon',
	'Lance Gooden',
	'Jake Ellzey',
	'Kevin Brady',
	'Michael McCaul',
	'August Pfluger',
	'Kay Granger',
	'Ronny Jackson',
	'Randy Weber',
	'Pete Sessions',
	'Jodey Arrington',
	'Chip Roy',
	'Troy Nehls',
	'Tony Gonzales',
	'Beth Van Duyne',
	'Roger Williams',
	'Michael Burgess',
	'Michael Cloud',
	'John Carter',
	'Mayra Flores',
	'Brian Babin',
	'Blake Moore',
	'Chris Stewart',
	'John Curtis',
	'Burgess Owens',
	'Rob Wittman',
	'Bob Good',
	'Ben Cline',
	'Morgan Griffith',
	'Jaime Herrera Beutler',
	'Dan Newhouse',
	'Cathy McMorris Rodgers',
	'David McKinley',
	'Alex Mooney',
	'Carol Miller',
	'Bryan Steil',
	'Scott Fitzgerald',
	'Glenn S Grothman',
	'Tom Tiffany',
	'Mike Gallagher',
	'Liz Cheney'
]

const compareStrings = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;

  return 0;
}

const compare = (a, b) => {
  const splitA = a.split(" ");
  const splitB = b.split(" ");
  const lastA = splitA[splitA.length - 1];
  const lastB = splitB[splitB.length - 1];

  return lastA === lastB ?
    compareStrings(splitA[0], splitB[0]) :
    compareStrings(lastA, lastB);
}


let senateDemocrats = senateRepublicansUnsorted.sort(compare);
console.log(senateDemocrats.length);


console.lo
fs.appendFileSync('./testSort.js', JSON.stringify(senateDemocrats), err=>{
	console.log(err);
});

["Robert B Aderholt","Richard W Allen","Mark Amodei","Kelly Armstrong","Jodey Arrington","Brian Babin","Don Bacon","Jim Baird","Troy Balderson","Jim Banks","Andy Barr","Cliff Bentz","Jack Bergman","Jaime Herrera Beutler","Stephanie Bice","Andy Biggs","Gus Bilirakis","Dan Bishop","Lauren Boebert","Mike Bost","Kevin Brady","Mo Brooks","Vernon Buchanan","Ken Buck","Larry Bucshon","Ted Budd","Tim Burchett","Michael Burgess","Ken Calvert","Kat Cammack","Mike Carey","Jerry Carl","Buddy Carter","John Carter","Madison Cawthorn","Steve Chabot","Liz Cheney","Ben Cline","Michael Cloud","Andrew Clyde","Tom Cole","James Comer","Connie Conway","Rick Crawford","Dan Crenshaw","John Curtis","Warren Davidson","Rodney Davis","Scott Desjarlais","Mario Diaz-Balart","Byron Donalds","Jeff Duncan","Neal Dunn","Beth Van Duyne","Jake Ellzey","Tom Emmer","Ron Estes","Patrick Fallon","Randy Feenstra","Drew Ferguson","Brad Finstad","Michelle Fischbach","Scott Fitzgerald","Brian Fitzpatrick","Chuck Fleischmann","Mike Flood","Mayra Flores","Virginia Foxx","Scott Franklin","Russ Fulcher","Matt Gaetz","Mike Gallagher","Andrew Garbarino","Mike Garcia","Bob Gibbs","Carlos Gimenez","Louie Gohmert","Tony Gonzales","Anthony Gonzalez","Bob Good","Lance Gooden","Paul Gosar","Kay Granger","Garret Graves","Sam Graves","Mark Green","Marjorie Taylor Greene","Morgan Griffith","Glenn S Grothman","Michael Guest","Brett Guthrie","Andy Harris","Diana Harshbarger","Vicky Hartzler","Kevin Hern","Yvette Herrell","Jody Hice","Clay Higgins","French Hill","Ashley Hinson","Trey Hollingsworth","Richard Hudson","Bill Huizenga","Darrell Issa","Ronny Jackson","Chris Jacobs","Bill Johnson","Dusty Johnson","Mike Johnson","Jim Jordan","David P Joyce","John Joyce","John Katko","Fred Keller","Mike Kelly","Trent Kelly","Young Kim","Adam Kinzinger","David Kustoff","Darin LaHood","Doug LaMalfa","Doug Lamborn","Bob Latta","Jake Laturner","Debbie Lesko","Julia Letlow","Billy Long","Barry Loudermilk","Frank D Lucas","Blaine Luetkemeyer","Nancy Mace","Nicole Malliotakis","Tracey Mann","Thomas Massie","Brian Mast","Kevin McCarthy","Michael McCaul","Lisa McClain","Tom McClintock","Patrick McHenry","David McKinley","Peter Meijer","Dan Meuser","Carol Miller","Mary Miller","Mariannette Miller-Meeks","John Moolenaar","Alex Mooney","Barry Moore","Blake Moore","Markwayne Mullin","Greg Murphy","Troy Nehls","Dan Newhouse","Ralph Norman","Jay Obernolte","Burgess Owens","Steven Palazzo","Gary Palmer","Greg Pence","Scott Perry","August Pfluger","Bill Posey","Aumua Amata Radewagen","Guy Reschenthaler","Tom Rice","Cathy McMorris Rodgers","Hal Rogers","Mike D Rogers","John Rose","Matt Rosendale","David Rouzer","Chip Roy","John Rutherford","Maria Salazar","Steve Scalise","David Schweikert","Austin Scott","Pete Sessions","Mike Simpson","Adrian Smith","Chris Smith","Jason Smith","Lloyd Smucker","Victoria Spartz","Pete Stauber","Michelle Steel","Elise Stefanik","Bryan Steil","Greg Steube","Chris Stewart","Van Taylor","Claudia Tenney","Glenn Thompson","Tom Tiffany","William Timmons","Michael R Turner","Fred Upton","David Valadao","Ann Wagner","Tim Walberg","Michael Waltz","Randy Weber","Daniel Webster","Brad Wenstrup","Bruce Westerman","Roger Williams","Joe Wilson","Rob Wittman","Steve Womack","Lee Zeldin"]