<template>
  <div>
    <h2>User Form</h2>
    <div class="d-flex justify-content-center mb-5">
      <form class="w-50 form-control text-lg-start" @submit.prevent="submit">
        <div v-for="(item, index) in formfields" :key="index" class="mb-3">
          <LabelComp class="col-sm-3 form-label " :labelName="item.labelNames" :name="item.name" />
          <InputComp  v-model="formdata[item.name]" :type="item.type" :name="item.name" :placeholder="item.placeholder" />
        </div>
        <div class="text-lg-center">
          <ButtonComp buttonName="Submit" class="btn btn-primary " />
        </div>
      </form>
    </div>
      <div v-if="studentscheck && students.length > 0" class="d-flex flex-column">
      <h2>Student Details :</h2>
      <table class="border">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Mobile No</th>
            <th>Father</th>
            <th>Mother</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border" v-for="(student, index) in students" :key="index">
            <td>{{ student.firstname }}</td>
            <td>{{ student.lastname }}</td>
            <td>{{ student.email }}</td>
            <td>{{ student.password }}</td>
            <td>{{ student.mobile }}</td>
            <td>{{ student.father }}</td>
            <td>{{ student.mother }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ButtonComp from './resuableComponents/ButtonComp.vue';
import InputComp from './resuableComponents/InputComp.vue';
import LabelComp from './resuableComponents/LabelComp.vue';

export default {
  props: {
    formfields: {
      type: Array,
      required: true,
    },
    students: {
      type: Array,
    },
  },

  components: {
    ButtonComp,
    InputComp,
    LabelComp,
  },
  data() {
    return {
      formdata: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        mobile: '',
        father: '',
        mother: '',
      },
      studentscheck: false,
    };
  },
  methods: {
    submit() {
      const allFieldsFilled = Object.values(this.formdata).some(value => value !== '');
      if (allFieldsFilled) {
        const newStudent = { ...this.formdata };
        this.DataSubmit(newStudent);
        this.resetForm();
        this.studentscheck = true;
      }
       else {
        alert('Please fill in all fields.');
      }
    },
    DataSubmit(Student){
    axios.post('http://localhost:8085/students  ',Student).then((res)=>{
      this.$emit('add-student',res.data);
    })
    },
    resetForm() {
      this.formdata = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        mobile: '',
        father: '',
        mother: '',
      };
    },
  },
};
</script>