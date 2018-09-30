import { Component, OnInit, TemplateRef, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { WatchBoxDirective } from '../../directive/watch-box.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentInit {

  left: TemplateRef<any>;
  right: TemplateRef<any>;
  @ContentChildren(WatchBoxDirective) templates: QueryList<WatchBoxDirective>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.wbTemplate) {
        case 'left':
          this.left = item.template;
          break;
        case 'left':
          this.right = item.template;
          break;
      }
    });
  }

}
