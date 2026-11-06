/* Static bilingual portfolio. All translations are local; no third-party services. */
(() => {
  'use strict';
  const ko = {
    navAbout:'소개',navResearch:'연구',navPapers:'논문',navOutputs:'연구성과',navContact:'연락처',
    heroEyebrow:'수치수리학 · 도시침수 예측',heroTitle1:'더 빠르고,',heroTitle2:'더 신뢰할 수 있는',heroTitle3:'도시침수 예측을 위해.',
    heroLead:'1D–2D 연계 도시침수 수치모형을 개발하고, GPU 연산·병렬처리·혼합정밀도 기법을 적용하여 계산효율을 높이는 연구를 수행합니다.',
    exploreResearch:'연구 살펴보기',seePublications:'논문 보기',affiliation:'한국건설기술연구원 (KICT)<br/>경기도 고양시, 대한민국',visualStatus:'모형 개념도',visualBottom:'연계 수리해석 · 계산 가속',scrollLabel:'아래로 스크롤',
    metricPapers:'제1저자 학술지 논문',metricPapersSub:'출판정보 확인 · 2024–2026',metricSpeed:'GPU 연산 가속 사례',metricSpeedSub:'특정 GPU–CPU 비교실험 · HIC 2026',metricPatent:'국내 등록특허',metricPatentSub:'이중배수 홍수예보 · 공동발명',
    sectionAbout:'연구자 소개',aboutEyebrow:'연구 소개',aboutTitle:'수치해석에서 실시간 홍수예측까지.',
    aboutBody1:'한국건설기술연구원(KICT)에서 도시 수리학, 수치모형 개발, 고성능 컴퓨팅을 접목한 연구를 수행하는 심상보입니다.',
    aboutBody2:'EPA-SWMM 기반 1차원 관망 유동과 2차원 지표 유동을 연계하고, 수리학적 정확성을 검증하며, 물리 기반 도시침수 수치모의를 실제 예측 업무에 적용 가능한 속도로 개선하는 데 집중합니다.',
    expertiseLabel:'핵심 전문분야',expertise1:'1D–2D 이중배수 연계모형',expertise2:'유한체적법 기반 수리해석',expertise3:'GPU 계산 및 병렬화',expertise4:'수치정확도 및 안정성',expertise5:'실시간 도시침수 예측',
    sectionResearch:'연구',researchTitle:'물리 기반 모형에서 출발합니다.',researchIntro:'신뢰할 수 있는 연계 수치모형, 확장 가능한 고성능 연산, 차세대 예측기술이라는 세 방향을 연구합니다.',
    proj1Sub:'1D–2D 도시침수 통합 수치모의',proj1Body:'1차원 관망 동역학파 해석과 2차원 지표 유한체적 해석을 연계합니다. 맨홀 월류 및 재유입, 강우 적용방식, 동기화, 모형 검증, 관망 간소화 등을 연구합니다.',
    proj2Sub:'수리해석 계산의 고속화',proj2Body:'CPU–GPU 이기종 컴퓨팅, 병렬 영역분할, 혼합정밀도 연산을 통해 수치적 안정성과 질량보존, 수리학적 정확도를 점검하면서 계산시간을 단축합니다.',
    proj3Sub:'물리–AI 하이브리드 모형 · 진행 중',proj3Body:'Gated-CNN 기반 침수예측 공동연구를 바탕으로 관망 그래프 기반 서로게이트와 물리정보 학습을 탐색합니다. 수리학적 구조와 제약조건을 유지하면서 예측속도를 높이는 것이 목표입니다.',
    viewResearch:'연구성과 소개',readStudy:'관련 논문 읽기',workInProgress:'진행 중인 연구',
    featureEyebrow:'대표 연산 성능 사례',featureTitle:'6시간의 강우사상.<br/>수치모의는 수분 이내로.',featureBody:'준실시간 도시침수 예측에는 신뢰성 있는 물리모형과 효율적인 계산이 모두 필요합니다. 본 페이지의 계산시간과 가속비는 각 논문 및 학회 발표의 특정 조건에서 확인된 값입니다.',viewHic:'HIC 2026 발표 초록',timelineRain:'실제 강우사상 지속시간',timelineSim:'수치모의 수행시간 사례',chartNote:'* 개념적 비교도이며 약 8분은 특정 연구 사례의 결과입니다. 모든 조건에 적용되는 값이 아닙니다.',
    sectionPublications:'논문',publicationsTitle:'주요 학술지 논문.',publicationsIntro:'1D–2D 연계, 수치정확도, 최적화, GPU 가속을 포괄하는 제1저자 학술지 논문 9편과 공동저자 논문 1편입니다.',filterAll:'전체',paperPrecision:'혼합정밀도 · GPU 계산',paperValidation:'모형 비교·검증 · 침수예측',paperGrid:'관망 간소화 · 격자해상도',paperRain:'지표강우 · 소유역강우',paperRough:'지표 조도계수 · 계산효율',paperSewer:'관망 특성 · 강우유출',paperCoupling:'1D–2D 연계 · 고정시간 동기화',paperGated:'공동저자 · Gated-CNN 서로게이트',paperBuildings:'도시 건축물 · 침수모의 효율',paperResolution:'격자해상도 · 관망 간소화',pubFoot:'출판사 및 학회에 등록된 서지정보 기준입니다. 논문명은 공식 영문 표기를 유지합니다.',bibDownload:'BibTeX 내려받기',
    sectionOutputs:'연구성과',outputsTitle:'논문을 넘어선 연구성과.',outputsIntro:'국제학회 발표, 등록특허, 연구용 소프트웨어 성과를 소개합니다.',talksTitle:'국제학회 발표',talkHic:'제16회 국제 수문정보학회 · 구두발표',talkIemss:'국제 환경모델링 및 소프트웨어 학회 · 구두발표',talkIahr:'아시아·태평양 수리학회 · 포스터 발표',patentTitle:'특허 및 연구모형',patentRegistered:'국내 등록특허',patentLink:'특허 원문',modelHeading:'물리 기반 연계 도시침수모형',modelPara:'1D–2D 도시침수모형과 계산 흐름을 소개하는 한국건설기술연구원 공식 연구성과 자료입니다.',kictOutcome:'KICT 연구성과',
    trackConferences:'학술발표 이력',trackPatents:'특허 이력',trackSoftware:'연구 소프트웨어',
    conferenceHeading:'국내외 학술발표 및 프로시딩',conferenceDescription:'학회 초록·프로그램·기관 연구성과에 기록된 발표 이력입니다. 구두발표, 포스터, 초록 및 프로시딩 기여를 구분합니다.',filterAllTalks:'전체 연도',
    conferenceFootnote:'ABSTRACT 및 PROCEEDINGS 표시는 학술기여 기록을 뜻하며 반드시 본인의 구두발표를 의미하지 않습니다. 학회명이 확인되지 않은 항목은 기관 기록으로 표시했습니다.',
    patentHeading:'특허 출원 및 등록',patentDescription:'아래 출원과 등록은 동일한 국내 발명의 연속 단계로, 별개의 특허 2건이 아닙니다.',
    patentGranted:'등록 · 2025년 10월 13일',patentFiled:'출원 · 2024년 10월 30일',patentRegNo:'등록번호',patentInventors:'발명자',patentAssignee:'권리자',viewPatent:'등록특허 확인 ↗',
    filingHeading:'국내 특허 원출원',filingExplanation:'왼쪽 등록특허와 동일한 이중배수 홍수예보 발명의 출원 이력입니다.',patentAppNo:'출원번호',patentStatus:'현재 상태',filingStatus:'2025년 등록 완료 · 별도의 미등록 특허가 아님',viewApplication:'출원·등록 이력 확인 ↗',
    softwareHeading:'도시침수 수치해석 소프트웨어',softwareDescription:'개발에 참여한 연구용 소프트웨어와 공식 프로그램 저작권 등록 여부를 구분합니다.',
    softwareDev:'연구용 소프트웨어 개발',softwareModelDescription:'EPA-SWMM 기반 1차원 관망과 2차원 지표 흐름 및 맨홀 교환을 연계한 도시침수 수치모형입니다.',
    softwareHpcDescription:'CPU–GPU 이기종 연산, MPI 영역분할 및 혼합정밀도 기법을 적용한 고속 수치해석 연구입니다.',
    softwareRegistryPending:'프로그램 저작권 등록번호: 공식 증빙 미확인',softwareOverview:'KICT 연구성과 ↗',softwareHpcPaper:'관련 학술논문 ↗',
    softwareFootnote:'모형 개발 사실은 프로그램 저작권 등록을 의미하지 않습니다. 공식 등록증의 프로그램명·등록번호·권리자를 확인한 뒤 반영할 예정입니다.',
    sectionJourney:'연구 발전과정',journeyTitle:'계속 확장되는 연구주제.',journey1Title:'연계 수치모형 개발',journey1:'1D–2D 연계 알고리즘, 동기화 기법, 관망 간소화에 따른 성능 분석.',journey2Title:'현장 적용성과 검증',journey2:'상용모형 비교, 강우입력 방법, 격자해상도 최적화, 실용적 예측성능 평가.',journey3Title:'고성능 연산으로 확장',journey3:'GPU 가속, 이기종 컴퓨팅, 병렬처리, 혼합 수치정밀도.',journeyFuture:'향후',journey4Title:'물리–AI 하이브리드 예측',journey4:'빠르고 확장 가능한 홍수예측을 위해 서로게이트와 연산기법을 연구합니다.',
    sectionContact:'연락처',contactTitle:'연구로 연결되기를 바랍니다.',contactBody:'이중배수 수리해석, 고성능 수치계산, 수치모형 검증, 도시침수 예측 관련 공동연구와 기술교류를 환영합니다.',emailLabel:'연구용 이메일',institutionLabel:'소속기관',modelRepoLabel:'연구모형 저장소',footerDisclaimer:'개인 연구자 소개 페이지이며, KICT 공식 웹사이트가 아닙니다.',backTop:'맨 위로'
  };
  const en = {};
  const translatable = [...document.querySelectorAll('[data-i18n]')];
  translatable.forEach(el => {en[el.dataset.i18n] = el.innerHTML;});
  const toggle = document.getElementById('language-toggle');
  const current = document.getElementById('current-lang');
  const other = document.getElementById('other-lang');
  const updateLanguage = lang => {
    const dict = lang === 'ko' ? ko : en;
    document.documentElement.lang = lang;
    translatable.forEach(el => {
      const val = dict[el.dataset.i18n];
      if (val !== undefined) el.innerHTML = val;
    });
    current.textContent = lang === 'ko' ? 'KR' : 'EN';
    other.textContent = lang === 'ko' ? 'EN' : 'KR';
    toggle.setAttribute('aria-label',lang === 'ko' ? 'Switch language to English' : '한국어로 전환');
    try {localStorage.setItem('sangbo-site-language',lang);} catch (_) {}
  };
  let initialLanguage = 'en';
  try {initialLanguage = localStorage.getItem('sangbo-site-language') === 'ko' ? 'ko' : 'en';} catch (_) {}
  updateLanguage(initialLanguage);
  toggle.addEventListener('click',()=>updateLanguage(document.documentElement.lang === 'ko' ? 'en' : 'ko'));
  const filterButtons = [...document.querySelectorAll('.filter-btn')];
  const papers = [...document.querySelectorAll('.paper')];
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const year=button.dataset.year;
    filterButtons.forEach(b=>{ const active=b===button; b.classList.toggle('is-active',active); b.setAttribute('aria-pressed',String(active)); });
    papers.forEach(p=>{p.hidden=!(year==='all'||p.dataset.year===year);});
  }));
  const talkFilters=[...document.querySelectorAll('.talk-filter-button')];
  const talks=[...document.querySelectorAll('.talk-record')];
  talkFilters.forEach(button=>button.addEventListener('click',()=>{
    const year=button.dataset.talkFilter;
    talkFilters.forEach(b=>{const active=b===button;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));});
    talks.forEach(t=>{t.hidden=!(year==='all'||t.dataset.talkYear===year);});
  }));
  const mobileToggle=document.getElementById('mobile-toggle');
  const mobileNav=document.getElementById('mobile-nav');
  const closeMobile = () => { mobileNav.hidden=true; mobileToggle.setAttribute('aria-expanded','false'); mobileToggle.setAttribute('aria-label','Open menu');};
  mobileToggle.addEventListener('click',()=>{
    const opening=mobileNav.hidden;
    mobileNav.hidden=!opening;
    mobileToggle.setAttribute('aria-expanded',String(opening));
    mobileToggle.setAttribute('aria-label',opening?'Close menu':'Open menu');
  });
  mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMobile));
  document.getElementById('copyright-year').textContent=new Date().getFullYear();
})();