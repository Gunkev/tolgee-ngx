import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@tolgee/ngx';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent implements OnInit {
  constructor(public translateService: TranslateService) {}

  ngOnInit(): void {}
}
