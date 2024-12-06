import {Injectable, signal} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MobileMenuService {
  public showMenu = signal(false);

  public openMenu(): void {
    this.showMenu.update(() => true);
  }

  public closeMenu(): void {
    this.showMenu.update(() => false);
  }
}
