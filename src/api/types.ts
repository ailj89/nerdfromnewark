export interface Hobby {
  activity?: string
  name: string
  favorites?: string
  icon?: string
}

export interface Interest {
  name: string
  icon?: string
}

export interface Role {
  company: string
  img?: string
  location?: string
  duties: string[]
  date: string
  title: string
  type?: string
  projects?: Project[]
  logo?: string
  url?: string
}

export interface Skill {
  name: string
  years: number
  icon?: string
}

export interface Project {
  name: string
  details: string
  url?: string
  url2?: string
}
