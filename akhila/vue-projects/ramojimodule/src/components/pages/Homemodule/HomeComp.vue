<template>
    <div>
        <div class="row">
            <div class="col-lg-8">
                <div class="row">
                    <div v-for="item in profiles" :key="item.name" class="col-lg-5 mb-3">
                        <CardsComponent 
                            :titleName="item.name" 
                            :img="item.img" 
                            :bgColor="item.bg"
                            style="width:310px; height: 150px; color: #ffffff; border: none;" 
                            @click="selectCard(item)" 
                        />
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <BirthDay />
            </div>
        </div>
    </div>
</template>

<script>
import CardsComponent from '@/components/ReuseableComponents/CardsComponent.vue';
import BirthDay from '../StaticComponents/BirthDay.vue';

export default {
    components: {
        CardsComponent,
        BirthDay
    },
    data() {
        return {
            profiles: [
                {
                    name: "Organization Chart",
                    img: require("@/assets/organization.png"),
                    bg: "#4F7580",
                },
                {
                    name: "About Us",
                    img: require("@/assets/aboutus.png"),
                    bg: "#A9A9A9",
                },
                {
                    name: "Policies",
                    img: require("@/assets/staff.png"),
                    bg: "#7A865B"
                },
            ]
        }
    },
    methods: {
        selectCard(item) {
            console.log("Selected Card:", item); // Handle the selected card
        }
    }
}
</script>
