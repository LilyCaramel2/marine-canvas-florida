# AI EXECUTION POLICY

## Protected Files

The following files must not be modified:

- `client/src/App.tsx`
- `client/src/components/Navbar.tsx`

## Constraints

Do not modify routing or navigation.

Agents may only modify files explicitly listed in prompts.

Agents must not scan the repository.

## Execution Rules

1. Modify only listed files.
2. Do not scan the repository.
3. Do not change routing.
4. Do not refactor architecture.
5. Do not install dependencies.
6. Do not create extra files.
7. Return full-file replacements only.
8. Report suggested improvements separately under `SUGGESTED IMPROVEMENTS`.
9. Do not apply improvements automatically.
