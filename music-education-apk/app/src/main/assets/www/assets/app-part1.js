const exercises=[
 {id:'scale',icon:'♫',name:'音阶级数与旋律识别',desc:'识别不同调式中的音级与旋律片段。',q:'你听到的是哪个音级？',answers:['1级','2级','3级','4级','5级','6级','7级']},
 {id:'function',icon:'Ⅰ',name:'和弦功能识别',desc:'使用罗马数字识别不同和声功能。',q:'你听到的是哪种和弦功能？',answers:['I级','ii级','iii级','IV级','V级','vi级','vii°级']},
 {id:'progression',icon:'→',name:'常见和弦进行识别',desc:'识别音乐中经常使用的和弦进行。',q:'请选择你听到的和弦进行。',answers:['I–V–vi–IV','I–vi–IV–V','ii–V–I','I–IV–V–I']},
 {id:'songs',icon:'▶',name:'湖湘民歌旋律辨识',desc:'通过湖湘地区民歌风格练习旋律和调式判断。',q:'这段旋律更接近哪种湖湘音乐风格？',answers:['湖南花鼓戏','湘西民歌','常德丝弦','长沙弹词']},
 {id:'notes-chords',icon:'♬',name:'音符与和弦关系识别',desc:'在和弦背景中识别旋律音与和弦级数。',q:'请选择对应的音级和和弦级数。',answers:['1级 / I级','2级 / V级','3级 / vi级','4级 / IV级','5级 / I级','6级 / ii级']},
 {id:'chord-type',icon:'△',name:'和弦类型识别',desc:'识别大三和弦、小三和弦和减三和弦。',q:'你听到的是哪种和弦类型？',answers:['大三和弦','小三和弦','减三和弦']},
 {id:'interval',icon:'↕',name:'音程识别',desc:'识别上行、下行以及混合音程。',q:'你听到的是哪种音程？',answers:['小二度','大二度','小三度','大三度','纯四度','增四度','纯五度','小六度','大六度','小七度','大七度','纯八度']}
];

