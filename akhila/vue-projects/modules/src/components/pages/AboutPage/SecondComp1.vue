<!-- <template>
    <h1>This is secondComp1 page</h1>
    <form class="w-50 border p-3 bg-success rounded" @submit.prevent="save()">
        <div>
            <LabelComp LabelName="firstname" class="form-label"/>
            <InputComp name="firstName" v-model="formdata.firstname" placeholder="enter your firstname" class="form-control" type="text" />
        </div>
        <div>
            <LabelComp LabelName="Lastname" class="form-label"/>
            <InputComp name="lastName" v-model="formdata.lastname" placeholder="enter your lastname" class="form-control" type="text" />
        </div>
        <div>
            <LabelComp LabelName="email" class="form-label"/>
            <InputComp name="email" v-model="formdata.email" placeholder="enter your email" class="form-control" type="email" />
        </div>
        <div>
            <LabelComp LabelName="password" class="form-label"/>
            <InputComp name="password" v-model="formdata.password" placeholder="enter your pasword" class="form-control" type="password" />
        </div>

       <div class="d-flex justify-content-end gap-3 mt-3">
        <ButtonComp   class="btn gap-5 btn-primary" button-name="cancel" @click.prevent="cancel()"/>
        <ButtonComp class="btn gap-5 btn-danger" button-name="save" type="submit"/>
       </div>
    </form>
</template>

<script>
import ButtonComp from '@/components/reusablecomponents/ButtonComp.vue';
import InputComp from '@/components/reusablecomponents/InputComp.vue';
import LabelComp from '@/components/reusablecomponents/LabelComp.vue';

export default {
    components: {
        ButtonComp,
        InputComp,
        LabelComp

    },
    data(){
        return{
            formdata:{
             firstname: '',
                lastname: '',
                email: '',
                password: ''
                },
          
        }
    },
    methods:{
        cancel(){
           
                this.formdata = {
                    firstname: '',
                lastname: '',
                email: '',
                password: ''
            };
            console.log('Form cleared'); 

            
        },
        save(){
      console.log('akhila',this.formdata);
        
        }
    }
};
</script>
 -->



<template>
  <h2>User Form</h2>
  <form class="w-50">
    <div v-for="(item, index) in formfields" :key="index" class="mb-3">
      <!-- <LabelComp class="form-label" :labelName="item.labelName" /> -->
      <LabelComp class="form-label" :labelName="item.labelNames" :name="item.name" />
      <InputComp 
        v-model="formdata[item.name]" 
        :type="item.type" 
        :placeholder="item.placeholder" 
        class="form-control"
        :name="item.name"
      />
     
    </div>
    <div>
      <ButtonComp buttonName="Submit" class="btn btn-primary" @click.prevent="submit" />
    </div>
  </form>
</template>

<script>
import ButtonComp from '@/components/reusablecomponents/ButtonComp.vue';

import InputComp from '@/components/reusablecomponents/InputComp.vue';
import LabelComp from '@/components/reusablecomponents/LabelComp.vue';

export default {
  components: {
    LabelComp,
    ButtonComp,
    InputComp,
  
  },
  data() {
    return {
      formdata: {
       
      },
      formfields: [
        {
          labelNames: "First Name :",
          name:"firstname",
          type: "text",
          placeholder: "Enter your first name"
        },
        {
          labelNames: "Last Name : ",
          name:"lastname",
          type: "text",
          placeholder: "Enter your last name"
        },
        {
          labelNames: "Email : ",
          name:"email",
          type: "email",
          placeholder: "Enter your email"
        },
        {
          labelNames: "Password : ",
          name:"password",
          type: "password",
          placeholder: "Enter your password"
        }
      ]
    };
  },
  methods: {
    submit() {
      console.log('Form data:', this.formdata);
    }
  }
};
</script>

<style scoped>

</style>
