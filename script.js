/**
 * PSU REALITY CHECKER // 2026 CORE ENGINE
 * FULL HARDWARE DATABASE: 2011 - 2026
 */

const GPUs = [
    // --- NEXT GEN / 2026 FLAGSHIPS ---
    { name: "NVIDIA GeForce RTX 5090 (Blackwell)", tdp: 575 },
    { name: "NVIDIA GeForce RTX 5080", tdp: 360 },
    { name: "NVIDIA GeForce RTX 5070 Ti", tdp: 300 },
    { name: "NVIDIA GeForce RTX 5070", tdp: 250 },
    { name: "NVIDIA GeForce RTX 5060 Ti 16GB", tdp: 175 },
    { name: "NVIDIA GeForce RTX 5060 Ti 8GB", tdp: 175 },
    { name: "NVIDIA GeForce RTX 5060", tdp: 140 },
    { name: "NVIDIA GeForce RTX 5050", tdp: 100 },

    // --- NVIDIA 40-SERIES ---
    { name: "NVIDIA GeForce RTX 4090", tdp: 450 },
    { name: "NVIDIA GeForce RTX 4080 Super", tdp: 320 },
    { name: "NVIDIA GeForce RTX 4080", tdp: 320 },
    { name: "NVIDIA GeForce RTX 4070 Ti Super", tdp: 285 },
    { name: "NVIDIA GeForce RTX 4070 Ti", tdp: 285 },
    { name: "NVIDIA GeForce RTX 4070 Super", tdp: 220 },
    { name: "NVIDIA GeForce RTX 4070", tdp: 200 },
    { name: "NVIDIA GeForce RTX 4060 Ti", tdp: 160 },
    { name: "NVIDIA GeForce RTX 4060", tdp: 115 },

    // --- NVIDIA 30-SERIES ---
    { name: "NVIDIA GeForce RTX 3090 Ti", tdp: 450 },
    { name: "NVIDIA GeForce RTX 3090", tdp: 350 },
    { name: "NVIDIA GeForce RTX 3080 Ti", tdp: 350 },
    { name: "NVIDIA GeForce RTX 3080 12GB", tdp: 350 },
    { name: "NVIDIA GeForce RTX 3080 10GB", tdp: 320 },
    { name: "NVIDIA GeForce RTX 3070 Ti", tdp: 290 },
    { name: "NVIDIA GeForce RTX 3070", tdp: 220 },
    { name: "NVIDIA GeForce RTX 3060 Ti", tdp: 200 },
    { name: "NVIDIA GeForce RTX 3060 12GB", tdp: 170 },
    { name: "NVIDIA GeForce RTX 3060 8GB", tdp: 170 },
    { name: "NVIDIA GeForce RTX 3050", tdp: 130 },

    // --- NVIDIA 20-SERIES / TITANS ---
    { name: "NVIDIA Titan RTX", tdp: 280 },
    { name: "NVIDIA Titan V", tdp: 250 },
    { name: "NVIDIA Titan Xp", tdp: 250 },
    { name: "NVIDIA GeForce RTX 2080 Ti", tdp: 250 },
    { name: "NVIDIA GeForce RTX 2080 Super", tdp: 250 },
    { name: "NVIDIA GeForce RTX 2080", tdp: 215 },
    { name: "NVIDIA GeForce RTX 2070 Super", tdp: 215 },
    { name: "NVIDIA GeForce RTX 2070", tdp: 175 },
    { name: "NVIDIA GeForce RTX 2060 Super", tdp: 175 },
    { name: "NVIDIA GeForce RTX 2060", tdp: 160 },

    // --- NVIDIA LEGACY (GTX 10 / 9 / 7 / 6 / 5) ---
    { name: "NVIDIA GeForce GTX 1080 Ti", tdp: 250 },
    { name: "NVIDIA GeForce GTX 1080", tdp: 180 },
    { name: "NVIDIA GeForce GTX 1070 Ti", tdp: 180 },
    { name: "NVIDIA GeForce GTX 1070", tdp: 150 },
    { name: "NVIDIA GeForce GTX 1060 6GB", tdp: 120 },
    { name: "NVIDIA GeForce GTX 1660 Ti", tdp: 120 },
    { name: "NVIDIA GeForce GTX 1660 Super", tdp: 125 },
    { name: "NVIDIA GeForce GTX 980 Ti", tdp: 250 },
    { name: "NVIDIA GeForce GTX 980", tdp: 165 },
    { name: "NVIDIA GeForce GTX 970", tdp: 145 },
    { name: "NVIDIA GeForce GTX 780 Ti", tdp: 250 },
    { name: "NVIDIA GeForce GTX 690 (Dual GPU)", tdp: 300 },
    { name: "NVIDIA GeForce GTX 590 (Dual GPU)", tdp: 365 },
    { name: "NVIDIA GeForce GTX 580", tdp: 244 },

    // --- AMD RADEON (MODERN) ---
    { name: "AMD Radeon RX 7900 XTX", tdp: 355 },
    { name: "AMD Radeon RX 9070 XT", tdp: 260 },
     { name: "AMD Radeon RX 7900 XT", tdp: 315 },
    { name: "AMD Radeon RX 9070", tdp: 220 },
    { name: "AMD Radeon RX 7900 XT", tdp: 315 },
    { name: "AMD Radeon RX 7900 GRE", tdp: 260 },
    { name: "AMD Radeon RX 6950 XT", tdp: 335 },
    { name: "AMD Radeon RX 6900 XT", tdp: 300 },
    { name: "AMD Radeon RX 6800 XT", tdp: 300 },
     { name: "AMD Radeon RX 6750 XT", tdp: 250 },
    { name: "AMD Radeon RX 7800 XT", tdp: 263 },
    { name: "AMD Radeon RX 7700 XT", tdp: 245 },
     { name: "AMD Radeon RX 6800", tdp: 250 },
    { name: "AMD Radeon RX 6800", tdp: 250 },
     { name: "AMD Radeon RX 6700 XT", tdp: 230 },
    { name: "AMD Radeon RX 7600 XT", tdp: 190 },
    { name: "AMD Radeon RX 7600", tdp: 165 },
    { name: "AMD Radeon RX 6650 XT", tdp: 180 },
    { name: "AMD Radeon RX 6600 XT", tdp: 160 },
    { name: "AMD Radeon RX 6600", tdp: 132 },
    { name: "AMD Radeon RX 6500 XT", tdp: 107 },

    // --- AMD RADEON LEGACY ---
    { name: "AMD Radeon VII", tdp: 300 },
    { name: "AMD Radeon RX Vega 64", tdp: 295 },
    { name: "AMD Radeon RX Vega 56", tdp: 210 },
    { name: "AMD Radeon RX 5700 XT", tdp: 225 },
    { name: "AMD Radeon R9 295X2", tdp: 500 },
    { name: "AMD Radeon R9 Fury X", tdp: 275 },
    { name: "AMD Radeon RX 590", tdp: 175 },
    { name: "AMD Radeon RX 580", tdp: 185 },
    { name: "AMD Radeon RX 480", tdp: 150 },
    { name: "AMD Radeon HD 7990", tdp: 375 },
    { name: "AMD Radeon HD 7970", tdp: 250 },

    // --- INTEL ARC ---
    { name: "Intel Arc B580 (Battlemage)", tdp: 190 },
    { name: "Intel Arc B570", tdp: 150 },
    { name: "Intel Arc A770", tdp: 225 },
    { name: "Intel Arc A750", tdp: 225 },
    { name: "Intel Arc A580", tdp: 175 },
    { name: "Intel Arc A380", tdp: 75 }
];

