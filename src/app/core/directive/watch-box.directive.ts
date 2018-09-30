import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[wbTemplate]'
})
export class WatchBoxDirective {

  @Input() wbTemplate: string;

  constructor(public template: TemplateRef<any>) { }

}
