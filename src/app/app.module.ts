import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { ExampleComponent } from './example/example.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Module1Component } from './module1/module1.component';
import { Module2Component } from './module2/module2.component';
import { RouterModule, Routes } from '@angular/router';
import { Module3Component } from './module3/module3.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'module1'},
  {path: 'module1', component: Module1Component},
  {path: 'module2', component: Module2Component, data: { animation: 'module2'}},
  {path: 'module3', component: Module3Component, data: { animation: 'module3'}},
]

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    ExampleComponent,
    Module1Component,
    Module2Component,
    Module3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
