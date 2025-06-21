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
  className = ''
}) => {
  return (
    <div className={`w-full py-2 ${backgroundColor} ${textColor} ${className}`}>
      <div className="container mx-auto text-center text-sm md:text-base">
        <span>{message} </span>
        {linkText && (
          <Link 
            href={linkUrl} 
            className="font-medium hover:underline inline-flex items-center"
          >
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
  className: PropTypes.string
};

export default AnnouncementBar;