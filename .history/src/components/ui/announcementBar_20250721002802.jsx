'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AnnouncementBar = ({
  message,
  linkText,
  linkUrl = '#',
  icon = '→',
  backgroundColor = 'bg-black',
  textColor = 'text-white',
  className = '',
}) => {
  return (
    <div className={`w-full py-2 sm:py-3 px-4 ${backgroundColor} ${textColor} ${className}`}>
      <div className="max-w-screen-xl mx-auto text-center text-sm sm:text-base flex flex-wrap justify-center items-center gap-1 sm:gap-2">
        <span className="whitespace-pre-line">{message}</span>
        {linkText && (
          <Link href={linkUrl} className="font-medium hover:underline inline-flex items-center">
            {linkText} {icon && <span className="ml-1">{icon}</span>}
          </Link>
        )}
      </div>
    </div>
  );
};

AnnouncementBar.propTypes = {
  message: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
  icon: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
};

export default AnnouncementBar;
