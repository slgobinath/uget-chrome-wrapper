import { UtilityService } from './../utility.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  constructor(private _utilService: UtilityService, private _sanitizer: DomSanitizer) { }
  
    contributions;
  
    ngOnInit() {
      let contributions = [
        {
          icon: 'fa-star',
          title: 'Rate the extension',
          description: 'If you enjoy this extension, please share your review in the respective addon sites to spread the love with others.'
        },
        {
          icon: 'fa-github',
          title: 'Issues',
          description: 'If you are having issues with uGet Chrome Wrapper or the extension, feel free to open issues in the <a href="https://github.com/slgobinath/uget-chrome-wrapper/issues">uGet Chrome Wrapper Github Issues</a> page as necessary.'
        },
        {
          icon: 'fa-money',
          title: 'Donate to uGet',
          description: 'I develop and maintain this extension as my hobby and a way to give back to the open source community. However, I highly encourage you to consider donating few bucks to the <a href="http://ugetdm.com/donate">uGet team</a> for their awesome job.'
        },
        {
          icon: 'fa-heart',
          title: 'Show your love',
          description: 'There are more ways to show your love on uGet Download Manager. Please visit the official <a href="http://ugetdm.com/contribute">uGet</a> page for more details.'
        }
      ];
      this.contributions = this._utilService.distribute(contributions, 2);
    }

}
