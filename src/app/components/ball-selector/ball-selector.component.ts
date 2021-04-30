import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-ball-selector',
	templateUrl: './ball-selector.component.html',
	styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {

	balls: any = null;
	ballSelected: any = null;
	winner:boolean = false;

	constructor(private sharedService: SharedService) {
		this.balls = environment.balls;

		this.sharedService.currentWinner.subscribe((result) => {
			this.winner = result;
		});
	}

	ngOnInit(): void {
	}

	selectionBall(index) {
		this.sharedService.currentBallSelected.subscribe((ball) => {
			this.ballSelected = ball;
		});

		if(this.ballSelected != null) {
			this.balls[this.ballSelected].color = this.balls[this.ballSelected].colorOriginal;
		}
		this.balls[index].color="blue";
		this.sharedService.changeBallSelected(index);
	}

	clearSelection(){
		this.balls[this.ballSelected].color = this.balls[this.ballSelected].colorOriginal;
		this.sharedService.changeBallSelected(null);
	}

}
