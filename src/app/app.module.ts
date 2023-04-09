import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountModule } from './components/account/account.module';
import { AddModule } from './components/add/add.module';
import { MainMenuModule } from './components/main-menu/main-menu.module';
import { GatekeeperModule } from './components/gatekeeper/gatekeeper.module';
import { RegisterComponent } from './components/gatekeeper/register/register.component';
import { BannersModule } from './components/banners/banners.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    GatekeeperModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
