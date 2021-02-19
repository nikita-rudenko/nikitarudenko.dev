import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), '/content/')

function parseWithMatter(dir: string, fileName: string) {
  const fullPath = path.join(dir, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  return matter(fileContents)
}

type Options = {
  sort: 'asc' | 'desc' | false
}

export function getContentDataList(
  path: string,
  options: Options = {
    sort: 'desc',
  }
) {
  const dir = `${CONTENT_DIR}${path}`
  const fileNames = fs.readdirSync(dir)

  const contentArr = fileNames.map((fileName) => {
    const { data, content } = parseWithMatter(dir, fileName)

    return {
      id: fileName.replace(/\.md$/, ''),
      data,
      content,
    }
  })

  // Sort by date
  if (options.sort) {
    return contentArr.sort((a, b) => {
      return options.sort === 'desc'
        ? b.data.date - a.data.date
        : a.data.date - b.data.date
    })
  }

  return contentArr
}

export function getPageSlugs(path: string) {
  const dir = `${CONTENT_DIR}${path}`
  const fileNames = fs.readdirSync(dir)

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export function getContentData(path: string, id: string) {
  const dir = `${CONTENT_DIR}/${path}`

  const { data, content } = parseWithMatter(dir, `${id}.md`)

  return {
    id,
    data,
    content,
  }
}
