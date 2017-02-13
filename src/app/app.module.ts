import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component'
import { JumbotronComponent } from './jumbotron/jumbotron.component'
import { HomeComponent } from './page/home.component'
import { AboutComponent } from './page/about.component'
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'index', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports:      [ BrowserModule,
  				  RouterModule.forRoot(appRoutes)
   ],
  declarations: [ AppComponent,
  				  NavbarComponent,
  				  JumbotronComponent,
  				  HomeComponent,
  				  AboutComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
