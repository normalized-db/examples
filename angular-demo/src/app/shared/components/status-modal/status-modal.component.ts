import { Component, OnInit } from '@angular/core';
import { DataStoreService, Types } from '../../../core/service/data-store.service';

class Store {
  type: string;
  length: number;
}

@Component({
  selector: 'app-status-modal',
  templateUrl: './status-modal.component.html',
  styleUrls: ['./status-modal.component.scss']
})
export class StatusModalComponent implements OnInit {

  public stores: Store[];

  constructor(private dataStore: DataStoreService) {
  }

  public async ngOnInit() {
    this.stores = [];
    await Promise.all(this.dataStore.types.map(async type => {
      const length = await this.dataStore.count(type as Types).result();
      this.stores.push({
        type: type,
        length: length
      });
    }));

    this.stores.sort((s1, s2) => s1.type.localeCompare(s2.type));
  }

  public async showHistory(store: Store): Promise<void> {
    // const history = await this.dataStore.getHistory(store.type);
    // console.log('History for ' + store.type, history.entries());
    // this.utilities.showSnackBar('The history for ' + store.type + ' has been written to the console');
  }
}
