import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { MenuItem } from '../menu-model/menu.item'
import { MenuService } from '../menu-service/menu.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public title: string = 'Mapster'
  public items: MenuItem[]
  public user: MenuItem

  //////////////////
  // Constructors //
  //////////////////
  constructor(

    private router: Router,
    public menuService: MenuService

  ) {

    this.items = []
    this.items.push(

       new MenuItem('profile', 'lock_open', '/predictions'),
       new MenuItem('home', 'grain', '/markets'),
       new MenuItem('friends', 'grain', '/markets'),
       new MenuItem('groups', 'grain', '/markets'),
       new MenuItem('notifications', 'grain', '/markets'),
       new MenuItem('messages', 'grain', '/markets'),

    )

    this.user = new MenuItem('User', 'account_circle', '/user')


  }

  ngOnInit() {}

  ///////////////
  // Functions //
  ///////////////
  public navigateToMenuEntry(item: MenuItem): void {

    this.router.navigate([item.getLink()])

  }

  public switchToLandingPage(): void {

    this.router.navigate([''])

  }

}
