import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';

interface NavigationArrowsProps {
  currentPage: number;
  totalPages: number;
  isMobile: boolean;
  showChevron: boolean;
}

// 첫 페이지에 아래쪽 화살표, 마지막 페이지에 위쪽 화살표를 표시
export const NavigationArrows = ({
  currentPage,
  totalPages,
  isMobile,
  showChevron,
}: NavigationArrowsProps) => (
  <>
    {/* 첫 페이지에서 아래쪽 화살표 표시 */}
    {showChevron && currentPage === 0 && (
      <div
        className={`fixed left-1/2 transform -translate-x-1/2 ${
          isMobile ? 'bottom-4' : 'bottom-6'
        } z-50`}
      >
        <IoChevronDownOutline
          className={`text-white ${isMobile ? 'text-xl' : 'text-2xl'}`}
        />
        <IoChevronDownOutline
          className={`text-white -mt-3 ${isMobile ? 'text-xl' : 'text-2xl'}`}
        />
      </div>
    )}
    {/* 마지막 페이지에서 위쪽 화살표 표시 */}
    {showChevron && currentPage === totalPages - 1 && (
      <div
        className={`fixed left-1/2 transform -translate-x-1/2 ${
          isMobile ? 'top-4' : 'top-6'
        } z-50`}
      >
        <IoChevronUpOutline
          className={`text-white ${isMobile ? 'text-xl' : 'text-2xl'}`}
        />
        <IoChevronUpOutline
          className={`text-white -mt-3 ${isMobile ? 'text-xl' : 'text-2xl'}`}
        />
      </div>
    )}
  </>
);
