import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PassionComponent } from './home/passion/passion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InformationComponent } from './home/information/information.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    PassionComponent,
    NavbarComponent,
    InformationComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
