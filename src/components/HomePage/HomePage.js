import React from 'react';

export default function HomePage() {
  return (
    <div className="homePage">
      <img className='homePage_img'
        src={'https://cdn.pixabay.com/photo/2013/07/13/10/49/ball-157860_960_720.png'} />
      <h2 className='homePage_heading'>
        SoccerStat
      </h2>
      <div>
        <p className='descriptionSPA'>
          Сайт для просмотра футбольной статистики
        </p>
      </div>
    </div>
  )
}
