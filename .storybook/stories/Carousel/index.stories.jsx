import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

import { Carousel } from '../../../dist';

export default {
  title: 'Carousel',
  component: Carousel,
};

export const Default = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://picsum.photos/id/102/600/400" />
        <Carousel.Caption>
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 1</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/id/103/600/400" />
        <Carousel.Caption>
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 2</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/id/104/600/400" />
        <Carousel.Caption>
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 3</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export const Circular = () => {
  return (
    <Carousel circular>
      <Carousel.Item>
        <img src="https://picsum.photos/id/102/600/400" />
        <Carousel.Caption>
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 1</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/id/103/600/400" />
        <Carousel.Caption>
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 2</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/id/104/600/400" />
        <Carousel.Caption>
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 3</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export const AutoPlay = () => {
  return (
    <Carousel interval={3000} circular>
      <Carousel.Item>
        <img src="https://picsum.photos/id/102/600/400" />
        <Carousel.Caption>
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 1</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/id/103/600/400" />
        <Carousel.Caption>
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 2</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/id/104/600/400" />
        <Carousel.Caption>
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 3</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export const CaptionPosition = () => {
  return (
    <Carousel circular>
      <Carousel.Item>
        <img src="https://picsum.photos/id/102/600/400" />
        <Carousel.Caption position="top">
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 1</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/id/103/600/400" />
        <Carousel.Caption position="center">
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 2</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/id/104/600/400" />
        <Carousel.Caption position="bottom">
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 3</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export const CustomArrowIcon = () => {
  return (
    <Carousel 
      iconPrev={<ChevronLeft />}
      iconNext={<ChevronRight />}
    >
      <Carousel.Item>
        <img src="https://picsum.photos/id/102/600/400" />
        <Carousel.Caption>
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 1</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/id/103/600/400" />
        <Carousel.Caption>
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 2</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/id/104/600/400" />
        <Carousel.Caption>
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 3</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export const WithoutArrow = () => {
  return (
    <Carousel interval={3000} circular withArrow={false}>
      <Carousel.Item>
        <img src="https://picsum.photos/id/102/600/400" />
        <Carousel.Caption>
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 1</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/id/103/600/400" />
        <Carousel.Caption>
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 2</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/id/104/600/400" />
        <Carousel.Caption>
          <div className="bg-gray-700 opacity-75 w-full p-4">
            <h3 className="text-white">Nice picture 3</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}