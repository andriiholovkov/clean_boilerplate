import React from 'react';
import './SliderCardRating.scss';
import SVG_ICONS from '../assets/svg/svg';

const SliderCardRating = () => {
  return (
    <div>
      <div className="image__rating-stars">
        <img src={SVG_ICONS.DARKBLUE_STAR} className="star" alt="Image rating star" />
        <img src={SVG_ICONS.DARKBLUE_STAR} className="star" alt="Image rating star" />
        <img src={SVG_ICONS.DARKBLUE_STAR} className="star" alt="Image rating star" />
        <img src={SVG_ICONS.DARKBLUE_STAR} className="star" alt="Image rating star" />
        <img src={SVG_ICONS.GREY_STAR} className="star" alt="Image rating star" />
      </div>
    </div>
  );
};

// function getVoteAverage() {
//     const voteAverage = item.vote_average;
//     console.log(voteAverage); // 8.4 // 7.1 // 7.8 //
//
//     const fullPart = Math.floor(voteAverage);
//     const yellowStars = Math.floor(fullPart / 2);
//     for (let i = 0; i < yellowStars; i++) {
//         const star = document.createElement('img');
//         star.className = 'yellow__star';
//         star.setAttribute('src', htmlData.sectionBlog.neil.info.yellowStar);
//         star.setAttribute('alt', 'Yellow star');
//         stars.append(star);
//     }
//
//     const halfPart = voteAverage - yellowStars * 2;
//     const yellowGreyStars = Math.floor(halfPart);
//     for (let j = 0; j < yellowGreyStars; j++) {
//         const star = document.createElement('img');
//         star.className = 'half__star';
//         star.setAttribute('src',
//             htmlData.sectionBlog.neil.info.yellowGreyStar);
//         star.setAttribute('alt', 'Yellow grey star');
//         stars.append(star);
//     }
//
//     const greyStars = 5 - yellowStars - yellowGreyStars;
//     for (let k = 0; k < greyStars; k++) {
//         const star = document.createElement('img');
//         star.className = 'grey__star';
//         star.setAttribute('src', htmlData.sectionBlog.neil.info.greyStar);
//         star.setAttribute('alt', 'Grey star');
//         stars.append(star);
//     }
//     return stars;
// }
// getVoteAverage();

export default SliderCardRating;
