<template>
    <div>
        <h3>Student List</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>S/N</th>
                    <th>Mobile</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(student, index) in students" :key="index">
                    <td>{{ student.name }}</td>
                    <td>{{ student.serial }}</td>
                    <td>{{ student.mobile }}</td>
                    <td>
                        <router-link :to="`/students/${index}`">View</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            students: []
        };
    },
    created() {
        this.fetchStudents();
    },
    methods: {
        fetchStudents() {
            this.students = JSON.parse(localStorage.getItem('students')) || [];
        }
    }
};
</script>

<style>
/* Add your styles here */
</style>
