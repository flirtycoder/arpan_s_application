import AnnouncementBar from '@/components/ui/announcementBar';
import Header from '@/components/common/Header';
import Ending from '@/components/common/Ending';
'use client';

import Image from 'next/image';

const productImages = [
  '/products/img1.jpg',
  '/products/img2.jpg',
  '/products/img3.jpg',
  '/products/img4.jpg',
  '/products/img5.jpg',
  '/products/img6.jpg',
  '/products/img7.jpg',
  '/products/img8.jpg',
  '/products/img9.jpg',
  '/products/img10.jpg',
  '/products/img11.jpg',
  '/products/img12.jpg',
];

const page = () => {
    return (
    <div>
           <AnnouncementBar
                message="Get early access on launches and offers."
                linkText="Sign Up For Texts"
                linkUrl="/signup"
              />
              <Header />

              <Ending/>
    </div>
    );
}
 
export default page;