# 🤖 Dear nerds of the web...
 

Here's my breakdown of the amazing technologies that we use everyday. I hope you find it interesting, fun and informative.

<strong>Warning: </strong>This goes deep into tech! If you're just following the NavCube hints, skip to the bottom.

## Operating Systems

<div class="row justify-center">
  <a target="_blank" href="https://windows.com"><img class="icon" src="/icons/windows.svg" alt="windows"></a>
  <a target="_blank" href="https://www.apple.com/macos/"><img class="icon" src="/icons/macos.svg" alt="macos"></a>
  <a target="_blank" href="https://android.com"><img class="icon" src="/icons/android.svg" alt="android"></a>
  <a target="_blank" href="https://www.opengroup.org/membership/forums/platform/unix"><img class="icon" src="/icons/linux.svg" alt="linux"></a>
</div>

In the beginning the lord made electricty, then capicitors, logic gates and transistors then... let there be light!

Often overlooked by those that love to code but of course, our code needs somewhere to run free. Operating systems expose electrical <i>hard</i>ware to programmable <i>soft</i>ware via their amazing <i>firm</i>ware. This is so developers don't need to write yucky <a target="_blank" href="https://en.wikipedia.org/wiki/Binary_code">binary</a> machine code and can instead build applications with more readable programming languages such as <a target="_blank" href="https://en.wikipedia.org/wiki/C_(programming_language)">C</a>.

They started out as digital text editors with basic memory and evolved into the full-spec interactive portals we know and love today. New frontiers like VR push the boundaries of how we engage with computers even further but whether it's a screen or a hologram, we'll always need operating systems.

If you've used Docker before you will know that its possible to define an entire OS in just one file and run many of them virtually within a host system, these are called containers and have become hugely popular for cloud computing. Nowadays, we also have isolates in which we can run code in the cloud. These are like containers but preconfigured to run a specific language with certain memory allowances. Check out Cloudflare Workers or Deno Deploy for examples of JavaScript isolates.

## Web Browsers

<div class="row justify-center">
  <a target="_blank" href="https://www.chromium.org"><img class="icon" src="/icons/chromium.svg" alt="chromium"></a>
  <a target="_blank" href="https://www.mozilla.org/firefox/"><img class="icon" src="/icons/firefox.svg" alt="firefox"></a>
</div>

Web browsers are arguably the most important piece of software installed on any computer. They turn your lonely little machine into a social butterfly by allowing it to interact with <i>"The Internet"</i>. Putting the collective knowledge and tools of humanity at your fingertips. Personally, I think that the internet is the single most important wonder of human engineering that has ever existed. It is also openly shared across national borders (mostly), proving that access to information and collaboration is truly important to most humans. Isn't that lovely? But what is the internet really though? Well, just a standardised set of data transfer protocols and a shed-load of undersea cables along with a few satellites really.

As you can imagine, web browsers are very complex pieces of software. They're packed full of <a href="https://developer.mozilla.org/en-US/docs/Web/API">great features</a> for web developers to play with and provide all the amazing gizmos needed to run websites and communicate to the outside world, such as: Graphical rendering engines, code interpretation and runtime environments as well as network and encryption tools. All for smooth interaction and secure communication with your website, your friend's website and all the websites of the land and beyond (some are in space)!

## HTML, CSS & JavaScript

<div class="row justify-center">
  <a target="_blank" href="https://developer.mozilla.org/docs/Web/HTML5"><img class="icon" src="/icons/html5.svg" alt="html5"></a>
  <a target="_blank" href="https://developer.mozilla.org/docs/Web/CSS"><img class="icon" src="/icons/css.svg" alt="css"></a>
  <a target="_blank" href="https://developer.mozilla.org/docs/Web/JavaScript"><img class="icon" src="/icons/javascript.svg" alt="javascript"></a>
</div>

The dream team. These 3 technologies are the bones, skin and muscle of every website. They blew my mind when I first discovered them as a child.

HTML, the bones, lays out the structure of the content for the browser to read. A Document Object Model (or DOM) is then created by the browser and used the manage the UI of the web page.

CSS, the skin, defines rendering intructions that the browser uses once it has made the DOM to correctly display the content on the page.

JavaScript, the muscle, gets to do all sorts of wizardry. This is where the real magic happens. Data can be loaded into the page via network requests and displayed by directly manipulating the DOM. Moreover, JS has the power to do practically anything that the web browser itself can do and is therefore a rich and deep scripting language. Plenty to learn!

For example, Facebook's <a target="_blank" href="https://reactjs.org/">React library</a> links JavaScript variables to the DOM via it's concept of in-memory "state". Changes in state are first calculated in a Virtual DOM (VDOM) then efficiently mapped to the DOM using some smart algorithms in a process called object-diffing.

The React library resulted in a huge productivity boost for frontend web developers and has therefore exploded in popularity. It's spinoff cousin <a target="_blank" href="https://reactnative.dev/">React Native</a> brings the same JavaScript app magic to mobile development and <a target="_blank" href="https://www.electronjs.org/">Electron</a> brings web applications to desktop by utlising Google's open-source Chromium engine - awesome!

For examples of my work HTML, CSS & JavaScript you need look no further than this website, or check out my projects on <a target="_blank" href="https://github.com/sebringrose">GitHub</a>.

## The Extended Javascript Universe

<div class="row justify-center">
  <h2 class="royalblue"><a target="_blank" href="https://nodejs.org/en/">Node.js</a> & <a target="_blank" href="https://deno.land/">Deno</a></h2>
</div>

From humble beginnings as a DOM manipulator to managing files, complex data pipelines and artical intelligence on machines, microcontrollers and the cloud. JavaScript has worked it's way into all areas of technology.

So how does JavaScript move beyond web UIs and into the wider world of tech? Node.js (made with C++) or it's successor Deno (made with Rust), that's how. Both powerful engines for running Javascript outside of web browsers, with additional functionality for executing UNIX commands and working with files. Node.js is wildly popular and drives the vast majority of open-source code today!

Deno is pioneering modern JS outside of the browser, on machines and cloud isolates. It uses Rust under-the-hood to create a feature-rich environment for your code.

## The Low-Level Powerhouses: C++ & Rust

<div class="row justify-center">
  <a target="_blank" href="https://isocpp.org"><img class="icon" src="/icons/c++.svg" alt="c++"></a>
  <a target="_blank" href="https://www.rust-lang.org/"><img class="icon" src="/icons/rust.svg" alt="rust"></a>
</div>

Kickstarter of the age of information. C++ is everywhere. Your operating system? C++. Your plane's operating system? C++. The browser in which you are currently viewing this website? C++. Created for ultimate flexibility by quintessential-nerd and Swedish genius Bjarne Stroustrup. There's nothing this language can't do but you might have to right a couple thousand lines of it to get you there. Writing numerical methods in C++ for aircraft simulations at university is what inspired me to take up a career in programming!

Rust, developed the philanthropic power-nerds at the Mozilla Foundation, is a lovely language much like C++. It can directly access a machines memory and is compiled into binary files before execution (unlike JavaScript which is interpretted at runtime). What makes Rust special is its modernized syntax and concept of memory ownership. The compiler is incredibly helpful and will tell you where your variables are not being managed properly before allowing you to compile and run. This makes your software inherently secure and memory-safe, unlike other low-level languages.

**Hint:** a good exercise when learning about programming numerical methods is to write a Rubik's Cube solver. Annoyingly, mine kept getting stuck on the <i>The White Cross</i>...