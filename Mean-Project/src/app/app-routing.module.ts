import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AfterSignComponent } from './after-sign/after-sign.component';
import { BoxesComponent } from './boxes/boxes.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FrontComponent } from './front/front.component';
import { TempComponent } from './temp/temp.component';
import { GroupComponent } from './group/group.component';
import { FormCreateComponent } from './form-create/form-create.component';
const routes: Routes = [
  {path:'front',component: FrontComponent},
  {path:'LoginSignup',component:TempComponent},
 {path:'activities',component:BoxesComponent },
  {path:'interests',component:AfterSignComponent},
  {path:'about-us',component:AboutusComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'CreateGroup',component:GroupComponent},
  {path:'Form',component:FormCreateComponent},

      {path:'',redirectTo: '/front',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
