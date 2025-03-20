import React from 'react';
import './styles.css';

// 프로젝트 상세 내용 보기 함수
const changeBoxContent = (title, description) => {
  document.getElementById('project-title').innerText = title;
  document.getElementById('project-description').innerText = description;
  document.getElementById('project-details').classList.add('visible');
};

// Portfolio 컴포넌트
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>포트폴리오 & 개인 프로젝트</h1>
      <div className="portfolio-container">
        <div className="portfolio-box" onClick={() => changeBoxContent('Auto click program', '이 프로젝트는 카카오톡 이모션 버튼을 자동으로 클릭하는 프로그램입니다.')}>
          <h3>Auto click program</h3>
          <p>Emotion button in KaKao Talk</p>
        </div>
        <div className="portfolio-box" onClick={() => changeBoxContent('Game of Go', '바둑게임을 시각적으로 바둑에 대한 이해를 높이기 위해 개발했습니다.')}>
          <h3>Game of Go</h3>
          <p>Red & Blue versions</p>
        </div>
        <div className="portfolio-box" onClick={() => changeBoxContent('Ticket purchasing System', '연극부 공연 티켓 구매를 위한 웹페이지입니다.')}>
          <h3>Web page for purchasing ticket</h3>
          <p>for drama club</p>
        </div>
        <div className="portfolio-box" onClick={() => changeBoxContent('vehicle IoT System', 'mediapipe프레임워크를 활용한 졸음운전 방지&예방 시스템.(개발중)')}>
          <h3>A vehicle IoT System</h3>
          <p>for preventing drowsy driving</p>
        </div>
        <div className="portfolio-box" onClick={() => changeBoxContent('Artillery addon', '게임 마인크래프트에 적용할 포병 애드온입니다.(개발중)')}>
          <h3>Artillery addon</h3>
          <p>on Minecraft</p>
        </div>
        <div className="portfolio-box" onClick={() => changeBoxContent('...', '...')}>
          <h3>서비스 준비중..</h3>
          <p>...</p>
        </div>
      </div>
      <div id="project-details" className="details">
        <h2 id="project-title"></h2>
        <p id="project-description"></p>
      </div>
    </section>
  );
};

// AboutMe 컴포넌트
const AboutMe = () => {
  return (
    <section id="about">
      <h1>About Me</h1>
      <p>나의 이력</p>
      <ul>
        <li>카이스트 사이버영재교육원에서 프로그래밍을 처음 접했습니다.(2016)</li>
        <li>마포고등학교 STEAM동아리(2019)</li>
        <li>한국외국어대 정보통신공학과 입학(2021)</li>
        <li>5포병여단 정보작전과 무선장비운용병 복무(2021-2023)</li>
        <li>한국외국어대학교 코딩존 조교(2024)</li>
        <li>일본 近畿大学 교환학생(2025)</li>
      </ul>
      <div className="icons">
        <a href="https://www.instagram.com/002046.0" target="_blank"><img src="images/insta.png" alt="instagram" /></a>
        <a href="https://github.com/ROnnrwe" target="_blank"><img src="images/github.png" alt="git hub" /></a>
        <a href="mailto:kangtaehoon3@gmail.com"><img src="images/mail.png" alt="Send mail" /></a>
        <a href="https://boatneck-trampoline-d92.notion.site/1b3d634f60df80f48863ebbf879b8d9e?v=1bad634f60df80e1bd46000c6b378006" target="_blank"><img src="images/notion.png" alt="notion" /></a>
      </div>
    </section>
  );
};

// Skills 컴포넌트
const Skills = () => {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="skill-box">
          <img src="images/html5.png" alt="HTML5" />
          <p>HTML5</p>
        </div>
        <div className="skill-box">
          <img src="images/css.png" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="skill-box">
          <img src="images/js.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div classname="skill-box">
          <image src="images/react.png" alt="React" />
          <p>React</p>
        </div>
        <div className="skill-box">
          <img src="images/git.png" alt="Git" />
          <p>Git</p>
        </div>
        <div className="skill-box">
          <img src="images/bash.png" alt="Bash" />
          <p>Bash</p>
        </div>
        <div className="skill-box">
          <img src="images/flask.jpg" alt="Flask" />
          <p>Flask</p>
        </div>
      </div>
    </section>
  );
};

// App 컴포넌트
const App = () => {
  return (
    <div>
      <header>
        <h1 className="typing">더 멋진 개발을 위하여</h1>
        <nav>
          <ul>
            <li><a href="#portfolio">포트폴리오</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skill</a></li>
          </ul>
        </nav>
      </header>

      <Portfolio />
      <AboutMe />
      <Skills />

      <footer>
        <p>&copy; 2025 All rights reserved</p>
      </footer>
    </div>
  );
};

export default App;
