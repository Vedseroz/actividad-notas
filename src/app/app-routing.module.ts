import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component'
import {HeaderComponent} from '../app/header/header.component'
import {DisplayComponent} from '../app/display/display.component'

const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path :'header',component: HeaderComponent},
    {path:'display',component:DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
