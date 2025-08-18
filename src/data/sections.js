export const sections = [
  {
    number: 1,
    title: "개요",
    content:
      "Web Back-end\n\n웹 프로그래밍의 한 분야로, 서버에서 사용자의 행동을 처리하고…",
  },
  {
    number: 2,
    title: "이름",
    content: "백엔드란 요청을 받는 서버 프로그램을 지칭하며…",
    children: [
      {
        number: "2.1",
        title: "하위 내용 1",
        content: "DB와 API의 역할…",
      },
      {
        number: "2.2",
        title: "하위 내용 2",
        content: "MVC 패턴 구조…",
      },
    ],
  },
  {
    number: 3,
    title: "장·단점",
    content: "장점: 확장성, 안정성\n단점: 초기 진입장벽이 높음",
  },
  {
    number: 4,
    title: "역사·사례",
    content: "2000년대 초반부터 서버-클라이언트 구조가 본격적으로…",
  },
];
