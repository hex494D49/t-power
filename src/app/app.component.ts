import { Component } from '@angular/core';
import { codeSnippets } from './code-snippets';

type CodeSnippet = {
  actions?: string;
  reducer: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentStage: 'classic' | 'entity' | 'generics' = 'classic';
  codeSnippet: CodeSnippet = codeSnippets.classic;

  showStage(stage: 'classic' | 'entity' | 'generics') {
    this.currentStage = stage;
    this.codeSnippet = codeSnippets[stage];
  }
}
