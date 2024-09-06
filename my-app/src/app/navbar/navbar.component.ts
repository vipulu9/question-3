import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/moduleA">Module A Component</a>
      <a routerLink="/moduleB">Module B Component</a>
    </nav>
  `,
  styles: [
  `nav {
    background-color: #333;
    padding: 1rem;
    display: flex;
    gap: 1rem;
  }
  a {
    color: white;
    text-decoration: none;
  }` ]
})
export class NavbarComponent {}
