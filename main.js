let raceNumber = Math.floor(Math.random() * 1000);
const early = true;
const age = 18;

if(early && age > 18) {
  raceNumber += 1000;
  }

if(early && age > 18 ) {
  console.log(`The race will begin at 9:30am and your race number is: ${raceNumber}.`);
} else if (!early && age > 18) {
  console.log(`Late adults run at 11:00am and your race number is: ${raceNumber}.`);
} else if (age < 18) {
  console.log(`Youth registrants run at 12:30pm and your race number is: ${raceNumber}`);
} else {
  console.log('Please seek help from the registration desk.')
}