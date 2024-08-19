import { FaInstagram } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-50 text-white w-full mt-auto py-3 text-xs">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-600 pt-3">
          <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
            <div className="mb-2 md:mb-0 text-center md:text-left">
              <p className="text-lg font-bold text-kuit">KUIT</p>
              <div className="text-xs text-slate-50">
                건국대학교 기획/개발 동아리
              </div>
            </div>
            <div className="mb-2 md:mb-0 text-center md:text-right">
              <p>Designed by Cho Hasang</p>
              <p>Developed by Cho Hasang</p>
            </div>
          </div>
          <div className="mt-2 flex flex-col items-center md:flex-row md:justify-between">
            <div className="flex space-x-4 mb-2 md:mb-0">
              <a
                href="https://www.instagram.com/kuit.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-kuit"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="http://pf.kakao.com/_Dxbgvxj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-kuit"
              >
                <RiKakaoTalkFill size={18} />
              </a>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; 2024 KUIT. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
