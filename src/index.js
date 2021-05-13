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
       <div className="bg-secondaryone-verydark">
        <div className="container mx-auto w-6/12 p-8">
          <img src={headerpic} alt="Legendary Terrarian yoyo by One Drop" className="max-h-16 rounded-full inline-block ring-4 ring-complementary-light"></img>
          <h1 className="text-complementary-light inline-block align-middle pl-4 text-6xl">INF-yO</h1>
          <span className="text-complementary-light block">Stuff I wish I knew sooner about modern yoyos</span>
        </div>
      </div>
    {/* content */}
      <div className="content">
        <p>Yoyo is a ridiculously fun pastime with an amazing international community. The yoyos themselves don't always resemble the classic old wooden or plastic yoyos that most people are familiar with, though.</p>
        <p className="callout">There are tons of tutorials on getting started, maintenance, reviews, and especially tricks--they're easy to find, and I'm not repeating them here. This is just a guide to some of the things that weren't always clear to me as a beginner.</p>
        <h2>Modern yoyo basics</h2>
        <h3>Behavior</h3>
        <ul>
          <li><b>Responsive</b>: A yoyo that returns to your hand when you tug on it (or allow the string to become slack, which is what tugging on it does). </li>
          <li><b>Unresponsive</b>: Most modern string trick yoyos are not responsive, which allows them to spin for a very long time, and opens up many new kinds of tricks. Unresponsive yoyos are brought back to the hand with a type of trick called a "bind return." The bind causes the unresponsive yoyo's silicone response pads to grab the string.</li>
        </ul>
        <p>Most yoyos marketed to beginners and kids are still responsive yoyos. The slightly fancier ones can be converted to unresponsive.</p>
        <p className="callout">Some yoyos are designed to work for either responsive or unresponsive play (instead of only one or the other). Most of these can be switched back and forth by changing only the bearing and perhaps the axle, and usually, both sets are included in the box (read product descriptions to be sure).</p>
        <p className="point">Occasionally, a yoyo can be set up either responsive or unresponsive, but it also requires different response pads for each. That's less trivial because response stickers or silicone can't be reused once they're removed (and can take some effort to do so since they don't come out cleanly). With these yoyos you'd decide which setup you want to use and mostly leave it.</p>
      </div>
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
