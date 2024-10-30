<template>
    <div class="container mt-4">

        <!-- <ul class="nav nav-tabs">
            <li class="nav-items" v-for="(tab, index) in tabs" :key="index" style="display: flex;justify-content: center;align-items: center;">
                <a class="nav-links" :class="{ active: selectedTab === index }" href="#"
                    @click.prevent="selectTab(index)">
                    <p class="btn border border-2 me-3 ">
                        <img v-if="tab.image" :src="tab.image" class="tab-icon me-2" />
                        {{ tab.name }}
                    </p>
                </a>
            </li>
        </ul> -->+

        <ul class="nav nav-tabs">
            <li class="nav-items" v-for="(tab, index) in tabs" :key="index"
                style="display: flex;justify-content: center;align-items: center;">
                <a class="nav-links" :class="{ active: selectedTab === index }" href="#"
                    @click.prevent="selectTab(index, tab.image)">
                    <p class="btn border border-2 me-3 ">
                        <img v-if="tab.image" :src="tab.image" class="tab-icon me-2" />
                        {{ tab.name }}
                    </p>
                </a>
            </li>
        </ul>
        <div class="tab-content mt-3">
            <div v-for="(tab, index) in tabs" :key="index"
                :class="{ show: selectedTab === index, active: selectedTab === index }">
                <div v-if="selectedTab === index && tab.name === ''">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="row">
                                <div v-for="(item, itemIndex) in profiles.slice(0, 3)" :key="itemIndex"
                                    class="col-lg-5 p-0 mb-3">
                                    <CardsComponent :titleName="item.name" :img="item.img" @click="selectCard(item)"
                                        :bgColor="item.bg" class="cards " />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4" v-if="showBirthday">
                            <BirthDay />
                        </div>
                    </div>
                </div>
                <div v-if="selectedTab === index && tab.name === 'sithara'">
                    <div class="row">
                        <div :class="selectedCard ? 'col-lg-4' : 'col-lg-8'">
                            <div v-if="!selectedCard">
                                <div class="row">
                                    <div v-for="(item, index) in profiles" :key="index" class="col-lg-4 mb-3">
                                        <CardsComponent :titleName="item.name" :img="item.img" @click="selectCard(item)"
                                            :bgColor="item.bg" style="color: white;" />
                                        <!-- this.sitara=true -->
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <div v-for="(item, index) in profiles" :key="index" class="my-2">
                                    <CardsComponent :titleName="item.name" :img="item.img" @click="selectCard(item)"
                                        :bgColor="item.bg" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div v-if="selectedCard && selectedCard.name === 'SOPs'">
                                <SopsComp />
                            </div>
                            <div v-if="selectedCard && selectedCard.name === 'Form'">
                                <FormsComp />
                            </div>
                            <div v-if="selectedCard">
                                <h3>{{ selectedCard.name }}</h3>
                                <img :src="selectedCard.img" alt="Selected Image" />
                                <p>Details about {{ selectedCard.name }}.</p>
                            </div>

                            <div v-if="showBirthday">
                                <BirthDay />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BirthDay from '../pages/HomeModule/BirthDay.vue';
import FormsComp from '../pages/HomeModule/FormsComp.vue';
import SopsComp from '../pages/HomeModule/SopsComp.vue';
import CardsComponent from './CardsComponent.vue';

export default {
    components: {
        CardsComponent,
        BirthDay,
        SopsComp,
        FormsComp
    },
    data() {
        return {
            profiles: [
                { name: "Organization Chart", img: require("@/assets/organization.png"), bg: "#4F7580" },
                { name: "About Us", img: require("@/assets/aboutus.png"), bg: "#A9A9A9" },
                { name: "Policies", img: require("@/assets/staff.png"), bg: " #7A865B" },
                { name: "Staff Events", img: require("@/assets/aboutus.png"), bg: "#8196B2" },
                { name: "Awards", img: require("@/assets/award.png"), bg: "#9E87BC" },
                { name: "Induction", img: require("@/assets/induction.png"), bg: "#64B49A" },
                { name: "Form", img: require("@/assets/staff.png"), bg: "#527B47" },
                { name: "Cafeteria", img: require("@/assets/cafeteria.png"), bg: "#AF737D" },
                { name: "SOPs", img: require("@/assets/staff.png"), bg: "#7B6347" },
            ],
            tabs: [
                { name: '', image: require("@/assets/Home.svg"), img: require("@/assets/facebook.svg") },
                { name: 'sithara', image: require("@/assets/hotel.png") },
                { name: 'tara', image: require("@/assets/hotel.png") },
                { name: 'shantiniketan', image: require("@/assets/hotel.png") },
                { name: 'Sahara', image: require("@/assets/hotel.png") },
                { name: 'Vasundhara Villa', image: require("@/assets/hotel.png") }
            ],
            selectedTab: 0,
            selectedCard: null,
            showBirthday: true,
        };
    },
    methods: {
        selectTab(index) {
            this.selectedTab = index;
            this.selectedCard = null;
            this.showBirthday = true;
        },
        selectCard(card) {
            this.selectedCard = card;
            this.showBirthday = false;
        },
    },
};
</script>

<style scoped>
.cards {
    width: 253px;
    cursor: pointer;
    border: none !important;
}

.titles {
    color: white !important;
}
</style>
<!-- this is tabscomponent -->