<template>
    <header class="font-rubik">
        <div class="flex items-center justify-between py-6 container mx-auto">
            <img src="../assets/dash-logo.svg" alt="dash-logo" />
            <div class="flex items-center gap-8">
                <button
                    class="flex items-center justify-between gap-5 bg-dashBtnColor px-3 py-[8px] rounded-md font-bold">
                    Shohrux
                    <img class="mr-[-5px]" src="../assets/user-logo.svg" alt="user-logo" />
                </button>
                <a href="#"><img src="../assets/log-out.svg" alt="log-out" /></a>
            </div>
        </div>
        <div class="bg-slate-50/70">
            <div class="container mx-auto flex items-center justify-between py-6">
                <div class="flex items-center justify-center border border-dashInputBorderColor rounded-md">
                    <button @click="dash()"
                        class="uppercase font-medium text-xs py-2.5 px-6 tracking-widest text-blue-500"
                        v-bind:class="{'bg-dashBtnFocusedColor text-white/100': isActive}">
                        Dashboard
                    </button>
                    <button @click="sponser()"
                        class="uppercase font-medium text-xs py-2.5 px-6 tracking-widest text-blue-500" 
                        v-bind:class="{ 'bg-dashBtnFocusedColor text-white/100': isActive == false }">
                        Homiylar
                    </button>
                    <button class="text-blue-500 uppercase font-medium text-xs py-2.5 px-6 tracking-widest">
                        Talabalar
                    </button>
                </div>
                <form class="flex items-center gap-7">
                    <div class="flex items-center gap-1 bg-dashInputColor rounded-md px-3">
                        <img src="../assets/search.svg" alt="search" />
                        <input class="bg-transparent w-full h-full py-3 outline-none text-xs" type="text"
                            placeholder="Izlash" />
                    </div>
                    <button class="bg-dashfilterBgColor py-[8px] flex items-center gap-2 rounded-md px-5">
                        <img src="../assets/filter.svg" alt="filter" /> Filter
                    </button>
                </form>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        dash() {
            this.$router.push('/dashboard')
            this.isActive = true;
        },
        sponser() {
            this.$router.push('/sponser')
            this.isActive = false;
        }
    },
}
</script>







