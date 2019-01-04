import { Component, OnInit} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css']
})
export class ModalpopupComponent implements OnInit {
  public showSaveNotification: boolean = false;      
  private timer: any;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  showSavedStatus() {
    this.showSaveNotification = true;
    setTimeout(() => {
      this.showSaveNotification   = !this.showSaveNotification;
    }, 3000);
  }

}
