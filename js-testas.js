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

console.log(`Eur sum: ${randomEur} Eur`);
console.log(`Eur converted to US Dollars: ${dol.toFixed(2)} Dol`);

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

console.log(`Sum of US Dollars: ${randomDol} US Dollars`);
console.log(`US Dollars converted to Euros: ${euros.toFixed(2)} Eur`);

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
    return 'Normalu';
  } else {
    return 'Virssvoris';
  }
};
const weight = 80;
const height = 1.8;
const BMI = calculateBMI(weight, height);
const categoryBMI = category(BMI);

console.log(`Weight: ${weight} kg`);
console.log(`Height: ${height} m`);
console.log(`BMI: ${BMI.toFixed(2)} `);
console.log(`Category: ${categoryBMI} `);

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

console.log(`Age: ${ageInYears} years`);
console.log(`Which is:`);
console.log(`${ageInUnits.seconds.toFixed(0)} seconds.`);
console.log(`${ageInUnits.minutes.toFixed(0)} minutes.`);
console.log(`${ageInUnits.hours.toFixed(0)} hours.`);
console.log(`${ageInUnits.days.toFixed(0)} days.`);

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

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
console.log(result);

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

  console.log(stars);
}

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

const names = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];

const separated = names.join(',');
console.log(separated);

const plus = names.join('+');
console.log(plus);

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
