import {Injectable} from '@angular/core'

import {PostCardData} from '../post-list/PostCard/component'
import {posts} from './fake-posts' // FixMe: fetch from backend

type ArrayOfPostCards = Array<PostCardData>

@Injectable()
export class PostsService {
  fetchPosts(pageNumber: number): Promise<ArrayOfPostCards> {
    return Promise.resolve(posts) // TODO: server request
  }
}
