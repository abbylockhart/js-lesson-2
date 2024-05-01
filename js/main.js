console.log("Hello " + "World");
console.clear();

let firstName = "Abby"
console.log("My name is "+ firstName);

let blogTitle = "Embracing Cold Water"
console.log("The title of the blog is" ,blogTitle);

let favouriteWaterfalls = ["Cedar Creek Falls " , "Cougal Cascades ", "Killen Falls "]
console.log("Some of my favourite waterfalls are: " , favouriteWaterfalls);

let completedTrack = true;
console.log("I have completed this track " , completedTrack);


let favouriteBeach = "Tugun Beach";

let waterTemperature = 15.5; // Degrees in Celcius

let swimLocationStatement = `${firstName} swam at ${favouriteBeach} today`;
console.log(swimLocationStatement)

let statementUpperCase = swimLocationStatement.toUpperCase();
console.log(statementUpperCase);

let statementLength = statementUpperCase.length;
console.log(statementLength);

let coldestTemperature = 8 // Degrees in Celcius

let longestSwim = 3 // Time in Minutes

let personalBest = `The coldest swim I have done is ${longestSwim} minutes in water temperatures of ${coldestTemperature} degrees Celcius`;
console.log(personalBest);

console.warn("Please proceed with caution. Always swim with a friend")

let recommendedExposureTime = null;
console.log("Recommended Exposure Time:", recommendedExposureTime);
