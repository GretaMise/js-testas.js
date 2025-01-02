/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

// Latest Currency Exchange Rates: 1 Euro = 1.04 US Dollar

const convertEurToDol = (eur) => {
  const exchangeRate = 1.04;
  return eur * exchangeRate;
};

const randomEur = Math.floor(Math.random() * 1000) + 1;

const dol = convertEurToDol(randomEur);

console.log(`1.Eur sum: ${randomEur} Eur`);
console.log(`1.1 Eur converted to US Dollars: ${dol.toFixed(2)} Dol`);

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

// exchange rate for US dollar to Euros is currently 0.960 today

const convertDolToEur = (dollars) => {
  const exchangeRateEur = 0.96;
  return dollars * exchangeRateEur;
};

const randomDol = Math.floor(Math.random() * 1000) + 1;

const euros = convertDolToEur(randomDol);

console.log(`2.Sum of US Dollars: ${randomDol} US Dollars`);
console.log(`2.2 US Dollars converted to Euros: ${euros.toFixed(2)} Eur`);

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

const calculateBMI = (weight, height) => {
  return weight / height ** 2;
};

const category = (BMI) => {
  if (BMI < 18.5) {
    return 'Per mazas svoris';
  } else if (BMI >= 18.5 && BMI < 25) {
    return 'Normalus svoris :)';
  } else {
    return 'Virssvoris';
  }
};
const weight = 80;
const height = 1.8;
const BMI = calculateBMI(weight, height);
const categoryBMI = category(BMI);

console.log(`3. Weight: ${weight} kg`);
console.log(`3.1 Height: ${height} m`);
console.log(`3.2 BMI: ${BMI.toFixed(2)} `);
console.log(`3.3 Category: ${categoryBMI} `);

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

const convertAge = (ageInYears) => {
  const secondsInAMinute = 60;
  const secondsInAnHour = secondsInAMinute * 60;
  const secondsInADay = secondsInAnHour * 24;
  const secondsInAYear = secondsInADay * 365;

  const totalSeconds = ageInYears * secondsInAYear;
  const totalMinutes = totalSeconds / secondsInAMinute;
  const totalHours = totalSeconds / secondsInAnHour;
  const totalDays = totalSeconds / secondsInADay;

  return {
    seconds: totalSeconds,
    minutes: totalMinutes,
    hours: totalHours,
    days: totalDays,
  };
};

const ageInYears = 25;

const ageInUnits = convertAge(ageInYears);

console.log(`4. Age: ${ageInYears} years`);
console.log(`4.0 Which is:`);
console.log(`4.1 ${ageInUnits.seconds.toFixed(0)} seconds.`);
console.log(`4.2 ${ageInUnits.minutes.toFixed(0)} minutes.`);
console.log(`4.3 ${ageInUnits.hours.toFixed(0)} hours.`);
console.log(`4.4 ${ageInUnits.days.toFixed(0)} days.`);

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}

function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

let temperature = 25;
let unit = 'C';

if (unit === 'C') {
  console.log(
    `5. ${temperature} C is ${celsiusToFahrenheit(temperature).toFixed(0)} F`
  );
} else if (unit === 'F') {
  console.log(
    `5. ${temperature} F is ${fahrenheitToCelsius(temperature).toFixed()} C`
  );
} else {
  console.log("5. Invalid unit. Please use 'C' or 'F'.");
}

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

const numbers = [];

for (let i = 1; i <= 10; i++) {
  numbers.push(i);
}

const result = numbers.join('-');
console.log(`6. ${result}`);

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

const rows = 5;

for (let i = 1; i <= rows; i++) {
  let stars = '';

  for (let j = 1; j <= i; j++) {
    stars += '*';
  }

  console.log(`7. ${stars}`);
}

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

const daysUntilChristmas = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  const christmas = new Date(currentYear, 11, 25);

  if (today > christmas) {
    christmas.setFullYear(currentYear + 1);
  }

  const difference = christmas - today;

  const differenceDays = Math.ceil(difference / (1000 * 60 * 60 * 24));

  return differenceDays;
};

const remainingDays = daysUntilChristmas();

console.log(`8. Days until Christmas left: ${remainingDays}`);

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

const names = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];

const separated = names.join(',');
console.log(`9. ${separated}`);

const plus = names.join('+');
console.log(`9.1 ${plus}`);

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

function generatePassword(length) {
  const uppercaseLetters = 'ASDFGHJKL';
  const lowercaseLetters = 'asdfghjkl';
  const digits = '1234567890';
  const specialCharacters = '!@#$%^&*()';

  const passwordArray = [
    uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)],
    lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)],
    digits[Math.floor(Math.random() * digits.length)],
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)],
  ];

  const allCharacters =
    uppercaseLetters + lowercaseLetters + digits + specialCharacters;

  for (let i = passwordArray.length; i < length; i++) {
    passwordArray.push(
      allCharacters[Math.floor(Math.random() * allCharacters.length)]
    );
  }

  const shuffledPassword = passwordArray
    .sort(() => Math.random() - 0.5)
    .join('');

  return shuffledPassword;
}

// sort - sis metodas maisys atsitiktinius simbolius slaptazodzio masyve!!!!!

const password = generatePassword(12);
console.log(`10. Generated Password: ${password}`);
