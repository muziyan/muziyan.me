import Link from "./Link";
import {calculateReadTime} from "../utils/readtime"
const Posts = ({posts}: {posts:Record<string, any>[]}) => {

  const formatDate = (post:Record<string, any>) => {
    const date = new Date(post.data.pubDate)

    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
  }

  return (
    <ul className='post-list'>
      {
        posts.map(post => {
          return (
            <li className='post-item'>
              <Link href={`/blog/${post.slug}`}>
                <h3 className={"post-title"}>{post.data.title}</h3>
                <p className={"post-desc post-time"}>{formatDate(post)} · {calculateReadTime(post.body)}min</p>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Posts
