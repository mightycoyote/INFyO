import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import headerpic from './img/yoyo-topdown.jpg';
import Img from './js/img';
import Nav from './js/nav';
import terrarian from './img/terrarian-assembled.jpg';
import spinstar from './img/spinstar-assembled.jpg';
import freehand from './img/speedaholic-freehand.jpg';
import transaxle from './img/spinstar-inside.jpg';
import bearing from './img/terrarian-inside.jpg';
import starters from './img/starters.jpg';
import atomiccrash from './img/atomiccrash.jpg';
import tivayder from './img/ti-vayder.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    // [darkMode] at the end is an optional second argument to useEffect() to check if it's changed before re-rendering
    // should keep it from misbehaving when I add preference settings
  }, [darkMode]);

  return (
    <div className="bg-primary-pale dark:bg-gray-900">
    {/* header */}
       <header>
        <div className="bg-secondaryone-verydark dark:bg-secondaryone-light dark:bg-opacity-70 text-complementary-light dark:text-complementary-verylight relative">
          {/* here's the darkmode button */}
          <button className="font-light absolute bottom-0 sm:bottom-auto sm:top-0 right-0 text-xs p-1 m-1 rounded ring-1 ring-complementary-light dark:ring-complementary-verylight" onClick={() => {setDarkMode(!darkMode)}}>toggle dark mode</button>
          <div className="flex">
            <div className="mx-auto p-8">
              <img src={headerpic} alt="Legendary Terrarian yoyo by One Drop" className="max-h-16 rounded-full inline-block ring-4 ring-complementary-light dark:ring-complementary-verylight"></img>
              <h1 className="inline-block align-middle pl-4 text-5xl sm:text-6xl md:text-8xl">INFyO</h1>
              <p className="pt-2 text-lg md:text-2xl">A brief primer on modern yoyos</p>
            </div>
          </div>
        </div>
      </header>
    {/* content */}
      <main>
        <Nav />
        <p className="point pb-5">There are tons of tutorials for stringing and throwing your first yoyo, trick progression, and maintenance&mdash;they're easy to find, and I'm not repeating them all here. This is an overview, plus some FAQs. Let's get started!</p>
        <h2 id="basics">Modern yoyo basics</h2>
        <h3>Behavior</h3>
          <div className="column-nowrap">
            <div className="primary">
              <ul className="pt-1 mb-6">
                <li>
                  <b>Responsive</b>: A yoyo that returns to your hand when you tug on it.                 
                  <p className="point">Most of the yoyos marketed to beginners and kids are still responsive yoyos. The slightly fancier ones can be converted to unresponsive.</p>
                </li>
                <li><b>Unresponsive</b>: A yoyo that doesn't return to your hand when you tug on it. Instead, it's brought back to the hand with a type of trick called a "bind return." The bind causes the yoyo's silicone response pads to grab the string. Most modern string trick yoyos are not responsive, which allows them to spin for a very long time, and opens up many new kinds of tricks.</li>
              </ul>                
              <Img src={terrarian} alt="One Drop Legendary Terrarian yoyo" caption="A modern unresponsive ball bearing yoyo (One Drop YoYos Legendary Terrarian)." />
            </div>
            <aside id="both" className="box">
              <span className="boxhead">Having it both ways</span>
              <p>Some yoyos are designed to work for either responsive or unresponsive play. Most of these can be switched back and forth by changing only the bearing and perhaps the axle, and often, both sets are included in the box (but read product descriptions to be sure).</p>
              <p className="point">Sometimes, a yoyo can be set up either responsive or unresponsive, but it also requires different response pads for each. That's less trivial because response stickers can't reliably be reused once they're removed. With these yoyos you'll usually decide which setup you prefer and (mostly) leave it.</p>
            </aside>
          </div>
          <h3>Playstyles</h3>
          <div className="column-nowrap">
            <div className="primary">
              <p className="mb-6">There are five main styles of play as reflected by the official contest divisions. You can also count an unofficial sixth&mdash;responsive string tricks, sometimes called "0A." If you're new to the hobby,  <a href="https://en.wikipedia.org/wiki/World_Yo-Yo_Contest#Championship_Divisions">check them out</a>.</p>
              <Img src={freehand} alt="Yoyo with counterweight attached" caption="A counterweight or '5A' setup (C3yoyodesign Speedaholic XX yoyo, Porykon V-Dash counterweight)." />
            </div>
            <aside className="box">
              <span className="boxhead">The right tools</span>
              <p>1A, 3A, and 5A all use string trick yoyos, mostly interchangeably. 2A and 4A use their own distinct yoyos specific to those playstyles.</p>
            </aside>
          </div>
        <Nav />
        <h3 id="guts">Guts</h3>  
        <div className="column-nowrap">
          <div className="primary">
            <div>
              <h4>Fixed-axle</h4>
              <p>Also called "fixie." Responsive. E.g, your basic wooden yoyo, or Duncan Imperial or similar. Wooden yoyos come back when you tug on them due to the friction from the wood itself. Yoyos made with slicker materials generally need to add something to the area next to the axle (called the "response area") to create the friction.</p>
            </div>
            <div>
              <h4>Transaxle</h4>
              <p className="mb-6">These have an axle that is a fixed steel post, but with a plastic sleeve that spins around it. They are still cheap, simple and generally maintenance-free, but easier to use and learn tricks on than a fixed axle. The response area uses starburst response (grooves in the plastic that radiate outward).</p>
              <Img src={transaxle} alt="Inside of a transaxle yoyo" caption="The guts of a transaxle yoyo with starburst response."/>
            </div>  
          </div>
          <aside className="box">
            <span className="boxhead">Keeping it simple</span>
            <p>Transaxle yoyos are usually the best choice for younger kids and anyone who is not jazzed by the prospect of yoyo maintenance.</p>
            <Img src={spinstar} alt="YoYoFactory Spinstar yoyo" caption="A transaxle yoyo (YoYoFactory Spinstar)." />
          </aside>
        </div>
        <div>
          <h4>Ball bearing</h4> 
          <div className="halfsies">
            <p>Ball bearings can be used for either responsive or unresponsive play, depending on the yoyo design, type of bearing, and whether the bearing spins freely or is lubed/greased to slow it down. The response system of most contemporary string trick yoyos consists of a 19mm diameter ring of silicone or silicone rubber. Silicone response lasts a fairly long time under normal use, but not forever. Some of the cheaper responsive bearing plastic yoyos use starburst response instead.</p>
            <Img src={bearing} alt="Inside of a ball bearing yoyo" caption="The guts of a ball bearing yoyo with silicone response." />
          </div> 
        </div>
        <h5>String trick yoyo bearings</h5>
        <div className="column-nowrap">
          <div className="primary">
            <p>The majority of string trick yoyos all take the same standard diameter bearing. <em>The narrow "half-spec" version is used for responsive play, and its wider sibling the "C" bearing for unresponsive play</em>.</p>
            <ul>
              <li><b>Half-spec bearings</b> generally need a thick lube or silicone grease in them to respond properly. When a half-spec bearing comes installed in your new beginner-friendly yoyo, it may have been lubed already, but eventually it will stop returning easily with a tug and you'll have to add more. Fortunately, household 3-in-1 oil works fine for this.</li> 
              <li><b>"C" bearings</b> <a href="#lube">can be played without lube</a>. But, they have more variations. Most yoyos come with one that's concave, or has a groove or channel in it, instead of a plain flat bearing. This helps keep the string towards the center of the bearing, which in turn makes it easier to keep the yoyo from drifting off plane. Centering bearings are popular for good reason, but bearing shape is also a matter of personal preference, and not all yoyos work equally well with all shapes.</li>
            </ul>
          </div>
          <aside className="box">
            <span className="boxhead">Big and small</span>
            <p>Manufacturers do still make some string trick yoyos that take bearings other than "C"&mdash;typically "D" or "A". That would be mentioned in the product description, though. If the size isn't mentioned and it's a contemporary string trick yoyo, you can assume it's size C. (If it's a collectors' item from the early days of ball-bearing yoyos, though, it might not be one of the current standard sizes at all.)</p>
          </aside>
        </div>
        <Nav />
        <h3 id="materials" className="clear-both">Materials</h3>
        <div className="columns">
          <div>
            <h4>Wood</h4>
            <p>These are usually, but not always, fixed-axle. Good cheap ones are available, but you can also find fancier models with features like adjustable axles and nice hardwoods.</p>
          </div>
          <div>
            <h4>Plastic</h4>
            <p>Plastic yoyos run the gamut from literally unusable discount-store trash to beautifully machined <a href="https://en.wikipedia.org/wiki/Polyoxymethylene">POM</a> (AKA "Delrin," which is a brand name) or <a href="https://en.wikipedia.org/wiki/Polycarbonate">polycarbonate</a> that feel and play great and cost as much as a decent aluminum yoyo. There can be some advantages to these, <a href="#plastic">as discussed below</a>. On the other hand, you can also get a very good molded plastic yoyo that you'll enjoy forever for $20 or less.</p>
          </div>
          <div>
            <h4>Aluminum</h4>
            <ul className="pt-1">
              <li><b>6061</b>. Most aluminum yoyos are made out of a 6061 alloy. It's the standard, and you can assume an aluminum yoyo is made out of 6061 unless the listing states otherwise, or it's of dubious origin.</li>
              <li><b>7000 series</b>: usually 7068 or 7075. Some higher-end aluminum yoyos are made out of these. Harder and denser than 6061, it can be machined a little thinner, and can result in higher-performing, slightly more damage-resistant yoyos. They hit your hand (or any other body parts that get in the way) harder accordingly, though.</li>
            </ul>
            <p className="point"><a href="https://en.wikipedia.org/wiki/Aluminium_alloy#Wrought_alloys">Read all about aluminum alloys in Wikipedia.</a></p>
          </div>
          <div>
            <h4>Titanium</h4>
            <div className="column-nowrap-reverse">
              <div className="lg:order-last">
                <p>Usually unresponsive, although there are also some responsive slimline titanium yoyos. The advantage of titanium is similar to 7000-series aluminum, only even more so&mdash;it can be machined even thinner, and is very durable. However, it does not perform objectively better than aluminum. (If that were the case, titanium would routinely be used by serious competitors, but it isn't.) They're much more expensive than most nice competition bimetals, and often very limited, and you're not really missing out if you don't have one.</p>
                <p className="point">... That said, if you want titanium anyway, one good way to go about it is to keep an eye out for preorder announcements. They're sometimes available used too, of course, but not necessarily at a bargain price.</p>
              </div>
              <Img src={tivayder} alt="Titanium yoyo" caption="A titanium yoyo (Ti-Vayder #206)." />
            </div>
          </div>
          <div>
            <h4>Steel</h4>
            <p>Steel is <em>extremely</em> heavy, but sometimes small yoyos are made out of it. It's not really a performance material, more of a novelty. Some people like to choose a steel yoyo as the one they carry in their pocket all day, due to its durability.</p>
          </div>
          <div>
            <h4>Bimetal</h4>
            <div className="column-nowrap">
              <p>High-performance, competition-oriented yoyos are most often made out of aluminum with steel rings on the rims. Sometimes you also see designs where the ring is made out of more aluminum, in which case it's mostly for looks. Some really good, although relatively expensive, plastic yoyos also have metal weight rings.</p>
              <Img src={atomiccrash} alt="Bimetal yoyo" caption="A competition-style bimetal yoyo (C3yoyodesign Atomic Crash)." />
            </div>
          </div>
        </div>
        <Nav />
        <h3 id="strings">Strings</h3>
        <div>
        {/* aside box floats to right starting on screens, but end of the section on smaller screens */}
          <aside className="box box-float">
            <span className="boxhead">Thick and thin</span>
            <p>Strings also come in different thicknesses. There are some variations between the different manufacturers, and many of them also offer different thicknesses of their main formula. Thickness is just another personal preference. What you like sometimes depends on the specific yoyo, too.</p>
          </aside>
          <div className="primary">
            <div>
              <h4>Considerations</h4>
              <p>The main qualities (or lack thereof, depending) of strings are:</p>
              <ol className="list-decimal">
                <li>Whippiness/body. This is probably the most important for advanced play. The string has to have a certain amount of body, or density, to work in whip or slack tricks. (Imagine trying to throw a loop of rope around a post. Now imagine trying to throw a loop of fluffy yarn around it. It's like that.)</li>
                <li>Tension/twistiness control. Yoyo strings, for the last 100 years or so, are made of a double-length string that is folded in half and then twisted tightly on itself. (The yoyo axle goes in the natural loop at the end.) It's completely normal for the tension of the twist to change during play, with the direction it goes in depending on what you're doing and which hand you're using. Some strings are less prone to twisting up on themselves than others.</li>
                <li>Longevity. Average cheap polyester strings generally don't last longer than an hour or two. Which is fine&mdash;they're cheap. As strings get higher quality and more expensive, they tend to last a bit longer too. At the extreme end there are strings that can last for months.</li>
                <li>Roughness/stiffness. Depending on the thread that is used in them, strings can vary a lot in how rough or soft-feeling they are on your hands. For some people this is a big consideration in choosing string&mdash;for others, not so much.</li>
              </ol>
            </div>
            <div>  
              <h4>Cotton</h4> 
              <p>Used for fixed-axle, especially wooden yoyos (synthetic strings can melt from the friction). They don't last long and need to be checked for wear regularly. Synthetic strings don't usually wear out enough to break&mdash;<a href="#changingstrings">generally they become unusable in other ways before then</a>. Breakage is more likely with cotton, however.</p>
            </div>
            <div>
              <h4>Polyester</h4> 
              <p>The most common, standard string material for bearing-axle yoyos. They range from very cheap to somewhat expensive ($1 or more per string). String quality isn't that important when you're first starting out. After that&mdash;how good the strings need to be, which characteristics are important to you, and how much you spend on them are mostly up to personal preference.</p>
            </div>
            <div>
              <h4>Nylon or nylon-polyester blend</h4>
              <p>Nylon is usually soft and long-lasting, but also plays very differently from polyester. It's more bouncy and stretches more during play, and whips very fast. Blends vary in this depending on how much nylon is used. Not everyone likes it, but it's worth a try as you get more advanced. Decent nylon strings also tend to be fairly expensive, but that can be offset by the longevity.</p>
              <p className="point">Some nylon formulations are so slick that you may need to apply rosin to the finger loop to keep it from sliding off. Rosin is an accessory you can sometimes find alongside the strings.</p>
            </div> 
          </div>
          <aside className="box box-last">
            <span className="boxhead">Thick and thin</span>
            <p>Strings also come in different thicknesses. There are some variations between the different manufacturers, and many of them also offer different thicknesses of their main formula. Thickness is just another personal preference. What you like sometimes depends on the specific yoyo, too.</p>
          </aside>
        </div>
        <Nav />
        <h2 id="gettingstarted">Getting started</h2>
          <h3>What yoyo should I buy?</h3>
          <p>There are a couple of different approaches:</p>
          <ol className="list-decimal">
            <li>Get one of the yoyos <a href="#both">that can be played either responsive or unresponsive</a> by swapping out the bearing. I did this, and it worked fine, but once I got into unresponsive play it was annoying until I bought a second yoyo to play responsive. Swapping out the bearing is not difficult, but it gets tiresome if you feel the urge to do it frequently.</li>
            <li>Just get two yoyos. One of them can be a cheap responsive and the other can be a nicer one that can also be played unresponsive. Or you could get two different switchable ones, and see what setup you prefer on each, etc. This would also let you try out different shape profiles.</li>
          </ol>
          <p className="point">What I <em>don't</em> recommend is trying to learn the basics on a responsive aluminum yoyo. Some people do, but... ouch.</p>
          <h3>Options</h3>
            <div className="column-nowrap">
              <div className="primary">
                <ol className="list-decimal pt-1 mb-6">
                  <li>Starter sets.</li>
                  <li>Plastic yoyos that are marketed as good for both beginner and advanced play, come with both the half spec and C bearing, and look cool to you.</li>
                  <li>Look on yoyo forums to see what people are recommending currently, or ask. The tricky part is that not everything is always available, so you can ask for help choosing among your <em>current</em> options too. People's favorite recommendations aren't always in stock.</li>
                </ol>
                <Img src={starters} alt="Three plastic yoyos" caption="A few plastic yoyos that come packaged with both responsive and unresponsive bearings (left to right: YoYoFactory Arrow, Recess First Base, iYoYo Shooting Star)." />
              </div>
              <aside className="box">
              <span className="boxhead">Being prepared</span>
                <p>The one thing you should definitely buy with your first yoyo is extra string (if you're not getting a package deal that comes with it already). They don't need to be fancy or expensive, and a 100-pack might be overkill, but you do need some. When I bought my first yoyo, I had no idea the strings would wear out so fast (typically an hour or two).</p>
                <p className="point">Many people find dark string too hard to see. This can also be true of plain white. Bright yellow, green, orange, or pink are recommended instead. If you really want to get something like blue or purple, just get a bright color too.</p>
              </aside>
            </div>
          <h3>Resources</h3>
            <h4>Videos</h4>
              <p>There are lots and lots of free online tutorials, both for tricks and for maintenance how-tos. Check out several channels&mdash;some teaching styles will probably work better for you than others. Similarly, if you're having trouble understanding a trick, go find an alternate explanation of it. This may seem obvious, but it's easy to forget when you're feeling frustrated.</p>
            <h4>Online communities</h4>
            <p>Two big ones are <a href="https://www.reddit.com/r/Throwers/">Reddit/r/Throwers</a> (along with the Throwers Discord linked on that page) and the Facebook Group <a href="https://www.facebook.com/groups/yoyoBST">YoYo BST & Talk</a>. There are many more, mostly run by store or manufacturer brands. These can be fun places and good resources as well, but favor their own products (obviously).</p>
            <p className="point">Keeping an eye on one of the larger online communities will also allow you to find out when contests or other gatherings are coming up.</p>
        <Nav />
        <h2 id="faqs">FAQs (with somewhat controversial answers)</h2>
          <div>
            <h3 id="lube">Unresponsive lube</h3>
            <ul>
            <p className="question">Should I use thin lube on my unresponsive bearings?</p>
            <li>
              <p><b>Arguments in favor</b>: Reduced bearing noise, rust protection, improved smoothness, theoretical increase in longevity.</p>
            </li>
            <li>
              <p><b>Arguments against</b>: Makes bearing slower or responsive, attracts crud, does not actually improve longevity, is a waste of time.</p>
              <p className="point">People living in some very humid and/or salty climates report that bearing lube isn't really optional for them. Bearings tend to rust otherwise.</p>
            </li>
            <li>
              <p><b>My opinion</b>: Feel free to experiment with thin lube, for noisy or rough-feeling bearings at the very least. Use a pin or similar to apply a very small amount, ideally less than a drop. I've seen some instructions telling people to put in way too much. Too much does make the bearing semi-responsive, and then you'd need to <a href="https://www.google.com/search?q=how%20to%20clean%20a%20yoyo%20bearing">clean it</a> and start over.</p>
            </li>
            </ul>
          </div>
          <div>
            <h3>Jumping into unresponsive play</h3>
            <div className="column-nowrap">
              <div>
                <p className="question">Do I really need to do anything with a responsive yoyo, or can I just learn to bind and go straight to unresponsive?</p>
                <ul>
                  <li>
                    <p><b>Argument in favor of skipping responsive play</b>: It's your yoyo and your time and you can do whatever you want.</p>
                  </li>
                  <li>
                    <p><b>Argument against</b>: Spending some time with a responsive yoyo first makes it easier to learn the basics and makes your technique cleaner. And, it can help keep you from getting into bad habits that are hard to break later.</p>
                  </li>
                  <li>
                    <p><b>My opinion</b>: You should play with a responsive yoyo at least until you can throw straight (frontstyle and breakaway), and then a few basic tricks until you get a feel for how you have to play to keep the yoyo from snapping back prematurely.</p>
                    <p>From a purely practical standpoint, learning the most basic basics on a unresponsive yoyo would be pretty tedious&mdash;lots of winding the yoyo back up by hand, not so much doing tricks.</p>
                  </li>
                </ul>
              </div>
              <aside className="box">
                <span className="boxhead">Not a destination</span>
                <p>A lot of people seem to overthink this "when can I graduate to unresponsive" question. Most players I know of continue to enjoy responsive yoyos forever&mdash;It's not really an either/or thing. That's one of the reasons it's nice to have one of each available when you're ready to start messing around with unresponsive play.</p>
              </aside>
            </div>
          </div>
          <div className="clear-both">
            <h3 id="plastic">Plastic</h3>
            <p className="question">Is plastic as good as aluminum? Why bother with plastic when some aluminum yoyos are so cheap?</p>
            <p>No, plastic is not as good as aluminum, performance-wise. (Yes, you can find excellent plastic yoyos that are better than mediocre aluminum yoyos. That's not the point.) Plastic can work very well, though. Its main advantages over a decent budget/b-grade/pre-owned aluminum yoyo are situational:</p>
            <ul>
              <li>You're a beginner, or, are otherwise learning something that might cause you to hit yourself or other things a lot (ex: horizontal tricks, 5A tricks).</li>
              <li>You're playing over pavement/bricks etc. Everyone should have some yoyos they don't mind damaging (if not all of them), but pavement dings on aluminum are the worst.</li>
              <li>You're playing somewhere cold. Plastic is much more forgiving on cold hands.</li>
              <li>You want a cheap, easily-replaceable yoyo due to the chance of it getting lost or stolen where you're going (school or summer camp being prime examples).</li>
              <li>You feel like playing with a plastic yoyo.</li>
            </ul>
          </div>
          <div>
            <h3 id="changingstrings">Changing strings</h3>
            <p className="question">How do I know when it's time to change strings?</p>
            <p>This is, alas, another highly subjective question. However, for polyester it might be any or all of these:</p>
            <ul>
              <li>It twists up on itself more than it used to, making it difficult to manage the string tension.</li>
              <li>It doesn't bind reliably.</li>
              <li>It feels sort of dead&mdash;flat and unbouncy.</li>
              <li>It looks dirty and oily. Some people have sweatier hands than others. If your good poly strings are getting gross before they're wearing out, you can sometimes extend their life by washing them.</li>
            </ul>
          </div>
          <div>
            <h3>Shapes</h3>
            <p className="question">Wow, these come in a lot of shapes. Which one is best?</p>
            <ul>
              <li>You'll often see shapes broadly categorized as "V," "W," "H," or "O," which is just a shorthand since many designs don't fit neatly into one of these, and, it doesn't always tell you much. The shape-naming convention is explained in detail elsewhere online by people more knowledgeable than me, so I'm not repeating it here. A good one is on the <a href="https://www.yanasiyoyo.com/blog/2018/1/22/the-shape-of-things">Yanasi Yoyo blog</a>.</li>
              <li>A typical contemporary performance-oriented (or competition/"comp") yoyo has one of the more angular profiles, a lot of rim weight, and is often fairly wide. Beyond these, there are an enormous variety of yoyos that are popular for their fun factor, feel in the hand, and suitability for more casual playstyles, instead of pure performance.</li>
              <li>When you're new, it's easy to get the idea that you'll always want to play with the most performance-oriented yoyos you can get. That's true to an extent when you're working on something new&mdash;it's easier to land and figure out the tricks you're learning. Just don't be surprised if your taste in yoyos evolves over time, or even day to day, after you've been playing for a while.</li>
              <li>The specific shape you get for your first yoyo doesn't matter much. Get the one you want to play with.</li>
            </ul>
          </div>
      </main>
      <footer className="bg-secondaryone-verydark dark:bg-secondaryone-light dark:bg-opacity-70">
        <div className="footertext">
          <p>&copy;2021 <a className="text-primary-pale" href="https://mightycoyote.github.io/">Sarah Wilkes</a></p>
        </div>
      </footer>
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