const CPUs = [
    // --- AMD RYZEN 9000 SERIES (ZEN 5) ---
    { name: "AMD Ryzen 9 9950X3D", tdp: 230 },
    { name: "AMD Ryzen 9 9950X", tdp: 230 },
    { name: "AMD Ryzen 9 9900X3D", tdp: 162 },
    { name: "AMD Ryzen 9 9900X", tdp: 162 },
    { name: "AMD Ryzen 7 9800X3D", tdp: 162 },
    { name: "AMD Ryzen 7 9700X", tdp: 88 },
    { name: "AMD Ryzen 5 9600X", tdp: 88 },

    // --- AMD RYZEN 7000 / 8000 SERIES ---
    { name: "AMD Ryzen 9 7950X3D", tdp: 162 },
    { name: "AMD Ryzen 9 7950X", tdp: 230 },
    { name: "AMD Ryzen 7 7800X3D", tdp: 162 },
    { name: "AMD Ryzen 7 7700X", tdp: 142 },
    { name: "AMD Ryzen 7 8700G", tdp: 88 },
    { name: "AMD Ryzen 5 7600X", tdp: 142 },
    { name: "AMD Ryzen 5 7500F", tdp: 88 },

    // --- AMD RYZEN 5000 SERIES (ZEN 3) ---
    { name: "AMD Ryzen 9 5950X", tdp: 142 },
    { name: "AMD Ryzen 9 5900X", tdp: 142 },
    { name: "AMD Ryzen 7 5800X3D", tdp: 142 },
    { name: "AMD Ryzen 7 5800X", tdp: 142 },
    { name: "AMD Ryzen 7 5700X", tdp: 88 },
    { name: "AMD Ryzen 5 5600X", tdp: 88 },
    { name: "AMD Ryzen 5 5600G", tdp: 88 },
    { name: "AMD Ryzen 5 5500", tdp: 88 },

    // --- AMD RYZEN 1000 / 2000 / 3000 ---
    { name: "AMD Ryzen 9 3950X", tdp: 142 },
    { name: "AMD Ryzen 9 3900X", tdp: 142 },
    { name: "AMD Ryzen 7 3700X", tdp: 88 },
    { name: "AMD Ryzen 5 3600", tdp: 65 },
    { name: "AMD Ryzen 7 2700X", tdp: 142 },
    { name: "AMD Ryzen 5 2600X", tdp: 95 },
    { name: "AMD Ryzen 7 1800X", tdp: 95 },


    // --- INTEL 14th GEN (RAPTOR LAKE REFRESH) ---
    { name: "Intel Core i9-14900KS", tdp: 253 },
    { name: "Intel Core i9-14900K", tdp: 253 },
    { name: "Intel Core i9-14900KF", tdp: 253 },
    { name: "Intel Core i9-14900", tdp: 219 },
    { name: "Intel Core i7-14700K", tdp: 253 },
    { name: "Intel Core i7-14700KF", tdp: 253 },
    { name: "Intel Core i7-14700", tdp: 219 },
    { name: "Intel Core i5-14600K", tdp: 181 },
    { name: "Intel Core i5-14600KF", tdp: 181 },
    { name: "Intel Core i5-14400F", tdp: 148 },
      { name: "Intel Core i3-14100", tdp: 110 },
    { name: "Intel Core i3-14100F", tdp: 110 },

    // --- INTEL 13th GEN (RAPTOR LAKE) ---
    { name: "Intel Core i9-13900KS", tdp: 253 },
    { name: "Intel Core i9-13900K", tdp: 253 },
    { name: "Intel Core i9-13900KF", tdp: 253 },
    { name: "Intel Core i7-13700K", tdp: 253 },
    { name: "Intel Core i7-13700KF", tdp: 253 },
    { name: "Intel Core i5-13600K", tdp: 181 },
    { name: "Intel Core i5-13600KF", tdp: 181 },
    { name: "Intel Core i5-13400F", tdp: 148 },
        { name: "Intel Core i3-13100", tdp: 89 },
    { name: "Intel Core i3-13100F", tdp: 89 },

    // --- INTEL 12th GEN (ALDER LAKE) ---
    { name: "Intel Core i9-12900KS", tdp: 241 },
    { name: "Intel Core i9-12900K", tdp: 241 },
    { name: "Intel Core i9-12900KF", tdp: 241 },
    { name: "Intel Core i7-12700K", tdp: 190 },
    { name: "Intel Core i7-12700KF", tdp: 190 },
    { name: "Intel Core i5-12600K", tdp: 150 },
    { name: "Intel Core i5-12400F", tdp: 117 },

    // --- INTEL 10th & 11th GEN (COMET/ROCKET LAKE) ---
    { name: "Intel Core i9-11900K", tdp: 251 },
    { name: "Intel Core i9-11900KF", tdp: 251 },
    { name: "Intel Core i7-11700K", tdp: 251 },
    { name: "Intel Core i5-11600K", tdp: 190 },
    { name: "Intel Core i5-11400F", tdp: 154 },
    { name: "Intel Core i9-10900K", tdp: 250 },
    { name: "Intel Core i9-10850K", tdp: 250 },
    { name: "Intel Core i7-10700K", tdp: 229 },
    { name: "Intel Core i5-10600K", tdp: 182 },
    { name: "Intel Core i5-10400F", tdp: 134 },

    // --- INTEL 8th & 9th GEN (COFFEE LAKE) ---
    { name: "Intel Core i9-9900KS", tdp: 250 },
    { name: "Intel Core i9-9900K", tdp: 210 },
    { name: "Intel Core i7-9700K", tdp: 190 },
    { name: "Intel Core i5-9600K", tdp: 150 },
    { name: "Intel Core i3-9100F", tdp: 65 },
    { name: "Intel Core i7-8700K", tdp: 145 },
    { name: "Intel Core i7-8700", tdp: 120 },
    { name: "Intel Core i5-8600K", tdp: 130 },
    { name: "Intel Core i5-8400", tdp: 65 },

    // --- INTEL 6th & 7th GEN (SKYLAKE/KABY LAKE) ---
    { name: "Intel Core i7-7700K", tdp: 110 },
    { name: "Intel Core i7-7700", tdp: 80 },
    { name: "Intel Core i5-7600K", tdp: 100 },
    { name: "Intel Core i7-6700K", tdp: 100 },
    { name: "Intel Core i7-6700", tdp: 80 },
    { name: "Intel Core i5-6600K", tdp: 95 },

    // --- INTEL 4th GEN (HASWELL) ---
    { name: "Intel Core i7-4790K (Devil's Canyon)", tdp: 120 },
    { name: "Intel Core i7-4770K", tdp: 110 },
    { name: "Intel Core i5-4690K", tdp: 100 },
    { name: "Intel Core i5-4460", tdp: 84 },

    // --- INTEL 2nd & 3rd GEN (SANDY/IVY BRIDGE) ---
    { name: "Intel Core i7-3770K", tdp: 95 },
    { name: "Intel Core i5-3570K", tdp: 95 },
    { name: "Intel Core i7-2700K", tdp: 115 },
    { name: "Intel Core i7-2600K", tdp: 115 },
    { name: "Intel Core i5-2500K", tdp: 115 }
];

