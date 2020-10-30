import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay, virtualize } from 'react-swipeable-views-utils';
import { ArrowLeft, ArrowRight } from 'react-feather'
import IconButton from '../Button/IconButton'

const VirtualizedSwipeableViews = virtualize(SwipeableViews);
const AutoPlaySwipeableViews = virtualize(autoPlay(SwipeableViews));

const classes = {
  btnPrev: 'absolute inset-y-0 flex items-center',
  btnNext: 'absolute inset-y-0 right-0 flex items-center',
  btnArrow: 'shadow-lg hover:shadow'
}

const captionPositions = {
  'top': 'items-start',
  'center': 'items-center',
  'bottom': 'items-end',
}

function modulo(n, m) {
  return ((n % m) + m) % m;
}

const Carousel = ({
  children,
  className,
  iconNext,
  iconPrev,
  circular,
  interval,
  withArrow,
}) => {
  const autoPlay = interval !== 0
  const childrenLength = children.length
  const [index, setIndex] = useState(0)
  const finalClassName = cx('relative', className)

  const handleChangeIndex = nextIndex => {
    let newIndex = nextIndex;

    if (!circular) {
      newIndex = Math.max(Math.min(newIndex, childrenLength - 1), 0)
    }

    setIndex(newIndex)
  };

  slideRenderer = ({key, index}) => {
    const activeSlide = modulo(index, childrenLength);

    return (
      <div key={key}>
        {children[activeSlide]}
      </div>
    );
  };

  const renderSlider = () => {
    const Wrapper = autoPlay ? AutoPlaySwipeableViews : VirtualizedSwipeableViews
    const extraProps = {
      ...(circular ? {} : { slideCount: childrenLength })
    }

    return (
      <Wrapper
        enableMouseEvents
        index={index}
        interval={interval}
        onChangeIndex={handleChangeIndex}
        slideRenderer={slideRenderer} 
        {...extraProps}
      />
    )
  }

  return (
    <div className={finalClassName}>
      {renderSlider()}
      {withArrow && (
        <Fragment>
          <div className={classes.btnPrev}>
            <IconButton 
              className={(circular || index !== 0) && classes.btnArrow}
              color="light"
              onClick={() => handleChangeIndex(index - 1)}
              disabled={!circular && index === 0}
            >
              {iconPrev}
            </IconButton>
          </div>
          <div className={classes.btnNext}>
            <IconButton 
              className={(circular || index !== childrenLength - 1) && classes.btnArrow}
              color="light"
              onClick={() => handleChangeIndex(index + 1)}
              disabled={!circular && index === childrenLength - 1}
            >
              {iconNext}
            </IconButton>
          </div>
        </Fragment>
      )}
    </div>
  )
}

Carousel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  iconNext: PropTypes.node,
  iconPrev: PropTypes.node,
  circular: PropTypes.bool,
  interval: PropTypes.number,
  enableMouseEvents: PropTypes.bool,
  withArrow: PropTypes.bool,
}

Carousel.defaultProps = {
  iconNext: <ArrowRight />,
  iconPrev: <ArrowLeft />,
  circular: false,
  interval: 0,
  enableMouseEvents: true,
  withArrow: true,
}


const CarouselItem = ({
  children,
  className,
}) => {
  const finalClassName = cx('relative flex justify-center', className)

  return (
    <div className={finalClassName}>
      {children}
    </div>
  )
}

CarouselItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}


const CarouselCaption = ({
  children,
  className,
  position,
}) => {
  const captionPosition = captionPositions[position]
  const finalClassName = cx(
    'absolute top-0 left-0 w-full h-full flex justify-center', 
    captionPosition,
    className,
  )

  return (
    <div className={finalClassName}>
      {children}
    </div>
  )
}

CarouselCaption.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(['top', 'center', 'bottom'])
}

CarouselCaption.defaultProps = {
  position: 'bottom'
}

Carousel.Item = CarouselItem
Carousel.Caption = CarouselCaption

export default Carousel