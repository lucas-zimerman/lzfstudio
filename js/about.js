function getAge() {
    var currentYear = new Date().getFullYear();
    return currentYear - 2017;
}

// Set dynamic Age
document.getElementById('devage').textContent = getAge();
