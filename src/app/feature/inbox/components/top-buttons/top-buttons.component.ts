import { Component } from '@angular/core';
<<<<<<< HEAD
import { TopButtonsService } from 'src/app/service/top-buttons.service';
import { inject, Injectable } from '@angular/core';
=======
>>>>>>> b71df0380ac71b0873e30a28b543fecd8796e5ac

@Component({
  selector: 'app-top-buttons',
  templateUrl: './top-buttons.component.html',
  styleUrls: ['./top-buttons.component.scss']
})
export class TopButtonsComponent {
<<<<<<< HEAD
  bottonService = inject(TopButtonsService)


  async reporte() {
    const response = await this.bottonService.reporte();
    console.log (response);
  }
}

=======

}
>>>>>>> b71df0380ac71b0873e30a28b543fecd8796e5ac
