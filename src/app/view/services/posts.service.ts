import {Injectable} from '@angular/core'
import {Http, Response, RequestOptions, Headers} from '@angular/http'
import 'rxjs/add/operator/toPromise'

import {PostCardData} from '../post-list/PostCard/component'
import {PostData} from '../post/Post/component'
import {postCards} from './fake-posts' // FixMe: fetch from backend

import {CacheService} from '../../cache/cache.service'

type ArrayOfPostCards = Array<PostCardData>

@Injectable()
export class PostsService {
  constructor(private cacheService: CacheService, private http: Http) {}

  fetchPosts(pageNumber: number): Promise<ArrayOfPostCards> {
    return new Promise((resolve) => {
      this.cacheService.cachePagePosts(pageNumber, postCards)
      setTimeout(() => resolve(postCards), 1000)
    }) // TODO: server request
  }

  fetchPost(slug: string): Promise<PostData> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({headers})

    return this.http.get(`/api/post/${slug}`, options)
      .toPromise()
      .then((res: Response) => res.json())
      .then((post: PostData) => {
        this.cacheService.cachePost(post)
        return post
      })
      .catch((err: Response | any) => {
        throw err
      })
  }
}
