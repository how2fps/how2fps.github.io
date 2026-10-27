// Offline previews: original Rich output, original EJS templates, curated source-based scenes.
const fs = require('fs');
const path = require('path');
const http = require('http');
const runtime = 'C:/Users/heart/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/';
const sharp = require(runtime + 'sharp');
const {chromium} = require(runtime + 'playwright');
const ejs = require('../tmp/preview-node/node_modules/ejs');
const root = path.resolve(__dirname, '..');
process.chdir(root);
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const text = (x,y,s,size=22,color='#fff') => `<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" fill="${color}">${esc(s)}</text>`;
const rect = (x,y,w,h,color,r=0) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${color}"/>`;
async function image(file,x,y,w,h) {
 const bytes=await sharp(file).resize({width:w,height:h,fit:'contain',background:'#00000000'}).png().toBuffer();
 return `<image x="${x}" y="${y}" width="${w}" height="${h}" href="data:image/png;base64,${bytes.toString('base64')}"/>`;
}
async function save(dir,name,input) {
 fs.mkdirSync(`pictures/${dir}`,{recursive:true});
 await sharp(input).webp({quality:91}).toFile(`pictures/${dir}/${name}.webp`);
 await sharp(input).resize({width:480}).webp({quality:83}).toFile(`pictures/${dir}/${name}-480.webp`);
}
const svg = (w,h,body) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">${body}</svg>`);
async function gamePreview(boss=false) {
 let b = rect(0,0,1100,1000,'#101324');
 b += await image('tmp/spacefartz/Images/SPACEFARTZ bg.jpg',280,0,540,960);
 b += text(36,80,'SPACEFARTZ',30) + text(36,120,boss?'Boss encounter':'Enemy waves',19,'#c7b6ec');
 b += text(36,870,'CURATED PREVIEW',15,'#c7b6ec')+text(36,900,'Original game assets',17)+text(36,928,'Sample scene arrangement',16,'#b8baca');
 b += text(305,45,'Score: '+(boss?'32':'12'),22);
 b += await image('tmp/spacefartz/Images/main char.png',495,770,110,125);
 if(boss) b += await image('tmp/spacefartz/Images/purple boss.png',420,130,270,250);
 else {
  for(const [name,x,y] of [['green',350,180],['orange',600,280],['purple',470,100]]) b += await image(`tmp/spacefartz/Images/${name} enemy.png`,x,y,95,110);
 }
 for(const [x,y] of [[535,650],[535,510],[560,400]]) b += await image('tmp/spacefartz/Images/main char laser.png',x,y,22,55);
 for(const [x,y] of [[470,440],[640,520],[370,590]]) b += await image('tmp/spacefartz/Images/enemy laser.png',x,y,22,45);
 b += await image('tmp/spacefartz/Images/upgrade icons/bullet count.png',660,660,58,58);
 b += text(850,240,'Collect upgrades',19)+text(850,280,'Fire rate',17,'#ccc')+text(850,315,'Movement speed',17,'#ccc')+text(850,350,'Extra lives',17,'#ccc')+text(850,385,'Bullet count',17,'#ccc');
 await save('spacefartz',boss?'02-boss':'01-waves',svg(1100,1000,b));
}
async function mobilePreview(mode) {
 let b=rect(0,0,1000,1000,'#e9edf3')+rect(280,30,440,940,'#121212',20);
 b+=text(305,65,'9:41',15)+text(635,65,'100%',14)+rect(280,82,440,64,'#1f1f1f')+text(300,123,mode==='focus'?'Current Task':mode==='profile'?'Profile':'All Tasks',23);
 const button=(y,s,c='#428cff')=>rect(300,y,400,46,c,4)+text(320,y+30,s,17);
 if(mode==='focus') {
  b+=text(365,205,'Revise for exams',26)+rect(300,245,400,235,'#1e1e1e',5)+text(320,285,'Description:',16,'#aaa')+text(320,325,'Review this week’s lecture notes.',19)+text(320,405,'Visible to friends:',16,'#aaa')+text(320,444,'Yes',20);
  b+=rect(300,505,400,130,'#1e1e1e',5)+text(320,540,'Remaining time:',16,'#aaa')+text(430,598,'24:32',36)+button(670,'PAUSE TIMER','#eb445a')+button(735,'COMPLETE TASK');
 } else if(mode==='profile') {
  b+=rect(300,170,400,575,'#1e1e1e',5)+rect(360,195,280,230,'#282828',4)+text(386,312,'No profile picture set',18,'#bbb')+text(455,473,'Alex',28);
  ['Status: Studying','Highest Streak: 12','Current Streak: 4','Friend ID: DEMO42'].forEach((s,i)=>b+=text(325,525+i*48,s,19));
  b+=button(775,'EDIT DETAILS')+button(835,'LOGOUT','#eb445a');
 } else {
  b+=text(405,195,'October 2026',25);
  ['S','M','T','W','T','F','S'].forEach((s,i)=>b+=text(310+i*57,240,s,17,'#aaa'));
  for(let i=0;i<35;i++){const d=i-3;if(d>0&&d<=31)b+=text(310+(i%7)*57,280+Math.floor(i/7)*40,String(d),17);}
  b+=button(480,'NEW TASK')+button(537,'GET EVERY TASK')+button(594,'GET INSPIRED!','#2fdf75')+text(385,685,'Tasks for 27 October',21);
  b+=rect(280,710,440,85,'#428cff')+text(300,742,'Title: Revise for exams',20)+text(300,775,'Description: Review lecture notes',16);
  b+=text(300,835,'Title: Prepare presentation',20)+text(300,870,'Description: Draft the opening slides',16,'#aaa');
 }
 b+=rect(280,910,440,60,'#1f1f1f');['Tasks','Current Task','Friends','Profile'].forEach((s,i)=>b+=text(294+i*107,946,s,14,i===(mode==='focus'?1:mode==='profile'?3:0)?'#428cff':'#aaa'));
 await save('just-mbap',mode,svg(1000,1000,b));
}
async function restaurantPreviews() {
 const base=path.resolve('tmp/restaurant-project');
 const restaurants=['Sample Bistro','Garden Kitchen','Noodle Corner','The Lunch Table','Spice House','Evening Cafe'].map((name,i)=>({_id:i+1,name,cuisineName:['Western','Vegetarian','Chinese','Western','Indian','Western'][i],avgRating:4,pictureUrl:'/images/hero-mobile.jpg',location:'Sample address, Singapore',telephoneNo:'0000 0000',website:'example.com'}));
 const reviews=[
  {username:'Alex (demo)',rating:5,title:'A lovely lunch break',content:'A relaxed lunch spot with friendly service. The food arrived promptly and the atmosphere made it easy to catch up with friends.'},
  {username:'Jamie (demo)',rating:4,title:'Comfort food and a welcoming atmosphere',content:'A good choice for a casual meal. I enjoyed the generous portions and would come back to try something different.'},
  {username:'Sam (demo)',rating:4,title:'Worth another visit',content:'The staff were helpful and the seating was comfortable. A little busy at lunchtime, but a pleasant experience overall.'}
 ].map((r,i)=>({...r,_id:i+1,userId:i+1,userPicture:'/preview-avatar.svg',datePosted:'27 October 2026'+' '.repeat(35)}));
 const pages={};
 for(const [route,file] of [['/','index'],['/guest','index'],['/details','res-details'],['/review','add-review'],['/account','edit-account']]) {
  pages[route]=await ejs.renderFile(path.join(base,'views',file+'.ejs'),{restaurants,restaurant:restaurants[0],reviews,search:false,editing:false,message:'',validationErrors:[],user:route==='/guest'?null:{_id:1,username:'demo_user',firstName:'Alex',lastName:'Sample',email:'alex@example.com',gender:'Not specified',mobileNumber:'00000000',address:'Sample address, Singapore',profilePictureUrl:'/images/hero-mobile.jpg'},csrfToken:'preview-only'});
 }
 const server=http.createServer((req,res)=>{
  const route=new URL(req.url,'http://localhost').pathname;
  if(route==='/preview-avatar.svg'){res.setHeader('Content-Type','image/svg+xml');res.end('<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect width="120" height="120" fill="#ffde87"/><circle cx="60" cy="43" r="21" fill="#2c3038"/><path d="M18 120v-15a42 42 0 0 1 84 0v15" fill="#2c3038"/></svg>');return;}
  if(pages[route]){res.setHeader('Content-Type','text/html');res.end(pages[route]);return;}
  const file=path.resolve(base,'public','.'+route);
  if(!file.startsWith(path.join(base,'public')+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end();return;}
  res.setHeader('Content-Type',route.endsWith('.css')?'text/css':route.endsWith('.js')?'text/javascript':route.endsWith('.png')?'image/png':'image/jpeg');res.end(fs.readFileSync(file));
 });
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 let browser;
 try {
  browser=await chromium.launch({headless:true,executablePath:'C:/Users/heart/.cache/puppeteer/chrome/win64-119.0.6045.105/chrome-win64/chrome.exe'});
  const page=await browser.newPage({viewport:{width:1440,height:1050},deviceScaleFactor:1});
  await page.route('**/*',route=>route.request().url().startsWith('http://127.0.0.1:')?route.continue():route.abort());
  const visit=async route=>{
   await page.goto(`http://127.0.0.1:${server.address().port}${route}`,{waitUntil:'networkidle'});
   // External logo is unavailable offline. Use the template's own page title as text.
   await page.locator('.logo').evaluate(el=>{const label=document.createElement('span');label.textContent='FOOD TIMES';label.style.cssText='color:#ffde87;font-size:24px;font-weight:900;white-space:nowrap';el.replaceWith(label);});
   // Offline equivalents for the externally hosted icon font used by the templates.
   await page.addStyleTag({content:'.fa-star:before{content:"★"}.fa-search:before{content:"⌕"}.fa-times:before{content:"×"}.fa-eye:before{content:"◉"}.fa-eye-slash:before{content:"◉"}.fa-edit:before{content:"Edit"}.fa-trash-alt:before{content:"Delete"}'});
   // Preview-only repair: the old negative letter spacing collapses heading letters
   // when the original remote display font is unavailable. Keep the sliding panels,
   // but lay out each form vertically with readable horizontal headings.
   await page.addStyleTag({content:`
    .main-container-for-login-signup .form-container h1{writing-mode:horizontal-tb;text-orientation:mixed;letter-spacing:normal;transform:none;font-family:Arial,sans-serif;font-size:30px;line-height:1.2;margin:0 0 24px;text-align:center}
    .main-container-for-login-signup .non-reset{flex-direction:column;width:100%;padding:32px;justify-content:center}
    .main-container-for-login-signup .sign-up-container{flex-direction:column;padding:24px 36px;justify-content:center}
    .main-container-for-login-signup .sign-up-container h1{margin-bottom:18px}
    .main-container-for-login-signup .form-container form{width:100%;max-width:300px}
    .main-container-for-login-signup .login-container input{width:100%}
    .main-container-for-login-signup .login-container button,.main-container-for-login-signup .sign-up-container button{transform:none;margin-top:16px}
    .main-container-for-login-signup .reset h1{font-size:25px}
   `});
  };
  for(const [route,name] of [['/','01-home'],['/details','03-details']]) {
   await visit(route);
   await save('food-times',name,await page.screenshot());
  }
  await visit('/');
  await page.locator('.restaurant').nth(2).hover();
  await page.waitForTimeout(250);
  await save('food-times','04-card-hover',await page.screenshot());
  await visit('/guest');
  await page.locator('.login-signup-desktop-btn').click();
  await page.waitForTimeout(800);
  await page.locator('#login-form [name="username"]').fill('demo_user');
  await save('food-times','05-login',await page.screenshot());
  await page.locator('.overlay-right .overlay-btn').click();
  await page.waitForTimeout(800);
  await page.locator('#firstNameReg').fill('Alex');
  await page.locator('#lastNameReg').fill('Sample');
  await page.locator('#emailReg').fill('alex@example.com');
  await save('food-times','06-signup',await page.screenshot());
  await page.locator('.overlay-left .overlay-btn').click();
  await page.waitForTimeout(800);
  await page.locator('.reset-pass').click();
  await page.waitForTimeout(400);
  await save('food-times','07-password-reset',await page.screenshot());
  await visit('/review');
  await page.locator('#title').fill('A lovely lunch break');
  await page.locator('[name="content"]').fill('Sample review: a relaxed place to stop for lunch, with friendly service and a welcoming atmosphere.');
  await save('food-times','08-write-review',await page.screenshot());
  await visit('/account');
  await save('food-times','09-account',await page.screenshot());
 } finally {if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));}
}
(async()=>{
 if(process.argv.includes('--food-times-only')){await restaurantPreviews();console.log('Rendered eight Food Times views.');return;}
 for(const name of ['fuzzer-dashboard','fuzzer-config'])await save('fuzzer',name,fs.readFileSync(`tmp/project-previews/${name}.svg`));
 await gamePreview();await gamePreview(true);
 for(const mode of ['tasks','focus','profile'])await mobilePreview(mode);
 await restaurantPreviews();
 console.log('Rendered 15 project previews without desktop interaction.');
})().catch(error=>{console.error(error);process.exitCode=1;});
