import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  passedValue = 'Start';
  version = 0;
  changeList: string[] = [];

  newVersion() {
    this.version++;
    this.passedValue = 'String ' + this.version;
  }

  clear() {
    this.passedValue = '';
  }

  handleChange(emmitedData: string) {
    this.changeList.push(emmitedData);
    this.clear(); // очень важная для нас строчка
  }
}
