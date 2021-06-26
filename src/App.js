import React, { useState } from 'react';
import ContactUs from './components/ContactUs';
import Divider from './components/Divider';
import Profile from './components/Profile';
import Services from './components/Services';
import './styles/styles.scss';
const App = () => {
  // const [hover, setHover] = useState(false);
  return (
    <div className="home">
      <div className="logo-title-wrap">
        <div className="logo-title">
        Patrick Ryu
        </div>
      </div>
      {profileContents.map((data, i) => {
        return <Profile content={data} key={i} />;
      })}
      {/* <div
        className="logo"
      >
        <span className="logo-since">since 2019</span>
      </div> */}
      <Divider title="services." />
      {contents.map((data, i) => {
        return <Services content={data} key={i} />;
      })}
      {/* <Divider title="members." /> */}
      <Divider title="contact us." />
      <ContactUs /> 
    </div>
  );
}
const contents = [
  {
    title: 'Deathnote.gg',
    since: 'since 2021.01',
      src: '/deathnote_gg.png',
    type: 'image',
    description:
      'User : 약 5만명\n\nType : Web Service\n\nLeague of Legends에서 문제가 되는 트롤들을 신고하고 찾아내는 기능을 사용자에게 제공합니다. 현재 꾸준히 유저가 늘어나고 있는 상황입니다.',
    link: 'https://deathnote.gg',
  },
  {
    title: 'PS helper',
    since: 'since 2021.03',
      src: '/pshelper.png',
    type: 'image',
    description:
      'User : 개발 중\n\nType : Chrome Extension\n\n알고리즘 문제풀이 ( PS )를 도와주는 크롬 익스텐션에 필요한 서버입니다.\nhttps://www.acmicpc.net과 호환됩니다. ',
    link: 'https://pshelper.site',
  },
  // {
  //   title: '롤링페이퍼',
  //   since: 'since 2020.08',
  //   src: '/rollingpaper.mp4',
  //   type: 'video',
  //   description:
  //     'User : 약 450만명\n\nType : 웹 서비스\n\n2020년 8월에 런칭하여, 꾸준히 많은 사용자들이 사랑해주고 있는 서비스입니다. 한국을 넘어, 글로벌하게 사용되고 있습니다. 앞으로도 많은 사랑과 관심 부탁드리겠습니다!\n\n2021.03.01 Update',
  //   link: 'https://rollingpaper.site',
  // },
  // {
  //   title: '막차',
  //   since: 'since 2019.10',
  //   src: '/makkcha.mp4',
  //   type: 'video',
  //   description:
  //     'User : 약 5만명\n\nType : 앱 서비스\n\n막차는 우리의 일상 속에서 빈번하게 등장하는 불편함입니다. \n그리고 그 불편함은 막차를 찾는 과정에서 존재하였습니다. \n\n빈번하게 존재하는 불편함이지만, 아직 제대로 해결되지 않은 이 문제를 저희만의 방식으로 풀어내고 싶었습니다.',
  //   link: 'https://makkcha.com',
  // },
  // {
  //   title: 'deathnote.gg',
  //   since: 'coming 2021.01',
  //   src: '/deathnote_gg.png',
  //   type: 'image',
  //   description:
  //     'Type : 웹 서비스\n\nStatus : 프로토 타입\n\n현재 천천히 개발 진행중인 왼손잡이들의 새로운 야심작입니다. LOL을 굉장히 즐겨하는데, 그러던 와중 떠오른 아이디어로 프로토타입까지는 개발을 마친 상태입니다. \n\nLOL을 조금이라도 해보았던 사람은 정말 좋아할만한 서비스입니다.\n\n2021년 1월에 런칭을 목표로 하고 있습니다.',
  //   link: '',
  // },
];

