import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SuiDropdownModule, SuiModalModule, SuiPopupModule } from '@richardlt/ng2-semantic-ui';
import { SharedModule } from 'src/features/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
