# CI/CD Pipeline Demo with Git

This repository demonstrates a complete CI/CD workflow using Git and GitHub Actions. It's designed as an educational resource to understand how modern development teams collaborate and deploy software.

## Learning Objectives

- Understand Git branching strategies
- Learn the Pull Request workflow
- See how CI/CD pipelines automate testing and deployment
- Practice the complete flow from clone to production

---

## Complete Workflow: From Clone to Merge

**Scenario:** Adding a new feature to a project

### Step-by-Step Guide

#### 1. Clone the Repository
```bash
git clone https://github.com/company/web-app.git
cd web-app
```

#### 2. Create a Feature Branch
```bash
git checkout -b feature/user-profile
```
> Always create a new branch for your work. Never commit directly to `main`.

#### 3. Make Changes
Edit files and add new functionality. For example, edit `profile.js`:
```javascript
// Add user profile display functionality
function displayUserProfile(user) {
    return `Welcome, ${user.name}!`;
}
```

#### 4. Check Status
```bash
git status
```
See what files have been changed, added, or deleted.

#### 5. Stage Changes
```bash
git add profile.js
# Or stage all changes:
git add .
```

#### 6. Commit Your Changes
```bash
git commit -m "feat: Add user profile display functionality"
```
> Use [Conventional Commits](https://www.conventionalcommits.org/) for clear history.

#### 7. Push to GitHub
```bash
git push -u origin feature/user-profile
```

#### 8. Create Pull Request
- Go to GitHub web interface
- Click "Compare & pull request"
- Add description and reviewers
- Submit the PR

#### 9. CI/CD Runs Automatically
Once the PR is created, the pipeline automatically:
- Runs tests
- Performs linting
- Executes security scans
- Builds the application

#### 10. Code Review
- Team members review your code
- Address feedback with new commits
- Get approval from reviewers

#### 11. Merge PR on GitHub
- Click "Merge pull request"
- Choose merge strategy (merge commit, squash, rebase)
- Delete the feature branch

#### 12. Update Local Main
```bash
git checkout main
git pull origin main
```

#### 13. Deploy to Staging
CI/CD automatically deploys to staging environment after merge.

#### 14. Deploy to Production
After approval/validation, CI/CD deploys to production.

---

## Project Structure

```
├── .github/
│   └── workflows/
│       └── ci-cd.yml      # GitHub Actions pipeline
├── src/
│   ├── index.html         # Main HTML file
│   ├── app.js             # Main application logic
│   └── profile.js         # User profile module
├── tests/
│   └── app.test.js        # Unit tests
├── package.json           # Project dependencies
└── README.md              # This file
```

---

## Git Branching Strategy

```
main ────●────●────●────●────●────●──── (production-ready)
          \        \        /    /
           \        \      /    /
feature/    ●────●───●    /    /
user-profile              /    /
                         /    /
feature/    ●────●──────●    /
settings                    /
                           /
hotfix/     ●─────────────●
bug-fix
```

### Branch Types

| Branch | Purpose | Example |
|--------|---------|---------|
| `main` | Production-ready code | - |
| `feature/*` | New features | `feature/user-profile` |
| `bugfix/*` | Bug fixes | `bugfix/login-error` |
| `hotfix/*` | Urgent production fixes | `hotfix/security-patch` |

---

## CI/CD Pipeline Stages

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│    BUILD    │───▶│    TEST     │───▶│   DEPLOY    │───▶│  PRODUCTION │
│             │    │             │    │  (Staging)  │    │             │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
      │                  │                  │                  │
      ▼                  ▼                  ▼                  ▼
  Install deps      Run tests         Deploy to          Deploy to
  Lint code         Coverage          staging env        production
  Build app         Security scan     Smoke tests        Monitor
```

---

## Commands Reference

### Daily Workflow
```bash
# Start your day - update main
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/my-feature

# Work, commit, repeat
git add .
git commit -m "feat: description"

# Push and create PR
git push -u origin feature/my-feature
```

### Useful Commands
```bash
# See branch history
git log --oneline --graph --all

# See current status
git status

# See differences
git diff

# Switch branches
git checkout branch-name

# Delete local branch
git branch -d feature/my-feature
```

---

## Conventional Commits

Use these prefixes for clear commit messages:

| Prefix | Usage |
|--------|-------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation |
| `style:` | Formatting (no code change) |
| `refactor:` | Code refactoring |
| `test:` | Adding tests |
| `chore:` | Maintenance tasks |

**Examples:**
```
feat: Add user authentication
fix: Resolve login timeout issue
docs: Update API documentation
refactor: Simplify database queries
```

---

## Exercise: Try It Yourself!

1. Fork this repository
2. Clone your fork locally
3. Create a branch `feature/add-greeting`
4. Add a new function in `src/app.js`
5. Commit with a proper message
6. Push and create a PR
7. Watch the CI/CD pipeline run!

---

## Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

## License

MIT License - Feel free to use this for educational purposes.
