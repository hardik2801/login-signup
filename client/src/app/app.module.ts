import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-router/app-router.module';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterStateParamsService } from 'ng-router-state-params';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './views/login-signup/login-signup.component';
import { MyProfileComponent } from './views/my-profile/my-profile.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    MyProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ToastModule.forRoot()
  ],
  providers: [
    ApiService,
    RouterStateParamsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
