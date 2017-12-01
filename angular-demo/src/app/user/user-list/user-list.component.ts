import { Component, Input } from '@angular/core';
import { ListResult } from '@normalized-db/data-store';
import { User } from '../../core/entity/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() public users: ListResult<User>;

}
