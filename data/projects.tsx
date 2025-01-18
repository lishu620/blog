export const projects: Project[] = [
  // WebSite
  {
    title: '璃殊的小站',
    description: '🦖 基于 Docusaurus 静态网站生成器实现个人博客',
    preview: '/img/project/blog.png',
    website: 'https://note.mlishu.top',
    source: 'https://github.com/lishu620/blog',
    tags: ['opensource', 'design', 'favorite'],
    type: 'web',
  },

  // toy
  // {
  //   title: '便民服务',
  //   description: '🌱 一个便民服务的网站',
  //   preview: '/img/project/service.png',
  //   website: 'https://service.mlishu.cn',
  //   source: 'https://github.com/mlishu/service',
  //   tags: ['opensource', 'personal'],
  //   type: 'toy',
  // },
  
  {
    title: 'Nuxt-Naive-Admin',
    description: '🎁 一站式管理系统，融合 Nuxt、Naive UI 和 Supabase',
    preview: '/img/project/nuxt-naive-admin.png',
    website: 'https://nuxt-naive-admin.vercel.app',
    source: 'https://github.com/mlishu/nuxt-naive-admin',
    tags: ['opensource'],
    type: 'toy',
  },
  
  // personal
  // {
  //   title: '@mlishu/utils',
  //   description: '整理 JavaScript / TypeScript 的相关工具函数',
  //   website: 'https://www.npmjs.com/package/@mlishu/utils',
  //   tags: ['opensource', 'personal'],
  //   type: 'personal',
 
  // other
  // {
  //   title: '@mlishu/http',
  //   description: '基于 Axios 封装的 HTTP 类库',
  //   website: 'https://www.npmjs.com/package/@mlishu/http',
  //   tags: ['opensource', 'personal'],
  //   type: 'other',
  // },
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'design' | 'large' | 'personal'

export type ProjectType = 'web' | 'app' | 'commerce' | 'personal' | 'toy' | 'other'

export const projectTypeMap = {
  web: '🖥️ 网站',
  app: '💫 应用',
  commerce: '商业项目',
  personal: '👨‍💻 个人',
  toy: '🔫 玩具',
  other: '🗃️ 其他',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
