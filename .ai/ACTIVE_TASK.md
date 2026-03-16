Current task: Execute the task specified in pasted_content.txt.

Subtasks:
1. Create .github/copilot-instructions.md.
2. Create new pages in client/src/pages/industrial/: CleanRoomHub.jsx, CleanRoomCurtains.jsx, CleanRoomEquipmentCovers.jsx, CleanRoomContainment.jsx.
3. Update client/src/pages/Industrial.jsx.

Rules:
- Follow AI EXECUTION POLICY.
- Do not scan the repository.
- Do not modify routing or navigation.
- Do not modify protected files (client/src/App.tsx, client/src/components/Navbar.tsx).
- Modify only the files listed in the prompt.
- Return full-file replacements for all required files.
- Do not apply improvements automatically; return them separately under SUGGESTED IMPROVEMENTS.
- Do not modify backend (server/routes/contact.js) for this step.
- Do not modify frontend for server/routes/contact.js verification step.
- Do not install dependencies.
- Do not create extra files.
- Do not refactor architecture.
- Do not change routing.
- Do not run npm, builds, dev servers, lint, or tests.
- Access only files referenced in .ai/ACTIVE_TASK.md or required for the defined task.
- Complete the task in the smallest number of steps possible.
- Do not expand the scope of the task; report additional work but do not execute.
