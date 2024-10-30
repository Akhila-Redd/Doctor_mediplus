import AboutPage from "./AboutPage.vue";
import SecondComp1 from "./SecondComp1.vue";
import SecondComp2 from "./SecondComp2.vue";
import SecondComp3 from "./SecondComp3.vue";

const aboutroutes=[{
    path:'/about',
    component:AboutPage,
    redirect:'/about/second-comp1',
    children:[{
        path:"second-comp1",
        component:SecondComp1
    },
    {
        path:"second-comp2",
        component:SecondComp2
    },
    {
        path:"second-comp3",
        component:SecondComp3
    }
]
}
];
export default aboutroutes;
