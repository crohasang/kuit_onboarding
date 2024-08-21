interface PageIndicatorProps {
  currentPage: number;
  totalPages: number;
  isMobile: boolean;
}

// 현재 페이지 번호와 전체 페이지 수 표시
export const PageIndicator = ({
  currentPage,
  totalPages,
  isMobile,
}: PageIndicatorProps) => (
  <div
    className={`fixed bottom-4 left-4 text-white ${
      isMobile ? 'text-xs' : 'text-sm'
    } z-50`}
  >
    {currentPage + 1}/{totalPages}
  </div>
);
