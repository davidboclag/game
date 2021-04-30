import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private ballSelected = new BehaviorSubject<number>(null);
  currentBallSelected = this.ballSelected.asObservable();
  
  private winner = new BehaviorSubject<boolean>(false);
  currentWinner = this.winner.asObservable();

  changeBallSelected(ball: number) {
    this.ballSelected.next(ball);
  }
  
  changeWinner(result: boolean) {
    this.winner.next(result);
  }

  constructor() { }
}
