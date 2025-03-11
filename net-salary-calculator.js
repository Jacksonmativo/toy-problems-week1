function netSalaryCalculator(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // PAYE (simplified assumption for demo purposes)
    let paye = grossSalary * 0.1; // Assuming 10% tax for simplicity

    // NHIF Deductions (simplified)
    let nhif = grossSalary * 0.02; // Assuming 2% deduction

    // NSSF Deductions (simplified)
    let nssf = grossSalary * 0.06; // Assuming 6% deduction

    let netSalary = grossSalary - (paye + nhif + nssf);
    console.log(`Net Salary: ${netSalary}`);
}

// Example usage:
netSalaryCalculator(50000, 10000);
