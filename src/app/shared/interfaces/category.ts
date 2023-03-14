import { Post } from "./post"

export interface Category extends Post{
  title_category: string
  description_post: string
  minor_posts: Post[]
}
