import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {LanguageSwitcherComponent} from "./public/components/language-switcher/language-switcher.component";
import {ConsultantLoginComponent} from "./iam/pages/consultant/login/login.component";
import {FarmerLoginComponent} from "./iam/pages/farmer/login/login.component";
import {ConsultantSignupComponent} from "./iam/pages/consultant/signup/signup.component";
import {FarmerSignupComponent} from "./iam/pages/farmer/signup/signup.component";
import {FooterComponent} from "./public/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, LanguageSwitcherComponent, FarmerLoginComponent, ConsultantLoginComponent, ConsultantSignupComponent, FarmerSignupComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GrowWithMe-Frontend';

  constructor(private translateService: TranslateService) {
    this.translateService.use('en');
    this.translateService.setDefaultLang('en');
  }
}
