<template>
  <div>
    <HelloWorld 
      @add-student="handleAddStudent"
      :formfields="formfields"
      :students="students"
    />
  </div>
 
</template>

<script>
import HelloWorld from './HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      students:[],
      formfields: [
        { name: 'firstname', labelNames: 'First Name:', type: 'text', placeholder: 'Enter first name ....' },
        { name: 'lastname', labelNames: 'Last Name:', type: 'text', placeholder: 'Enter last name....' },
        { name: 'email', labelNames: 'Email : ', type: 'email', placeholder: 'Enter email...' },
        { name: 'password', labelNames: 'Password :', type: 'password', placeholder: 'Enter password....' },
        { name: 'mobile', labelNames: 'Mobile :', type: 'text', placeholder: 'Enter mobile number...' },
        { name: 'father', labelNames: 'Father\'s Name :', type: 'text', placeholder: 'Enter father\'s name...' },
        { name: 'mother', labelNames: 'Mother\'s Name :', type: 'text', placeholder: 'Enter mother\'s name...' },
      ],
    };
  },
  methods: {
    handleAddStudent(newStudent) {
      this.students.push(newStudent);
      this.saveStudentsToLocalStorage();
      this.redirectToStudentList(); 
    },
    redirectToStudentList() {
      this.$router.push({ name: 'student' }); 
    },
    saveStudentsToLocalStorage() {
      localStorage.setItem('students', JSON.stringify(this.students));
    },
  },
};
</script>
