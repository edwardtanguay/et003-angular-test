import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { UserBoxComponent } from './user-box/user-box.component';
import { FormsModule } from '@angular/forms';
import { IntroBoxComponent } from './intro-box/intro-box.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    UserBoxComponent,
    IntroBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
