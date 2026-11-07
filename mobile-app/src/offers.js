export const offers=[
{id:'ultimate-gamer-pass',name:'Ultimate Gamer Pass',fee:1500,type:'Package',description:'Unlimited gaming access for a full day.',includes:['PC gaming','Console gaming','High-speed internet','Snack voucher','Tournament entry']},
{id:'vip-gaming-experience',name:'VIP Gaming Experience',fee:1500,type:'Package',description:'Premium gaming experience with exclusive facilities.',includes:['Private gaming booth','Premium gaming equipment','Food and drinks','Priority booking','Personal gaming assistant']},
{id:'esports-training-package',name:'Esports Training Package',fee:1500,type:'Package',description:'Improve competitive gaming skills with professional coaching.',includes:['Strategy coaching','Team communication','Match analysis','Practice sessions','Performance feedback']},
{id:'birthday-party-package',name:'Birthday Party Package',fee:1500,type:'Package',description:'Host a gaming-themed birthday celebration.',includes:['Reserved gaming area','Multiplayer competitions','Party decorations','Catering','Tournament prizes']},
{id:'virtual-reality-experience',name:'Virtual Reality Experience',fee:750,type:'Experience',description:'Explore immersive virtual reality games.',includes:['VR headset','Choice of games','Staff assistance']},
{id:'racing-simulator-challenge',name:'Racing Simulator Challenge',fee:750,type:'Experience',description:'Race on professional driving simulators.',includes:['Racing simulator','Choice of tracks','Leaderboard competition']},
{id:'escape-room-challenge',name:'Escape Room Challenge',fee:750,type:'Experience',description:'Solve puzzles and escape before time runs out.',includes:['Team challenge','Themed escape room','Digital scorecard']}
];
export const money=n=>'R'+Number(n).toLocaleString('en-ZA',{minimumFractionDigits:2,maximumFractionDigits:2});
export function quote(selected){const subtotal=selected.reduce((sum,o)=>sum+o.fee,0),n=selected.length,rate=n>=4?.15:n===3?.10:n===2?.05:0,discount=subtotal*rate,vat=(subtotal-discount)*.15;return {subtotal,rate,discount,vat,total:subtotal-discount+vat};}
