import React from 'react';
import { Button } from './ui/button';

const NewCollection = () => {
  return (
    <section className="bg-[#4A0404] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-['WomanFontBold']">New Collection</h2>
           
            <div className="w-full h-60 overflow-hidden">
              <img
                src="NewCollection/3.png"
                alt="Brown leather belt"
                className="w-full h-full object-cover"
              />
            </div>
           
            <div className="grid grid-cols-3 gap-4">
              <div className="h-80 overflow-hidden">
                <img
                  src="NewCollection/2.png"
                  alt="Suit detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-80 overflow-hidden">
                <img
                  src="NewCollection/4.png"
                  alt="Inside label"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-80 overflow-hidden">
                <img
                  src="NewCollection/1.png"
                  alt="Suit gesture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                variant="outline"
                className="px-8 py-2 bg-transparent border-white text-white hover:bg-white hover:text-[#4A0404] transition-colors font-['WomanFontBold']"
              >
                DISCOVER MORE
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="h-full">
              <img
                src="NewCollection/Main.png"
                alt="Full suit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
