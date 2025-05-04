// Footer.jsx
import React from 'react';

const Footer = () => {
  const websiteName ='BILAL TANVEER';
  const icpNum = '123';
  const icpSrc = '111';
  const currentYear = new Date().getFullYear(); // 获取当前年份

  return (
    <footer className="flex flex-col justify-center items-center p-4">
      <div className="text-center text-xs mb-2">
        ©{currentYear} {websiteName} |{' '}
        <a href={icpSrc} target="_blank" rel="noopener noreferrer" className="text-xs">
          {icpNum}
        </a>
      </div>
      <div className="text-center text-xs">
        bilaltanveer &copy; {currentYear} {websiteName}. portfolio
      </div>
    </footer>
  );
};

export default Footer;
