export interface Interest {
  name: string
  icon?: string
}

export interface Hobby extends Interest {
  activity?: string
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
  projects?: Project[]
  logo?: string
  url?: string
}

export interface Skill extends Interest {
  years: number
}

export interface Project {
  name: string
  details: string
  url?: string
  url2?: string
  techstack?: Interest[]
}
