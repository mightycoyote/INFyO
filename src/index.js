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
          <p className="point">There are tons of tutorials on getting started, maintenance, reviews, and especially tricks&mdash;they're easy to find, and I'm not repeating them here. This is just a guide to some of the things that weren't always clear to me as a beginner.</p>
        </section>
        <section>
          <h2>Modern yoyo basics</h2>
          <h3>Behavior</h3>
            <div className="content">
              <div className="primary">
                <ul>
                  <li><b>Responsive</b>: A yoyo that returns to your hand when you tug on it. </li>
                  <li><b>Unresponsive</b>: A yoyo that doesn't return to your hand when you tug on it. Instead, it's brought back to the hand with a type of trick called a "bind return." The bind causes the yoyo's silicone response pads to grab the string. Most modern string trick yoyos are not responsive, which allows them to spin for a very long time, and opens up many new kinds of tricks.</li>
                </ul>
                <p className="point">Most yoyos marketed to beginners and kids are still responsive yoyos. The slightly fancier ones can be converted to unresponsive.</p>
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
                <li><b>"C" bearings</b> <a href="www.example.com">don't necessarily need lube</a>. But, they have more variations. Most yoyos come with one that's concave, or has a groove or channel in it, instead of a plain flat bearing. This helps keep the string towards the center of the bearing, which in turn makes it easier to keep the yoyo from drifting off plane. Centering bearings are popular for good reason, but bearing shape is also a matter of personal preference, and not all yoyos work equally well with all of them.</li>
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
          <h3>Strings</h3>
            <div className="content">
                <div className="primary">
                <ul>
                  <li><b>Cotton.</b> Used for fixed-axle, especially wooden yoyos (synthetic strings are said to melt from the friction). They don't last long and need to be checked for wear regularly. Polyester strings don't usually wear out enough to break, but cotton ones can.</li>
                  <li><b>Polyester.</b> The standard for most kinds of play. They range from very cheap to quite expensive. Nowadays it's possible to get strings that are fairly cheap <em>and</em> fairly good at the same time. Like the yoyos themselves, personal preference is a strong factor in how good the strings need to be, which characteristics are important to you, and how much you spend on them. 
                  <p>The cheapest strings:</p></li>
                    <ol className="list-decimal pl-4">
                      <li>Don't whip well&mdash;that is, they don't have enough body to form a good loop when doing a slack trick.</li>
                      <li>Are especially prone to twisting up on themselves (all string does this as the tension changes naturally during play, but better strings resist it more).</li>
                      <li>Don't last long, maybe a couple of hours. This is one of the more significant considerations costwise&mdash;the most expensive strings do often last a lot longer.</li>
                      <li>Might be rough. Personally, I need my strings to be on the soft side since my hands are chapped all winter, but some popular bulk strings are rough and their fans don't seem to mind. I've also encountered cheap strings that are soft, but poor at 1-3.</li>
                    </ol>
                  <li><b>Nylon.</b> Good pure nylon strings are currently boutique items only, but last a ridiculously long time&mdash;as in, measured in months instead of days. They behave very differently from polyester, though, and whip very fast. They're something of an acquired taste. Premium nylon is very soft on the hands, but also so slick that many players have to apply rosin to the finger loop to keep it from sliding off. Rosin is an accessory you can sometimes find alongside the strings. Be wary of cheap nylon strings.</li>
                </ul>
              </div>
            <div className="box">
              <p>Strings also come in different thicknesses. There are some variations between the different manufacturers, and many of them also offer different thicknesses of their main formula. Thickness is just another personal preference. What you like sometimes depends on the specific yoyo, too.</p>
            </div>
            </div>
        </section>
        <section>
          <h2>Getting started</h2>
            <h3>What yoyo should I buy?</h3>
            <p>There are a couple of different approaches:</p>
            <ol className="list-decimal">
              <li>Get one of the yoyos that can be played either responsive or unresponsive by swapping out the bearing. I did this, and it worked fine, but once I got into unresponsive play it was annoying until I bought a second yoyo to play responsive. Swapping out the bearing is not difficult, but it gets tiresome if you do it a lot.</li>
              <li>Just get two yoyos. One of them can be a cheap responsive and the other can be a nicer one that can be played unresponsive. Or you could get two different switchable ones, and see what setup you prefer on each, etc. This would also let you try out different shape profiles.</li>
            </ol>
            {/* putting styling inside a point class element breaks it, not sure why yet */}
            <p className="point">What I <em>don't</em> recommend is trying to learn the basics on a responsive aluminum yoyo. Some people do, but... ouch. Get a plastic one first.</p>
            <h3>Options</h3>
              <div className="content">
                <div className="primary">
                  <ol className="list-decimal">
                    <li>Starter sets.</li>
                    <li>Plastic yoyos that are marketed as good for both beginner and advanced play, come with both the half spec and C bearing, and look cool to you.</li>
                    <li>Look on yoyo forums to see what people are recommending currently, or ask. The tricky part is that not everything is always available, so you can get help choosing from your <em>current</em> options too. People's favorite recommendations aren't always in stock.</li>
                  </ol>
                </div>
                <div className="box">
                  <p>The one thing you should definitely buy with your first yoyo is extra string (if you're not getting a package deal that comes with it already). They don't need to be fancy or expensive, and a 100-pack might be overkill, but you do need some.</p>
                  <p className="point">Many people find dark string too hard to see. Bright yellow, green, orange, or pink are recommended instead. If you really want to get something like blue or purple, just buy a bright color too so that you have an alternative.</p>
                </div>
              </div>
            <h3>Resources</h3>
              <h4>Videos</h4>
                <p>There are lots and lots of sources of tutorial videos now. Check out several&mdash;some teaching styles will probably work better for you than others. Similarly, if you're having trouble understanding a trick, go find an alternate explanation of it. (This may seem obvious, but it's actually pretty easy to get so absorbed in a frustrating problem that you forget.)</p>
              <h4>Online communities</h4>
              <p>Two big ones are <a href="https://www.reddit.com/r/Throwers/">Reddit/r/Throwers</a> (along with the Throwers Discord linked from there) and the Facebook Group <a href="https://www.facebook.com/groups/yoyoBST">YoYo BST & Talk</a>. There are many more, mostly run by store or manufacturer brands. They can be fun places and good resources as well, but favor their own products (obviously).</p>
        </section>
        <section>
          <h2>FAQs with somewhat controversial answers</h2>
            <div>
              <h3>Unresponsive lube</h3>
              <p><b>Should I use thin lube on my unresponsive bearings?</b></p>
              <p>Arguments in favor: Reduced bearing noise, rust protection, theoretical increase in longevity.</p>
              <p className="point">People living in some very humid and/or salty climates report that bearing lube isn't really optional for them.</p>
              <p>Arguments against: Makes bearing slower or responsive, attracts crud, does not actually improve longevity, is a waste of time and money.</p>
              <p>My opinion: Feel free to use thin lube for obnoxiously noisy bearings. Use a pin or similar to apply a very small amount, ideally less than a drop. I've seen some instructions telling people to put in way too much. Too much does make the bearing semi-responsive, and then you'd need to clean it and start over.</p>
            </div>
            <div>
              <h3>Jumping into unresponsive play</h3>
              <div className="content">
                <div className="primary">
                  <p><b>Do I really need to do anything with a responsive yoyo, or can I just learn to bind and go straight to unresponsive?</b></p>
                  <p>Argument in favor of skipping responsive play: It's your yoyo and your time and you can do whatever you want.</p>
                  <p>Argument against: Spending some time with a responsive yoyo first makes it easier to learn the basics and makes your technique cleaner. And, it can help keep you from getting into bad habits that are hard to break later.</p>
                  <p>My opinion: You should play with a responsive yoyo at least until you can throw straight, and then a few basic tricks until you get a feel for how you have to play to keep the yoyo from snapping back prematurely. And, from a purely practical standpoint, learning the very basic basics on a unresponsive yoyo would be pretty tedious&mdash;lots of winding the yoyo back up by hand, not so much practicing tricks.</p>
                </div>
                <div className="box">
                  <p>A lot of people seem to overthink this "when can I graduate to unresponsive" question. Most players I know of continue to enjoy responsive yoyos forever&mdash;It's not really an either/or thing. That's one of the reasons it's good to have one of each available even when you're ready to start messing around with unresponsive play.</p>
                </div>
              </div>

            </div>
            <div>
              <h3>Plastic</h3>
              <p><b>Is plastic as good as aluminum? Why bother with plastic when some aluminum yoyos are so cheap?</b></p>
              <p>No, plastic is not as good as aluminum, performance-wise. (Yes, you can find excellent plastic yoyos that are better than mediocre aluminum yoyos. That's not the point.) Plastic can work very well, though. Its main advantages over a decent budget/b-grade/pre-owned aluminum yoyo are situational:</p>
              <ul>
                <li>You're a beginner, or, are otherwise learning something that might cause you to hit yourself or other things a lot (ex: horizontal tricks, 5A tricks).</li>
                <li>You're playing over pavement/bricks etc. You might have an aluminum yoyo that you don't mind beating up, but a) pavement is particularly brutal and b) if you're somewhere quiet, the noise it makes when it hits makes everyone nearby cringe. Everyone has their own relationship with this, though.</li>
                <li>You're playing somewhere cold. Plastic is much more forgiving on cold hands. </li>
                <li>You want a cheap, easily-replaceable yoyo due to the chance of it getting lost or stolen where you're going (school or summer camp being prime examples).</li>
                <li>You feel like playing with a plastic yoyo.</li>
              </ul>
            </div>
            <div>
              <h3>Shapes</h3>
              <p><b>Wow, these come in a lot of shapes. Which one is best?</b></p>
              <p>Yeah, they come in a lot of shapes.</p>
              <ul>
                <li>You'll often see shapes broadly categorized as "V," "W," "H," or "O," which is just a shorthand since many designs don't fit neatly into one of these, and, it doesn't always tell you much. (The shape-naming convention is explained in detail elsewhere online, with diagrams, by people more knowledgeable than me, so I'm not repeating it here.)</li>
                <li>A typical contemporary performance- or competition-oriented ("comp") yoyo has one of the more angular profiles (as opposed to fully rounded), has a lot of rim weight, and is often fairly wide. Beyond those, there's an enormous variety of yoyos that are popular for their fun factor, feel in the hand, and suitability for more casual playstyles, instead of pure performance.</li>
                <li>When you're new, it's easy to get the idea that you'll always want to play with performance-oriented yoyos. That's true to an extent when you're starting out or working on something new&mdash;it's easier to land and figure out the tricks you're learning. Just don't be surprised if your taste in yoyos evolves over time, or even day to day, after you've been playing for a while.</li>
                <li>The specific shape you get for your first yoyo doesn't matter much. If you get into it, you'll end up trying a lot of them to see which you like best.</li>
              </ul>
            </div>
        </section>
      </main>
    {/* footer */}
    {/* need to style footer & think about what else it needs */}
    <footer>
      <p>&copy;2021 Sarah Wilkes</p>
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
