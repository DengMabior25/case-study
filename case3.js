const studentName = "Mabior";
const averageScore = 86;
const attendance = 91;
const familyIncome = 400000;
const organisationMember = true;

const basicRequirementsFulfilled = averageScore >= 80 &&attendance >= 90;

let basicRequirementStatus = basicRequirementsFulfilled ? "Passed" : "Failed";

let scholarshipCategory = "Not Eligible";

if (basicRequirementsFulfilled && organisationMember) {
    if (familyIncome <= 300000) {
        scholarshipCategory = "Category A";
    } else if (familyIncome <= 500000) {
        scholarshipCategory = "Category B";
    }
}

console.log(`Student: ${studentName}`);
console.log(`Average Score: ${averageScore}`);
console.log(`Attendance: ${attendance}%`);
console.log(`Family Income: Rp${familyIncome}`);
console.log(`Organisation Member: ${organisationMember}`);
console.log("");
console.log(`Basic Requirement: ${basicRequirementStatus}`);
console.log(`Scholarship Category: ${scholarshipCategory}`);