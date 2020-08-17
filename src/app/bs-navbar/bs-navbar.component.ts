import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }


  isOpen = false;
  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
// let prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.background = "blue";
//   } else {
//     document.getElementById("navbar").style.background = "red";
//   }
//   prevScrollpos = currentScrollPos;
// }
@HostListener('window:scroll', [])
onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollOffset >= 600) {
        document.querySelectorAll('.controllable').forEach((c) => {
            c.classList.add('newColor');
            c.classList.remove('oldColor');
        });
    } else {
        document.querySelectorAll('.controllable').forEach((c) => {
            c.classList.add('oldColor');
            c.classList.remove('newColor');
        });
    }
}
}
