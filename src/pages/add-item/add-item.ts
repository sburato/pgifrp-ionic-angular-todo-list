import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage { 

  title: string;
  description: string;

  constructor(
    public navCtrl: NavController, 
    public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  close() {
    this.view.dismiss();
  }

  saveItem() {
    let newItem = {
      title: this.title,
      description: this.description
    };

    this.view.dismiss(newItem);
  }
}
