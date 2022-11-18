export interface IFilmeData {
    id?: number
    title?: string
    message?: string
    created_at?: string
    user?: {
      name: string
    }
    messageTopic?: {
      id: number
      name: string
    }[]
  }
  
  export interface IFilmeForm {
    id?: number
    title?: string
    message?: string
    created_at?: string
    topic?: number[] | undefined
  }