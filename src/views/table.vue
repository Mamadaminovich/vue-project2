<template>
    <table class="w-full table-auto border-spacing-y-3 border-separate rounded">
        <thead>
            <tr class="text-dashListHeaderColor mb-3 text-center uppercase font-medium text-xs tracking-[1.125px]">
                <th>#</th>
                <th class="text-start pl-7 w-3/12">f.i.sh.</th>
                <th>Tel.Raqami</th>
                <th>Homiylik summasi</th>
                <th>Sarflangan summa</th>
                <th>Sana</th>
                <th>Holati</th>
                <th>Amallar</th>
            </tr>
        </thead>
        <tbody>
            <tr class="font-bold px-3 py-5 text-sm text-center  border border-dashListBorderColor bg-white"
                v-for="list in sponsers" :key="list.id">
                <td class="px-3">{{ list.id }}</td>
                <td class="text-start pl-7 w-3/12">{{ list.name }}</td>
                <td class="font-normal">{{ list.phone }}</td>
                <td class="font-middle">{{ list.sponserMoney }} <span class="text-dashUZSColor">UZS</span></td>
                <td class="font-middle">{{ list.spend }} <span class="text-dashUZSColor">UZS</span></td>
                <td class="font-normal">{{ list.data }}</td>
                <td>{{ list.status }}</td>
                <td class="flex items-center justify-center px-3 py-5 cursor-pointer"><img src="../assets/eye.svg"
                alt="eye" /></td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    data() {
        return {
            sponsers: [
                {
                    id: 1,
                    name: "Alimov Abror Xabibullayevich",
                    phone: "+99899 973-72-60",
                    sponserMoney: "30 000 000",
                    spend: "0",
                    data: "15.01.2021",
                    status: "Yangi",
                },
                {
                    id: 2,
                    name: "Saimov Rustam Saimjonovich",
                    phone: "+99899 973-72-60",
                    sponserMoney: "1 000 000 ",
                    spend: "0",
                    data: "15.01.2021",
                    status: "Moderatsiyada",
                },
                {
                    id: 3,
                    name: "Sanginov Otabek Muratovich",
                    phone: "+99899 973-72-60",
                    sponserMoney: "5 000 000",
                    spend: "5 000 000",
                    data: "15.01.2021",
                    status: "Tasdiqlangan",
                },
                {
                    id: 4,
                    name: "Nazarov Sanjar Olimovich",
                    phone: "+99899 973-72-60",
                    sponserMoney: "7 000 000",
                    spend: "7 000 000",
                    data: "15.01.2021",
                    status: "Bekor qilingan",
                },
                {
                    id: 5,
                    name: "Ibragimov Sohib Mirfayozovich",
                    phone: "+99899 973-72-60",
                    sponserMoney: "10 000 000",
                    spend: "0",
                    data: "15.01.2021",
                    status: "Moderatsiyada",
                },
                {
                    id: 6,
                    name: "Ishmuhammedov Aziz Ishqobilovich",
                    phone: "+99899 973-72-60",
                    sponserMoney: "30 000 000",
                    spend: "1 000 000",
                    data: "15.01.2021",
                    status: "Bekor qilingan",
                },
                {
                    id: 7,
                    name: "Qosimov Furqat Xabibullayevich",
                    phone: "+99899 973-72-60",
                    sponserMoney: "50 000 000",
                    spend: "0",
                    data: "15.01.2021",
                    status: "Yangi",
                },
                {
                    id: 8,
                    name: "Ortiqov Abror Bahodirovich",
                    phone: "+99899 973-72-60",
                    sponserMoney: "70 000 000",
                    spend: "0",
                    data: "15.01.2021",
                    status: "Yangi",
                },
                {
                    id: 9,
                    name: "Rustamov Oybek  Tajiddinovich",
                    phone: "+99899 973-72-60",
                    sponserMoney: "50 000 000",
                    spend: "2 000 000",
                    data: "15.01.2021",
                    status: "Tasdiqlangan",
                },
                {
                    id: 10,
                    name: "Isfandiyorov  Iqbol Bobomirzayevich",
                    phone: "+99899 973-72-60",
                    sponserMoney: "1 000 000",
                    spend: "0",
                    data: "15.01.2021",
                    status: "Moderatsiyada",
                },
            ],
        };
    },
};
</script>
