export const portfolioData = {
  summary: `다양한 기술 스택과 아키텍처를 경험하며 비즈니스 요구사항에 맞는 최적의 솔루션을 구현하는 백엔드 개발자입니다. Node.js(Express, Koa) 기반의 빠른 프로토타이핑 및 MSA 환경 구축 능력과 Java(Spring Boot) 기반의 안정적인 엔터프라이즈급 시스템 설계 및 개발 능력을 모두 보유하고 있습니다. 특히 복잡한 도메인에 대한 이해를 바탕으로 데이터베이스를 설계하고 외부 서비스를 연동하여 비즈니스 가치를 창출하는 데 강점이 있습니다.`,
  skills: [
    'Java', 'JavaScript (ES6+)', 'SQL', 'Spring Boot', 'Spring MVC', 'MyBatis', 
    'Node.js', 'Express.js', 'Koa.js', 'MySQL/MariaDB', 'MongoDB', 'Redis', 
    'Docker', 'Gradle', 'PM2', 'Sentry', 'Jest', 'JUnit 5', 'JWT', 
    'Passport.js', 'AWS', 'OCI', 'NCP', 'Stripe', 'Google Maps API', 'OpenAI API'
  ],
  projects: [
    {
      title: 'ASO (App Store Optimization) 서비스 백엔드',
      description: 'Node.js와 Express 기반으로 구축된 앱 스토어 최적화(ASO) API 서버',
      duration: '2022.11 ~ 2023.11 ( 1년 )',
      features: [
        '통합 인증 시스템 구축 (Passport.js, JWT, 소셜 로그인)',
        '결제 및 구독 서비스 연동 (Stripe API)',
        '데이터 형태소 분석 API 개발 (Python / 은전한닢 프로젝트 기반)',
        'ASO 분석 API 개발 및 외부 스크래퍼 연동',
        'AI 기반 추천 기능 도입 (OpenAI API)',
        '클라우드 스토리지 연동 (OCI, NCP)',
        'PM2를 이용한 프로덕션 환경 운영 및 무중단 서비스 구성',
      ],
      techStack: ['Node.js', 'Express.js', 'MySQL', 'Redis', 'Passport.js', 'JWT', 'Stripe API', 'OpenAI API', 'PM2', 'Python'],
    },
    {
      title: 'OP.GG 게임센터 서비스 개발',
      description: 'Node.js Express 기반 개발사 게임 등록 / 조회 / 검수 사이트 개발',
      duration: '2024.03 ~ 2024.06 ( 4개월 )',
      features: [
        'nodemailer 기반 메일 전송 API 개발',
        '클라우드 스토리지 연동 (OCI) / 파일 업로드 서비스',
        '관리자 페이지 기능 개발',
      ],
      techStack: ['Node.js', 'Express.js', 'MySQL', 'JWT'],
    },
    {
      title: '위밋모빌리티 - TMS B2B 물류 운송 관리 시스템(루티) 유지보수',
      description: 'Koa.js 기반의 B2B TMS 백엔드 API 서버',
      duration: '2024.09 ~ 2025.05 ( 9개월 )',
      features: [
        '배송 상태 변경시 웹훅 기반 알림톡 발송 서비스 구현',
        '외부 서비스 연동 허브 구축 (Google Maps, AWS, Slack)',
        '스케줄링 및 배치 작업 구현 (node-cron)',
        '배송 정보 기반 운송장 PDF 생성 서비스 구현',
        '실시간 모니터링 및 로깅 시스템 구축 (Sentry, Winston)',
        'API 문서 자동화 (OpenAPI/Swagger)',
      ],
      techStack: ['Node.js', 'Koa.js', 'MySQL', 'MongoDB', 'Sequelize', 'Mongoose', 'Google Maps API', 'Docker'],
    },
    {
      title: 'CJ 프레시웨이 - TMS 물류 시스템',
      description: 'Java / Spring Boot 기반, 프레시웨이 TMS 내부 배차 최적화 (루티) 서비스 내재화 작업',
      duration: '2025.09 ~ 2025.11 ( 3개월 )',
      features: [
        'Java 17, Spring Boot 3 기반의 안정적인 엔터프라이즈 백엔드 구축',
        '폴리곤 기반 권역 데이터 제공 ORACLE SDO_GEOMETRY 공간 데이터 사용',
        '배차 최적화 엔진(Vroom) 과 통신 및 데이터 정규화 / TMap API 활용 경로 폴리라인 생성 및 저장',
        '객체 지향적 도메인 모델링 및 데이터 무결성 확보 (Spring Validation)',
      ],
      techStack: ['Java 17', 'Spring Boot 3', 'MyBatis', 'ORACLE'],
    },
  ],
};
