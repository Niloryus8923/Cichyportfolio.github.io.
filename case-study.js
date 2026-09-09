(function () {
  const legacyGoDt = window.goDt;

  function slot(label, detail, className) {
    return `<div class="image-slot ${className || ''}" role="img" aria-label="待替换图片：${label}"><strong>${label}<br><small>${detail}</small></strong></div>`;
  }

  function renderEastLakeCase() {
    const container = document.getElementById('dC');
    const legacyBack = document.getElementById('bDt');
    if (!container || !legacyBack) return;
    legacyBack.hidden = false;
    container.innerHTML = `
      <main class="case-study" aria-label="东湖高新区工会全年文体赛事规划案例详情">
        <section class="case-hero">
          <div class="case-hero-grid">
            <div>
              <p class="case-context">东湖高新区总工会面向区内职工，全年持续策划文体与社交活动。服务对象以年轻、高知、重视品质体验的科技企业职工为主，因此项目始终以品质感、参与感与新鲜感作为活动调性的核心。</p>
              <p class="case-kicker">Long-term case study · 2022—2025</p>
              <p class="case-project-name">东湖高新区工会 · 全年文体赛事规划</p>
              <h1 class="case-display">2022—2025，连续四年<br>从协助参与到年度规划主导</h1>
              <p class="case-lede">在这个持续四年的政企项目中，我完成了从参与执行到方案主导的角色升级：前期深入报名、传播、现场与复盘等全链路，后期独立承担年度策划、客户沟通与跨团队推进，把活动需求转化为兼顾职工体验、项目目标与落地效率的完整方案。</p>
              <div class="case-meta"><span>项目时间：2022—2025</span><span>项目类型：长期政企文体项目</span></div>
            </div>
            <div class="case-collage">
              ${slot('项目主视觉 / 职工赛事现场', '建议放最具代表性的年度活动现场横图', '')}
            </div>
          </div>
          <div class="impact-dashboard" aria-label="项目成果仪表盘">
            <div class="dashboard-primary">
              <article class="dashboard-metric metric-people"><span>参与规模</span><b data-count="2000" data-suffix="+">2,000+</b><p>单场参与人数</p><i aria-hidden="true"><em></em><em></em><em></em><em></em><em></em></i></article>
              <article class="dashboard-metric metric-events"><span>年度节奏</span><b data-count="8" data-suffix="+">8+</b><p>全年活动场次</p><i aria-hidden="true"></i></article>
              <article class="dashboard-metric metric-enterprises"><span>覆盖范围</span><b data-count="100" data-suffix="+">100+</b><p>覆盖高新区企业</p><i aria-hidden="true"><em></em><em></em><em></em><em></em></i></article>
              <article class="dashboard-metric metric-budget"><span>统筹规模</span><b>200 万</b><p>年度预算统筹</p><i aria-hidden="true"><em></em><em></em><em></em></i></article>
            </div>
            <div class="dashboard-secondary">
              <article class="dashboard-growth"><div><span>REGISTRATION GROWTH</span><b>报名逐年增长</b></div><div class="growth-line" aria-label="报名参与人数较上一年增长100至200人"><i></i><i></i><i></i><i></i></div><p>较上一年<br><strong>+100—200 人</strong></p></article>
              <article class="dashboard-satisfaction"><span>体验反馈</span><b data-count="90" data-suffix="%+">90%+</b><p>活动满意度</p><i aria-hidden="true"></i></article>
              <article class="dashboard-spread"><span>内容传播</span><b>5+ <small>篇 / 场</small></b><p>公众号推文产出</p><strong>最高 500+ 转发</strong></article>
            </div>
          </div>
        </section>

        <section class="case-capabilities">
          <div class="case-section-head"><div><p class="case-kicker">My contribution</p><h2 class="case-title">我在项目中承担的，<br>不只是执行。</h2></div></div>
          <div class="capability-evidence"><article><b>01</b><h3>年度策略规划</h3></article><article><b>02</b><h3>客户与跨部门协同</h3></article><article><b>03</b><h3>大型活动统筹</h3></article><article><b>04</b><h3>体验与传播优化</h3></article></div>
        </section>

        <section>
          <div class="case-section-head"><div><p class="case-kicker">Project overview</p><h2 class="case-title">4 Years of Evolution<br><span>我的解决问题能力</span></h2></div><p class="case-lede">不是四段彼此独立的经历，而是一条持续升级的问题解决路径：从参与方式，到全年内容，再到品牌体验与场景资源。</p></div>
          <div class="case-timeline">
            <article class="time-card"><div class="time-year">2022</div><div class="time-stage">线上参与体验</div><p class="time-question">在线下受限时，重新设计线上参与、反馈和激励机制。</p><div class="time-role">PART 01 · 问题解决</div></article>
            <article class="time-card"><div class="time-year">2023</div><div class="time-stage">全年内容体系</div><p class="time-question">让零散活动形成全年持续运营的职工体验入口。</p><div class="time-role">PART 02 · 策略积累</div></article>
            <article class="time-card"><div class="time-year">2024</div><div class="time-stage">系列品牌体验</div><p class="time-question">主导方案与客户对接，让全年主题既统一又保持新鲜感。</p><div class="time-role">PART 03 · 项目主导</div></article>
            <article class="time-card"><div class="time-year">2025</div><div class="time-stage">场景创新</div><p class="time-question">整合特色场地与区域资源，放大活动体验及影响力。</p><div class="time-role">PART 04 · 创新落地</div></article>
          </div>
        </section>

        <section>
          <div class="case-section-head"><div><p class="case-kicker">2022 · Participation experience</p><h2 class="case-title">当线下活动无法正常开展，线上活动怎么避免沦为“线上打卡”？</h2></div><p class="case-lede">这一年的核心并不是把线下活动搬到线上，而是重新设计参与者在线上完成一场赛事时的动机、反馈与完成体验。</p></div>
          <div class="logic-flow"><article class="logic-block"><h3>线下原有体验</h3><p>现场氛围、社交互动、竞争关系、即时反馈与领奖仪式，共同构成了“我正在参与一场活动”的真实感。</p></article><div class="logic-arrow">→</div><article class="logic-block"><h3>线上体验缺失</h3><p>参与变得孤立，过程感被削弱，完成感不足，活动容易退化为一次简单提交或线上打卡。</p></article><div class="logic-arrow">→</div><article class="logic-block accent"><h3>我的设计方向</h3><p>降低参与门槛；重构线上赛制；强化排名与进度反馈；优化奖励与获奖体验，让线上形式更方便，也更有持续参与感。</p></article></div>
          <div class="case-decision"><div><h3>原参与路径</h3><p>报名 → 单次参与 → 结果公布。过程弱、反馈慢、参与者容易流失。</p></div><div><h3>优化后参与路径</h3><p>轻量报名 → 持续参与 → 进度与排名反馈 → 阶段性激励 → 获奖确认，形成完整的线上赛事体验。</p></div></div>
          <div class="reality-grid reality-grid-five" style="margin-top:24px">${slot('线上小程序参与界面', '预留：赛事报名、打卡、排行榜或进度页截图', '')}${slot('线上赛事规则或奖项页', '预留：规则、排名、奖励机制截图', '')}${slot('线上活动传播物料', '预留：歌手赛、电竞赛或健步走传播画面', '')}${slot('线上排行榜 / 进度反馈', '预留：体现持续参与感与竞争感的页面截图', '')}${slot('线上获奖 / 证书展示', '预留：奖励机制、获奖通知或完成仪式感截图', '')}</div>
        </section>

        <section>
          <div class="case-section-head"><div><p class="case-kicker">2023 · Annual strategy</p><h2 class="case-title">从举办活动，到经营职工的全年生活</h2></div><p class="case-lede">从单场活动策划上升到全年内容体系规划。“工”字品牌不再只是一场活动的名称，而成为全年持续出现的职工体验入口。</p></div>
          <div class="system-transform"><div><b>Activity Planning</b><span>零散活动、单场响应、一次参与</span></div><div class="system-arrow">→</div><div><b>Content System</b><span>全年覆盖、兴趣分层、持续陪伴，让不同职工在不同时间都能找到适合自己的参与入口。</span></div></div>
          <div class="matrix-image-slot" role="img" aria-label="待替换图片：四大板块乘四季度年度内容体系矩阵"><span>STRATEGY MATRIX IMAGE</span><strong>4 大板块 × 4 季度<br>年度内容体系矩阵</strong><small>预留：请导入最终版本的年度内容矩阵图片</small></div>
        </section>

        <section>
          <div class="case-section-head"><div><p class="case-kicker">Experience principles</p><h2 class="case-title">工会 = 职工的“娘家人”</h2></div><p class="case-lede">我把“娘家人”从抽象定位转化为可被设计、被体验、被持续兑现的四条原则。</p></div>
          <div class="principles"><article class="principle"><b>陪伴</b><p>全年持续存在，而不是只在某一场活动当天出现。</p></article><article class="principle"><b>覆盖</b><p>让不同兴趣、年龄与参与方式的人，都能找到适合自己的内容。</p></article><div class="principle-center">不是活动组织者，而是职工生活体验的支持者。</div><article class="principle"><b>连接</b><p>通过活动帮助职工建立工作之外的人际关系与归属感。</p></article><article class="principle"><b>丰富</b><p>为职工提供工作之外更丰富、有记忆点的生活体验。</p></article></div>
        </section>

        <section>
          <div class="case-section-head"><div><p class="case-kicker">2024 · Series brand experience</p><h2 class="case-title">同一个年度主题，如何让四场活动既统一又不重复？</h2></div><p class="case-lede">全年以“四季不同代表花束”作为主线，把青年交友从四场独立活动，设计为一套可被记住的年度品牌体验。</p></div>
          <div class="season-timeline" aria-label="四季花语时间轴">
            <article class="season-step spring"><div class="season-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><g fill="currentColor"><ellipse cx="24" cy="13" rx="7" ry="12"/><ellipse cx="34.5" cy="20.5" rx="12" ry="7" transform="rotate(72 34.5 20.5)"/><ellipse cx="30.5" cy="33" rx="12" ry="7" transform="rotate(144 30.5 33)"/><ellipse cx="17.5" cy="33" rx="12" ry="7" transform="rotate(216 17.5 33)"/><ellipse cx="13.5" cy="20.5" rx="12" ry="7" transform="rotate(288 13.5 20.5)"/></g><circle cx="24" cy="24" r="5" fill="#f7cf78"/></svg></div><em>SPRING</em><b>春 <i>樱花</i></b><p>以初见开启全年社交，轻盈、开放、低压力。</p></article>
            <article class="season-step summer"><div class="season-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path fill="currentColor" d="M24 42c-11-7-16-14-16-22 0-7 5-12 11-12 2 0 4 1 5 3 2-2 4-3 7-3 7 0 12 5 12 12 0 9-8 16-19 22Z"/><path d="M17 20c4-6 13-6 16 0-2 5-10 8-16 4 4-1 7-3 10-6" fill="none" stroke="#f9d9d3" stroke-width="2.4" stroke-linecap="round"/></svg></div><em>SUMMER</em><b>夏 <i>玫瑰</i></b><p>将情绪推向热烈，强化表达、互动与心动感。</p></article>
            <article class="season-step autumn"><div class="season-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><g fill="currentColor"><ellipse cx="24" cy="14" rx="5" ry="11"/><ellipse cx="34" cy="24" rx="11" ry="5"/><ellipse cx="24" cy="34" rx="5" ry="11"/><ellipse cx="14" cy="24" rx="11" ry="5"/></g><circle cx="24" cy="24" r="5" fill="#fff0b7"/></svg></div><em>AUTUMN</em><b>秋 <i>桂花</i></b><p>以香气与松弛场景沉淀关系，营造自然的陪伴感。</p></article>
            <article class="season-step winter"><div class="season-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><g fill="currentColor"><ellipse cx="24" cy="13" rx="5.5" ry="11"/><ellipse cx="33.5" cy="18.5" rx="5.5" ry="11" transform="rotate(60 33.5 18.5)"/><ellipse cx="33.5" cy="29.5" rx="5.5" ry="11" transform="rotate(120 33.5 29.5)"/><ellipse cx="24" cy="35" rx="5.5" ry="11"/><ellipse cx="14.5" cy="29.5" rx="5.5" ry="11" transform="rotate(60 14.5 29.5)"/><ellipse cx="14.5" cy="18.5" rx="5.5" ry="11" transform="rotate(120 14.5 18.5)"/></g><circle cx="24" cy="24" r="4.5" fill="#9f6b2f"/></svg></div><em>WINTER</em><b>冬 <i>腊梅</i></b><p>以温暖且有韧性的意象收束全年，留下下一次相遇的期待。</p></article>
          </div>
          <div class="season-projects-head"><p>SUMMER &amp; AUTUMN · FIELD NOTES</p><h3>夏秋落地图集</h3><span>将玫瑰的热烈与桂花的松弛，转化为两种真实发生的相遇现场。</span></div>
          <div class="season-projects"><article class="season-project summer-season"><div><em>SUMMER · 【光谷热恋 玫你不行】大型交友活动</em><h3>以玫瑰为引，<br>让心动有迹可循</h3><p>以高能互动、舞台表达与即时参与感，打开大型青年社交活动的热烈氛围。</p></div></article><article class="season-project autumn-season"><div><em>AUTUMN · 【桂下循香 我在寻你】大型交友活动</em><h3>在桂香与晚风里，<br>让关系自然靠近</h3><p>把户外餐叙、自在交谈与温柔节奏，编排为一场更松弛的相遇。</p></div></article></div>
          <div class="consistency">
            <article class="consistency-panel consistency-core"><p class="consistency-label">WHAT STAYS</p><h3>统一，不是重复</h3><p class="consistency-intro">让每一场活动都被识别为同一个年度交友品牌。</p><ul><li><b>01</b><span>年度主题</span></li><li><b>02</b><span>花语元素</span></li><li><b>03</b><span>青年社交</span></li><li><b>04</b><span>品牌情绪与认知</span></li></ul></article>
            <div class="consistency-x" aria-label="同一主线，产生多样表达"><span>同一品牌主线</span><b>→</b><span>四季多样表达</span></div>
            <article class="consistency-panel consistency-fresh"><p class="consistency-label">WHAT CHANGES</p><h3>变化，才有期待</h3><p class="consistency-intro">每一期换一种相遇方式，却始终指向同一个体验目标。</p><ul><li><b>01</b><span>场地与季节氛围</span></li><li><b>02</b><span>破冰游戏与互动形式</span></li><li><b>03</b><span>活动节奏</span></li><li><b>04</b><span>社交体验与情绪记忆</span></li></ul></article>
          </div>
        </section>

        <section>
          <div class="case-section-head"><div><p class="case-kicker">2025 · Sports experience innovation</p><h2 class="case-title">当赛事内容难以再带来新鲜感，<br>我从体验场景寻找突破。</h2></div><p class="case-lede">区内职工年年参与体育赛事，对项目内容已有稳定预期。2025 年，我不再通过增加更多环节制造创新，而是从参与者进入的场景、抵达的便利度与过程感受开始重新设计。</p></div>
          <div class="experience-pivot"><article><span>THE PROBLEM</span><b>赛事机制成熟<br>内容期待有限</b><p>职工年年参与，常规活动已不再自然带来新鲜感。</p></article><div aria-hidden="true">→</div><article><span>THE BREAKTHROUGH</span><b>不增加环节<br>先改变体验场景</b><p>从场地、抵达便利度与过程感受重新设计参与体验。</p></article></div>
          <div class="scene-route" aria-label="2025年三项体育赛事体验升级"><article><div class="scene-number">01</div><div class="scene-copy"><span>SUMMER · 趣味运动会</span><h3>从陆地赛事，<br>到水面体验</h3><p>以清凉感、趣味性和分享感，重新定义夏季赛事氛围。</p></div>${slot('水面趣味运动会现场', '预留：水上赛道、互动瞬间或全景现场图', 'scene-image')}</article><article><div class="scene-number">02</div><div class="scene-copy"><span>WALK · 健步走</span><h3>从日常步行，<br>到特色场景</h3><p>用稀缺场地制造记忆点；高尔夫球场健步走将在下方独立展开。</p></div>${slot('特色场地健步走现场', '预留：特色场地、职工参与或路线现场图', 'scene-image')}</article><article><div class="scene-number">03</div><div class="scene-copy"><span>ACCESS · 乒羽赛事</span><h3>从偏远场馆，<br>到通勤动线</h3><p>调整至更便利的体育场，降低职工抵达与参赛门槛。</p></div>${slot('乒羽赛事现场', '预留：体育场、比赛瞬间或全景现场图', 'scene-image')}</article></div>
          <div class="scene-delivery"><div><span>MY ROLE</span><h3>让创新可行，<br>而不只停留在创意。</h3></div><ol><li><b>提出方向</b><span>结合主题、人群和季节提出场地与体验策略</span></li><li><b>推动采纳</b><span>说服甲方与项目管理团队采用新场地选择</span></li><li><b>提前避险</b><span>识别动线、秩序与执行风险，准备可落地方案</span></li></ol></div>
        </section>

        <section>
          <div class="case-section-head"><div><p class="case-kicker">Featured case · 以 2025 年健步走活动为例</p><h2 class="case-title">找到场地不是答案，<br>让一次选择同时解决多方问题才是。</h2></div><p class="case-lede">客户希望在高新区内找到能承载大型健步走的场地，并带来区别于往年的体验。我负责把这道“选址题”转化为一套兼顾职工体验、场地合作与现场执行的完整方案。</p></div>
          <div class="walk-brief" aria-label="客户任务与项目约束"><article><span>THE ASK · 客户要求</span><h3>区内选址，承载大型活动</h3><p>保留健步走的低门槛与群众参与基础，同时摆脱常规公园和城市道路带来的重复感。</p></article><article><span>THE REAL PROBLEM · 真正难题</span><h3>不是“在哪里走”，而是“为什么值得再来”</h3><p>场地既要容纳千人赛事与完整动线，也要成为这一届活动最直观、最容易被感知的创新。</p></article></div>
          <div class="now-metrics" aria-label="项目规模数据"><article><span>PREPARATION</span><b>1.5 <small>个月</small></b><p>从方案统筹到现场准备</p></article><article><span>EVENT DURATION</span><b>4 <small>小时</small></b><p>热身、赛事、茶歇与兑换全流程</p></article><article><span>PARTICIPATION</span><b>2,000 <small>人</small></b><p>千人规模签到与现场秩序执行</p></article></div>
          <div class="decision-feature"><div class="decision-index">01</div><div class="decision-copy"><span>KEY DECISION · <b>我的关键判断</b></span><h3>不在常规场地里继续筛选，<br>把高尔夫球场变成赛事体验空间。</h3><p>它不仅具备完整户外路线和更好的环境品质，也与高新区职工年轻、高学历、高收入、高品质偏好的人群特征相匹配。已有的合作沟通基础，则让这一非常规选址具备实际推进的可能。</p></div><div class="decision-reasons"><article><b>场地适配</b><p>球道形成天然路线，能够承载大型户外赛事。</p></article><article><b>人群匹配</b><p>职工画像与球场、在售楼盘的潜在客群高度重合。</p></article><article><b>合作可行</b><p>既有沟通触点降低协调成本，让资源交换能够快速落地。</p></article></div></div>
          <div class="story-evidence decision-evidence" aria-label="场地判断配图预留">${slot('高尔夫球场全景', '建议插入：能体现环境品质与赛事规模的球场大场景', 'evidence-main')}${slot('健步走路线勘察', '建议插入：球道路线、场地踏勘或与团建团队确认路线', '')}</div>
          <div class="exchange-section"><div class="story-heading"><i class="story-index">02</i><span>VALUE EXCHANGE</span><h3>从“租一个场地”，改为设计一场多方共赢的合作。</h3><p>我把每一方希望获得的价值放进同一条体验动线，让商业触点存在，但不打断职工参加活动的感受。</p></div><div class="exchange-orbit" aria-label="活动多方价值交换关系"><article class="exchange-union"><span>客户 / 工会</span><b>获得年度创新</b><p>用稀缺场景提升职工活动的辨识度与满意度。</p></article><article class="exchange-staff"><span>参与职工</span><b>获得新鲜体验与福利</b><p>在优质环境中运动，通过京东摊位获得实际优惠。</p></article><div class="exchange-core"><small>THE SHARED EXPERIENCE</small><strong>高尔夫球场<br>健步走</strong><em>体验创新 × 资源合作</em></div><article class="exchange-venue"><span>球场 / 营销中心</span><b>接触匹配客群</b><p>以茶歇、沙盘展示和户外体验自然触达潜在客户。</p></article><article class="exchange-jd"><span>京东地推</span><b>完成用户转化</b><p>依托公司既有服务资源，在现场完成拉新与福利发放。</p></article></div><p class="exchange-summary">我的作用：识别各方诉求，将“场地支持、品牌触达、用户转化、职工体验”重新编排为一套不会互相冲突的合作模型。</p><div class="story-evidence exchange-evidence" aria-label="资源合作配图预留">${slot('营销中心茶歇与沙盘', '建议插入：职工进入营销中心、茶歇区或楼盘沙盘场景', '')}${slot('京东福利服务摊位', '建议插入：京东地推、福利领取或职工互动现场', '')}${slot('职工球道体验', '建议插入：职工在球道健步走或接触球场体验的画面', '')}</div></div>
          <div class="delivery-story"><div class="story-heading"><i class="story-index">03</i><span>FROM PLAN TO FIELD</span><h3>把资源合作拆成一条可执行的千人流程。</h3></div><ol class="delivery-flow"><li><b>01</b><strong>报名分队</strong><span>提前完成队伍分配与人员管理方案</span></li><li><b>02</b><strong>路线确认</strong><span>对接专业团建团队，核定路线与风险点</span></li><li><b>03</b><strong>千人签到</strong><span>设计分流与签到方式，控制入场秩序</span></li><li><b>04</b><strong>热身与赛事</strong><span>统筹开场、热身和健步走执行节奏</span></li><li><b>05</b><strong>兑奖福利</strong><span>落地礼品核销、兑换与京东福利触点</span></li><li><b>06</b><strong>茶歇参观</strong><span>将休憩自然导向营销中心体验空间</span></li></ol><div class="ownership-strip"><div><span>MY RESPONSIBILITY</span><p>方案成立后，我继续负责流程规划、跨团队对接和现场秩序，让创意真正落到每一个参与节点。</p></div><p class="ownership-tags"><b>方案主导</b><b>客户及团队对接</b><b>报名与队伍管理</b><b>全流程统筹</b><b>现场秩序执行</b><b>礼品兑换落地</b></p></div><div class="story-evidence delivery-evidence" aria-label="现场执行配图预留">${slot('千人签到与分队', '建议插入：签到台、队伍集结或人员分流现场', 'evidence-main')}${slot('热身与健步走赛事', '建议插入：集体热身、出发或赛事进行中的画面', '')}${slot('礼品兑换与活动收束', '建议插入：礼品核销、兑换秩序或活动结束合影', '')}</div></div>
        </section>

        <section class="finale">
          <p class="case-kicker">What I bring</p><h2 class="case-title">从需求到现场，<br>让好体验真正发生。</h2>
          <p class="case-lede">我擅长的不是单点创意，而是把客户目标、可用资源与职工体验连成一套能被采纳、协同并稳定落地的方案。</p>
          <div class="final-focus"><article><span>01</span><b>需求 → 方案</b><p>厘清目标与边界，形成可执行的策略与流程。</p></article><article><span>02</span><b>资源 → 协同</b><p>推动客户、合作方与内部团队围绕同一体验目标行动。</p></article><article><span>03</span><b>创意 → 落地</b><p>提前拆解风险，保障千人规模现场的秩序与完成度。</p></article></div>
        </section>
      </main>`;
    const hero = container.querySelector('.case-hero');
    const projectName = container.querySelector('.case-project-name');
    if (hero && projectName) {
      const projectBar = document.createElement('header');
      projectBar.className = 'case-project-bar';
      projectBar.id = 'case-overview';
      projectBar.appendChild(projectName);
      hero.before(projectBar);
      const projectContext = container.querySelector('.case-context');
      if (projectContext) projectBar.appendChild(projectContext);
    }

    const dashboard = container.querySelector('.impact-dashboard');
    const projectBar = container.querySelector('.case-project-bar');
    if (projectBar && dashboard) {
      projectBar.classList.add('has-dashboard');
      projectBar.after(dashboard);
    }
    const heroGrid = hero?.querySelector('.case-hero-grid');
    const heroCopy = heroGrid?.firstElementChild;
    const heroKicker = heroCopy?.querySelector('.case-kicker');
    const heroDisplay = heroCopy?.querySelector('.case-display');
    if (hero && heroGrid && heroKicker && heroDisplay) {
      const heroHeading = document.createElement('div');
      heroHeading.className = 'case-hero-heading';
      heroHeading.append(heroKicker);
      hero.insertBefore(heroHeading, heroGrid);
    }
    if (dashboard && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          dashboard.classList.add('is-visible');
          dashboard.querySelectorAll('[data-count]').forEach(function (metric) {
            const target = Number(metric.dataset.count || 0);
            const suffix = metric.dataset.suffix || '';
            const start = performance.now();
            const duration = 850;
            const tick = function (now) {
              const progress = Math.min((now - start) / duration, 1);
              const current = Math.round(target * (1 - Math.pow(1 - progress, 3)));
              metric.textContent = current.toLocaleString('zh-CN') + suffix;
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
          observer.unobserve(dashboard);
        });
      }, { threshold: 0.28 });
      observer.observe(dashboard);
    } else if (dashboard) dashboard.classList.add('is-visible');

    const display = container.querySelector('.case-display');
    if (display) display.innerHTML = '2022—2025，连续四年<br>从协助参与到年度规划主导';

    const chapterLabels = [
      ['PART 01', 'RETHINKING PARTICIPATION'],
      ['PART 02', 'ANNUAL CONTENT SYSTEM'],
      ['PART 03', 'SERIES BRAND EXPERIENCE'],
      ['PART 04', 'SCENE INNOVATION']
    ];
    const chapterKickers = ['2022', '2023', '2024', '2025'];
    container.querySelectorAll('.case-section-head').forEach(function (head) {
      const kicker = head.querySelector('.case-kicker');
      const labelIndex = kicker ? chapterKickers.indexOf(kicker.textContent.trim().slice(0, 4)) : -1;
      if (labelIndex < 0) return;
      const label = document.createElement('p');
      label.className = 'case-part';
      label.innerHTML = `${chapterLabels[labelIndex][0]} <span>${chapterLabels[labelIndex][1]}</span>`;
      head.before(label);
    });

    const titleUpdates = {
      '2022': '\u5f53\u539f\u6709\u8def\u5f84\u65e0\u6cd5\u4f9d\u8d56\uff0c<br>\u5982\u4f55\u901a\u8fc7\u521b\u9020\u65b0\u7684\u65b9\u6848',
      '2023': '\u4ece\u4e3e\u529e\u6d3b\u52a8\uff0c<br>\u5230\u7ecf\u8425\u804c\u5de5\u7684\u5168\u5e74\u751f\u6d3b',
      'Resource': '\u628a\u9ad8\u65b0\u533a\u672c\u8eab\u89c6\u4e3a\u53ef\u4ee5\u4e0d\u65ad\u6316\u6398\u6f5c\u529b\u7684\u4f53\u9a8c\u8d44\u6e90\u5e93',
      'From': '\u8bbe\u8ba1\u5fc5\u987b\u8fdb\u5165\u771f\u5b9e\u73b0\u573a\uff0c<br>\u624d\u80fd\u6210\u4e3a\u4f53\u9a8c'
    };
    container.querySelectorAll('.case-section-head').forEach(function (head) {
      const kicker = head.querySelector('.case-kicker');
      const title = head.querySelector('.case-title');
      if (!kicker || !title) return;
      const key = kicker.textContent.trim().split(/\s+/)[0];
      if (titleUpdates[key]) title.innerHTML = titleUpdates[key];
    });

    const chapterSections = chapterKickers.map(function (year, index) {
      const section = [...container.querySelectorAll('section')].find(function (item) {
        return item.querySelector('.case-section-head .case-kicker')?.textContent.trim().startsWith(year);
      });
      if (section) section.id = `case-part-${index + 1}`;
      return section;
    });
    const chapterNav = document.createElement('nav');
    chapterNav.className = 'chapter-card-nav';
    chapterNav.setAttribute('aria-label', '\u6848\u4f8b\u7ae0\u8282\u5bfc\u89c8');
    const chapterCardTitles = [null, null, '\u5168\u5e74\u6d3b\u52a8\uff0c<br>\u5982\u4f55\u65e2\u7edf\u4e00\u53c8\u4e0d\u91cd\u590d\uff1f', '\u5f53\u8d5b\u4e8b\u5185\u5bb9\u96be\u4ee5\u518d\u5e26\u6765\u65b0\u9c9c\u611f\uff0c<br>\u6211\u4ece\u4f53\u9a8c\u573a\u666f\u5bfb\u627e\u7a81\u7834'];
    const chapterYears = ['2022', '2023', '2024', '2025'];
    chapterNav.innerHTML = chapterSections.map(function (section, index) {
      const title = section?.querySelector('.case-title')?.textContent.trim() || '';
      const cardTitle = chapterCardTitles[index] === null ? title : chapterCardTitles[index];
      const cardHeading = cardTitle ? `<strong>${cardTitle}</strong>` : '';
      return `<a class="chapter-card" href="#case-part-${index + 1}" aria-expanded="false"><time>${chapterYears[index]}</time><span>PART 0${index + 1}</span>${cardHeading}<footer><em>点击展开详情</em><i aria-hidden="true">↘</i></footer></a>`;
    }).join('');
    const overviewHead = [...container.querySelectorAll('.case-section-head')].find(function (head) {
      return head.querySelector('.case-kicker')?.textContent.trim().startsWith('Project overview');
    });
    const overviewTimeline = overviewHead?.parentElement?.querySelector('.case-timeline');
    if (overviewHead?.parentElement) {
      overviewHead.parentElement.classList.add('case-overview-section');
      overviewHead.parentElement.id = 'case-four-years';
    }
    const chapterDetails = document.createElement('div');
    chapterDetails.className = 'chapter-details';
    chapterDetails.setAttribute('aria-label', '\u6848\u4f8b\u7ae0\u8282\u8be6\u60c5');
    chapterSections.forEach(function (section, index) {
      if (!section) return;
      section.classList.add('chapter-detail');
      section.dataset.chapter = String(index + 1);
      section.hidden = true;
      chapterDetails.appendChild(section);
    });
    const principlesSection = [...container.querySelectorAll('section')].find(function (section) {
      return section.querySelector('.case-section-head .case-kicker')?.textContent.trim().startsWith('Experience principles');
    });
    if (principlesSection && chapterSections[1]) {
      principlesSection.classList.add('chapter-subsection');
      chapterSections[1].appendChild(principlesSection);
    }
    chapterSections.forEach(function (section, index) {
      if (!section) return;
      const yearMark = document.createElement('div');
      yearMark.className = 'chapter-year-mark';
      yearMark.setAttribute('aria-hidden', 'true');
      yearMark.textContent = chapterYears[index];
      section.appendChild(yearMark);
    });
    if (overviewTimeline) overviewTimeline.after(chapterNav, chapterDetails);
    container.querySelectorAll('.time-card .time-question, .time-card .time-role, .time-card .time-stage').forEach(function (item) { item.remove(); });
    chapterNav.addEventListener('click', function (event) {
      const link = event.target.closest('.chapter-card');
      if (!link) return;
      event.preventDefault();
      const target = chapterDetails.querySelector(link.getAttribute('href'));
      if (!target) return;
      const willOpen = target.hidden;
      chapterDetails.querySelectorAll('.chapter-detail').forEach(function (section) { section.hidden = true; });
      chapterNav.querySelectorAll('.chapter-card').forEach(function (card) { card.classList.remove('is-open'); card.setAttribute('aria-expanded', 'false'); card.querySelector('footer em').textContent = '点击展开详情'; });
      if (willOpen) {
        target.hidden = false;
        link.classList.add('is-open');
        link.setAttribute('aria-expanded', 'true');
        link.querySelector('footer em').textContent = '已展开 · 点击收起';
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    const capabilitySection = container.querySelector('.case-capabilities');
    const overviewSection = container.querySelector('.case-overview-section');
    const featuredSection = [...container.querySelectorAll('.case-section-head')].find(function (head) {
      return head.querySelector('.case-kicker')?.textContent.trim().startsWith('Featured case');
    })?.parentElement;
    if (capabilitySection) capabilitySection.id = 'case-role';
    if (featuredSection) featuredSection.id = 'case-featured';

    if (projectBar && capabilitySection && overviewSection && featuredSection) {
      const floatingNav = document.createElement('nav');
      floatingNav.className = 'case-floating-nav';
      floatingNav.setAttribute('aria-label', '案例目录');
      floatingNav.innerHTML = `
        <button class="case-nav-toggle" type="button" aria-expanded="false" aria-label="打开案例目录"><span>目录</span><b>01</b></button>
        <div class="case-nav-panel">
          <p>CASE INDEX · 案例目录</p>
          <a href="#case-overview" data-case-nav="0"><b>01</b><span>项目概述</span></a>
          <a href="#case-role" data-case-nav="1"><b>02</b><span>我的角色与能力</span></a>
          <a href="#case-four-years" data-case-nav="2"><b>03</b><span>四年进阶路径</span></a>
          <div class="case-nav-years" aria-label="四年项目子目录">
            <button type="button" data-case-year="0">2022</button><button type="button" data-case-year="1">2023</button><button type="button" data-case-year="2">2024</button><button type="button" data-case-year="3">2025</button>
          </div>
          <a href="#case-featured" data-case-nav="3"><b>04</b><span>2025 健步走案例</span></a>
        </div>`;
      container.appendChild(floatingNav);

      const navToggle = floatingNav.querySelector('.case-nav-toggle');
      const navLinks = [...floatingNav.querySelectorAll('[data-case-nav]')];
      const navTargets = [projectBar, capabilitySection, overviewSection, featuredSection];
      const closeNav = function () {
        floatingNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      };
      navToggle.addEventListener('click', function () {
        const willOpen = !floatingNav.classList.contains('is-open');
        floatingNav.classList.toggle('is-open', willOpen);
        navToggle.setAttribute('aria-expanded', String(willOpen));
      });
      navLinks.forEach(function (link, index) {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          navTargets[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
          closeNav();
        });
      });
      floatingNav.querySelectorAll('[data-case-year]').forEach(function (button) {
        button.addEventListener('click', function () {
          const index = Number(button.dataset.caseYear);
          const card = chapterNav.querySelectorAll('.chapter-card')[index];
          if (card) card.click();
          closeNav();
        });
      });

      if (window.__eastLakeCaseNavController) window.__eastLakeCaseNavController.abort();
      const navController = new AbortController();
      window.__eastLakeCaseNavController = navController;
      const updateFloatingNav = function () {
        const marker = window.scrollY + window.innerHeight * 0.34;
        let activeIndex = 0;
        navTargets.forEach(function (target, index) {
          if (target.getBoundingClientRect().top + window.scrollY <= marker) activeIndex = index;
        });
        navLinks.forEach(function (link, index) {
          link.classList.toggle('is-active', index === activeIndex);
          if (index === activeIndex) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
        navToggle.querySelector('b').textContent = `0${activeIndex + 1}`;
        const showAfter = projectBar.getBoundingClientRect().bottom + window.scrollY - 80;
        floatingNav.classList.toggle('is-visible', window.scrollY >= showAfter);
      };
      window.addEventListener('scroll', updateFloatingNav, { passive: true, signal: navController.signal });
      window.addEventListener('resize', updateFloatingNav, { passive: true, signal: navController.signal });
      updateFloatingNav();
    }

    const statement = container.querySelector('.case-statement');
    if (statement) {
      const insight = document.createElement('div');
      insight.className = 'case-insight';
      insight.innerHTML = '<span>EXPERIENCE SHIFT</span><p>\u4ece\u53c2\u52a0\u4e00\u6b21\u5065\u6b65\u8d70\uff0c\u8f6c\u53d8\u4e3a\u83b7\u5f97\u4e00\u6b21\u5e73\u65f6\u96be\u4ee5\u83b7\u5f97\u7684\u7279\u6b8a\u573a\u666f\u4f53\u9a8c\u3002</p>';
      statement.replaceWith(insight);
    }

    const revealTargets = container.querySelectorAll([
      '.case-capabilities .case-section-head', '.capability-evidence',
      '.case-overview-section .case-section-head', '.chapter-card-nav',
      '.impact-dashboard', '.now-scope', '.now-metrics', '.now-evidence',
      '.ability-proof-grid', '.case-role-result', '.finale'
    ].join(','));
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
      revealTargets.forEach(function (target, index) {
        target.classList.add('scroll-reveal');
        target.style.setProperty('--reveal-delay', (index % 3) * 55 + 'ms');
        revealObserver.observe(target);
      });
    }


    window.sw('pDt');
  }

  function renderLiantouCase() {
    const container = document.getElementById('dC');
    const legacyBack = document.getElementById('bDt');
    if (!container || !legacyBack) return;
    legacyBack.hidden = false;
    container.innerHTML = `
      <main class="case-study liantou-case" aria-label="湖北联投年货节案例详情">
        <header class="case-project-bar liantou-project-bar">
          <p class="case-project-name">湖北联投 · 2026 联投年货节</p>
          <p class="case-context">一场面向联投集团全体员工的内部品牌会展，以四个定制展区集中呈现旗下品牌，并连接员工体验、会员增长与内部消费。</p>
        </header>

        <section class="case-hero liantou-hero">
          <div class="case-hero-heading"><p class="case-kicker">Internal brand exhibition · 2026</p></div>
          <div class="case-hero-grid">
            <div>
              <h1 class="case-display">从游园会到品牌会展，<br>让联投旗下品牌被真正看见。</h1>
              <p class="case-lede">原有游园会方案无法承担集团领导了解旗下品牌的任务。我接手后重构整体方向，经过三轮沟通，依次解决形式、预算与搭建限制，把“联投人自己的年货节”落成一场覆盖衣、食、住、疗的内部品牌会展。</p>
              <div class="case-meta"><span>项目时间：2026 年 1 月 26—28 日</span><span>我的角色：项目主策划 + 全程执行</span></div>
            </div>
            <figure class="liantou-hero-visual"><img src="liantou_card.webp" alt="湖北联投年货节主视觉"><figcaption>联年弘运 · 马力全开</figcaption></figure>
          </div>
        </section>

        <section class="liantou-metrics" aria-label="项目成果数据">
          <article><div class="liantou-metric-head"><span>SPACE</span><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 27V8l11-4 11 4v19M10 12h3m6 0h3m-12 5h3m6 0h3m-12 5h3m6 0h3M3 27h26"/></svg></div><b>1,300<small>㎡</small></b><p>联投大厦内部展陈空间</p><i class="liantou-progress" style="--metric-value:86%"><em></em></i></article>
          <article><div class="liantou-metric-head"><span>DURATION</span><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="17" r="11"/><path d="M16 11v7l5 3M12 4h8"/></svg></div><b>3<small>天</small></b><p>连续内部品牌体验</p><i class="liantou-progress" style="--metric-value:64%"><em></em></i></article>
          <article><div class="liantou-metric-head"><span>PARTICIPATION</span><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="12" cy="11" r="4"/><circle cx="22" cy="13" r="3"/><path d="M4 27c0-6 3-9 8-9s8 3 8 9m0-7c5 0 7 2 7 7"/></svg></div><b>1,500<small>人</small></b><p>员工到场参与</p><i class="liantou-progress" style="--metric-value:78%"><em></em></i></article>
          <article><div class="liantou-metric-head"><span>COUPONS</span><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 9h22v5a3 3 0 0 0 0 6v5H5v-5a3 3 0 0 0 0-6V9Zm11 2v3m0 4v3"/></svg></div><b>3,000<small>+</small></b><p>互动优惠券发放</p><i class="liantou-progress" style="--metric-value:92%"><em></em></i></article>
          <article class="metric-wide"><div class="liantou-metric-head"><span>MEMBER GROWTH</span><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 25 13 17l5 4 9-12M20 9h7v7"/></svg></div><b>90<small>%</small></b><p>小程序新增关注覆盖参与员工</p><i class="liantou-progress" style="--metric-value:90%"><em></em></i></article>
        </section>

        <section class="liantou-shift liantou-strategy">
          <div class="case-section-head"><div><p class="case-kicker">The reframing</p><h2 class="case-title">轻松热闹，不等于品牌被看见。</h2></div><p class="case-lede">项目最初以游园会为方向，但摊位和游戏无法完整呈现旗下品牌。我接手后，从目标出发重新定义现场，并在三轮沟通中解决形式、成本与搭建限制。</p></div>
          <div class="case-role-strip" aria-label="我的项目职责"><span>MY CONTRIBUTION</span><b>重构策划方向</b><b>展区与动线规划</b><b>预算与效果平衡</b><b>提案及全程执行</b></div>
          <div class="liantou-before-after">
            <article><span>BEFORE · 原方案</span><h3>游园会摊位</h3><p>以游戏和零散摊位为主，参与轻松，却难以形成品牌的独立面貌，也不利于领导系统了解集团旗下业务。</p><ul><li>品牌信息碎片化</li><li>摊位缺少进入感</li><li>互动强于品牌认知</li></ul></article>
            <div class="shift-arrow" aria-hidden="true">→</div>
            <article class="is-after"><span>AFTER · 我的方向</span><h3>内部品牌会展</h3><p>为四个品牌建立可进入、可体验、可识别的开放展区，把员工互动嵌入参观与转化路径。</p><ul><li>统一策展叙事</li><li>品牌独立呈现</li><li>逛展、互动与转化连贯发生</li></ul></article>
          </div>
          <div class="compact-subhead"><p class="case-kicker">Three rounds of alignment</p><h3>方向、成本、落地：三轮沟通让方案成立。</h3></div>
          <div class="round-flow">
            <article><b>01</b><span>确定方向</span><h3>摊位 → 展厅</h3><p>以开放式品牌展厅代替零散摊位，让领导和员工可以走进去了解品牌定位、产品与特色。</p></article>
            <article><b>02</b><span>控制成本</span><h3>展厅 → 开放展区</h3><p>完整展厅使费用接近翻倍，我减少封闭结构与重型搭建，用开放式定制展区保留品牌边界和进入感。</p></article>
            <article><b>03</b><span>适配执行</span><h3>定制 → 模块组合</h3><p>在现有模块化搭建基础上，补充租赁展柜，再以主题色、标识与设计物料完成差异化陈列。</p></article>
          </div>
          <div class="liantou-principle"><span>WHAT STAYS</span><b>实现方式持续收敛，品牌展示目标始终不变。</b></div>
        </section>

        <section class="liantou-zones">
          <div class="case-section-head"><div><p class="case-kicker">Four branded zones</p><h2 class="case-title">“联投承包联投人的一年四季”，<br>从一句主题变成衣、食、住、疗四种体验。</h2></div><p class="case-lede">统一叙事建立集团认知，四种主题色、陈列方式和参与动作，则让每个品牌拥有清晰而独立的面貌。</p></div>
          <div class="zone-grid">
            <article class="zone-food"><div class="zone-no">01 · 食</div><span>湖北楚菜 · 楚韵红</span><h3>品质食材与湖北风味</h3><p>“甄选高蛋白冻品区”以高端陈列突出食材品质；“一县一品地标食材区”融入地域文化，强化产地特色。</p><div class="zone-tags"><i>高蛋白冻品</i><i>一县一品</i><i>地域文化</i></div></article>
            <article class="zone-health"><div class="zone-no">02 · 疗</div><span>九州医药 · 元气黄</span><h3>把健康关怀变成现场服务</h3><p>以中医问诊和理疗为两大体验，同时展示药食同源产品，让员工可以咨询、体验并理解品牌价值。</p><div class="zone-tags"><i>中医问诊</i><i>理疗体验</i><i>药食同源</i></div></article>
            <article class="zone-style"><div class="zone-no">03 · 衣</div><span>环信跨境购 · 福气紫</span><h3>让品牌与价格一眼可见</h3><p>开放陈列服饰、箱包等跨境商品，以清晰的品牌和价格信息直观呈现内部选品的性价比。</p><div class="zone-tags"><i>服饰箱包</i><i>品牌直观</i><i>员工优惠</i></div></article>
            <article class="zone-life"><div class="zone-no">04 · 住</div><span>联投大会员 · 主题红</span><h3>从好礼展示走向会员转化</h3><p>直接铺陈入会好礼，由小程序工作人员现场讲解和引导，降低加入门槛，完成从参观到关注的转化。</p><div class="zone-tags"><i>品质生活</i><i>入会好礼</i><i>现场转化</i></div></article>
          </div>
        </section>

        <section class="liantou-path">
          <div class="case-section-head"><div><p class="case-kicker">Experience to conversion</p><h2 class="case-title">互动不是独立节目，<br>而是品牌体验后的下一步。</h2></div><p class="case-lede">我把展区、游戏、优惠券和会员关注组织为一条连续路径，让员工获得年货节的参与感，也让平台增长自然发生。</p></div>
          <ol class="conversion-flow"><li><b>01</b><span>进入展区</span><p>以主题色和开放布局快速识别四个品牌。</p></li><li><b>02</b><span>观看与体验</span><p>了解产品、问诊理疗、比较价格并接触会员权益。</p></li><li><b>03</b><span>参与游戏</span><p>用轻量互动延长停留，保留年货节的轻松感。</p></li><li><b>04</b><span>领取优惠</span><p>三天累计发放 3,000 余张优惠券。</p></li><li><b>05</b><span>关注平台</span><p>小程序新增关注覆盖约 90% 的参与员工。</p></li></ol>
          <div class="ownership-strip liantou-ownership"><div><span>MY RESPONSIBILITY</span><p>独立完成展区策划、布局、动线与互动机制；对接设计团队和项目管理，协助搭建并全程参与三天现场执行。</p></div><p class="ownership-tags"><b>策略主导</b><b>三轮提案</b><b>空间规划</b><b>设计对接</b><b>搭建协同</b><b>现场执行</b></p></div>
        </section>

        <section class="liantou-results">
          <div class="case-section-head"><div><p class="case-kicker">Project impact</p><h2 class="case-title">不止让品牌被看见，<br>更让员工连接与平台增长在同一现场发生。</h2></div></div>
          <div class="result-board">
            <article><strong>4</strong><span>旗下品牌集中亮相</span><p>跨境购、九州医药、湖北楚菜与联投大会员形成完整生活服务图景。</p></article>
            <article><strong>2 天</strong><span>集团领导持续到场</span><p>领导连续两天参与活动，与员工共同进入展区和互动体验。</p></article>
            <article><strong>1 项</strong><span>合作继续延伸</span><p>活动后，公司进一步接洽湖北楚菜进社区展厅开业项目。</p></article>
          </div>
          <aside class="project-context-note"><b>相关项目时间线</b><p>增益冷链甲鱼新品发布会及湖北卫视报道发生在联投年货节之前；几天后，甲鱼产品随湖北楚菜在联投内部再次亮相。两者共同构成产品传播路径，但媒体报道不计入本次年货节成果。</p></aside>
          <div class="case-takeaway"><div><p class="case-kicker">What I bring</p><h3>在限制中调整实现方式，把正确的方向留到最后。</h3></div><p>我把尚未成形的需求整理为会展策略，再将四个品牌、有限预算与现场条件组织成可协同、可落地的方案。</p></div>
        </section>
      </main>`;

    const revealTargets = container.querySelectorAll('.liantou-case section, .liantou-metrics article, .round-flow article, .zone-grid article');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });
      revealTargets.forEach(function (target, index) {
        target.classList.add('liantou-reveal');
        target.style.setProperty('--liantou-delay', (index % 4) * 45 + 'ms');
        observer.observe(target);
      });
    }
    window.sw('pDt');
  }

  function renderZhiyuCase() {
    const container = document.getElementById('dC');
    const legacyBack = document.getElementById('bDt');
    if (!container || !legacyBack) return;
    legacyBack.hidden = false;
    container.innerHTML = `
      <main class="case-study zhiyu-case" aria-label="光谷之寓国产漫画期刊 Only 展案例详情">
        <header class="case-project-bar zhiyu-project-bar">
          <p class="case-project-name">光谷之寓 · 年度社群服务中的单场案例</p>
          <p class="case-context">围绕之寓“主理人社区活动制”，用一次垂直兴趣活动连接住户、外部同好与成熟圈层组织。</p>
        </header>

        <section class="case-hero zhiyu-hero">
          <div class="case-hero-grid">
            <div>
              <p class="case-kicker">Community activation · 2025</p>
              <h1 class="case-display">选择正确的活动模式，<br>让真实的二次元圈层进入社区。</h1>
              <p class="case-lede">我没有替之寓从零策划一场“看起来像漫展”的活动，而是基于自己的圈层理解，选择更适配社区场景的 Only 展，并连接武汉本地 DTE 组委会，把真实的组织能力与参与人群嫁接进项目。</p>
              <div class="case-meta"><span>项目时间：2025 年 8 月 10 日</span><span>我的角色：活动模式策划 + 圈层资源对接</span></div>
            </div>
            <figure class="zhiyu-hero-visual"><img src="zhiyu-only-venue.jpg" alt="之寓未来文化馆内的国产漫画期刊 Only 2.5 纸媒同好会现场"><figcaption>国产漫画期刊 ONLY 2.5 纸媒同好会 × 之寓未来</figcaption></figure>
          </div>
        </section>

        <section class="zhiyu-metrics" aria-label="项目结果数据">
          <article><span>PARTICIPATION</span><b>60<small>人</small></b><p>活动实际参与</p></article>
          <article><span>RESIDENT BENEFIT</span><b>10<small>席</small></b><p>住户免费名额，可按余量机动增加</p></article>
          <article><span>CO-PUBLISHING</span><b>2<small>方</small></b><p>之寓与 DTE 联合预热</p></article>
          <article><span>COMMUNITY</span><b>1<small>个群</small></b><p>建立之寓二次元微信群</p></article>
        </section>

        <section class="zhiyu-context">
          <div class="case-section-head"><div><p class="case-kicker">The real brief</p><h2 class="case-title">之寓需要的不是一次热闹，<br>而是主理人社区的兴趣入口。</h2></div><p class="case-lede">在年度社群服务中，品牌希望先通过电竞、宠物、二次元等活动识别活跃住户，再逐渐支持住户成为兴趣主理人，自主发起社区活动。</p></div>
          <div class="case-role-strip" aria-label="我的项目贡献"><span>MY CONTRIBUTION</span><b>选择适配模式</b><b>理解圈层语境</b><b>嫁接成熟资源</b><b>设计合作关系</b></div>
          <div class="zhiyu-context-grid">
            <article><span>住户一侧</span><h3>有兴趣，缺少近场连接</h3><p>不少光谷年轻住户受到 ACG 文化影响，但工作节奏与距离提高了前往中心城区参与活动的成本。</p></article>
            <article><span>品牌一侧</span><h3>有空间，缺少圈层能力</h3><p>之寓拥有可使用的公共空间和住户触点，却不具备成熟的二次元内容组织与外部人群号召能力。</p></article>
          </div>
        </section>

        <section class="zhiyu-choice">
          <div class="case-section-head"><div><p class="case-kicker">The model choice</p><h2 class="case-title">为什么不是大型漫展，<br>而是一场 Only 展？</h2></div><p class="case-lede">项目的突破不在于把规模做大，而在于找到与场地、资源和社区关系都更匹配的活动单元。</p></div>
          <div class="zhiyu-comparison">
            <article class="is-rejected"><span>大型漫展</span><h3>规模大，却不适配</h3><ul><li>依赖集中客流与中心区位</li><li>需要 IP、嘉宾和较长筹备周期</li><li>执行成本高，社区关系容易停在一次到访</li></ul></article>
            <div class="zhiyu-choice-mark" aria-hidden="true">→</div>
            <article class="is-selected"><span>Only 展</span><h3>更小、更垂直、更真实</h3><ul><li>围绕单一兴趣主题聚集同好</li><li>组织轻、门槛低，适合公寓公共空间</li><li>更容易从参与者中发现长期活跃用户</li></ul></article>
          </div>
          <blockquote class="zhiyu-insight"><span>INSIDER INSIGHT</span><p>“因为自己也是半个二次元，我知道这个圈层能迅速识别品牌是在真正提供交流空间，还是只借用二次元包装。”</p></blockquote>
          <div class="compact-subhead"><p class="case-kicker">Resource matchmaking</p><h3>不是从零搭建，而是让两种缺口彼此补位。</h3><p>我联系武汉本地 DTE 组委会，把之寓的空间与住户资源，和 DTE 的圈层传播、招募及现场组织能力连接起来。</p></div>
          <div class="zhiyu-match">
            <article><span>之寓 ZHIYU</span><h3>有场地与住户触点</h3><p>免费提供活动空间，为住户开放福利名额并承接后续社群。</p><small>缺少：成熟的二次元内容与外部人流</small></article>
            <div class="zhiyu-match-core"><em>MY ROLE</em><strong>识别互补资源<br>推动合作成立</strong><i>场地 × 组织 × 人群</i></div>
            <article><span>DTE 组委会</span><h3>有组织与传播能力</h3><p>负责圈层发布、摊主及参与者组织，并带来成熟的 Only 展内容。</p><small>缺少：合适且低成本的线下场地</small></article>
          </div>
          <div class="zhiyu-publish" aria-label="之寓与DTE双方活动预热截图">
            <figure><img src="zhiyu-only-preheat-zhiyu.jpg" alt="之寓账号发布活动预热信息"><figcaption>之寓发布 · 面向住户提供活动福利</figcaption></figure>
            <figure><img src="zhiyu-only-preheat-dte.jpg" alt="DTE组委会发布活动预热信息"><figcaption>DTE 发布 · 面向圈层用户组织报名</figcaption></figure>
          </div>
        </section>

        <section class="zhiyu-experience">
          <div class="case-section-head"><div><p class="case-kicker">The experience</p><h2 class="case-title">让住户在家门口，<br>获得一场真实的同好体验。</h2></div><p class="case-lede">活动包含摊主展售、场内小游戏、舞台表演、自由安利、集体合照与自由交流。之寓没有扮演内容方，而是成为真实圈层活动的发生地。</p></div>
          <div class="zhiyu-experience-grid">
            <figure class="zhiyu-schedule"><img src="zhiyu-only-schedule.jpg" alt="Only 2.5纸媒同好会活动流程"><figcaption>一日活动流程</figcaption></figure>
            <figure class="zhiyu-scene zhiyu-scene-wide"><img src="zhiyu-only-group.jpg" alt="国产漫画期刊 Only 2.5 纸媒同好会中愿意出镜的部分参与者合照"><figcaption>现场合照 · 图中仅为愿意出镜的部分参与者</figcaption></figure>
            <figure class="zhiyu-scene"><img src="zhiyu-only-cosplay-1.jpg" alt="活动现场的角色扮演参与者"><figcaption>真实圈层内容进入社区</figcaption></figure>
            <figure class="zhiyu-scene"><img src="zhiyu-only-booth.jpg" alt="活动现场陈列漫画周边的摊位"><figcaption>摊位内容与纸媒交流</figcaption></figure>
            <figure class="zhiyu-scene"><img src="zhiyu-only-paper-expression.jpg" alt="参与者在角色立牌旁展示漫画纸媒"><figcaption>角色装扮、纸媒分享与现场打卡</figcaption></figure>
          </div>
        </section>

        <section class="zhiyu-results">
          <div class="case-section-head"><div><p class="case-kicker">Project outcome</p><h2 class="case-title">一次 60 人的真实活动，<br>为后续社区运营留下接口。</h2></div></div>
          <div class="zhiyu-result-board">
            <article><b>60</b><span>人实际参与</span><p>外部同好与之寓住户共同进入同一场兴趣活动。</p></article>
            <article><b>10</b><span>个住户免费名额</span><p>根据现场余量保留机动增加空间，降低住户参与门槛。</p></article>
            <article><b>1</b><span>个二次元微信群</span><p>用于参与者关系承接，为后续活动保留社群基础。</p></article>
          </div>
          <aside class="zhiyu-boundary"><b>结果边界</b><p>微信群的长期活跃度及其对后续活动的具体作用尚未验证，因此本案例将其定义为“初步社群沉淀”，不归因为品牌黏性或租赁转化成果。</p></aside>
          <div class="case-takeaway"><div><p class="case-kicker">What I bring</p><h3>我的兴趣不只是标签，它能成为项目可调用的资源。</h3></div><p>我用圈层理解选择合适模式，并把个人积累的真实关系转化为解决客户问题的合作资源。</p></div>
        </section>
      </main>`;

    const revealTargets = container.querySelectorAll('.zhiyu-case section, .zhiyu-metrics article, .zhiyu-context-grid article, .zhiyu-match article, .zhiyu-result-board article');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });
      revealTargets.forEach(function (target, index) {
        target.classList.add('zhiyu-reveal');
        target.style.setProperty('--zhiyu-delay', (index % 4) * 45 + 'ms');
        observer.observe(target);
      });
    }
    window.sw('pDt');
  }

  function renderMeishiCase() {
    const container = document.getElementById('dC');
    const legacyBack = document.getElementById('bDt');
    if (!container || !legacyBack) return;
    if (window.__meishiCarouselTimer) {
      window.clearInterval(window.__meishiCarouselTimer);
      window.__meishiCarouselTimer = null;
    }
    legacyBack.hidden = false;
    container.innerHTML = `
      <main class="case-study meishi-case" aria-label="中华美食荟湖北系列活动案例详情">
        <header class="case-project-bar meishi-project-bar">
          <p class="case-project-name">2025 中华美食荟 · 湖北系列活动</p>
          <p class="case-context"><b>项目背景｜</b>2025 年 3 月，由商务部等六部门与湖北省人民政府共同主办的“中华美食荟”在武汉楚河汉街启动，以中华美食文化促进服务消费；本案例涵盖启动仪式、三大主题市集，并延展至 5 月楚菜经典美食邀请赛。</p>
        </header>

        <section class="case-hero meishi-hero">
          <div class="meishi-hero-copy">
            <p class="case-kicker">My role · Event planning</p>
            <h1 class="case-display">把湖北文化，转化为可直播、可游逛的活动现场。</h1>
            <div class="meishi-role-badge"><span>MY ROLE</span><strong>活动策划 · 策划PPT主责</strong><p>视觉布置｜空间规划｜流程设计｜多轮内部汇报</p></div>
            <p class="case-lede">由活动公司派驻湖北卫视项目团队，我负责把活动目标转化为策划PPT、舞台与市集视觉、场地动线和仪式流程。</p>
            <div class="case-meta"><span>2025 年 3—5 月</span><span>湖北卫视项目团队</span></div>
          </div>
          <figure class="meishi-hero-visual"><img src="meishi-hero.webp" alt="中华美食荟启动仪式晚间舞台与观众现场"><figcaption>启动仪式晚间实景 · 武汉楚河汉街</figcaption></figure>
        </section>

        <section class="meishi-metrics" aria-label="中华美食荟整体活动数据">
          <article><div class="meishi-metric-top"><span class="meishi-metric-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 20V8l8-4 8 4v12M8 20v-7h8v7M3 20h18"/></svg></span><em>MARKET</em></div><b><span data-count-to="3500" data-count-prefix="约 ">0</span><small>㎡</small></b><p>核心美食市集面积</p><i aria-hidden="true"></i></article>
          <article><div class="meishi-metric-top"><span class="meishi-metric-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2.4 2.2 3.6 4.9 3.6 8S14.4 17.8 12 20M12 4c-2.4 2.2-3.6 4.9-3.6 8s1.2 5.8 3.6 8"/></svg></span><em>REGIONS</em></div><b><span data-count-to="20">0</span><small>个</small></b><p>省市自治区风味汇集</p><i aria-hidden="true"></i></article>
          <article><div class="meishi-metric-top"><span class="meishi-metric-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2"/><path d="M3 20c.4-4 2.4-6 6-6s5.6 2 6 6M15 15c3.2 0 5 1.7 5.5 5"/></svg></span><em>VISITORS</em></div><b><span data-count-to="12">0</span><small>万+</small></b><p>三天整体活动到访</p><i aria-hidden="true"></i></article>
          <article><div class="meishi-metric-top"><span class="meishi-metric-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><ellipse cx="12" cy="7" rx="7" ry="3"/><path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/></svg></span><em>RETAIL</em></div><b><span data-count-to="1600">0</span><small>万+</small></b><p>三天带动零售额</p><i aria-hidden="true"></i></article>
        </section>

        <section class="meishi-role" aria-label="我的项目职责">
          <div class="meishi-role-panel">
            <div class="meishi-role-lead"><p class="case-kicker">My contribution</p><h2>我的任务不是统筹全场，<br>而是推动方案落地。</h2><p>此前的湖北卫视实习经历，帮助我快速适应电视媒体团队的内容标准与修改节奏。</p></div>
            <div class="meishi-role-scope"><span>我直接负责</span><ul><li>策划方案与汇报PPT</li><li>舞台、市集视觉布置</li><li>场地布局与人员动线</li><li>仪式流程与道具路径</li></ul></div>
            <div class="meishi-role-collab"><span>我的协作位置</span><b>向湖北卫视团队汇报</b><p>根据多轮内部意见持续迭代。</p><b>商务部提案主讲助理</b><p>承担材料、内容衔接与现场支持。</p><small>不负责总体统筹、招商签约及全省配套活动管理。</small></div>
          </div>
        </section>

        <section class="meishi-stage-story">
          <div class="case-section-head"><div><p class="case-kicker">Phase 01 · The hard constraint</p><h2 class="case-title">舞台首先要解决的，<br>是直播镜头里的品牌边界。</h2></div><p class="case-lede">主会场位于 Dior 门店旁的广场。筹备期门店处于装修阶段，白色围挡上的品牌标识不可覆盖；它并非活动参与品牌，却会进入官媒直播和新闻画面。</p></div>
          <div class="meishi-day-night">
            <figure><img src="meishi-stage-day.webp" alt="白天主会场舞台、嘉宾座席和后方装修围挡"><figcaption><b>DAY · 场地原貌</b><span>白色围挡尺度大，座席落位后空间余量有限。</span></figcaption></figure>
            <figure><img src="meishi-stage-night-far.webp" alt="夜间远景中舞台灯光成为画面中心"><figcaption><b>NIGHT · 现场验证</b><span>标识仍然存在，但舞台亮度、尺度和轮廓把视觉重心拉回活动。</span></figcaption></figure>
          </div>
          <div class="meishi-decisions">
            <article><span>01 · CAMERA FIRST</span><h3>把舞台当作镜头构图设计</h3><p>利用夜间活动条件，以深色舞台主体、高亮飞檐轮廓、凤凰顶饰和集中灯光建立新的视觉中心，降低外围标识对官方画面的干扰。</p></article>
            <article><span>02 · ROUTE FIRST</span><h3>为仪式道具预留独立通道</h3><p>嘉宾落座后几乎没有工作人员周转空间。我在场地规划初期即保留道具上台路径，避免穿越嘉宾席、占用机位或打断仪式节奏。</p></article>
          </div>
          <div class="meishi-plan-proof">
            <figure><img src="meishi-site-plan.webp" alt="中华美食荟启动仪式场地平面规划图"><figcaption>场地平面规划 · 16 米宽、10 米深主舞台与高密度座席关系</figcaption></figure>
            <figure><img src="meishi-stage-render.webp" alt="中华美食荟启动仪式舞台效果图"><figcaption>舞台效果图 · 飞檐、凤凰、灯笼与主屏共同建立视觉边界</figcaption></figure>
          </div>
        </section>

        <section class="meishi-visual-system">
          <div class="case-section-head"><div><p class="case-kicker">Regional visual language</p><h2 class="case-title">不是贴上湖北符号，<br>而是让它贯穿舞台与市集。</h2></div><p class="case-lede">湖北卫视团队重视地域表达。我以黄鹤楼飞檐、荆楚凤凰、传统灯笼和湖北经典美食为共享语言，在不同场景中调整色彩与情绪。</p></div>
          <div class="meishi-concept-grid">
            <figure><img src="meishi-main-visual.webp" alt="中华美食荟暨湖北服务消费季活动主视觉"><figcaption>活动主视觉 · 红金基调连接官方规格与荆楚山水</figcaption></figure>
            <figure><img src="meishi-concept-stage.webp" alt="由荆楚凤凰、飞檐灯笼与中华美食组成的舞美设计理念"><figcaption>舞美逻辑 · 凤凰 × 飞檐灯笼 × 中华美食</figcaption></figure>
          </div>
          <div class="meishi-color-logic" aria-label="仪式和市集的色彩策略"><article><span>启动仪式</span><b>朱红与暖金</b><p>强调官方规格、仪式感和夜间识别。</p></article><div><strong>共享</strong><em>飞檐轮廓<br>地域美食<br>荆楚文化</em></div><article><span>主题市集</span><b>樱花粉</b><p>回应武汉春季旅游，形成更轻盈的游逛氛围。</p></article></div>
          <div class="meishi-before-after">
            <figure><span>BEFORE · 初版</span><img src="meishi-market-before.webp" alt="采用朱红色传统门楼造型的市集门头初版方案"><figcaption><b>与仪式舞台同色</b><p>统一但偏厚重，季节性与市集亲和力不足。</p></figcaption></figure>
            <figure><span>AFTER · 落地</span><img src="meishi-market-after.webp" alt="采用樱花粉、开放格栅与山水图形的市集门头落地现场"><figcaption><b>保留文化识别，改变场景情绪</b><p>用樱花粉、开放格栅与渐变山水连接武汉樱花季。</p></figcaption></figure>
          </div>
          <p class="meishi-principle">统一不等于完全同色：共享地域符号保持系统一致，不同色彩回应仪式与市集的体验差异。</p>
          <div class="meishi-official-note"><b>活动整体结果</b><p>据湖北日报报道，三天活动吸引 12 万余名市民游客，带动零售额超过 1,600 万元。该数据反映整体项目影响，不单独归因于我的工作。</p><p class="source-links"><a href="https://swt.hubei.gov.cn/homepic/202503/t20250320_5583518.shtml" target="_blank" rel="noopener">湖北省商务厅活动报道 ↗</a><a href="https://epaper.hubeidaily.net/pc/attachment/202503/20/20e2965b-9a98-4895-948e-4b6c404d0360.pdf" target="_blank" rel="noopener">湖北日报结果报道 ↗</a></p></div>
        </section>

        <section class="meishi-contest">
          <div class="case-section-head"><div><p class="case-kicker">Phase 02 · Chu cuisine competition</p><h2 class="case-title">从城市消费场景，<br>延展到专业楚菜竞技。</h2></div><p class="case-lede">5 月 26 日，系列配套活动“楚菜经典美食邀请赛”在汉口里举行。我的职责延续为策划PPT、视觉布置、空间规划与流程设计，但场景从面向大众的市集转为专业烹饪赛事。</p></div>
          <div class="meishi-contest-metrics"><article><b>17</b><span>湖北市州</span></article><article><b>40</b><span>厨师队伍</span></article><article><b>40</b><span>烹饪工位</span></article><article><b>约 45m</b><span>作品长桌</span></article></div>
          <div class="meishi-contest-story"><span>SPATIAL ADAPTATION</span><h3>同一场地连续承载开幕、竞赛、评审、展示与颁奖。</h3><p>现场需要同时协调选手、食材、烹饪设备、评委、媒体和观众。空间规划围绕竞赛操作、作品送审与长桌展示展开，并让新增舞台结构与汉口里仿古建筑保持视觉关系。</p></div>
          <div class="meishi-carousel" data-meishi-carousel tabindex="0" aria-label="楚菜经典美食邀请赛现场图片轮播">
            <div class="meishi-carousel-viewport"><div class="meishi-carousel-track">
              <figure class="meishi-carousel-slide"><img src="meishi-contest-market-hd.webp" alt="汉口里街区中的楚菜邀请赛红色主题展区全景"><figcaption>赛事空间全景 · 红色视觉系统嵌入汉口里街区</figcaption></figure>
              <figure class="meishi-carousel-slide"><img src="meishi-contest-table-hd.webp" alt="汉口里街区内集中陈列的楚菜参赛作品长桌"><figcaption>约 45 米作品长桌 · 楚菜作品集中展示</figcaption></figure>
              <figure class="meishi-carousel-slide"><img src="meishi-contest-media-hd.webp" alt="媒体拍摄楚菜参赛作品与现场交流"><figcaption>作品展示与媒体记录 · 专业赛事转化为公共传播</figcaption></figure>
              <figure class="meishi-carousel-slide"><img src="meishi-contest-cooking-hd.webp" alt="楚菜邀请赛选手在现场制作参赛菜品"><figcaption>现场烹饪 · 选手在限定时间内完成菜品</figcaption></figure>
              <figure class="meishi-carousel-slide"><img src="meishi-contest-profiles-hd.webp" alt="楚菜邀请赛场地内的选手形象与队伍信息展板"><figcaption>选手形象展示 · 队伍与地域信息进入空间导视</figcaption></figure>
              <figure class="meishi-carousel-slide"><img src="meishi-contest-sign-hd.webp" alt="汉口里既有戏台前的楚菜经典美食邀请赛标识"><figcaption>赛事标识 · 与汉口里既有戏台同框</figcaption></figure>
              <figure class="meishi-carousel-slide"><img src="meishi-contest-station-hd.webp" alt="多名参赛厨师在标准化现场工位同步烹饪"><figcaption>标准化工位 · 多支队伍同步竞赛</figcaption></figure>
            </div></div>
            <div class="meishi-carousel-controls">
              <button type="button" data-carousel-prev aria-label="上一张现场图片">←</button>
              <div class="meishi-carousel-dots" aria-label="选择现场图片"><button type="button" aria-label="查看第 1 张图片" aria-current="true"></button><button type="button" aria-label="查看第 2 张图片"></button><button type="button" aria-label="查看第 3 张图片"></button><button type="button" aria-label="查看第 4 张图片"></button><button type="button" aria-label="查看第 5 张图片"></button><button type="button" aria-label="查看第 6 张图片"></button><button type="button" aria-label="查看第 7 张图片"></button></div>
              <span class="meishi-carousel-count" aria-live="polite"><b>01</b> / 07</span>
              <button type="button" data-carousel-next aria-label="下一张现场图片">→</button>
            </div>
          </div>
        </section>

      </main>`;

    const metricValues = Array.from(container.querySelectorAll('[data-count-to]'));
    if (metricValues.length) {
      const renderMetric = function (node, value) {
        const prefix = node.getAttribute('data-count-prefix') || '';
        node.textContent = prefix + Math.round(value).toLocaleString('zh-CN');
      };
      const animateMetrics = function () {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        metricsPanel.classList.add('is-active');
        metricValues.forEach(function (node) {
          const target = Number(node.getAttribute('data-count-to'));
          if (reduceMotion) { renderMetric(node, target); return; }
          const startedAt = performance.now();
          const duration = 1050;
          const tick = function (now) {
            const progress = Math.min(1, (now - startedAt) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            renderMetric(node, target * eased);
            if (progress < 1) window.requestAnimationFrame(tick);
          };
          window.requestAnimationFrame(tick);
        });
      };
      const metricsPanel = container.querySelector('.meishi-metrics');
      if ('IntersectionObserver' in window) {
        const metricObserver = new IntersectionObserver(function (entries) {
          if (!entries.some(function (entry) { return entry.isIntersecting; })) return;
          animateMetrics();
          metricObserver.disconnect();
        }, { threshold: 0.35 });
        metricObserver.observe(metricsPanel);
      } else animateMetrics();
    }

    const carousel = container.querySelector('[data-meishi-carousel]');
    if (carousel) {
      const track = carousel.querySelector('.meishi-carousel-track');
      const slides = Array.from(carousel.querySelectorAll('.meishi-carousel-slide'));
      const dots = Array.from(carousel.querySelectorAll('.meishi-carousel-dots button'));
      const current = carousel.querySelector('.meishi-carousel-count b');
      let carouselIndex = 0;
      const showSlide = function (nextIndex) {
        carouselIndex = (nextIndex + slides.length) % slides.length;
        track.style.transform = 'translateX(-' + carouselIndex * 100 + '%)';
        slides.forEach(function (slide, index) { slide.setAttribute('aria-hidden', String(index !== carouselIndex)); });
        dots.forEach(function (dot, index) { if (index === carouselIndex) dot.setAttribute('aria-current', 'true'); else dot.removeAttribute('aria-current'); });
        current.textContent = String(carouselIndex + 1).padStart(2, '0');
      };
      const stopCarousel = function () {
        if (!window.__meishiCarouselTimer) return;
        window.clearInterval(window.__meishiCarouselTimer);
        window.__meishiCarouselTimer = null;
      };
      const startCarousel = function () {
        stopCarousel();
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        window.__meishiCarouselTimer = window.setInterval(function () {
          if (!carousel.isConnected) { stopCarousel(); return; }
          showSlide(carouselIndex + 1);
        }, 4200);
      };
      carousel.querySelector('[data-carousel-prev]').addEventListener('click', function () { showSlide(carouselIndex - 1); startCarousel(); });
      carousel.querySelector('[data-carousel-next]').addEventListener('click', function () { showSlide(carouselIndex + 1); startCarousel(); });
      dots.forEach(function (dot, index) { dot.addEventListener('click', function () { showSlide(index); startCarousel(); }); });
      carousel.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        showSlide(carouselIndex + (event.key === 'ArrowRight' ? 1 : -1));
        startCarousel();
      });
      carousel.addEventListener('mouseenter', stopCarousel);
      carousel.addEventListener('mouseleave', startCarousel);
      carousel.addEventListener('focusin', stopCarousel);
      carousel.addEventListener('focusout', startCarousel);
      showSlide(0);
      startCarousel();
    }

    const revealTargets = container.querySelectorAll('.meishi-case section, .meishi-metrics article, .meishi-decisions article, .meishi-phase-grid article, .meishi-contest-metrics article');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });
      revealTargets.forEach(function (target, index) {
        target.classList.add('meishi-reveal');
        target.style.setProperty('--meishi-delay', (index % 4) * 45 + 'ms');
        observer.observe(target);
      });
    }
    window.sw('pDt');
  }

  window.goDt = function (id) {
    if (id === 'a') {
      renderEastLakeCase();
      return;
    }
    if (id === 'h') {
      renderLiantouCase();
      return;
    }
    if (id === 'd') {
      renderZhiyuCase();
      return;
    }
    if (id === 'm') {
      renderMeishiCase();
      return;
    }
    const legacyBack = document.getElementById('bDt');
    if (legacyBack) legacyBack.hidden = false;
    legacyGoDt(id);
  };

  function attachCaseStudyEntry() {
    const caseList = document.getElementById('cL');
    if (!caseList) return;
    caseList.addEventListener('click', function (event) {
      const card = event.target.closest('[data-detail="a"], [data-detail="h"], [data-detail="d"], [data-detail="m"]');
      if (!card) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      if (card.dataset.detail === 'h') renderLiantouCase();
      else if (card.dataset.detail === 'd') renderZhiyuCase();
      else if (card.dataset.detail === 'm') renderMeishiCase();
      else renderEastLakeCase();
    }, true);
    caseList.addEventListener('keydown', function (event) {
      const card = event.target.closest('[data-detail="a"], [data-detail="h"], [data-detail="d"], [data-detail="m"]');
      if (!card || (event.key !== 'Enter' && event.key !== ' ')) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      if (card.dataset.detail === 'h') renderLiantouCase();
      else if (card.dataset.detail === 'd') renderZhiyuCase();
      else if (card.dataset.detail === 'm') renderMeishiCase();
      else renderEastLakeCase();
    }, true);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attachCaseStudyEntry);
  else attachCaseStudyEntry();
}());
