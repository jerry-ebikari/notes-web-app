import { Component, OnInit } from '@angular/core';
import { SuiModal } from '@richardlt/ng2-semantic-ui';
import { ModalSize } from '@richardlt/ng2-semantic-ui';
import { ComponentModalConfig } from '@richardlt/ng2-semantic-ui';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.scss']
})
export class NoteModalComponent implements OnInit {
  title = "Title";
  noteContent = "Take a note...";
  titleTouched = false;
  noteContentTouched = false;
  constructor(private modal: SuiModal<{noteData: any}>) { }

  updateTitle(event: any) {
    console.log(event.target.innerText);
  }

  updateNote(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
    if (this.modal.context.noteData.edit) {
      this.title = this.modal.context.noteData.title;
      this.noteContent = this.modal.context.noteData.noteContent;
    }
  }

}

export class NoteModal extends ComponentModalConfig<{noteData: any}> {
  constructor(noteData: any = undefined) {
    super(NoteModalComponent, noteData);
    this.isClosable = true;
    this.isCentered = true;
    this.isFullScreen = false;
    this.size = ModalSize.Tiny;
  }
}
