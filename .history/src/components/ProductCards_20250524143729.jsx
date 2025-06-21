import Image from 'next/image';

const cards = [
  {
    title: 'NEW ARRIVAL',
    buttonText: 'SHOP THE TREND',
    image: '/card1.svg',
  },
  {
    title: 'BEST SELLER',
    buttonText: 'SHOP THE BEST',
    image: '/card2.svg',
  },
  {
    title: 'CASUAL WEARS',
    buttonText: 'SHOP THE BEST',
    image: '/images/casual-wears.jpg',
  },
];

export default function ProductCards() {
  return (
    <div className="flex justify-center gap-6 p-10 bg-white">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative w-[220px] h-[350px] rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={card.image}
            alt={card.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 left-4 text-white font-semibold text-sm bg-black bg-opacity-40 px-2 py-1 rounded">
            {card.title}
          </div>
          <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-200 transition">
            {card.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
}
