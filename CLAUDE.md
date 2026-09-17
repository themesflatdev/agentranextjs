# CLAUDE.md — agentranextjs

Dự án Next.js được convert từ template HTML tĩnh `agentrahtml`
(Bootstrap + SCSS + jQuery + GSAP, agency/AI-startup template).

Nguồn HTML gốc nằm ở: `../agentrahtml/` (dùng để đối chiếu, KHÔNG chỉnh sửa).

## Stack

- Next.js App Router (KHÔNG dùng Pages Router)
- TypeScript
- SCSS thuần (không dùng Tailwind) — giữ nguyên style gốc từ template HTML
- React 19

## Cấu trúc thư mục bắt buộc

```
src/
├── app/
│   ├── (main)/              → nhóm các trang chính dùng chung layout header/footer
│   │   ├── page.tsx         → trang chủ (index.html)
│   │   ├── about/
│   │   ├── service/
│   │   ├── service-details/[slug]/
│   │   ├── project-1/, project-2/, project-details/[slug]/
│   │   ├── blog-standard/, blog-details/[slug]/
│   │   ├── team/, pricing/, faq/, contact/
│   ├── layout.tsx           → RootLayout, bọc Header/Footer/Preloader/GoTop
│   └── not-found.tsx        → convert từ 404.html
├── components/
│   ├── layout/              → Header, Footer, MobileMenu, Preloader, GoTopButton
│   │   └── useStickyHeader.ts  → hook riêng, KHÔNG viết inline trong Header
│   ├── sections/            → mỗi section lặp lại nhiều trang = 1 component,
│   │                          nhận data qua props, KHÔNG hardcode
│   ├── home/                → section chỉ dùng riêng cho trang chủ
│   ├── blog/
│   ├── othersPages/         → about, faq, team, pricing, contact content
│   └── common/              → Carousel, Accordion, Tabs, Counter dùng lại nhiều nơi
├── data/                    → *.ts, có type rõ ràng (project.ts, blog.ts, team.ts...)
├── hooks/                   → mỗi hook = 1 hành vi từ main.js gốc (xem bảng dưới)
└── styles/                  → copy nguyên assets/scss, giữ cấu trúc partial gốc
```

## Quy tắc bắt buộc khi convert

1. **Không giữ jQuery.** Mọi đoạn `$(...)` trong `assets/js/main.js`,
   `carousel.js`, `gsapAnimation.js` phải viết lại bằng React hook thuần
   (`useState`, `useEffect`, `useRef`). Nếu gặp đoạn không convert được ngay,
   dừng lại hỏi tôi thay vì để lại jQuery tạm.
2. **Custom hook phải có comment giải thích lý do**, không chỉ code — vd tại
   sao xử lý theo cách này, section nào đang dùng chung hook này.
3. **Ảnh dùng `next/image`** bắt buộc, có `alt`, khai báo `width`/`height`
   hoặc dùng `fill` hợp lý.
4. **Không đưa `localStorage`/`window` vào lúc component init** — chỉ được
   truy cập trong `useEffect` hoặc sau khi check `typeof window !== "undefined"`.
5. **Section lặp lại ở ≥ 2 trang** → bắt buộc tách thành component trong
   `components/sections/`, nhận props, không copy-paste.
6. **Style**: giữ nguyên class CSS gốc từ SCSS, không đổi tên class, không
   chuyển sang Tailwind hay CSS-in-JS.
7. **Route**: đặt tên route giữ nguyên tên file HTML gốc (bỏ `.html`), dùng
   route group `(main)` cho các trang share layout.

## Mapping từ main.js gốc sang hooks/ (điền tiếp sau khi phân tích)

| Function trong main.js/gsapAnimation.js | Hook tương ứng | Section áp dụng |
|---|---|---|
| headerSticky | useStickyHeader.ts | Header |
| handleMobileMenu | dùng state trong MobileMenu.tsx | Header |
| (điền thêm sau bước phân tích) | | |

## Việc KHÔNG được làm

- Không tự ý đổi cấu trúc thư mục đã định nghĩa ở trên khi chưa hỏi tôi.
- Không xoá file HTML gốc trong `agentrahtml/`.
- Không thêm package ngoài khi chưa cần thiết — ưu tiên viết tay thay vì
  cài thư viện mới cho mỗi hiệu ứng nhỏ.
- Không convert nhiều trang cùng lúc trong 1 lần chạy — làm từng trang,
  báo cáo xong mới sang trang kế.

## Lệnh hay dùng

```bash
npm run dev       # chạy dev server
npm run build     # build kiểm tra lỗi trước khi convert xong
npm run lint
```
