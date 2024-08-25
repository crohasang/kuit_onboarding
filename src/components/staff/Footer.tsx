import { FaInstagram } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-50 text-white w-full py-2 text-xs mt-2 mb-4">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-600 pt-2">
          <div className="flex flex-row justify-between items-start">
            <div className="mb-2 sm:mb-0 text-left">
              <p className="text-base font-bold text-kuit">KUIT</p>
              <div className="text-xs text-slate-50">
                건국대학교 기획/개발 동아리
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex space-x-3 mb-2">
                <a
                  href="https://www.instagram.com/kuit.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-kuit"
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href="http://pf.kakao.com/_Dxbgvxj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-kuit"
                >
                  <RiKakaoTalkFill size={16} />
                </a>
              </div>

              <div className="text-right mb-1">
                <p>&copy; 2024 KUIT. All rights reserved.</p>
              </div>
              <p className="text-xs text-right">
                Designed & Developed by Cho Hasang
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
