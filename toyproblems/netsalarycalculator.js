//Define the stated KRA tax rates

const kraTaxRates = [

  { threshold: 0, rate: 0 },

  { threshold: 24000, rate: 0.1 },

  { threshold: 32333, rate: 0.15 },

  { threshold: 45667, rate: 0.2 },

  { threshold: Infinity, rate: 0.3 }

];


// Define NHIF rates as stated

const nhifRates = [

  { min: 0, max: 5999, rate: 150 },

  { min: 6000, max: 7999, rate: 300 },

  { min: 8000, max: 11999, rate: 400 },

  { min: 12000, max: 14999, rate: 500 },

  { min: 15000, max: 19999, rate: 600 },

  { min: 20000, max: 24999, rate: 750 },

  { min: 25000, max: 29999, rate: 850 },

  { min: 30000, max: 34999, rate: 900 },

  { min: 35000, max: 39999, rate: 950 },

  { min: 40000, max: 44999, rate: 1000 },

  { min: 45000, max: 49999, rate: 1100 },

  { min: 50000, max: 59999, rate: 1200 },

  { min: 60000, max: 69999, rate: 1300 },

  { min: 70000, max: 79999, rate: 1400 },

  { min: 80000, max: 89999, rate: 1500 },

  { min: 90000, max: 99999, rate: 1600 },

  { min: 100000, max: Infinity, rate: 1700 }

];


// Define NSSF rate as per given instructions

const nssfRate = 0.06;


// This is a Function to calculate net salary

function calculateNetSalary(basicSalary, benefits) {

  // Declare variable to Calculate gross salary

  const grossSalary = basicSalary + benefits;


  // Declare variable to Calculate KRA tax

  let kraTax = 0;

  for (let i = 0; i < kraTaxRates.length - 1; i++) {

    if (grossSalary > kraTaxRates[i].threshold && grossSalary <= kraTaxRates[i + 1].threshold) {

      kraTax = Math.floor((grossSalary - kraTaxRates[i].threshold) * kraTaxRates[i + 1].rate);

      break;

    }

  }


  // Declare Variable to Calculate NHIF deduction

  let nhifDeduction = 0;

  for (let i = 0; i < nhifRates.length; i++) {

    if (grossSalary > nhifRates[i].min && grossSalary <= nhifRates[i].max) {

      nhifDeduction = nhifRates[i].rate;

      break;

    }

  }


  // Declare variable to Calculate NSSF deduction

  const nssfDeduction = grossSalary * nssfRate;


  // Declare the variable to Calculate net salary

const netSalary = Math.floor(grossSalary - kraTax - nhifDeduction - nssfDeduction);


  return {

    grossSalary,

    kraTax,

    nhifDeduction,

    nssfDeduction,

    netSalary

  };

}


// Give Example for usage

const basicSalary = 100000;

const benefits = 20000;

const result = calculateNetSalary(basicSalary, benefits);