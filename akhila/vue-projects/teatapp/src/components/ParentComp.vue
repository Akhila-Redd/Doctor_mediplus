<template>
    <div>
      <h1>Tab Example</h1>
      <ul class="nav nav-tabs">
        <li v-for="(tab, index) in tabs" :key="index">
          <a href="#" @click.prevent="selectTab(index)">
            {{ tab.name }}
          </a>
        </li>
      </ul>
      <ChildComp :selectedTab="selectedTab" />
    </div>
  </template>
  
  <script>
  import ChildComp from './ChildComp.vue';
  
  export default {
    components: {
      ChildComp
    },
    data() {
      return {
        tabs: [
          { name: 'Tab 1', image: require('@/assets/image1.svg') },
          { name: 'Tab 2', image: require('@/assets/image2.svg') },
          { name: 'Tab 3', image: require('@/assets/image3.png') },
        ],
        selectedTab: null,
      };
    },
    methods: {
      selectTab(index) {
        this.selectedTab = this.tabs[index].image;
      },
    },
  };
  </script>

  