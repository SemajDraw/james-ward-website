import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent} from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
