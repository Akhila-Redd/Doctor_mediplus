<!-- <template>
    <div>
      <FormComponent />
      <DisplayComponent v-if="submittedData.name" :data="submittedData" />
    </div>
  </template>
  
  <script>
  import FormComponent from './FormComponent.vue';
  import DisplayComponent from './DisplayComponent.vue';
  
  export default {
    components: {
      FormComponent,
      DisplayComponent
    },
    data() {
      return {
        submittedData: {}
      };
    },
    methods: {
      handleFormData(data) {
        // Store the submitted data
        this.submittedData = data;
      }
    }
  };
  </script>
   -->
<!-- 
<template>
<button @click="submit()">clickME</button>
<div v-for="(item,index) in Array" :key="index">
    {{item}}
</div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            Array: []
        }
    },
    methods: {
        submit(){
         axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
            this.Array=res.data
            console.log(res);
         })
        }
    }
}
</script> -->

<!-- <template>
    <div>
        <h2>Submit Data</h2>
        <form @submit.prevent="submitData">
            <input v-model="formData.title" placeholder="Enter Title" required />
            <textarea v-model="formData.body" placeholder="Enter Body" required></textarea>
            <button type="submit">Submit</button>
        </form>
        <div v-if="responseMessage">{{ responseMessage }}</div>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            formData: {
                title: '',
                body: ''
            },
            responseMessage: '',
            errorMessage: ''
        };
    },
    methods: {
        submitData() {
            axios.post('https://jsonplaceholder.typicode.com/posts', this.formData)
                .then(response => {
                    this.responseMessage = 'Data submitted successfully!';
                    this.formData.title = '';
                    this.formData.body = '';
                    console.log(response ,this.formData);
                })
                .catch(error => {
                    this.errorMessage = 'Error submitting data: ' + error.message;
                });
        }
    }
};
</script>

<style>
.error {
    color: red;
}
</style> -->

<template>
    <div>
      <h2>Submit Data</h2>
      <form @submit.prevent="submitData">
        <input v-model="formData.title" placeholder="Enter Title" required />
        <textarea v-model="formData.body" placeholder="Enter Body" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <div v-if="responseMessage">{{ responseMessage }}</div>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        formData: {
          title: '',
          body: ''
        },
        responseMessage: '',
        errorMessage: ''
      };
    },
    methods: {
      submitData() {
        axios.post('https://jsonplaceholder.typicode.com/posts', this.formData)
          .then(response => {
            if (response.status === 201) { // Check for success
              this.responseMessage = 'Data submitted successfully!';
              console.log('Posted data:', response.data); // Inspect posted data
            }
          })
          .catch(error => {
            this.errorMessage = 'Error submitting data: ' + error.message;
          });
      }
    }
  };
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>
  