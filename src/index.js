import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import headerpic from './img/yoyo-topdown.jpg';

function App() {
  return (
    <div>
    {/* header */}
       <header className="bg-secondaryone-verydark">
        <div className="container mx-auto w-6/12 p-8">
          <img src={headerpic} alt="Legendary Terrarian yoyo by One Drop" className="max-h-16 rounded-full inline-block ring-4 ring-complementary-light"></img>
          <h1 className="inline-block align-middle pl-4 text-6xl">INF-yO</h1>
          <p className="pt-2 text-lg">Stuff I wish I knew sooner about modern yoyos</p>
        </div>
      </header>
    {/* content */}
      <main>
        <section>
          <p className="point">There are tons of tutorials on getting started, maintenance, reviews, and especially tricks--they're easy to find, and I'm not repeating them here. This is just a guide to some of the things that weren't always clear to me as a beginner.</p>
        </section>
        <section>
          <h2>Modern yoyo basics</h2>
          <h3>Behavior</h3>
            <div className="content">
              <div className="primary">
                <ul>
                  <li><b>Responsive</b>: A yoyo that returns to your hand when you tug on it. </li>
                  <li><b>Unresponsive</b>: A yoyo that does <em>not</em> return to your hand when you tug on it. Instead, it's brought back to the hand with a type of trick called a "bind return." The bind causes the yoyo's silicone response pads to grab the string. Most modern string trick yoyos are not responsive, which allows them to spin for a very long time, and opens up many new kinds of tricks.</li>
                </ul>
                <p>Most yoyos marketed to beginners and kids are still responsive yoyos. The slightly fancier ones can be converted to unresponsive.</p>
              </div>
              <div className="box">
                <p>Some yoyos are designed to work for either responsive or unresponsive play. Most of these can be switched back and forth by changing only the bearing and perhaps the axle, and often, both sets are included in the box (but read product descriptions to be sure).</p>
                <p className="point">Occasionally, a yoyo can be set up either responsive or unresponsive, but it also requires different response pads for each. That's less trivial because response stickers or silicone can't be reused once they're removed (and can take some effort to do so since they don't come out cleanly). With these yoyos you'd decide which setup you want to use and mostly leave it.</p>
              </div>
            </div>
            <h4>Playstyles</h4>
            <div className="content">
              <div className="primary">
                <p>There are five main styles of play as reflected by the official <a href="https://en.wikipedia.org/wiki/World_Yo-Yo_Contest#Championship_Divisions">contest divisions</a>. (You can also count a sixth, responsive string tricks, sometimes called "0A.") If you're new to the hobby, check them out. Conversationally, the styles are often referred to by their division name. It's a useful shorthand, but somewhat bewildering if you're not familiar with it yet.</p>
              </div>
              <div className="box">
                <p>1A, 3A, and 5A all use string trick yoyos, mostly interchangeably. 2A and 4A use their own unique yoyos specific to those playstyles.</p>
                <p>This page is about getting started with basic 1A play.</p>
              </div>
            </div>
        </section>
      </main>
    {/* footer */}
    </div>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
