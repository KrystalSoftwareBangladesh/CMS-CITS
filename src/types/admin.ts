export interface MenuItem {
  label: string
  icon: string
  to?: string
  children?: MenuItem[]
  permission?: string
}

export interface MenuGroup {
  title: string
  items: MenuItem[]
}

export interface BreadcrumbItem {
  label: string
  to?: string
}

export interface TableColumn {
  key: string
  label: string
  sortable?: boolean
  width?: string
}

export interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalItems: number
  perPage: number
}

export interface SelectOption {
  label: string
  value: string | number
}

export interface TabItem {
  id: string
  label: string
  icon?: string
}
