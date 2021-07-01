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
                <p>There are five main styles of play as reflected by the official <a href="https://en.wikipedia.org/wiki/World_Yo-Yo_Contest#Championship_Divisions">contest divisions</a>. You can also count an unofficial sixth&mdash;responsive string tricks, sometimes called "0A." If you're new to the hobby, check them out. Conversationally, the styles are often referred to by their division name.</p>
              </div>
              <div className="box">
                <p>1A, 3A, and 5A all use string trick yoyos, mostly interchangeably. 2A and 4A use their own distinct yoyos specific to those playstyles.</p>
                <p>The page you're on now is about getting started with basic 1A play.</p>
              </div>
            </div>
          <h3>Guts</h3>  
          <div className="content">
            <div className="primary">
              <ul>
                <li><b>Fixed-axle, or "fixie."</b> Responsive. E.g, your basic wooden yoyo, or Duncan Imperial or similar. (Don't worry, people still play with these.) Wooden yoyos come back when you tug on them due to the friction from the wood itself. Yoyos made with slicker materials generally need to add something in the area next to the axle (called the "response area") to create the friction.</li>
                <li><b>Transaxle.</b> These have an axle that is a fixed steel post, but with a plastic sleeve that spins around it. They are still cheap, simple and generally maintenance-free, but easier to use and learn tricks on than a fixed axle. The response area uses starburst response (grooves in the plastic).</li>
                <li><b>Ball bearing.</b> Ball bearings can be used for either responsive or unresponsive play, depending on the yoyo design, type of bearing, and whether the bearing spins freely or is lubed/greased to slow it down. The response system of most contemporary string trick yoyos consists of a 19mm diameter ring of silicone or silicone rubber. Silicone response lasts a fairly long time under normal use, but not forever. Some of the cheaper responsive bearing plastic yoyos use starburst response instead.</li>
              </ul> 
            </div>
            <div className="box">
              <p><b>Transaxle</b> yoyos are usually the best choice for younger kids and anyone who is not jazzed by the prospect of yoyo maintenance.</p>
            </div>
          </div>
          <h4>String trick yoyo bearings</h4>
          <div className="content">
            <div className="primary">
              <p>The majority of string trick yoyos all take the same standard diameter bearing. The narrow "half-spec" version is used for responsive play, and its wider cousin the "C" bearing for unresponsive play.</p>
              <ul>
                <li><b>Half-spec bearings</b> need a thick lube or silicone grease in them to respond properly. When one comes installed in your new beginner-friendly yoyo, it's usually been lubed already, but eventually it will stop returning easily with a tug and you'll have to add more.</li> 
                <li><b>"C" bearings</b> <a href="www.example.com">don't necessarily need lube</a>. But, they have more variations. Most yoyos come with one that's concave, or has a groove or channel in it instead of a plain flat bearing. This helps keep the string towards the center of the bearing, which in turn makes it easier to keep the yoyo from drifting off plane.</li>
              </ul>
            </div>
            <div className="box">
              <p>Manufacturers do still make string trick yoyos that take bearings other than "C"&mdash;typically "A" or "D". That would be mentioned in the product description, though. If the size isn't mentioned and it's a contemporary string trick yoyo, you can assume it's size C. (If it's a collectors' item from the early days of ball-bearing yoyos, though, it could be anything.)</p>
            </div>
          </div>
          <h3>Common materials</h3>
          <div className="columns">
            <div>
              <h4>Wood</h4>
              <p>These are usually, but not always, fixed-axle. Decent cheap ones are still available, but you can also find fancier ones with features like adjustable axles and nice hardwoods.</p>
            </div>
            <div>
              <h4>Plastic</h4>
              <p>Plastic yoyos run the gamut from literally unusable dollar-store garbage to beautifully machined <a href="https://en.wikipedia.org/wiki/Polyoxymethylene">POM</a> (AKA "Delrin," which is a brand name) or polycarbonate that feel and play great and cost as much as a decent aluminum yoyo. On the other hand, you can get a very good injection-molded yoyo that you'll use forever for $20 or less.</p>
            </div>
            <div>
              <h4>Aluminum</h4>
              <ul>
                <li><b>6061</b>. Most aluminum yoyos are made out of a 6061 alloy. It's the standard, and you can assume an aluminum yoyo is made out of 6061 unless the listing states otherwise, or, it's dirt-cheap and of dubious origin.</li>
                <li><b>7000 series</b>: usually 7068 or 7075. Some higher-end aluminum yoyos are made out of these. Harder and denser than 6061, they can be machined a little thinner, and can result in higher-performing, slightly more damage-resistant yoyos. They hit your hand (or any other body parts that get in the way) harder accordingly, though.</li>
              </ul>
              <p className="point"><a href="https://en.wikipedia.org/wiki/Aluminium_alloy#Wrought_alloys">If you're interested, you can read all about aluminum alloys in Wikipedia.</a></p>
            </div>
            <div>
              <h4>Titanium</h4>
              <p>Usually unresponsive, although there are also some responsive slimline titanium yoyos. The advantage of titanium is similar to 7000-series aluminum, only even more so&mdash;it can be machined even thinner, and is very durable. However, it does not perform objectively better than aluminum. (If that were the case, titanium would routinely be used by serious competitors, but it isn't.) They're pricey, and often very limited, and you're not really missing out if you don't have one. ...That said, if you want one anyway, one good way to go about it is to keep an eye out for preorder announcements. They're sometimes available used too, of course, but not necessarily cheaper.</p>
            </div>
            <div>
              <h4>Steel</h4>
              <p>Steel is <em>extremely</em> heavy, but sometimes small yoyos are made out of it. It's not really a performance material, more of a novelty. Some people like to choose a steel yoyo as the one they carry in their pocket all day, due to its durability.</p>
            </div>
            <div>
              <h4>Bimetal</h4>
              <p>High-performance, competition-oriented yoyos are most often made out of aluminum with steel rings on the rims. Sometimes you also see designs where the ring is also made out of aluminum, in which case it's mostly for looks. Some really good, although relatively expensive, plastic yoyos also have metal weight rings.</p>
            </div>
          </div>
        </section>
        <section>
          <h2>Getting started</h2>
        </section>
        <section>
          <h2>FAQs with somewhat controversial answers</h2>
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
