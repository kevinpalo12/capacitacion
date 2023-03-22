import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HomeComponent } from "./components/home/home.component";
import { Home2Component } from "./components/home2/home2.component";
import { ListaRegionComponent } from "./components/lista-region/lista-region.component";

export const routeList = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dash',
        component: DashboardComponent
    },
    {
        path: 'home2',
        component: Home2Component
    },
    {
        path: 'pokedex/:region',
        component: ListaRegionComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
]