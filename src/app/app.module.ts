import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user/user.reducer';
import { ClassicReducerDemoComponent } from './classic-reducer-demo/classic-reducer-demo.component';
import { EntityDemoComponent } from './entity-demo/entity-demo.component';
import { GenericsDemoComponent } from './generics-demo/generics-demo.component';
import { DebugPanelComponent } from './debug-panel/debug-panel.component';
import { CodeViewerComponent } from './code-viewer/code-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassicReducerDemoComponent,
    EntityDemoComponent,
    GenericsDemoComponent,
    DebugPanelComponent,
    CodeViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ users: userReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
