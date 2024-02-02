import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Modal ({
  poster_path,
  release_date,
  title,
  overview,
  score,
  image_base_url,
  modalClose
}){

  const [visible, setVisible] = useState(false);

  // useEffect(()=>{
  //   if(poster_path){
  //     setVisible(true);
  //   }
  // },[poster_path])


  useEffect(() => {
    setVisible(true);
  }, [visible])
  // 1. 포스터 썸네일 클릭 시 해당 모달창 뜨고
  // 2. 배경 딤처리
  // 3. 모달창 내부 x 클릭 시 모달창 닫히고 배경 딤처리 없어져야 됨
  
   console.log(visible)
  return(
    <div>
      <div className="presentation" role="presentation">
        <div className="dim" onClick={modalClose}></div>
        <div className="modal">
          <div className={`modal__contents ${visible ? 'visible' : ''}`}>
            <img src={`${image_base_url}${poster_path}`} className='modal__poster-img'/>
            <div className="modal__txt-info">
              <h2 className='modal__title'>{title}</h2>
              <span className='modal__score'>평점 : {score}</span>
              <span className='modal__release-date'>개봉일자 : {release_date}</span>
              <span className='modal__overview'>줄거리 : {overview}</span>
            </div>
            <span className='modal__steamed-heart'>찜하기 기능(임의)</span>
            <button onClick={modalClose} className='close-modal'>x</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;