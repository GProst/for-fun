import {Injectable} from '@angular/core'
import {Subject}    from 'rxjs/Subject'

@Injectable()
export class PaginationService {
  private currentPageUpdatesSource = new Subject<number>()

  currentPageUpdates$ = this.currentPageUpdatesSource.asObservable()

  updateCurrentPageNumber(pageNumber: number) {
    this.currentPageUpdatesSource.next(pageNumber)
  }
}
