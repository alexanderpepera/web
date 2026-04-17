const GPUs = [
    // --- NVIDIA 50-SERIES (2025/2026) ---
    { name: "NVIDIA RTX 5090", tdp: 575 }, { name: "NVIDIA RTX 5080", tdp: 360 },
    { name: "NVIDIA RTX 5070 Ti", tdp: 300 }, { name: "NVIDIA RTX 5070", tdp: 250 },
    { name: "NVIDIA RTX 5060 Ti", tdp: 180 }, { name: "NVIDIA RTX 5060", tdp: 160 },
    // --- NVIDIA 40-SERIES ---
    { name: "NVIDIA RTX 4090", tdp: 450 }, { name: "NVIDIA RTX 4080 Super", tdp: 320 },
    { name: "NVIDIA RTX 4080", tdp: 320 }, { name: "NVIDIA RTX 4070 Ti Super", tdp: 285 },
    { name: "NVIDIA RTX 4070 Ti", tdp: 285 }, { name: "NVIDIA RTX 4070 Super", tdp: 220 },
    { name: "NVIDIA RTX 4070", tdp: 200 }, { name: "NVIDIA RTX 4060 Ti", tdp: 160 },
    { name: "NVIDIA RTX 4060", tdp: 115 },
    // --- NVIDIA 30-SERIES ---
    { name: "NVIDIA RTX 3090 Ti", tdp: 450 }, { name: "NVIDIA RTX 3090", tdp: 350 },
    { name: "NVIDIA RTX 3080 Ti", tdp: 350 }, { name: "NVIDIA RTX 3080 12GB", tdp: 350 },
    { name: "NVIDIA RTX 3080 10GB", tdp: 320 }, { name: "NVIDIA RTX 3070 Ti", tdp: 290 },
    { name: "NVIDIA RTX 3070", tdp: 220 }, { name: "NVIDIA RTX 3060 Ti", tdp: 200 },
    { name: "NVIDIA RTX 3060", tdp: 170 }, { name: "NVIDIA RTX 3050", tdp: 130 },
    // --- NVIDIA 20-SERIES ---
    { name: "NVIDIA RTX 2080 Ti", tdp: 250 }, { name: "NVIDIA RTX 2080 Super", tdp: 250 },
    { name: "NVIDIA RTX 2080", tdp: 215 }, { name: "NVIDIA RTX 2070 Super", tdp: 215 },
    { name: "NVIDIA RTX 2070", tdp: 175 }, { name: "NVIDIA RTX 2060 Super", tdp: 175 },
    { name: "NVIDIA RTX 2060", tdp: 160 },
    // --- NVIDIA LEGACY (10, 900, 700, 600, 500 SERIES) ---
    { name: "NVIDIA GTX 1080 Ti", tdp: 250 }, { name: "NVIDIA GTX 1080", tdp: 180 },
    { name: "NVIDIA GTX 1070 Ti", tdp: 180 }, { name: "NVIDIA GTX 1070", tdp: 150 },
    { name: "NVIDIA GTX 1060 6GB", tdp: 120 }, { name: "NVIDIA GTX 980 Ti", tdp: 250 },
    { name: "NVIDIA GTX 980", tdp: 165 }, { name: "NVIDIA GTX Titan Z", tdp: 375 },
    { name: "NVIDIA GTX 780 Ti", tdp: 250 }, { name: "NVIDIA GTX 680", tdp: 195 },
    { name: "NVIDIA GTX 580", tdp: 244 }, { name: "NVIDIA GTX 480 (The Grill)", tdp: 250 },
    // --- AMD RADEON (9000, 7000, 6000, 5000) ---
    { name: "AMD Radeon RX 9070 XT", tdp: 300 }, { name: "AMD Radeon RX 9070", tdp: 225 },
    { name: "AMD Radeon RX 7900 XTX", tdp: 355 }, { name: "AMD Radeon RX 7900 XT", tdp: 315 },
    { name: "AMD Radeon RX 7800 XT", tdp: 263 }, { name: "AMD Radeon RX 7700 XT", tdp: 245 },
    { name: "AMD Radeon RX 6950 XT", tdp: 335 }, { name: "AMD Radeon RX 6900 XT", tdp: 300 },
    { name: "AMD Radeon RX 6800 XT", tdp: 300 }, { name: "AMD Radeon RX 6700 XT", tdp: 230 },
    { name: "AMD Radeon RX 5700 XT", tdp: 225 }, { name: "AMD Radeon RX 5600 XT", tdp: 150 },
    // --- AMD LEGACY (VEGA, R9, HD) ---
    { name: "AMD Radeon VII", tdp: 300 }, { name: "AMD Radeon RX Vega 64", tdp: 295 },
    { name: "AMD Radeon RX Vega 56", tdp: 210 }, { name: "AMD Radeon R9 295X2", tdp: 500 },
    { name: "AMD Radeon R9 290X", tdp: 290 }, { name: "AMD Radeon R9 Fury X", tdp: 275 },
    { name: "AMD Radeon HD 7970", tdp: 250 }, { name: "AMD Radeon HD 6990", tdp: 375 }
];

