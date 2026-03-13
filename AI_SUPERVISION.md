# AI_SUPERVISION.md

## AI Agent Operational Rules

This repository is maintained with automated AI agents.  
All agents must follow these rules when modifying code, configuration, or deployments.

The goal is to prevent broken builds, routing failures, and deployment drift.

---

## Project Stack

Vite  
React  
Vercel Hosting  
GitHub Repository  
Linear Issue Tracking

Production build structure:

vite build → dist/  
vercel serves → dist/  
dist/index.html → SPA fallback

---

## Critical Build Alignment

The following configuration **must always match**.

### vite.config.ts

build.outDir = "dist"

### vercel.json

outputDirectory = "dist"

If these diverge, Vercel will deploy a broken site.

Agents must verify alignment before committing any change.

---

## SPA Routing Requirement

The project uses client-side routing.

Vercel must rewrite unknown routes to:

/index.html

Expected configuration example:

```json
{
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

Agents must confirm routing works after deployment.

---

## Required Repository Structure

Repository root must contain:

package.json
vite.config.ts
vercel.json
src/
public/

The production build must output:

dist/index.html
dist/assets/

---

## Build Verification

After modifying configuration agents must verify:

npm install
npm run build

The build must generate:

dist/index.html

If build fails, changes must not be committed.

---

## Commit Rules

Configuration changes must include a clear commit message.

Example:

fix: align vite build output with vercel outputDirectory

Commit message must explain:

reason
files changed
deployment impact

---

## Deployment Safety Check

Before deploying agents must confirm:

vite.config.ts → build.outDir
vercel.json → outputDirectory
package.json → build script

All must align with the dist directory.

---

## Agent Verification Rule

When an AI agent claims a fix, another verification pass must confirm:

commits exist
configuration actually changed
build succeeds
deployment config matches

Agents must never assume another agent completed work correctly.

---

## Linear Issue Tracking

Major changes must reference a Linear issue.

Examples:

Routing fixes
Build configuration changes
Deployment failures
Infrastructure updates

If work occurs without an issue, create one.

---

## Forbidden Actions

Agents must NOT:

change the build directory
change the Vercel output directory
remove SPA routing fallback
commit broken builds
deploy without verification

---

## If Configuration Breaks

Agents must repair the following files with full corrected versions:

vite.config.ts
vercel.json
package.json

Partial snippets are not allowed.

---

## Agent Responsibility

Before claiming a fix is complete agents must verify:

build configuration
deployment configuration
routing behavior
commit history

---

## Purpose

This document ensures automated agents operate safely in this repository and prevents deployment failures caused by configuration drift.

---

### Commit command

Use this:

```bash
git add AI_SUPERVISION.md
git commit -m "fix: replace AI_SUPERVISION.md with repository AI supervision contract"
git push
```

After this commit, any AI agent reading the repo context (Manus, Copilot, etc.) will see the operational rules first.
