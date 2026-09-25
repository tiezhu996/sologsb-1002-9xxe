export type Role = 'author' | 'reviewer' | 'editor'
export type ParagraphStatus = 'open' | 'accepted' | 'locked'
export type CommentStatus = 'open' | 'pending_review' | 'accepted' | 'rejected' | 'merged'
export type CommentType = 'comment' | 'suggestion'

export interface Resolution {
  decision: 'accepted' | 'rejected'
  note: string
  author: string
  createdAt: number
}

export interface ReviewRecord {
  id: string
  action: 'confirmed' | 'returned'
  note: string
  author: string
  createdAt: number
}

export interface Reply {
  id: string
  author: string
  role: Role
  body: string
  createdAt: number
}

export interface Comment {
  id: string
  paragraphId: string
  author: string
  role: Role
  type: CommentType
  quote: string
  body: string
  suggestion?: string
  status: CommentStatus
  resolution?: Resolution
  reviews: ReviewRecord[]
  replies: Reply[]
  createdAt: number
  mergedInto?: string
}

export interface Paragraph {
  id: string
  section: string
  number: string
  text: string
  original: string
  status: ParagraphStatus
  highlighted: boolean
}

export interface Version {
  id: string
  label: string
  createdAt: number
  paragraphs: Paragraph[]
}

export interface EditConflict {
  id: string
  paragraphId: string
  localText: string
  remoteText: string
  localAuthor: string
  remoteAuthor: string
  detectedAt: number
}

export interface HistorySnapshot {
  paragraphs: Paragraph[]
  comments: Comment[]
  versions: Version[]
}
