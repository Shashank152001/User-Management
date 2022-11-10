import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './MyComponent/child/child.component';
import { DashboardComponent } from './MyComponent/dashboard/dashboard.component';
import { HeaderComponent } from './MyComponent/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
