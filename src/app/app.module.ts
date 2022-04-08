import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { ExampleComponent } from './example/example.component';
import { ModuleComponent } from './module/module.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Module1Component } from './module1/module1.component';
import { Module2Component } from './module2/module2.component';
import { Object1Component } from './module2/object1/object1.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    ExampleComponent,
    ModuleComponent,
    Module1Component,
    Module2Component,
    Object1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
