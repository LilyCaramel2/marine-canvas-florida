Gemini: Planner\nManus: Execution\nCopilot: Code Generation\n\nPrimary rule: Read-Before-Act


TOKEN DISCIPLINE AND SCAN GATE

Agents must operate with strict token efficiency.

The following behaviors are forbidden unless explicitly required by ".ai/ACTIVE_TASK.md":

• repository-wide scans
• directory tree exploration
• dependency audits
• exploratory code analysis
• repeated command execution loops

Agents must NOT run commands such as:

ls -R
tree
repo search
dependency inspection
build commands unrelated to the active task

ACCESS RULE

Agents may access only:

• files referenced in ".ai/ACTIVE_TASK.md"
• files required to perform the defined task

EXECUTION LIMIT

Agents must complete the task in the smallest number of steps possible.

Repeated retries, exploratory commands, or self-directed audits are prohibited.

DRIFT RULE

Agents must not expand the scope of the task.

If additional work is discovered, it must be reported but not executed.
