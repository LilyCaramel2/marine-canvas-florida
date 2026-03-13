# AI_DEPLOY_CHECKLIST.md

This checklist must be executed before committing or deploying.

## Build Check

Run:

npm install  
npm run build

Verify the following exists:

dist/index.html  
dist/assets/

If missing, stop and fix the build.

---

## Configuration Alignment

Confirm the following match.

vite.config.ts

build.outDir = "dist"

vercel.json

outputDirectory = "dist"

If they differ, deployment will fail.

---

## Routing Check

Ensure Vercel routes unknown paths to:

/index.html

Example configuration:

{
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}

Without this rule client-side routes will return 404.

---

## Commit Verification

Before committing confirm:

build succeeds  
configuration files match  
routing configuration exists

---

## Deployment Verification

After deployment confirm:

site loads  
client routes load  
no 404 errors occur

---

## Rule

If any step fails, the agent must stop and repair the configuration before committing.