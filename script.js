
        const GPUs = [
           // NVIDIA 50-Series (Newest)
            { name: "NVIDIA RTX 5090 (Blackwell)", tdp: 575 },
            { name: "NVIDIA RTX 5080", tdp: 360 },
            { name: "NVIDIA RTX 5070 Ti", tdp: 300 },
            { name: "NVIDIA RTX 5070", tdp: 250 },
            // NVIDIA 40-Series (Popular)
            { name: "NVIDIA RTX 4090", tdp: 450 },
            { name: "NVIDIA RTX 4080 Super", tdp: 320 },
            { name: "NVIDIA RTX 4070 Ti Super", tdp: 285 },
            { name: "NVIDIA RTX 4070 Super", tdp: 220 },
            { name: "NVIDIA RTX 4060 Ti", tdp: 160 },
            { name: "NVIDIA RTX 4060", tdp: 115 },
            // NVIDIA 30-Series (Still widely used)
            { name: "NVIDIA RTX 3090 Ti", tdp: 450 },
            { name: "NVIDIA RTX 3080 10GB", tdp: 320 },
            { name: "NVIDIA RTX 3070", tdp: 220 },
            { name: "NVIDIA RTX 3060", tdp: 170 },
            // AMD 9000 & 7000 Series
            { name: "AMD Radeon RX 9070 XT", tdp: 260 },
            { name: "AMD Radeon RX 9070", tdp: 220 },
            { name: "AMD Radeon RX 7900 XTX", tdp: 355 },
            { name: "AMD Radeon RX 7900 XT", tdp: 315 },
            { name: "AMD Radeon RX 7800 XT", tdp: 263 },
            { name: "AMD Radeon RX 7700 XT", tdp: 245 },
            { name: "AMD Radeon RX 7600", tdp: 165 },
            { name: "AMD Radeon RX 6950 XT", tdp: 335 },
            { name: "AMD Radeon RX 6700 XT", tdp: 230 },
            // Intel
            { name: "Intel Arc B580 (Battlemage)", tdp: 190 },
            { name: "Intel Arc A770", tdp: 225 }
        ];

        const CPUs = [
            { name: "Intel Core Ultra 9 285K", tdp: 250 },
            { name: "Intel Core Ultra 7 265K", tdp: 250 },
            { name: "Intel Core Ultra 5 245K", tdp: 159 },
            { name: "Intel Core i9-14900K/KS", tdp: 253 },
            { name: "Intel Core i7-14700K", tdp: 253 },
            { name: "Intel Core i5-14600K", tdp: 181 },
            { name: "Intel Core i9-13900K", tdp: 253 },
            { name: "Intel Core i7-12700K", tdp: 190 },
            { name: "Intel Core i5-12400F", tdp: 65 },
            // AMD Ryzen 9000 & 7000 Series
            { name: "AMD Ryzen 9 9950X3D", tdp: 170 },
            { name: "AMD Ryzen 9 9950X", tdp: 170 },
            { name: "AMD Ryzen 7 9800X3D", tdp: 120 },
            { name: "AMD Ryzen 5 9600X", tdp: 65 },
            { name: "AMD Ryzen 9 7950X3D", tdp: 120 },
            { name: "AMD Ryzen 7 7800X3D", tdp: 120 },
            { name: "AMD Ryzen 5 7600X", tdp: 105 },
            // AMD Ryzen 5000 (Legacy/Budget King)
            { name: "AMD Ryzen 9 5950X", tdp: 105 },
            { name: "AMD Ryzen 7 5800X3D", tdp: 105 },
            { name: "AMD Ryzen 5 5600X", tdp: 65 }
        ];

        const gpuSelect = document.getElementById('gpuSelect');
        const cpuSelect = document.getElementById('cpuSelect');
        const actualWatts = document.getElementById('actualWatts');
        const recWatts = document.getElementById('recWatts');
        const amazonBtn = document.getElementById('amazonBtn');

        // Populate dropdowns
        GPUs.forEach(g => gpuSelect.add(new Option(g.name, g.tdp)));
        CPUs.forEach(c => cpuSelect.add(new Option(c.name, c.tdp)));

        function calculate() {
            const gTdp = parseInt(gpuSelect.value);
            const cTdp = parseInt(cpuSelect.value);
            const systemOverhead = 100; // Fans, Mobo, RGB
            
            const total = gTdp + cTdp + systemOverhead;
            const recommended = Math.ceil((total * 1.5) / 50) * 50; // 50% Safety Overhead

            actualWatts.innerText = `${total}W`;
            recWatts.innerText = `${recommended}W`;
            
            amazonBtn.innerText = `Deploy ${recommended}W Unit →`;
            // REPLACE 'YOURTAG-20' with your actual Amazon Affiliate ID
            amazonBtn.href = `https://www.amazon.com/s?k=${recommended}+watt+power+supply+80+plus+gold&tag=YOURTAG-20`;
        }

        gpuSelect.addEventListener('change', calculate);
        cpuSelect.addEventListener('change', calculate);

        // Initial Calc
        calculate();
