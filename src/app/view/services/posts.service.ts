import {Injectable} from '@angular/core'

import {PostCardData} from '../post-list/PostCard/component'
import {PostData} from '../post/Post/component'
import {postCards, posts} from './fake-posts' // FixMe: fetch from backend

type ArrayOfPostCards = Array<PostCardData>

@Injectable()
export class PostsService {
  fetchPosts(pageNumber: number): Promise<ArrayOfPostCards> {
    return Promise.resolve(postCards) // TODO: server request
  }

  fetchPost(slug: string): Promise<PostData> {
    return Promise.resolve(posts[slug]) // TODO: server request
  }
}
