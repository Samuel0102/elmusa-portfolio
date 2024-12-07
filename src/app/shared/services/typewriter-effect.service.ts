import { Injectable } from '@angular/core';
import {concat, concatMap, delay, from, ignoreElements, interval, map, Observable, of, repeat, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TypewriterEffectService {
  public type(word: string, speed: number): Observable<string> {
    return interval(speed)
      .pipe(
        map(x => word.substring(0, x + 1)),
        take(word.length)
      );
  }

  public typeBackwards(word: string, speed: number): Observable<string> {
    return interval(speed)
      .pipe(
        map(x => word.substring(0, word.length - x)),
        take(word.length)
      );
  }

  public typeEffect(word: string): Observable<string> {
    return concat(
      this.type(word, 70),
      of('').pipe(delay(2000), ignoreElements()),
      this.typeBackwards(word, 50),
      of('').pipe(delay(600), ignoreElements()),
    )
  }

  public getTypeWriterEffect(titles: string[]): Observable<string> {
    return from(titles)
      .pipe(
        concatMap((title) => this.typeEffect(title)),
        repeat()
      )
  }
}
