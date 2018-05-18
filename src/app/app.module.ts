import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MumbaiComponent} from './components/mumbai/mumbai.component';
import {NagpurComponent} from './components/nagpur/nagpur.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {SearchComponent} from './components/search/search.component';
import {PuneComponent} from './components/pune/pune.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { DelhiComponent } from './components/delhi/delhi.component';
const myRoute: Routes = [
  {path: 'dash', component: DashboardComponent},
  {path: 'mumbai', component: MumbaiComponent},
  {path: 'pune', component: PuneComponent},
  {path: 'nagpur', component: NagpurComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign', component: SignupComponent},
  {path: 'search', component: SearchComponent},
  {path: 'delhi', component: DelhiComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MumbaiComponent,
    PuneComponent,
    NagpurComponent,
    LoginComponent,
    SignupComponent,
    SearchComponent,
    DelhiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
