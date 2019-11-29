import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './components/home/home-header/home-header.component';
import { HomePassionComponent } from './components/home/home-passion/home-passion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeInformationComponent } from './components/home/home-information/home-information.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioInformationComponent } from './components/portfolio/portfolio-information/portfolio-information.component';
import { PortfolioProjectsComponent } from './components/portfolio/portfolio-projects/portfolio-projects.component';
import { ContactOptionsComponent } from './components/contact/contact-options/contact-options.component';
import { ContactFormComponent } from './components/contact/contact-options/contact-form/contact-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';

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
    ContactOptionsComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
