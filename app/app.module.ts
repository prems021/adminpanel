import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { LoginComponent } from './components/login/login.component';
import { routing } from './routes';
import { HomeComponent } from './components/home/home.component';
import {AuthGuard} from './dashboard/auth.guard';
import {AuthenticationService} from'./services/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './services/data.service';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {UsertableComponent} from './dashboard/usertable.component';
import {DriverequestComponent} from './dashboard/drive_requests.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,ReactiveFormsModule,
    FormsModule,
        routing,routing
    ],
    declarations: [
        AppComponent, UsertableComponent,DriverequestComponent,   LoginComponent, HeaderComponent,SidebarComponent,

        LoginComponent,
        HomeComponent,DashboardComponent
    ],
     providers: [ AuthGuard ,AuthenticationService,DataService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
