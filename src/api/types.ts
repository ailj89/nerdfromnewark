export interface Hobby {
  activity?: string
  name: string
  favorites?: string
}

export interface Role {
  company: string
  img?: string
  location?: string
  duties: string[]
  date: string
  title: string
  type?: string
}

export interface Skill {
  name: string
  years: number
}
