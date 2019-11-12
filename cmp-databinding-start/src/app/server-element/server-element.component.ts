import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading', {static: true}) header: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.header.nativeElement.textContent);
  }

}
