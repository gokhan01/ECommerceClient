import { Component, OnInit } from '@angular/core';
import { AlertifyOptions, AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private alertyify: AlertifyService) { }

  ngOnInit(): void {
    this.alertyify.message("Merhaba", {
      messageType: MessageType.Success,
      position: Position.BottomRight,
      delay: 10,
      dismissOthers: false
    })
  }

}
