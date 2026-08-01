function renderDimensions(){
 mainView.innerHTML=`
 <section class="page-intro"><h2>五维感知能力</h2><p>根据当前测评结果生成维度得分，并给出学习建议。</p></section>
 ${Object.entries(state.scores).map(([k,v])=>`<button class="dimension-card" data-dimension="${k}"><div class="dimension-head"><h4>${k}</h4><strong>${v}分</strong></div><div class="progress"><span style="width:${v}%"></span></div><p>${dimensionTip(k)}</p></button>`).join('')}
 <button class="primary-button full-button" data-route="assessment">继续测评</button>`;
 document.querySelectorAll('[data-dimension]').forEach(btn=>btn.onclick=()=>openDimension(btn.dataset.dimension));
}
function renderReport(){
 const avg=Math.round(Object.values(state.scores).reduce((a,b)=>a+b,0)/5);
 mainView.innerHTML=`
 <section class="report-score"><div class="score-ring"><div><strong>${avg}</strong><small>综合得分</small></div></div><h2>总体表现良好</h2><p style="color:var(--muted);font-size:13px">文化认同表现突出，音乐感知和学习参与仍有提升空间。</p></section>
 <section class="page-intro"><h2>维度数据</h2>${Object.entries(state.scores).map(([k,v])=>`<button class="chart-row" data-report-dimension="${k}"><label>${k}</label><div class="chart-track"><div class="chart-bar" style="width:${v}%"></div></div><b>${v}</b></button>`).join('')}</section>
 <section class="page-intro"><h2>学习建议</h2><p>每周完成三次听辨练习，重点训练音程、和弦功能和湖湘民歌旋律，并结合课程学习提高文化认知。</p></section>
 <button class="secondary-button full-button" id="exportReport">导出测评报告</button>`;
 document.querySelectorAll('[data-report-dimension]').forEach(btn=>btn.onclick=()=>openDimension(btn.dataset.reportDimension));
 document.getElementById('exportReport').onclick=()=>showToast('测评报告已生成');
}
function renderHistory(){
 const rows=[
  ['湖湘民歌旋律辨识','2026-08-01','85分'],
  ['音程识别','2026-07-30','76分'],
  ['和弦功能识别','2026-07-28','82分'],
  ['湖湘音乐文化基础','2026-07-25','完成3章'],
  ['音乐审美体验','2026-07-22','80分']
 ];
 mainView.innerHTML=`
 <section class="page-intro"><h2>学习记录</h2><p>查看近期测评、课程和文化学习记录。</p></section>
 ${rows.map((r,i)=>`<button class="history-item" data-history="${i}"><div class="history-top"><h4>${r[0]}</h4><span>${r[2]}</span></div><p>${r[1]}</p></button>`).join('')}`;
 document.querySelectorAll('[data-history]').forEach(btn=>btn.onclick=()=>showToast('记录详情已打开'));
}
function renderResources(){
 const rows=[
  ['湖湘民歌音频素材','收录山歌、劳动号子和地方小调等学习素材。'],
  ['花鼓戏唱腔资料','包含唱腔结构、节奏特点和代表曲目。'],
  ['常德丝弦文化读本','图文介绍历史、曲牌和表演形式。'],
  ['音乐基础知识','音阶、和弦、音程和调式基础内容。']
 ];
 mainView.innerHTML=`
 <section class="page-intro"><h2>资源中心</h2><p>查看音乐音频、文化读本和基础知识资料。</p></section>
 <div class="list-card">${rows.map((r,i)=>`<button class="list-item" data-resource="${i}"><span class="list-icon">资</span><span class="list-copy"><h4>${r[0]}</h4><p>${r[1]}</p></span><span class="chevron">›</span></button>`).join('')}</div>`;
 document.querySelectorAll('[data-resource]').forEach(btn=>btn.onclick=()=>showToast('资源内容已打开'));
}
function renderProfile(){
 mainView.innerHTML=`
 <button class="profile-card" id="profileCard"><div class="avatar">管</div><h2>admin</h2><p>音乐教育学习者 · 综合得分 82</p></button>
 <div class="settings-list">
  <button class="setting-button" data-route="report"><span>我的测评报告</span><span>›</span></button>
  <button class="setting-button" data-route="dimensions"><span>我的感知维度</span><span>›</span></button>
  <button class="setting-button" data-route="history"><span>学习记录</span><span>›</span></button>
  <button class="setting-button" data-route="resources"><span>我的收藏与资源</span><span>›</span></button>
  <button class="setting-button" id="accountSetting"><span>账号设置</span><span>›</span></button>
  <button class="setting-button danger" id="logoutBtn"><span>退出登录</span><span>›</span></button>
 </div>`;
 document.getElementById('profileCard').onclick=()=>showToast('个人资料已打开');
 document.getElementById('accountSetting').onclick=()=>showToast('账号设置已打开');
 document.getElementById('logoutBtn').onclick=logout;
}
function renderExercise(){
 const e=state.exercise||exercises[0];
 if(!state.right)state.right=e.answers[Math.floor(Math.random()*e.answers.length)];
 const pct=state.total?Math.round(state.correct/state.total*100):0;
 mainView.innerHTML=`
 <section class="exercise-page">
  <section class="page-intro"><h2>${e.name}</h2><p>${e.desc}</p><div class="tag-row"><span class="tag">答对 ${state.correct}/${state.total}</span><span class="tag">正确率 ${pct}%</span></div></section>
  <div class="sound-stage"><div id="equalizer" class="equalizer"><span></span><span></span><span></span><span></span><span></span></div><div class="question-label">请仔细聆听</div><div class="question-text">${e.q}</div></div>
  <div class="answer-grid">${e.answers.map(a=>`<button class="answer-button ${state.completed&&a===state.right?'correct':''} ${state.completed&&a===state.chosen&&a!==state.right?'wrong':''}" data-answer="${a}" ${state.completed?'disabled':''}>${a}</button>`).join('')}</div>
  <div class="exercise-actions"><button class="secondary-button" id="repeatBtn">重新播放</button><button class="secondary-button" id="helpBtn">练习帮助</button><button class="primary-button next" id="nextBtn" ${state.completed?'':'disabled'}>下一题</button></div>
 </section>`;
 document.querySelectorAll('[data-answer]').forEach(btn=>btn.onclick=()=>answer(btn.dataset.answer));
 document.getElementById('repeatBtn').onclick=playSound;
 document.getElementById('helpBtn').onclick=openHelp;
 document.getElementById('nextBtn').onclick=()=>{state.completed=false;state.chosen=null;state.right=null;render()};
 setTimeout(playSound,250);
}
function answer(value){
 if(state.completed)return;
 state.total++;state.completed=true;state.chosen=value;
 if(value===state.right)state.correct++;
 render();
 showToast(value===state.right?'回答正确！':'回答错误，正确答案已标出');
}
function playSound(){
 const eq=document.getElementById('equalizer');
 if(eq){eq.classList.add('playing');setTimeout(()=>eq.classList.remove('playing'),1600)}
 showToast('正在播放音乐片段');
}
function openCultureQuiz(c){
 modalCard.innerHTML=`<div class="modal-handle"></div><div class="modal-head"><h3>${c.title}知识测验</h3><button class="close-button" data-close>×</button></div><p>下面哪一项最能体现${c.title}的地域文化特点？</p><button class="secondary-button full-button quiz-option">音乐与地方语言、生活场景紧密联系</button><button class="secondary-button full-button quiz-option" style="margin-top:8px">完全不使用地方音乐素材</button><button class="secondary-button full-button quiz-option" style="margin-top:8px">只采用西方交响乐结构</button>`;
 openModal();
 document.querySelectorAll('.quiz-option').forEach((btn,i)=>btn.onclick=()=>{showToast(i===0?'回答正确，得分已记录':'回答错误，请重新学习');closeModal()});
}
function openLesson(c,index){
 const done=index<c.done;
 modalCard.innerHTML=`<div class="modal-handle"></div><div class="modal-head"><h3>${c.lessons[index]}</h3><button class="close-button" data-close>×</button></div><p>本章节包含知识讲解、音乐聆听、重点提示和章节练习。当前状态：${done?'已完成':'未学习'}。</p><p><b>学习目标：</b>理解本章节核心概念，并能够在听辨或文化情境中进行判断。</p><button class="primary-button full-button" id="finishLesson">${done?'重新学习':'完成本章节'}</button>`;
 openModal();
 document.getElementById('finishLesson').onclick=()=>{showToast('章节学习结果已记录');closeModal()};
}
function openCourseData(c){
 modalCard.innerHTML=`<div class="modal-handle"></div><div class="modal-head"><h3>课程学习数据</h3><button class="close-button" data-close>×</button></div><table class="data-table"><tr><th>指标</th><th>数据</th></tr><tr><td>完成章节</td><td>${c.done}/${c.lessons.length}</td></tr><tr><td>累计时长</td><td>${c.minutes}分钟</td></tr><tr><td>课程成绩</td><td>${c.score}分</td></tr><tr><td>最近学习</td><td>2026-08-01</td></tr></table>`;
 openModal();
}
function openDimension(name){
 modalCard.innerHTML=`<div class="modal-handle"></div><div class="modal-head"><h3>${name}</h3><button class="close-button" data-close>×</button></div><p>当前得分：<b>${state.scores[name]}分</b></p><p>${dimensionTip(name)}</p><button class="primary-button full-button" data-close>知道了</button>`;
 openModal();
}
function openHelp(){
 modalCard.innerHTML=`<div class="modal-handle"></div><div class="modal-head"><h3>练习帮助</h3><button class="close-button" data-close>×</button></div><p>请先聆听音乐片段，再选择最符合听觉内容的答案。完成答题后系统会标出正确答案并记录正确率。</p><button class="primary-button full-button" data-close>我知道了</button>`;
 openModal();
}
function openModal(){modalBackdrop.classList.remove('hidden');modalCard.querySelectorAll('[data-close]').forEach(btn=>btn.onclick=closeModal)}
function closeModal(){modalBackdrop.classList.add('hidden')}
function resetExercise(){state.total=0;state.correct=0;state.completed=false;state.right=null;state.chosen=null}
function dimensionTip(name){
 const tips={
  文化认知:'对湖湘音乐文化内容掌握较好，可继续学习代表曲种、人物和历史背景。',
  音乐感知:'建议加强复杂音程、和弦功能和旋律结构训练。',
  审美体验:'可以增加比较聆听与作品赏析，提升风格和情绪判断。',
  文化认同:'对湖湘文化认同较强，可进一步参与展示和实践活动。',
  学习参与:'建议保持每周固定练习频率，并完成课程章节。'
 };
 return tips[name]||'继续保持学习。';
}
function bindRouteButtons(){
 document.querySelectorAll('[data-route]').forEach(btn=>btn.onclick=()=>navigate(btn.dataset.route));
}
function showToast(text){
 const t=document.getElementById('toast');
 t.textContent=text;t.classList.add('show');
 clearTimeout(t.timer);t.timer=setTimeout(()=>t.classList.remove('show'),1700);
}

document.querySelectorAll('.nav-item').forEach(btn=>btn.onclick=()=>navigate(btn.dataset.route));
backBtn.onclick=()=>{
 const parent={exercise:'assessment',cultureDetail:'culture',courseDetail:'courses',dimensions:'profile',report:'profile',history:'profile',resources:'profile'}[state.route]||'home';
 navigate(parent);
};
document.getElementById('headerAction').onclick=()=>showToast('暂无新消息');
modalBackdrop.onclick=e=>{if(e.target===modalBackdrop)closeModal()};
window.onpopstate=()=>navigate('home',null,false);

if(localStorage.getItem('musicSystemLoggedIn')==='1')showSystem();
