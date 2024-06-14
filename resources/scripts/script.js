const changeFilter = false;
const getSunglasses = true;
const getNewAccentColor = true;

// Change profile picture filter
const pfpImage = document.getElementById('pfp');
pfpImage.addEventListener('click', () => {
    if (changeFilter) {
        if (pfpImage.style.filter === 'none') {
            pfpImage.style.filter = createFilter();
        } else {
            pfpImage.style.filter = 'none';
        }
    }

    if (getNewAccentColor) {
        pickNewAccentColor();
    }
})

const createFilter = () => {
    const a = Math.floor(Math.random() * 70) + 30;
    const c = Math.floor(Math.random() * 40) + 80;
    const filters = [
        `grayscale(${a})`,
        `sepia(${a}%)`,
        `contrast(${c}%)`
    ];
    const i = Math.floor(Math.random() * filters.length);
    const filter = filters[i];
    return filter;
}

// Accent colors
const rootElement = document.querySelector(':root');
let lastColor = '#44be54';
const accentColors = [
    '#44be54',
    '#4497be',
    '#ce6fb1',
    '#ce956f',
    '#e78645',
];

const pickNewAccentColor = () => {
    let newAccentColors = accentColors.filter(element => element !== lastColor);
    const i = Math.floor(Math.random() * newAccentColors.length);
    lastColor = newAccentColors[i];
    rootElement.style.setProperty('--accent-color', newAccentColors[i]);
}

// Toggle light/dark mode
const toggleBtn = document.getElementById('btn');
const toggleIcon = document.getElementById('icon');
const elements = document.getElementsByClassName('toggle');
const projElements = document.getElementsByClassName('project-card-toggle');
const aElements = document.getElementsByClassName('a-toggle');
const sunglasses = document.getElementById('sunglasses');
let currentMode = true;
toggleBtn.addEventListener('click', () => {
    for (const element of aElements) {
        if (currentMode) {
            element.classList.replace('a-dark', 'a-light');
        } else {
            element.classList.replace('a-light', 'a-dark');
        }
    }

    for (const element of projElements) {
        if (currentMode) {
            element.classList.replace('project-card-dark', 'project-card-light');
        } else {
            element.classList.replace('project-card-light', 'project-card-dark');
        }
    }

    for (const element of elements) {
        if (currentMode) {
            element.classList.replace('dark-mode', 'light-mode');
        } else {
            element.classList.replace('light-mode', 'dark-mode');
        }
    }
    // Sunglasses animation
    if (currentMode) {
        toggleIcon.src = './resources/images/darkmode.png';
        sunglasses.style.opacity = '90%';
        sunglasses.style.top = '73px';
    } else {
        toggleIcon.src = './resources/images/lightmode.png';
        sunglasses.style.opacity = '0%';
        sunglasses.style.top = '0px';
    }

    currentMode = !currentMode;
})

pickNewAccentColor();