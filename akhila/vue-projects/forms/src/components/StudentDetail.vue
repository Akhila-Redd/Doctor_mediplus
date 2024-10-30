<template>
    <div>
        <h3>Student Details</h3>
        <p><strong>Name:</strong> {{ student.name }}</p>
        <p><strong>Serial Number:</strong> {{ student.serial }}</p>
        <p><strong>Mobile:</strong> {{ student.mobile }}</p>
        <p><strong>Address:</strong> {{ student.address }}</p>
        <p><strong>Date of Birth:</strong> {{ student.date }}</p>
        <p><strong>Department:</strong> {{ student.department }}</p>
        <p><strong>Email:</strong> {{ student.email }}</p>
        <router-link to="/students">Back to List</router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            student: {}
        };
    },
    created() {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        this.student = students[this.id];
    }
};
</script>

<style>
/* Add your styles here */
</style>
