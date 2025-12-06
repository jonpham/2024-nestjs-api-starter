The repository is a minimal NestJS (TypeScript) starter. These instructions give targeted guidance for an AI coding agent to make productive, safe edits.

Repository snapshot
- Entry point: `src/main.ts` (calls NestFactory.create and listens on PORT or 3000)
- Root module: `src/app.module.ts` (registers controllers/providers)
- Example controller/service: `src/app.controller.ts`, `src/app.service.ts`
- Tests: `src/app.controller.spec.ts` (Jest + ts-jest)
- Build/test tooling: `package.json` scripts use `pnpm` (preferred), `nest` CLI, `jest`, `ts-jest`.

What matters for edits
- Keep TypeScript `outDir` as `dist` (see `tsconfig.json`) — build and runtime expect compiled files there.
- The project uses pnpm (see `packageManager` in package.json). Use `pnpm install` when adding dependencies.
- Jest config is rooted at `src` (see `jest` section in `package.json`): tests live under `src` and use `.spec.ts` naming.

Coding patterns and conventions
- Use NestJS idioms: Modules register controllers/providers; prefer constructor injection (see `AppController`).
- Files live under `src/` and are compiled to `dist/`. Add new features under `src/` with matching unit tests alongside (`*.spec.ts`).
- Keep top-level exports simple. This starter is intentionally flat — avoid adding deep, unrelated folder structure without updating `AppModule` imports.

Developer workflows (commands)
- Install deps: `pnpm install`
- Build: `pnpm run build` (runs `nest build` -> emits to `dist`)
- Dev run (watch): `pnpm run start:dev` (uses `nest start --watch`)
- Run tests: `pnpm run test`; e2e: `pnpm run test:e2e`
- Lint/format: `pnpm run lint`, `pnpm run format`

Quick examples for common edits
- Add a feature module "cats":
  - create `src/cats/cats.module.ts`, `cats.controller.ts`, `cats.service.ts`
  - register `CatsModule` in `AppModule.imports`.
  - add `src/cats/cats.controller.spec.ts` and run `pnpm run test`.

Testing and runtime notes
- Tests run against TypeScript sources (ts-jest). If adding path aliases or custom tsconfig paths, update `ts-jest`/`tsconfig-paths` usage.
- The default listener uses PORT env: set `PORT` when running in CI or containerized environments.

What not to change without CI verification
- Do not change `jest` rootDir or testRegex unless moving tests — this will break test discovery.
- Avoid changing `outDir` in `tsconfig.json` or `nest-cli.json` compilerOptions.deleteOutDir without ensuring build pipeline updates.
- Don’t switch package manager; use pnpm to preserve lockfile integrity.

Files to reference when implementing features or fixes
- `src/main.ts`, `src/app.module.ts`, `src/app.controller.ts`, `src/app.service.ts`, `src/app.controller.spec.ts`, `package.json`, `tsconfig.json`, `nest-cli.json`, `README.md`.

If you need to run or validate changes locally
- Use the `pnpm` scripts above. Keep iterations small: implement, add/adjust tests in `src/`, run `pnpm run test` and `pnpm run build` before committing.

If anything here is unclear or you want project-specific policies (branching, PR message style, CI checks), tell me what to include and I will iterate.
