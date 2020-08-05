export type TBlogPost = {
  id: string
  href: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  content: string
  cover: string
}

export type TProject = {
  id: string
  href: string
  title: string
  excerpt: string
  technologies: string[]
  links: {}[]
  cover: string
}

export type TSnippet = {
  id: string
  href: string
  title: string
  excerpt: string
  tags: string[]
  content: string
}

export type TBlogPostPreview = Pick<
  TBlogPost,
  'id' | 'href' | 'title' | 'excerpt' | 'date'
>

export type TPRojectPreview = Pick<
  TProject,
  'id' | 'href' | 'title' | 'excerpt'
>

export type TSnippetPreview = Pick<
  TSnippet,
  'id' | 'href' | 'title' | 'excerpt'
>
