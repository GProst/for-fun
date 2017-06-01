import {Injectable} from '@angular/core'

import {PostData} from '../view/post/Post/component'
import {PostCardData} from '../view/post-list/PostCard/component'

type CachedPostsPage = {
  pageNumber: number,
  postList: Array<PostCardData>
}

@Injectable()
export class CacheService {
  private cachedPosts: Array<PostData> = []
  private cachedPostsPages: Array<CachedPostsPage> = []

  cachePost(post: PostData) {
    if (this.cachedPosts.length > 5) { // do not cache too many
      this.cachedPosts.shift()
    }
    this.cachedPosts.push(post)
  }

  getPost(slug: string): PostData {
    return this.cachedPosts.find(post => post.slug === slug)
  }

  cachePagePosts(pageNumber: number, postList: Array<PostCardData>) {
    if (this.cachedPostsPages.length > 10) { // do not cache too many
      this.cachedPostsPages.shift()
    }
    this.cachedPostsPages.push({pageNumber, postList})
  }

  getPagePosts(pageNumber: number): Array<PostCardData> {
    const cachedPage = this.cachedPostsPages.find(postsPage => postsPage.pageNumber === pageNumber)
    const cachePagePosts = cachedPage ? cachedPage.postList : undefined
    return cachePagePosts
  }
}
