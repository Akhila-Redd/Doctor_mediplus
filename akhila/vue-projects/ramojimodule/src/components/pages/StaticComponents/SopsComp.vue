<template>
    <div class="container">
      <h5 class="text-start">
        <img 
          src="@/assets/left.svg" 
          alt="Back" 
          @click="goToHomeTab" 
          class="me-2" 
          style="cursor: pointer;" 
        />
        SOP's
      </h5>
      <div class="table-responsive border border-2 border-sop rounded-4 shadow-lg p-2">
        <table class="table table-sm">
          <thead class="borders">
            <tr class="bg-danger">
              <th class="text-start p-3">File name</th>
              <th class="text-end p-3">Download</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(file, index) in files" :key="index" class="table-row">
              <td class="text-start border-0 p-2">{{ file }}</td>
              <td class="text-end border-0 p-2">
                <img src="@/assets/download.png" alt="Download" class="ms-3" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        files: [
          'File_1.pdf',
          'File_2.pdf',
          'File_3.pdf',
          'File_4.pdf',
          'File_5.pdf',
          'File_6.pdf',
          'File_7.pdf',
          'File_8.pdf',
          'File_9.pdf',
          'File_10.pdf',
          'File_11.pdf',
          'File_12.pdf',
          'File_13.pdf',
          'File_14.pdf',
        ],
      };
    },
    methods: {
      goToHomeTab() {
        this.$emit('go-to-home'); 
      },
    },
  };
  </script>
  
  <style scoped>
  .border-sop {
    width: 822px;
    height: 752px;
  }
  </style>
  
  