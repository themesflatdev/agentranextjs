interface PaginationProps {
  /** project-1.html's pagination is centered ("justify-content-center" on
   *  the <ul>) with an "mt-70" gap above it; blog-standard.html's sidebar
   *  placement has neither — confirmed by diffing both sources directly. */
  centered?: boolean;
}

export default function Pagination({ centered = false }: PaginationProps) {
  return (
    <div className={`wg-pagination${centered ? " mt-70" : ""}`}>
      <ul className={`d-flex align-items-center${centered ? " justify-content-center" : ""} g-10`}>
        <li className="active wow fadeInUp text-body-1 fw-6">1</li>
        <li className="wow fadeInUp text-body-1 fw-6" data-wow-delay=".1s">
          2
        </li>
        <li className="wow fadeInUp text-body-1 fw-6" data-wow-delay=".2s">
          3
        </li>
        <li className="wow fadeInUp text-body-1 fw-6" data-wow-delay=".3s">
          <i className="icon-arrow-up-right"></i>
        </li>
      </ul>
    </div>
  );
}
