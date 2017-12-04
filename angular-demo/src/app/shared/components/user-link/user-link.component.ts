import { Component, Input } from '@angular/core';
import { User } from '../../../core/entity/user';

@Component({
  selector: 'app-user-link',
  templateUrl: './user-link.component.html',
  styleUrls: ['./user-link.component.scss']
})
export class UserLinkComponent {

  @Input() public user: User;

}
