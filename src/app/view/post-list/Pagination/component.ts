import {Component, Output, EventEmitter} from '@angular/core'
import {ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'gp-pagination',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class Pagination {
  @Output() change = new EventEmitter<'next' | 'prev'>()

  pageNumber: number

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params
      .subscribe(async (params: Params) => {
        this.pageNumber = params.pageNumber || 1
      })
  }

  onPrevButtonClick() {
    this.change.emit('prev')
    this.router.navigate([`/posts/page/${--this.pageNumber}`])
  }

  onNextButtonClick() {
    this.change.emit('next')
    this.router.navigate([`/posts/page/${++this.pageNumber}`])
  }
}
