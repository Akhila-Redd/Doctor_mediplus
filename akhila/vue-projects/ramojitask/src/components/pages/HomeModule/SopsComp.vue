<template>
    <div class="container">
        <h5 class="text-start">SOP's</h5>
    <div class="table-responsive border border-2 rounded-4 shadow-lg p-2">
        <table class="table table-sm">
            <thead class="borders">
                <tr class=" bg-danger">
                    <th class="text-start  p-3">File name</th> 
                    <th class="text-end  p-3">Download</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(file, index) in files" :key="index" class="table-row">
                    <td class="text-start border-0 p-2">{{ file }}</td>
                    <td class="text-end border-0 p-2">
                        <img src="@/assets/download.png" alt="Download" class="ms-3"> 
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
                'File_12#2$ris',
                'File_12#2$ris',
                'File_12#2$ris',
                'File_12#2$ris',
                'File_12#2$ris',
                'File_12#2$ris',
                'File_12#2$ris',
                'File_12#2$ris',
                'File_12#2$ris',
                'File_12#2$ris',
                'File_12#2$ris',
                'File_12#2$ris',
                'File_12#2$ris',
                'File_12#2$ris',
            ]
        }
    }
}
</script>

<style scoped>

</style>
