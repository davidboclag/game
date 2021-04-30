import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-bet-slip',
	templateUrl: './bet-slip.component.html',
	styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent implements OnInit {

	balls: any = null;
	lastBalls: any = null;
	cantidadApostada: number = 1;
	ballSelected: number = null;
	message:string = '';
	winner: boolean = false;

	constructor(private sharedService: SharedService) {
		this.balls = environment.balls;
		this.lastBalls = environment.lastBalls;

		this.sharedService.currentBallSelected.subscribe((ball) => {
			this.ballSelected = ball;
		});
		
		this.sharedService.currentWinner.subscribe((result) => {
			this.winner = result;
		});
	}

	ngOnInit(): void {
	}

	getStyleBalls(i) {
		let style: any = { 'background-color': 'grey' };
		if (i != null) {
			style = { 'background-color': this.balls[i].colorOriginal };
		}

		return style;
	}

	playGame() {
		this.message = '';
		if(this.ballSelected != null && this.cantidadApostada > 0){
			var bolaGanaradora = this.balls[Math.floor(Math.random()*this.balls.length)];
			if(bolaGanaradora === this.balls[this.ballSelected]) {
				this.sharedService.changeWinner(true);
				this.message = 'Has ganado ' + (this.cantidadApostada * 5) * 1.5 + '€';
			} else {
				this.sharedService.changeWinner(false);
				this.message = 'Ops, lo sentimos, has perdido. Vuelve a intentarlo a ver si tienes más suerte.';
			}

			this.lastBalls.pop();
			for (let i = this.lastBalls.length; i > 0 ; i--) {
				this.lastBalls[i] = this.lastBalls[i-1];
			}
			var indexBolaGanadora = this.balls.indexOf(bolaGanaradora);
			this.lastBalls[0] = indexBolaGanadora;
		} else {
			this.message = 'Para empezar a jugar debes primero seleccionar una cantidad positiva > 0 a apostar y seleccionar una bola';
		}
	}

}
