import React from 'react';
import './SliderCard.scss';
import SliderCardRating from '../SliderCardRating/SliderCardRating';
// import ModalCard from '../../_common/ModalCard/ModalCard';
// import sliderCardData from './sliderCardData';
// import modalCardData from '../../_common/ModalCard/modalCardData';

interface Props {
  unchecked: string;
  image: string;
  category: string;
  title: string;
  subtitle: string;
  span_text: string;
  link: string;
}

// const renderModalCard = () =>
//   modalCardData.map(
//     (
//       { modalImage, productCategory, productTitle, descriptionText, descriptionAdults,
//       ingredientsText, warningsText },
//       index
//     ) => (
//       <ModalCard
//         key={index}
//         modalImage={modalImage}
//         productCategory={productCategory}
//         productTitle={productTitle}
//         descriptionText={descriptionText}
//         descriptionAdults={descriptionAdults}
//         ingredientsText={ingredientsText}
//         warningsText={warningsText}
//       />
//     )
//   );

const SliderCard = (props: Props) => {
  const { unchecked, image, category, title, span_text, subtitle, link } = props;

  return (
    <div className="recommendations__slider-card">
      <img className="slider-card__unchecked" src={unchecked} alt="Unchecked item circle" />
      <img src={image} className="card-image" alt="Card image" />
      <div className="card__image-rating">
        <div className="image__rating-stars">
          <SliderCardRating />
        </div>
        <div className="image__rating-mark">
          <span className="mark__average">4.3</span>
          <span className="mark__reviews">(4)</span>
        </div>
      </div>
      <div className="image__rating-underline"></div>

      <button className="image__card-category">{category}</button>

      <p className="image__card-title">{title}</p>
      <p className="image__card-subtitle">
        <span className="card-subtitle__span-text">{span_text}</span>
        {subtitle}
      </p>
      {/*<p className="image__card-link" onClick={renderModalCard()}>*/}
      <p className="image__card-link">{link}</p>
      {/*{renderModalCard()}*/}
    </div>
  );
};

export default SliderCard;
