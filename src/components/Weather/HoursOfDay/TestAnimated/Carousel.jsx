import Carousel from 'react-spring-3d-carousel';
import { useState, useEffect } from 'react';
import { config } from 'react-spring';
import { useScroll, animated } from '@react-spring/web';

export default function Carroussel(props) {
  //
  const { scrollYProgress } = useScroll();

  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);
  //

  const [scrollTop, setScrollTop] = useState(0);
  const handleScroll = e => {
    setScrollTop(e.currentTarget.scrollLef);
    // console.log(event);
  };
  //
  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        margin: props.margin,
        opacity: 1,
        scrollYProgress,
      }}
      onScroll={handleScroll}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
// function MyComponent() {

//   return (
//     <animated.div style={{ opacity: scrollYProgress }}>
//       Hello World
//     </animated.div>
//   )
// }
