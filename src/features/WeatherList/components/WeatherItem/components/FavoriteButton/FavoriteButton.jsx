import React from 'react';
import classNames from './FavoriteButton.module.css';

const FavoriteButton = () => (
  <button type="button" className={classNames.addToFav}>
    <svg className={classNames.addToFavIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M400 480a16 16 0 01-10.63-4L256 357.41 122.63 476A16 16 0 0196 464V96a64.07 64.07 0 0164-64h192a64.07 64.07 0 0164 64v368a16 16 0 01-16 16z" />
    </svg>
  </button>
);

export default FavoriteButton;
