"use client";

import { useCallback, useMemo, useRef, useState } from "react";

/**
 * Dùng chung cho mọi danh sách có phân trang (blog-standard, project-1,
 * project-2 — xem Pagination.tsx). Chỉ giữ `currentPage` trong state rồi
 * cắt `items` theo `pageSize`; mảng data gốc không bị đụng tới nên các
 * section khác đang dùng chung data (Home/ai-startup đọc projects.ts,
 * BlogPreviewSection đọc blog.ts) không bị ảnh hưởng.
 *
 * `topRef` gắn vào phần tử đầu danh sách của trang gọi hook — mỗi lần đổi
 * trang sẽ scrollIntoView riêng phần tử đó thay vì cuộn cả trang lên đầu.
 */
export function usePagination<T>(items: T[], pageSize: number) {
  const [currentPage, setCurrentPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));

  const pagedItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, pageSize, currentPage]);

  const goToPage = useCallback(
    (page: number) => {
      const clamped = Math.min(Math.max(page, 1), totalPages);
      setCurrentPage(clamped);
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [totalPages]
  );

  const goToPrev = useCallback(() => goToPage(currentPage - 1), [goToPage, currentPage]);
  const goToNext = useCallback(() => goToPage(currentPage + 1), [goToPage, currentPage]);

  return { currentPage, totalPages, pagedItems, goToPage, goToPrev, goToNext, topRef };
}
