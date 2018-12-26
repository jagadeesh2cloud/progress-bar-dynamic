import { Component, OnInit, HostListener, Inject } from '@angular/core';  
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-stickyheader',
  templateUrl: './stickyheader.component.html',
  styleUrls: ['./stickyheader.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class StickyheaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     let screenWidth = screen.width;
     if (screenWidth < 992) { //TODO: Confirm the min screen width to support sticky header
      let scrollValue = window.scrollY;
      let stickyElement = document.querySelector('.subnav-toggle');
      let subNavElement = document.querySelector('.subnav-toggle .navbar-toggler');
      let subNavMenuItems = document.querySelector('#navbarToggleCollapse');
      let subNavMenuItemsShowed = document.querySelector('#navbarToggleCollapse.show');
 
      // TODO: The below value could change in actual screen.
      // The value given below must be the height of all elements above the expected sticky nav
      if (scrollValue > 104) { 
          stickyElement.classList.add('affix')
          subNavElement.classList.add('d-inline');
          subNavElement.classList.remove('d-none');
          subNavMenuItems.classList.remove('d-none');
      } else {
          stickyElement.classList.remove('affix')
          subNavElement.classList.remove('d-inline');
          subNavElement.classList.add('d-none');
          subNavMenuItems.classList.add('d-none');
          if(subNavMenuItemsShowed) {
           subNavMenuItemsShowed.classList.remove('show');
          }
      }
     }
  }
}