import React from 'react';

const Men = () => {
  const images = [
    {
      src: "Men1.png",
      alt: "Image 1",
      text: "Clothes"
    },
    {
      src: "Men2.png",
      alt: "Image 2",
      text: "Gifts"
    },
    {
      src: "Men3.png",
      alt: "Image 3",
      text: "Accessories"
    }
  ];

  return (
    <section className="py-8 px-4 flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-[2.7rem] md:text-[3.3rem] text-[#700100] font-['WomanFontBold'] mb-8">
        Mens Essential
      </h1>
     
      <div className="flex flex-wrap gap-4 justify-center max-w-[1536px] mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-[432px] h-[700px] overflow-hidden rounded-3xl shadow-lg
                     transition-transform duration-300 hover:scale-105"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        text-center py-[2.2rem] px-[6.5rem] rounded-lg">
              <span className="text-white text-[4rem] whitespace-nowrap font-['WomanFontBold']">
                {image.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Men;