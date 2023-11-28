import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  public currentPlace:string

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    // this.route.url.subscribe(value => {
    //   this.currentPlace = value[0].path
    // })

    /* destructuring for an array of UrlSegment objects */
    this.route.url.subscribe(([url]) => {
      const {path, parameters} = url
      this.currentPlace = path
    })
  }
}
