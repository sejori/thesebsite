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

In the beginning there was electricty, then came the transistors, next logic gates and finally, let there be light...

Often overlooked by those that love to code but our code needs somewhere to run wild and free. Operating systems expose electrical hardware to programmable software via... <i>firm</i>ware. This means developers don't need to write yucky <a target="_blank" href="https://en.wikipedia.org/wiki/Binary_code">binary</a> machine code and can instead build applications with more readable programming languages such as <a target="_blank" href="https://en.wikipedia.org/wiki/C_(programming_language)">C</a> that interface with hardware via the operating system's firmware API.

Operating systems started out as digital text editors with basic memory and evolved into the full-spec interactive portals we know and love today. With new frontiers like VR and AI we're pushing the boundaries of how we interact with computers even further but whether it's a screen or a hologram, we'll always need operating systems.

If you've used <a href="https://www.docker.com/">Docker</a> before you will know that its possible to define an entire OS in just one file and run many of them virtually within a host system, these are called containers and have become hugely popular for cloud computing. Nowadays, we also have isolates in which we can run code in the cloud. These are like containers but preconfigured to run a specific language with certain memory allowances. Check out <a href="https://workers.cloudflare.com/">Cloudflare Workers</a> or <a href="https://deno.com/deploy">Deno Deploy</a> for examples of JavaScript isolates.

## Web Browsers

<div class="row justify-center">
  <a target="_blank" href="https://www.chromium.org"><img class="icon" src="/icons/chromium.svg" alt="chromium"></a>
  <a target="_blank" href="https://www.mozilla.org/firefox/"><img class="icon" src="/icons/firefox.svg" alt="firefox"></a>
</div>

Web browsers are the sickest piece of software installed on any computer. They turn your lonely little machine into a social butterfly by allowing it to interact with <strong><i>"The Internet"</i></strong>. Putting the collective knowledge and tools of humanity at your fingertips.

Personally, I think that the internet is the single most important wonder of human engineering that has ever existed. It is also openly shared across national borders (mostly). Proving that access to information and collaboration is truly more important than sabotage to most humans. Isn't that lovely?

But what is <strong><i>"The Internet"</i></strong> really though? Well, just a standardised set of binary-serial data transfer protocols to send data between computers via a sh\*t-load of undersea cables and a few satellites really. So computer hardware can receive/send electrical signals through this <strong><i>"The Internet"</i></strong> and encode/decode them into serial data to then pass into firmware and software via bus circuits in the cpu and motherboard.

In software we can do all sorts of wizardry. Design and build user experiences that record, share, deceive, entertain, teach and even support you. Web browsers do all of these things but inside <strong><i>"The Internet"</i></strong>. Like operating systems, they provide developers with <a href="https://developer.mozilla.org/en-US/docs/Web/API">APIs</a> to access these features and build stuff.

Stuff what browsers do be havin' is: graphical rendering, code interpretation, memory management, low and high level serial APIs, other hardware APIs and network and encryption tools. All for smooth interaction and secure communication with your website, your friend's website and all the websites of the land and beyond (some are in space)!

## HTML, CSS & JavaScript

<div class="row justify-center">
  <a target="_blank" href="https://developer.mozilla.org/docs/Web/HTML5"><img class="icon" src="/icons/html5.svg" alt="html5"></a>
  <a target="_blank" href="https://developer.mozilla.org/docs/Web/CSS"><img class="icon" src="/icons/css.svg" alt="css"></a>
  <a target="_blank" href="https://developer.mozilla.org/docs/Web/JavaScript"><img class="icon" src="/icons/javascript.svg" alt="javascript"></a>
</div>

The dream team. These 3 technologies are the bones, skin and muscle of every website.

HTML, the bones, lays out the structure of a document, i.e. a web page. A virtual document object model (or **DOM** for short) is created by the browser and used the manage the virtualised page.

JavaScript, the muscle, gets to directly manipulate this **DOM** and therefore therefore what exists in the page. Moreover, JavaScript can manipulate practically anything that a web browser can so it is a powerful and deep scripting language to say the least!

CSS, the skin, defines rendering intructions that the browser uses once it has made the **DOM** to correctly display the content on the page.

For examples of my work HTML, CSS & JavaScript you need look no further than this website, or check out my projects on <a target="_blank" href="https://github.com/sebringrose">GitHub</a>.

## The Interpretted Universe: Python & Java(Type)Script

<div class="row justify-center">
  <a target="_blank" href="https://nodejs.org"><img class="icon" src="/icons/nodejs.svg" alt="nodejs"></a>
  <a target="_blank" href="https://www.python.org"><img class="icon" src="/icons/python.svg" alt="python"></a>
</div>

### Frameworks

Facebook's <a target="_blank" href="https://reactjs.org/">React library</a>, link variables to the **DOM** via it's concept of in-memory "state". Changes in state are first calculated in a Virtual DOM (VDOM) then efficiently mapped to the DOM using some smart algorithms in a process called object-diffing.

The React library resulted in a huge productivity boost for frontend web developers and has therefore exploded in popularity. It's spinoff cousin <a target="_blank" href="https://reactnative.dev/">React Native</a> brings the same JavaScript/TypeScript app magic to mobile development and <a target="_blank" href="https://www.electronjs.org/">Electron</a> brings web applications to desktop by utlising Google's open-source Chromium browser engine - awesome!

<a target="_blank" href="https://www.djangoproject.com/">Django</a> was created in the early days of the internet and has evolved with the times magnificently! It is a trusted companion to engineers looking to serve data across the planet. The framework exposes a number of classes, such as: Views, Forms and Middleware. These building blocks of HTTP applications are then glued together in configuration files. Django is an excellent example of an object-oriented program exposing a simple system for developers to rapidly build upon and expand.

### Beyond the page

From humble beginnings, toggling colours and managing files, to complex data pipelines and artical intelligence on machines, microcontrollers and the cloud. JavaScript and Python have worked their way into all areas of technology.

So how have these "interpretted" languages become so powerful? Low-level engines such as Node.js or The Python Interpretter have the power to access machine hardware directly, execute UNIX commands and work with local file systems. These "engines" then provide this functionality to users via a high-level programming language, such as TypeScript or Python. They are wildly popular and drive the vast majority of open-source code today!

## The Low-Level Powerhouses: C++ & Rust

<div class="row justify-center">
  <a target="_blank" href="https://isocpp.org"><img class="icon" src="/icons/c++.svg" alt="c++"></a>
  <a target="_blank" href="https://www.rust-lang.org/"><img class="icon" src="/icons/rust.svg" alt="rust"></a>
</div>

Kickstarter of the age of information. C++ is everywhere. Your operating system? C++. Your plane's operating system? C++. The browser in which you are currently viewing this website? C++ (propbably to at least some degree). Created for ultimate flexibility by quintessentially-nerdy, Bjarne Stroustrup. There's nothing this language can't do but you might have to right a couple thousand lines of its tricky code to get you there.

Rust, developed by the philanthropic power-nerds at the Mozilla Foundation, is a lovely language much like C++. It can directly access a machines memory and is compiled into binary files before execution (unlike JavaScript which is interpretted at runtime). What makes Rust special is its modernized syntax and concept of memory ownership. The compiler is incredibly helpful and will tell you where your variables are not being managed properly before allowing you to compile and run. This makes your software inherently secure and memory-safe, unlike other low-level languages.

Writing numerical methods in C++ for aircraft simulations at university is what inspired me to take up a career in programming!

**Hint:** a good exercise when learning about programming numerical methods is to write a Rubik's Cube solver. Annoyingly, mine kept getting stuck on the <i>The White Cross</i>...
