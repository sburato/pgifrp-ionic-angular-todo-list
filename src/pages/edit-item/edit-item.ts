import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  title;
  description;

  constructor(
    public navParams: NavParams,
    public view: ViewController) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }  

  close() {
    this.view.dismiss(null);
  }

  saveItem() {
    let editItem = {
      title: this.title,
      description: this.description
    };

    this.view.dismiss(editItem);
  }  
}
