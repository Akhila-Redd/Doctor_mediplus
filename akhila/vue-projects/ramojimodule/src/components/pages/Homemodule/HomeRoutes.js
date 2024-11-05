import GreeninComp from "./GreeninComp.vue";
import HomeComp from "./HomeComp.vue";
import HomeModule from "./HomeModule.vue";
import SaharaComp from "./SaharaComp.vue";
import ShantiniketanComp from "./ShantiniketanComp.vue";
import SitaraComp from "./SitaraComp.vue";
import TaraComp from "./TaraComp.vue";
import VasundaraVilla from "./VasundaraVilla.vue";

const HomeRoutes=[{
    component:HomeModule,
    path:'/',
    redirect:'/tara',
    children :[{
        component:HomeComp,
        path:'home'
    },
    {
        component:SitaraComp,
        path:'sitara'
    },
    {
        component:GreeninComp,
        path:'greenin'
    },
    {
        component:ShantiniketanComp,
        path:'shantiniketan'
    },
    {
        component:TaraComp,
        path:'tara'
    },
    {
        component:SaharaComp,
        path:'sahara'
    },
    {
        component:VasundaraVilla,
        path:'vasundara'
    }
]

}
];
export default HomeRoutes;