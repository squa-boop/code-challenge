const readline = require('readline');

// Set up readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate PAYE
function calculatePAYE(grossSalary) {
    let paye = 0;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        paye = 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        paye = 2400 + 2083.25 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
        paye = 2400 + 2083.25 + 140000.1 + (grossSalary - 500000) * 0.325;
    } else {
        paye = 2400 + 2083.25 + 140000.1 + 975000 + (grossSalary - 800000) * 0.35;
    }
    return paye;
}

// Function to calculate NHIF
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
}

// Function to calculate NSSF
function calculateNSSF(grossSalary) {
    const tier1 = Math.min(6000, grossSalary) * 0.06;  // 6% of up to 6000
    const tier2 = Math.max(0, Math.min(18000, grossSalary - 6000)) * 0.06;  // 6% of next 18000
    return tier1 + tier2;
}

// Main function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // Deductions
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    // Calculate net salary
    const netSalary = grossSalary - (paye + nhif + nssf);

    // Output results
    console.log(`\nGross Salary: ${grossSalary.toFixed(2)} KES`);
    console.log(`PAYE (Tax): ${paye.toFixed(2)} KES`);
    console.log(`NHIF Deduction: ${nhif.toFixed(2)} KES`);
    console.log(`NSSF Deduction: ${nssf.toFixed(2)} KES`);
    console.log(`Net Salary: ${netSalary.toFixed(2)} KES\n`);
}

// Hardcoded values for basic salary and benefits
const basicSalary = 50000; // Example basic salary in KES
const benefits = 10000;     // Example benefits in KES

// Calculate net salary with hardcoded values
calculateNetSalary(basicSalary, benefits);
