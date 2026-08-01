function renderHome(){
 mainView.innerHTML=`
 <section class="hero-card">
  <h2>湖湘音乐美育测评</h2>
  <p>从文化认知、音乐感知、审美体验、文化认同和学习参与五个维度，综合了解音乐教育感知水平。</p>
  <div class="hero-actions"><button class="hero-main" data-route="assessment">开始测评</button><button class="hero-ghost" data-route="courses">进入课程</button></div>
 </section>
 <div class="stats-grid">
  <button class="stat-card" data-route="assessment"><strong>7</strong><span>测评项目</span></button>
  <button class="stat-card" data-route="dimensions"><strong>5</strong><span>感知维度</span></button>
  <button class="stat-card" data-route="courses"><strong>4</strong><span>学习课程</span></button>
 </div>
 <div class="section-heading"><h3>核心功能</h3><button data-route="courses">学习中心</button></div>
 <div class="quick-grid">
  <button class="quick-card" data-route="assessment"><div class="quick-icon">♫</div><h4>音乐听辨测评</h4><p>音阶、和弦、音程和旋律训练</p></button>
  <button class="quick-card" data-route="culture"><div class="quick-icon">楚</div><h4>湖湘文化学习</h4><p>查看完整学习内容和知识要点</p></button>
  <button class="quick-card" data-route="courses"><div class="quick-icon">课</div><h4>课程学习</h4><p>课程进度、章节和学习数据</p></button>
  <button class="quick-card" data-route="dimensions"><div class="quick-icon">维</div><h4>感知维度</h4><p>查看五维能力和提升建议</p></button>
  <button class="quick-card" data-route="resources"><div class="quick-icon">库</div><h4>资源中心</h4><p>音乐素材、课程和文化资料</p></button>
  <button class="quick-card" data-route="history"><div class="quick-icon">记</div><h4>学习记录</h4><p>查看历史测评和课程进度</p></button>
 </div>`;
}
function renderAssessment(){
 mainView.innerHTML=`
 <section class="page-intro"><h2>音乐听辨测评</h2><p>选择测评项目，答题结果会记录到音乐感知维度中。</p><div class="tag-row"><span class="tag">旋律</span><span class="tag">和弦</span><span class="tag">音程</span><span class="tag">湖湘音乐</span></div></section>
 <div class="list-card">${exercises.map(e=>`<button class="list-item" data-exercise="${e.id}"><span class="list-icon">${e.icon}</span><span class="list-copy"><h4>${e.name}</h4><p>${e.desc}</p></span><span class="chevron">›</span></button>`).join('')}</div>`;
 document.querySelectorAll('[data-exercise]').forEach(btn=>btn.onclick=()=>{resetExercise();navigate('exercise',exercises.find(e=>e.id===btn.dataset.exercise))});
}
function renderCulture(){
 mainView.innerHTML=`
 <section class="page-intro"><h2>湖湘音乐文化</h2><p>点击任一内容进入完整学习页面，查看知识正文、重点内容和学习数据。</p></section>
 <div class="list-card">${cultureItems.map((c,i)=>`<button class="list-item" data-culture="${i}"><span class="list-icon">${c.icon}</span><span class="list-copy"><h4>${c.title}</h4><p>${c.desc}</p></span><span class="chevron">›</span></button>`).join('')}</div>`;
 document.querySelectorAll('[data-culture]').forEach(btn=>btn.onclick=()=>navigate('cultureDetail',cultureItems[Number(btn.dataset.culture)]));
}
function renderCultureDetail(){
 const c=state.selectedCulture||cultureItems[0];
 const progress=Math.round(c.learned/c.total*100);
 mainView.innerHTML=`
 <section class="content-hero"><h2>${c.title}</h2><p>${c.intro}</p><div class="tag-row"><span class="tag">学习进度 ${progress}%</span><span class="tag">学习得分 ${c.score||'未测'}</span></div></section>
 <div class="data-grid">
  <div class="data-card"><strong>${c.learned}/${c.total}</strong><span>已学章节</span></div>
  <div class="data-card"><strong>${c.minutes}</strong><span>学习分钟</span></div>
  <div class="data-card"><strong>${c.score||'--'}</strong><span>学习得分</span></div>
 </div>
 <section class="page-intro"><h3>知识要点</h3><ul style="padding-left:20px;margin:8px 0 0;color:#4d5365;font-size:13px;line-height:1.75">${c.points.map(x=>`<li>${x}</li>`).join('')}</ul></section>
 ${c.sections.map((s,i)=>`<section class="lesson-section"><button class="lesson-toggle" data-section="${i}"><span>${i+1}. ${s[0]}</span><span>展开</span></button><div class="lesson-body hidden" id="section-${i}"><p>${s[1]}</p><button class="secondary-button full-button" data-complete-section="${i}">标记为已学习</button></div></section>`).join('')}
 <button class="primary-button full-button" id="cultureQuiz">开始知识测验</button>`;
 document.querySelectorAll('[data-section]').forEach(btn=>btn.onclick=()=>{
  const body=document.getElementById(`section-${btn.dataset.section}`);
  body.classList.toggle('hidden');
  btn.lastElementChild.textContent=body.classList.contains('hidden')?'展开':'收起';
 });
 document.querySelectorAll('[data-complete-section]').forEach(btn=>btn.onclick=()=>showToast('本章节已记录为学习完成'));
 document.getElementById('cultureQuiz').onclick=()=>openCultureQuiz(c);
}
function renderCourses(){
 const totalDone=courses.reduce((sum,c)=>sum+c.done,0);
 const totalLessons=courses.reduce((sum,c)=>sum+c.lessons.length,0);
 const totalMinutes=courses.reduce((sum,c)=>sum+c.minutes,0);
 mainView.innerHTML=`
 <section class="page-intro"><h2>课程学习</h2><p>查看课程章节、学习进度、累计时长和课程成绩。</p></section>
 <div class="data-grid">
  <div class="data-card"><strong>${totalDone}/${totalLessons}</strong><span>完成章节</span></div>
  <div class="data-card"><strong>${totalMinutes}</strong><span>学习分钟</span></div>
  <div class="data-card"><strong>80</strong><span>平均成绩</span></div>
 </div>
 ${courses.map((c,i)=>{
  const p=Math.round(c.done/c.lessons.length*100);
  return `<button class="course-card" data-course="${i}"><div class="course-top"><h4>${c.title}</h4><span>${p}%</span></div><p>${c.desc}</p><div class="course-meta"><span>${c.lessons.length}个章节</span><span>${c.minutes}分钟</span><span>${c.score}分</span></div><div class="mini-progress"><span style="width:${p}%"></span></div></button>`;
 }).join('')}`;
 document.querySelectorAll('[data-course]').forEach(btn=>btn.onclick=()=>navigate('courseDetail',courses[Number(btn.dataset.course)]));
}
function renderCourseDetail(){
 const c=state.selectedCourse||courses[0];
 const progress=Math.round(c.done/c.lessons.length*100);
 mainView.innerHTML=`
 <section class="content-hero"><h2>${c.title}</h2><p>${c.desc}</p><div class="tag-row"><span class="tag">进度 ${progress}%</span><span class="tag">成绩 ${c.score}分</span></div></section>
 <div class="data-grid">
  <div class="data-card"><strong>${c.done}/${c.lessons.length}</strong><span>完成章节</span></div>
  <div class="data-card"><strong>${c.minutes}</strong><span>学习分钟</span></div>
  <div class="data-card"><strong>${c.score}</strong><span>课程成绩</span></div>
 </div>
 <div class="section-heading"><h3>课程章节</h3><button id="courseDataBtn">查看数据</button></div>
 <div class="lesson-list">${c.lessons.map((lesson,i)=>`<button class="lesson-row" data-lesson="${i}"><span class="lesson-number">${i+1}</span><span><h4>${lesson}</h4><p>${i<c.done?'已完成学习':'点击进入本章节'}</p></span><span class="lesson-status ${i<c.done?'':'pending'}">${i<c.done?'已完成':'未学习'}</span></button>`).join('')}</div>
 <button class="primary-button full-button" id="continueCourse">${c.done?'继续学习':'开始学习'}</button>`;
 document.querySelectorAll('[data-lesson]').forEach(btn=>btn.onclick=()=>openLesson(c,Number(btn.dataset.lesson)));
 document.getElementById('continueCourse').onclick=()=>openLesson(c,Math.min(c.done,c.lessons.length-1));
 document.getElementById('courseDataBtn').onclick=()=>openCourseData(c);
}
