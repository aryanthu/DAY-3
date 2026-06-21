import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Carousel } from "../carousel/carousel";
import { Accordion } from "../accordion/accordion";

@Component({
  selector: 'app-home',
  imports: [Navbar, Carousel, Accordion],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
