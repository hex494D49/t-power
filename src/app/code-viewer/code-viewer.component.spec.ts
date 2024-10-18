import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.css']
})
export class CodeViewerComponent implements OnInit {
  @Input() codeSnippet: string | null = null;

  constructor() {}

  ngOnInit(): void {}
}
