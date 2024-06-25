import React from 'react';
import HeroSlider, { Slide } from 'hero-slider';
import logo from '../Images/ebica.jpg';
import fin from '../Images/fin.jpg';

export const Annouceslide = () => {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="Vertical"  // corrected spelling of orientation
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
       
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "100%",
        backgroundAttacment:"relative",
      }}
    >
      <Slide
        background={{
          backgroundImage: `url(${logo})`,
          backgroundSize: 'cover',  // Adjust as needed
          backgroundPosition: 'center',
        }}
      />
      <Slide
        background={{
          backgroundImage: `url(${fin})`,
          backgroundSize: 'cover',  // Adjust as needed
          backgroundPosition: 'center',
        }}
      />
    </HeroSlider>
  );
};
