import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TerminatorService {
  onDestroy: Subject<boolean>;

  constructor() {
    this.onDestroy = new Subject();
  }

  destroy() {
    this.onDestroy.next(true);
  }
}
