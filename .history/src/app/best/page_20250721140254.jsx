'use client';
import Image from 'next/image';
import AnnouncementBar from '@/components/ui/announcementBar';
import Header from '@/components/common/Header';
import Ending from '@/components/common/Ending';

const productData = [
  {
    src: '/images/purple-heel.jpg',
    title: 'Purple Heel',
    colors: ['bg-pink-300', 'bg-orange-400', 'bg-yellow-300'],
  },
  {
    src: '/images/denim-heel.jpg',
    title: 'Denim Heel',
    colors: ['bg-gray-700', 'bg-blue-500', 'bg-indigo-400'],
  },
  {
    src: '/images/orange-heel.jpg',
    title: 'Orange Heel',
    colors: ['bg-orange-400', 'bg-yellow-400'],
  },
  // 👉 Add more products below
];

const ProductCard = ({ src, title, colors }) => (
  <div className="flex flex-col items-start space-y-2">
    <Image
      src={src}
      alt={title}
      width={300}
      height={300}
      className="w-full h-60 object-cover rounded-lg shadow-sm"
    />
    <p className="text-sm font-medium text-gray-800">{title}</p>
    <div className="flex space-x-2">
      {colors.map((color, i) => (
        <span key={i} className={`w-4 h-4 rounded-full ${color} border`} />
      ))}
    </div>
  </div>
);

const ProductGrid = () => {
  return (
    <div className="bg-white">
      <AnnouncementBar
        message="Get early access on launches and offers."
        linkText="Sign Up For Texts"
        linkUrl="/signup"
      />
      <Header />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              src={product.src}
              title={product.title}
              colors={product.colors}
            />
          ))}
        </div>
      </div>

      <Ending />
    </div>
  );
};

export default ProductGrid;
