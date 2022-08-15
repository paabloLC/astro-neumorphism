import { useCallback, useEffect, useState } from 'preact/hooks'

export interface MediumArticleProps {
  author: string
  categories: string[]
  content: string
  description: string
  link: string
  pubDate: string
  thumbnail: string
  title: string
}

const useGetMediumArticles = (): [
  articles: MediumArticleProps[],
  fetchArticles: () => Promise<void>
] => {
  const [articles, setArticles] = useState<MediumArticleProps[]>([])

  const fetchArticles = useCallback(async () => {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pablolc'
    )

    const data = await response.json()

    setArticles(data.items)
  }, [])

  useEffect(() => {
    fetchArticles()
  }, [fetchArticles])

  return [articles, fetchArticles]
}

export default useGetMediumArticles