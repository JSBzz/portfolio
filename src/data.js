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
      description: 'Node.js와 Express 기반으로 구축된 앱 스토어 최적화(ASO) 솔루션의 핵심 백엔드 API 서버',
      features: [
        '통합 인증 시스템 구축 (Passport.js, JWT, 소셜 로그인)',
        '결제 및 구독 서비스 연동 (Stripe API)',
        'ASO 분석 API 개발 및 외부 스크래퍼 연동',
        'AI 기반 추천 기능 도입 (OpenAI API)',
        '클라우드 스토리지 연동 (OCI, NCP)',
        'PM2를 이용한 프로덕션 환경 운영 및 무중단 서비스 구성',
      ],
      techStack: ['Node.js', 'Express.js', 'MySQL', 'Redis', 'Passport.js', 'JWT', 'Stripe API', 'OpenAI API', 'PM2'],
    },
    {
      title: 'B2B 물류 운송 관리 시스템 (TMS) API',
      description: 'Koa.js 기반의 고성능 B2B TMS API 서버로, 여러 외부 서비스를 연동하는 중앙 허브 역할 수행',
      features: [
        'Polyglot Persistence 아키텍처 설계 (MySQL + MongoDB)',
        '외부 서비스 연동 허브 구축 (Google Maps, AWS, Slack, Firebase)',
        '스케줄링 및 배치 작업 구현 (node-cron)',
        '실시간 모니터링 및 로깅 시스템 구축 (Sentry, Winston)',
        'API 문서 자동화 (OpenAPI/Swagger)',
      ],
      techStack: ['Node.js', 'Koa.js', 'MySQL', 'MongoDB', 'Sequelize', 'Mongoose', 'Google Maps API', 'AWS SDK', 'Sentry', 'Docker'],
    },
    {
      title: '엔터프라이즈 창고 관리 시스템 (WMS) 백오피스 API',
      description: 'Java와 Spring Boot 기반으로 설계된 안정성과 확장성에 초점을 맞춘 엔터프라이즈 WMS 백오피스 API',
      features: [
        'Java 17, Spring Boot 3 기반의 안정적인 엔터프라이즈 백엔드 구축',
        'MyBatis를 통한 복잡한 SQL 쿼리 최적화',
        '객체 지향적 도메인 모델링 및 데이터 무결성 확보 (Spring Validation)',
        '높은 코드 품질 유지 (Lombok, JUnit 5)',
        'Gradle을 이용한 빌드 및 테스트 자동화',
      ],
      techStack: ['Java 17', 'Spring Boot 3', 'MyBatis', 'Gradle', 'JUnit 5', 'Lombok'],
    },
  ],
};
