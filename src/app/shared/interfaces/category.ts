import { Post } from "./post"

export interface Category extends Post{
  title_category: string
  minor_posts: Post[]
}
