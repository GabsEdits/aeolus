import AOS from 'aos';
import 'aos/dist/aos.css';

const materialColors: string[] = [
    '#ebcf91', // Pale Yellow
    '#fb888a', // Light Yellow
    '#f58b51', // Light Orange
    '#f8961e', // Light Orange
    '#f9844a', // Light Orange
    '#f9c74f', // Light Yellow
    '#90be6d', // Light Green
    '#b2dfdb', // Light Teal
    '#c8e6c9', // Light Green
    '#dcedc8', // Light Lime Green
    '#f0f4c3', // Light Yellow Green
    '#fff59d', // Light Yellow
    '#ffe0b2', // Light Orange
    '#ffcc80', // Light Peach
    '#ffab91', // Light Salmon
    '#bcaaa4', // Light Brown
    '#b0bec5', // Light Grey
    '#cfd8dc', // Light Blue Grey
];

let currentColorIndex: number = 0;

function getRandomMaterialColor(): string {
    const randomIndex: number = Math.floor(Math.random() * materialColors.length);
    return materialColors[randomIndex];
}

function changeBackgroundColorSmoothly(): void {
    const mainElement: HTMLElement | null = document.querySelector('main');
    if (mainElement) {
        currentColorIndex = (currentColorIndex + 1) % materialColors.length;
        mainElement.style.transition = 'background-color 1s ease-in-out';
        mainElement.style.backgroundColor = materialColors[currentColorIndex];
    }
}

document.addEventListener('DOMContentLoaded', function() {
    changeBackgroundColorSmoothly();
    setInterval(changeBackgroundColorSmoothly, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
    const mainElement: HTMLElement | null = document.querySelector('main');
    if (mainElement) {
        mainElement.style.backgroundColor = getRandomMaterialColor();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const prefersDarkMode: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const svgOpen: HTMLImageElement | null = document.getElementById('svg-open') as HTMLImageElement;
    if (svgOpen) {
        svgOpen.src = prefersDarkMode ? '/assets/open-dark.svg' : '/assets/open.svg';
    }

    const svgSecure: HTMLImageElement | null = document.getElementById('svg-secure') as HTMLImageElement;
    if (svgSecure) {
        svgSecure.src = prefersDarkMode ? '/assets/secure-dark.svg' : '/assets/secure.svg';
    }

    const svgManageable: HTMLImageElement | null = document.getElementById('svg-manageable') as HTMLImageElement;
    if (svgManageable) {
        svgManageable.src = prefersDarkMode ? '/assets/manageable-dark.svg' : '/assets/manageable.svg';
    }
});

AOS.init();