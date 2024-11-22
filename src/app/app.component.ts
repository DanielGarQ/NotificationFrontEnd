import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderV2Component } from './components/header-v2/header-v2.component';
import { FooterV2Component } from './components/footer-v2/footer-v2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'application-front';
}
