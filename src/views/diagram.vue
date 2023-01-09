

<template>

    <div class="w-full h-auto border rounded mt-5 bg-white p-5">
        <h3 class="font-bold text-2xl font-rubik mb-3">Homiylar va talabalar soni</h3>
        <div class="flex items-center gap-4 mb-2">
            <p class="flex items-center gap-2 font-normal text-xs"><span
                    class="p-[4px] bg-blue-500 rounded-[50%]"></span>Homiylar</p>
            <p class="flex items-center gap-2 font-normal text-xs"><span
                    class="p-[4px] bg-red-500 rounded-[50%]"></span>Talabalar</p>
        </div>
        <canvas id="acquisitions"></canvas>
    </div>
</template>
  
<script>
import Chart from 'chart.js/auto'
export default {
    methods: {
        diagramShow() {
            (async function () {
            const data = [
                { month: 'yanvar', count: 16 },
                { month: 'fevral', count: 15 },
                { month: 'mart', count: 15 },
                { month: 'aprel', count: 16 },
                { month: 'may', count: 18 },
                { month: 'iyun', count: 23 },
                { month: 'iyul', count: 23 },
                { month: 'avgust', count: 22 },
                { month: 'sentabr', count: 22 },
                { month: 'oktyabr', count: 20 },
                { month: 'novabr', count: 22 },
                { month: 'dekabr', count: 23 },
            ];
            const data2 = [
                { count: 17 },
                { count: 17 },
                { count: 18 },
                { count: 20 },
                { count: 21 },
                { count: 22 },
                { count: 21 },
                { count: 19 },
                { count: 19 },
                { count: 22 },
                { count: 24 },
                { count: 26 },
            ];
            new Chart(
                document.getElementById('acquisitions'),
                {
                    type: 'line',
                    data: {
                        labels: data.map(row => row.month),
                        datasets: [
                            {
                                label: 'Homylar',
                                data: data.map(row => row.count)
                            },
                            {
                                label: 'Talabalar',
                                data: data2.map(row => row.count)
                            }
                        ]
                    },
                }
            );
        })();
        }
    },
    mounted() {
        this.diagramShow()
    },

}
</script>
  
  






<!-- 
<template>
    <div class="bg-white rounded-lg p-5 mt-6">
        <h2 class="font-bold text-2xl mb-2">Homiylar va talabalar soni</h2>
        <div class="flex items-center gap-6 mb-6">
            <p class="flex items-center gap-3">
                <span class="p-[5px] bg-dashDiagramColor1 rounded-[50px] h-0"></span>Homiylar
            </p>
            <p class="flex items-center gap-3">
                <span class="p-[5px] bg-dashDiagramColor2 rounded-[50px] h-0"></span>Talabalar
            </p>
        </div>
        <div>
            <div class="relative text-dashUZSColor font-normal text-xs max-h-86">
                <div class="flex items-center">
                    <p class="w-[3%] py-7">50 000</p>
                    <div class="w-full h-[1px] border-dashInputColor border border-dashed"></div>
                </div>
                <div class="flex items-center">
                    <p class="w-[3%] py-7">10 000</p>
                    <div class="w-full h-[1px] border-dashInputColor border border-dashed"></div>
                </div>
                <div class="flex items-center">
                    <p class="w-[3%] py-7">5000</p>
                    <div class="w-full h-[1px] border-dashInputColor border border-dashed"></div>
                </div>
                <div class="flex items-center">
                    <p class="w-[3%] py-7">1000</p>
                    <div class="w-full h-[1px] border-dashInputColor border border-dashed"></div>
                </div>
                <div class="flex items-center">
                    <p class="w-[3%] py-7">100</p>
                    <div class="w-full h-[1px] border-dashInputColor border border-dashed"></div>
                </div>
                <img class="absolute top-[30px] left-[-10px] w-full h-full 2xl:top-[50px] 3xl:top-[80px]"
                    src="../assets/Vector.svg" alt="vektor" />
            </div>
            <div class="w-[90%] mx-auto flex items-center justify-between font-normal text-xs text-dashUZSColor">
                <p v-for="month in months" :key="month.id">{{ month.name }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            months: [
                { id: 1, name: "Yanvar" },
                { id: 2, name: "Fevral" },
                { id: 3, name: "Mart" },
                { id: 4, name: "Aprel" },
                { id: 5, name: "May" },
                { id: 6, name: "Iyun" },
                { id: 7, name: "Iyul" },
                { id: 8, name: "Avgust" },
                { id: 9, name: "Sentabr" },
                { id: 10, name: "Oktabr" },
                { id: 11, name: "Noyabr" },
                { id: 12, name: "Dekabr" },
            ],
        };
    },
};
</script> -->




















