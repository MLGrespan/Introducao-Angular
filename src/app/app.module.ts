import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav-bar/nav-bar-component';
import { Error404Component } from './error-404/error-404Component';
import { CourseModule } from './courses/course.module';

@NgModule({
    declarations: [
        AppComponent,                    
        NavbarComponent,
        Error404Component        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        CourseModule,
        RouterModule.forRoot([                     
            {
                path: '',  redirectTo: 'courses', pathMatch: 'full'
            },
            {
                path: '**', component: Error404Component
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
