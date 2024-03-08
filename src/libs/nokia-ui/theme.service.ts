import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
    private themeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('light');

    constructor() { }

    getTheme(): Observable<string> {
        return this.themeSubject.asObservable();
    }

    setTheme(theme: string): void {
        this.themeSubject.next(theme);
    }
}