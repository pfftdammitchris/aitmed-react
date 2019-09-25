export interface PhotoListRow {
  data?: string
  src?: string
  blob?: File | Blob
  title?: string
  description?: string
  lastModified?: number | string
}

export interface PhotoListRowItem {
  src?: string
  title?: string
  description?: string
  ext?: string
}
