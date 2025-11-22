export const portfolioData = {
  summary: `주로 백엔드 개발을 담당하며 Node.js와 Java(Spring)를 다루는 3년차 서버 개발자입니다. ASO 분석 플랫폼, OP.GG 게임센터, B2B 물류 시스템 등 다양한 프로젝트를 통해 서버 아키텍처 설계부터 API 개발, 성능 최적화까지 경험했습니다. 일부 프로젝트에서는 React 기반의 프론트엔드 개발에도 참여하며 풀스택 역량을 길렀습니다. 새로운 기술 학습에 열려 있으며, 안정적인 백엔드 개발 역량을 기반으로 프론트엔드 및 다양한 기술 영역으로 경험을 확장해 나가는 것을 목표로 하고 있습니다.`,
  skills: [
    'Java', 'JavaScript (ES6+)', 'Spring Boot', 'Spring MVC', 'Python', 'MyBatis', 
    'Node.js', 'Express.js', 'Koa.js', 'MySQL/MariaDB', 'MongoDB', 'Redis', 
    'Docker', 'JWT', 'Passport.js', 'AWS', 'OCI'
  ],
  projects: [
    {
      title: 'ASO (App Store Optimization) 서비스 백엔드',
      description: 'Node.js와 Express 기반으로 구축된 앱 스토어 최적화(ASO) API 서버',
      duration: '2022.11 ~ 2023.11 ( 1년 )',
      url: 'https://www.asoindex.io/ko',
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
      title: '(OP.GG) 게임센터 서비스 개발',
      description: '게임사 등록/검수 사이트 및 유저용 플랫폼 API 개발',
      duration: '2024.03 ~ 2024.06 ( 4개월 )',
      features: [
        '게임 정보 등록/검수 웹 플랫폼 개발',
        '유저용 게임 정보 조회 및 피드백(댓글/반응) API 개발',
        'OCI 클라우드 스토리지 연동 및 이메일 인증(nodemailer) 기능 구현',
        'JWT 기반 SSO 로그인 기능 구현',
      ],
      techStack: ['Express.js', 'MySQL', 'Prisma', 'OCI', 'JWT'],
    },
    {
      title: 'TMS B2B 물류 관리 시스템(루티) 유지보수',
      description: '배송 상태 알림, 데이터 조회/관리 서비스 개발 및 API 성능 개선',
      duration: '2024.09 ~ 2025.05 ( 9개월 )',
      url: 'https://www.roouty.com/',
      features: [
        '배송 상태 변경 시 알림 서비스 및 관리 페이지 개발',
        '배송 정보 기반 운송장 생성 및 관리 페이지 개발',
        'Slack API 연동 업무 자동화 프로그램 개발',
        '데이터베이스 인덱싱 및 로직 개선을 통한 API 응답 속도 향상',
      ],
      techStack: ['Koa.js', 'React', 'MySQL', 'MongoDB', 'Sequelize', 'NCP Notification Service', 'S3'],
    },
    {
      title: 'CJ 프레시웨이 ERP 물류 관리 시스템 내 루티 서비스 내재화',
      description: 'CJ 프레시웨이 ERP 시스템 내 루티 서비스 통합 및 배차 최적화 API 개발',
      duration: '2025.09 ~ 2025.11 ( 3개월 )',
      features: [
        '폴리곤 기반 권역 데이터 수집 및 저장/조회 API 개발',
        '배차 최적화 엔진과 통신 데이터 정규화 및 경로 폴리라인 생성/저장',
        '배차 관련 데이터 저장/조회 API 개발',
      ],
      techStack: ['Java 17', 'Spring Boot 3', 'MyBatis', 'Oracle'],
    },
  ],
};
