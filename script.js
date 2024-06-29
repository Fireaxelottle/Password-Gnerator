const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

let y;

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-~_+=";

const getUppercase = () => {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
};

const getLowercase = () => {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
};

const getNumber = () => {
    return numbers[Math.floor(Math.random() * numbers.length)];
};

const getSymbol = () => {
    return symbols[Math.floor(Math.random() * symbols.length)];
};

function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getUppercase());
    }

    if (lowerEl.checked) {
        xs.push(getLowercase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

const generatePassword = () => {
    const len = lenEl.value;
    let password = "";

    for (let i = 0; i < len; i++) {
        const x = generateX();
        password += x;
    };
    pwEl.innerText = password;
};

generateEl.addEventListener('click', generatePassword);

copyEl.addEventListener('click', () => {
    navigator.clipboard.writeText(pwEl.innerText).then(() => {
        console.log('Content copied to clipboard');
        /* Resolved - text copied to clipboard successfully */
    }, () => {
        console.error('Failed to copy');
        /* Rejected - text failed to copy to the clipboard */
    });
})