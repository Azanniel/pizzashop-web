import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} items(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>

        <div className="flex items-center gap-2">
          <Button className="h-8 w-8 p-0" variant="outline">
            <ChevronsLeft />
            <span className="sr-only">Primeira página</span>
          </Button>

          <Button className="h-8 w-8 p-0" variant="outline">
            <ChevronLeft />
            <span className="sr-only">Página anterior</span>
          </Button>

          <Button className="h-8 w-8 p-0" variant="outline">
            <ChevronRight />
            <span className="sr-only">Próxima página</span>
          </Button>

          <Button className="h-8 w-8 p-0" variant="outline">
            <ChevronsRight />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
