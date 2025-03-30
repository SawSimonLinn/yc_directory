import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='text-sm'>
        &copy; {new Date().getFullYear()} YCDirectory. All rights reserved.
      </div>
      <div className='flex gap-4 text-lg'>
        <Link
          href='https://github.com/SawSimonLinn'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-gray-400'
        >
          <Github className='w-5 h-5' />
        </Link>
        <Link
          href='https://www.instagram.com/sawsimonlinn'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-gray-400'
        >
          <Instagram className='w-5 h-5' />
        </Link>
        <Link
          href='https://www.linkedin.com/in/sawsimonlinn/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-gray-400'
        >
          <Linkedin className='w-5 h-5' />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
