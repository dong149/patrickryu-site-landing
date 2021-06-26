import React from 'react';

const ContactUs = (props) => {
  return (
    <div className="contactus">
      <div className="contactus-text-wrap">
        <div className="contactus-address">
          <div className="description-hover description">
            안녕하세요
            <br /><br/>
            PatrickRyu는 <br/>제가 기획하고 개발하는 서비스들의<br/> 브랜드이자,
            <br />
            저의 모든 것입니다.
            <br /><br/>
            서비스를 기획하고 개발하는 것을 즐기는 모든 사람들과 함께 하고 싶습니다.
            <div className="sign">
              <img className="sign-img" src="/류동훈.png" alt="류동훈 싸인" />
            </div>
          </div>
          <br />
          경기도 고양시 덕양구 성사1동 래미안휴레스트
        </div>
        
        <div className="contactus-email"><a href="mailto:donghoon149@gmail.com" style={{textDecoration:'none'}}>donghoon149@gmail.com</a></div>
      </div>
    </div>
  );
};

export default ContactUs;
