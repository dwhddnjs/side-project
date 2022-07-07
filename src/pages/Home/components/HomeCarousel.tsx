import React, { useState } from 'react';
import dead from '../../../images/dead.jpg';
import squat from '../../../images/squat.jpg';
import ohp from '../../../images/ohp.jpg';
import bench from '../../../images/bench.jpg';
import styled from 'styled-components';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

const imgData = [
  {
    id: 1,
    image: squat,
  },
  {
    id: 2,
    image: bench,
  },
  {
    id: 3,
    image: dead,
  },
  {
    id: 4,
    image: ohp,
  },
];

const HomeCarousel = () => {
  const [current, setCurrent] = useState(1);

  return (
    <CarouselContainer>
      <CarouselArrowWrapper>
        <CarouselButton>
          <BiLeftArrow className="prev" />
        </CarouselButton>
        {imgData.map(
          (img) =>
            current === img.id && (
              <CarouselItem key={img.id}>
                <img src={img.image} alt="" width={800} height={550} />
              </CarouselItem>
            ),
        )}
        <CarouselButton>
          <BiRightArrow className="next" />
        </CarouselButton>
      </CarouselArrowWrapper>
    </CarouselContainer>
  );
};

export default HomeCarousel;

const CarouselContainer = styled.div`
  border: 1px solid;
  height: 1000px;
  display: flex;
  justify-content: end;
  padding: 80px;
`;

const CarouselItem = styled.div`
  width: 800px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 50px;
  color: #ffffff;
`;

const CarouselArrowWrapper = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  font-size: 50px;
  color: #333333;
  border-radius: 10px;
  img {
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 40px 80px, rgba(0, 0, 0, 0.22) 0px 30px 24px;
  }
`;

const CarouselButton = styled.div``;
