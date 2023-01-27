import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import '../App'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC PRODUCTS!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-9.jpg'
              text=' Fashion-Lashes'
              label='Eye-Lashes'
              path='/Products'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Fashion-Liner'
              label='Eye-Liner'
              path='/Products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Hablih bl rouge ya madame b alf l 9at3a hez ya madame'
              label='Lipstick'
              path='/Products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Fashion-Make-up'
              label='Make-up'
              path='/Products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Fashion-MAKEUP'
              label='MAKEUP'
              path='/Products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
