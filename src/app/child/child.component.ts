import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit, OnChanges, SimpleChange  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  @Input() value: string;
  @Output() onValueChanged = new EventEmitter<string>();
  changeLog: string[] = [];

  emitData() {
    this.onValueChanged.emit(`Hello from child with '${this.value}'`);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    const log: string[] = [];
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const changedProp = changes[propName];
        const to = JSON.stringify(changedProp.currentValue);
        if (changedProp.isFirstChange()) {
          log.push(`Initial value of "${propName}" set to ${to}`);
        } else {
          const from = JSON.stringify(changedProp.previousValue);
          log.push(`Variable "${propName}" changed from ${from} to ${to}`);
        }
      }
    }
    this.changeLog.push(log.join(', '));
  }
}
