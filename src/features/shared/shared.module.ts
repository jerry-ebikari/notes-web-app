import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteModalComponent } from './modals/note-modal/note-modal.component';
import { SuiDropdownModule, SuiModalModule, SuiPopupModule } from '@richardlt/ng2-semantic-ui';



@NgModule({
  declarations: [
    NoteModalComponent
  ],
  imports: [
    CommonModule,
    SuiModalModule,
    SuiDropdownModule,
    SuiPopupModule,
  ],
  exports: [
    NoteModalComponent
  ]
})
export class SharedModule { }
