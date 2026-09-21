interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  /** project-1.html's pagination is centered ("justify-content-center" on
   *  the <ul>) with an "mt-70" gap above it; blog-standard.html's sidebar
   *  placement has neither — confirmed by diffing both sources directly. */
  centered?: boolean;
}

// The static markup only ships ONE arrow <li> (icon-arrow-up-right — a
// decorative "view more" glyph, not an actual prev/next pair; confirmed
// against project-1.html/blog-standard.html directly). A working pager needs
// both directions with independent disabled states, so this swaps in the
// template's own icon-arrow-left-2/-right-2 pair (already shipped in the
// icon font, see assets/icons/icomoon/demo.html) instead of reusing that
// diagonal glyph for both ends.
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  centered = false,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;

  return (
    <div className={`wg-pagination${centered ? " mt-70" : ""}`}>
      <ul className={`d-flex align-items-center${centered ? " justify-content-center" : ""} g-10`}>
        <li
          className={`wow fadeInUp text-body-1 fw-6${isFirst ? " disabled" : ""}`}
          aria-disabled={isFirst}
          onClick={() => !isFirst && onPageChange(currentPage - 1)}
        >
          <i className="icon-arrow-left-2"></i>
        </li>

        {pages.map((page, index) => (
          <li
            key={page}
            className={`wow fadeInUp text-body-1 fw-6${page === currentPage ? " active" : ""}`}
            data-wow-delay={`.${index + 1}s`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}

        <li
          className={`wow fadeInUp text-body-1 fw-6${isLast ? " disabled" : ""}`}
          data-wow-delay={`.${pages.length + 1}s`}
          aria-disabled={isLast}
          onClick={() => !isLast && onPageChange(currentPage + 1)}
        >
          <i className="icon-arrow-right-2"></i>
        </li>
      </ul>
    </div>
  );
}
