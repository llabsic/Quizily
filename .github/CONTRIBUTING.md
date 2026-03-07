[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?logo=github)](CONTRIBUTING.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-API-412991?logo=openai)](https://openai.com/)

# Contributing to Quizily 🧠

**AI-powered quiz generation requires strict quality standards. All contributions must follow these guidelines.**

## Table of Contents
<!-- - [Code of Conduct](#code-of-conduct) -->
- [Branching Strategy](#branching-strategy)
- [Issue Guidelines](#issue-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
<!--
- [AI Integration Standards](#ai-integration-standards)
- [Code Standards](#code-standards)
- [Testing Requirements](#testing-requirements)
- [Security & Privacy](#security--privacy)
-->

<!-- 
## Code of Conduct
See our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Be respectful, constructive, and mindful that Quizily is used by learners worldwide.
-->

## Branching Strategy
**All branches MUST follow this exact naming convention:**

| Prefix | Purpose | Example |
|--------|---------|---------|
| `feat/` | New features | `feat/ai-quiz-difficulty-levels` |
| `fix/` | Bug fixes | `fix/supabase-auth-redirect` |
| `ai/` | AI prompt/model changes | `ai/improve-question-generation` |
| `docs/` | Documentation | `docs/api-integration-guide` |
| `chore/` | Build process, tooling | `chore/update-nextjs-15` |
| `refactor/` | Code refactoring | `refactor/quiz-state-management` |
| `test/` | Adding missing tests | `test/ai-response-parser` |
| `perf/` | Performance improvements | `perf/stream-quiz-generation` |
| `security/` | Security fixes | `security/rate-limit-openai` |

**Rules:**
- Branch from `main` only
- Prefix required for ALL feature branches
- Use kebab-case after prefix
- Delete branch after merge
- Never commit directly to `main`
- **AI-related changes MUST use `ai/` prefix** for tracking prompt iterations

## Issue Guidelines

### Creating Issues
1. **Search existing issues** before creating new ones
2. **Use the appropriate template** (bug report, feature request, AI improvement, question)
3. **PRs will be closed without discussion** if they don't reference a valid issue

### Bug Reports **MUST** include:
```markdown
**Environment**
- Node: v20.x or higher
- Next.js: 16.x 
- Package Manager: PNPM
- OS: macOS/Windows/Linux
- Browser: Chrome/Safari/Firefox/Edge

**Current Behavior**
Clear description of what happens

**Expected Behavior** 
Clear description of what should happen

**Steps to Reproduce**
1. Step 1
2. Step 2
3. Step 3

**Minimal Reproduction**
[GitHub repo or CodeSandbox link]

**AI Context (if applicable)**
- Gemini (default) 
<!-- - OpenAI Model used: gpt-4o/gpt-4o-mini -->
- Prompt version (if known)
```

### Pull Request Guidelines

1. **Before working on code, ensure no existing pull request already addresses your changes.** 
2. **Before creating a Pull Request, ensure the build succeeds and preview correctly works.**
3. **Must write summery for code changes and commits**

### Development Setup

```bash
# Clone and install
git clone https://github.com/YOUR_USERNAME/forked-quizily.git 
cd quizily
pnpm ci
```
Add Enviroments Variables
```bash
cp .env.example .env.local

# Add your secrets to .env.local
OPENAI_API_KEY=sk-...
NEXT_PUBLIC_SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
SUPABASE_ANON_KEY=...
```
Run Development Mode
```bash
pnpm run dev
```
Test Everything
```bash
pnpm test
pnpm run lint
pnpm run build
```
