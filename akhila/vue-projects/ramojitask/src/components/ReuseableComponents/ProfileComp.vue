<template>
    <div class="main">
        <div class="border borders border-dark border-2">
            <img :src="image" alt="">
        </div>
        <div class="profile-name">
            <p class="text-danger m-0">{{ profile }}</p>
            <p class="text">{{ profilename }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true
        },
        profile: {
            type: String,
            required: true
        },
        profilename: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.profile-name {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    overflow: hidden;
}

.main {
    width: 190px;
    height: 238px;
    top: 823px;
    left: 120px;
    gap: 0px;
    opacity: 0px;
}

.borders {
    height: 190px;
    width: 190px;
    border-radius: 100%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

img {
    height: 180px;
    width: 180px;
    border-radius: 100%;
    object-fit: cover;
}
</style>
