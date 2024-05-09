function getAge() {
    var currentYear = new Date().getFullYear();
    return currentYear - 2017;
}

// Set dynamic Age
element = document.getElementById('devage');
element.textContent = element.textContent.replace("{AGE}", getAge());
