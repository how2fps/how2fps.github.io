const fs=require('fs');
const {execFileSync}=require('child_process');
const sharp=require('C:/Users/heart/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
global.window={};require('../portfolio-data.js');
const group=(title,description,technologies=[])=>({title,description,technologies});
const source=(label,repo)=>({label,href:`https://github.com/how2fps/${repo}`});
async function shot(dir,name,title,caption){
 const src=`./pictures/${dir}/${name}.webp`;
 const {width,height}=await sharp(src).metadata();
 return {src,thumbnail:`./pictures/${dir}/${name}-480.webp`,width,height,title,caption,alt:`${title}: ${caption}`};
}
(async()=>{
const additions=[
 {
  id:'bunnycov',title:'BunnyCov',category:'Coverage-guided fuzzing · Python experimentation framework',
  description:'An AFL-style fuzzing harness for exploring how parsers behave under unexpected input. BunnyCov connects a seed corpus, pluggable schedulers, grammar-aware and byte-level mutations, target execution and feedback scoring. A live terminal dashboard makes each experiment visible, while SQLite records the inputs and outcomes for later analysis.',
  technologies:['Python','Rich','SQLite','coverage.py','QEMU','Grammar-based fuzzing','UCB1','Thompson sampling','Pandas','Matplotlib'],
  galleryTitle:'Inside the terminal',
  previewNote:'Rendered with the repository’s original Rich UI code. Settings and counters are illustrative preview data, not measured performance or verified bug findings. No target fuzzing or external model calls were performed for these previews.',
  screenshots:await Promise.all([
   shot('fuzzer','fuzzer-dashboard','Live fuzzing dashboard','The original terminal renderer shows execution rate, coverage, workers, pending jobs and the latest mutated input. All counters here are sample values.'),
   shot('fuzzer','fuzzer-config','Experiment configuration','Target, seed scheduler, mutation mode, workers, timeout, iteration budget and module versions are visible before a run. These are illustrative settings.')]),
  links:[source('Source code','fuzzer')],
  brief:{features:['Coverage and differential feedback','Pluggable seed and power schedulers','SQLite results and batch reports']},
  technologyGroups:[
   group('Start with a reproducible experiment','A run begins with a target and an initial seed corpus. Command-line options or JSON configurations select the scheduler, mutator and parser versions, execution budget, worker count, timeout and optional random seed. The harness supports JSON, IPv4, IPv6 and CIDR-related targets. Saving the resolved configuration alongside the output makes runs easier to repeat and compare.',['Python','JSON configuration']),
   group('Choose a seed, then mutate it','The seed scheduler chooses which existing input to explore next. Implementations include queue and heap schedulers, Thompson sampling and a UCB tree that groups seeds by coverage and bug/output signals. A separate power scheduler controls mutation energy. Mutation implementations range from byte havoc to grammar/AST-aware changes and adaptive operator selection, balancing malformed input with inputs that can reach deeper parser logic.',['UCB1','Thompson sampling','Grammar-based fuzzing']),
   group('Execute, observe and feed back','Workers run mutated inputs through target adapters and collect status, exceptions, output and coverage. The project supports coverage.py-based tracking and a QEMU showmap adapter for binary targets. Interestingness combines signals such as new covered arcs, crashes, timeouts, rare bugs and disagreement with an open/reference implementation. Retaining useful inputs lets later iterations build on earlier discoveries; a differing result is a signal to investigate, rather than proof of a vulnerability.',['coverage.py','QEMU','Multiprocessing']),
   group('Keep the experiment inspectable','Rich panels show execution progress, worker activity, coverage and the latest mutation. SQLite retains per-iteration inputs, results and scores; exports include CSV results and representative exception/line pairs. Batch runs repeat configurations and generate an HTML report with aggregated charts and tables, so scheduler or mutator variants can be examined across runs instead of relying on a single terminal snapshot.',['Rich','SQLite','Pandas','Matplotlib']),
   group('Explore alternative strategies','Versioned modules provide a way to swap one part of the pipeline for controlled comparisons. The repository also includes grammar-based corpus refill, optional LLM seed fallback, run-validity analysis scripts and tests for the Thompson and UCB tree schedulers. These support experimentation; the portfolio previews do not claim a benchmark win or a particular number of real bugs found.',['Ablation studies','Seed generation'])
  ]
 },
 {
  id:'spacefartz',title:'SpaceFartz',category:'Game jam · 2nd place · Godot arcade shooter',
  description:'A vertical arcade space shooter made with my group for a game jam, where we won second place. Dodge incoming fire, shoot through waves of enemies and collect upgrades before facing a boss. Built in Godot with GDScript, the project combines a deliberately playful identity with a short, escalating survival loop.',
  technologies:['Godot 4','GDScript','2D physics','Scene composition'],
  galleryTitle:'A look at the game',previewNote:'Curated scene reconstructions using the repository’s original sprites and background. Positions and scores are illustrative; these are not captured gameplay frames. Second-place game-jam result supplied by Finn.',
  screenshots:await Promise.all([
   shot('spacefartz','01-waves','Enemy waves','Original player, enemy, projectile and upgrade artwork arranged to illustrate the vertical shooter loop.'),
   shot('spacefartz','02-boss','Boss encounter','The original purple boss sprite in a curated encounter preview; score and projectile positions are sample content.')]),
  links:[source('Source code','SpaceFartz')],brief:{features:['2nd place in a group game jam','Escalating waves and boss encounters','Collectible weapon and movement upgrades']},
  technologyGroups:[
   group('Build a compact arcade loop','The project starts from a menu and instantiates the player into a 540 × 960 playfield. Directional input controls movement and the accept action fires the weapon. CharacterBody2D movement, viewport clamping and collision groups connect the player, enemies and bullets. Score updates and a return to the menu close the loop when the player runs out of lives.',['Godot 4','GDScript','2D physics']),
   group('Escalate the encounter','The main scene spawns enemies on a one-second interval. A twenty-second timer raises enemy health and background scroll speed; a boss event is scheduled after forty-one seconds. Three enemy variants use different health, movement and firing parameters. On a boss event, regular enemies are cleared and spawning pauses, giving the encounter a different rhythm.',['Timers','Signals','PackedScene']),
   group('Reward survival with upgrades','Defeated enemies can drop fire-rate, movement-speed, health or bullet-count upgrades. Player property setters pass weapon changes into the weapon node. Damage triggers temporary invulnerability and flashing feedback; dedicated sounds accompany shots, explosions, upgrades and boss encounters. The global high score is retained between scenes during a session.',['GDScript','Audio','Scene composition']),
   group('Work within a game jam','This was a group jam entry, with the team earning second place. The code is organised into small reusable scenes for weapons, bullets, enemies, bosses and pickups, which makes it practical to assemble and tune the arcade loop. The gallery highlights that loop using the original artwork.',['Team project','Game jam'])
  ]
 },
 {
  id:'just-mbap',title:'Just',category:'Temasek Polytechnic · Mobile task and focus app',
  description:'A Polytechnic mobile-development project built with Ionic and Angular. Just combines a calendar-based task list with a focused countdown timer, completion streaks and friends. Tasks can be private or visible to friends, adding a social layer to a personal productivity workflow.',
  technologies:['Ionic 5','Angular 12','TypeScript','RxJS','Firebase Authentication','Cloud Firestore','Firebase Storage','Cordova'],
  previewNote:'Source-based reconstructions of the Ionic screen templates using fictional tasks, profile details and timer values. These are curated previews, not emulator captures; no Firebase accounts or live user data are accessed.',
  screenshots:await Promise.all([
   shot('just-mbap','tasks','Calendar and task list','The month view, task actions and selected-day list reconstructed from the All Tasks template with fictional tasks.'),
   shot('just-mbap','focus','Current task timer','A source-based preview of task details, visibility, remaining time and pause/complete controls.'),
   shot('just-mbap','profile','Profile and streaks','A fictional profile illustrating the original template’s status, current and highest streaks, friend ID and account actions.')]),
  links:[source('Source code','Just-mbap')],brief:{features:['Calendar tasks and focus countdown','Friends and task visibility','Completion streaks and profile editing']},
  technologyGroups:[
   group('Plan a task, then focus on it','The calendar selects a date and the task service queries the signed-in user’s Firestore tasks for that day, with an option to show all tasks. Forms support creating and editing tasks, allocating time and choosing whether friends can see them. Sliding list actions expose edit and delete, while selecting a task can make it the current focus.',['Ionic 5','Angular 12','Cloud Firestore']),
   group('Keep track of time across visits','The current-task page uses an RxJS timer with a stop signal to drive the countdown. Pausing writes the remaining time to Firestore. Before the page unloads, local storage records the task ID, remaining time, running state and departure timestamp; returning to the same task subtracts elapsed time when the timer had been running. A route guard also supports saving time when leaving the page.',['RxJS','Local storage','Angular routing']),
   group('Make progress social','Completing a task updates the current and highest streak using the task date, removes the task document and opens a completion view. Friend IDs support finding people, sending and accepting requests, and viewing a friend’s shared tasks. Profiles surface a status and streaks; profile editing and image upload connect identity with the task workflow.',['Cloud Firestore','Firebase Storage']),
   group('Connect the mobile interface to services','AngularFire connects authentication and Firestore data to Angular services. RxJS operators compose user-dependent queries and live document updates. Ionic supplies mobile navigation and form components, while Cordova configuration targets native packaging and includes camera integration. This was built during my time at Temasek Polytechnic.',['TypeScript','Firebase Authentication','Cordova'])
  ]
 },
 {
  id:'food-times',title:'Food Times',category:'My first development project · Restaurant discovery and reviews',
  description:'My first development project: a restaurant discovery and review website. Food Times lets visitors browse restaurants, search by name and filter by cuisine, then open restaurant details and read reviews. Account features connect the browsing experience to writing reviews and managing a profile. It marks the beginning of my journey from learning web development to building a full application.',
  technologies:['JavaScript','Node.js','Express','EJS','MySQL','SCSS','Express sessions','Multer'],
  previewNote:'Offline screenshots of the original EJS templates, CSS hover effects and login/sign-up interactions, using fictional data. Bundled imagery stands in for restaurant photos; the remote logo and icons use text equivalents and external fonts are unavailable. Account forms are shown without submitting them or connecting to a database or email service.',
  screenshots:await Promise.all([
   shot('food-times','01-home','Food Times homepage','The original orange-and-dark homepage, cuisine selector and restaurant cards, rendered with fictional sample listings.'),
   shot('food-times','04-card-hover','Restaurant card hover','The original CSS lifts the card front and expands the dark panel behind it, revealing the rating and review action.'),
   shot('food-times','05-login','Login','The original login modal opened through the navigation button, with username/password fields and a forgot-password action.'),
   shot('food-times','06-signup','Sign up','The original sliding overlay switches to registration, showing name, email, username, password and contact fields. Names are fictional.'),
   shot('food-times','07-password-reset','Forgot password','The original login modal switches to a username-based reset-link request. No request is submitted.'),
   shot('food-times','03-details','Restaurant details','The original detail template shows location, contact information and review actions. Sample restaurant data and an empty review state are used.'),
   shot('food-times','08-write-review','Write a review','The original review form includes a rating selector, title and review text. The example review is fictional and is not submitted.'),
   shot('food-times','09-account','Account settings','The original account-editing page with profile-picture upload and editable personal details, populated with fictional information.')]),
  links:[source('Source code','restaurant-project')],brief:{features:['My first development project','Restaurant and cuisine search','Accounts, profiles and restaurant reviews']},
  technologyGroups:[
   group('Turn browsing into a complete flow','The homepage introduces restaurants through a cuisine picker and cards. On desktop, hovering lifts and scales the card front while expanding a dark panel behind it to reveal the rating and review action. A separate listing view supports restaurant-name and cuisine filtering. Opening a restaurant brings together its location, contact details, website, average rating and reviews. EJS templates generate the pages on the server; SCSS and compiled CSS provide the responsive orange-and-dark visual design.',['EJS','SCSS','JavaScript']),
   group('Connect pages, controllers and a database','Express routes separate restaurants, cuisines, users and reviews. Controllers request data from model classes, then render templates or return responses. MySQL queries join restaurants with cuisine relationships and reviews, calculate average ratings and bind query parameters for lookups. This structure connected the interface work to persistent application data.',['Node.js','Express','MySQL']),
   group('Add accounts and user contributions','The project includes registration, login, account editing, profile pictures and review creation, editing and deletion. Session middleware stores sessions in MySQL, authentication middleware protects contribution routes and the server includes CSRF middleware. Multer handles profile-picture uploads.',['Express sessions','Multer','EJS']),
   group('Where my development journey started','Food Times was my first development project. Building a connected browsing, account and review flow meant working across HTML templates, responsive styling, browser JavaScript, server routes and SQL models. Keeping it in this portfolio shows the starting point alongside my later mobile, game and full-stack projects. The previews preserve the original templates rather than redesigning this early work.',['First project','Full-stack fundamentals'])
  ]
 }
];
// Keep the existing project order, then extend it with the newly documented work.
const ids=new Set(additions.map(p=>p.id));
window.portfolioData.projects=window.portfolioData.projects.filter(p=>!ids.has(p.id)).concat(additions);
fs.writeFileSync('portfolio-data.js','window.portfolioData = '+JSON.stringify(window.portfolioData,null,2)+';\n');
for(const [dir,checkout,note] of [
 ['fuzzer','fuzzer','Original Rich renderer with illustrative counters; not a fuzzing benchmark.'],
 ['spacefartz','spacefartz','Original artwork, manually arranged source-based scenes; not gameplay capture. Award supplied by Finn.'],
 ['just-mbap','just-mbap','Ionic template-based SVG reconstructions with fictional content; not native app captures.'],
 ['food-times','restaurant-project','Original EJS/CSS and browser JavaScript in a headless browser: homepage, real hover state, login, sign-up, reset-link form, restaurant details, review form and account editing. Fictional data, repeated placeholder imagery, text logo and offline icon equivalents; external requests blocked. No forms submitted.']
]) {
 const commit=execFileSync('git',['-C',`tmp/${checkout}`,'rev-parse','HEAD'],{encoding:'utf8'}).trim();
 fs.writeFileSync(`pictures/${dir}/provenance.json`,JSON.stringify({repository:`https://github.com/how2fps/${checkout==='spacefartz'?'SpaceFartz':checkout==='just-mbap'?'Just-mbap':checkout}`,commit,note,generator:['tools/render-fuzzer-preview.py','tools/render-added-projects.cjs'],data:'Fictional preview data; no production services accessed.'},null,2)+'\n');
}
console.log(`Added ${additions.length} projects; ${window.portfolioData.projects.length} total.`);
})();
