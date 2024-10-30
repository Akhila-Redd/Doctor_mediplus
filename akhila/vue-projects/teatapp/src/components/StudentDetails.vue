<!-- <template>
    <div>
      <h2>Student Details</h2>
      <p>Name: {{ studentName }}</p>
      <p>Age: {{ studentAge }}</p>
    </div>
</template>
  
<script>
  export default {
    computed: {
      studentName() {
        return this.$route.query.name || 'N/A'; // Default to 'N/A' if not found
      },
      studentAge() {
        return this.$route.query.age || 'N/A'; // Default to 'N/A' if not found
      }
    }
  };
</script>
   -->

   <!-- <template>
    <div>
      <h2>Student Details</h2>
      <p>Name: {{ studentName }}</p>
      <p>Age: {{ studentAge }}</p>
      <button @click="goBack">Go Back</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        studentName: 'N/A',
        studentAge: 'N/A'
      };
    },
    created() {
      const data = JSON.parse(localStorage.getItem('studentData'));
      if (data) {
        this.studentName = data.name || 'N/A';
        this.studentAge = data.age || 'N/A';
      }
    },
    // methods: {
    //   goBack() {
    //     this.$router.push({ name: 'Form' }); // Navigate back to the form
    //   }
    // }
  };
  </script>
   -->

   <template>
    <div>
      <h2>Student Details</h2>
      <p>Name: {{ studentName }}</p>
      <p>Age: {{ studentAge }}</p>
      <button @click="goBack">Go Back</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        studentName: 'N/A',
        studentAge: 'N/A'
      };
    },
    created() {
      // Retrieve data from local storage
      const data = JSON.parse(localStorage.getItem('studentData'));
      if (data) {
        this.studentName = data.name || 'N/A';
        this.studentAge = data.age || 'N/A';
      }
    },
    methods: {
      goBack() {
        // Navigate back to the form
        this.$router.push({ name: 'Form' });
      }
    }
  };
  </script>
  