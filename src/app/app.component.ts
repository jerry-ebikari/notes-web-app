import { Component, OnInit } from '@angular/core';
import { SuiModalService } from '@richardlt/ng2-semantic-ui';
import { NoteModal } from 'src/features/shared/modals/note-modal/note-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'notes-web-app';

  constructor(private modalService: SuiModalService) {

  }

  ngOnInit() {
    this.modalService.open(new NoteModal)
  }
}
