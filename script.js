document.getElementById('calculate').addEventListener('click', function() {
    var birthdate = new Date(document.getElementById('birthdate').value);
    var today = new Date();

    if (birthdate > today) {
        alert("Not born yet!");
        return;
    }

    var ageInYears = today.getFullYear() - birthdate.getFullYear();
    var monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        ageInYears--;
        monthDiff += 12;
    }

    var ageInMonths = monthDiff;
    var ageInDays = today.getDate() - birthdate.getDate();

    if (ageInDays < 0) {
        var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        ageInMonths--;
        ageInDays += lastMonth.getDate();
    }

    var ageParts = [];
    if (ageInYears > 0) {
        ageParts.push(`${ageInYears} year${ageInYears !== 1 ? 's' : ''}`);
    }
    if (ageInMonths > 0) {
        ageParts.push(`${ageInMonths} month${ageInMonths !== 1 ? 's' : ''}`);
    }
    if (ageInDays > 0) {
        ageParts.push(`${ageInDays} day${ageInDays !== 1 ? 's' : ''}`);
    }

    var outputElement = document.querySelector('.output');
    outputElement.textContent = `You are ${ageParts.join(', ')} old.`;
    outputElement.style.display = 'block'; // Show the output
});
