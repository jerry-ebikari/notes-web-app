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
  titleEmpty = false;
  notDefaultColor = false;
  initialData: any = null;
  newNote: any = {
    title: "",
    noteContent: "",
    backgroundColor: ""
  };
  colors = [
    "black",
    "red",
    "blue",
    "yellow",
    "green",
    "orange",
    "purple",
    "violet",
    "olive",
    "teal",
    "brown",
    "pink",
    "grey"
  ]
  constructor(public modal: SuiModal<INoteData>) { }

  updateTitle(event: any) {
    this.newNote.title = event.target.innerText;
  }

  updateNote(event: any) {
    this.newNote.noteContent = event.target.innerText;
  }

  setBackgroundColor(color: string) {
    this.notDefaultColor = true;
    this.newNote.backgroundColor = color;
  }

  removeBackground() {
    this.notDefaultColor = false;
    this.newNote.backgroundColor = "";
  }

  ngOnInit(): void {
    if (this.modal.context?.isEdit) {
      this.initialData = this.modal.context?.noteData;
      this.newNote = this.modal.context?.noteData;
      this.notDefaultColor = this.newNote?.backgroundColor ? true : false;
    }
  }

}

export class NoteModal extends ComponentModalConfig<INoteData> {
  constructor(noteData: any = undefined) {
    super(NoteModalComponent, noteData);
    this.isClosable = true;
    this.isCentered = true;
    this.isFullScreen = false;
    this.size = ModalSize.Tiny;
  }
}

interface INoteData {
  noteData: any;
  isEdit?: boolean;
}