const gpuSelect = document.getElementById('gpuSelect');
const cpuSelect = document.getElementById('cpuSelect');
const actualWatts = document.getElementById('actualWatts');
const recWatts = document.getElementById('recWatts');
const amazonBtn = document.getElementById('amazonBtn');

function init() {
    // Fill GPU Dropdown
    GPUs.forEach(item => {
        let opt = document.createElement('option');
        opt.value = item.tdp;
        opt.innerHTML = item.name;
        gpuSelect.appendChild(opt);
    });

    // Fill CPU Dropdown
    CPUs.forEach(item => {
        let opt = document.createElement('option');
        opt.value = item.tdp;
        opt.innerHTML = item.name;
        cpuSelect.appendChild(opt);
    });
    
    calculate();
}

function calculate() {
    const gpuPower = parseInt(gpuSelect.value) || 0;
    const cpuPower = parseInt(cpuSelect.value) || 0;
    const fixedOverhead = 100; 

    const totalDraw = gpuPower + cpuPower + fixedOverhead;
    let recommendedTotal = Math.ceil((totalDraw * 1.5) / 50) * 50;

    actualWatts.innerText = `${totalDraw}W`;
    recWatts.innerText = `${recommendedTotal}W`;

    amazonBtn.innerText = `Deploy ${recommendedTotal}W Unit →`;
    amazonBtn.href = `https://amazon.com{recommendedTotal}+watt+power+supply+80+plus+gold&tag=YOURTAG-20`;
}

gpuSelect.addEventListener('change', calculate);
cpuSelect.addEventListener('change', calculate);

// Start the engine
init();





