import scroll from "./Animation/Scroll"
import entry from "./Animation/Entry";
import CustomCursor from "./components/CustomCursor";
import CustomCards from "./components/CustomCards";
import './App.css'
import "./skill.css"

function App() {
  scroll();
  const about0Ref = entry();
  const about1Ref = entry();
  const about2Ref = entry();
  const about3Ref = entry();
  const about4Ref = entry();
  const about5Ref = entry();
  const about6Ref = entry();
  const about7Ref = entry();
  const about8Ref = entry();
  const about9Ref = entry();
  const about10Ref = entry();
  const about11Ref = entry();
  const about12Ref = entry();
  const about13Ref = entry();
  const about14Ref = entry();
  const about15Ref = entry();
  const about16Ref = entry();
  const about17Ref = entry();
  const about18Ref = entry();

  window.ondragstart = function() {return false}
  return ( 
    <div>
      <CustomCursor />
      <div class="pagebody">
        <div class="container">
          <header>
            <a class="Name" data-text="Tran Thien Quang">Tran Thien Quang</a>
            <h2>Front End Engineer</h2>
            <p>I craft smooth, snappy and seamless digital <br/>experiences for all.</p>
            <div class="social">
            <a href="https://github.com/Quang161" target="_blank">
              <img alt="github" width="36" height="36" srcset="/My-Portfolio/icons8-github-50.png"></img>
            </a>
            <a href="https://zalo.me/0867700534" target="_blank">
              <img alt="Zalo" width="36" height="36" srcset="/My-Portfolio/icons8-zalo-50.png"></img>
            </a>
             <a href="mailto:quangtrn1612003@gmail.com">
              <img alt="Gmail" width="36" height="36" srcset="/My-Portfolio/icons8-gmail-48.png"></img>
            </a>
            </div>
            <div class="list">
              <li>
                <a class="group-list" href="#about"><span></span>About</a>
              </li>
              <li>
                <a class="group-list" href="#skills"><span></span>Skills</a>
              </li>
              <li>
                <a class="group-list" href="#projects"><span></span>Projects</a>
              </li>
            </div>
          </header>
          <main class="section-List">
            <section id="about">
              <a class="mo-list" href="#about"><span></span>About</a>
              <p ref={about1Ref} class="par hidden">A detail-oriented web developer passionate for both <span class="gentle-hover-shake">coding</span> and <span class="gentle-hover-shake">photography.</span> My eye for aesthetics helps me create clean, user-friendly, and responsive designs. With hands-on experience from academic and personal projects, I strive to blend technology and creativity to build impactful web experiences.</p>
              <p ref={about2Ref} class="para hidden">In the past, I've worked on various projects, including developing interactive <span class="gentle-hover-shake">applications</span> and small <span class="gentle-hover-shake">games</span> to enhance my understanding of UI/UX principles. Through these projects, I explored user behavior, accessibility, and responsive design to create seamless experiences. I enjoy experimenting with <span class="gentle-hover-shake">animations</span>, and <span class="gentle-hover-shake">modern design</span> trends to make interfaces more engaging. I've also built simple design prototypes with <span class="gentle-hover-shake">figma</span> to test different layouts and interactions. These experiences have helped me improve my design thinking and front-end development skills.</p>
              <p ref={about3Ref} class="parap hidden">In my spare time, I enjoy capturing moments with my phone, diving into light novels, or relaxing with friends while gaming together on Discord.</p>
            </section>

            <section id="skills">
              <div class="skill-title"><span>Skills shop</span></div>
              <div class="flex-row1">
                <div class="item1">
                    <img ref={about4Ref} class="logo hidden" src="ui.png" width="50" height="50"/>
                    <img src="shelf-blue1.png" width="120" height="100" />
                    <div ref={about11Ref} class="throwable hidden">UI/UX</div>
                </div>
                <div class="item1">
                    <img ref={about5Ref} class="logo hidden" src="web-link.png" width="50" height="50"/>
                    <img src="shelf-blue1.png" width="120" height="100" />
                    <div ref={about12Ref} class="throwable hidden">Web</div>
                </div>
                <div class="item1">
                    <img ref={about6Ref} class="logo hidden" src="controller.png" width="50" height="50"/>
                    <img src="shelf-blue1.png" width="120" height="100" />
                    <div ref={about13Ref} class="throwable hidden">Game</div>
                </div>
              </div>
                
              <div class="skill-title"><span>Tools shop</span></div>
              <div class="flex-row2">
                <div class="item2">
                    <img ref={about7Ref} class="logo hidden" src="figma-color.png" width="50" height="50"/>
                    <img src="shelf-blue1.png" width="120" height="100" />
                    <div ref={about14Ref} class="throwable hidden">Figma</div>
                </div>
                <div class="item2">
                    <img ref={about8Ref} class="logo hidden" src="note.png" width="50" height="50"/>
                    <img src="shelf-blue1.png" width="120" height="100" />
                    <div ref={about15Ref} class="throwable hidden">Pen & Paper</div>
                </div>
                <div class="item2">
                    <img ref={about9Ref} class="logo hidden" src="sql-server.png" width="50" height="50"/>
                    <img src="shelf-blue1.png" width="120" height="100" />
                    <div ref={about16Ref} class="throwable hidden">SQL Server</div>
                </div>
                <div class="item2">
                    <img ref={about10Ref} class="logo hidden" src="visual-studio.png" width="50" height="50"/>
                    <img src="shelf-blue1.png" width="120" height="100" />
                    <div ref={about17Ref} class="throwable hidden">VS Studio</div>
                </div>
                <div class="item2">
                    <img ref={about0Ref} class="logo hidden" src="visual-code.png" width="50" height="50"/>
                    <img src="shelf-blue1.png" width="120" height="100" />
                    <div ref={about18Ref} class="throwable hidden">VS Code</div>
                </div>
              </div>
            </section>

            <section id="projects">       
              <a class="mo-list" href="#projects"><span></span>Projects</a>
               <CustomCards card={{timeline: "SEP - NOV 2023", title: "E-commerce Store for Figures - Bangboo shop", 
               description: "Designed and developed the UI/UX for a figure shopping website inspired by the game ZZZ, featuring collectible Bangboo figures. Conceptualized the website’s functional flow, user interactions, and structured key features to ensure a seamless and engaging user experience with responsive design across all devices.", 
               skill_1: "HTML", skill_2: "JS", skill_3: "Bootstrap", skill_4: "ASP.NET",
               link: "https://github.com/Quang161/E-commerce-Store-for-Figures-Bangboo-shop"}}/>
              <CustomCards card={{timeline: "FEB - APR 2023", title: "Moblie card Game - Higher or lower", 
               description: "Developed a Higher or Lower card game where players guess if the next card will be higher or lower. Implemented core mechanics such as card shuffling, comparison logic, and win/loss conditions. Enhanced gameplay with a score multiplier that rewards streaks of correct guesses, making the experience more dynamic and rewarding.", 
               skill_1: "Figma", skill_2: "Kotlin", skill_3: "Java", skill_4: "XML",
               link: "https://github.com/Quang161/Moblie-card-Game-Higher-or-lower"}}/>
               <CustomCards card={{timeline: "OCT - DEC 2022", title: "WinForms-Based Management System - Pet shop", 
               description: "Designed and developed the UI/UX for a figure shopping website inspired by the game ZZZ, featuring collectible Bangboo figures. Conceptualized the website’s functional flow, user interactions, and structured key features to ensure a seamless and engaging user experience with responsive design across all devices.", 
               skill_1: "HTML", skill_2: "JS", skill_3: "Winform", skill_4: "C#",
               link: "https://github.com/Quang161/WinForms-Based-Management-System-Pet-shop"}}/>
            </section>
          </main>
        </div>
      </div>  
    </div>
  )
}

export default App