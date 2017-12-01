import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';
import { post1, post2, post3 } from '../../../../assets/data/data';
import { StatusModalComponent } from '../../../status/status-modal/status-modal.component';
import { DataStoreService } from '../../service/data-store.service';
import { UtilitiesService } from '../../service/utilities.service';
import { ToolbarButton } from '../shared/model/toolbar-button';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  public readonly buttons: ToolbarButton[] = [
    {
      id: 'btnStatus',
      label: 'Show status',
      icon: 'bubble_chart',
      onClick: () => this.showStatus()
    },
    {
      id: 'btnUsers',
      label: 'Show users',
      icon: 'group',
      onClick: () => this.showUsers()
    },
    {
      id: 'btnBulkAdd',
      label: 'Bulk add',
      icon: 'add',
      onClick: () => this.bulkAdd()
    },
    {
      id: 'btnClear',
      label: 'Clear all',
      icon: 'delete',
      onClick: () => this.clear()
    }
  ];

  constructor(private router: Router,
              private dialog: MdDialog,
              private dataStore: DataStoreService,
              private utility: UtilitiesService) {
  }

  public showStatus() {
    this.dialog.open(StatusModalComponent, { width: '300px' });
  }

  public async showUsers() {
    await this.router.navigate(['/user']);
  }

  public async bulkAdd() {
    if (await this.dataStore.put('article', [post1, post2, post3])) {
      this.utility.showSnackBar('Saved demo data');
      console.log('#toolbar: demo data added');
    } else {
      this.utility.showSnackBar('Could not save demo data');
    }
  }

  public async clear() {
    if (await this.dataStore.clear()) {
      this.utility.showSnackBar('Cleared data');
      console.log('#toolbar: cleared all');
    } else {
      this.utility.showSnackBar('Could not clear data');
    }
  }
}
