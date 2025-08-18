export const sections = {
  1: [
    {
      number: 1,
      title: "웹 개발 개요",
      content: "웹 개발은 웹사이트와 앱을 만드는 과정입니다.",
    },
    {
      number: 2,
      title: "분야 구분",
      content: "프론트엔드와 백엔드로 나뉩니다.",
      children: [
        { number: "2.1", title: "프론트엔드", content: "UI/UX와 화면 구성 담당." },
        { number: "2.2", title: "백엔드", content: "서버 로직과 데이터 처리 담당." },
      ],
    },
    {
      number: 3,
      title: "개발 환경",
      content: "효율적인 개발을 위해 다양한 툴과 프레임워크를 사용합니다.",
      children: [
        { number: "3.1", title: "IDE/에디터", content: "VSCode, WebStorm 등 사용." },
      ],
    },
  ],
  2: [
    {
      number: 1,
      title: "프론트엔드 개요",
      content: "사용자 화면과 상호작용을 개발합니다.",
    },
    {
      number: 2,
      title: "주요 역할",
      content: "화면 렌더링과 이벤트 처리.",
      children: [
        { number: "2.1", title: "UI 구성", content: "화면 설계와 스타일링." },
        { number: "2.2", title: "동적 기능", content: "사용자 입력과 상태 관리." },
      ],
    },
  ],
  3: [
    {
      number: 1,
      title: "백엔드 개요",
      content: "서버와 DB를 관리하며, 비즈니스 로직과 보안 담당.",
    },
    {
      number: 2,
      title: "주요 구성 요소",
      content: "서버, DB, API 등으로 구성됩니다.",
      children: [
        { number: "2.1", title: "서버", content: "클라이언트 요청 처리와 응답 반환." },
        { number: "2.2", title: "데이터베이스", content: "데이터 저장, 검색 및 관리." },
      ],
    },
    {
      number: 3,
      title: "보안 및 인증",
      content: "인증과 권한 관리가 중요합니다.",
      children: [
        { number: "3.1", title: "인증", content: "JWT, OAuth2 등 구현." },
      ],
    },
  ],
  4: [
    {
      number: 1,
      title: "풀스택 개발 개요",
      content: "프론트엔드와 백엔드를 모두 다룹니다.",
    },
    {
      number: 2,
      title: "역할과 장점",
      content: "전체 시스템 이해와 통합 개발 가능.",
      children: [
        { number: "2.1", title: "프론트엔드 통합", content: "UI/UX와 로직 최적화." },
      ],
    },
    {
      number: 3,
      title: "백엔드 통합",
      content: "서버, DB, API 통신 효율적으로 설계.",
      children: [
        { number: "3.1", title: "서버 관리", content: "트래픽 관리와 최적화." },
      ],
    },
  ],
  5: [
    {
      number: 1,
      title: "웹 개발 최신 트렌드",
      content: "SPA, PWA 등 최신 기술 적용.",
    },
    {
      number: 2,
      title: "핵심 기술",
      content: "React, Vue, Node.js 등 활용.",
      children: [
        { number: "2.1", title: "SPA", content: "빠른 사용자 경험 제공." },
        { number: "2.2", title: "PWA", content: "앱과 유사한 경험 제공." },
      ],
    },
  ],
};
