import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomePassionComponent } from './home/home-passion/home-passion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeInformationComponent } from './home/home-information/home-information.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioInformationComponent } from './portfolio/portfolio-information/portfolio-information.component';
import { PortfolioProjectsComponent } from './portfolio/portfolio-projects/portfolio-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    HomePassionComponent,
    NavbarComponent,
    HomeInformationComponent,
    FooterComponent,
    HomeComponent,
    ResumeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    PortfolioInformationComponent,
    PortfolioProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