const CPUs = [
    // --- INTEL CORE ULTRA & 14, 13, 12 GEN ---
    { name: "Intel Core Ultra 9 285K", tdp: 250 }, { name: "Intel Core Ultra 7 265K", tdp: 250 },
    { name: "Intel Core Ultra 5 245K", tdp: 159 }, { name: "Intel Core i9-14900KS", tdp: 253 },
    { name: "Intel Core i9-14900K", tdp: 253 }, { name: "Intel Core i7-14700K", tdp: 253 },
    { name: "Intel Core i5-14600K", tdp: 181 }, { name: "Intel Core i9-13900K", tdp: 253 },
    { name: "Intel Core i9-12900K", tdp: 241 }, { name: "Intel Core i7-12700K", tdp: 190 },
    // --- INTEL LEGACY (11 - 2 GEN) ---
    { name: "Intel Core i9-11900K", tdp: 125 }, { name: "Intel Core i9-10900K", tdp: 125 },
    { name: "Intel Core i9-9900K", tdp: 95 }, { name: "Intel Core i7-8700K", tdp: 95 },
    { name: "Intel Core i7-7700K", tdp: 91 }, { name: "Intel Core i7-6700K", tdp: 91 },
    { name: "Intel Core i7-4790K", tdp: 88 }, { name: "Intel Core i7-3770K", tdp: 77 },
    { name: "Intel Core i7-2600K", tdp: 95 }, { name: "Intel Core i7-920", tdp: 130 },
    // --- AMD RYZEN (9000, 7000, 5000, 3000) ---
    { name: "AMD Ryzen 9 9950X", tdp: 170 }, { name: "AMD Ryzen 9 9900X", tdp: 120 },
    { name: "AMD Ryzen 7 9800X3D", tdp: 120 }, { name: "AMD Ryzen 7 9700X", tdp: 65 },
    { name: "AMD Ryzen 9 7950X3D", tdp: 120 }, { name: "AMD Ryzen 9 7950X", tdp: 170 },
    { name: "AMD Ryzen 7 7800X3D", tdp: 120 }, { name: "AMD Ryzen 9 5950X", tdp: 105 },
    { name: "AMD Ryzen 7 5800X3D", tdp: 105 }, { name: "AMD Ryzen 9 3950X", tdp: 105 },
    { name: "AMD Ryzen 9 3900X", tdp: 105 }, { name: "AMD Ryzen 7 3700X", tdp: 65 },
    // --- AMD LEGACY (FX, PHENOM, ATHLON) ---
    { name: "AMD FX-9590", tdp: 220 }, { name: "AMD FX-8350", tdp: 125 },
    { name: "AMD FX-6300", tdp: 95 }, { name: "AMD Phenom II X6 1100T", tdp: 125 },
    { name: "AMD Phenom II X4 965 BE", tdp: 125 }, { name: "AMD Athlon II X4 640", tdp: 95 }
];

const gpuSelect = document.getElementById('gpuSelect');
const cpuSelect = document.getElementById('cpuSelect');
const actualWatts = document.getElementById('actualWatts');
const recWatts = document.getElementById('recWatts');
const amazonBtn = document.getElementById('amazonBtn');

// Populate dropdowns with alphabetical sorting
GPUs.sort((a, b) => a.name.localeCompare(b.name)).forEach(g => gpuSelect.add(new Option(g.name, g.tdp)));
CPUs.sort((a, b) => a.name.localeCompare(b.name)).forEach(c => cpuSelect.add(new Option(c.name, c.tdp)));

function calculate() {
    const gTdp = parseInt(gpuSelect.value);
    const cTdp = parseInt(cpuSelect.value);
    const total = gTdp + cTdp + 100; // System Overhead
    const recommended = Math.ceil((total * 1.5) / 50) * 50; 

    actualWatts.innerText = `${total}W`;
    recWatts.innerText = `${recommended}W`;
    amazonBtn.innerText = `Deploy ${recommended}W Unit →`;
    amazonBtn.href = `https://amazon.com{recommended}+watt+power+supply+80+plus+gold`;
}

gpuSelect.addEventListener('change', calculate);
cpuSelect.addEventListener('change', calculate);
calculate();
