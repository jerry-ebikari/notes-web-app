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
  title = "";
  noteContent = "";
  titleEmpty = false;
  noteContentEmpty = false;
  notDefaultColor = false;
  backgroundColor = "";
  colors = [
    "black",
    "red",
    "blue",
    "yellow",
    "green",
    "orange",
    "purple",
    "violet"
  ]
  constructor(private modal: SuiModal<{noteData: any}>) { }

  updateTitle(event: any) {
    this.title = event.target.innerText;
  }

  updateNote(event: any) {
    this.noteContent = event.target.innerText;
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
