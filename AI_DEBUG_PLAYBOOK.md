# AI_DEBUG_PLAYBOOK.md

This document defines the debugging procedure for automated AI agents working in this repository.

Agents must follow this process before modifying configuration or code.

---

## Step 1 — Verify Repository State

Confirm the repository contains:

package.json  
vite.config.ts  
vercel.json  
src/

If any required files are missing, stop and investigate.

---

## Step 2 — Verify Build

Run:

npm install  
npm run build

Confirm the build generates:

dist/index.html  
dist/assets/

If the build fails, identify and fix the error before proceeding.

---

## Step 3 — Verify Build Configuration

Inspect:

vite.config.ts

Confirm:

build.outDir = "dist"

If different, correct it.

---

## Step 4 — Verify Deployment Configuration

Inspect:

vercel.json

Confirm:

outputDirectory = "dist"

Ensure unknown routes resolve to:

/index.html

Example routing rule:

{  
  "routes": [  
    { "src": "/(.*)", "dest": "/index.html" }  
  ]  
}

---

## Step 5 — Verify Client Routing

Search the repository for client routes such as:

/industrial/*

Determine whether the project uses a client router.

If client routing exists, ensure SPA fallback routing is configured in Vercel.

---

## Step 6 — Verify Build Output

Inspect the dist directory.

Confirm:

dist/index.html exists  
dist/assets contains compiled assets

Check that index.html references valid asset paths.

---

## Step 7 — Investigate 404 Errors

If routes return 404:

Check SPA fallback rules  
Check vercel.json configuration  
Check build output directory alignment

Correct the configuration before redeploying.

---

## Step 8 — Confirm Fix

After making changes:

run npm run build  
verify dist output  
verify configuration alignment  
verify deployment configuration

---

## Rule

Agents must never claim a fix until:

build succeeds  
routing works  
configuration files align

---