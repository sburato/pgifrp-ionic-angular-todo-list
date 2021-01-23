import { Component } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Data } from '../../providers/data/data';
import { EditItemPage } from '../edit-item/edit-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public dataService: Data,
    private toast: ToastController,
    ) {
      this.dataService.getData().then((todos) => {
        if (todos) {
          this.items = todos;
        }
      });
  }

  ionViewDidLoad() {
    this.items = [];
  }

  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {
      if (item) {
        this.saveItem(item);
      }
    });

    addModal.present();
  }

  editarItem(item) {
    let editModal = this.modalCtrl.create(EditItemPage, { item: item });

    editModal.onDidDismiss((editItem) => {
      if (editItem) {
        var index = this.items.indexOf(item);
        this.items[index] = editItem;
        this.dataService.save(this.items);
        this.toast.create({ message: 'Item editado.', duration: 3000, position: 'botton' }).present();                  
      }
    });

    editModal.present();
  }

  excluirItem(item) {   
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);        
    this.dataService.save(this.items);        
    this.toast.create({ message: 'Item removido.', duration: 3000, position: 'botton' }).present();          
  }  

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  saveItem(item) {
    this.items.push(item);
    this.dataService.save(this.items);
  }
}
