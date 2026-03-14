import { Component, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent  {

 windowWidth: number = window.innerWidth;
  private resizeListener: () => void;


   constructor(private renderer: Renderer2) {
    this.resizeListener = ()=>{}
   }

ngOnInit(){

    this.resizeListener = this.renderer.listen('window', 'resize', (event) => {
      this.windowWidth = event.target.innerWidth;
      this.onWindowResize();
    })

}


 onWindowResize() {
    // Your resize logic here
    alert(this.windowWidth);
    if(this.windowWidth < 800){
      this.collapseNav = false;
    }
  }

  collapseNav :boolean = false;
  // Define button systems
  collapseMobileNav(){
    this.collapseNav = !this.collapseNav;
  }



}
