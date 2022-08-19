# React product app

3학년 1학기 여름방학 프론트엔드 과제

## 목차

[1. 개요](#개요)

[2. 요구 기능](#요구-기능)

[3. 실행 방법](#실행-방법)

## 1. 개요

- 상품 `CRUD` 구현
- `json-server` 를 활용하여 `MOCK API Server` 구현
- `useState`, `useEffect`, `useLocation`, `React Routing` 기능 사용

## 2. 요구 기능

### useState

```typescript
// ShowProduct.tsx

const [isUpdating, setIsUpdating] = useState<boolean>(false);
const [name, setName] = useState<string>("");
const [contents, setContents] = useState<string>("");
```

### useEffect

```typescript
// ShowProduct.tsx

useEffect(() => {
  setName(data?.name + "");
  setContents(data?.contents + "");
}, [data]);
```

### useLocation

```typescript
// HeaderComponent.tsx

const location = useLocation();
```

### React Routing

```typescript
// App.tsx

<Routes>
  <Route path="/" element={<MainComponent />} />
  <Route path="/products" element={<CreateProduct />} />
  <Route path="/products/:id" element={<ShowProduct />} />
</Routes>
```

## 3. 실행 방법

1. `git clone` 명령어로 레포지토리를 클론

```bash
git clone https://github.com/lizill/react-product-app
```

2. 클론한 디렉토리로 이동

```bash
cd react-product-app
```

3. `yarn` 명령어로 패키지 다운로드

```bash
yarn
```

4. `npx` 명령어로 `MOCK API Server` 실행

```bash
npx json-server ./src/db/data.json --port 4000
```

5. 새로운 터미널을 열고, `yarn start` 명령어로 프로젝트 실행

```bash
yarn start
```
