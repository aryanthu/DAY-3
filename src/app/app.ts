import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Carousel } from "./carousel/carousel";
import { Home } from "./home/home";
import { Contact } from "./contact/contact";
import { Accordion } from "./accordion/accordion";
import { About } from "./about/about";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Aryanth');
}
