document.getElementById('hobbySurvey').addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();
    let isValid = validateForm();
    if (isValid) this.submit();
});

function validateForm() {
    let isValid = true;

    //  validation for Name
    if (!isNotEmpty('name', 'Please enter your name')) isValid = false;

    // Frequency validation
    if (!hasCheckedOption('frequency', 'Please select any frequency')) isValid = false;

    // Hobbies validation
    if (!hasCheckedOption('hobbies', 'Please select at least one hobby')) isValid = false;

    //  validation for seasons
    if (!isSelected('season', 'Please select a season')) isValid = false;

    // Hobby Code
    if (!isValidHobbyCode('hobbyCode', 'Please enter a valid code ')) isValid = false;

    // validation of start date
    if (!isNotEmpty('startDate', 'Please select a start date')) isValid = false;

    // Hours validation
    if (!isValidNumber('hours', 'Please enter a valid number (0-168)')) isValid = false;

    return isValid;
}

function isNotEmpty(id, errorMsg) {
    const value = document.getElementById(id).value.trim();
    if (value === '') {
        showError(id, errorMsg);
        return false;
    }
    return true;
}

function hasCheckedOption(name, errorMsg) {
    const options = document.getElementsByName(name);
    const isChecked = Array.from(options).some(option => option.checked);
    if (!isChecked) {
        showError(name + '-error', errorMsg);
        return false;
    }
    return true;
}

function isSelected(id, errorMsg) {
    const value = document.getElementById(id).value;
    if (value === '') {
        showError(id, errorMsg);
        return false;
    }
    return true;
}

function isValidHobbyCode(id, errorMsg) {
    const value = document.getElementById(id).value.trim();
    const regex = /^HOB-\d{4}$/;
    if (!regex.test(value)) {
        showError(id, errorMsg);
        return false;
    }
    return true;
}

function isValidNumber(id, errorMsg) {
    const value = document.getElementById(id).value;
    if (value === '' || isNaN(value) || value < 0 || value > 168) {
        showError(id, errorMsg);
        return false;
    }
    return true;
}

function showError(id, message) {
    document.getElementById(id + '-error').textContent = message;
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
}