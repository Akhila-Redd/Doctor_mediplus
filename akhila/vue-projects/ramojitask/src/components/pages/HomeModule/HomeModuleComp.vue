<template>
    <div class="container">
        <TabsComponent @tab-selected="selectTab" />
    </div>
    <div class="container">
        <h3>Our Team</h3>
        <div class="d-flex justify-content-around mb-3">
            <div class="col-lg-2">
                <ProfileComp
                    image="https://s3-alpha-sig.figma.com/img/4773/dcca/19627af031de09d7cfa7505e80c8eb7b?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P-cqTIXonm853H89Xzf2aLaA40~X5iyRfHV~vBUbZ5IAAtSX6WR78Nr0WVXm3ZnMe3oHHTk3vymGssNyzj62WG~vqmPzxDEAfGBc1VJg8jmZcI654FPOjmi6QSssoB5VU9WZg0ZRyibxbQXUvBinHBIG1odcO9PDedEwrmHQ1Kx3izeNDIsYOjXWXqvGAJrUcFpPA2BHo37cpL7ueF3uCWJDH62O~baOtpVFjNRW0K6pBpJkg7TXpzjG71Ljr9A6uTLk9tvycyhwPvhc1ozyWSb4Iyr-0P9PzMuM7IfT-rmal-3FfwqNig4PPAk8xMNUdKDe5TmeoJaWIrv5Ai8uMA__"
                    profile="mr.Rifat Yasran" profilename="Managing Director" />
            </div>
            <div class="col-lg-10">
                <CardsComponent class="team-details
                " titleName="Owner"
                    text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                    footer="Know more" />
            </div>
        </div>
        <div class="d-flex mb-3">
            <div class="col-lg-2 p-0">
                <ProfileComp
                    image="https://s3-alpha-sig.figma.com/img/28b8/ea5e/659968f2fc155018409eb667ff4bfa4a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PbWQ5JLN05AJh1OsPM2caeTSk3nb2QOpuQGvm4H3~iOH8U7bYsfY5O8x-4yZEVSTGHbFyFH4mTVszORhQ6HnRAeqgxyxun6BQ0BN-FmjDicmRknFfaKf~wAWM9Tot3aRJET-GDl8GUBC8KTltPT8R9T1~4k1p5nhGq6-gvfPOPzchb3UJCNLBU5VQxxhipVhbx2HM-lfFVZhxwDoyLeCisStTqKo-tGfAKGp5BNRyOG~t6FoceqzSHNSqmtgs9~pgprGjEaKzMIlHfWCCkQJt4Y-51IJCljtLfLgWoNpzwxJzawK4xQ4Li3yu7j6qmC0iV14j1SCBquvZYezKtqcpA__"
                    profile="Mr. Ardavan Yasran" profilename="Chief Executive Oficer" />

            </div>
            <div class="col-lg-2">
                <ProfileComp
                    image="https://s3-alpha-sig.figma.com/img/60c2/4181/0da689b6b139ea1662e845068ad18836?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YV-HqApBoPsb5sAEpVYC~SRZr-O5OTWmFEG3dn5qlz8ttt1voeVNelxeLtoyDfNcxlmfDszi0na4VnRSlJ5lIWPJQu~wES0vZrn2TZBAzmXxdu4bA93ushhAfi6z68lzvVkNLoujfC3SPZAzjTAlMmu9E~3ue3bX79gHzYCYkWFH4WucGZsIPx7qGoP68rBefyyuVZDJMEDYV8wEqiTNI18kQmZthYWtEEyDfjz4es2rPyC2hUtgN5NzLRLdO-HHMUmcC0ytIrW-eVXuCef1OB5XPkkjyHtNbwsRy~vv2iZ1vUD-jQWX35XfkMJA7yiCVRUMpYUP8OkULVoFBkhqow__"
                    profile="Mr. Selim Yasran" profilename="General Manager" />
            </div>
            <div class="col-lg-8">
                <CardsComponent class="team-details
                " titleName="Future Owners & Major Share holders"
                    text="Contrary to popular belief, Lorem Ipsum is not has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                    footer="Know more" />
            </div>
        </div>
        <div class="d-flex mb-3">
            <div class="col-lg-4 d-flex">
                <div class="col-lg-6 p-0">
                    <ProfileComp
                        image="https://s3-alpha-sig.figma.com/img/5d8d/9e9a/17f7203c44bfb3c9b3419b91cc1b202a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECT7l8t-g60UaRGGlOe-YBCgwNCJ5KPhewhqgtGOnPynWE9r0I3oKWq32ZJ07gP~xsNwpr2JWSowDf9dib41rLxNakkRNML8etsEahj9aiacP6ujvkjnbGTFI9uniBpPclQ0visGm-DkRY50D0lzXyGhR-RtkHogcYsQkwPqH0Z40We1xWt0EzyDAphuGHSypWKKYxaJ7HdgjrHhb-70ATS1T4N8n7UbCJj1~aeE072wUY4m3tE4HLvuBjtwX0aab8fATxzRlG-5plis4TlxoFjHvdZDVHgD4gAmbDuD~zkHvMcNRTa~9d1p7jsW2WAFS-M--DeNNGpNQcn0CHwUEg__"
                        profile="Kerim Yilgaz" profilename="Sales Manager" />
                </div>
                <div class="col-lg-6 p-0">
                    <ProfileComp
                        image="https://s3-alpha-sig.figma.com/img/0a84/4e6f/9f824bbc977177a44086ce42b5f8d1df?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPD5uSgOEH9-NkzuBwFv0oGhPI9W2~nxHwhQ3ux9lUUNtkvmllVr34pcwiC2ZsqkMkyvjUuy9W95euorZGlyP75BU78-aUzUjUAu55pvyYxl8teA76n9hShlisOD2iPiaIZRK4uo~PjVC3YtTh72n~YeaZmdXYsePNDt8Pu3s5A-4UBIYzbO6quRF3yt7qLqETEp0qGRZ2C1D2vvkYi~1jVVLueYTOIUuykW7xKrszguOwk0qgeubQ0Y6FxySO~GCYMkgmy~0XNP94j2X~3d4ElzCSeU6MaRio6SCclMzprBgawgSqbpUdvELk81cZT~7qqUj2MTVRYDyrDtp9Vgrg__"
                        profile="Vural Nhamli" profilename="Revenue Manager" />
                </div>
            </div>
            <div class="d-flex col-lg-8 justify-content-around">
                <div class="col-3" style="display: flex; justify-content:center;">
                    <ProfileComp
                        image="https://s3-alpha-sig.figma.com/img/9732/3877/e68c75188e9a494b2500b1bbb7e6a192?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CuPZf9mGgOuUjeJ36LLcdJibP5ar2~5Poh5AXFDcLbe7mysJOoaLllErVsAfsC-YEniGk3TUSMOmBuAsaisNjN4UjXmKwbGhZIUGEEN8u1h7B11EEpbKNemuuItqUWcOdDHJdzGIb9UiO~zjTpM6szozJRDWnQA8b~uFkzxA8SVyR0uLOyhJljLxr5ye6TkbUZNsFogeSWaO1l5Gsm6UdesiqfwbQHLF0csXikZvyvStNKPMDU2rgC2jP4VQBU2ZjoMtfaH0Sb7CfBLHXHa~PXQLe5MC808NcFTyxBww70kJfF-TWm2NoV7hy6CbciGHKBW3~UEAhwDLFHyldNo1jQ__"
                        profile="Mustafa Saifi" profilename="Sales Manager" />
                </div>
                <div class="col-lg-3">
                    <ProfileComp
                        image="https://s3-alpha-sig.figma.com/img/7ec8/d8a6/2949703a3eda9c0bedbb26aea0ce3a15?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iwkiJ6DxIRBYtnnVFIjyMJEkf~3PwLowuw8XkgsRxZWRJ6iqhsVCnpLqMWj4oI0hMiAYRatGwOjb69peC0eEvlEDs9d9jlzDLivFJhw0MBb3eFDF5X5XTgmBCW7IUB~Bb16HZ8MiKO5icCi0p6fRpjfhy8ctj~52AcuCHUhNXjKPEydjHmlCM3rH0L0a9hYvSVpomx4nYRYpRqoCVDfzHCe9hzMiIvdPn53h-d7YA4YYm1o9dyS8RXj83pLF8O-cMl45Cu1-xsdsUA2SpYvOcA2tqeExLp0ltAawx1mzN7fOJ1Re20tZ~g9025WnSmV9~tJ~TyFfgeME8MkO7JNTkQ__"
                        profile="Feriha Mohammed" profilename="HR Manager" />
                </div>
                <div class="col-lg-5">
                    <CardsComponent titleName="Managers" footer="Know more" class="manager" />
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <h4 class="text-start">Our Other Team mates</h4>
        <div class="row">
            <div class="col-lg-6 d-flex" v-for="(profile, index) in profiles" :key="index">
                <div class="d-flex align-items-center w-100 ">
                    <div class="profile-img me-2 p-0 position-relative z-3">
                        <ProfileComp :image="profile.image" :profile="profile.name" :profilename="profile.position" />
                    </div>
                    <div class="flex-grow-1" style=" position: relative; left: -100px; top: -7px; ">
                        <CardsComponent footer="viewTeam" class="teams text-white border-0" 
                            style="width: 100%;  height: fit-content;" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="btn mt-5 text-white" style="background-color: red;">view all <i class="ri-arrow-right-line ms-1"></i></div>