const cultureItems=[
 {
  title:'湖南花鼓戏',icon:'鼓',desc:'了解花鼓戏唱腔、锣鼓经与代表性曲目。',
  intro:'湖南花鼓戏是在民间歌舞、灯戏和地方语言基础上发展形成的地方戏曲音乐，唱腔活泼，节奏鲜明，生活气息浓厚。',
  points:['唱腔来源于民歌小调和劳动歌曲','常用锣、鼓、钹等打击乐烘托情绪','表演语言具有浓郁湖南方言特色','代表剧目注重普通人的生活和情感'],
  sections:[
   ['历史与地域','花鼓戏在湖南不同地区形成多个流派，长沙、岳阳、衡阳等地的唱腔和表演各具特色。'],
   ['音乐结构','音乐多采用曲牌和板式变化，旋律口语化，句式灵活，适合表现轻快、诙谐和抒情内容。'],
   ['审美价值','花鼓戏把地方语言、民间音乐和日常生活结合起来，是理解湖湘民众审美心理的重要音乐资源。']
  ],
  learned:3,total:5,minutes:46,score:88
 },
 {
  title:'湘西民歌',icon:'山',desc:'学习高腔、山歌和劳动号子等音乐形态。',
  intro:'湘西民歌产生于山地生活和多民族文化交流之中，旋律高亢自由，常通过远距离对唱表达劳动、爱情和生活情感。',
  points:['高腔常使用宽广音域和自由节奏','山歌重视即兴表达与对唱','劳动号子与劳动动作保持节奏一致','苗族、土家族音乐文化相互影响'],
  sections:[
   ['山地环境','山地空间影响了民歌的音域、力度和演唱方式，高亢的声音有利于远距离传递。'],
   ['节奏特点','许多山歌没有固定拍号，演唱者会根据歌词、呼吸和情绪自由延长音值。'],
   ['文化意义','湘西民歌记录民族交往、生产劳动和节庆生活，是地域文化记忆的重要载体。']
  ],
  learned:2,total:4,minutes:31,score:84
 },
 {
  title:'常德丝弦',icon:'弦',desc:'认识曲牌体结构与丝弦伴奏特点。',
  intro:'常德丝弦是一种具有说唱性质的地方曲艺音乐，以丝弦乐器伴奏、曲牌丰富和叙事细腻著称。',
  points:['唱词兼具叙事和抒情功能','常用扬琴、琵琶、二胡等乐器伴奏','曲牌连接形成完整唱段','语言节奏与常德方言密切相关'],
  sections:[
   ['表演形式','表演者通过说、唱结合推动故事，器乐伴奏负责衔接、烘托和补充情绪。'],
   ['曲牌结构','不同曲牌具有相对稳定的旋律框架，演唱者根据唱词内容进行变化。'],
   ['传承价值','常德丝弦体现地方语言、城市生活和民间叙事传统，适合用于音乐文化教育。']
  ],
  learned:1,total:4,minutes:18,score:76
 },
 {
  title:'长沙弹词',icon:'词',desc:'了解地方说唱音乐与叙事方式。',
  intro:'长沙弹词以长沙方言说唱故事，融合韵文、叙事和器乐伴奏，具有鲜明的城市民间文化特征。',
  points:['以地方方言进行说唱','叙事性强，人物形象鲜明','说白与唱腔交替推进内容','伴奏简洁，突出语言表达'],
  sections:[
   ['语言风格','长沙方言的声调和节奏直接影响旋律走向，使唱腔具有清晰的地域辨识度。'],
   ['叙事方法','通过角色转换、语气变化和节奏控制塑造人物，增强故事的现场感染力。'],
   ['文化场景','弹词曾广泛存在于茶馆和民间娱乐场所，反映城市大众文化生活。']
  ],
  learned:0,total:3,minutes:0,score:0
 },
 {
  title:'洞庭渔歌',icon:'水',desc:'感受水乡劳动音乐和生活节奏。',
  intro:'洞庭渔歌来源于湖区生产生活，常与划船、拉网、起锚等劳动动作结合，具有鲜明的水乡节奏。',
  points:['常见领唱与应和形式','节奏与劳动动作保持一致','歌词内容直接反映渔业生活','声音开阔，适合水面传播'],
  sections:[
   ['劳动功能','歌声可以统一劳动节奏、传递指令并缓解体力劳动的疲劳。'],
   ['音乐形态','旋律简洁有力，呼应段落重复性强，便于多人共同参与。'],
   ['生活记忆','渔歌保存了洞庭湖区生产方式、语言习惯和集体协作经验。']
  ],
  learned:1,total:3,minutes:15,score:80
 },
 {
  title:'湖湘红色音乐',icon:'★',desc:'学习湖湘革命历史中的代表性音乐作品。',
  intro:'湖湘红色音乐承载革命历史记忆、集体情感和价值追求，是学校音乐教育的重要文化资源。',
  points:['作品常与具体历史事件和人物相关','旋律具有鲜明的号召力和集体性','歌词强调理想信念和共同记忆','适合结合历史情境开展综合学习'],
  sections:[
   ['历史背景','理解作品产生的年代、社会环境和传播对象，有助于把握音乐表达。'],
   ['音乐表达','坚定节奏、上行旋律和齐唱形式常用于表现团结、行动和信念。'],
   ['教育意义','通过聆听、演唱和背景研究，可以建立音乐体验与历史认知之间的联系。']
  ],
  learned:2,total:4,minutes:38,score:90
 }
];

