import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2">

      <Button
        variant="outline"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeft size={16} />
      </Button>

      <span className="px-4 text-sm font-medium">
        {page} / {totalPages}
      </span>

      <Button
        variant="outline"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        <ChevronRight size={16} />
      </Button>

    </div>
  );
}