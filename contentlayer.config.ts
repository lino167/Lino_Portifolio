import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeSanitize from 'rehype-sanitize'

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc: any) => doc._raw.flattenedPath,
  },
} as const

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    date: { type: 'date', required: true },
    cover: { type: 'string', required: false },
    published: { type: 'boolean', required: true },
  },
  computedFields,
}))

export const Case = defineDocumentType(() => ({
  name: 'Case',
  filePathPattern: `portfolio/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    date: { type: 'date', required: true },
    cover: { type: 'string', required: false },
    published: { type: 'boolean', required: true },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post, Case],
  mdx: {
    rehypePlugins: [rehypeSanitize],
  },
});