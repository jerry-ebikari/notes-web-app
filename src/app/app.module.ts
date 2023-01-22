import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SuiDropdownModule, SuiModalModule, SuiPopupModule } from '@richardlt/ng2-semantic-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteModalComponent } from './modals/note-modal/note-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModalModule,
    SuiDropdownModule,
    SuiPopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