</template>

<script>
import CardsComponent from "@/components/ReuseableComponents/CardsComponent.vue";   
import ProfileComp from "@/components/ReuseableComponents/ProfileComp.vue";
import TabsComponent from "@/components/ReuseableComponents/TabsComponent.vue";

export default {
    data() {
        return {
            profiles: [
                {
                    image: require("@/assets/profile.png"),
                    name: 'Zeynap Rehman',
                    position: 'Front Office Manager',
                },
                {
                    image: require("@/assets/profilee.png"),
                    name: 'Denise Ferhat',
                    position: 'Director of Rooms',
                },
                {
                    image: require("@/assets/profiles.png"),
                    name: 'Kenzy Yasran',
                    position: 'Director of Finance',
                },
                {
                    image: require("@/assets/profiless.png"),
                    name: 'Chan Wuang',
                    position: 'Hotel Manger',
                },
            ],
            image:'@/assets/image',
        }
    },
    methods:{
      
    },
    components: {
        ProfileComp,
        CardsComponent,
        TabsComponent
    },
};
</script>
<style scoped>
.profile-img {
    left: -36px;
    position: relative;
    top: 14px;
}
.team-content {
    width: 257px;
    height: 96px;
    top: 1836px;
    left: 280px;
    gap: 0px;
    opacity: 0px;

}
.teams {
    background-color: red !important;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
     font-weight: 600;
}
.manager {
    display: flex !important;
    text-align: center !important;
    justify-content: center !important;
    background-color: white !important;
}
</style>
<!-- home module -->