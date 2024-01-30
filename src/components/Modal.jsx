import React from 'react';
import { useState, useEffect } from 'react';

function Modal (){


  const [modal, setModal] = useState(false);
  const onoffModal = () => {
    setModal(!modal);
    // setModal(true) ? dim.classList.add('show') : dim.classList.remove('show');
    
    // 1. 포스터 썸네일 클릭 시 해당 모달창 뜨고
    // 2. 배경 딤처리
    // 3. 모달창 내부 x 클릭 시 모달창 닫히고 배경 딤처리 없어져야 됨
    console.log(modal);
  }
  
  const dim = document.querySelector('.dim')
  

  return(
    <div>
      <div className="presentation" role="presentation">
        <div className="dim"></div>
        <div className="wrap-modal">
          <div className="modal">
            <button onClick={() => onoffModal(false)} className='close-modal'>x</button>
            <img src="" alt="포스터이미지" className='thumb'/>
            <div className="txt-info">
              <h2 className='title'></h2>
              <span className='score'>평점: </span>
              <span className='views'>조회수: </span>
            </div>
            <span className='steamed-heart'>찜하기 기능(임의)</span>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default Modal;