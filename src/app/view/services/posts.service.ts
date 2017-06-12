import {Injectable} from '@angular/core'
import {Http, Response, RequestOptions, Headers} from '@angular/http'
import 'rxjs/add/operator/toPromise'

import {PostCardData} from '../post-list/PostCard/component'
import {PostData} from '../post/Post/component'

import {CacheService} from '../../cache/cache.service'

type ArrayOfPostCards = Array<PostCardData>

@Injectable()
export class PostsService {
  private options: RequestOptions

  constructor(private cacheService: CacheService, private http: Http) {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    this.options = new RequestOptions({headers})
  }

  fetchPosts(pageNumber: number): Promise<ArrayOfPostCards> {
    return this.http.get(`/api/posts/page/${pageNumber}`, this.options)
      .toPromise()
      .then((res: Response) => res.json().data)
      .then((postCards: ArrayOfPostCards) => {
        this.cacheService.cachePagePosts(pageNumber, postCards)
        return postCards
      })
      .catch((err: Response | any) => {
        throw err
      })
  }

  fetchPost(slug: string): Promise<PostData> {
    return this.http.get(`/api/post/${slug}`, this.options)
      .toPromise()
      .then((res: Response) => res.json().data)
      .then((post: PostData) => {
        this.cacheService.cachePost(post)
        return post
      })
      .catch((err: Response | any) => {
        throw err
      })
  }
}
