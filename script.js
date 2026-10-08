let applicantName = document.getElementById('applicantName');
let applicantAge = document.getElementById('applicantAge');
let monthlyIncome = document.getElementById('monthlyIncome');
let creditScore = document.getElementById('creditScore');

let resultDiv = document.getElementById('result');

let checkEligibleBtn = document.getElementById('checkEligibleBtn');
checkEligibleBtn.onclick = function() {
    let applicantNameValue = applicantName.value.trim();
    let applicantAgeValue = parseInt(applicantAge.value);
    let monthlyIncomeValue = parseFloat(monthlyIncome.value);
    let creditScoreValue = parseInt(creditScore.value);

        if(applicantNameValue.trim() === '') {
            resultDiv.innerHTML = 'Please enter your name.';
        } else if(Number.isNaN(applicantAgeValue) || applicantAgeValue < 18) {
            resultDiv.innerHTML = "You must be at least 18 years old to apply.";
        } else if(Number.isNaN(monthlyIncomeValue) || monthlyIncomeValue < 100000) {
            resultDiv.innerHTML = "Your monthly income must be at least ₦100,000 to be eligible.";
        } else if(Number.isNaN(creditScoreValue) || creditScoreValue < 0 || creditScoreValue > 850) {
            resultDiv.innerHTML = "Please enter a valid credit score between 0 and 850.";
        }

            else if(applicantAgeValue >= 18 && monthlyIncomeValue >= 100000 && creditScoreValue >= 700) {
                resultDiv.innerHTML = `👏🎉Congratulations 
                ${applicantNameValue}, you are eligible for the loan!`;
            } else if(creditScoreValue >= 600 && creditScoreValue < 700) {
                resultDiv.innerHTML = `Dear ${applicantNameValue}, your application needs further review due to your credit score.`;
            } else {
                resultDiv.innerHTML = `Sorry ${applicantNameValue}, you are not eligible for a loan.`;
            }
};