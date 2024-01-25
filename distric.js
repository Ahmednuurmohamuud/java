function calculateGrade() {
    marks = document.getElementById('marks').value;
    grade = '';
    if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 80) {
        grade = 'B';
    } else if (marks >= 70) {
        grade = 'C';
    } else if (marks >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    document.getElementById('grade').value = grade;
}


function getAge() {
    bdate = document.getElementById('bdate').value;

    age = 2023 -  bdate;

    document.getElementById('age').value = age;
}


const districtCity = {
    boondheere: 'Banaadir',
    cabdicaziiz: 'Banaadir',
    dharkenley: 'jubaland',
    // Add more districts and cities as needed
};

function populateDistricts() {
    const districtSelect = document.getElementById('district');
    const cityInput = document.getElementById('city');
    const selectedDistrict = districtSelect.options[districtSelect.selectedIndex].value;

    // Get the corresponding city for the selected district
    const city = districtCity[selectedDistrict];

    // Set the city in the input field
    cityInput.value = city;
}
