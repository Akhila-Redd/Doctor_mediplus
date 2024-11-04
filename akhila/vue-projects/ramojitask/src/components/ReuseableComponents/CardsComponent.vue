  <template>
    <div :style="{ backgroundColor: bgColor }" class="card cards m-4 p-3" style="height:193px;">
      <h5 class="card-title titles  p-2 text-start" style="font-size: 20px;font-weight: 700;">
        {{ titleName }}
      </h5>
      <div v-show="img"
      class="card-body m-0 text-end">
         <img :src="img" alt="hai">
      </div>
      <p class="card-text texts text-wrap">
        {{ text }}
      </p>
      <div v-show= " footer" class="card-footer footers border-0 justify-content-end p-0 mt-3 bg-0">
        <p>{{ footer }}</p>
        <i class="ri-arrow-right-line ms-1"></i> 
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        titleName: {
        type: String,
        required: true
      },
      img: {
        type: String,
        default: '',
      },
      text: {
        type: String,
        default: '',
      },
      footer: {
        type: String,
        default: '',
      },
      bgColor: {
        type: String,
        default: 'white',
      }
    }
  };
  </script>
  
  <style scoped>
  .texts{
    text-align:left;
   color: #797979;

  }
  .cards{
    height:193px;
    font-weight: 30px;
    border: 2px solid #000000;
  }
  .card-footer {
    display: flex;
    background-color: transparent;
  }
 
  </style>
  