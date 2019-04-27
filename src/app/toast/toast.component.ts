import { MAT_DIALOG_DATA, MAT_SNACK_BAR_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
message ;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.message = data.message ;
  }

  ngOnInit() {
  }

}
