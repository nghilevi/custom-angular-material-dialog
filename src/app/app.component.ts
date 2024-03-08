import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../libs/nokia-ui/components/dialog/dialog.component';
import { ThemeService } from 'src/libs/nokia-ui/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isDarkTheme: boolean = false;

  constructor(private dialog: MatDialog, private themeService: ThemeService) {}
  
  ngOnInit() {
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '400px',
      data: { title: 'Nokia Dialog title' },
    });
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark' : 'light';
    this.themeService.setTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

}
