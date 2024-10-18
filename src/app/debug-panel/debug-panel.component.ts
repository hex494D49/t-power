import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-debug-panel',
  templateUrl: './debug-panel.component.html',
  styleUrls: ['./debug-panel.component.css']
})
export class DebugPanelComponent implements OnInit {
  storeState$: Observable<any>;

  constructor(private store: Store) {
    // Select the entire store state
    this.storeState$ = this.store.select(state => state);
  }

  ngOnInit(): void {}
}
