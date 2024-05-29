### [실행 방법]
```bash
# npm 설치
npm install

# json sever 실행
npm run start-json-server

# react 실행
npm start
```

### Skills
- 코어: typescript, React
- 상태관리: redux, redux-toolkit
- 스타일링: tailwind
- 버전관리: github
- 서버통신: axios
- 빌드: create-react-app

### Used Library
- react-router-dom : 페이지 이동
- redux : 상태관리
- redux-toolkit : 상태관리
- sweet-alert : alert, confirm 인터렉션
- axios: 서버 통신
- json-server: 임시 서버
- react-datepicker: 이벤트 날짜 선택

### 기능 구현
- 이벤트 목록 페이지네이션
    - 한 페이지에 8개 이벤트 노출
    - 상세페이지 진입 후 뒤로가기시 기존 페이지 유지
- 날짜별 검색 기능
    - 검색된 상태에서 상세 페이지 이동 후 목록 페이지 돌아와도 검색 유지
- 날짜 기준 정렬
- 이벤트명 검색 기능
- 이벤트 추가 및 수정
    - 추가 완료 후 목록 페이지 이동
    - 수정 완료 후 수정된 상세 화면 표시(목록으로 이동x)
- 이벤트 삭제 기능
- D-day 추가(지난 날짜는 배경색 어둡게 작업)

### Coding Convention

- 함수 선언

  ```
  // 화살표 함수
  const action = () => {}
  ```

- 함수 네이밍

  ```
  // 생성
  const createData = () => {}
  // 수정
  const updateData = () => {}
  // 삭제
  const removeData = () => {}
  // 조회
  const getData = () => {}

  // 이벤트 함수: 앞에 handle 붙일것
  // 클릭
  const handleClick = () => {}
  // 변경
  const handleChange = () => {}
  ```