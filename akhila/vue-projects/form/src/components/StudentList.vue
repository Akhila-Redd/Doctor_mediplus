 <!-- <template>
    <div>
        <h2>Student Details :</h2>
      <table class="table table-striped table-bordered border">
        <thead class="thead-dark">
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
          <tr class="border" v-for="(student, index) in student" :key="index">
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
</template>

<script>
export default {
    data() {
        return {
            students: [],
            
        };
    },
    mounted() {
        this.loadStudentsFromLocalStorage();
    },

    methods: { 
      loadStudentsFromLocalStorage() {
      const students = localStorage.getItem('students');
    return students ? JSON.parse(students) : [];    
    }

    }
}
</script>
 -->

<template>
  <div>
    <h2>Student Details:</h2>
    <table class="table table-striped table-bordered border">
      <thead class="thead-dark">
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
</template>

<script>
export default {
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.fetchStudents();
  },
  methods: {
    fetchStudents() {
      // fetch('http://localhost:8080/students')
      fetch('http://localhost:8085/students')
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.students = data;
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  }
}
</script>
