<template>
    <div class="d-flex justify-content-end gap-3 align-items-center font13" v-if="menuSelectedOutlet">
    <p class="m-0">Total Devices:{{ selectedDeviceCount.total_devices }}</p>
   <p class="m-0">Veg Devices:{{ selectedDeviceCount.veg_devices}}</p>
   <p class="m-0">Non-Veg Devices:{{ selectedDeviceCount.non_veg_devices }}</p>
</div>
</template>