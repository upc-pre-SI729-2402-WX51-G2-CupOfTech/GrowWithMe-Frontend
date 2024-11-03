import { Routes } from '@angular/router';
import {FarmerLoginComponent} from "./iam/pages/farmer/login/login.component";
import {FarmerSignupComponent} from "./iam/pages/farmer/signup/signup.component";
import {ConsultantLoginComponent} from "./iam/pages/consultant/login/login.component";
import {ConsultantSignupComponent} from "./iam/pages/consultant/signup/signup.component";
import {CropsHomeComponent} from "./crops/pages/crops-home/crops-home.component";

export const routes: Routes = [
  {path: 'farmer-login', component: FarmerLoginComponent},
  {path: 'farmer-signup', component: FarmerSignupComponent},
  {path: 'consultant-login', component: ConsultantLoginComponent},
  {path: 'consultant-signup', component: ConsultantSignupComponent},
  {path: '/home/crops', component: CropsHomeComponent },
  {path: '', redirectTo: '/farmer-login', pathMatch: 'full'},
  {path: '**', redirectTo: '/farmer-login'}
];
