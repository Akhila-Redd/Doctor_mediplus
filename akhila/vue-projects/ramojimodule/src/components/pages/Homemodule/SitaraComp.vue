<template>
    <div class="container">
      <div class="row">
        <div :class="selectedCard ? 'col-lg-4' : 'col-lg-8'">
          <div v-if="!selectedCard">
            <div class="row">
              <div v-for="item in profiles" :key="item.name" class="col-lg-4 mb-3">
                <CardsComponent
                  :titleName="item.name"
                  :img="item.img"
                  :bgColor="item.bg"
                  style="width: 252px; height: 150px;color: #ffffff;border: none;"
                  @click="selectCard(item)"
                />
              </div>
            </div>
          </div>
          <div v-else>
            <div class="my-2">
              <div v-for="item in profiles" :key="item.name" class="col-lg-8 mb-3">
                <CardsComponent
                  :titleName="item.name"
                  :img="item.img"
                  :bgColor="item.bg"
                  style="width: 252px;height: 150px;color: #ffffff;border: none;"
                  @click="selectCard(item)"
                />
              </div>
            </div>
          </div>
        </div>
        <div :class="!selectedCard ? 'col-lg-4' : 'col-lg-8'" class="d-flex justify-content-between">
          <div v-if="selectedCard && selectedCard.name === 'SOPs'">
            <SopsComp @go-to-home="goToHomeTab" />
          </div>
          <div v-else-if="selectedCard && selectedCard.name === 'Form'">
            <FormsComp @go-to-home="goToHomeTab" />
          </div>
          <div v-else-if="selectedCard">
            <h3>{{ selectedCard.name }}</h3>
            <img :src="selectedCard.img" alt="Selected Image" />
            <p>Details about {{ selectedCard.name }}.</p>
          </div>
          <div v-if="showBirthday" class="main">
            <BirthDay />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CardsComponent from "@/components/ReuseableComponents/CardsComponent.vue";
  import SopsComp from "../StaticComponents/SopsComp.vue";
  import FormsComp from "../StaticComponents/FormsComp.vue";
  import BirthDay from "../StaticComponents/BirthDay.vue";
  
  export default {
    components: {
      CardsComponent,
      SopsComp,
      FormsComp,
      BirthDay,
    },
    data() {
      return {
        profiles: [
          { name: "Organization Chart", img: require("@/assets/organization.png"), bg: "#4F7580" },
          { name: "About Us", img: require("@/assets/aboutus.png"), bg: "#A9A9A9" },
          { name: "Policies", img: require("@/assets/staff.png"), bg: "#7A865B" },
          { name: "Staff Events", img: require("@/assets/aboutus.png"), bg: "#8196B2" },
          { name: "Awards", img: require("@/assets/award.png"), bg: "#9E87BC" },
          { name: "Induction", img: require("@/assets/induction.png"), bg: "#64B49A" },
          { name: "Form", img: require("@/assets/staff.png"), bg: "#527B47" },
          { name: "Cafeteria", img: require("@/assets/cafeteria.png"), bg: "#AF737D" },
          { name: "SOPs", img: require("@/assets/staff.png"), bg: "#7B6347" },
        ],
        selectedCard: null,
        showBirthday: true,
      };
    },
    methods: {
      selectCard(item) {
        this.selectedCard = item;
        this.showBirthday = false;
      },
      goToHomeTab() {
        this.selectedCard = null;
        this.showBirthday = true;
      },
    },
  };
  </script>
  