<template>
    <div class="border rounded-3 main text-start p-3">
        <h4 class="text-danger">
            <span><img src="@/assets/Birth.png" alt=""></span>
            Birthday
            <span><img src="@/assets/birth.png" alt=""></span>
        </h4>
        <div class="top-border  mb-3 mt-2">
            <div class="d-flex ">
                <div class="me-2 mt-2">
                    <img src="@/assets/person.svg" alt=""
                        style="width: 50px; height: 50px; border: 1px solid #E1E1E1; border-radius: 5px; top: 2px;">
                </div>
                <div>
                    <h3>Jasmin Serif</h3>
                    <p>Deputy Manager</p>
                </div>
            </div>
            <div class="d-flex">
                <div class="me-2 mt-2">
                    <img src="@/assets/person.svg" alt=""
                        style="width: 50px; height: 50px; border: 1px solid #E1E1E1; border-radius: 5px; top: 2px;">
                </div>
                <div>
                    <h3>Gunay</h3>
                    <p>Assistant Manager</p>
                </div>
            </div>
        </div>
        <div>
            <h2 style="font-size: 14px; font-weight: 500; color: #000000; margin-bottom: 5px;">
                Upcoming Birthdays
            </h2>
            <ul class="list-unstyled mt-3">
                <li>
                    <span><img src="@/assets/person.png" alt="" style="width: 20px; height: 20px; border: 1px solid #E1E1E1; border-radius: 5px; top: 2px;"></span>
                    Ali Asar - 27 Oct
                </li>
                <li>
                    <span><img src="@/assets/person.png" alt="" style="width: 20px; height: 20px; border: 1px solid #E1E1E1; border-radius: 5px; top: 2px;"></span>
                    Maria Smith - 29 Oct
                </li>
                <li>
                    <span><img src="@/assets/person.png" alt="" style="width: 20px; height: 20px; border: 1px solid #E1E1E1; border-radius: 5px; top: 2px;"></span>
                    John Doe - 1 Nov
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.borders {
    width: 50px;
    height: 50px;
    gap: 0px;
    border-radius: 4px 0px 0px 0px;
    border: 1px 0px 0px 0px;
    opacity: 0px;

}
li{
    padding: 5px;
}
.top-border {
    border-top: 1px solid black;
    padding-top: 5px;
}

.img {
    margin-right: 10px;
    /* Add space between image and text */
}
.main{
    width: 310px;
height: 428px;
border-radius: 4px 0px 0px 0px;
}
</style>