const courses=[
 {id:'c1',title:'湖湘音乐文化基础',desc:'系统认识花鼓戏、湘西民歌、常德丝弦等音乐形态。',lessons:['湖湘音乐文化概览','湖南花鼓戏','湘西民歌','常德丝弦','综合复习'],done:3,minutes:96,score:86},
 {id:'c2',title:'音乐感知能力训练',desc:'训练音高、节奏、音程、和弦与旋律感知。',lessons:['音高与音级','节奏型识别','音程听辨','和弦性质','旋律记忆'],done:2,minutes:72,score:78},
 {id:'c3',title:'音乐审美体验',desc:'通过比较聆听理解音乐情绪、风格和表现手法。',lessons:['音乐情绪感知','速度与力度','音色比较','风格辨识','作品赏析'],done:4,minutes:128,score:82},
 {id:'c4',title:'湖湘音乐教学实践',desc:'学习课堂活动设计、资源使用与学习评价。',lessons:['教学目标设计','听赏活动设计','文化情境导入','学习任务设计','评价与反思'],done:1,minutes:35,score:74}
];

const state={
 route:'home',previous:'home',selectedCulture:null,selectedCourse:null,exercise:null,
 total:0,correct:0,completed:false,right:null,chosen:null,
 scores:{文化认知:86,音乐感知:78,审美体验:82,文化认同:88,学习参与:74}
};

const loginView=document.getElementById('loginView');
const systemView=document.getElementById('systemView');
const mainView=document.getElementById('mainView');
const subtitle=document.getElementById('pageSubtitle');
const backBtn=document.getElementById('backBtn');
const bottomNav=document.getElementById('bottomNav');
const modalBackdrop=document.getElementById('modalBackdrop');
const modalCard=document.getElementById('modalCard');

document.getElementById('loginForm').addEventListener('submit',e=>{
 e.preventDefault();
 const u=document.getElementById('username').value.trim();
 const p=document.getElementById('password').value;
 const err=document.getElementById('loginError');
 if(u==='admin'&&p==='123456'){
  err.textContent='';
  localStorage.setItem('musicSystemLoggedIn','1');
  showSystem();
 }else{
  err.textContent='账号或密码错误';
 }
});

function showSystem(){
 loginView.classList.add('hidden');
 systemView.classList.remove('hidden');
 navigate('home',null,false);
}
function logout(){
 localStorage.removeItem('musicSystemLoggedIn');
 systemView.classList.add('hidden');
 loginView.classList.remove('hidden');
 document.getElementById('password').value='';
 showToast('已退出登录');
}
function navigate(route,data=null,push=true){
 state.previous=state.route;
 state.route=route;
 if(route==='exercise'&&data)state.exercise=data;
 if(route==='cultureDetail'&&data)state.selectedCulture=data;
 if(route==='courseDetail'&&data)state.selectedCourse=data;
 if(push)history.pushState({route},'',`#${route}`);
 render();
}
function render(){
 const detailRoutes=['exercise','cultureDetail','courseDetail','dimensions','report','history','resources'];
 backBtn.classList.toggle('hidden',!detailRoutes.includes(state.route));
 bottomNav.classList.toggle('hidden',detailRoutes.includes(state.route));
 document.querySelectorAll('.nav-item').forEach(btn=>btn.classList.toggle('active',btn.dataset.route===state.route));
 const names={
  home:'首页',assessment:'音乐测评',culture:'湖湘文化',cultureDetail:state.selectedCulture?.title||'学习内容',
  courses:'课程学习',courseDetail:state.selectedCourse?.title||'课程详情',dimensions:'感知维度',
  report:'测评报告',history:'学习记录',resources:'资源中心',profile:'个人中心',exercise:state.exercise?.name||'音乐测评'
 };
 subtitle.textContent=names[state.route]||'首页';
 const renderer={
  home:renderHome,assessment:renderAssessment,culture:renderCulture,cultureDetail:renderCultureDetail,
  courses:renderCourses,courseDetail:renderCourseDetail,dimensions:renderDimensions,report:renderReport,
  history:renderHistory,resources:renderResources,profile:renderProfile,exercise:renderExercise
 }[state.route]||renderHome;
 renderer();
 bindRouteButtons();
}
