import React from 'react';
import './ModalCardWindow.scss';
// import SliderCardRating from '../../Recommendations/SliderCardRating/SliderCardRating';
// import PNG_ICONS from '../assets/png/png';
// import modalCardData from './modalCardData';

interface ModalCardProps {
  modalImage: string;
  productCategory: string;
  productTitle: string;
  descriptionText: string;
  descriptionAdults: string;
  ingredientsText: string;
  warningsText: string;
}

// const ModalCard = (props: ModalCardProps) => {
//   const {
//     modalImage,
//     productCategory,
//     productTitle,
//     descriptionText,
//     descriptionAdults,
//     ingredientsText,
//     warningsText,
//   } = props;

// return (
//   <div className="modal__card-wrapper">
//     <div className="modal__transparent-half"></div>
//
//     <div className="modal__card-window">
//       <div className="modal__close-cross">
//         <button className="close-cross"></button>
//       </div>
//
//       <div className="modal__card-content">
//         <div className="modal__main-content">
//           <div className="modal__primary-content">
//             <div className="primary-content__image">
//               <img src={modalCardData.modalImage} className="card-image" alt="Card image" />
//             </div>
//             <div className="primary-content__text">
//               <button className="image__card-category">{modalCardData.productCategory}</button>
//
//               <p className="image__card-title">{modalCardData.productTitle}</p>
//
//               <div className="card__image-rating">
//                 <div className="image__rating-stars">
//                   <SliderCardRating />
//                 </div>
//                 <div className="image__rating-mark">
//                   <span className="mark__average">4.3</span>
//                   <span className="mark__reviews">(4)</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//
//           <div className="modal__secondary-content">
//             <p className="secondary-content__description-title">Description</p>
//             <p className="secondary-content__product-title">{modalCardData.descriptionTitle}</p>
//             <p className="secondary-content__description-text">{modalCardData.descriptionText}</p>
//             <p className="secondary-content__description-adults">{modalCardData.descriptionAdults}</p>
//
//             <p className="secondary-content__ingredients-title">Ingredients</p>
//             <p className="secondary-content__ingredients-text">{modalCardData.ingredientsText}</p>
//
//             <p className="secondary-content__warnings-title">Warnings</p>
//             <p className="secondary-content__warnings-text">{modalCardData.warningsText}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default ModalCard;
