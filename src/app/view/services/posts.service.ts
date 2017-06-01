import {Injectable} from '@angular/core'

import {PostCardData} from '../post-list/PostCard/component'
import {PostData} from '../post/Post/component'
import {postCards, posts} from './fake-posts' // FixMe: fetch from backend

import {CacheService} from '../../cache/cache.service'

type ArrayOfPostCards = Array<PostCardData>

@Injectable()
export class PostsService {
  constructor(private cacheService: CacheService) {}

  fetchPosts(pageNumber: number): Promise<ArrayOfPostCards> {
    return new Promise((resolve) => {
      this.cacheService.cachePostsPage(pageNumber, postCards)
      setTimeout(() => resolve(postCards), 2000)
    }) // TODO: server request
  }

  fetchPost(slug: string): Promise<PostData> {
    return new Promise((resolve) => {
      const post = posts[slug]
      this.cacheService.cachePost(post)
      setTimeout(() => resolve(post), 2000)
    }) // TODO: server request
  }
}
