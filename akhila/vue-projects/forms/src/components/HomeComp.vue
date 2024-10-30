<template>
    <div class="container">
        <h5 class="text-center">Student Bio Data</h5>
        <form @submit.prevent="submitForm">
            <label for="name">Student Name:</label>
            <input type="text" v-model="student.name" required />
            <label for="serial">Student S/N:</label>
            <input type="number" v-model="student.serial" required />
            <label for="mobile">Mobile:</label>
            <input type="number" v-model="student.mobile" required />
            <label for="address">Address:</label>
            <textarea v-model="student.address" required></textarea>
            <label for="date">Date of Birth:</label>
            <input type="date" v-model="student.date" required />
            <label for="department">Department:</label>
            <select v-model="student.department" required>
                <option value="">Select department</option>
                <option v-for="dept in departments" :key="dept" :value="dept">{{ dept }}</option>
            </select>
            <label for="email">Email ID:</label>
            <input type="email" v-model="student.email" required />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            student: {
                name: '',
                serial: '',
                mobile: '',
                address: '',
                date: '',
                department: '',
                email: ''
            },
            departments: [
                'Electrical & Electronics',
                'Electrical & Communication',
                'Computers',
                'Civil',
                'Mechanical',
                'Artificial',
                'Agriculture'
            ]
        };
    },
    methods: {
        submitForm() {
            let students = JSON.parse(localStorage.getItem('students')) || [];
            students.push(this.student);
            localStorage.setItem('students', JSON.stringify(students));
            this.$router.push('/students'); // Redirect to the student list page
        }
    }
};
</script>

<style>
/* Add your styles here */
</style>
