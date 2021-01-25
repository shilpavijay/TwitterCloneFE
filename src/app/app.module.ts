import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyExample } from './myexample.component';
import { myexampleService } from './myexample.service';
import { TweetsComponent } from './tweets/tweets.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MyExample,
    TweetsComponent,
    ProfileComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    myexampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
