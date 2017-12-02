import { UtilityService } from './../utility.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor(private _utilService: UtilityService, private _sanitizer: DomSanitizer) { }

  features;

  ngOnInit() {
    let features = [
      {
        icon: 'fa-handshake-o',
        title: 'Browser Integration',
        description: 'The uGet Integration extension replaces the default download manager with uGet Download Manager. All you need to do is simply clicking on the download links. You can also right click on links and download with uGet even if the extension is temporarily disabled by yourself.'
      },
      {
        icon: 'fa-ban',
        title: 'Skip uGet',
        description: this._sanitizer.bypassSecurityTrustHtml('S​ometimes downloading using the browser is a prefereable option. In such case press and hold the <code>Insert</code> key to prevent uGet from interrupting your download. To temporarily disable & enable uGet Chrome Wrapper, use <code>Ctrl + Shift + U</code>.')
      },
      {
        icon: 'fa-youtube',
        title: 'Download YouTube Videos',
        description: this._sanitizer.bypassSecurityTrustHtml('The uGet Integration extension itself does not download from YouTube since it is against the policy of Google. However if you download YouTube videos using <a href="http://en.savefrom.net/">Savefrom.net</a> extension, this extension will interrupt and download them using uGet.')
      },
      {
        icon: 'fa-filter',
        title: 'Filter URLs',
        description: this._sanitizer.bypassSecurityTrustHtml('Users can skip or force the uGet Integration extension to catch the downloads based on file size and keywords in the URL. Keywords must be separated by comma. For example, to skipp all images, use these keywords: <code>png, jpg, gif, bmp, ico</code>')
      },
      {
        icon: 'fa-files-o',
        title: 'Batch Download',
        description: this._sanitizer.bypassSecurityTrustHtml('To download all links from a web site, right click on the page and select <code>Download all links with uGet</code>. It will extract all unique links and send them to the uGet batch downloader.')
      },
      {
        icon: '',
        title: '',
        description: ''
      }
    ];
    this.features = this._utilService.distribute(features, 3);
  }
}
