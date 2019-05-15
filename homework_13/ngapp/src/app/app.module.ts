import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmartComponent } from './smart.component';
import { DumpComponent } from './dump.component';
import { IsVisibleDirective } from './is-visible.directive';
import { MakeBiggerDirective } from './make-bigger.directive';
import { MultiPipe } from './multi.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumpComponent,
    IsVisibleDirective,
    MakeBiggerDirective,
    MultiPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
