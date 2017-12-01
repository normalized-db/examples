import { Component, OnInit } from '@angular/core';
import { ListResult } from '@normalized-db/data-store';
import { User } from '../../core/entity/user';
import { DataStoreService } from '../../core/service/data-store.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {

  public users: ListResult<User>;

  constructor(private dataStore: DataStoreService) {
  }

  public async ngOnInit() {
    await this.reload();
  }

  public async reload() {
    this.users = await this.dataStore.find<User>('user').result();
    console.log('#user-list: get all', this.users);
  }

  public async remove(user: User) {
    await this.dataStore.remove('user', user.userName);
    console.log('#user-list: removed', user.userName);
    await this.reload();
  }
}
