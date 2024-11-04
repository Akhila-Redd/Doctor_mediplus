
 <template>
  <div class="container mt-4">
   
    <ul class="nav nav-tabs" style="border-bottom: none;">
      <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
        <a
          class="nav-link border rounded me-3 mb-3"
          :class="{ active: selectedTab === index }"
          href="#"
          @click.prevent="selectTab(index)" style="font-size: 20px; font-weight: 700; color: #616161;" 
        >
          {{ tab.name }}
        </a>
      </li>
    </ul>
    <h4 class="text-start">
      <img 
        src="@/assets/left.svg" 
        alt="Back" 
        @click="goToHomeTab" 
        class="me-2" 
        style="cursor: pointer;" 
      /> 
      Form
    </h4>
    <div class="tables">
      <div class="content">
        <p>{{ tabs[selectedTab]?.content }}</p>
      </div>
      <div class="print">
        <p class="btn btn-2 border border-2">
          <span><img src="@/assets/print.svg" alt="print-image" class="me-2"></span>Print
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { name: 'Sick Leave', content: 'This is the Sick Leave content!' },
        { name: 'Vacation Leave', content: 'This is the Vacation Leave content.' },
        { name: 'Casual Leave', content: 'This is the Casual Leave content.' }
      ],
      selectedTab: 0
    };
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index;
    },
    goToHomeTab() {
      this.$emit('go-to-home'); // Emit the event to notify the parent component
    },
  }
};
</script>

<style>
.tables {
  width: 822px;
  height: 674px;
  border: 1px solid rgb(37, 32, 32);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.print {
  display: flex;
  justify-content: flex-end;
}

.nav-tabs .nav-link {
  background-color: transparent; 
  color: black; 
  border: 1px solid transparent;
}

.nav-tabs .nav-link.active {
  background-color: green;
  color: white; 
  border: 1px solid green; 
}
</style>
