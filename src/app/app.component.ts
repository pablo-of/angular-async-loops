import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  achievementsTest = [
    {
      name: 'achievemt1',
      checks: [{ name: '1' }],
      get: true,
    },
    {
      name: 'achievement 2',
      checks: [{ name: '1' }],
      get: true,
    },
    {
      name: 'achievement 3',
      checks: [{ name: '1' }],
      get: true,
    },
  ];

  constructor() {}
  ngOnInit(): void {
    //this.asyncTest();
  }

  public async asyncLoop(): Promise<void> {
    for await(const achievement of this.achievementsTest) {
       console.warn('number 1');
       for await(const check of achievement.checks) {
         console.warn('number 2');
         await this.getAchievementCheck(achievement, check);
         console.warn('number 3');
       }
    }
  }

  public async forEachLoop(): Promise<void> {
    this.achievementsTest.forEach(async achievement => {
      console.warn('number 1');
      achievement.checks.forEach(async check => {
        console.warn('number 2');
        await this.getAchievementCheck(achievement, check);
        console.warn('number 3');
      } )
    })
  }

  public async mapLoop(): Promise<void> {
    this.achievementsTest.map(async achievement => {
      console.warn('number 1');
      achievement.checks.map(async check => {
        console.warn('number 2');
        await this.getAchievementCheck(achievement, check);
        console.warn('number 3');
      } )
    })
  }

  private async getAchievementCheck(achievement, check): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.warn('timeout done');
    return true;
  }
}
