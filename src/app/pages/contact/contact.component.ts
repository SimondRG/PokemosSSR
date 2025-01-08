import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent implements OnInit {

    private title = inject( Title );
    private meta = inject( Meta );
    ngOnInit(): void {
      this.title.setTitle('Contact Page');
      this.meta.updateTag({
        name: 'description',
        content: 'Este es mi contact page',
      });
      this.meta.updateTag({
        name: 'og:title',
        content: 'Contact Page',
      });
      this.meta.updateTag({
        name: 'keywords',
        content: 'Hola, Mundo, Simon, Skandia, Pensiones, Cesantias, Finanzas',
      });
    }

}