const profileContents = [
  {
    name: '류동훈',
    position: 'Leader',
    src: '/profile/donghun.jpg',
    type: 'image',
    description:
      '그냥 좋습니다.\n\n어떻게 제 마음을 설명할 수 있을지 모르겠습니다. \n\n그냥 좋았습니다. \n\n제 안에 있는 생각들을 만들어서 세상에 내놓았을 때 그리고 그것들을 많은 사람들이 만족해하며 쓸 때.\n\n짜릿했습니다. 행복했습니다. 설레었습니다. \n\n노래를 부를 때, 사람들마다 본인만의 음색이 있듯이 서비스를 기획할 때 나오는 느낌도 다 다른 것 같습니다.\n\n그게 대중적이든, 소수만 좋아하는 서비스든 그것은 중요하지 않은 것 같습니다.\n\n그저 남에게 새로운 서비스, 좋은 서비스를 제공할 수 있다는 그 사실만으로도 얼마나 재미있고 의미있고 행복한 일인지 모든 분들이 깨닫는 날이 오기를 바라며 한 걸음 한 걸음 나아가렵니다.',
    link: 'https://www.linkedin.com/in/patrick-ryoo-4a1b46199/',
    sign: '/류동훈.png',
  },
  // {
  //   name: '공채원',
  //   position: 'Developer',
  //   src: '/profile/chaewon.jpeg',
  //   type: 'image',
  //   description:
  //     '저는 사람들이 하늘을 나는 것을 동경하고, 우주로 나아가는 것을 동경하고, 미지의 땅, 미지의 세계, 불가능한 꿈, 이런 것들을 동경하고 사랑했으면 좋겠습니다. 그래서 도전하고 또 도전하면서, 끊임없이 인간의 한계를 시험하고 인식의 지평을 넓혀갔으면 좋겠습니다.\n\n지금은 웹 엔지니어이지만, 스스로가 직업에 갇힐 필요는 없다고 생각합니다. 언젠가는 제 자신을 모험가나 탐험가로, 혹은 탐구자나 개척자로 소개하게 되었으면 합니다.',
  //   link: '',
  //   sign: '/류동훈.png',
  // },
  // {
  //   name: '김은수',
  //   position: 'Developer',
  //   src: '/profile/ensoo.jpeg',
  //   type: 'image',
  //   description:
  //     'Progress와 Perfection은 반비례 관계이죠. Perfection에 초점을 맞추면 우리의 Progress는 더 없이 작고 앞으로 나아가야 할 곳은 아득히 느껴질지도 모르겠습니다. 그곳을 향해 정신없이 달려가다 보면 어느 순간 지치고 가쁜 숨을 몰아쉬는 자신을 발견하게 되겠지요.\n\n우리는 Perfection보다는 Progress에 초점을 맞추려고 노력해야 합니다. 우리는 작은 배움에 대한 열정을 가지고, 새로운 도전을 반복하며 나아가야 합니다. 그러다 어느 순간 뒤돌아보았을 땐 매일 조금씩 성장해온 나를 마주하게 되겠지요. 매일의 성장은 관성이 되어 우리의 보폭을 더 넓혀주게 되고, 때로는 달려가는 것을 즐거워할 수 있을지도 모르겠습니다.\n\n거기 지쳐서 주저앉아버린 당신도 걸음마 떼는 것이 무척 어려웠던 갓난아기 시절이 있었죠. 하지만 지금은 어떤가요. 잘 걷고 있지 않나요? :)',
  //   link: '',
  // },
  // {
  //   name: '차서현',
  //   position: 'Designer',
  //   src: '/profile/seohyeon.jpeg',
  //   type: 'image',
  //   description:
  //     '서비스를 기획하고 디자인하는 것에 관심이 많은 주니어 디자이너입니다. 새로운 것을 배우기 위해 끊임없이 도전하는 것을 즐겨해요 :)',
  //   link: '',
  //   sign: '/류동훈.png',
  // },
  // {
  //   name: '강성찬',
  //   position: 'Advisor',
  //   src: '/profile/seongchan.jpeg',
  //   type: 'image',
  //   description:
  //     "I believe that whatever doesn't kill you simply makes you… stranger.",
  //   link: '',
  //   sign: '/류동훈.png',
  // },
];

export default App;
