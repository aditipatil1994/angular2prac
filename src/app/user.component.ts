import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}} user</h1>`
})

export class UserComponent  { name = 'Angular'; }
