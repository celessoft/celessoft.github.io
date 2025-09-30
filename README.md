# CelesSoft GitHub Pages

CelesSoft의 공식 웹사이트입니다.

## 🚀 배포 방법

### GitHub Pages 자동 배포

1. **GitHub 저장소 생성**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/celessoft/celessoft.github.io.git
   git push -u origin main
   ```

2. **GitHub Pages 설정**
   - GitHub 저장소 → Settings → Pages
   - Source: "GitHub Actions" 선택
   - 저장소에 코드를 push하면 자동으로 배포됩니다.
   - 배포 URL: `https://celessoft.github.io`

### 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 정적 파일 생성 (GitHub Pages용)
npm run export
```

## 📁 프로젝트 구조

```
├── src/
│   ├── app/
│   │   ├── page.tsx          # 메인 페이지
│   │   ├── privacy/
│   │   │   └── page.tsx      # 개인정보처리방침 페이지
│   │   └── layout.tsx        # 레이아웃
│   └── components/
│       └── ui/               # shadcn/ui 컴포넌트들
├── public/
│   └── CelesSoft.png         # 로고 이미지
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions 워크플로우
└── next.config.ts            # Next.js 설정
```

## 🛠️ 기술 스택

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Language**: TypeScript
- **Deployment**: GitHub Pages

## 🌐 배포 URL

- **웹사이트**: https://celessoft.github.io
- **개인정보처리방침**: https://celessoft.github.io/privacy

## 📧 연락처

- **이메일**: celessoft.team@gmail.com

## 📄 라이선스

© 2025 CelesSoft. All rights reserved.
