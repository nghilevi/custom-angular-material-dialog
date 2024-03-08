import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThemeService } from '../../theme.service';
import { Unsub } from '../../unsub.class';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent extends Unsub implements OnInit{

  theme: string = 'light';

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string; content: string }, private themeService: ThemeService) { 
    super();
  }
  
  ngOnInit(): void {
    this.themeService.getTheme().pipe(takeUntil(this.unsubscribe$)).subscribe(theme => {
      this.theme = theme;
    })
  }
}
