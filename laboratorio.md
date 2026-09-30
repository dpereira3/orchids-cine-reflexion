# Análisis de Contexto del Proyecto

**Ruta del Proyecto:** `/home/preceptor/Proyectos/portal-de-recursos-laboratorio`

---

## Archivo: `.gitignore`

```
# v0 sandbox internal files
__v0_runtime_loader.js
__v0_devtools.tsx
__v0_jsx-dev-runtime.ts
.snowflake/
.v0-trash/
.vercel/

# Environment variables
.env*.local

# Common ignores
node_modules
.next/
.DS_Store
```

---

## Archivo: `README.md`

```markdown
# portal-de-recursos-laboratorio

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_MqeKKr781f7XDzy59JmA6WVwdEhL)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.

```

---

## Archivo: `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "base-nova",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}

```

---

## Archivo: `next.config.mjs`

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
}

export default nextConfig

```

---

## Archivo: `package.json`

```json
{
  "name": "my-project",
  "version": "0.1.0",
  "private": true,
  "packageManager": "pnpm@12.3.4",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "@base-ui/react": "^1.5.0",
    "@vercel/analytics": "1.6.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^1.16.0",
    "next": "16.3.3",
    "react": "^19",
    "react-dom": "^19",
    "shadcn": "^4.11.0",
    "tailwind-merge": "^3.3.1",
    "tw-animate-css": "^1.4.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.3.3",
    "@types/node": "^24",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "postcss": "^8.5",
    "tailwindcss": "^4.3.3",
    "typescript": "5.7.3"
  }
}

```

---

## Archivo: `pnpm-lock.yaml`

```yaml
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@base-ui/react':
        specifier: ^1.5.0
        version: 1.5.0(@date-fns/tz@1.4.1)(@types/react@19.2.14)(date-fns@4.1.0)(react-dom@19.2.4(react@19.2.4))(react@19.2.4)
      '@vercel/analytics':
        specifier: 1.6.1
        version: 1.6.1(next@16.3.3(@babel/core@7.29.7)(@types/node@24.10.4)(react-dom@19.2.4(react@19.2.4))(react@19.2.4))(react@19.2.4)
      class-variance-authority:
        specifier: ^0.7.1
        version: 0.7.1
      clsx:
        specifier: ^2.1.1
        version: 2.1.1
      lucide-react:
        specifier: ^1.16.0
        version: 1.17.0(react@19.2.4)
      next:
        specifier: 16.3.3
        version: 16.3.3(@babel/core@7.29.7)(@types/node@24.10.4)(react-dom@19.2.4(react@19.2.4))(react@19.2.4)
      react:
        specifier: ^19
        version: 19.2.4
      react-dom:
        specifier: ^19
        version: 19.2.4(react@19.2.4)
      shadcn:
        specifier: ^4.11.0
        version: 4.19.0(typescript@5.7.3)
      tailwind-merge:
        specifier: ^3.3.1
        version: 3.4.0
      tw-animate-css:
        specifier: ^1.4.0
        version: 1.4.0
    devDependencies:
      '@tailwindcss/postcss':
        specifier: ^4.3.3
        version: 4.3.3
      '@types/node':
        specifier: ^24
        version: 24.10.4
      '@types/react':
        specifier: ^19
        version: 19.2.14
      '@types/react-dom':
        specifier: ^19
        version: 19.2.3(@types/react@19.2.14)
      postcss:
        specifier: ^8.5
        version: 8.5.6
      tailwindcss:
        specifier: ^4.3.3
        version: 4.3.3
      typescript:
        specifier: 5.7.3
        version: 5.7.3

packages:

  '@alloc/quick-lru@5.2.0':
    resolution: {integrity: sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==}
    engines: {node: '>=10'}

  '@babel/code-frame@7.29.7':
    resolution: {integrity: sha512-Aup7aUOfpbAUg2ROOJN6Iw5f9DMBlzu0mIkm/malLQFN/YQgO48wCj0Kxa3sEHJvPVFg7siR+qRInwXd2qhQKw==}
    engines: {node: '>=6.9.0'}

  '@babel/compat-data@7.29.7':
    resolution: {integrity: sha512-locTkQyKvwIEgBzVrn8693ebc97F2U8ZHjbXwDXJ5Fn2TCpNwTlKcaKLkdHop5c/icOFE7qt7Q9JC5hnKNa6Gg==}
    engines: {node: '>=6.9.0'}

  '@babel/core@7.29.7':
    resolution: {integrity: sha512-RgHBCvtjbOK2gXSNBNIkNoEc9qoVEtau3hj8gEqKQuL3HZAibKarWFEI3Lfm6EYKkLalOh8eSrj9b+ch9H/VBA==}
    engines: {node: '>=6.9.0'}

  '@babel/generator@7.29.7':
    resolution: {integrity: sha512-DkXD5OJQaAQIdZ1bt3UZdEnHAn9Imd3IVBdX03UFe+ony9Ojw5pzr9YVKGDY1jt+Gcn/FnGkNf8r+Vj5NOJWtQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-annotate-as-pure@7.29.7':
    resolution: {integrity: sha512-OoK6239jHPuSQOoS0kfTVKn0b/rVTk0seKq4Gd2UMLtmOVLjDC0ki3e+c90Trqv2gMfvJFqkiljrr568+qddiw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-compilation-targets@7.29.7':
    resolution: {integrity: sha512-wem6WaBj4NaVYVdNhLPPVacES6ZJ+KBBfSkTMD3YZxbP3rm3Di85tJU5ljaUNhaOynt+Aj0xruhYuzQBt8n71g==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-create-class-features-plugin@7.29.7':
    resolution: {integrity: sha512-IY3ZD9Tmooqr3TUhc3DUWxiuo8xx1DWLhd5M7hQ+ZWJamqM2BbalrBJb2MisSLoYorOj75U03qULCxQTY9r3hg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-globals@7.29.7':
    resolution: {integrity: sha512-3nQVUAtvkKH9zahfWgw96Jc/uFOmjACE1kQz82E2lqWmHBgjzbNlsC22nuQTfahmWeQtTq5nQ/4Nnd2A1wj4zA==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-member-expression-to-functions@7.29.7':
    resolution: {integrity: sha512-j+7JYmk1JYDtACIGj0QJqqWZjoUpMoEikQGADMaHgCMCSDqd2+P32rfcibUNrGOMWrlzK1WJBdxrB3JJQZwWtg==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-imports@7.29.7':
    resolution: {integrity: sha512-ejHwrQQYcm9xnTivShn2IDOlIzInN34AXskvq9QicvCtEzq1Vzclu/tKF8Jq1Cg8JG2GL6/EmjgsCT7lXepE3g==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-transforms@7.29.7':
    resolution: {integrity: sha512-UPUVSyXbOh627KiCIGQSgwWzGeBKLkaJ9PJEdrngIwMSzxLR4jS4+f1f1jb7VzBbg8nFLaYotvVPFCTqdrmTAg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-optimise-call-expression@7.29.7':
    resolution: {integrity: sha512-+kmGVjcT9RGYzoDwdwEqEvGgKe3BYq+O1iGzjFubaNgZHwYHP6lsF2Yghf4kEuv9BV7tYDZ913aBW9am6YKong==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-plugin-utils@7.29.7':
    resolution: {integrity: sha512-G7sHYigPY17oO5SYWnfD/0MTBwVR781S/JI643e/JhUYgVgWE/61SoW3NH9KWUKyKq5LVh3npif99Wkt6j86Jw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-replace-supers@7.29.7':
    resolution: {integrity: sha512-atfGXWSeCiF4DnKZIfmJfQRkSw9b9gNNXR1kqKjbhG4pGYCOnkp8OcTB8E3NXjBu8NpheSnOeNKz8KT7UNFTmQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-skip-transparent-expression-wrappers@7.29.7':
    resolution: {integrity: sha512-brcMGQaVzIeUb+6/bs1Av0f8YuNNjKY2JyvfRCsFuFsdKccEQ5Ges2y74D74NZ1Rz8lKJ9ksJkfqwQFJ/iNEyQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-string-parser@7.29.7':
    resolution: {integrity: sha512-Pb5ijPrZ89GDH8223L4UP8i6QApWxs04RbPQJTeWDV0/keR2E36MeKnyr6LYmUUvqRRI+Iv87SuF1W6ErINzYw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-identifier@7.29.7':
    resolution: {integrity: sha512-qehxGkRj55h/ff8EMaJ+cYhyaKlHIxqYDn682wQD7RNp9UujOQsHog2uS0r2vzr4pW+sXf90NeeayjcNaX3fFg==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-option@7.29.7':
    resolution: {integrity: sha512-N9ZErrD+yW5geCDtBqnOoxmR8+tNKiGuxKlDpuJxfsqpa2dFcexaziGAE/qoHLiDDreVNMupxGmSoNlyvsA3gw==}
    engines: {node: '>=6.9.0'}

  '@babel/helpers@7.29.7':
    resolution: {integrity: sha512-1k2lAGRMfHTcwuNYcCNUmaUffmQv8KWMfh2iJUUeRlwlwH4FdNG7mfPI10NPfLHJFThE4Tyr4mv7kTNZOiPuBg==}
    engines: {node: '>=6.9.0'}

  '@babel/parser@7.29.7':
    resolution: {integrity: sha512-hnORnjP/1P/zFEndoeX+n+t1RwWRJiJpM/jO7FW32Kn9r5+sJB2JWOdYo4L6k78j15eCwY3Gm/7364B1EMwtNg==}
    engines: {node: '>=6.0.0'}
    hasBin: true

  '@babel/plugin-syntax-jsx@7.29.7':
    resolution: {integrity: sha512-TSu8+mHCoEaaCDEZ0I3+6mvTBYR4PCxQwf2z9/r5Tbztv6NaLR3B9thGTTxX2WGuGHJqRiAbKPeGTJ5XWXVg6A==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-typescript@7.29.7':
    resolution: {integrity: sha512-ngr+82Sh0xMz25TPCZi+nC2iTzjfCdWS2ONXTp/PtSCHCgaCNBpdMqgvJ2ccdLlClVZ7sisIgB914j/JFe+RZA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-modules-commonjs@7.29.7':
    resolution: {integrity: sha512-j0vCldybPC5b5dwCQOJ21uKtHzt7hxLygJTg9eF1ScfaikEDNfzn94XoW5Fi+seBR0nCyL23xaBFFkq7dTM8XQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-typescript@7.29.7':
    resolution: {integrity: sha512-jK52h8LaLc7JarhQV2ofeFMts4H7vnOXnqZNA6fYglBTZewRBE51KWt3BUltW1P+KoPsYkHoJeXePuz4zo2LMw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/preset-typescript@7.29.7':
    resolution: {integrity: sha512-/Foi8vKY2EVbed/1eZx0gJEEwHAIxogrySI7rULcRIvhZzbvoE/b5qG5Ghc0WKAFKOHA9SD1x7RsFlOYdutIiQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/runtime@7.29.7':
    resolution: {integrity: sha512-Nq8OhGWiZIZGV6hLHoyAKLLcJihP/xFeBMGJoUrxTX2psI8dCifzLhZISFb+VWS3wFMRDmCGw5R+dOySCqPLhw==}
    engines: {node: '>=6.9.0'}

  '@babel/template@7.29.7':
    resolution: {integrity: sha512-puq+Gf35oI24FeN11LkoUQFqv9uwNeWpxXZi/Ji3rRIoKAzKnxRaZ+Gkj0vKS9ZCiTESfng1N9LyOyXvo+m+Gg==}
    engines: {node: '>=6.9.0'}

  '@babel/traverse@7.29.7':
    resolution: {integrity: sha512-EhlfNQtZ+NK22w5BM61ciuiq1m58ed33Wr1Xan//ZRTy6hgjnwyCffRYwzsGXdASJSUJ1guZILsErh1eQcl+zw==}
    engines: {node: '>=6.9.0'}

  '@babel/types@7.29.7':
    resolution: {integrity: sha512-4zBIxpPzowiZpusoFkyGVwakdRJUyuH5PxQ/PrqghfdFWWasvnCdPfQXHrenDai+gyLARulZjZowCOj6fjT4pA==}
    engines: {node: '>=6.9.0'}

  '@base-ui/react@1.5.0':
    resolution: {integrity: sha512-z1gSAlced1yY+iM+mHDEtIkD8UI3Ebs52MuBPxvV6f5hRutk+xvCH/wuB7hDqDzK9JG5FoMz5nhrqtSs1wjt1A==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      '@date-fns/tz': ^1.2.0
      '@types/react': ^17 || ^18 || ^19
      date-fns: ^4.0.0
      react: ^17 || ^18 || ^19
      react-dom: ^17 || ^18 || ^19
    peerDependenciesMeta:
      '@date-fns/tz':
        optional: true
      '@types/react':
        optional: true
      date-fns:
        optional: true

  '@base-ui/utils@0.2.9':
    resolution: {integrity: sha512-x/PDDCYzoqPpjrdyb3VcyylTI2IjUXEtYDGi5foh7KsnmNJIIaVwA2GLgDH1dps1GgXiJbA60hM+AyuTfQzIvw==}
    peerDependencies:
      '@types/react': ^17 || ^18 || ^19
      react: ^17 || ^18 || ^19
      react-dom: ^17 || ^18 || ^19
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@date-fns/tz@1.4.1':
    resolution: {integrity: sha512-P5LUNhtbj6YfI3iJjw5EL9eUAG6OitD0W3fWQcpQjDRc/QIsL0tRNuO1PcDvPccWL1fSTXXdE1ds+l95DV/OFA==}

  '@dotenvx/dotenvx@1.70.0':
    resolution: {integrity: sha512-vC/rom87ym8HEyVdzZZS6/PYGg1Z5fmozUZ8l6cw1sYAxdL1lEyvE/JbK8cMFQoq3GsR/P1PiQRY+VXMtDN9bw==}
    hasBin: true

  '@ecies/ciphers@0.2.6':
    resolution: {integrity: sha512-patgsRPKGkhhoBjETV4XxD0En4ui5fbX0hzayqI3M8tvNMGUoUvmyYAIWwlxBc1KX5cturfqByYdj5bYGRpN9g==}
    engines: {bun: '>=1', deno: '>=2.7.10', node: '>=16'}
    peerDependencies:
      '@noble/ciphers': ^1.0.0

  '@emnapi/runtime@1.11.3':
    resolution: {integrity: sha512-Xz4Tpyki7XyrpbUK1jR1AhdAdaXyhhY4lZ3neLodmhpuWfy2PAQN5B46sAiU4liOXGLkHypn/qU+jvfWSCYYLA==}

  '@floating-ui/core@1.7.5':
    resolution: {integrity: sha512-1Ih4WTWyw0+lKyFMcBHGbb5U5FtuHJuujoyyr5zTaWS5EYMeT6Jb2AuDeftsCsEuchO+mM2ij5+q9crhydzLhQ==}

  '@floating-ui/dom@1.7.6':
    resolution: {integrity: sha512-9gZSAI5XM36880PPMm//9dfiEngYoC6Am2izES1FF406YFsjvyBMmeJ2g4SAju3xWwtuynNRFL2s9hgxpLI5SQ==}

  '@floating-ui/react-dom@2.1.8':
    resolution: {integrity: sha512-cC52bHwM/n/CxS87FH0yWdngEZrjdtLW/qVruo68qg+prK7ZQ4YGdut2GyDVpoGeAYe/h899rVeOVm6Oi40k2A==}
    peerDependencies:
      react: '>=16.8.0'
      react-dom: '>=16.8.0'

  '@floating-ui/utils@0.2.11':
    resolution: {integrity: sha512-RiB/yIh78pcIxl6lLMG0CgBXAZ2Y0eVHqMPYugu+9U0AeT6YBeiJpf7lbdJNIugFP5SIjwNRgo4DhR1Qxi26Gg==}

  '@hono/node-server@1.19.14':
    resolution: {integrity: sha512-GwtvgtXxnWsucXvbQXkRgqksiH2Qed37H9xHZocE5sA3N8O8O8/8FA3uclQXxXVzc9XBZuEOMK7+r02FmSpHtw==}
    engines: {node: '>=18.14.1'}
    peerDependencies:
      hono: 4.12.25

  '@img/colour@1.1.0':
    resolution: {integrity: sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ==}
    engines: {node: '>=18'}

  '@img/sharp-darwin-arm64@0.35.3':
    resolution: {integrity: sha512-RMnFX7YQsMoh7lWfcM4NEHHymBX/rLuKNPVM84XE9ONPcaSCDgE7CHIHpSgPcO2xcRthgBy1HfNO319mwhIAkg==}
    engines: {node: '>=20.9.0'}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-darwin-x64@0.35.3':
    resolution: {integrity: sha512-Xo+5uFBtLN0BKqieTxiFzFPQAUlBbbH5iBKyRX/z1JrbnYsHTfKJnUfL8+p2TPXr1pXqao4eeL4Rl144uDpK9w==}
    engines: {node: '>=20.9.0'}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-freebsd-wasm32@0.35.3':
    resolution: {integrity: sha512-lUxcqWIj2wMQ9BrwNjngcr1gWUr5xgaGThBRqPPalIC2n67Cqj1uPh8NnA/ZhAg8hUbKl+kVHKwgUIwe6ZYPrg==}
    engines: {node: '>=20.9.0'}
    os: [freebsd]

  '@img/sharp-libvips-darwin-arm64@1.3.2':
    resolution: {integrity: sha512-9J6ypZFpQBj4YnePGoq/S38w6nz+vqg5WZLrLGY4YuSemdMq47GMLBPO42MzwdGwpg/agZ7xzZcFHa48xlywfg==}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-libvips-darwin-x64@1.3.2':
    resolution: {integrity: sha512-m2pW1n6cns9VaubNwsZ+c3CRYjxNQWgJ5gPlnL1nbBcpkBvFm6SCFN5o0psFHI8w9n11NKhFkeEDns98tiqbEw==}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-linux-arm64@1.3.2':
    resolution: {integrity: sha512-dqVSFynCox4C/J8kT16V7SIFAns0IjgLwkvYT7p8LQVmJ5OS5b6tI9IGflxTeuBS//zXeFIUbwt5dwxyZ17cnA==}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linux-arm@1.3.2':
    resolution: {integrity: sha512-1eMLzy92I4J6rmi4mAT8yC3HxOtniyGELlzGbNMLLeqe052ahFQ0h6LFq+lh5DsDIdYViIDst08abvSbcEdLXQ==}
    cpu: [arm]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linux-ppc64@1.3.2':
    resolution: {integrity: sha512-3z0NHDxD6n5I9gc05U1eW1AyRm+Gznzq3naMrthPNqE6oYykcogW0l/jfpJdjYnuNl8R7yI9pNbE1XiUeyq0Aw==}
    cpu: [ppc64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linux-riscv64@1.3.2':
    resolution: {integrity: sha512-bsb4rI+NldGOsXuej2r8OdSS8+zXDVaCWxyWrcv6kneTOlgAHtZABRzBBCwdsPiD90J4myNJuHpg6kA20ImW/w==}
    cpu: [riscv64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linux-s390x@1.3.2':
    resolution: {integrity: sha512-/ABshyj8gCpyIrNXnHn4LorDJ0HHm1VhXPBlxZ8zAtfVPAaSafXPGn+sUSIRiwaSBy0mmFjSjiXI5mkcwdChKQ==}
    cpu: [s390x]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linux-x64@1.3.2':
    resolution: {integrity: sha512-ITPEtgffGJ0S6G9dRyw/366tJQqFRcHWPHhC+Stpg3Z8AEMrDrTr2lhdz4f/Y/HMbRh//7Z5mBzEpVdi62Oc3w==}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linuxmusl-arm64@1.3.2':
    resolution: {integrity: sha512-zE9EdiUzUmg5mDT5a1rk5fYJ6GWPloTwWBYDS14naqHsL+EaMpDj1AWnpLgh3u0YCORv2Tt50wrcrpYqkP97Kw==}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@img/sharp-libvips-linuxmusl-x64@1.3.2':
    resolution: {integrity: sha512-m0lrLiUt+lBYnCFr8qV/65yMR4E/c7/wf78I5eKTdkEakFAlZ9QlzEM3QIhhAwVeUhLAHLcCq7a7Vszq/oFNZQ==}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@img/sharp-linux-arm64@0.35.3':
    resolution: {integrity: sha512-QgKDspHPnrU+GQ55XPhGwyhC8acLVOOSyAvo1oVfFmrIXLkDNmGWzAfDZ4xK8oSA1qBQrALcHX0G5UZni/SuFQ==}
    engines: {node: '>=20.9.0'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linux-arm@0.35.3':
    resolution: {integrity: sha512-affVWCTLooy8TSxbDx2qkzuDeaWLNVBA+P//FNBirHsXpP2fuBhk5AuboYUnrDnzoXes8GFjpTx0SBFOCRg+FA==}
    engines: {node: '>=20.9.0'}
    cpu: [arm]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linux-ppc64@0.35.3':
    resolution: {integrity: sha512-sMd8rDxmpLOwv/7N44klFjOD5DUO7FLdjiXDI0hoxYaf7Ar262dQIEkosE98bps+5HPLtp/EvNqeqQtOycP/IA==}
    engines: {node: '>=20.9.0'}
    cpu: [ppc64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linux-riscv64@0.35.3':
    resolution: {integrity: sha512-0Eob78yjlYPfL5vMNWAW55l3R9Y6BQS/gOfe0ZcP9mEz9ohhKSt4im1hayiknXgf8AWrFqMvJcKIdmLmEe7yeQ==}
    engines: {node: '>=20.9.0'}
    cpu: [riscv64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linux-s390x@0.35.3':
    resolution: {integrity: sha512-KgAxQ0DxpNOq1rG2t5cgTgShJFGSuU7XO45cqC+1NVOuZnP6tlgZRuSYOfNupGkHID0o3cJOsw4DVeJpMovcGw==}
    engines: {node: '>=20.9.0'}
    cpu: [s390x]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linux-x64@0.35.3':
    resolution: {integrity: sha512-8pqvxubL2PGdhlPy6GLqzDYMUjyRmKAwKHYKixpdJYBUK7PJ0C029XdsnpFIdgRZG68fZiGdHVWcKPvtiPB4cA==}
    engines: {node: '>=20.9.0'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linuxmusl-arm64@0.35.3':
    resolution: {integrity: sha512-Vz0iQjzzcSX3HCbfwFfCSG/9SCIqyO0mH2sXyiHaAYfBk0cRsCWXRyQYX0ovCK/PAQBbTzQ0dsPQHh5MAFL59w==}
    engines: {node: '>=20.9.0'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@img/sharp-linuxmusl-x64@0.35.3':
    resolution: {integrity: sha512-6O1NPKcDVj9QEdg7Hx549EX8U0rp6yXQERqru6yRN7fGBn32UvIRJUlWnk+8xDCiG76hXVBbX82NZ/ZKr0euIg==}
    engines: {node: '>=20.9.0'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@img/sharp-wasm32@0.35.3':
    resolution: {integrity: sha512-cZ0XkcYGpHZkqW6iCkqTcmUC0CD9DhD5d/qeZlZkfRBn6GnHniZXLUo5+9xw8Iv76YE6LQFN9YNBlKREcCG76w==}
    engines: {node: '>=20.9.0'}

  '@img/sharp-webcontainers-wasm32@0.35.3':
    resolution: {integrity: sha512-2rnq7bX3NzeR2T4YWgz8qiG4h3TSdMe+vN1iQXpJleSJ3SM5zQ8Fy2SyyXAWlbxpEZ2Y+Z4u1BePgJEYbSy80Q==}
    engines: {node: '>=20.9.0'}
    cpu: [wasm32]

  '@img/sharp-win32-arm64@0.35.3':
    resolution: {integrity: sha512-4bPwFdMbeC4JQ8L8LOyWp6nsHcboP5fxkp6iPOXz2Vg49R42TuMs2whkJ5OAP4/Ul035qOzy0AecOF9VOscn4w==}
    engines: {node: '>=20.9.0'}
    cpu: [arm64]
    os: [win32]

  '@img/sharp-win32-ia32@0.35.3':
    resolution: {integrity: sha512-r53mXsBN6lFUDiST764SvgwUdHAqM4rPAiDzAmf4fLoB6X/rkfyTrLCg6+g17wJJiCmB3JYgHuUldCWUIRFSXw==}
    engines: {node: ^20.9.0}
    cpu: [ia32]
    os: [win32]

  '@img/sharp-win32-x64@0.35.3':
    resolution: {integrity: sha512-D4y1vNeZrIIJCN+uHaWVtH86B+aCrdMYYjicy9pXHvbGZeGYLLSd3wdVuC37FxVXlU1ARsk84eKWfWMXGYEqvA==}
    engines: {node: '>=20.9.0'}
    cpu: [x64]
    os: [win32]

  '@jridgewell/gen-mapping@0.3.13':
    resolution: {integrity: sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==}

  '@jridgewell/remapping@2.3.5':
    resolution: {integrity: sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/sourcemap-codec@1.5.5':
    resolution: {integrity: sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==}

  '@jridgewell/trace-mapping@0.3.31':
    resolution: {integrity: sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==}

  '@modelcontextprotocol/sdk@1.29.0':
    resolution: {integrity: sha512-zo37mZA9hJWpULgkRpowewez1y6ML5GsXJPY8FI0tBBCd77HEvza4jDqRKOXgHNn867PVGCyTdzqpz0izu5ZjQ==}
    engines: {node: '>=18'}
    peerDependencies:
      '@cfworker/json-schema': ^4.1.1
      zod: ^3.25 || ^4.0
    peerDependenciesMeta:
      '@cfworker/json-schema':
        optional: true

  '@next/env@16.3.3':
    resolution: {integrity: sha512-U2eYQRwXj+dsqxV79zFqExDdatnNY/ZWc2nsJU1p/OgT7fd3dXwlF6OjYaFQCfMoeTA19PWq+wVmYgimVA+V+g==}

  '@next/swc-darwin-arm64@16.3.3':
    resolution: {integrity: sha512-8Hiv32QJPwdV6KYJ8meR9SBA061tQqnIKTJDocvOXlEQqib0xMFpzArosuffFUUc0sslbh7QQ8a3Yey1QV8EIw==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [darwin]

  '@next/swc-darwin-x64@16.3.3':
    resolution: {integrity: sha512-A1lgKgwVchRYmSe467zdwhxT9040dd8lH+o65sL5Jet8fjB4kegw/rDyPIpYVRb6jAqwXFOJpjIXJLxQKLiE3A==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [darwin]

  '@next/swc-linux-arm64-gnu@16.3.3':
    resolution: {integrity: sha512-bf0FIssMFueU2dm7vQEWWxk0c8UjKTdW0yzuh0sQsD8pf1+KCLDdaqhYZNMYGmXwEOiHAUzgBKudovIlcvvBjg==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@next/swc-linux-arm64-musl@16.3.3':
    resolution: {integrity: sha512-W7viwCk9JY/cAkdz/A273rd5bb3RgT/IHwR7Upv90tunjBWNtAAhGhoecHh+teRNRSinuAFmE+l7fwZ4YKkrXg==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@next/swc-linux-x64-gnu@16.3.3':
    resolution: {integrity: sha512-0W46zw1N3ODpI6n0GeivHvvob1pooozgZVqy65k0mh4/7vr+FbY9+WpHzNVXjHipJf/A3FDheBG19H1s5A25rA==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@next/swc-linux-x64-musl@16.3.3':
    resolution: {integrity: sha512-H4mBso8ZTMBPtdT0PN0pBx2ayTvQuTuvS6qT13d77yVFJXAPCxkyIhLTmdMaGTJs0krQYI/qpzdHijCeihXhbg==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@next/swc-win32-arm64-msvc@16.3.3':
    resolution: {integrity: sha512-cTMUJpcEGmeywofCUfhR+rSsoE33+rVPnPEYNTNdLNlsOeEg/vktOsKUSTb28vUGqD2jkm4Zaskcwn7OCI6FQg==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [win32]

  '@next/swc-win32-x64-msvc@16.3.3':
    resolution: {integrity: sha512-2VR4cTBzHXaBjnGsuH6GyJjENzQOmHeAh11uY1iUhjm3j5dEUrVJuUj+VL78jaGi/Dik8xS76zEj18BsFhlVZQ==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [win32]

  '@noble/ciphers@1.3.0':
    resolution: {integrity: sha512-2I0gnIVPtfnMw9ee9h1dJG7tp81+8Ob3OJb3Mv37rx5L40/b0i7djjCVvGOVqc9AEIQyvyu1i6ypKdFw8R8gQw==}
    engines: {node: ^14.21.3 || >=16}

  '@noble/curves@1.9.7':
    resolution: {integrity: sha512-gbKGcRUYIjA3/zCCNaWDciTMFI0dCkvou3TL8Zmy5Nc7sJ47a0jtOeZoTaMxkuqRo9cRhjOdZJXegxYE5FN/xw==}
    engines: {node: ^14.21.3 || >=16}

  '@noble/hashes@1.8.0':
    resolution: {integrity: sha512-jCs9ldd7NwzpgXDIf6P3+NrHh9/sD6CQdxHyjQI+h/6rDNo88ypBxxz45UDuZHz9r3tNz7N/VInSVoVdtXEI4A==}
    engines: {node: ^14.21.3 || >=16}

  '@nodelib/fs.scandir@2.1.5':
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}

  '@nodelib/fs.stat@2.0.5':
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}

  '@nodelib/fs.walk@1.2.8':
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}

  '@sec-ant/readable-stream@0.4.1':
    resolution: {integrity: sha512-831qok9r2t8AlxLko40y2ebgSDhenenCatLVeW/uBtnHPyhHOvG0C7TvfgecV+wHzIm5KUICgzmVpWS+IMEAeg==}

  '@sindresorhus/merge-streams@4.0.0':
    resolution: {integrity: sha512-tlqY9xq5ukxTUZBmoOp+m61cqwQD5pHJtFY3Mn8CA8ps6yghLH/Hw8UPdqg4OLmFW3IFlcXnQNmo/dh8HzXYIQ==}
    engines: {node: '>=18'}

  '@swc/helpers@0.5.23':
    resolution: {integrity: sha512-5lSsMOTXURePglDfvuAQUqkGek9Hg2kksOYay2m0+XR++b2NWYL/4sWyuvVBIs8oKnJaxkdi9whaL/sqN13afw==}

  '@tailwindcss/node@4.3.3':
    resolution: {integrity: sha512-/T8IKEsf9VTU6tLjgC7+sv2mOPtQxzE2jMw7u4Tt40Tx+QSZxpzh95/H6cMKoja9XuW7iMdLJYBB0o9G1CaAgg==}

  '@tailwindcss/oxide-android-arm64@4.3.3':
    resolution: {integrity: sha512-Y85A2gmPSkl5Ve5qR86GL4HT509cFqQh1aes9p3sSkyTPwt0Pppf3GkwGe4JPACcRYjgJIEhQgM6dBClnr0NYw==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [android]

  '@tailwindcss/oxide-darwin-arm64@4.3.3':
    resolution: {integrity: sha512-BiaWatpBcERQFDlOjRDpIVXuFK5PJez5SA4JMg6VYZdBYU+qKfV/vqjcIs+IYmtitf1xYQZTwXvU/8y4lfZUGw==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [darwin]

  '@tailwindcss/oxide-darwin-x64@4.3.3':
    resolution: {integrity: sha512-fAeUqfV5ndhxRwai8cXGzdLvul9utWOmeTkv69unv4ZXixjn61Z+p9lCWdwOwA3TYboG3BwdVuN/RDjhBRl0mw==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [darwin]

  '@tailwindcss/oxide-freebsd-x64@4.3.3':
    resolution: {integrity: sha512-iyf5bV6+wnAlflVeEy7R25dupxTNECZN5QMI0qNT6eT+EgaGdZcKhGkr5SdoaWiLJ3spLqIY9VCeSGrwmtg4kw==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [freebsd]

  '@tailwindcss/oxide-linux-arm-gnueabihf@4.3.3':
    resolution: {integrity: sha512-aAYUprJAJQWWbRrPvtjdroZ56Md+JM8pMiopS6xGEwDfLhqj+2ver2p4nU4Mb3CRqcMmNBjo8KkUgcxhkzVQGQ==}
    engines: {node: '>= 20'}
    cpu: [arm]
    os: [linux]

  '@tailwindcss/oxide-linux-arm64-gnu@4.3.3':
    resolution: {integrity: sha512-nDxldcEENOxZRzC2uu9jrutZdAAQtb+8WWDCSnWL1zvBk1+FN+x6MtDViPB5AJMfttVCUhehGWus3XBPgatM/w==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@tailwindcss/oxide-linux-arm64-musl@4.3.3':
    resolution: {integrity: sha512-Md44bD6veX/PC5iyF8cDVnw4HBIANZepRZZ7a8DQOvkfo5WUBwcp6iAuCUz23u+4SUkhJlD3eL7hNdW8ezd/kA==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@tailwindcss/oxide-linux-x64-gnu@4.3.3':
    resolution: {integrity: sha512-tx7us1muwOKAKWao2v/GaafFeQboE6aj88vC6ziN2NCGcRm8gWUhwjzg+YdVB1e4boAtdtma4L43onunI6NS4w==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@tailwindcss/oxide-linux-x64-musl@4.3.3':
    resolution: {integrity: sha512-SJxX60smvHgasZoBy11dX6YRjXJFovwWBoedhbQPOBzgFWBHGB+TVPWB9BxzR7TTxU8FQZAI2AyiNCMzFm8Img==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@tailwindcss/oxide-wasm32-wasi@4.3.3':
    resolution: {integrity: sha512-jx1+rPhY/5Ympkktd656HBWEBLxP7dH06losBLjjf5vgCODXvi9KhtftWcMIwTFIDqBr7cRnQkdLnAG+IOlGvQ==}
    engines: {node: '>=14.0.0'}
    cpu: [wasm32]
    bundledDependencies:
      - '@napi-rs/wasm-runtime'
      - '@emnapi/core'
      - '@emnapi/runtime'
      - '@tybys/wasm-util'
      - '@emnapi/wasi-threads'
      - tslib

  '@tailwindcss/oxide-win32-arm64-msvc@4.3.3':
    resolution: {integrity: sha512-3rc292Ca2ceK6Ulcc/bAVnTs/3nDtoPhyEKlgPv+yQJQi/JS/AMJlqzxvlDacL1nekbrcf6bTqp/jV4qgnPxNQ==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [win32]

  '@tailwindcss/oxide-win32-x64-msvc@4.3.3':
    resolution: {integrity: sha512-yJ0pwIVc/nYeGoV02WtsN8KYyLQv7kyI2wDnkezyJlGGjkd4QLwDGAwl47YpPJeuI0M0ObaXGSPjvWDPeTPggw==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [win32]

  '@tailwindcss/oxide@4.3.3':
    resolution: {integrity: sha512-krXjAikiaFSPaK/FkAQT5UTx3VormQaiZ5hBFlJZ9UFQGB/rwg1MZIhHAG9smMQRTdyJxP6Qt5MwMtdyU5FWrA==}
    engines: {node: '>= 20'}

  '@tailwindcss/postcss@4.3.3':
    resolution: {integrity: sha512-JTSZZGQi1AyKirbLN3azmjVzef92tcX7h+iSqPdaeStyFpGpDlKvvpxeOE8njhbUanbRwr3z8DyzhICWnMtQeg==}

  '@ts-morph/common@0.27.0':
    resolution: {integrity: sha512-Wf29UqxWDpc+i61k3oIOzcUfQt79PIT9y/MWfAGlrkjg6lBC1hwDECLXPVJAhWjiGbfBCxZd65F/LIZF3+jeJQ==}

  '@types/node@24.10.4':
    resolution: {integrity: sha512-vnDVpYPMzs4wunl27jHrfmwojOGKya0xyM3sH+UE5iv5uPS6vX7UIoh6m+vQc5LGBq52HBKPIn/zcSZVzeDEZg==}

  '@types/react-dom@19.2.3':
    resolution: {integrity: sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==}
    peerDependencies:
      '@types/react': ^19.2.0

  '@types/react@19.2.14':
    resolution: {integrity: sha512-ilcTH/UniCkMdtexkoCN0bI7pMcJDvmQFPvuPvmEaYA/NSfFTAgdUSLAoVjaRJm7+6PvcM+q1zYOwS4wTYMF9w==}

  '@types/validate-npm-package-name@4.0.2':
    resolution: {integrity: sha512-lrpDziQipxCEeK5kWxvljWYhUvOiB2A9izZd9B2AFarYAkqZshb4lPbRs7zKEic6eGtH8V/2qJW+dPp9OtF6bw==}

  '@vercel/analytics@1.6.1':
    resolution: {integrity: sha512-oH9He/bEM+6oKlv3chWuOOcp8Y6fo6/PSro8hEkgCW3pu9/OiCXiUpRUogDh3Fs3LH2sosDrx8CxeOLBEE+afg==}
    peerDependencies:
      '@remix-run/react': ^2
      '@sveltejs/kit': ^1 || ^2
      next: '>= 13'
      react: ^18 || ^19 || ^19.0.0-rc
      svelte: '>= 4'
      vue: ^3
      vue-router: ^4
    peerDependenciesMeta:
      '@remix-run/react':
        optional: true
      '@sveltejs/kit':
        optional: true
      next:
        optional: true
      react:
        optional: true
      svelte:
        optional: true
      vue:
        optional: true
      vue-router:
        optional: true

  accepts@2.0.0:
    resolution: {integrity: sha512-5cvg6CtKwfgdmVqY1WIiXKc3Q1bkRqGLi+2W/6ao+6Y7gu/RCwRuAhGEzh5B4KlszSuTLgZYuqFqo5bImjNKng==}
    engines: {node: '>= 0.6'}

  ajv-formats@3.0.1:
    resolution: {integrity: sha512-8iUql50EUR+uUcdRQ3HDqa6EVyo3docL8g5WJ3FNcWmu62IbkGUue/pEyLBW8VGKKucTPgqeks4fIU1DA4yowQ==}
    peerDependencies:
      ajv: ^8.0.0
    peerDependenciesMeta:
      ajv:
        optional: true

  ajv@8.20.0:
    resolution: {integrity: sha512-Thbli+OlOj+iMPYFBVBfJ3OmCAnaSyNn4M1vz9T6Gka5Jt9ba/HIR56joy65tY6kx/FCF5VXNB819Y7/GUrBGA==}

  ansi-colors@4.1.3:
    resolution: {integrity: sha512-/6w/C21Pm1A7aZitlI5Ni/2J6FFQN8i1Cvz3kHABAAbw93v/NlvKdVOqz7CCWz/3iv/JplRSEEZ83XION15ovw==}
    engines: {node: '>=6'}

  ansi-regex@5.0.1:
    resolution: {integrity: sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==}
    engines: {node: '>=8'}

  ansi-regex@6.2.2:
    resolution: {integrity: sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==}
    engines: {node: '>=12'}

  argparse@2.0.1:
    resolution: {integrity: sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==}

  ast-types@0.16.1:
    resolution: {integrity: sha512-6t10qk83GOG8p0vKmaCr8eiilZwO171AvbROMtvvNiwrTly62t+7XkA8RdIIVbpMhCASAsxgAzdRSwh6nw/5Dg==}
    engines: {node: '>=4'}

  balanced-match@4.0.4:
    resolution: {integrity: sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==}
    engines: {node: 18 || 20 || >=22}

  baseline-browser-mapping@2.9.19:
    resolution: {integrity: sha512-ipDqC8FrAl/76p2SSWKSI+H9tFwm7vYqXQrItCuiVPt26Km0jS+NzSsBWAaBusvSbQcfJG+JitdMm+wZAgTYqg==}
    hasBin: true

  body-parser@2.2.2:
    resolution: {integrity: sha512-oP5VkATKlNwcgvxi0vM0p/D3n2C3EReYVX+DNYs5TjZFn/oQt2j+4sVJtSMr18pdRr8wjTcBl6LoV+FUwzPmNA==}
    engines: {node: '>=18'}

  brace-expansion@5.0.6:
    resolution: {integrity: sha512-kLpxurY4Z4r9sgMsyG0Z9uzsBlgiU/EFKhj/h91/8yHu0edo7XuixOIH3VcJ8kkxs6/jPzoI6U9Vj3WqbMQ94g==}
    engines: {node: 18 || 20 || >=22}

  braces@3.0.3:
    resolution: {integrity: sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==}
    engines: {node: '>=8'}

  browserslist@4.28.1:
    resolution: {integrity: sha512-ZC5Bd0LgJXgwGqUknZY/vkUQ04r8NXnJZ3yYi4vDmSiZmC/pdSN0NbNRPxZpbtO4uAfDUAFffO8IZoM3Gj8IkA==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true

  bundle-name@4.1.0:
    resolution: {integrity: sha512-tjwM5exMg6BGRI+kNmTntNsvdZS1X8BFYS6tnJ2hdH0kVxM6/eVZ2xy+FqStSWvYmtfFMDLIxurorHwDKfDz5Q==}
    engines: {node: '>=18'}

  bytes@3.1.2:
    resolution: {integrity: sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==}
    engines: {node: '>= 0.8'}

  call-bind-apply-helpers@1.0.2:
    resolution: {integrity: sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==}
    engines: {node: '>= 0.4'}

  call-bound@1.0.4:
    resolution: {integrity: sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==}
    engines: {node: '>= 0.4'}

  callsites@3.1.0:
    resolution: {integrity: sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==}
    engines: {node: '>=6'}

  caniuse-lite@1.0.30001769:
    resolution: {integrity: sha512-BCfFL1sHijQlBGWBMuJyhZUhzo7wer5sVj9hqekB/7xn0Ypy+pER/edCYQm4exbXj4WiySGp40P8UuTh6w1srg==}

  chalk@5.6.2:
    resolution: {integrity: sha512-7NzBL0rN6fMUW+f7A6Io4h40qQlG+xGmtMxfbnH/K7TAtt8JQWVQK+6g0UXKMeVJoyV5EkkNsErQ8pVD3bLHbA==}
    engines: {node: ^12.17.0 || ^14.13 || >=16.0.0}

  class-variance-authority@0.7.1:
    resolution: {integrity: sha512-Ka+9Trutv7G8M6WT6SeiRWz792K5qEqIGEGzXKhAE6xOWAY6pPH8U+9IY3oCMv6kqTmLsv7Xh/2w2RigkePMsg==}

  cli-cursor@5.0.0:
    resolution: {integrity: sha512-aCj4O5wKyszjMmDT4tZj93kxyydN/K5zPWSCe6/0AV/AA1pqe5ZBIw0a2ZfPQV7lL5/yb5HsUreJ6UFAF1tEQw==}
    engines: {node: '>=18'}

  cli-spinners@2.9.2:
    resolution: {integrity: sha512-ywqV+5MmyL4E7ybXgKys4DugZbX0FC6LnwrhjuykIjnK9k8OQacQ7axGKnjDXWNhns0xot3bZI5h55H8yo9cJg==}
    engines: {node: '>=6'}

  client-only@0.0.1:
    resolution: {integrity: sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==}

  clsx@2.1.1:
    resolution: {integrity: sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==}
    engines: {node: '>=6'}

  code-block-writer@13.0.3:
    resolution: {integrity: sha512-Oofo0pq3IKnsFtuHqSF7TqBfr71aeyZDVJ0HpmqB7FBM2qEigL0iPONSCZSO9pE9dZTAxANe5XHG9Uy0YMv8cg==}

  commander@11.1.0:
    resolution: {integrity: sha512-yPVavfyCcRhmorC7rWlkHn15b4wDVgVmBA7kV4QVBsF7kv/9TKJAbAXVTxvTnwP8HHKjRCJDClKbciiYS7p0DQ==}
    engines: {node: '>=16'}

  commander@14.0.3:
    resolution: {integrity: sha512-H+y0Jo/T1RZ9qPP4Eh1pkcQcLRglraJaSLoyOtHxu6AapkjWVCy2Sit1QQ4x3Dng8qDlSsZEet7g5Pq06MvTgw==}
    engines: {node: '>=20'}

  content-disposition@1.1.0:
    resolution: {integrity: sha512-5jRCH9Z/+DRP7rkvY83B+yGIGX96OYdJmzngqnw2SBSxqCFPd0w2km3s5iawpGX8krnwSGmF0FW5Nhr0Hfai3g==}
    engines: {node: '>=18'}

  content-type@1.0.5:
    resolution: {integrity: sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==}
    engines: {node: '>= 0.6'}

  content-type@2.0.0:
    resolution: {integrity: sha512-j/O/d7GcZCyNl7/hwZAb606rzqkyvaDctLmckbxLzHvFBzTJHuGEdodATcP3yIRoDrLHkIATJuvzbFlp/ki2cQ==}
    engines: {node: '>=18'}

  convert-source-map@2.0.0:
    resolution: {integrity: sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==}

  cookie-signature@1.2.2:
    resolution: {integrity: sha512-D76uU73ulSXrD1UXF4KE2TMxVVwhsnCgfAyTg9k8P6KGZjlXKrOLe4dJQKI3Bxi5wjesZoFXJWElNWBjPZMbhg==}
    engines: {node: '>=6.6.0'}

  cookie@0.7.2:
    resolution: {integrity: sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==}
    engines: {node: '>= 0.6'}

  cors@2.8.6:
    resolution: {integrity: sha512-tJtZBBHA6vjIAaF6EnIaq6laBBP9aq/Y3ouVJjEfoHbRBcHBAHYcMh/w8LDrk2PvIMMq8gmopa5D4V8RmbrxGw==}
    engines: {node: '>= 0.10'}

  cosmiconfig@9.0.1:
    resolution: {integrity: sha512-hr4ihw+DBqcvrsEDioRO31Z17x71pUYoNe/4h6Z0wB72p7MU7/9gH8Q3s12NFhHPfYBBOV3qyfUxmr/Yn3shnQ==}
    engines: {node: '>=14'}
    peerDependencies:
      typescript: '>=4.9.5'
    peerDependenciesMeta:
      typescript:
        optional: true

  cross-spawn@7.0.6:
    resolution: {integrity: sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==}
    engines: {node: '>= 8'}

  cssesc@3.0.0:
    resolution: {integrity: sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==}
    engines: {node: '>=4'}
    hasBin: true

  csstype@3.2.3:
    resolution: {integrity: sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==}

  date-fns@4.1.0:
    resolution: {integrity: sha512-Ukq0owbQXxa/U3EGtsdVBkR1w7KOQ5gIBqdH2hkvknzZPYvBxb/aa6E8L7tmjFtkwZBu3UXBbjIgPo/Ez4xaNg==}

  debug@4.4.3:
    resolution: {integrity: sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  dedent@1.7.2:
    resolution: {integrity: sha512-WzMx3mW98SN+zn3hgemf4OzdmyNhhhKz5Ay0pUfQiMQ3e1g+xmTJWp/pKdwKVXhdSkAEGIIzqeuWrL3mV/AXbA==}
    peerDependencies:
      babel-plugin-macros: ^3.1.0
    peerDependenciesMeta:
      babel-plugin-macros:
        optional: true

  deepmerge@4.3.1:
    resolution: {integrity: sha512-3sUqbMEc77XqpdNO7FRyRog+eW3ph+GYCbj+rK+uYyRMuwsVy0rMiVtPn+QJlKFvWP/1PYpapqYn0Me2knFn+A==}
    engines: {node: '>=0.10.0'}

  default-browser-id@5.0.1:
    resolution: {integrity: sha512-x1VCxdX4t+8wVfd1so/9w+vQ4vx7lKd2Qp5tDRutErwmR85OgmfX7RlLRMWafRMY7hbEiXIbudNrjOAPa/hL8Q==}
    engines: {node: '>=18'}

  default-browser@5.5.0:
    resolution: {integrity: sha512-H9LMLr5zwIbSxrmvikGuI/5KGhZ8E2zH3stkMgM5LpOWDutGM2JZaj460Udnf1a+946zc7YBgrqEWwbk7zHvGw==}
    engines: {node: '>=18'}

  define-lazy-prop@3.0.0:
    resolution: {integrity: sha512-N+MeXYoqr3pOgn8xfyRPREN7gHakLYjhsHhWGT3fWAiL4IkAt0iDw14QiiEm2bE30c5XX5q0FtAA3CK5f9/BUg==}
    engines: {node: '>=12'}

  depd@2.0.0:
    resolution: {integrity: sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==}
    engines: {node: '>= 0.8'}

  detect-libc@2.1.2:
    resolution: {integrity: sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==}
    engines: {node: '>=8'}

  diff@8.0.4:
    resolution: {integrity: sha512-DPi0FmjiSU5EvQV0++GFDOJ9ASQUVFh5kD+OzOnYdi7n3Wpm9hWWGfB/O2blfHcMVTL5WkQXSnRiK9makhrcnw==}
    engines: {node: '>=0.3.1'}

  dotenv@17.4.2:
    resolution: {integrity: sha512-nI4U3TottKAcAD9LLud4Cb7b2QztQMUEfHbvhTH09bqXTxnSie8WnjPALV/WMCrJZ6UV/qHJ6L03OqO3LcdYZw==}
    engines: {node: '>=12'}

  dunder-proto@1.0.1:
    resolution: {integrity: sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==}
    engines: {node: '>= 0.4'}

  eciesjs@0.4.18:
    resolution: {integrity: sha512-wG99Zcfcys9fZux7Cft8BAX/YrOJLJSZ3jyYPfhZHqN2E+Ffx+QXBDsv3gubEgPtV6dTzJMSQUwk1H98/t/0wQ==}
    engines: {bun: '>=1', deno: '>=2', node: '>=16'}

  ee-first@1.1.1:
    resolution: {integrity: sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==}

  electron-to-chromium@1.5.286:
    resolution: {integrity: sha512-9tfDXhJ4RKFNerfjdCcZfufu49vg620741MNs26a9+bhLThdB+plgMeou98CAaHu/WATj2iHOOHTp1hWtABj2A==}

  emoji-regex@10.6.0:
    resolution: {integrity: sha512-toUI84YS5YmxW219erniWD0CIVOo46xGKColeNQRgOzDorgBi1v4D71/OFzgD9GO2UGKIv1C3Sp8DAn0+j5w7A==}

  encodeurl@2.0.0:
    resolution: {integrity: sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==}
    engines: {node: '>= 0.8'}

  enhanced-resolve@5.24.2:
    resolution: {integrity: sha512-rpsZEGT1jFuve6QlpyRp9ckQ+kN61hvF9BzCPyMdaKTm8UJce96KBn3sorXOFXlzjPrs3Vc4T1NsSroZ3PxlFw==}
    engines: {node: '>=10.13.0'}

  enquirer@2.4.1:
    resolution: {integrity: sha512-rRqJg/6gd538VHvR3PSrdRBb/1Vy2YfzHqzvbhGIQpDRKIa4FgV/54b5Q1xYSxOOwKvjXweS26E0Q+nAMwp2pQ==}
    engines: {node: '>=8.6'}

  env-paths@2.2.1:
    resolution: {integrity: sha512-+h1lkLKhZMTYjog1VEpJNG7NZJWcuc2DDk/qsqSTRRCOXiLjeQ1d1/udrUGhqMxUgAlwKNZ0cf2uqan5GLuS2A==}
    engines: {node: '>=6'}

  error-ex@1.3.4:
    resolution: {integrity: sha512-sqQamAnR14VgCr1A618A3sGrygcpK+HEbenA/HiEAkkUwcZIIB/tgWqHFxWgOyDh4nB4JCRimh79dR5Ywc9MDQ==}

  es-define-property@1.0.1:
    resolution: {integrity: sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==}
    engines: {node: '>= 0.4'}

  es-errors@1.3.0:
    resolution: {integrity: sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==}
    engines: {node: '>= 0.4'}

  es-object-atoms@1.1.2:
    resolution: {integrity: sha512-HWcBoN6NileqtSydK2FqHbS/LoDd2pqrnQHLyJzBj4kOp/ky2MWMN694xOfkK8/SnUsW2DH7EfyVlydKCsm1Zw==}
    engines: {node: '>= 0.4'}

  escalade@3.2.0:
    resolution: {integrity: sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==}
    engines: {node: '>=6'}

  escape-html@1.0.3:
    resolution: {integrity: sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==}

  esprima@4.0.1:
    resolution: {integrity: sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==}
    engines: {node: '>=4'}
    hasBin: true

  etag@1.8.1:
    resolution: {integrity: sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==}
    engines: {node: '>= 0.6'}

  eventsource-parser@3.1.0:
    resolution: {integrity: sha512-kJezFj9YFAMLeORyi7aCLxLbD5/qWMQnoMVlVPyHIll7lgRJCc3JVln9Vgl9nwQi0YkMnhdGTMNn7CkRRAptMg==}
    engines: {node: '>=18.0.0'}

  eventsource@3.0.7:
    resolution: {integrity: sha512-CRT1WTyuQoD771GW56XEZFQ/ZoSfWid1alKGDYMmkt2yl8UXrVR4pspqWNEcqKvVIzg6PAltWjxcSSPrboA4iA==}
    engines: {node: '>=18.0.0'}

  execa@5.1.1:
    resolution: {integrity: sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==}
    engines: {node: '>=10'}

  execa@9.6.1:
    resolution: {integrity: sha512-9Be3ZoN4LmYR90tUoVu2te2BsbzHfhJyfEiAVfz7N5/zv+jduIfLrV2xdQXOHbaD6KgpGdO9PRPM1Y4Q9QkPkA==}
    engines: {node: ^18.19.0 || >=20.5.0}

  express-rate-limit@8.5.2:
    resolution: {integrity: sha512-5Kb34ipNX694DH48vN9irak1Qx30nb0PLYHXfJgw4YEjiC3ZEmZJhwOp+VfiCYwFzvFTdB9QkArYS5kXa2cx2A==}
    engines: {node: '>= 16'}
    peerDependencies:
      express: '>= 4.11'

  express@5.2.1:
    resolution: {integrity: sha512-hIS4idWWai69NezIdRt2xFVofaF4j+6INOpJlVOLDO8zXGpUVEVzIYk12UUi2JzjEzWL3IOAxcTubgz9Po0yXw==}
    engines: {node: '>= 18'}

  fast-deep-equal@3.1.3:
    resolution: {integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==}

  fast-glob@3.3.3:
    resolution: {integrity: sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==}
    engines: {node: '>=8.6.0'}

  fast-uri@3.1.2:
    resolution: {integrity: sha512-rVjf7ArG3LTk+FS6Yw81V1DLuZl1bRbNrev6Tmd/9RaroeeRRJhAt7jg/6YFxbvAQXUCavSoZhPPj6oOx+5KjQ==}

  fastq@1.20.1:
    resolution: {integrity: sha512-GGToxJ/w1x32s/D2EKND7kTil4n8OVk/9mycTc4VDza13lOvpUZTGX3mFSCtV9ksdGBVzvsyAVLM6mHFThxXxw==}

  fdir@6.5.0:
    resolution: {integrity: sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==}
    engines: {node: '>=12.0.0'}
    peerDependencies:
      picomatch: ^3 || ^4
    peerDependenciesMeta:
      picomatch:
        optional: true

  figures@6.1.0:
    resolution: {integrity: sha512-d+l3qxjSesT4V7v2fh+QnmFnUWv9lSpjarhShNTgBOfA0ttejbQUAlHLitbjkoRiDulW0OPoQPYIGhIC8ohejg==}
    engines: {node: '>=18'}

  fill-range@7.1.1:
    resolution: {integrity: sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==}
    engines: {node: '>=8'}

  finalhandler@2.1.1:
    resolution: {integrity: sha512-S8KoZgRZN+a5rNwqTxlZZePjT/4cnm0ROV70LedRHZ0p8u9fRID0hJUZQpkKLzro8LfmC8sx23bY6tVNxv8pQA==}
    engines: {node: '>= 18.0.0'}

  forwarded@0.2.0:
    resolution: {integrity: sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==}
    engines: {node: '>= 0.6'}

  fresh@2.0.0:
    resolution: {integrity: sha512-Rx/WycZ60HOaqLKAi6cHRKKI7zxWbJ31MhntmtwMoaTeF7XFH9hhBp8vITaMidfljRQ6eYWCKkaTK+ykVJHP2A==}
    engines: {node: '>= 0.8'}

  fs-extra@11.3.5:
    resolution: {integrity: sha512-eKpRKAovdpZtR1WopLHxlBWvAgPny3c4gX1G5Jhwmmw4XJj0ifSD5qB5TOo8hmA0wlRKDAOAhEE1yVPgs6Fgcg==}
    engines: {node: '>=14.14'}

  function-bind@1.1.2:
    resolution: {integrity: sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==}

  fuzzysort@3.1.0:
    resolution: {integrity: sha512-sR9BNCjBg6LNgwvxlBd0sBABvQitkLzoVY9MYYROQVX/FvfJ4Mai9LsGhDgd8qYdds0bY77VzYd5iuB+v5rwQQ==}

  gensync@1.0.0-beta.2:
    resolution: {integrity: sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==}
    engines: {node: '>=6.9.0'}

  get-east-asian-width@1.6.0:
    resolution: {integrity: sha512-QRbvDIbx6YklUe6RxeTeleMR0yv3cYH6PsPZHcnVn7xv7zO1BHN8r0XETu8n6Ye3Q+ahtSarc3WgtNWmehIBfA==}
    engines: {node: '>=18'}

  get-intrinsic@1.3.0:
    resolution: {integrity: sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==}
    engines: {node: '>= 0.4'}

  get-own-enumerable-keys@1.0.0:
    resolution: {integrity: sha512-PKsK2FSrQCyxcGHsGrLDcK0lx+0Ke+6e8KFFozA9/fIQLhQzPaRvJFdcz7+Axg3jUH/Mq+NI4xa5u/UT2tQskA==}
    engines: {node: '>=14.16'}

  get-proto@1.0.1:
    resolution: {integrity: sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==}
    engines: {node: '>= 0.4'}

  get-stream@6.0.1:
    resolution: {integrity: sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==}
    engines: {node: '>=10'}

  get-stream@9.0.1:
    resolution: {integrity: sha512-kVCxPF3vQM/N0B1PmoqVUqgHP+EeVjmZSQn+1oCRPxd2P21P2F19lIgbR3HBosbB1PUhOAoctJnfEn2GbN2eZA==}
    engines: {node: '>=18'}

  glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}

  gopd@1.2.0:
    resolution: {integrity: sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==}
    engines: {node: '>= 0.4'}

  graceful-fs@4.2.11:
    resolution: {integrity: sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==}

  has-symbols@1.1.0:
    resolution: {integrity: sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==}
    engines: {node: '>= 0.4'}

  hasown@2.0.4:
    resolution: {integrity: sha512-T2UbfbBEF32wiepXIsMlTW9+dDYC6wMh/t/vYA4tuOMKqWz/n3vr1NFSxQiyP+zk2mXsoMA/i/7qV6LKut1t1A==}
    engines: {node: '>= 0.4'}

  hono@4.12.25:
    resolution: {integrity: sha512-2NFaIyNVgJmBs/ecmtGzlmluTFs5cHEWGTdu0t1HBwYzoGXOL5nUQBRMXsXWla5i4KkG//QMzVP88m1+I3fdAQ==}
    engines: {node: '>=16.9.0'}

  http-errors@2.0.1:
    resolution: {integrity: sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==}
    engines: {node: '>= 0.8'}

  human-signals@2.1.0:
    resolution: {integrity: sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==}
    engines: {node: '>=10.17.0'}

  human-signals@8.0.1:
    resolution: {integrity: sha512-eKCa6bwnJhvxj14kZk5NCPc6Hb6BdsU9DZcOnmQKSnO1VKrfV0zCvtttPZUsBvjmNDn8rpcJfpwSYnHBjc95MQ==}
    engines: {node: '>=18.18.0'}

  iconv-lite@0.7.2:
    resolution: {integrity: sha512-im9DjEDQ55s9fL4EYzOAv0yMqmMBSZp6G0VvFyTMPKWxiSBHUj9NW/qqLmXUwXrrM7AvqSlTCfvqRb0cM8yYqw==}
    engines: {node: '>=0.10.0'}

  ignore@5.3.2:
    resolution: {integrity: sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==}
    engines: {node: '>= 4'}

  import-fresh@3.3.1:
    resolution: {integrity: sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==}
    engines: {node: '>=6'}

  inherits@2.0.4:
    resolution: {integrity: sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==}

  ip-address@10.2.0:
    resolution: {integrity: sha512-/+S6j4E9AHvW9SWMSEY9Xfy66O5PWvVEJ08O0y5JGyEKQpojb0K0GKpz/v5HJ/G0vi3D2sjGK78119oXZeE0qA==}
    engines: {node: '>= 12'}

  ipaddr.js@1.9.1:
    resolution: {integrity: sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==}
    engines: {node: '>= 0.10'}

  is-arrayish@0.2.1:
    resolution: {integrity: sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==}

  is-docker@3.0.0:
    resolution: {integrity: sha512-eljcgEDlEns/7AXFosB5K/2nCM4P7FQPkGc/DWLy5rmFEWvZayGrik1d9/QIY5nJ4f9YsVvBkA6kJpHn9rISdQ==}
    engines: {node: ^12.20.0 || ^14.13.1 || >=16.0.0}
    hasBin: true

  is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}

  is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}

  is-in-ssh@1.0.0:
    resolution: {integrity: sha512-jYa6Q9rH90kR1vKB6NM7qqd1mge3Fx4Dhw5TVlK1MUBqhEOuCagrEHMevNuCcbECmXZ0ThXkRm+Ymr51HwEPAw==}
    engines: {node: '>=20'}

  is-inside-container@1.0.0:
    resolution: {integrity: sha512-KIYLCCJghfHZxqjYBE7rEy0OBuTd5xCHS7tHVgvCLkx7StIoaxwNW3hCALgEUjFfeRk+MG/Qxmp/vtETEF3tRA==}
    engines: {node: '>=14.16'}
    hasBin: true

  is-interactive@2.0.0:
    resolution: {integrity: sha512-qP1vozQRI+BMOPcjFzrjXuQvdak2pHNUMZoeG2eRbiSqyvbEf/wQtEOTOX1guk6E3t36RkaqiSt8A/6YElNxLQ==}
    engines: {node: '>=12'}

  is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}

  is-obj@3.0.0:
    resolution: {integrity: sha512-IlsXEHOjtKhpN8r/tRFj2nDyTmHvcfNeu/nrRIcXE17ROeatXchkojffa1SpdqW4cr/Fj6QkEf/Gn4zf6KKvEQ==}
    engines: {node: '>=12'}

  is-plain-obj@4.1.0:
    resolution: {integrity: sha512-+Pgi+vMuUNkJyExiMBt5IlFoMyKnr5zhJ4Uspz58WOhBF5QoIZkFyNHIbBAtHwzVAgk5RtndVNsDRN61/mmDqg==}
    engines: {node: '>=12'}

  is-promise@4.0.0:
    resolution: {integrity: sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==}

  is-regexp@3.1.0:
    resolution: {integrity: sha512-rbku49cWloU5bSMI+zaRaXdQHXnthP6DZ/vLnfdSKyL4zUzuWnomtOEiZZOd+ioQ+avFo/qau3KPTc7Fjy1uPA==}
    engines: {node: '>=12'}

  is-stream@2.0.1:
    resolution: {integrity: sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==}
    engines: {node: '>=8'}

  is-stream@4.0.1:
    resolution: {integrity: sha512-Dnz92NInDqYckGEUJv689RbRiTSEHCQ7wOVeALbkOz999YpqT46yMRIGtSNl2iCL1waAZSx40+h59NV/EwzV/A==}
    engines: {node: '>=18'}

  is-unicode-supported@1.3.0:
    resolution: {integrity: sha512-43r2mRvz+8JRIKnWJ+3j8JtjRKZ6GmjzfaE/qiBJnikNnYv/6bagRJ1kUhNk8R5EX/GkobD+r+sfxCPJsiKBLQ==}
    engines: {node: '>=12'}

  is-unicode-supported@2.1.0:
    resolution: {integrity: sha512-mE00Gnza5EEB3Ds0HfMyllZzbBrmLOX3vfWoj9A9PEnTfratQ/BcaJOuMhnkhjXvb2+FkY3VuHqtAGpTPmglFQ==}
    engines: {node: '>=18'}

  is-wsl@3.1.1:
    resolution: {integrity: sha512-e6rvdUCiQCAuumZslxRJWR/Doq4VpPR82kqclvcS0efgt430SlGIk05vdCN58+VrzgtIcfNODjozVielycD4Sw==}
    engines: {node: '>=16'}

  isexe@2.0.0:
    resolution: {integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==}

  isexe@3.1.5:
    resolution: {integrity: sha512-6B3tLtFqtQS4ekarvLVMZ+X+VlvQekbe4taUkf/rhVO3d/h0M2rfARm/pXLcPEsjjMsFgrFgSrhQIxcSVrBz8w==}
    engines: {node: '>=18'}

  jiti@2.7.0:
    resolution: {integrity: sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==}
    hasBin: true

  jose@6.2.3:
    resolution: {integrity: sha512-YYVDInQKFJfR/xa3ojUTl8c2KoTwiL1R5Wg9YCydwH0x0B9grbzlg5HC7mMjCtUJjbQ/YnGEZIhI5tCgfTb4Hw==}

  js-tokens@4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  js-yaml@4.2.0:
    resolution: {integrity: sha512-ePWsvanv0DWuDRsW8dnt+R4jQ31SCRCQ7hhNcPXZPsoBZiemuZNYGf7adZdqX2D86j6rvKp3RpCxVTSb8WQlOw==}
    hasBin: true

  jsesc@3.1.0:
    resolution: {integrity: sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==}
    engines: {node: '>=6'}
    hasBin: true

  json-parse-even-better-errors@2.3.1:
    resolution: {integrity: sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==}

  json-schema-traverse@1.0.0:
    resolution: {integrity: sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==}

  json-schema-typed@8.0.2:
    resolution: {integrity: sha512-fQhoXdcvc3V28x7C7BMs4P5+kNlgUURe2jmUT1T//oBRMDrqy1QPelJimwZGo7Hg9VPV3EQV5Bnq4hbFy2vetA==}

  json5@2.2.3:
    resolution: {integrity: sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==}
    engines: {node: '>=6'}
    hasBin: true

  jsonfile@6.2.1:
    resolution: {integrity: sha512-zwOTdL3rFQ/lRdBnntKVOX6k5cKJwEc1HdilT71BWEu7J41gXIB2MRp+vxduPSwZJPWBxEzv4yH1wYLJGUHX4Q==}

  kleur@3.0.3:
    resolution: {integrity: sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w==}
    engines: {node: '>=6'}

  kleur@4.1.5:
    resolution: {integrity: sha512-o+NO+8WrRiQEE4/7nwRJhN1HWpVmJm511pBHUxPLtp0BUISzlBplORYSmTclCnJvQq2tKu/sgl3xVpkc7ZWuQQ==}
    engines: {node: '>=6'}

  lightningcss-android-arm64@1.32.0:
    resolution: {integrity: sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [android]

  lightningcss-darwin-arm64@1.32.0:
    resolution: {integrity: sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [darwin]

  lightningcss-darwin-x64@1.32.0:
    resolution: {integrity: sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [darwin]

  lightningcss-freebsd-x64@1.32.0:
    resolution: {integrity: sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [freebsd]

  lightningcss-linux-arm-gnueabihf@1.32.0:
    resolution: {integrity: sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm]
    os: [linux]

  lightningcss-linux-arm64-gnu@1.32.0:
    resolution: {integrity: sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  lightningcss-linux-arm64-musl@1.32.0:
    resolution: {integrity: sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  lightningcss-linux-x64-gnu@1.32.0:
    resolution: {integrity: sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  lightningcss-linux-x64-musl@1.32.0:
    resolution: {integrity: sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  lightningcss-win32-arm64-msvc@1.32.0:
    resolution: {integrity: sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [win32]

  lightningcss-win32-x64-msvc@1.32.0:
    resolution: {integrity: sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [win32]

  lightningcss@1.32.0:
    resolution: {integrity: sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==}
    engines: {node: '>= 12.0.0'}

  lines-and-columns@1.2.4:
    resolution: {integrity: sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==}

  log-symbols@6.0.0:
    resolution: {integrity: sha512-i24m8rpwhmPIS4zscNzK6MSEhk0DUWa/8iYQWxhffV8jkI4Phvs3F+quL5xvS0gdQR0FyTCMMH33Y78dDTzzIw==}
    engines: {node: '>=18'}

  lru-cache@5.1.1:
    resolution: {integrity: sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==}

  lucide-react@1.17.0:
    resolution: {integrity: sha512-9FA9evdox/JQL5PT57fdA1x/yg8T7knJ98+zjTL3UfKza6pflQUUh3XtaQIHKvnsJw1lmsEyHVlt5jchYxOQ5w==}
    peerDependencies:
      react: ^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0

  magic-string@0.30.21:
    resolution: {integrity: sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==}

  math-intrinsics@1.1.0:
    resolution: {integrity: sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==}
    engines: {node: '>= 0.4'}

  media-typer@1.1.0:
    resolution: {integrity: sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==}
    engines: {node: '>= 0.8'}

  merge-descriptors@2.0.0:
    resolution: {integrity: sha512-Snk314V5ayFLhp3fkUREub6WtjBfPdCPY1Ln8/8munuLuiYhsABgBVWsozAG+MWMbVEvcdcpbi9R7ww22l9Q3g==}
    engines: {node: '>=18'}

  merge-stream@2.0.0:
    resolution: {integrity: sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==}

  merge2@1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}

  micromatch@4.0.8:
    resolution: {integrity: sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==}
    engines: {node: '>=8.6'}

  mime-db@1.54.0:
    resolution: {integrity: sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==}
    engines: {node: '>= 0.6'}

  mime-types@3.0.2:
    resolution: {integrity: sha512-Lbgzdk0h4juoQ9fCKXW4by0UJqj+nOOrI9MJ1sSj4nI8aI2eo1qmvQEie4VD1glsS250n15LsWsYtCugiStS5A==}
    engines: {node: '>=18'}

  mimic-fn@2.1.0:
    resolution: {integrity: sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==}
    engines: {node: '>=6'}

  mimic-function@5.0.1:
    resolution: {integrity: sha512-VP79XUPxV2CigYP3jWwAUFSku2aKqBH7uTAapFWCBqutsbmDo96KY5o8uh6U+/YSIn5OxJnXp73beVkpqMIGhA==}
    engines: {node: '>=18'}

  minimatch@10.2.5:
    resolution: {integrity: sha512-MULkVLfKGYDFYejP07QOurDLLQpcjk7Fw+7jXS2R2czRQzR56yHRveU5NDJEOviH+hETZKSkIk5c+T23GjFUMg==}
    engines: {node: 18 || 20 || >=22}

  minimist@1.2.8:
    resolution: {integrity: sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==}

  ms@2.1.3:
    resolution: {integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==}

  nanoid@3.3.11:
    resolution: {integrity: sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  nanoid@3.3.16:
    resolution: {integrity: sha512-bzlKTyNJ7+LdGIIwy8ijFpIqEQIvafahV7eYykJ8Cvh42EdJeODoJ6gUJXpQJvej1BddH8OqTXZNE/KfbWAu8Q==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  negotiator@1.0.0:
    resolution: {integrity: sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==}
    engines: {node: '>= 0.6'}

  next@16.3.3:
    resolution: {integrity: sha512-tuRTx1nQ/yVw83cwJBo9F+njGUgMn3UHQycreWHB8XsStvvAh1AthbI8/4IpKnFaF58F+iSiHejYOlMQ/eq83g==}
    engines: {node: '>=20.9.0'}
    hasBin: true
    peerDependencies:
      '@opentelemetry/api': ^1.1.0
      '@playwright/test': ^1.51.1
      babel-plugin-react-compiler: '*'
      react: ^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0
      react-dom: ^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0
      sass: ^1.3.0
    peerDependenciesMeta:
      '@opentelemetry/api':
        optional: true
      '@playwright/test':
        optional: true
      babel-plugin-react-compiler:
        optional: true
      sass:
        optional: true

  node-releases@2.0.27:
    resolution: {integrity: sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==}

  npm-run-path@4.0.1:
    resolution: {integrity: sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==}
    engines: {node: '>=8'}

  npm-run-path@6.0.0:
    resolution: {integrity: sha512-9qny7Z9DsQU8Ou39ERsPU4OZQlSTP47ShQzuKZ6PRXpYLtIFgl/DEBYEXKlvcEa+9tHVcK8CF81Y2V72qaZhWA==}
    engines: {node: '>=18'}

  object-assign@4.1.1:
    resolution: {integrity: sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==}
    engines: {node: '>=0.10.0'}

  object-inspect@1.13.4:
    resolution: {integrity: sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==}
    engines: {node: '>= 0.4'}

  object-treeify@1.1.33:
    resolution: {integrity: sha512-EFVjAYfzWqWsBMRHPMAXLCDIJnpMhdWAqR7xG6M6a2cs6PMFpl/+Z20w9zDW4vkxOFfddegBKq9Rehd0bxWE7A==}
    engines: {node: '>= 10'}

  on-finished@2.4.1:
    resolution: {integrity: sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==}
    engines: {node: '>= 0.8'}

  once@1.4.0:
    resolution: {integrity: sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==}

  onetime@5.1.2:
    resolution: {integrity: sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==}
    engines: {node: '>=6'}

  onetime@7.0.0:
    resolution: {integrity: sha512-VXJjc87FScF88uafS3JllDgvAm+c/Slfz06lorj2uAY34rlUu0Nt+v8wreiImcrgAjjIHp1rXpTDlLOGw29WwQ==}
    engines: {node: '>=18'}

  open@11.0.0:
    resolution: {integrity: sha512-smsWv2LzFjP03xmvFoJ331ss6h+jixfA4UUV/Bsiyuu4YJPfN+FIQGOIiv4w9/+MoHkfkJ22UIaQWRVFRfH6Vw==}
    engines: {node: '>=20'}

  ora@8.2.0:
    resolution: {integrity: sha512-weP+BZ8MVNnlCm8c0Qdc1WSWq4Qn7I+9CJGm7Qali6g44e/PUzbjNqJX5NJ9ljlNMosfJvg1fKEGILklK9cwnw==}
    engines: {node: '>=18'}

  parent-module@1.0.1:
    resolution: {integrity: sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==}
    engines: {node: '>=6'}

  parse-json@5.2.0:
    resolution: {integrity: sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==}
    engines: {node: '>=8'}

  parse-ms@4.0.0:
    resolution: {integrity: sha512-TXfryirbmq34y8QBwgqCVLi+8oA3oWx2eAnSn62ITyEhEYaWRlVZ2DvMM9eZbMs/RfxPu/PK/aBLyGj4IrqMHw==}
    engines: {node: '>=18'}

  parseurl@1.3.3:
    resolution: {integrity: sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==}
    engines: {node: '>= 0.8'}

  path-browserify@1.0.1:
    resolution: {integrity: sha512-b7uo2UCUOYZcnF/3ID0lulOJi/bafxa1xPe7ZPsammBSpjSWQkjNxlt635YGS2MiR9GjvuXCtz2emr3jbsz98g==}

  path-key@3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}

  path-key@4.0.0:
    resolution: {integrity: sha512-haREypq7xkM7ErfgIyA0z+Bj4AGKlMSdlQE2jvJo6huWD1EdkKYV+G/T4nq0YEF2vgTT8kqMFKo1uHn950r4SQ==}
    engines: {node: '>=12'}

  path-to-regexp@8.4.2:
    resolution: {integrity: sha512-qRcuIdP69NPm4qbACK+aDogI5CBDMi1jKe0ry5rSQJz8JVLsC7jV8XpiJjGRLLol3N+R5ihGYcrPLTno6pAdBA==}

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@2.3.2:
    resolution: {integrity: sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==}
    engines: {node: '>=8.6'}

  picomatch@4.0.4:
    resolution: {integrity: sha512-QP88BAKvMam/3NxH6vj2o21R6MjxZUAd6nlwAS/pnGvN9IVLocLHxGYIzFhg6fUQ+5th6P4dv4eW9jX3DSIj7A==}
    engines: {node: '>=12'}

  pkce-challenge@5.0.1:
    resolution: {integrity: sha512-wQ0b/W4Fr01qtpHlqSqspcj3EhBvimsdh0KlHhH8HRZnMsEa0ea2fTULOXOS9ccQr3om+GcGRk4e+isrZWV8qQ==}
    engines: {node: '>=16.20.0'}

  postcss-selector-parser@7.1.1:
    resolution: {integrity: sha512-orRsuYpJVw8LdAwqqLykBj9ecS5/cRHlI5+nvTo8LcCKmzDmqVORXtOIYEEQuL9D4BxtA1lm5isAqzQZCoQ6Eg==}
    engines: {node: '>=4'}

  postcss@8.5.19:
    resolution: {integrity: sha512-Mz8SaolMd8nB+G13WkORcxQKHZ/NE4xXevtkJHVuG+guo9/wYKlIMTKAqGdEmYOXR2ijPjTYNHssizdaVSUNdQ==}
    engines: {node: ^10 || ^12 || >=14}

  postcss@8.5.23:
    resolution: {integrity: sha512-g50586zr4bZmwFiTlflMu8E0bDTb5I5gertgwAKmsdUlTQIhZtunzUlD1WSzwcVWPoAVpsrA6vlfCD7oXvRwgg==}
    engines: {node: ^10 || ^12 || >=14}

  postcss@8.5.6:
    resolution: {integrity: sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==}
    engines: {node: ^10 || ^12 || >=14}

  powershell-utils@0.1.0:
    resolution: {integrity: sha512-dM0jVuXJPsDN6DvRpea484tCUaMiXWjuCn++HGTqUWzGDjv5tZkEZldAJ/UMlqRYGFrD/etByo4/xOuC/snX2A==}
    engines: {node: '>=20'}

  pretty-ms@9.3.0:
    resolution: {integrity: sha512-gjVS5hOP+M3wMm5nmNOucbIrqudzs9v/57bWRHQWLYklXqoXKrVfYW2W9+glfGsqtPgpiz5WwyEEB+ksXIx3gQ==}
    engines: {node: '>=18'}

  prompts@2.4.2:
    resolution: {integrity: sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q==}
    engines: {node: '>= 6'}

  proxy-addr@2.0.7:
    resolution: {integrity: sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==}
    engines: {node: '>= 0.10'}

  qs@6.15.2:
    resolution: {integrity: sha512-Rzq0KEyX/w/tEybncDgdkZrJgVUsUMk3xjh3t5bv3S1HTAtg+uOYt72+ZfwiQwKdysThkTBdL/rTi6HDmX9Ddw==}
    engines: {node: '>=0.6'}

  queue-microtask@1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}

  range-parser@1.2.1:
    resolution: {integrity: sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==}
    engines: {node: '>= 0.6'}

  raw-body@3.0.2:
    resolution: {integrity: sha512-K5zQjDllxWkf7Z5xJdV0/B0WTNqx6vxG70zJE4N0kBs4LovmEYWJzQGxC9bS9RAKu3bgM40lrd5zoLJ12MQ5BA==}
    engines: {node: '>= 0.10'}

  react-dom@19.2.4:
    resolution: {integrity: sha512-AXJdLo8kgMbimY95O2aKQqsz2iWi9jMgKJhRBAxECE4IFxfcazB2LmzloIoibJI3C12IlY20+KFaLv+71bUJeQ==}
    peerDependencies:
      react: ^19.2.4

  react@19.2.4:
    resolution: {integrity: sha512-9nfp2hYpCwOjAN+8TZFGhtWEwgvWHXqESH8qT89AT/lWklpLON22Lc8pEtnpsZz7VmawabSU0gCjnj8aC0euHQ==}
    engines: {node: '>=0.10.0'}

  recast@0.23.11:
    resolution: {integrity: sha512-YTUo+Flmw4ZXiWfQKGcwwc11KnoRAYgzAE2E7mXKCjSviTKShtxBsN6YUUBB2gtaBzKzeKunxhUwNHQuRryhWA==}
    engines: {node: '>= 4'}

  require-from-string@2.0.2:
    resolution: {integrity: sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==}
    engines: {node: '>=0.10.0'}

  reselect@5.2.0:
    resolution: {integrity: sha512-AgZ3UOZm3YndfrJ4OYjgrT7bmCm/1iqkjvEfH/oYjzh6PD2qw4QuT3jjnXIrpdt4MTpMXclMT3lXbmRY+XRakw==}

  resolve-from@4.0.0:
    resolution: {integrity: sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==}
    engines: {node: '>=4'}

  restore-cursor@5.1.0:
    resolution: {integrity: sha512-oMA2dcrw6u0YfxJQXm342bFKX/E4sG9rbTzO9ptUcR/e8A33cHuvStiYOwH7fszkZlZ1z/ta9AAoPk2F4qIOHA==}
    engines: {node: '>=18'}

  reusify@1.1.0:
    resolution: {integrity: sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}

  router@2.2.0:
    resolution: {integrity: sha512-nLTrUKm2UyiL7rlhapu/Zl45FwNgkZGaCpZbIHajDYgwlJCOzLSk+cIPAnsEqV955GjILJnKbdQC1nVPz+gAYQ==}
    engines: {node: '>= 18'}

  run-applescript@7.1.0:
    resolution: {integrity: sha512-DPe5pVFaAsinSaV6QjQ6gdiedWDcRCbUuiQfQa2wmWV7+xC9bGulGI8+TdRmoFkAPaBXk8CrAbnlY2ISniJ47Q==}
    engines: {node: '>=18'}

  run-parallel@1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}

  safer-buffer@2.1.2:
    resolution: {integrity: sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==}

  scheduler@0.27.0:
    resolution: {integrity: sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==}

  semver@6.3.1:
    resolution: {integrity: sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==}
    hasBin: true

  semver@7.8.5:
    resolution: {integrity: sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==}
    engines: {node: '>=10'}
    hasBin: true

  send@1.2.1:
    resolution: {integrity: sha512-1gnZf7DFcoIcajTjTwjwuDjzuz4PPcY2StKPlsGAQ1+YH20IRVrBaXSWmdjowTJ6u8Rc01PoYOGHXfP1mYcZNQ==}
    engines: {node: '>= 18'}

  serve-static@2.2.1:
    resolution: {integrity: sha512-xRXBn0pPqQTVQiC8wyQrKs2MOlX24zQ0POGaj0kultvoOCstBQM5yvOhAVSUwOMjQtTvsPWoNCHfPGwaaQJhTw==}
    engines: {node: '>= 18'}

  setprototypeof@1.2.0:
    resolution: {integrity: sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==}

  shadcn@4.19.0:
    resolution: {integrity: sha512-EQF6R+CUXTsEP2BpyhxrUEAFesrtFD1POvVOf5jM+wkgtA4kG1EW1+1Wlmi9LqiprSL681JJXBcS0u8WkVVVyQ==}
    engines: {node: '>=20.18.1'}
    hasBin: true

  sharp@0.35.3:
    resolution: {integrity: sha512-ej0zVHuZGHCiABXcNxeYhpRnPNPAcvbG8RMdBAhDAxLKkCRVSpK3Iyu7qbqw3JMzoj0REeM6f3tJLtVwl0023Q==}
    engines: {node: '>=20.9.0'}
    peerDependencies:
      '@types/node': '*'
    peerDependenciesMeta:
      '@types/node':
        optional: true

  shebang-command@2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}

  shebang-regex@3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}

  side-channel-list@1.0.1:
    resolution: {integrity: sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==}
    engines: {node: '>= 0.4'}

  side-channel-map@1.0.1:
    resolution: {integrity: sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==}
    engines: {node: '>= 0.4'}

  side-channel-weakmap@1.0.2:
    resolution: {integrity: sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==}
    engines: {node: '>= 0.4'}

  side-channel@1.1.0:
    resolution: {integrity: sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==}
    engines: {node: '>= 0.4'}

  signal-exit@3.0.7:
    resolution: {integrity: sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==}

  signal-exit@4.1.0:
    resolution: {integrity: sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==}
    engines: {node: '>=14'}

  sisteransi@1.0.5:
    resolution: {integrity: sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg==}

  smart-buffer@4.2.0:
    resolution: {integrity: sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg==}
    engines: {node: '>= 6.0.0', npm: '>= 3.0.0'}

  socks@2.8.9:
    resolution: {integrity: sha512-LJhUYUvItdQ0LkJTmPeaEObWXAqFyfmP85x0tch/ez9cahmhlBBLbIqDFnvBnUJGagb0JbIQrkBs1wJ+yRYpEw==}
    engines: {node: '>= 10.0.0', npm: '>= 3.0.0'}

  source-map-js@1.2.1:
    resolution: {integrity: sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==}
    engines: {node: '>=0.10.0'}

  source-map@0.6.1:
    resolution: {integrity: sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==}
    engines: {node: '>=0.10.0'}

  statuses@2.0.2:
    resolution: {integrity: sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==}
    engines: {node: '>= 0.8'}

  stdin-discarder@0.2.2:
    resolution: {integrity: sha512-UhDfHmA92YAlNnCfhmq0VeNL5bDbiZGg7sZ2IvPsXubGkiNa9EC+tUTsjBRsYUAz87btI6/1wf4XoVvQ3uRnmQ==}
    engines: {node: '>=18'}

  string-width@7.2.0:
    resolution: {integrity: sha512-tsaTIkKW9b4N+AEj+SVA+WhJzV7/zMhcSu78mLKWSk7cXMOSHsBKFWUs0fWwq8QyK3MgJBQRX6Gbi4kYbdvGkQ==}
    engines: {node: '>=18'}

  stringify-object@5.0.0:
    resolution: {integrity: sha512-zaJYxz2FtcMb4f+g60KsRNFOpVMUyuJgA51Zi5Z1DOTC3S59+OQiVOzE9GZt0x72uBGWKsQIuBKeF9iusmKFsg==}
    engines: {node: '>=14.16'}

  strip-ansi@6.0.1:
    resolution: {integrity: sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==}
    engines: {node: '>=8'}

  strip-ansi@7.2.0:
    resolution: {integrity: sha512-yDPMNjp4WyfYBkHnjIRLfca1i6KMyGCtsVgoKe/z1+6vukgaENdgGBZt+ZmKPc4gavvEZ5OgHfHdrazhgNyG7w==}
    engines: {node: '>=12'}

  strip-bom@3.0.0:
    resolution: {integrity: sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==}
    engines: {node: '>=4'}

  strip-final-newline@2.0.0:
    resolution: {integrity: sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==}
    engines: {node: '>=6'}

  strip-final-newline@4.0.0:
    resolution: {integrity: sha512-aulFJcD6YK8V1G7iRB5tigAP4TsHBZZrOV8pjV++zdUwmeV8uzbY7yn6h9MswN62adStNZFuCIx4haBnRuMDaw==}
    engines: {node: '>=18'}

  styled-jsx@5.1.6:
    resolution: {integrity: sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==}
    engines: {node: '>= 12.0.0'}
    peerDependencies:
      '@babel/core': '*'
      babel-plugin-macros: '*'
      react: '>= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0'
    peerDependenciesMeta:
      '@babel/core':
        optional: true
      babel-plugin-macros:
        optional: true

  tailwind-merge@3.4.0:
    resolution: {integrity: sha512-uSaO4gnW+b3Y2aWoWfFpX62vn2sR3skfhbjsEnaBI81WD1wBLlHZe5sWf0AqjksNdYTbGBEd0UasQMT3SNV15g==}

  tailwindcss@4.3.3:
    resolution: {integrity: sha512-gOhV3P7ufE62QDGg1zVaTgCR+EtPv92k2nIhVcVKcLmxT1sUBsQGhnZj175j+MqRt4zLF7ic+sCYjfhxMxj7YQ==}

  tapable@2.3.3:
    resolution: {integrity: sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==}
    engines: {node: '>=6'}

  tiny-invariant@1.3.3:
    resolution: {integrity: sha512-+FbBPE1o9QAYvviau/qC5SE3caw21q3xkvWKBtja5vgqOWIHHJ3ioaq1VPfn/Szqctz2bU/oYeKd9/z5BL+PVg==}

  to-regex-range@5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}

  toidentifier@1.0.1:
    resolution: {integrity: sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==}
    engines: {node: '>=0.6'}

  ts-morph@26.0.0:
    resolution: {integrity: sha512-ztMO++owQnz8c/gIENcM9XfCEzgoGphTv+nKpYNM1bgsdOVC/jRZuEBf6N+mLLDNg68Kl+GgUZfOySaRiG1/Ug==}

  tsconfig-paths@4.2.0:
    resolution: {integrity: sha512-NoZ4roiN7LnbKn9QqE1amc9DJfzvZXxF4xDavcOWt1BPkdx+m+0gJuPM+S0vCe7zTJMYUP0R8pO2XMr+Y8oLIg==}
    engines: {node: '>=6'}

  tslib@2.8.1:
    resolution: {integrity: sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==}

  tw-animate-css@1.4.0:
    resolution: {integrity: sha512-7bziOlRqH0hJx80h/3mbicLW7o8qLsH5+RaLR2t+OHM3D0JlWGODQKQ4cxbK7WlvmUxpcj6Kgu6EKqjrGFe3QQ==}

  type-is@2.1.0:
    resolution: {integrity: sha512-faYHw0anBbc/kWF3zFTEnxSFOAGUX9GFbOBthvDdLsIlEoWOFOtS0zgCiQYwIskL9iGXZL3kAXD8OoZ4GmMATA==}
    engines: {node: '>= 18'}

  typescript@5.7.3:
    resolution: {integrity: sha512-84MVSjMEHP+FQRPy3pX9sTVV/INIex71s9TL2Gm5FG/WG1SqXeKyZ0k7/blY/4FdOzI12CBy1vGc4og/eus0fw==}
    engines: {node: '>=14.17'}
    hasBin: true

  undici-types@7.16.0:
    resolution: {integrity: sha512-Zz+aZWSj8LE6zoxD+xrjh4VfkIG8Ya6LvYkZqtUQGJPZjYl53ypCaUwWqo7eI0x66KBGeRo+mlBEkMSeSZ38Nw==}

  undici@7.29.0:
    resolution: {integrity: sha512-IDxfleLmmbSskfWSUATiN1nfn2rDuvnMOqb5CWR92iIfojA0Ud+ulOAAEQ57LPr9rWmsreUyf5lwyao+7GNNVw==}
    engines: {node: '>=20.18.1'}

  unicorn-magic@0.3.0:
    resolution: {integrity: sha512-+QBBXBCvifc56fsbuxZQ6Sic3wqqc3WWaqxs58gvJrcOuN83HGTCwz3oS5phzU9LthRNE9VrJCFCLUgHeeFnfA==}
    engines: {node: '>=18'}

  universalify@2.0.1:
    resolution: {integrity: sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==}
    engines: {node: '>= 10.0.0'}

  unpipe@1.0.0:
    resolution: {integrity: sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==}
    engines: {node: '>= 0.8'}

  update-browserslist-db@1.2.3:
    resolution: {integrity: sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==}
    hasBin: true
    peerDependencies:
      browserslist: '>= 4.21.0'

  use-sync-external-store@1.6.0:
    resolution: {integrity: sha512-Pp6GSwGP/NrPIrxVFAIkOQeyw8lFenOHijQWkUTrDvrF4ALqylP2C/KCkeS9dpUM3KvYRQhna5vt7IL95+ZQ9w==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0

  util-deprecate@1.0.2:
    resolution: {integrity: sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==}

  validate-npm-package-name@7.0.2:
    resolution: {integrity: sha512-hVDIBwsRruT73PbK7uP5ebUt+ezEtCmzZz3F59BSr2F6OVFnJ/6h8liuvdLrQ88Xmnk6/+xGGuq+pG9WwTuy3A==}
    engines: {node: ^20.17.0 || >=22.9.0}

  vary@1.1.2:
    resolution: {integrity: sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==}
    engines: {node: '>= 0.8'}

  which@2.0.2:
    resolution: {integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==}
    engines: {node: '>= 8'}
    hasBin: true

  which@4.0.0:
    resolution: {integrity: sha512-GlaYyEb07DPxYCKhKzplCWBJtvxZcZMrL+4UkrTSJHHPyZU4mYYTv3qaOe77H7EODLSSopAUFAc6W8U4yqvscg==}
    engines: {node: ^16.13.0 || >=18.0.0}
    hasBin: true

  wrappy@1.0.2:
    resolution: {integrity: sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==}

  wsl-utils@0.3.1:
    resolution: {integrity: sha512-g/eziiSUNBSsdDJtCLB8bdYEUMj4jR7AGeUo96p/3dTafgjHhpF4RiCFPiRILwjQoDXx5MqkBr4fwWtR3Ky4Wg==}
    engines: {node: '>=20'}

  yallist@3.1.1:
    resolution: {integrity: sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==}

  yocto-spinner@1.2.0:
    resolution: {integrity: sha512-Yw0hUB6UA3o4YUgKy3oSe9a4cxoaZ9sBfYDw+JSxo6Id0KoJGoxzPA24qqUXYKBWABs/zDSGTz9kww7t3F0XGw==}
    engines: {node: '>=18.19'}

  yoctocolors@2.1.2:
    resolution: {integrity: sha512-CzhO+pFNo8ajLM2d2IW/R93ipy99LWjtwblvC1RsoSUMZgyLbYFr221TnSNT7GjGdYui6P459mw9JH/g/zW2ug==}
    engines: {node: '>=18'}

  zod-to-json-schema@3.25.2:
    resolution: {integrity: sha512-O/PgfnpT1xKSDeQYSCfRI5Gy3hPf91mKVDuYLUHZJMiDFptvP41MSnWofm8dnCm0256ZNfZIM7DSzuSMAFnjHA==}
    peerDependencies:
      zod: ^3.25.28 || ^4

  zod@3.25.76:
    resolution: {integrity: sha512-gzUt/qt81nXsFGKIFcC3YnfEAx5NkunCfnDlvuBSSFS02bcXu4Lmea0AFIUwbLWxWPx3d9p8S5QoaujKcNQxcQ==}

snapshots:

  '@alloc/quick-lru@5.2.0': {}

  '@babel/code-frame@7.29.7':
    dependencies:
      '@babel/helper-validator-identifier': 7.29.7
      js-tokens: 4.0.0
      picocolors: 1.1.1

  '@babel/compat-data@7.29.7': {}

  '@babel/core@7.29.7':
    dependencies:
      '@babel/code-frame': 7.29.7
      '@babel/generator': 7.29.7
      '@babel/helper-compilation-targets': 7.29.7
      '@babel/helper-module-transforms': 7.29.7(@babel/core@7.29.7)
      '@babel/helpers': 7.29.7
      '@babel/parser': 7.29.7
      '@babel/template': 7.29.7
      '@babel/traverse': 7.29.7
      '@babel/types': 7.29.7
      '@jridgewell/remapping': 2.3.5
      convert-source-map: 2.0.0
      debug: 4.4.3
      gensync: 1.0.0-beta.2
      json5: 2.2.3
      semver: 6.3.1
    transitivePeerDependencies:
      - supports-color

  '@babel/generator@7.29.7':
    dependencies:
      '@babel/parser': 7.29.7
      '@babel/types': 7.29.7
      '@jridgewell/gen-mapping': 0.3.13
      '@jridgewell/trace-mapping': 0.3.31
      jsesc: 3.1.0

  '@babel/helper-annotate-as-pure@7.29.7':
    dependencies:
      '@babel/types': 7.29.7

  '@babel/helper-compilation-targets@7.29.7':
    dependencies:
      '@babel/compat-data': 7.29.7
      '@babel/helper-validator-option': 7.29.7
      browserslist: 4.28.1
      lru-cache: 5.1.1
      semver: 6.3.1

  '@babel/helper-create-class-features-plugin@7.29.7(@babel/core@7.29.7)':
    dependencies:
      '@babel/core': 7.29.7
      '@babel/helper-annotate-as-pure': 7.29.7
      '@babel/helper-member-expression-to-functions': 7.29.7
      '@babel/helper-optimise-call-expression': 7.29.7
      '@babel/helper-replace-supers': 7.29.7(@babel/core@7.29.7)
      '@babel/helper-skip-transparent-expression-wrappers': 7.29.7
      '@babel/traverse': 7.29.7
      semver: 6.3.1
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-globals@7.29.7': {}

  '@babel/helper-member-expression-to-functions@7.29.7':
    dependencies:
      '@babel/traverse': 7.29.7
      '@babel/types': 7.29.7
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-module-imports@7.29.7':
    dependencies:
      '@babel/traverse': 7.29.7
      '@babel/types': 7.29.7
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-module-transforms@7.29.7(@babel/core@7.29.7)':
    dependencies:
      '@babel/core': 7.29.7
      '@babel/helper-module-imports': 7.29.7
      '@babel/helper-validator-identifier': 7.29.7
      '@babel/traverse': 7.29.7
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-optimise-call-expression@7.29.7':
    dependencies:
      '@babel/types': 7.29.7

  '@babel/helper-plugin-utils@7.29.7': {}

  '@babel/helper-replace-supers@7.29.7(@babel/core@7.29.7)':
    dependencies:
      '@babel/core': 7.29.7
      '@babel/helper-member-expression-to-functions': 7.29.7
      '@babel/helper-optimise-call-expression': 7.29.7
      '@babel/traverse': 7.29.7
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-skip-transparent-expression-wrappers@7.29.7':
    dependencies:
      '@babel/traverse': 7.29.7
      '@babel/types': 7.29.7
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-string-parser@7.29.7': {}

  '@babel/helper-validator-identifier@7.29.7': {}

  '@babel/helper-validator-option@7.29.7': {}

  '@babel/helpers@7.29.7':
    dependencies:
      '@babel/template': 7.29.7
      '@babel/types': 7.29.7

  '@babel/parser@7.29.7':
    dependencies:
      '@babel/types': 7.29.7

  '@babel/plugin-syntax-jsx@7.29.7(@babel/core@7.29.7)':
    dependencies:
      '@babel/core': 7.29.7
      '@babel/helper-plugin-utils': 7.29.7

  '@babel/plugin-syntax-typescript@7.29.7(@babel/core@7.29.7)':
    dependencies:
      '@babel/core': 7.29.7
      '@babel/helper-plugin-utils': 7.29.7

  '@babel/plugin-transform-modules-commonjs@7.29.7(@babel/core@7.29.7)':
    dependencies:
      '@babel/core': 7.29.7
      '@babel/helper-module-transforms': 7.29.7(@babel/core@7.29.7)
      '@babel/helper-plugin-utils': 7.29.7
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-typescript@7.29.7(@babel/core@7.29.7)':
    dependencies:
      '@babel/core': 7.29.7
      '@babel/helper-annotate-as-pure': 7.29.7
      '@babel/helper-create-class-features-plugin': 7.29.7(@babel/core@7.29.7)
      '@babel/helper-plugin-utils': 7.29.7
      '@babel/helper-skip-transparent-expression-wrappers': 7.29.7
      '@babel/plugin-syntax-typescript': 7.29.7(@babel/core@7.29.7)
    transitivePeerDependencies:
      - supports-color

  '@babel/preset-typescript@7.29.7(@babel/core@7.29.7)':
    dependencies:
      '@babel/core': 7.29.7
      '@babel/helper-plugin-utils': 7.29.7
      '@babel/helper-validator-option': 7.29.7
      '@babel/plugin-syntax-jsx': 7.29.7(@babel/core@7.29.7)
      '@babel/plugin-transform-modules-commonjs': 7.29.7(@babel/core@7.29.7)
      '@babel/plugin-transform-typescript': 7.29.7(@babel/core@7.29.7)
    transitivePeerDependencies:
      - supports-color

  '@babel/runtime@7.29.7': {}

  '@babel/template@7.29.7':
    dependencies:
      '@babel/code-frame': 7.29.7
      '@babel/parser': 7.29.7
      '@babel/types': 7.29.7

  '@babel/traverse@7.29.7':
    dependencies:
      '@babel/code-frame': 7.29.7
      '@babel/generator': 7.29.7
      '@babel/helper-globals': 7.29.7
      '@babel/parser': 7.29.7
      '@babel/template': 7.29.7
      '@babel/types': 7.29.7
      debug: 4.4.3
    transitivePeerDependencies:
      - supports-color

  '@babel/types@7.29.7':
    dependencies:
      '@babel/helper-string-parser': 7.29.7
      '@babel/helper-validator-identifier': 7.29.7

  '@base-ui/react@1.5.0(@date-fns/tz@1.4.1)(@types/react@19.2.14)(date-fns@4.1.0)(react-dom@19.2.4(react@19.2.4))(react@19.2.4)':
    dependencies:
      '@babel/runtime': 7.29.7
      '@base-ui/utils': 0.2.9(@types/react@19.2.14)(react-dom@19.2.4(react@19.2.4))(react@19.2.4)
      '@floating-ui/react-dom': 2.1.8(react-dom@19.2.4(react@19.2.4))(react@19.2.4)
      '@floating-ui/utils': 0.2.11
      react: 19.2.4
      react-dom: 19.2.4(react@19.2.4)
      use-sync-external-store: 1.6.0(react@19.2.4)
    optionalDependencies:
      '@date-fns/tz': 1.4.1
      '@types/react': 19.2.14
      date-fns: 4.1.0

  '@base-ui/utils@0.2.9(@types/react@19.2.14)(react-dom@19.2.4(react@19.2.4))(react@19.2.4)':
    dependencies:
      '@babel/runtime': 7.29.7
      '@floating-ui/utils': 0.2.11
      react: 19.2.4
      react-dom: 19.2.4(react@19.2.4)
      reselect: 5.2.0
      use-sync-external-store: 1.6.0(react@19.2.4)
    optionalDependencies:
      '@types/react': 19.2.14

  '@date-fns/tz@1.4.1':
    optional: true

  '@dotenvx/dotenvx@1.70.0':
    dependencies:
      commander: 11.1.0
      dotenv: 17.4.2
      eciesjs: 0.4.18
      enquirer: 2.4.1
      execa: 5.1.1
      fdir: 6.5.0(picomatch@4.0.4)
      ignore: 5.3.2
      object-treeify: 1.1.33
      picomatch: 4.0.4
      which: 4.0.0
      yocto-spinner: 1.2.0

  '@ecies/ciphers@0.2.6(@noble/ciphers@1.3.0)':
    dependencies:
      '@noble/ciphers': 1.3.0

  '@emnapi/runtime@1.11.3':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@floating-ui/core@1.7.5':
    dependencies:
      '@floating-ui/utils': 0.2.11

  '@floating-ui/dom@1.7.6':
    dependencies:
      '@floating-ui/core': 1.7.5
      '@floating-ui/utils': 0.2.11

  '@floating-ui/react-dom@2.1.8(react-dom@19.2.4(react@19.2.4))(react@19.2.4)':
    dependencies:
      '@floating-ui/dom': 1.7.6
      react: 19.2.4
      react-dom: 19.2.4(react@19.2.4)

  '@floating-ui/utils@0.2.11': {}

  '@hono/node-server@1.19.14(hono@4.12.25)':
    dependencies:
      hono: 4.12.25

  '@img/colour@1.1.0':
    optional: true

  '@img/sharp-darwin-arm64@0.35.3':
    optionalDependencies:
      '@img/sharp-libvips-darwin-arm64': 1.3.2
    optional: true

  '@img/sharp-darwin-x64@0.35.3':
    optionalDependencies:
      '@img/sharp-libvips-darwin-x64': 1.3.2
    optional: true

  '@img/sharp-freebsd-wasm32@0.35.3':
    dependencies:
      '@img/sharp-wasm32': 0.35.3
    optional: true

  '@img/sharp-libvips-darwin-arm64@1.3.2':
    optional: true

  '@img/sharp-libvips-darwin-x64@1.3.2':
    optional: true

  '@img/sharp-libvips-linux-arm64@1.3.2':
    optional: true

  '@img/sharp-libvips-linux-arm@1.3.2':
    optional: true

  '@img/sharp-libvips-linux-ppc64@1.3.2':
    optional: true

  '@img/sharp-libvips-linux-riscv64@1.3.2':
    optional: true

  '@img/sharp-libvips-linux-s390x@1.3.2':
    optional: true

  '@img/sharp-libvips-linux-x64@1.3.2':
    optional: true

  '@img/sharp-libvips-linuxmusl-arm64@1.3.2':
    optional: true

  '@img/sharp-libvips-linuxmusl-x64@1.3.2':
    optional: true

  '@img/sharp-linux-arm64@0.35.3':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm64': 1.3.2
    optional: true

  '@img/sharp-linux-arm@0.35.3':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm': 1.3.2
    optional: true

  '@img/sharp-linux-ppc64@0.35.3':
    optionalDependencies:
      '@img/sharp-libvips-linux-ppc64': 1.3.2
    optional: true

  '@img/sharp-linux-riscv64@0.35.3':
    optionalDependencies:
      '@img/sharp-libvips-linux-riscv64': 1.3.2
    optional: true

  '@img/sharp-linux-s390x@0.35.3':
    optionalDependencies:
      '@img/sharp-libvips-linux-s390x': 1.3.2
    optional: true

  '@img/sharp-linux-x64@0.35.3':
    optionalDependencies:
      '@img/sharp-libvips-linux-x64': 1.3.2
    optional: true

  '@img/sharp-linuxmusl-arm64@0.35.3':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-arm64': 1.3.2
    optional: true

  '@img/sharp-linuxmusl-x64@0.35.3':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-x64': 1.3.2
    optional: true

  '@img/sharp-wasm32@0.35.3':
    dependencies:
      '@emnapi/runtime': 1.11.3
    optional: true

  '@img/sharp-webcontainers-wasm32@0.35.3':
    dependencies:
      '@img/sharp-wasm32': 0.35.3
    optional: true

  '@img/sharp-win32-arm64@0.35.3':
    optional: true

  '@img/sharp-win32-ia32@0.35.3':
    optional: true

  '@img/sharp-win32-x64@0.35.3':
    optional: true

  '@jridgewell/gen-mapping@0.3.13':
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.5
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/remapping@2.3.5':
    dependencies:
      '@jridgewell/gen-mapping': 0.3.13
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/sourcemap-codec@1.5.5': {}

  '@jridgewell/trace-mapping@0.3.31':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.5.5

  '@modelcontextprotocol/sdk@1.29.0(zod@3.25.76)':
    dependencies:
      '@hono/node-server': 1.19.14(hono@4.12.25)
      ajv: 8.20.0
      ajv-formats: 3.0.1(ajv@8.20.0)
      content-type: 1.0.5
      cors: 2.8.6
      cross-spawn: 7.0.6
      eventsource: 3.0.7
      eventsource-parser: 3.1.0
      express: 5.2.1
      express-rate-limit: 8.5.2(express@5.2.1)
      hono: 4.12.25
      jose: 6.2.3
      json-schema-typed: 8.0.2
      pkce-challenge: 5.0.1
      raw-body: 3.0.2
      zod: 3.25.76
      zod-to-json-schema: 3.25.2(zod@3.25.76)
    transitivePeerDependencies:
      - supports-color

  '@next/env@16.3.3': {}

  '@next/swc-darwin-arm64@16.3.3':
    optional: true

  '@next/swc-darwin-x64@16.3.3':
    optional: true

  '@next/swc-linux-arm64-gnu@16.3.3':
    optional: true

  '@next/swc-linux-arm64-musl@16.3.3':
    optional: true

  '@next/swc-linux-x64-gnu@16.3.3':
    optional: true

  '@next/swc-linux-x64-musl@16.3.3':
    optional: true

  '@next/swc-win32-arm64-msvc@16.3.3':
    optional: true

  '@next/swc-win32-x64-msvc@16.3.3':
    optional: true

  '@noble/ciphers@1.3.0': {}

  '@noble/curves@1.9.7':
    dependencies:
      '@noble/hashes': 1.8.0

  '@noble/hashes@1.8.0': {}

  '@nodelib/fs.scandir@2.1.5':
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0

  '@nodelib/fs.stat@2.0.5': {}

  '@nodelib/fs.walk@1.2.8':
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.20.1

  '@sec-ant/readable-stream@0.4.1': {}

  '@sindresorhus/merge-streams@4.0.0': {}

  '@swc/helpers@0.5.23':
    dependencies:
      tslib: 2.8.1

  '@tailwindcss/node@4.3.3':
    dependencies:
      '@jridgewell/remapping': 2.3.5
      enhanced-resolve: 5.24.2
      jiti: 2.7.0
      lightningcss: 1.32.0
      magic-string: 0.30.21
      source-map-js: 1.2.1
      tailwindcss: 4.3.3

  '@tailwindcss/oxide-android-arm64@4.3.3':
    optional: true

  '@tailwindcss/oxide-darwin-arm64@4.3.3':
    optional: true

  '@tailwindcss/oxide-darwin-x64@4.3.3':
    optional: true

  '@tailwindcss/oxide-freebsd-x64@4.3.3':
    optional: true

  '@tailwindcss/oxide-linux-arm-gnueabihf@4.3.3':
    optional: true

  '@tailwindcss/oxide-linux-arm64-gnu@4.3.3':
    optional: true

  '@tailwindcss/oxide-linux-arm64-musl@4.3.3':
    optional: true

  '@tailwindcss/oxide-linux-x64-gnu@4.3.3':
    optional: true

  '@tailwindcss/oxide-linux-x64-musl@4.3.3':
    optional: true

  '@tailwindcss/oxide-wasm32-wasi@4.3.3':
    optional: true

  '@tailwindcss/oxide-win32-arm64-msvc@4.3.3':
    optional: true

  '@tailwindcss/oxide-win32-x64-msvc@4.3.3':
    optional: true

  '@tailwindcss/oxide@4.3.3':
    optionalDependencies:
      '@tailwindcss/oxide-android-arm64': 4.3.3
      '@tailwindcss/oxide-darwin-arm64': 4.3.3
      '@tailwindcss/oxide-darwin-x64': 4.3.3
      '@tailwindcss/oxide-freebsd-x64': 4.3.3
      '@tailwindcss/oxide-linux-arm-gnueabihf': 4.3.3
      '@tailwindcss/oxide-linux-arm64-gnu': 4.3.3
      '@tailwindcss/oxide-linux-arm64-musl': 4.3.3
      '@tailwindcss/oxide-linux-x64-gnu': 4.3.3
      '@tailwindcss/oxide-linux-x64-musl': 4.3.3
      '@tailwindcss/oxide-wasm32-wasi': 4.3.3
      '@tailwindcss/oxide-win32-arm64-msvc': 4.3.3
      '@tailwindcss/oxide-win32-x64-msvc': 4.3.3

  '@tailwindcss/postcss@4.3.3':
    dependencies:
      '@alloc/quick-lru': 5.2.0
      '@tailwindcss/node': 4.3.3
      '@tailwindcss/oxide': 4.3.3
      postcss: 8.5.19
      tailwindcss: 4.3.3

  '@ts-morph/common@0.27.0':
    dependencies:
      fast-glob: 3.3.3
      minimatch: 10.2.5
      path-browserify: 1.0.1

  '@types/node@24.10.4':
    dependencies:
      undici-types: 7.16.0

  '@types/react-dom@19.2.3(@types/react@19.2.14)':
    dependencies:
      '@types/react': 19.2.14

  '@types/react@19.2.14':
    dependencies:
      csstype: 3.2.3

  '@types/validate-npm-package-name@4.0.2': {}

  '@vercel/analytics@1.6.1(next@16.3.3(@babel/core@7.29.7)(@types/node@24.10.4)(react-dom@19.2.4(react@19.2.4))(react@19.2.4))(react@19.2.4)':
    optionalDependencies:
      next: 16.3.3(@babel/core@7.29.7)(@types/node@24.10.4)(react-dom@19.2.4(react@19.2.4))(react@19.2.4)
      react: 19.2.4

  accepts@2.0.0:
    dependencies:
      mime-types: 3.0.2
      negotiator: 1.0.0

  ajv-formats@3.0.1(ajv@8.20.0):
    optionalDependencies:
      ajv: 8.20.0

  ajv@8.20.0:
    dependencies:
      fast-deep-equal: 3.1.3
      fast-uri: 3.1.2
      json-schema-traverse: 1.0.0
      require-from-string: 2.0.2

  ansi-colors@4.1.3: {}

  ansi-regex@5.0.1: {}

  ansi-regex@6.2.2: {}

  argparse@2.0.1: {}

  ast-types@0.16.1:
    dependencies:
      tslib: 2.8.1

  balanced-match@4.0.4: {}

  baseline-browser-mapping@2.9.19: {}

  body-parser@2.2.2:
    dependencies:
      bytes: 3.1.2
      content-type: 1.0.5
      debug: 4.4.3
      http-errors: 2.0.1
      iconv-lite: 0.7.2
      on-finished: 2.4.1
      qs: 6.15.2
      raw-body: 3.0.2
      type-is: 2.1.0
    transitivePeerDependencies:
      - supports-color

  brace-expansion@5.0.6:
    dependencies:
      balanced-match: 4.0.4

  braces@3.0.3:
    dependencies:
      fill-range: 7.1.1

  browserslist@4.28.1:
    dependencies:
      baseline-browser-mapping: 2.9.19
      caniuse-lite: 1.0.30001769
      electron-to-chromium: 1.5.286
      node-releases: 2.0.27
      update-browserslist-db: 1.2.3(browserslist@4.28.1)

  bundle-name@4.1.0:
    dependencies:
      run-applescript: 7.1.0

  bytes@3.1.2: {}

  call-bind-apply-helpers@1.0.2:
    dependencies:
      es-errors: 1.3.0
      function-bind: 1.1.2

  call-bound@1.0.4:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      get-intrinsic: 1.3.0

  callsites@3.1.0: {}

  caniuse-lite@1.0.30001769: {}

  chalk@5.6.2: {}

  class-variance-authority@0.7.1:
    dependencies:
      clsx: 2.1.1

  cli-cursor@5.0.0:
    dependencies:
      restore-cursor: 5.1.0

  cli-spinners@2.9.2: {}

  client-only@0.0.1: {}

  clsx@2.1.1: {}

  code-block-writer@13.0.3: {}

  commander@11.1.0: {}

  commander@14.0.3: {}

  content-disposition@1.1.0: {}

  content-type@1.0.5: {}

  content-type@2.0.0: {}

  convert-source-map@2.0.0: {}

  cookie-signature@1.2.2: {}

  cookie@0.7.2: {}

  cors@2.8.6:
    dependencies:
      object-assign: 4.1.1
      vary: 1.1.2

  cosmiconfig@9.0.1(typescript@5.7.3):
    dependencies:
      env-paths: 2.2.1
      import-fresh: 3.3.1
      js-yaml: 4.2.0
      parse-json: 5.2.0
    optionalDependencies:
      typescript: 5.7.3

  cross-spawn@7.0.6:
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2

  cssesc@3.0.0: {}

  csstype@3.2.3: {}

  date-fns@4.1.0:
    optional: true

  debug@4.4.3:
    dependencies:
      ms: 2.1.3

  dedent@1.7.2: {}

  deepmerge@4.3.1: {}

  default-browser-id@5.0.1: {}

  default-browser@5.5.0:
    dependencies:
      bundle-name: 4.1.0
      default-browser-id: 5.0.1

  define-lazy-prop@3.0.0: {}

  depd@2.0.0: {}

  detect-libc@2.1.2: {}

  diff@8.0.4: {}

  dotenv@17.4.2: {}

  dunder-proto@1.0.1:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-errors: 1.3.0
      gopd: 1.2.0

  eciesjs@0.4.18:
    dependencies:
      '@ecies/ciphers': 0.2.6(@noble/ciphers@1.3.0)
      '@noble/ciphers': 1.3.0
      '@noble/curves': 1.9.7
      '@noble/hashes': 1.8.0

  ee-first@1.1.1: {}

  electron-to-chromium@1.5.286: {}

  emoji-regex@10.6.0: {}

  encodeurl@2.0.0: {}

  enhanced-resolve@5.24.2:
    dependencies:
      graceful-fs: 4.2.11
      tapable: 2.3.3

  enquirer@2.4.1:
    dependencies:
      ansi-colors: 4.1.3
      strip-ansi: 6.0.1

  env-paths@2.2.1: {}

  error-ex@1.3.4:
    dependencies:
      is-arrayish: 0.2.1

  es-define-property@1.0.1: {}

  es-errors@1.3.0: {}

  es-object-atoms@1.1.2:
    dependencies:
      es-errors: 1.3.0

  escalade@3.2.0: {}

  escape-html@1.0.3: {}

  esprima@4.0.1: {}

  etag@1.8.1: {}

  eventsource-parser@3.1.0: {}

  eventsource@3.0.7:
    dependencies:
      eventsource-parser: 3.1.0

  execa@5.1.1:
    dependencies:
      cross-spawn: 7.0.6
      get-stream: 6.0.1
      human-signals: 2.1.0
      is-stream: 2.0.1
      merge-stream: 2.0.0
      npm-run-path: 4.0.1
      onetime: 5.1.2
      signal-exit: 3.0.7
      strip-final-newline: 2.0.0

  execa@9.6.1:
    dependencies:
      '@sindresorhus/merge-streams': 4.0.0
      cross-spawn: 7.0.6
      figures: 6.1.0
      get-stream: 9.0.1
      human-signals: 8.0.1
      is-plain-obj: 4.1.0
      is-stream: 4.0.1
      npm-run-path: 6.0.0
      pretty-ms: 9.3.0
      signal-exit: 4.1.0
      strip-final-newline: 4.0.0
      yoctocolors: 2.1.2

  express-rate-limit@8.5.2(express@5.2.1):
    dependencies:
      express: 5.2.1
      ip-address: 10.2.0

  express@5.2.1:
    dependencies:
      accepts: 2.0.0
      body-parser: 2.2.2
      content-disposition: 1.1.0
      content-type: 1.0.5
      cookie: 0.7.2
      cookie-signature: 1.2.2
      debug: 4.4.3
      depd: 2.0.0
      encodeurl: 2.0.0
      escape-html: 1.0.3
      etag: 1.8.1
      finalhandler: 2.1.1
      fresh: 2.0.0
      http-errors: 2.0.1
      merge-descriptors: 2.0.0
      mime-types: 3.0.2
      on-finished: 2.4.1
      once: 1.4.0
      parseurl: 1.3.3
      proxy-addr: 2.0.7
      qs: 6.15.2
      range-parser: 1.2.1
      router: 2.2.0
      send: 1.2.1
      serve-static: 2.2.1
      statuses: 2.0.2
      type-is: 2.1.0
      vary: 1.1.2
    transitivePeerDependencies:
      - supports-color

  fast-deep-equal@3.1.3: {}

  fast-glob@3.3.3:
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.8

  fast-uri@3.1.2: {}

  fastq@1.20.1:
    dependencies:
      reusify: 1.1.0

  fdir@6.5.0(picomatch@4.0.4):
    optionalDependencies:
      picomatch: 4.0.4

  figures@6.1.0:
    dependencies:
      is-unicode-supported: 2.1.0

  fill-range@7.1.1:
    dependencies:
      to-regex-range: 5.0.1

  finalhandler@2.1.1:
    dependencies:
      debug: 4.4.3
      encodeurl: 2.0.0
      escape-html: 1.0.3
      on-finished: 2.4.1
      parseurl: 1.3.3
      statuses: 2.0.2
    transitivePeerDependencies:
      - supports-color

  forwarded@0.2.0: {}

  fresh@2.0.0: {}

  fs-extra@11.3.5:
    dependencies:
      graceful-fs: 4.2.11
      jsonfile: 6.2.1
      universalify: 2.0.1

  function-bind@1.1.2: {}

  fuzzysort@3.1.0: {}

  gensync@1.0.0-beta.2: {}

  get-east-asian-width@1.6.0: {}

  get-intrinsic@1.3.0:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-define-property: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.2
      function-bind: 1.1.2
      get-proto: 1.0.1
      gopd: 1.2.0
      has-symbols: 1.1.0
      hasown: 2.0.4
      math-intrinsics: 1.1.0

  get-own-enumerable-keys@1.0.0: {}

  get-proto@1.0.1:
    dependencies:
      dunder-proto: 1.0.1
      es-object-atoms: 1.1.2

  get-stream@6.0.1: {}

  get-stream@9.0.1:
    dependencies:
      '@sec-ant/readable-stream': 0.4.1
      is-stream: 4.0.1

  glob-parent@5.1.2:
    dependencies:
      is-glob: 4.0.3

  gopd@1.2.0: {}

  graceful-fs@4.2.11: {}

  has-symbols@1.1.0: {}

  hasown@2.0.4:
    dependencies:
      function-bind: 1.1.2

  hono@4.12.25: {}

  http-errors@2.0.1:
    dependencies:
      depd: 2.0.0
      inherits: 2.0.4
      setprototypeof: 1.2.0
      statuses: 2.0.2
      toidentifier: 1.0.1

  human-signals@2.1.0: {}

  human-signals@8.0.1: {}

  iconv-lite@0.7.2:
    dependencies:
      safer-buffer: 2.1.2

  ignore@5.3.2: {}

  import-fresh@3.3.1:
    dependencies:
      parent-module: 1.0.1
      resolve-from: 4.0.0

  inherits@2.0.4: {}

  ip-address@10.2.0: {}

  ipaddr.js@1.9.1: {}

  is-arrayish@0.2.1: {}

  is-docker@3.0.0: {}

  is-extglob@2.1.1: {}

  is-glob@4.0.3:
    dependencies:
      is-extglob: 2.1.1

  is-in-ssh@1.0.0: {}

  is-inside-container@1.0.0:
    dependencies:
      is-docker: 3.0.0

  is-interactive@2.0.0: {}

  is-number@7.0.0: {}

  is-obj@3.0.0: {}

  is-plain-obj@4.1.0: {}

  is-promise@4.0.0: {}

  is-regexp@3.1.0: {}

  is-stream@2.0.1: {}

  is-stream@4.0.1: {}

  is-unicode-supported@1.3.0: {}

  is-unicode-supported@2.1.0: {}

  is-wsl@3.1.1:
    dependencies:
      is-inside-container: 1.0.0

  isexe@2.0.0: {}

  isexe@3.1.5: {}

  jiti@2.7.0: {}

  jose@6.2.3: {}

  js-tokens@4.0.0: {}

  js-yaml@4.2.0:
    dependencies:
      argparse: 2.0.1

  jsesc@3.1.0: {}

  json-parse-even-better-errors@2.3.1: {}

  json-schema-traverse@1.0.0: {}

  json-schema-typed@8.0.2: {}

  json5@2.2.3: {}

  jsonfile@6.2.1:
    dependencies:
      universalify: 2.0.1
    optionalDependencies:
      graceful-fs: 4.2.11

  kleur@3.0.3: {}

  kleur@4.1.5: {}

  lightningcss-android-arm64@1.32.0:
    optional: true

  lightningcss-darwin-arm64@1.32.0:
    optional: true

  lightningcss-darwin-x64@1.32.0:
    optional: true

  lightningcss-freebsd-x64@1.32.0:
    optional: true

  lightningcss-linux-arm-gnueabihf@1.32.0:
    optional: true

  lightningcss-linux-arm64-gnu@1.32.0:
    optional: true

  lightningcss-linux-arm64-musl@1.32.0:
    optional: true

  lightningcss-linux-x64-gnu@1.32.0:
    optional: true

  lightningcss-linux-x64-musl@1.32.0:
    optional: true

  lightningcss-win32-arm64-msvc@1.32.0:
    optional: true

  lightningcss-win32-x64-msvc@1.32.0:
    optional: true

  lightningcss@1.32.0:
    dependencies:
      detect-libc: 2.1.2
    optionalDependencies:
      lightningcss-android-arm64: 1.32.0
      lightningcss-darwin-arm64: 1.32.0
      lightningcss-darwin-x64: 1.32.0
      lightningcss-freebsd-x64: 1.32.0
      lightningcss-linux-arm-gnueabihf: 1.32.0
      lightningcss-linux-arm64-gnu: 1.32.0
      lightningcss-linux-arm64-musl: 1.32.0
      lightningcss-linux-x64-gnu: 1.32.0
      lightningcss-linux-x64-musl: 1.32.0
      lightningcss-win32-arm64-msvc: 1.32.0
      lightningcss-win32-x64-msvc: 1.32.0

  lines-and-columns@1.2.4: {}

  log-symbols@6.0.0:
    dependencies:
      chalk: 5.6.2
      is-unicode-supported: 1.3.0

  lru-cache@5.1.1:
    dependencies:
      yallist: 3.1.1

  lucide-react@1.17.0(react@19.2.4):
    dependencies:
      react: 19.2.4

  magic-string@0.30.21:
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.5

  math-intrinsics@1.1.0: {}

  media-typer@1.1.0: {}

  merge-descriptors@2.0.0: {}

  merge-stream@2.0.0: {}

  merge2@1.4.1: {}

  micromatch@4.0.8:
    dependencies:
      braces: 3.0.3
      picomatch: 2.3.2

  mime-db@1.54.0: {}

  mime-types@3.0.2:
    dependencies:
      mime-db: 1.54.0

  mimic-fn@2.1.0: {}

  mimic-function@5.0.1: {}

  minimatch@10.2.5:
    dependencies:
      brace-expansion: 5.0.6

  minimist@1.2.8: {}

  ms@2.1.3: {}

  nanoid@3.3.11: {}

  nanoid@3.3.16: {}

  negotiator@1.0.0: {}

  next@16.3.3(@babel/core@7.29.7)(@types/node@24.10.4)(react-dom@19.2.4(react@19.2.4))(react@19.2.4):
    dependencies:
      '@next/env': 16.3.3
      '@swc/helpers': 0.5.23
      baseline-browser-mapping: 2.9.19
      caniuse-lite: 1.0.30001769
      postcss: 8.5.23
      react: 19.2.4
      react-dom: 19.2.4(react@19.2.4)
      styled-jsx: 5.1.6(@babel/core@7.29.7)(react@19.2.4)
    optionalDependencies:
      '@next/swc-darwin-arm64': 16.3.3
      '@next/swc-darwin-x64': 16.3.3
      '@next/swc-linux-arm64-gnu': 16.3.3
      '@next/swc-linux-arm64-musl': 16.3.3
      '@next/swc-linux-x64-gnu': 16.3.3
      '@next/swc-linux-x64-musl': 16.3.3
      '@next/swc-win32-arm64-msvc': 16.3.3
      '@next/swc-win32-x64-msvc': 16.3.3
      sharp: 0.35.3(@types/node@24.10.4)
    transitivePeerDependencies:
      - '@babel/core'
      - '@types/node'
      - babel-plugin-macros

  node-releases@2.0.27: {}

  npm-run-path@4.0.1:
    dependencies:
      path-key: 3.1.1

  npm-run-path@6.0.0:
    dependencies:
      path-key: 4.0.0
      unicorn-magic: 0.3.0

  object-assign@4.1.1: {}

  object-inspect@1.13.4: {}

  object-treeify@1.1.33: {}

  on-finished@2.4.1:
    dependencies:
      ee-first: 1.1.1

  once@1.4.0:
    dependencies:
      wrappy: 1.0.2

  onetime@5.1.2:
    dependencies:
      mimic-fn: 2.1.0

  onetime@7.0.0:
    dependencies:
      mimic-function: 5.0.1

  open@11.0.0:
    dependencies:
      default-browser: 5.5.0
      define-lazy-prop: 3.0.0
      is-in-ssh: 1.0.0
      is-inside-container: 1.0.0
      powershell-utils: 0.1.0
      wsl-utils: 0.3.1

  ora@8.2.0:
    dependencies:
      chalk: 5.6.2
      cli-cursor: 5.0.0
      cli-spinners: 2.9.2
      is-interactive: 2.0.0
      is-unicode-supported: 2.1.0
      log-symbols: 6.0.0
      stdin-discarder: 0.2.2
      string-width: 7.2.0
      strip-ansi: 7.2.0

  parent-module@1.0.1:
    dependencies:
      callsites: 3.1.0

  parse-json@5.2.0:
    dependencies:
      '@babel/code-frame': 7.29.7
      error-ex: 1.3.4
      json-parse-even-better-errors: 2.3.1
      lines-and-columns: 1.2.4

  parse-ms@4.0.0: {}

  parseurl@1.3.3: {}

  path-browserify@1.0.1: {}

  path-key@3.1.1: {}

  path-key@4.0.0: {}

  path-to-regexp@8.4.2: {}

  picocolors@1.1.1: {}

  picomatch@2.3.2: {}

  picomatch@4.0.4: {}

  pkce-challenge@5.0.1: {}

  postcss-selector-parser@7.1.1:
    dependencies:
      cssesc: 3.0.0
      util-deprecate: 1.0.2

  postcss@8.5.19:
    dependencies:
      nanoid: 3.3.16
      picocolors: 1.1.1
      source-map-js: 1.2.1

  postcss@8.5.23:
    dependencies:
      nanoid: 3.3.16
      picocolors: 1.1.1
      source-map-js: 1.2.1

  postcss@8.5.6:
    dependencies:
      nanoid: 3.3.11
      picocolors: 1.1.1
      source-map-js: 1.2.1

  powershell-utils@0.1.0: {}

  pretty-ms@9.3.0:
    dependencies:
      parse-ms: 4.0.0

  prompts@2.4.2:
    dependencies:
      kleur: 3.0.3
      sisteransi: 1.0.5

  proxy-addr@2.0.7:
    dependencies:
      forwarded: 0.2.0
      ipaddr.js: 1.9.1

  qs@6.15.2:
    dependencies:
      side-channel: 1.1.0

  queue-microtask@1.2.3: {}

  range-parser@1.2.1: {}

  raw-body@3.0.2:
    dependencies:
      bytes: 3.1.2
      http-errors: 2.0.1
      iconv-lite: 0.7.2
      unpipe: 1.0.0

  react-dom@19.2.4(react@19.2.4):
    dependencies:
      react: 19.2.4
      scheduler: 0.27.0

  react@19.2.4: {}

  recast@0.23.11:
    dependencies:
      ast-types: 0.16.1
      esprima: 4.0.1
      source-map: 0.6.1
      tiny-invariant: 1.3.3
      tslib: 2.8.1

  require-from-string@2.0.2: {}

  reselect@5.2.0: {}

  resolve-from@4.0.0: {}

  restore-cursor@5.1.0:
    dependencies:
      onetime: 7.0.0
      signal-exit: 4.1.0

  reusify@1.1.0: {}

  router@2.2.0:
    dependencies:
      debug: 4.4.3
      depd: 2.0.0
      is-promise: 4.0.0
      parseurl: 1.3.3
      path-to-regexp: 8.4.2
    transitivePeerDependencies:
      - supports-color

  run-applescript@7.1.0: {}

  run-parallel@1.2.0:
    dependencies:
      queue-microtask: 1.2.3

  safer-buffer@2.1.2: {}

  scheduler@0.27.0: {}

  semver@6.3.1: {}

  semver@7.8.5:
    optional: true

  send@1.2.1:
    dependencies:
      debug: 4.4.3
      encodeurl: 2.0.0
      escape-html: 1.0.3
      etag: 1.8.1
      fresh: 2.0.0
      http-errors: 2.0.1
      mime-types: 3.0.2
      ms: 2.1.3
      on-finished: 2.4.1
      range-parser: 1.2.1
      statuses: 2.0.2
    transitivePeerDependencies:
      - supports-color

  serve-static@2.2.1:
    dependencies:
      encodeurl: 2.0.0
      escape-html: 1.0.3
      parseurl: 1.3.3
      send: 1.2.1
    transitivePeerDependencies:
      - supports-color

  setprototypeof@1.2.0: {}

  shadcn@4.19.0(typescript@5.7.3):
    dependencies:
      '@babel/core': 7.29.7
      '@babel/parser': 7.29.7
      '@babel/plugin-transform-typescript': 7.29.7(@babel/core@7.29.7)
      '@babel/preset-typescript': 7.29.7(@babel/core@7.29.7)
      '@dotenvx/dotenvx': 1.70.0
      '@modelcontextprotocol/sdk': 1.29.0(zod@3.25.76)
      '@types/validate-npm-package-name': 4.0.2
      browserslist: 4.28.1
      commander: 14.0.3
      cosmiconfig: 9.0.1(typescript@5.7.3)
      dedent: 1.7.2
      deepmerge: 4.3.1
      diff: 8.0.4
      execa: 9.6.1
      fast-glob: 3.3.3
      fs-extra: 11.3.5
      fuzzysort: 3.1.0
      kleur: 4.1.5
      open: 11.0.0
      ora: 8.2.0
      postcss: 8.5.23
      postcss-selector-parser: 7.1.1
      prompts: 2.4.2
      recast: 0.23.11
      socks: 2.8.9
      stringify-object: 5.0.0
      tailwind-merge: 3.4.0
      ts-morph: 26.0.0
      tsconfig-paths: 4.2.0
      undici: 7.29.0
      validate-npm-package-name: 7.0.2
      zod: 3.25.76
      zod-to-json-schema: 3.25.2(zod@3.25.76)
    transitivePeerDependencies:
      - '@cfworker/json-schema'
      - babel-plugin-macros
      - supports-color
      - typescript

  sharp@0.35.3(@types/node@24.10.4):
    dependencies:
      '@img/colour': 1.1.0
      detect-libc: 2.1.2
      semver: 7.8.5
    optionalDependencies:
      '@img/sharp-darwin-arm64': 0.35.3
      '@img/sharp-darwin-x64': 0.35.3
      '@img/sharp-freebsd-wasm32': 0.35.3
      '@img/sharp-libvips-darwin-arm64': 1.3.2
      '@img/sharp-libvips-darwin-x64': 1.3.2
      '@img/sharp-libvips-linux-arm': 1.3.2
      '@img/sharp-libvips-linux-arm64': 1.3.2
      '@img/sharp-libvips-linux-ppc64': 1.3.2
      '@img/sharp-libvips-linux-riscv64': 1.3.2
      '@img/sharp-libvips-linux-s390x': 1.3.2
      '@img/sharp-libvips-linux-x64': 1.3.2
      '@img/sharp-libvips-linuxmusl-arm64': 1.3.2
      '@img/sharp-libvips-linuxmusl-x64': 1.3.2
      '@img/sharp-linux-arm': 0.35.3
      '@img/sharp-linux-arm64': 0.35.3
      '@img/sharp-linux-ppc64': 0.35.3
      '@img/sharp-linux-riscv64': 0.35.3
      '@img/sharp-linux-s390x': 0.35.3
      '@img/sharp-linux-x64': 0.35.3
      '@img/sharp-linuxmusl-arm64': 0.35.3
      '@img/sharp-linuxmusl-x64': 0.35.3
      '@img/sharp-webcontainers-wasm32': 0.35.3
      '@img/sharp-win32-arm64': 0.35.3
      '@img/sharp-win32-ia32': 0.35.3
      '@img/sharp-win32-x64': 0.35.3
      '@types/node': 24.10.4
    optional: true

  shebang-command@2.0.0:
    dependencies:
      shebang-regex: 3.0.0

  shebang-regex@3.0.0: {}

  side-channel-list@1.0.1:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4

  side-channel-map@1.0.1:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4

  side-channel-weakmap@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4
      side-channel-map: 1.0.1

  side-channel@1.1.0:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4
      side-channel-list: 1.0.1
      side-channel-map: 1.0.1
      side-channel-weakmap: 1.0.2

  signal-exit@3.0.7: {}

  signal-exit@4.1.0: {}

  sisteransi@1.0.5: {}

  smart-buffer@4.2.0: {}

  socks@2.8.9:
    dependencies:
      ip-address: 10.2.0
      smart-buffer: 4.2.0

  source-map-js@1.2.1: {}

  source-map@0.6.1: {}

  statuses@2.0.2: {}

  stdin-discarder@0.2.2: {}

  string-width@7.2.0:
    dependencies:
      emoji-regex: 10.6.0
      get-east-asian-width: 1.6.0
      strip-ansi: 7.2.0

  stringify-object@5.0.0:
    dependencies:
      get-own-enumerable-keys: 1.0.0
      is-obj: 3.0.0
      is-regexp: 3.1.0

  strip-ansi@6.0.1:
    dependencies:
      ansi-regex: 5.0.1

  strip-ansi@7.2.0:
    dependencies:
      ansi-regex: 6.2.2

  strip-bom@3.0.0: {}

  strip-final-newline@2.0.0: {}

  strip-final-newline@4.0.0: {}

  styled-jsx@5.1.6(@babel/core@7.29.7)(react@19.2.4):
    dependencies:
      client-only: 0.0.1
      react: 19.2.4
    optionalDependencies:
      '@babel/core': 7.29.7

  tailwind-merge@3.4.0: {}

  tailwindcss@4.3.3: {}

  tapable@2.3.3: {}

  tiny-invariant@1.3.3: {}

  to-regex-range@5.0.1:
    dependencies:
      is-number: 7.0.0

  toidentifier@1.0.1: {}

  ts-morph@26.0.0:
    dependencies:
      '@ts-morph/common': 0.27.0
      code-block-writer: 13.0.3

  tsconfig-paths@4.2.0:
    dependencies:
      json5: 2.2.3
      minimist: 1.2.8
      strip-bom: 3.0.0

  tslib@2.8.1: {}

  tw-animate-css@1.4.0: {}

  type-is@2.1.0:
    dependencies:
      content-type: 2.0.0
      media-typer: 1.1.0
      mime-types: 3.0.2

  typescript@5.7.3: {}

  undici-types@7.16.0: {}

  undici@7.29.0: {}

  unicorn-magic@0.3.0: {}

  universalify@2.0.1: {}

  unpipe@1.0.0: {}

  update-browserslist-db@1.2.3(browserslist@4.28.1):
    dependencies:
      browserslist: 4.28.1
      escalade: 3.2.0
      picocolors: 1.1.1

  use-sync-external-store@1.6.0(react@19.2.4):
    dependencies:
      react: 19.2.4

  util-deprecate@1.0.2: {}

  validate-npm-package-name@7.0.2: {}

  vary@1.1.2: {}

  which@2.0.2:
    dependencies:
      isexe: 2.0.0

  which@4.0.0:
    dependencies:
      isexe: 3.1.5

  wrappy@1.0.2: {}

  wsl-utils@0.3.1:
    dependencies:
      is-wsl: 3.1.1
      powershell-utils: 0.1.0

  yallist@3.1.1: {}

  yocto-spinner@1.2.0:
    dependencies:
      yoctocolors: 2.1.2

  yoctocolors@2.1.2: {}

  zod-to-json-schema@3.25.2(zod@3.25.76):
    dependencies:
      zod: 3.25.76

  zod@3.25.76: {}

```

---

## Archivo: `pnpm-workspace.yaml`

```yaml
pmOnFail: ignore

minimumReleaseAgeExclude:
  - '@next/*'
  - next

```

---

## Archivo: `postcss.config.mjs`

```
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config

```

---

## Archivo: `tsconfig.json`

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}

```

---

## Archivo: `.git/HEAD`

```
ref: refs/heads/main

```

---

## Archivo: `.git/config`

```
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
[remote "origin"]
	url = git@github.com:dpereira3/portal-de-recursos-laboratorio.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
	remote = origin
	merge = refs/heads/main

```

---

## Archivo: `.git/description`

```
Unnamed repository; edit this file 'description' to name the repository.

```

---

## Archivo: `.git/index`

[Archivo probablemente binario, contenido no incluido.]

---

## Archivo: `.git/packed-refs`

```
# pack-refs with: peeled fully-peeled sorted 
d200d7da9016d9ae00ed82f961cb243e9283f8ba refs/remotes/origin/main

```

---

## Archivo: `.git/hooks/applypatch-msg.sample`

```
#!/bin/sh
#
# An example hook script to check the commit log message taken by
# applypatch from an e-mail message.
#
# The hook should exit with non-zero status after issuing an
# appropriate message if it wants to stop the commit.  The hook is
# allowed to edit the commit message file.
#
# To enable this hook, rename this file to "applypatch-msg".

. git-sh-setup
commitmsg="$(git rev-parse --git-path hooks/commit-msg)"
test -x "$commitmsg" && exec "$commitmsg" ${1+"$@"}
:

```

---

## Archivo: `.git/hooks/commit-msg.sample`

```
#!/bin/sh
#
# An example hook script to check the commit log message.
# Called by "git commit" with one argument, the name of the file
# that has the commit message.  The hook should exit with non-zero
# status after issuing an appropriate message if it wants to stop the
# commit.  The hook is allowed to edit the commit message file.
#
# To enable this hook, rename this file to "commit-msg".

# Uncomment the below to add a Signed-off-by line to the message.
# Doing this in a hook is a bad idea in general, but the prepare-commit-msg
# hook is more suited to it.
#
# SOB=$(git var GIT_AUTHOR_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# grep -qs "^$SOB" "$1" || echo "$SOB" >> "$1"

# This example catches duplicate Signed-off-by lines.

test "" = "$(grep '^Signed-off-by: ' "$1" |
	 sort | uniq -c | sed -e '/^[ 	]*1[ 	]/d')" || {
	echo >&2 Duplicate Signed-off-by lines.
	exit 1
}

```

---

## Archivo: `.git/hooks/fsmonitor-watchman.sample`

```
#!/usr/bin/perl

use strict;
use warnings;
use IPC::Open2;

# An example hook script to integrate Watchman
# (https://facebook.github.io/watchman/) with git to speed up detecting
# new and modified files.
#
# The hook is passed a version (currently 2) and last update token
# formatted as a string and outputs to stdout a new update token and
# all files that have been modified since the update token. Paths must
# be relative to the root of the working tree and separated by a single NUL.
#
# To enable this hook, rename this file to "query-watchman" and set
# 'git config core.fsmonitor .git/hooks/query-watchman'
#
my ($version, $last_update_token) = @ARGV;

# Uncomment for debugging
# print STDERR "$0 $version $last_update_token\n";

# Check the hook interface version
if ($version ne 2) {
	die "Unsupported query-fsmonitor hook version '$version'.\n" .
	    "Falling back to scanning...\n";
}

my $git_work_tree = get_working_dir();

my $retry = 1;

my $json_pkg;
eval {
	require JSON::XS;
	$json_pkg = "JSON::XS";
	1;
} or do {
	require JSON::PP;
	$json_pkg = "JSON::PP";
};

launch_watchman();

sub launch_watchman {
	my $o = watchman_query();
	if (is_work_tree_watched($o)) {
		output_result($o->{clock}, @{$o->{files}});
	}
}

sub output_result {
	my ($clockid, @files) = @_;

	# Uncomment for debugging watchman output
	# open (my $fh, ">", ".git/watchman-output.out");
	# binmode $fh, ":utf8";
	# print $fh "$clockid\n@files\n";
	# close $fh;

	binmode STDOUT, ":utf8";
	print $clockid;
	print "\0";
	local $, = "\0";
	print @files;
}

sub watchman_clock {
	my $response = qx/watchman clock "$git_work_tree"/;
	die "Failed to get clock id on '$git_work_tree'.\n" .
		"Falling back to scanning...\n" if $? != 0;

	return $json_pkg->new->utf8->decode($response);
}

sub watchman_query {
	my $pid = open2(\*CHLD_OUT, \*CHLD_IN, 'watchman -j --no-pretty')
	or die "open2() failed: $!\n" .
	"Falling back to scanning...\n";

	# In the query expression below we're asking for names of files that
	# changed since $last_update_token but not from the .git folder.
	#
	# To accomplish this, we're using the "since" generator to use the
	# recency index to select candidate nodes and "fields" to limit the
	# output to file names only. Then we're using the "expression" term to
	# further constrain the results.
	my $last_update_line = "";
	if (substr($last_update_token, 0, 1) eq "c") {
		$last_update_token = "\"$last_update_token\"";
		$last_update_line = qq[\n"since": $last_update_token,];
	}
	my $query = <<"	END";
		["query", "$git_work_tree", {$last_update_line
			"fields": ["name"],
			"expression": ["not", ["dirname", ".git"]]
		}]
	END

	# Uncomment for debugging the watchman query
	# open (my $fh, ">", ".git/watchman-query.json");
	# print $fh $query;
	# close $fh;

	print CHLD_IN $query;
	close CHLD_IN;
	my $response = do {local $/; <CHLD_OUT>};

	# Uncomment for debugging the watch response
	# open ($fh, ">", ".git/watchman-response.json");
	# print $fh $response;
	# close $fh;

	die "Watchman: command returned no output.\n" .
	"Falling back to scanning...\n" if $response eq "";
	die "Watchman: command returned invalid output: $response\n" .
	"Falling back to scanning...\n" unless $response =~ /^\{/;

	return $json_pkg->new->utf8->decode($response);
}

sub is_work_tree_watched {
	my ($output) = @_;
	my $error = $output->{error};
	if ($retry > 0 and $error and $error =~ m/unable to resolve root .* directory (.*) is not watched/) {
		$retry--;
		my $response = qx/watchman watch "$git_work_tree"/;
		die "Failed to make watchman watch '$git_work_tree'.\n" .
		    "Falling back to scanning...\n" if $? != 0;
		$output = $json_pkg->new->utf8->decode($response);
		$error = $output->{error};
		die "Watchman: $error.\n" .
		"Falling back to scanning...\n" if $error;

		# Uncomment for debugging watchman output
		# open (my $fh, ">", ".git/watchman-output.out");
		# close $fh;

		# Watchman will always return all files on the first query so
		# return the fast "everything is dirty" flag to git and do the
		# Watchman query just to get it over with now so we won't pay
		# the cost in git to look up each individual file.
		my $o = watchman_clock();
		$error = $output->{error};

		die "Watchman: $error.\n" .
		"Falling back to scanning...\n" if $error;

		output_result($o->{clock}, ("/"));
		$last_update_token = $o->{clock};

		eval { launch_watchman() };
		return 0;
	}

	die "Watchman: $error.\n" .
	"Falling back to scanning...\n" if $error;

	return 1;
}

sub get_working_dir {
	my $working_dir;
	if ($^O =~ 'msys' || $^O =~ 'cygwin') {
		$working_dir = Win32::GetCwd();
		$working_dir =~ tr/\\/\//;
	} else {
		require Cwd;
		$working_dir = Cwd::cwd();
	}

	return $working_dir;
}

```

---

## Archivo: `.git/hooks/post-update.sample`

```
#!/bin/sh
#
# An example hook script to prepare a packed repository for use over
# dumb transports.
#
# To enable this hook, rename this file to "post-update".

exec git update-server-info

```

---

## Archivo: `.git/hooks/pre-applypatch.sample`

```
#!/bin/sh
#
# An example hook script to verify what is about to be committed
# by applypatch from an e-mail message.
#
# The hook should exit with non-zero status after issuing an
# appropriate message if it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-applypatch".

. git-sh-setup
precommit="$(git rev-parse --git-path hooks/pre-commit)"
test -x "$precommit" && exec "$precommit" ${1+"$@"}
:

```

---

## Archivo: `.git/hooks/pre-commit.sample`

```
#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-commit".

if git rev-parse --verify HEAD >/dev/null 2>&1
then
	against=HEAD
else
	# Initial commit: diff against an empty tree object
	against=$(git hash-object -t tree /dev/null)
fi

# If you want to allow non-ASCII filenames set this variable to true.
allownonascii=$(git config --type=bool hooks.allownonascii)

# Redirect output to stderr.
exec 1>&2

# Cross platform projects tend to avoid non-ASCII filenames; prevent
# them from being added to the repository. We exploit the fact that the
# printable range starts at the space character and ends with tilde.
if [ "$allownonascii" != "true" ] &&
	# Note that the use of brackets around a tr range is ok here, (it's
	# even required, for portability to Solaris 10's /usr/bin/tr), since
	# the square bracket bytes happen to fall in the designated range.
	test $(git diff --cached --name-only --diff-filter=A -z $against |
	  LC_ALL=C tr -d '[ -~]\0' | wc -c) != 0
then
	cat <<\EOF
Error: Attempt to add a non-ASCII file name.

This can cause problems if you want to work with people on other platforms.

To be portable it is advisable to rename the file.

If you know what you are doing you can disable this check using:

  git config hooks.allownonascii true
EOF
	exit 1
fi

# If there are whitespace errors, print the offending file names and fail.
exec git diff-index --check --cached $against --

```

---

## Archivo: `.git/hooks/pre-merge-commit.sample`

```
#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git merge" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message to
# stderr if it wants to stop the merge commit.
#
# To enable this hook, rename this file to "pre-merge-commit".

. git-sh-setup
test -x "$GIT_DIR/hooks/pre-commit" &&
        exec "$GIT_DIR/hooks/pre-commit"
:

```

---

## Archivo: `.git/hooks/pre-push.sample`

```
#!/bin/sh

# An example hook script to verify what is about to be pushed.  Called by "git
# push" after it has checked the remote status, but before anything has been
# pushed.  If this script exits with a non-zero status nothing will be pushed.
#
# This hook is called with the following parameters:
#
# $1 -- Name of the remote to which the push is being done
# $2 -- URL to which the push is being done
#
# If pushing without using a named remote those arguments will be equal.
#
# Information about the commits which are being pushed is supplied as lines to
# the standard input in the form:
#
#   <local ref> <local oid> <remote ref> <remote oid>
#
# This sample shows how to prevent push of commits where the log message starts
# with "WIP" (work in progress).

remote="$1"
url="$2"

zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')

while read local_ref local_oid remote_ref remote_oid
do
	if test "$local_oid" = "$zero"
	then
		# Handle delete
		:
	else
		if test "$remote_oid" = "$zero"
		then
			# New branch, examine all commits
			range="$local_oid"
		else
			# Update to existing branch, examine new commits
			range="$remote_oid..$local_oid"
		fi

		# Check for WIP commit
		commit=$(git rev-list -n 1 --grep '^WIP' "$range")
		if test -n "$commit"
		then
			echo >&2 "Found WIP commit in $local_ref, not pushing"
			exit 1
		fi
	fi
done

exit 0

```

---

## Archivo: `.git/hooks/pre-rebase.sample`

```
#!/bin/sh
#
# Copyright (c) 2006, 2008 Junio C Hamano
#
# The "pre-rebase" hook is run just before "git rebase" starts doing
# its job, and can prevent the command from running by exiting with
# non-zero status.
#
# The hook is called with the following parameters:
#
# $1 -- the upstream the series was forked from.
# $2 -- the branch being rebased (or empty when rebasing the current branch).
#
# This sample shows how to prevent topic branches that are already
# merged to 'next' branch from getting rebased, because allowing it
# would result in rebasing already published history.

publish=next
basebranch="$1"
if test "$#" = 2
then
	topic="refs/heads/$2"
else
	topic=`git symbolic-ref HEAD` ||
	exit 0 ;# we do not interrupt rebasing detached HEAD
fi

case "$topic" in
refs/heads/??/*)
	;;
*)
	exit 0 ;# we do not interrupt others.
	;;
esac

# Now we are dealing with a topic branch being rebased
# on top of master.  Is it OK to rebase it?

# Does the topic really exist?
git show-ref -q "$topic" || {
	echo >&2 "No such branch $topic"
	exit 1
}

# Is topic fully merged to master?
not_in_master=`git rev-list --pretty=oneline ^master "$topic"`
if test -z "$not_in_master"
then
	echo >&2 "$topic is fully merged to master; better remove it."
	exit 1 ;# we could allow it, but there is no point.
fi

# Is topic ever merged to next?  If so you should not be rebasing it.
only_next_1=`git rev-list ^master "^$topic" ${publish} | sort`
only_next_2=`git rev-list ^master           ${publish} | sort`
if test "$only_next_1" = "$only_next_2"
then
	not_in_topic=`git rev-list "^$topic" master`
	if test -z "$not_in_topic"
	then
		echo >&2 "$topic is already up to date with master"
		exit 1 ;# we could allow it, but there is no point.
	else
		exit 0
	fi
else
	not_in_next=`git rev-list --pretty=oneline ^${publish} "$topic"`
	/usr/bin/perl -e '
		my $topic = $ARGV[0];
		my $msg = "* $topic has commits already merged to public branch:\n";
		my (%not_in_next) = map {
			/^([0-9a-f]+) /;
			($1 => 1);
		} split(/\n/, $ARGV[1]);
		for my $elem (map {
				/^([0-9a-f]+) (.*)$/;
				[$1 => $2];
			} split(/\n/, $ARGV[2])) {
			if (!exists $not_in_next{$elem->[0]}) {
				if ($msg) {
					print STDERR $msg;
					undef $msg;
				}
				print STDERR " $elem->[1]\n";
			}
		}
	' "$topic" "$not_in_next" "$not_in_master"
	exit 1
fi

<<\DOC_END

This sample hook safeguards topic branches that have been
published from being rewound.

The workflow assumed here is:

 * Once a topic branch forks from "master", "master" is never
   merged into it again (either directly or indirectly).

 * Once a topic branch is fully cooked and merged into "master",
   it is deleted.  If you need to build on top of it to correct
   earlier mistakes, a new topic branch is created by forking at
   the tip of the "master".  This is not strictly necessary, but
   it makes it easier to keep your history simple.

 * Whenever you need to test or publish your changes to topic
   branches, merge them into "next" branch.

The script, being an example, hardcodes the publish branch name
to be "next", but it is trivial to make it configurable via
$GIT_DIR/config mechanism.

With this workflow, you would want to know:

(1) ... if a topic branch has ever been merged to "next".  Young
    topic branches can have stupid mistakes you would rather
    clean up before publishing, and things that have not been
    merged into other branches can be easily rebased without
    affecting other people.  But once it is published, you would
    not want to rewind it.

(2) ... if a topic branch has been fully merged to "master".
    Then you can delete it.  More importantly, you should not
    build on top of it -- other people may already want to
    change things related to the topic as patches against your
    "master", so if you need further changes, it is better to
    fork the topic (perhaps with the same name) afresh from the
    tip of "master".

Let's look at this example:

		   o---o---o---o---o---o---o---o---o---o "next"
		  /       /           /           /
		 /   a---a---b A     /           /
		/   /               /           /
	       /   /   c---c---c---c B         /
	      /   /   /             \         /
	     /   /   /   b---b C     \       /
	    /   /   /   /             \     /
    ---o---o---o---o---o---o---o---o---o---o---o "master"


A, B and C are topic branches.

 * A has one fix since it was merged up to "next".

 * B has finished.  It has been fully merged up to "master" and "next",
   and is ready to be deleted.

 * C has not merged to "next" at all.

We would want to allow C to be rebased, refuse A, and encourage
B to be deleted.

To compute (1):

	git rev-list ^master ^topic next
	git rev-list ^master        next

	if these match, topic has not merged in next at all.

To compute (2):

	git rev-list master..topic

	if this is empty, it is fully merged to "master".

DOC_END

```

---

## Archivo: `.git/hooks/pre-receive.sample`

```
#!/bin/sh
#
# An example hook script to make use of push options.
# The example simply echoes all push options that start with 'echoback='
# and rejects all pushes when the "reject" push option is used.
#
# To enable this hook, rename this file to "pre-receive".

if test -n "$GIT_PUSH_OPTION_COUNT"
then
	i=0
	while test "$i" -lt "$GIT_PUSH_OPTION_COUNT"
	do
		eval "value=\$GIT_PUSH_OPTION_$i"
		case "$value" in
		echoback=*)
			echo "echo from the pre-receive-hook: ${value#*=}" >&2
			;;
		reject)
			exit 1
		esac
		i=$((i + 1))
	done
fi

```

---

## Archivo: `.git/hooks/prepare-commit-msg.sample`

```
#!/bin/sh
#
# An example hook script to prepare the commit log message.
# Called by "git commit" with the name of the file that has the
# commit message, followed by the description of the commit
# message's source.  The hook's purpose is to edit the commit
# message file.  If the hook fails with a non-zero status,
# the commit is aborted.
#
# To enable this hook, rename this file to "prepare-commit-msg".

# This hook includes three examples. The first one removes the
# "# Please enter the commit message..." help message.
#
# The second includes the output of "git diff --name-status -r"
# into the message, just before the "git status" output.  It is
# commented because it doesn't cope with --amend or with squashed
# commits.
#
# The third example adds a Signed-off-by line to the message, that can
# still be edited.  This is rarely a good idea.

COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2
SHA1=$3

/usr/bin/perl -i.bak -ne 'print unless(m/^. Please enter the commit message/..m/^#$/)' "$COMMIT_MSG_FILE"

# case "$COMMIT_SOURCE,$SHA1" in
#  ,|template,)
#    /usr/bin/perl -i.bak -pe '
#       print "\n" . `git diff --cached --name-status -r`
# 	 if /^#/ && $first++ == 0' "$COMMIT_MSG_FILE" ;;
#  *) ;;
# esac

# SOB=$(git var GIT_COMMITTER_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# git interpret-trailers --in-place --trailer "$SOB" "$COMMIT_MSG_FILE"
# if test -z "$COMMIT_SOURCE"
# then
#   /usr/bin/perl -i.bak -pe 'print "\n" if !$first_line++' "$COMMIT_MSG_FILE"
# fi

```

---

## Archivo: `.git/hooks/push-to-checkout.sample`

```
#!/bin/sh

# An example hook script to update a checked-out tree on a git push.
#
# This hook is invoked by git-receive-pack(1) when it reacts to git
# push and updates reference(s) in its repository, and when the push
# tries to update the branch that is currently checked out and the
# receive.denyCurrentBranch configuration variable is set to
# updateInstead.
#
# By default, such a push is refused if the working tree and the index
# of the remote repository has any difference from the currently
# checked out commit; when both the working tree and the index match
# the current commit, they are updated to match the newly pushed tip
# of the branch. This hook is to be used to override the default
# behaviour; however the code below reimplements the default behaviour
# as a starting point for convenient modification.
#
# The hook receives the commit with which the tip of the current
# branch is going to be updated:
commit=$1

# It can exit with a non-zero status to refuse the push (when it does
# so, it must not modify the index or the working tree).
die () {
	echo >&2 "$*"
	exit 1
}

# Or it can make any necessary changes to the working tree and to the
# index to bring them to the desired state when the tip of the current
# branch is updated to the new commit, and exit with a zero status.
#
# For example, the hook can simply run git read-tree -u -m HEAD "$1"
# in order to emulate git fetch that is run in the reverse direction
# with git push, as the two-tree form of git read-tree -u -m is
# essentially the same as git switch or git checkout that switches
# branches while keeping the local changes in the working tree that do
# not interfere with the difference between the branches.

# The below is a more-or-less exact translation to shell of the C code
# for the default behaviour for git's push-to-checkout hook defined in
# the push_to_deploy() function in builtin/receive-pack.c.
#
# Note that the hook will be executed from the repository directory,
# not from the working tree, so if you want to perform operations on
# the working tree, you will have to adapt your code accordingly, e.g.
# by adding "cd .." or using relative paths.

if ! git update-index -q --ignore-submodules --refresh
then
	die "Up-to-date check failed"
fi

if ! git diff-files --quiet --ignore-submodules --
then
	die "Working directory has unstaged changes"
fi

# This is a rough translation of:
#
#   head_has_history() ? "HEAD" : EMPTY_TREE_SHA1_HEX
if git cat-file -e HEAD 2>/dev/null
then
	head=HEAD
else
	head=$(git hash-object -t tree --stdin </dev/null)
fi

if ! git diff-index --quiet --cached --ignore-submodules $head --
then
	die "Working directory has staged changes"
fi

if ! git read-tree -u -m "$commit"
then
	die "Could not update working tree to new HEAD"
fi

```

---

## Archivo: `.git/hooks/sendemail-validate.sample`

```
#!/bin/sh

# An example hook script to validate a patch (and/or patch series) before
# sending it via email.
#
# The hook should exit with non-zero status after issuing an appropriate
# message if it wants to prevent the email(s) from being sent.
#
# To enable this hook, rename this file to "sendemail-validate".
#
# By default, it will only check that the patch(es) can be applied on top of
# the default upstream branch without conflicts in a secondary worktree. After
# validation (successful or not) of the last patch of a series, the worktree
# will be deleted.
#
# The following config variables can be set to change the default remote and
# remote ref that are used to apply the patches against:
#
#   sendemail.validateRemote (default: origin)
#   sendemail.validateRemoteRef (default: HEAD)
#
# Replace the TODO placeholders with appropriate checks according to your
# needs.

validate_cover_letter () {
	file="$1"
	# TODO: Replace with appropriate checks (e.g. spell checking).
	true
}

validate_patch () {
	file="$1"
	# Ensure that the patch applies without conflicts.
	git am -3 "$file" || return
	# TODO: Replace with appropriate checks for this patch
	# (e.g. checkpatch.pl).
	true
}

validate_series () {
	# TODO: Replace with appropriate checks for the whole series
	# (e.g. quick build, coding style checks, etc.).
	true
}

# main -------------------------------------------------------------------------

if test "$GIT_SENDEMAIL_FILE_COUNTER" = 1
then
	remote=$(git config --default origin --get sendemail.validateRemote) &&
	ref=$(git config --default HEAD --get sendemail.validateRemoteRef) &&
	worktree=$(mktemp --tmpdir -d sendemail-validate.XXXXXXX) &&
	git worktree add -fd --checkout "$worktree" "refs/remotes/$remote/$ref" &&
	git config --replace-all sendemail.validateWorktree "$worktree"
else
	worktree=$(git config --get sendemail.validateWorktree)
fi || {
	echo "sendemail-validate: error: failed to prepare worktree" >&2
	exit 1
}

unset GIT_DIR GIT_WORK_TREE
cd "$worktree" &&

if grep -q "^diff --git " "$1"
then
	validate_patch "$1"
else
	validate_cover_letter "$1"
fi &&

if test "$GIT_SENDEMAIL_FILE_COUNTER" = "$GIT_SENDEMAIL_FILE_TOTAL"
then
	git config --unset-all sendemail.validateWorktree &&
	trap 'git worktree remove -ff "$worktree"' EXIT &&
	validate_series
fi

```

---

## Archivo: `.git/hooks/update.sample`

```
#!/bin/sh
#
# An example hook script to block unannotated tags from entering.
# Called by "git receive-pack" with arguments: refname sha1-old sha1-new
#
# To enable this hook, rename this file to "update".
#
# Config
# ------
# hooks.allowunannotated
#   This boolean sets whether unannotated tags will be allowed into the
#   repository.  By default they won't be.
# hooks.allowdeletetag
#   This boolean sets whether deleting tags will be allowed in the
#   repository.  By default they won't be.
# hooks.allowmodifytag
#   This boolean sets whether a tag may be modified after creation. By default
#   it won't be.
# hooks.allowdeletebranch
#   This boolean sets whether deleting branches will be allowed in the
#   repository.  By default they won't be.
# hooks.denycreatebranch
#   This boolean sets whether remotely creating branches will be denied
#   in the repository.  By default this is allowed.
#

# --- Command line
refname="$1"
oldrev="$2"
newrev="$3"

# --- Safety check
if [ -z "$GIT_DIR" ]; then
	echo "Don't run this script from the command line." >&2
	echo " (if you want, you could supply GIT_DIR then run" >&2
	echo "  $0 <ref> <oldrev> <newrev>)" >&2
	exit 1
fi

if [ -z "$refname" -o -z "$oldrev" -o -z "$newrev" ]; then
	echo "usage: $0 <ref> <oldrev> <newrev>" >&2
	exit 1
fi

# --- Config
allowunannotated=$(git config --type=bool hooks.allowunannotated)
allowdeletebranch=$(git config --type=bool hooks.allowdeletebranch)
denycreatebranch=$(git config --type=bool hooks.denycreatebranch)
allowdeletetag=$(git config --type=bool hooks.allowdeletetag)
allowmodifytag=$(git config --type=bool hooks.allowmodifytag)

# check for no description
projectdesc=$(sed -e '1q' "$GIT_DIR/description")
case "$projectdesc" in
"Unnamed repository"* | "")
	echo "*** Project description file hasn't been set" >&2
	exit 1
	;;
esac

# --- Check types
# if $newrev is 0000...0000, it's a commit to delete a ref.
zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')
if [ "$newrev" = "$zero" ]; then
	newrev_type=delete
else
	newrev_type=$(git cat-file -t $newrev)
fi

case "$refname","$newrev_type" in
	refs/tags/*,commit)
		# un-annotated tag
		short_refname=${refname##refs/tags/}
		if [ "$allowunannotated" != "true" ]; then
			echo "*** The un-annotated tag, $short_refname, is not allowed in this repository" >&2
			echo "*** Use 'git tag [ -a | -s ]' for tags you want to propagate." >&2
			exit 1
		fi
		;;
	refs/tags/*,delete)
		# delete tag
		if [ "$allowdeletetag" != "true" ]; then
			echo "*** Deleting a tag is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/tags/*,tag)
		# annotated tag
		if [ "$allowmodifytag" != "true" ] && git rev-parse $refname > /dev/null 2>&1
		then
			echo "*** Tag '$refname' already exists." >&2
			echo "*** Modifying a tag is not allowed in this repository." >&2
			exit 1
		fi
		;;
	refs/heads/*,commit)
		# branch
		if [ "$oldrev" = "$zero" -a "$denycreatebranch" = "true" ]; then
			echo "*** Creating a branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/heads/*,delete)
		# delete branch
		if [ "$allowdeletebranch" != "true" ]; then
			echo "*** Deleting a branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/remotes/*,commit)
		# tracking branch
		;;
	refs/remotes/*,delete)
		# delete tracking branch
		if [ "$allowdeletebranch" != "true" ]; then
			echo "*** Deleting a tracking branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	*)
		# Anything else (is there anything else?)
		echo "*** Update hook: unknown type of update to ref $refname of type $newrev_type" >&2
		exit 1
		;;
esac

# --- Finished
exit 0

```

---

## Archivo: `.git/info/exclude`

```
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.
# For a project mostly in C, the following would be a good set of
# exclude patterns (uncomment them if you want to use them):
# *.[oa]
# *~

```

---

## Archivo: `.git/logs/HEAD`

```
0000000000000000000000000000000000000000 d200d7da9016d9ae00ed82f961cb243e9283f8ba Pereira Damian <dpereira3@abc.gob.ar> 1790798871 -0300	clone: from github.com:dpereira3/portal-de-recursos-laboratorio.git

```

---

## Archivo: `.git/logs/refs/heads/main`

```
0000000000000000000000000000000000000000 d200d7da9016d9ae00ed82f961cb243e9283f8ba Pereira Damian <dpereira3@abc.gob.ar> 1790798871 -0300	clone: from github.com:dpereira3/portal-de-recursos-laboratorio.git

```

---

## Archivo: `.git/logs/refs/remotes/origin/HEAD`

```
0000000000000000000000000000000000000000 d200d7da9016d9ae00ed82f961cb243e9283f8ba Pereira Damian <dpereira3@abc.gob.ar> 1790798871 -0300	clone: from github.com:dpereira3/portal-de-recursos-laboratorio.git

```

---

## Archivo: `.git/objects/pack/pack-de71488ae43f49c807c0f94bfc19559c963d91e5.idx`

[Archivo probablemente binario, contenido no incluido.]

---

## Archivo: `.git/objects/pack/pack-de71488ae43f49c807c0f94bfc19559c963d91e5.pack`

[Archivo probablemente binario, contenido no incluido.]

---

## Archivo: `.git/objects/pack/pack-de71488ae43f49c807c0f94bfc19559c963d91e5.rev`

[Archivo probablemente binario, contenido no incluido.]

---

## Archivo: `.git/refs/heads/main`

```
d200d7da9016d9ae00ed82f961cb243e9283f8ba

```

---

## Archivo: `.git/refs/remotes/origin/HEAD`

```
ref: refs/remotes/origin/main

```

---

## Archivo: `app/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Sora:wght@600;700&display=swap');
@import 'tailwindcss';
@import 'tw-animate-css';
@import 'shadcn/tailwind.css';

:root {
  --color-bg: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-accent: #2563eb;
  --color-accent-secondary: #f97316;
  --color-border: #e2e8f0;
  --color-nav-link: #496b65;
  --color-placeholder: #46645f;
  --color-label: #55736e;
  --color-menu: #f1f5f9;
  --color-image-overlay: rgba(15, 23, 42, .78);
  --color-grid: color-mix(in srgb, var(--color-accent) 10%, transparent);
  --ink: var(--color-bg);
  --ink-soft: var(--color-surface);
  --line: var(--color-border);
  --mint: var(--color-accent);
  --cream: var(--color-text);
  --muted: var(--color-muted);
}

:root.dark {
  --color-bg: #0f172a;
  --color-surface: #1e293b;
  --color-text: #f1f5f9;
  --color-muted: #94a3b8;
  --color-accent: #60a5fa;
  --color-accent-secondary: #fb923c;
  --color-border: #334155;
  --color-nav-link: #b7d0ca;
  --color-placeholder: #a8c3bd;
  --color-label: #b7d0ca;
  --color-menu: #0d1b1e;
  --color-image-overlay: rgba(7, 16, 19, .84);
  --color-grid: color-mix(in srgb, var(--color-accent) 14%, transparent);
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: 'Inter', Arial, Helvetica, sans-serif; transition: background-color .25s ease, color .25s ease; }
h1, h2, h3, .brand strong { font-family: 'Sora', 'Inter', Arial, sans-serif; }
button, input { font-family: inherit; }
a { color: inherit; text-decoration: none; }
.site-shell { min-height: 100vh; overflow: hidden; background: radial-gradient(circle at 80% 10%, rgba(44, 115, 102, .14), transparent 27rem), var(--ink); }
.site-header { align-items: center; display: flex; justify-content: space-between; margin: auto; max-width: 1240px; padding: 27px 32px; position: relative; z-index: 5; }
.brand { align-items: center; display: inline-flex; gap: 11px; letter-spacing: .05em; }
.brand-logo { display: block; height: 44px; width: auto; }
.brand-short { color: var(--color-text); font-family: 'Sora', 'Inter', Arial, sans-serif; font-size: 16px; font-weight: 700; letter-spacing: .04em; }
.logo-em2-completo { color: var(--color-text); display: block; flex: 0 0 auto; max-width: 220px; transition: color .25s ease; width: 220px; }
.logo-em2-completo svg { display: block; height: auto; width: 100%; }
.site-nav { align-items: center; display: flex; gap: 27px; }
.site-nav a { color: var(--color-nav-link); font-size: 11px; letter-spacing: .11em; text-transform: uppercase; transition: color .2s; }
.site-nav a:hover { color: var(--mint); }
.site-nav .admin-link { align-items: center; border: 1px solid var(--line); border-radius: 8px; color: var(--mint); display: flex; gap: 8px; padding: 10px 13px; }
.theme-toggle { align-items: center; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 999px; color: var(--color-text); cursor: pointer; display: flex; height: 36px; justify-content: center; margin-left: 2px; transition: background-color .25s ease, border-color .25s ease, color .25s ease, transform .2s ease; width: 36px; }
.theme-toggle:hover { border-color: var(--color-accent); color: var(--color-accent); transform: rotate(12deg); }
.theme-toggle svg { height: 16px; width: 16px; }
.admin-link svg, .resource-link svg { height: 13px; width: 13px; }
.mobile-menu-button { background: none; border: 0; color: var(--mint); display: none; }
.hero-section { min-height: 500px; position: relative; }
.hero-content { margin: auto; max-width: 1240px; padding: 82px 32px 105px; position: relative; z-index: 1; }
.eyebrow, .section-kicker { align-items: center; color: var(--mint); display: flex; font-size: 10px; gap: 10px; letter-spacing: .2em; }
.eyebrow span { background: var(--mint); border-radius: 100%; height: 5px; width: 5px; }
h1, h2, h3, p { margin: 0; }
h1 { font-family: 'Sora', 'Inter', Arial, sans-serif; font-size: clamp(48px, 7vw, 92px); font-weight: 600; letter-spacing: -.08em; line-height: .92; margin: 25px 0 28px; }
h1 em, h2 em { color: var(--mint); font-family: inherit; font-weight: 400; }
.hero-content > p { color: var(--muted); font-size: 15px; line-height: 1.7; max-width: 430px; }
.hero-institution { font-size: 12px !important; margin-top: 14px; max-width: 470px !important; }
.hero-actions { align-items: center; display: flex; flex-wrap: wrap; gap: 24px; }
.hero-admin { align-items: center; color: var(--muted); display: inline-flex; font-size: 11px; gap: 7px; letter-spacing: .08em; text-transform: uppercase; }
.hero-admin:hover { color: var(--mint); }
.intro-section { border-top: 1px solid var(--line); display: grid; gap: 16px; grid-template-columns: minmax(190px, .7fr) 1fr 1fr; margin: 0 auto; max-width: 1176px; padding: 34px 32px 48px; }
.intro-section p { color: var(--muted); font-size: 13px; line-height: 1.7; max-width: 390px; }
.catalog-meta { align-items: center; color: var(--muted); display: flex; flex-wrap: wrap; font-size: 11px; gap: 18px; margin-top: 28px; }
.catalog-meta span:first-child { color: var(--mint); }
.catalog-meta button, .retry-button { background: transparent; border: 1px solid var(--line); color: var(--mint); cursor: pointer; font-size: 10px; letter-spacing: .08em; padding: 8px 11px; text-transform: uppercase; }
.catalog-meta button:hover, .retry-button:hover { border-color: var(--mint); }
.resource-card:focus-visible, button:focus-visible, a:focus-visible, input:focus-visible { outline: 2px solid var(--mint); outline-offset: 4px; }
.site-footer { border-top: 1px solid var(--line); display: block; margin: auto; max-width: 1240px; padding: 48px 32px 24px; }
.footer-inner { align-items: center; display: flex; gap: 56px; justify-content: flex-start; }
.site-footer-logo { max-width: 280px; width: min(280px, 100%); }
.footer-copy { color: var(--muted); display: flex; flex-direction: column; font-size: 12px; gap: 6px; line-height: 1.45; }
.footer-copy strong { color: var(--color-text); font-family: 'Sora', sans-serif; font-size: 13px; letter-spacing: .08em; }
.footer-copy span { color: var(--mint); margin-top: 8px; }
.footer-bottom { border-top: 1px solid var(--line); color: var(--muted); display: flex; font-size: 10px; justify-content: space-between; margin-top: 38px; padding-top: 18px; }
@media (max-width: 760px) { .intro-section { grid-template-columns: 1fr; padding: 30px 20px 42px; } .footer-inner { align-items: flex-start; flex-direction: column; gap: 24px; } .site-footer { padding: 36px 20px 22px; } .site-footer-logo { max-width: 240px; } .hero-actions { align-items: flex-start; flex-direction: column; gap: 18px; } .footer-bottom { margin-top: 28px; } }
.hero-cta { align-items: center; border-bottom: 1px solid var(--mint); color: var(--mint); display: inline-flex; font-size: 11px; gap: 12px; letter-spacing: .14em; margin-top: 33px; padding-bottom: 9px; text-transform: uppercase; transition: gap .2s; }
.hero-cta:hover { gap: 18px; }
.hero-grid { background-image: linear-gradient(var(--color-grid) 1px, transparent 1px), linear-gradient(90deg, var(--color-grid) 1px, transparent 1px); background-size: 65px 65px; height: 100%; opacity: .5; position: absolute; right: -5%; top: -30%; transform: perspective(500px) rotateY(-20deg) rotateX(45deg); width: 60%; }
.hero-orbit { border: 1px solid var(--line); border-radius: 100%; height: 430px; position: absolute; right: 14%; top: 38px; transform: rotate(-20deg); width: 430px; }
.hero-orbit:before, .hero-orbit:after { border: 1px solid var(--line); border-radius: 100%; content: ''; inset: 12%; position: absolute; }
.hero-orbit:after { inset: 25%; }
.hero-orbit div { background: var(--mint); border-radius: 50%; height: 6px; position: absolute; width: 6px; }
.hero-orbit div:nth-child(1) { left: 16%; top: 27%; }.hero-orbit div:nth-child(2) { right: 14%; top: 43%; }.hero-orbit div:nth-child(3) { bottom: 17%; left: 35%; }
.hero-orbit span { color: var(--mint); font-size: 12px; left: 48%; position: absolute; top: 46%; }
.catalog-section { background: var(--color-surface); border-top: 1px solid var(--line); padding: 88px max(32px, calc((100vw - 1176px) / 2)) 100px; transition: background-color .25s ease, border-color .25s ease; }
.section-heading { align-items: end; display: flex; justify-content: space-between; margin-bottom: 44px; }
.section-heading h2 { font-size: clamp(38px, 5vw, 66px); font-weight: 400; letter-spacing: -.07em; line-height: .98; margin-top: 16px; }
.section-note { color: var(--muted); font-size: 12px; line-height: 1.6; text-align: right; }
.filters-bar { align-items: center; border-bottom: 1px solid var(--line); border-top: 1px solid var(--line); display: flex; gap: 28px; padding: 13px 0; }
.search-box { align-items: center; display: flex; gap: 11px; min-width: 240px; }
.search-box svg, .filter-group > svg { color: var(--mint); height: 15px; width: 15px; }
.search-box input { background: none; border: 0; color: var(--cream); font-size: 13px; outline: none; width: 100%; }
.search-box input::placeholder { color: var(--color-placeholder); }
.filter-group { align-items: center; display: flex; flex-wrap: wrap; gap: 6px; }
.filter-group button, .tag-filters button { background: none; border: 1px solid transparent; border-radius: 3px; color: var(--muted); cursor: pointer; font-size: 10px; letter-spacing: .06em; padding: 7px 10px; transition: all .2s; }
.filter-group button.active, .filter-group button:hover, .tag-filters button.active, .tag-filters button:hover { background: rgba(155,255,224,.08); border-color: var(--line); color: var(--mint); }
.tag-filters { align-items: center; display: flex; flex-wrap: wrap; gap: 4px; padding: 15px 0 5px; }.tag-filters > span { color: var(--color-label); font-size: 10px; margin-right: 8px; text-transform: uppercase; }
.site-footer { align-items: center; display: flex; gap: 24px; justify-content: space-between; padding: 42px 32px; }
.site-footer > div { color: var(--muted); display: flex; flex-direction: column; gap: 8px; font-size: 12px; line-height: 1.5; }
.site-footer a { color: var(--color-accent); }
.subsection-title { align-items: baseline; display: flex; gap: 16px; margin-bottom: 24px; }.subsection-title span { color: var(--mint); font: 12px Georgia, serif; }.subsection-title h2 { font-size: 24px; font-weight: 400; letter-spacing: -.04em; }.subsection-title small { color: var(--muted); font-size: 10px; margin-left: auto; }.featured-section { margin-top: 64px; }.featured-grid, .resource-grid { display: grid; gap: 18px; grid-template-columns: repeat(3, 1fr); }.resource-card { background: var(--ink-soft); border: 1px solid rgba(151,255,224,.1); color: inherit; display: block; text-decoration: none; transition: border-color .25s, transform .25s; }.resource-card:hover { border-color: rgba(155,255,224,.55); transform: translateY(-4px); }.resource-card-featured { grid-column: span 1; }.resource-image-wrap { height: 154px; overflow: hidden; position: relative; }.resource-card-featured .resource-image-wrap { height: 210px; }.resource-image { height: 100%; object-fit: cover; transition: transform .5s; width: 100%; }.resource-card:hover .resource-image { transform: scale(1.04); }.resource-image-fallback { align-items: center; background: linear-gradient(130deg, color-mix(in srgb, var(--color-accent) 18%, var(--color-surface)), var(--color-bg)); color: var(--mint); display: flex; height: 100%; justify-content: center; }.resource-image-fallback svg { height: 38px; opacity: .4; width: 38px; }.resource-image-overlay { background: linear-gradient(transparent, var(--color-image-overlay)); inset: 0; position: absolute; }.resource-type { background: var(--mint); bottom: 12px; color: var(--ink); font-size: 9px; left: 13px; letter-spacing: .14em; padding: 5px 7px; position: absolute; text-transform: uppercase; }.badge-new { background: var(--color-accent); color: var(--color-bg); font-size: 9px; font-weight: 700; letter-spacing: .12em; padding: 5px 7px; position: absolute; right: 13px; text-transform: uppercase; top: 13px; }.resource-card-body { padding: 18px 18px 20px; }.category-label { color: var(--mint); font-size: 9px; letter-spacing: .15em; text-transform: uppercase; }.resource-arrow { color: var(--muted); height: 16px; transition: color .2s, transform .2s; width: 16px; }.resource-card:hover .resource-arrow { color: var(--mint); transform: translate(3px, -3px); }.resource-card h3 { font-size: 20px; font-weight: 400; letter-spacing: -.04em; margin: 12px 0 8px; }.resource-card p { color: var(--muted); font-size: 12px; line-height: 1.55; min-height: 38px; }.tag-row { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 14px; }.tag-row span { color: #66837e; font-size: 10px; }.resource-link { align-items: center; border-top: 1px solid rgba(151,255,224,.1); color: var(--mint); display: flex; font-size: 10px; gap: 8px; letter-spacing: .12em; margin-top: 17px; padding-top: 15px; text-transform: uppercase; }.all-resources { margin-top: 72px; }.loading-state, .empty-state { align-items: center; color: var(--muted); display: flex; flex-direction: column; gap: 12px; justify-content: center; min-height: 230px; text-align: center; }.loading-dot { animation: pulse 1.2s infinite; background: var(--mint); border-radius: 100%; height: 7px; width: 7px; }.empty-state svg { color: var(--mint); height: 25px; width: 25px; }.empty-state h3 { color: var(--cream); font-size: 19px; font-weight: 400; }.empty-state p { font-size: 12px; }.site-footer { align-items: center; border-top: 1px solid var(--line); display: flex; justify-content: space-between; margin: auto; max-width: 1176px; padding: 32px 0 38px; }.site-footer p, .site-footer > a { color: var(--muted); font-size: 10px; }.site-footer > a:hover { color: var(--mint); }@keyframes pulse { 50% { opacity: .25; transform: scale(.7); } }
@media (max-width: 760px) { .site-header { padding: 20px; } .brand-short { display: none; } .brand-logo { height: 38px; }.mobile-menu-button { display: block; }.site-nav { align-items: stretch; background: var(--color-menu); border: 1px solid var(--line); display: none; flex-direction: column; gap: 0; padding: 10px; position: absolute; right: 20px; top: 70px; width: 210px; }.site-nav.is-open { display: flex; }.site-nav a { padding: 12px; }.hero-content { padding: 70px 20px 110px; }.hero-orbit { height: 260px; opacity: .35; right: -100px; top: 135px; width: 260px; }.hero-grid { right: -35%; width: 100%; }.catalog-section { padding: 58px 20px 70px; }.section-heading { align-items: start; flex-direction: column; gap: 22px; }.section-note { text-align: left; }.filters-bar { align-items: stretch; flex-direction: column; gap: 10px; }.featured-grid, .resource-grid { grid-template-columns: 1fr; }.resource-card-featured .resource-image-wrap { height: 180px; }.site-footer { align-items: flex-start; flex-direction: column; gap: 18px; padding: 28px 20px; } }

```

---

## Archivo: `app/layout.tsx`

```tsx
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Laboratorio de Informática · E.E.S. N.º 2 Berisso',
  description: 'Portal de recursos, proyectos y herramientas del Laboratorio de Informática de la E.E.S. N.º 2 "Perito Francisco P. Moreno" de Berisso.',
  openGraph: {
    title: 'Laboratorio de Informática · E.E.S. N.º 2 Berisso',
    description: 'Recursos, proyectos y herramientas para la comunidad educativa.',
    locale: 'es_AR',
    type: 'website',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

```

---

## Archivo: `app/page.tsx`

```tsx
'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight, BookOpen, ExternalLink, Filter, Laptop, LockKeyhole, Menu, Moon, Search, Sparkles, Sun, X } from 'lucide-react'
import { LogoEm2Completo } from '@/components/logo-em2-completo'
import { ADMIN_URL, type CatalogResource, type CatalogResponse } from '@/lib/catalog'

function ResourceCard({ resource, featured = false }: { resource: CatalogResource; featured?: boolean }) {
  return <a href={resource.url} target="_blank" rel="noopener noreferrer" className={`resource-card group ${featured ? 'resource-card-featured' : ''}`} aria-label={`Abrir recurso: ${resource.title}`}>
    <div className="resource-image-wrap">
      {resource.imageUrl ? <img src={resource.imageUrl} alt={`Imagen de ${resource.title}`} className="resource-image" /> : <div className="resource-image-fallback"><Laptop aria-hidden="true" /></div>}
      <div className="resource-image-overlay" />
      <span className="resource-type">{resource.type || 'Recurso'}</span>
      {resource.isNew && <span className="badge-new">Nuevo</span>}
    </div>
    <div className="resource-card-body"><div className="flex items-start justify-between gap-3"><span className="category-label">{resource.category}</span><ArrowUpRight className="resource-arrow" aria-hidden="true" /></div><h3>{resource.title}</h3><p>{resource.subtitle || 'Explorá este recurso del laboratorio.'}</p>{resource.tags.length > 0 && <div className="tag-row" aria-label="Etiquetas">{resource.tags.slice(0, 3).map((tag) => <span key={tag}>#{tag}</span>)}</div>}<span className="resource-link">Abrir recurso <ExternalLink aria-hidden="true" /></span></div>
  </a>
}

function LoadingState() { return <div className="loading-state" role="status" aria-live="polite"><span className="loading-dot" /> Cargando recursos del laboratorio...</div> }

export default function Page() {
  const [resources, setResources] = useState<CatalogResource[]>([])
  const [updatedAt, setUpdatedAt] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [activeTag, setActiveTag] = useState('Todos')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  const loadCatalog = () => { setLoading(true); setError(false); fetch('/api/catalog').then(async (response) => { if (!response.ok) throw new Error('catalog unavailable'); return response.json() as Promise<CatalogResponse> }).then((data) => { setResources(data.resources); setUpdatedAt(data.updatedAt) }).catch(() => setError(true)).finally(() => setLoading(false)) }
  useEffect(() => { const saved = window.localStorage.getItem('lab-theme'); const preferred = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; setDarkMode(preferred); loadCatalog() }, [])
  useEffect(() => { document.documentElement.classList.toggle('dark', darkMode); window.localStorage.setItem('lab-theme', darkMode ? 'dark' : 'light') }, [darkMode])

  const categories = useMemo(() => ['Todos', ...Array.from(new Set(resources.map((resource) => resource.category)))], [resources])
  const tags = useMemo(() => ['Todos', ...Array.from(new Set(resources.flatMap((resource) => resource.tags)))], [resources])
  const filtered = useMemo(() => resources.filter((resource) => { const text = `${resource.title} ${resource.subtitle} ${resource.category} ${resource.tags.join(' ')}`.toLowerCase(); return (activeCategory === 'Todos' || resource.category === activeCategory) && (activeTag === 'Todos' || resource.tags.includes(activeTag)) && text.includes(query.toLowerCase()) }), [resources, query, activeCategory, activeTag])
  const featured = filtered.filter((resource) => resource.featured).slice(0, 3)
  const featuredIds = new Set(featured.map((resource) => resource.id))
  const hasFilters = Boolean(query || activeCategory !== 'Todos' || activeTag !== 'Todos')
  const clearFilters = () => { setQuery(''); setActiveCategory('Todos'); setActiveTag('Todos') }

  return <main className="site-shell">
    <header className="site-header"><a href="#inicio" className="brand" aria-label="Inicio - E.E.S. N.º 2 Berisso"><img className="brand-logo" src="/logo-em2-optimizado.svg" alt="E.E.S. N.º 2" /></a><button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button><nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal"><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>{categories.slice(1, 5).map((category) => <a key={category} href="#recursos" aria-current={activeCategory === category ? 'page' : undefined} onClick={() => { setActiveCategory(category); setMenuOpen(false) }}>{category}</a>)}{ADMIN_URL && <a href={ADMIN_URL} target="_blank" rel="noopener noreferrer" className="admin-link"><LockKeyhole aria-hidden="true" /> Administrativo <ExternalLink aria-hidden="true" /></a>}<button className="theme-toggle" type="button" onClick={() => setDarkMode((value) => !value)} aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}>{darkMode ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}</button></nav></header>
    <section id="inicio" className="hero-section"><div className="hero-grid" /><div className="hero-content"><div className="eyebrow"><span /> E.E.S. N.º 2 · BERISSO</div><h1>Laboratorio<br /><em>de Informática.</em></h1><p>Recursos, proyectos y herramientas para aprender, crear y compartir.</p><p className="hero-institution">Un espacio digital para la comunidad educativa de la E.E.S. N.º 2 “Perito Francisco P. Moreno”.</p><div className="hero-actions"><a href="#recursos" className="hero-cta">Explorar recursos <ArrowUpRight aria-hidden="true" /></a>{ADMIN_URL && <a href={ADMIN_URL} target="_blank" rel="noopener noreferrer" className="hero-admin"><LockKeyhole aria-hidden="true" /> Administrativo</a>}</div></div><div className="hero-orbit" aria-hidden="true"><div /><div /><div /><span>02</span></div></section>
    <section className="intro-section"><span className="section-kicker">UN ESPACIO PARA COMPARTIR</span><p>Este portal reúne recursos, proyectos, herramientas y materiales utilizados en el Laboratorio de Informática de la E.E.S. N.º 2 de Berisso.</p><p>Un único punto de acceso para la comunidad educativa, sin depender de enlaces dispersos.</p></section>
    <section id="recursos" className="catalog-section"><div className="section-heading"><div><span className="section-kicker">CATÁLOGO DIGITAL</span><h2>Todo lo que necesitás,<br /><em>en un solo lugar.</em></h2></div><p className="section-note">Recursos seleccionados para<br />aprender, crear y compartir.</p></div><div className="filters-bar"><label className="search-box"><Search aria-hidden="true" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar recursos..." aria-label="Buscar recursos" /></label><div className="filter-group" aria-label="Filtrar por categoría"><Filter aria-hidden="true" />{categories.map((category) => <button key={category} className={activeCategory === category ? 'active' : ''} aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>)}</div></div>{tags.length > 1 && <div className="tag-filters"><span>Etiquetas</span>{tags.slice(1, 8).map((tag) => <button key={tag} className={activeTag === tag ? 'active' : ''} aria-pressed={activeTag === tag} onClick={() => setActiveTag(activeTag === tag ? 'Todos' : tag)}>#{tag}</button>)}</div>}
      {loading ? <LoadingState /> : error ? <div className="empty-state" role="alert"><Sparkles aria-hidden="true" /><h3>Estamos actualizando el catálogo</h3><p>Algunos recursos pueden tardar unos minutos en aparecer.</p><button className="retry-button" onClick={loadCatalog}>Reintentar</button></div> : <><div className="catalog-meta"><span>{filtered.length} {filtered.length === 1 ? 'recurso' : 'recursos'}{activeCategory !== 'Todos' ? ` en ${activeCategory}` : ''}</span>{updatedAt && <span>Catálogo actualizado recientemente</span>}{hasFilters && <button onClick={clearFilters}>Limpiar filtros</button>}</div>{featured.length > 0 && <section className="featured-section"><div className="subsection-title"><span>01</span><h2>Destacados</h2></div><div className="featured-grid">{featured.map((resource) => <ResourceCard key={resource.id} resource={resource} featured />)}</div></section>}<section className="all-resources"><div className="subsection-title"><span>02</span><h2>{activeCategory === 'Todos' ? 'Explorá el catálogo' : activeCategory}</h2></div>{filtered.length > 0 ? <div className="resource-grid">{filtered.filter((resource) => !featuredIds.has(resource.id)).map((resource) => <ResourceCard key={resource.id} resource={resource} />)}</div> : <div className="empty-state"><BookOpen aria-hidden="true" /><h3>No encontramos recursos que coincidan con tu búsqueda.</h3><button className="retry-button" onClick={clearFilters}>Limpiar filtros</button></div>}</section></>}
    </section>
    <footer className="site-footer"><div className="footer-inner"><LogoEm2Completo className="site-footer-logo" /><div className="footer-copy"><strong>LABORATORIO DE INFORMÁTICA</strong><p>E.E.S. N.º 2 “Perito Francisco P. Moreno”</p><p>Berisso · Buenos Aires</p><span>Recursos · Proyectos · Herramientas</span></div></div><div className="footer-bottom"><span>Portal del Laboratorio</span><span>© {new Date().getFullYear()}</span></div></footer>
  </main>
}

```

---

## Archivo: `app/api/catalog/route.ts`

```typescript
import { NextResponse } from 'next/server'
import { fetchCatalog } from '@/lib/catalog'

export const revalidate = 600

export async function GET() {
  try {
    const catalog = await fetchCatalog()
    return NextResponse.json(catalog, {
      headers: { 'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=3600' },
    })
  } catch (error) {
    console.error('[catalog] Unable to refresh catalog', error)
    return NextResponse.json(
      { message: 'Catalog temporarily unavailable', resources: [], updatedAt: null },
      { status: 503, headers: { 'Cache-Control': 'no-store' } },
    )
  }
}

```

---

## Archivo: `components/logo-em2-completo-source.svg`

[Archivo binario o de imagen, contenido no incluido.]

---

## Archivo: `components/logo-em2-completo.tsx`

```tsx
import React from 'react'

const logoMarkup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11615.96 6708.99" role="img" aria-labelledby="logoTitleCompleto" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTpmMWUwNGNmNi00NTZiLTQ0OWEtODU1ZS0wNzU1NTAwMDNhMmQAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaEL8+0CJ3jVVSpLci6/olXsAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDphZDBhZTE0MS0wMjg3LTQwODktYmQ4Zi1jZjhhMTNkNTQwYzVscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNo1H9Y1OwImkJzSp7kZr1r/gAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg6rIWYHhfh0zGJxs8+5byjQ81uDPbaIDN04J5aTLDOhGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaAOtbMxPBH+YFXZMikTQxy8AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCDbhtuR15JkGJM785VFgXTDEbTEE/ntE/qOl3QQLrSsBGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBi1Zmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmYxZTA0Y2Y2LTQ1NmItNDQ5YS04NTVlLTA3NTU1MDAwM2EyZC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOjU0NzBjYzY5LThkNGMtNDM2Ny05NTc2LTgwYzdlZDllY2M1MnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDqshZgeF+HTMYnGzz7lvKNDzW4M9togM3TgnlpMsM6EaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggxXCltu5UwQKgOXEiSaagO+hAsC1/azqb8EVE04DnKBuiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFgg0v+qZWl5qiAL4qakPuoZstr+mtA455CPeJy9SlAWb0x0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQJ8AqPh5X42FX6jPChBA9kvV23RQ/cJjRfJ7zXZjqs73Nah4FLNvMaKYAVEatAEdWiZdy6MZ4MLTDGwEpLAOw/Q=</c2pa:manifest></metadata><title id="logoTitleCompleto">E.M.2 Perito Francisco P. Moreno</title><defs><style>.fil1{fill:#fefefe}</style></defs><g id="logo-em2-completo"><path d="m5860.16 30.39 2928.5 5159.19c10.83 19.09 10.71 40.83-.33 59.8-11.05 18.98-29.9 29.82-51.85 29.82h-5857c-21.96 0-40.81-10.84-51.86-29.82-11.04-18.97-11.16-40.71-.32-59.8L5755.79 30.39c10.95-19.3 30-30.39 52.18-30.39 22.19 0 41.23 11.09 52.18 30.39z" style="fill:#2563EB"/><path d="m5807.98 1518.55-252.96 445.64h264.23c11.1 0 20.62 5.55 26.09 15.19l75.6 133.19c5.42 9.55 5.36 20.42-.16 29.91-5.52 9.48-14.95 14.9-25.93 14.9h-449.49l-222.4 391.81h1152.58c11.09 0 20.61 5.55 26.09 15.19l76.63 135.01c5.42 9.55 5.36 20.42-.16 29.9-5.53 9.49-14.95 14.91-25.93 14.91h-1512.6c-10.98 0-20.4-5.42-25.93-14.91-5.52-9.48-5.58-20.35-.16-29.9l868.41-1529.9c5.48-9.65 15-15.19 26.09-15.19 11.1 0 20.62 5.54 26.09 15.19l222.97 392.81c2.68 4.72 3.91 9.38 3.91 14.81v273.46c0 13.81-9 25.49-22.35 29.01-13.35 3.53-26.93-2.19-33.75-14.2zM7024.7 2872.03 5917 3979.74c-10.91 10.91-28.13 11.8-40.12 2.08l-564-457.63-382.46 957.8c-4.65 11.64-15.33 18.88-27.86 18.88h-129.71c-10.27 0-19.11-4.69-24.86-13.2-5.75-8.5-6.81-18.44-2.98-27.97l238.32-593.84-350.02-277.87-508.68 896.14c-5.44 9.58-14.85 15.11-25.87 15.19l-155.88 1.16c-11.02.08-20.52-5.31-26.1-14.8-5.58-9.51-5.65-20.43-.22-30l645.74-1137.62c4.51-7.94 11.56-12.98 20.53-14.67s17.37.43 24.47 6.18l456.99 370.8 155.52-389.81c3.58-8.97 10.47-15.16 19.76-17.77s18.4-.9 26.12 4.89l632.19 474.5L7037.81 2577.9c6.8-7 15.65-10.1 25.33-8.86 9.68 1.23 17.47 6.46 22.29 14.95l1172.38 2065.4c5.41 9.54 5.35 20.42-.17 29.9-5.52 9.49-14.95 14.91-25.93 14.91h-155.23c-11.09 0-20.61-5.55-26.09-15.2z" class="fil1"/><path d="m7129.44 3817.08-193-320.06-206.05 213.03c-5.86 6.06-13.13 9.14-21.56 9.14H6518.2c-12.4 0-22.98-7.07-27.72-18.52s-2.26-23.93 6.5-32.69L6946.96 3218c6.78-6.77 15.46-9.75 24.97-8.55s17.18 6.24 22.06 14.49l341.12 576.58c6.11 10.33 5.67 22.52-1.17 32.38l-462.33 666.3 828.44 1.64c10.74.02 19.96 5.2 25.56 14.37l81.35 133.36c5.8 9.51 6.01 20.59.55 30.31-5.45 9.72-15.02 15.32-26.16 15.32H6668.88c-16.53 0-30-13.48-30-30v-155.97c0-6.15 1.59-11.43 4.98-16.56l485.58-674.58z" class="fil1"/><path d="M5807.98 728.5 4553.14 2939.19h944.33c6.04 0 11.22 1.53 16.29 4.81l208.84 135c11.34 7.33 16.31 20.73 12.49 33.68-3.83 12.96-15.27 21.51-28.78 21.51H4442.45L3446.26 4889.2h4715.35c5.54 0 10.3 1.28 15.09 4.07l231.86 135c11.89 6.92 17.46 20.47 13.87 33.74-3.58 13.28-15.21 22.19-28.96 22.19H3163.81c-11.05 0-20.55-5.51-26.04-15.11-5.49-9.59-5.42-20.57.18-30.1 215.46-366.51 426.38-735.65 635.56-1105.77 230.19-407.3 458.15-815.86 686.16-1224.39 228-408.52 455.96-817.08 686.15-1224.37 209.27-370.27 420.28-739.58 635.83-1106.24 5.58-9.49 15.08-14.88 26.09-14.8 11.01.09 20.43 5.62 25.86 15.2l450.37 793.43c2.68 4.72 3.91 9.37 3.91 14.8v273.48c0 13.81-8.99 25.48-22.34 29.01-13.35 3.52-26.93-2.19-33.75-14.2z" class="fil1"/><path d="M483.26 6206.68c0 37.75-5.82 70.91-17.64 99.84-11.64 29.1-28.75 53.45-51.33 73.2-22.4 19.93-49.91 34.93-82.55 45.33-32.63 10.41-71.08 15.53-115.35 15.53h-55.92v213.25c0 3.53-1.06 6.53-3.35 9.35-2.29 2.64-6 4.94-11.11 6.7-5.12 1.76-12 3-20.64 4.06-8.47 1.06-19.58 1.58-32.81 1.58-13.05 0-23.99-.52-32.81-1.58s-15.7-2.47-20.81-4.06c-5.12-1.76-8.82-4.06-10.76-6.7-2.12-2.82-3.18-6-3.18-9.35v-601.66c0-16.23 4.24-28.4 12.7-36.51 8.47-8.12 19.58-12.17 33.34-12.17h157.69c15.88 0 31.05.52 45.34 1.76 14.28 1.23 31.39 3.88 51.5 7.76 19.93 4.06 40.22 11.29 60.68 22.05 20.46 10.58 38.1 24.16 52.56 40.57 14.47 16.4 25.58 35.45 33.16 57.5 7.59 21.87 11.29 46.39 11.29 73.55zm-141.81 9.88c0-23.46-4.24-42.86-12.53-58.03s-18.52-26.46-30.69-33.69-24.87-11.82-38.1-13.76c-13.41-1.94-27.16-2.82-41.45-2.82h-58.21v227.54h61.38c21.88 0 40.04-3 54.86-8.82 14.64-5.82 26.81-14.11 36.16-24.69 9.35-10.41 16.4-23.11 21.34-37.75 4.77-14.64 7.24-30.69 7.24-47.98zm647.87 194.38c0 15.88-3.53 27.52-10.59 35.1-7.05 7.59-16.76 11.47-29.28 11.47H668.64c0 19.58 2.29 37.22 7.06 53.27 4.58 15.87 11.99 29.46 22.05 40.57 10.23 11.11 23.28 19.58 39.33 25.4s35.1 8.82 57.5 8.82c22.76 0 42.69-1.59 59.97-4.94 17.11-3.35 32.11-6.88 44.63-10.94 12.52-4.05 22.93-7.58 31.22-10.93 8.29-3.36 14.99-4.94 20.11-4.94 3.17 0 5.82.53 7.76 1.76 2.12 1.24 3.88 3.35 5.29 6.53 1.24 3 2.3 7.41 2.82 13.05.53 5.64.71 12.88.71 21.34 0 7.59-.18 14.11-.53 19.41-.35 5.29-.88 9.87-1.59 13.58-.7 3.88-1.58 7.05-3 9.52-1.41 2.65-3.17 5.12-5.46 7.59-2.3 2.29-8.29 5.64-18.35 9.88-10.05 4.23-22.75 8.29-38.27 12.34-15.53 4.06-33.16 7.59-53.1 10.59-19.93 2.99-41.27 4.58-64.03 4.58-41.09 0-76.9-5.11-107.77-15.52-30.69-10.23-56.44-25.93-77.26-46.92-20.63-20.99-35.98-47.62-46.21-79.55-10.05-32.1-15.17-69.67-15.17-112.71 0-40.93 5.29-77.79 16.05-110.77 10.58-32.81 26.11-60.68 46.57-83.61 20.28-22.93 44.98-40.4 74.08-52.39 29.28-12.17 62.09-18.17 98.6-18.17 38.63 0 71.62 5.65 98.96 17.11 27.51 11.29 49.91 27.17 67.55 47.27 17.46 20.11 30.52 44.1 38.81 71.62 8.29 27.51 12.35 57.5 12.35 89.96zm-125.95-37.04c1.06-36.51-6.35-65.26-22.04-86.08-15.7-20.99-39.87-31.39-72.68-31.39-16.58 0-31.04 3.17-43.21 9.34-12.35 6.18-22.58 14.47-30.69 25.05-8.12 10.59-14.29 22.93-18.52 37.22-4.41 14.46-6.88 29.63-7.59 45.86zm529.7-137.41c0 12.35-.35 22.58-1.06 30.52s-1.76 14.11-3 18.52c-1.41 4.41-3.35 7.59-5.47 9.35-2.29 1.76-5.11 2.47-8.64 2.47-2.64 0-5.82-.53-9.35-1.77-3.35-1.23-7.23-2.46-11.64-3.88-4.23-1.41-9-2.64-14.11-3.88-5.29-1.23-10.94-1.76-17.11-1.76-7.23 0-14.46 1.41-21.7 4.41-7.23 3-14.81 7.41-22.57 13.76-7.76 6.17-15.88 14.46-24.35 24.69-8.46 10.41-17.46 23.11-27.16 38.28v287.69c0 3.35-1.06 6.35-3.17 8.99-1.94 2.65-5.47 4.77-10.59 6.53-4.94 1.59-11.64 3-19.75 3.88-8.29.88-18.88 1.23-31.58 1.23s-23.28-.35-31.57-1.23c-8.11-.88-14.82-2.29-19.76-3.88-5.11-1.76-8.64-3.88-10.58-6.53-2.12-2.64-3.17-5.64-3.17-8.99v-461.43c0-3.36.88-6.35 2.64-9 1.59-2.65 4.76-4.76 9.17-6.53 4.59-1.58 10.24-3 17.29-3.88 7.06-.88 16.05-1.23 26.64-1.23 11.11 0 20.1.35 27.34 1.23 7.23.88 12.87 2.3 16.93 3.88 3.88 1.77 6.7 3.88 8.47 6.53 1.76 2.65 2.64 5.64 2.64 9v57.5c12-17.29 23.46-31.4 34.04-42.51 10.76-11.11 20.99-20.11 30.52-26.64 9.7-6.52 19.4-11.11 29.1-13.58 9.53-2.64 19.23-3.88 28.93-3.88 4.41 0 9.35.18 14.46.71 5.12.53 10.59 1.41 16.06 2.64 5.46 1.24 10.4 2.65 14.46 4.06 4.23 1.59 7.23 3.17 9.17 4.94 1.77 1.76 3.18 3.7 4.06 5.64.88 2.12 1.59 4.94 2.29 8.65.71 3.52 1.24 8.99 1.59 16.22.35 7.24.53 16.94.53 29.28zm210.08 418.4c0 3.35-1.06 6.35-3.17 8.99-1.94 2.65-5.47 4.77-10.59 6.53-4.94 1.59-11.64 3-19.75 3.88-8.29.88-18.88 1.23-31.58 1.23s-23.28-.35-31.57-1.23c-8.11-.88-14.82-2.29-19.76-3.88-5.11-1.76-8.64-3.88-10.58-6.53-2.12-2.64-3.17-5.64-3.17-8.99v-460.38c0-3.35 1.05-6.35 3.17-8.99 1.94-2.65 5.47-4.94 10.58-6.7 4.94-1.94 11.65-3.36 19.76-4.41 8.29-1.06 18.87-1.59 31.57-1.59s23.29.53 31.58 1.59c8.11 1.05 14.81 2.47 19.75 4.41 5.12 1.76 8.65 4.05 10.59 6.7 2.11 2.64 3.17 5.64 3.17 8.99zm10.58-618.07c0 26.28-5.29 44.28-16.05 54.33s-30.51 14.99-59.62 14.99c-29.28 0-49.21-4.76-59.26-14.46-10.23-9.7-15.35-27.16-15.35-52.21 0-26.28 5.29-44.45 15.88-54.68 10.4-10.06 30.34-15.17 59.79-15.17 28.93 0 48.69 4.94 59.09 14.82 10.41 9.7 15.52 27.16 15.52 52.38zm392.3 572.74c0 15.17-.89 26.81-2.83 34.92s-4.41 13.76-7.58 16.93c-3 3.36-7.59 6.35-13.58 8.82-6.18 2.65-13.23 4.94-21.35 6.71-7.93 1.94-16.75 3.35-26.28 4.41-9.52 1.05-19.05 1.58-28.75 1.58-25.75 0-48.15-3.35-67.2-9.87-18.88-6.53-34.58-16.58-47.1-30.17-12.35-13.58-21.52-30.69-27.34-51.5-5.82-20.64-8.82-45.16-8.82-73.38v-236.18h-55.91c-6.53 0-11.65-4.06-15-12.17-3.52-8.12-5.29-21.7-5.29-40.75 0-10.05.35-18.52 1.24-25.4.88-6.88 2.29-12.35 4.05-16.4 1.59-3.88 3.88-6.71 6.53-8.47 2.47-1.76 5.64-2.65 9-2.65h55.38v-103.18c0-3.36.88-6.53 2.82-9.35 1.94-2.65 5.47-4.94 10.41-6.88s11.82-3.35 20.29-4.23c8.46-.89 18.87-1.24 31.39-1.24 12.7 0 23.29.35 31.75 1.24 8.47.88 15.17 2.29 20.11 4.23 4.76 1.94 8.29 4.23 10.23 6.88 2.12 2.82 3.18 5.99 3.18 9.35v103.18h100.01c3.53 0 6.52.89 8.99 2.65 2.65 1.76 4.77 4.59 6.53 8.47 1.76 4.05 3 9.52 3.88 16.4s1.24 15.35 1.24 25.4c0 19.05-1.77 32.63-5.12 40.75-3.53 8.11-8.47 12.17-14.99 12.17h-100.54v216.6c0 25.22 3.88 44.1 11.81 56.62 7.94 12.53 22.05 18.88 42.34 18.88 6.88 0 13.05-.53 18.52-1.77 5.47-1.23 10.4-2.64 14.64-4.23 4.41-1.41 7.94-2.82 10.93-4.06 2.83-1.23 5.65-1.76 7.94-1.76 2.12 0 4.06.53 6 1.76 1.76 1.24 3.35 3.53 4.41 7.23.88 3.53 1.94 8.47 2.82 14.64.88 6.35 1.24 14.11 1.24 23.82zm549.09-189.97c0 39.15-5.11 74.96-15.52 107.42-10.41 32.28-25.93 60.14-47.1 83.6-20.99 23.46-47.27 41.46-79.02 54.33q-47.625 19.05-111.12 19.05c-41.1 0-76.73-5.64-107.07-17.11-30.34-11.29-55.56-27.87-75.49-49.56-19.94-21.7-34.75-48.33-44.45-80.08-9.71-31.58-14.47-67.74-14.47-108.48 0-39.16 5.29-75.14 15.7-107.6 10.58-32.63 26.28-60.5 47.45-83.78 20.99-23.11 47.27-41.1 78.84-53.98 31.4-12.7 68.44-19.05 110.78-19.05 41.45 0 77.25 5.65 107.59 16.76 30.34 11.29 55.39 27.69 75.14 49.39 19.94 21.69 34.58 48.33 44.28 80.08 9.7 31.57 14.46 67.91 14.46 109.01zm-133.35 5.11c0-22.75-1.76-43.74-5.47-62.79-3.7-19.23-9.7-35.81-18.52-49.92-8.64-14.11-20.11-25.22-34.39-33.16-14.47-7.94-32.46-11.82-54.33-11.82-19.4 0-36.34 3.53-50.98 10.58-14.46 7.06-26.45 17.47-35.8 31.05s-16.41 29.98-20.99 49.03c-4.77 19.23-7.06 40.93-7.06 65.44 0 22.76 1.94 43.75 5.65 62.8 3.88 19.22 10.05 35.8 18.52 49.92 8.46 14.11 19.93 25.04 34.57 32.8 14.46 7.76 32.45 11.65 53.97 11.65 19.76 0 36.87-3.53 51.51-10.59 14.46-7.05 26.46-17.28 35.81-30.69 9.34-13.58 16.22-29.81 20.81-48.86 4.41-19.23 6.7-40.92 6.7-65.44zm859.01-365.48c0 10.41-.35 19.05-1.23 26.11s-2.3 12.7-4.24 16.93c-1.94 4.06-4.05 7.23-6.35 9.18-2.47 2.11-5.29 3.17-8.29 3.17H3041.6v179.92h205.49c3.18 0 6 .88 8.29 2.64 2.47 1.59 4.59 4.59 6.53 8.65 1.94 4.23 3.17 9.7 4.06 16.58.88 6.87 1.41 15.52 1.41 25.92 0 10.24-.53 18.88-1.41 25.76-.89 6.88-2.12 12.52-4.06 17.11-1.94 4.41-4.06 7.58-6.53 9.52-2.29 1.94-5.11 2.82-8.29 2.82H3041.6v249.24c0 3.71-1.06 7.06-3.18 9.88-1.94 2.64-5.64 4.94-11.11 6.88-5.29 1.94-12.35 3.35-20.81 4.41-8.64 1.06-19.76 1.58-33.16 1.58-13.06 0-23.99-.52-32.81-1.58s-15.88-2.47-20.99-4.41c-5.12-1.77-8.82-4.24-11.11-6.88-2.3-2.82-3.36-6.17-3.36-9.88v-606.42c0-15.17 3.89-26.11 11.65-32.81s17.28-10.05 28.75-10.05h315.2c3 0 5.82.88 8.29 2.82 2.3 1.94 4.41 4.94 6.35 9.35 1.94 4.23 3.36 10.05 4.24 17.28s1.23 16.05 1.23 26.28zm398.99 177.27c0 12.35-.35 22.58-1.06 30.52s-1.76 14.11-3 18.52c-1.41 4.41-3.35 7.59-5.47 9.35-2.29 1.76-5.11 2.47-8.64 2.47-2.64 0-5.82-.53-9.35-1.77-3.35-1.23-7.23-2.46-11.64-3.88-4.23-1.41-9-2.64-14.11-3.88-5.29-1.23-10.94-1.76-17.11-1.76-7.23 0-14.46 1.41-21.7 4.41-7.23 3-14.81 7.41-22.57 13.76-7.76 6.17-15.88 14.46-24.35 24.69-8.46 10.41-17.46 23.11-27.16 38.28v287.69c0 3.35-1.06 6.35-3.17 8.99-1.94 2.65-5.47 4.77-10.59 6.53-4.94 1.59-11.64 3-19.75 3.88-8.29.88-18.88 1.23-31.58 1.23s-23.28-.35-31.57-1.23c-8.11-.88-14.82-2.29-19.76-3.88-5.11-1.76-8.64-3.88-10.58-6.53-2.12-2.64-3.17-5.64-3.17-8.99v-461.43c0-3.36.88-6.35 2.64-9 1.59-2.65 4.76-4.76 9.17-6.53 4.59-1.58 10.24-3 17.29-3.88 7.06-.88 16.05-1.23 26.64-1.23 11.11 0 20.1.35 27.34 1.23 7.23.88 12.87 2.3 16.93 3.88 3.88 1.77 6.7 3.88 8.47 6.53 1.76 2.65 2.64 5.64 2.64 9v57.5c12-17.29 23.46-31.4 34.04-42.51 10.76-11.11 20.99-20.11 30.52-26.64 9.7-6.52 19.4-11.11 29.1-13.58 9.53-2.64 19.23-3.88 28.93-3.88 4.41 0 9.35.18 14.46.71 5.12.53 10.59 1.41 16.06 2.64 5.46 1.24 10.4 2.65 14.46 4.06 4.23 1.59 7.23 3.17 9.17 4.94 1.77 1.76 3.18 3.7 4.06 5.64.88 2.12 1.59 4.94 2.29 8.65.71 3.52 1.24 8.99 1.59 16.22.35 7.24.53 16.94.53 29.28zm449.26 419.99c0 4.76-1.77 8.46-5.12 11.28-3.53 2.83-8.99 4.77-16.4 6-7.41 1.24-18.35 1.76-32.99 1.76-15.52 0-26.81-.52-33.86-1.76-7.06-1.23-12.17-3.17-15-6-3-2.82-4.41-6.52-4.41-11.28v-36.69c-19.05 20.28-40.57 35.98-64.91 47.27-24.16 11.29-51.15 16.93-80.78 16.93-24.34 0-46.92-3.17-67.38-9.52s-38.1-15.88-53.1-28.4c-14.99-12.7-26.63-28.22-34.92-46.74-8.29-18.7-12.35-40.4-12.35-65.09 0-26.99 5.29-50.27 15.7-70.03 10.58-19.93 26.28-36.16 47.1-49.21 20.81-12.88 46.56-22.4 77.61-28.58 30.86-6.17 66.85-9.34 107.77-9.34h44.98v-27.87c0-14.47-1.41-27.17-4.41-38.1-2.82-10.76-7.76-19.94-14.46-27.17-6.71-7.23-15.53-12.52-26.82-16.05-11.11-3.35-25.04-5.11-41.45-5.11-21.69 0-41.1 2.47-58.03 7.23-17.11 4.76-32.1 10.23-45.15 16.05-13.06 5.82-23.99 11.29-32.81 16.05s-15.88 7.23-21.35 7.23c-3.88 0-7.23-1.23-10.05-3.52-3-2.47-5.47-6-7.23-10.41-1.94-4.41-3.35-10.06-4.41-16.58-1.06-6.53-1.59-13.76-1.59-21.52 0-10.76.88-19.23 2.65-25.4 1.58-6.18 4.94-11.64 9.7-16.76 4.94-4.94 13.23-10.41 25.4-16.4 11.99-6 26.1-11.64 42.33-16.76 16.23-5.29 33.87-9.52 52.92-12.7 19.22-3.35 38.98-4.94 59.26-4.94 36.16 0 67.03 3.53 92.79 10.58 25.57 7.06 46.74 18 63.14 32.64 16.58 14.64 28.75 33.51 36.34 56.62 7.58 22.93 11.29 50.44 11.29 82.02zm-128.06-197.91h-49.57c-20.99 0-38.8 1.58-53.62 4.58-14.81 3.18-26.81 7.76-36.16 14.11-9.35 6.18-16.05 13.59-20.28 22.41-4.41 8.82-6.53 18.87-6.53 30.16 0 19.4 6.17 34.57 18.35 45.51 12.17 11.11 29.1 16.58 50.8 16.58 18.16 0 34.92-4.59 50.27-13.94 15.34-9.35 30.86-22.93 46.74-40.92zm698.14 196.32c0 3.35-1.06 6.35-3.17 8.99-1.94 2.65-5.47 4.77-10.23 6.53-4.94 1.59-11.65 3-20.11 3.88-8.47.88-18.88 1.23-31.22 1.23-12.88 0-23.46-.35-31.93-1.23s-15.17-2.29-20.11-3.88c-4.76-1.76-8.29-3.88-10.23-6.53-2.11-2.64-3.17-5.64-3.17-8.99v-263c0-22.4-1.59-40.04-4.94-52.74-3.18-12.87-7.94-23.81-14.11-32.81-6.18-9.17-14.29-16.22-23.99-21.34-9.88-4.94-21.17-7.41-34.22-7.41-16.58 0-33.16 6-50.1 18.17-16.75 12-34.39 29.63-52.56 52.56v306.57c0 3.35-1.06 6.35-3.17 8.99-1.94 2.65-5.47 4.77-10.59 6.53-4.94 1.59-11.64 3-19.75 3.88-8.29.88-18.88 1.23-31.58 1.23s-23.28-.35-31.57-1.23c-8.11-.88-14.82-2.29-19.76-3.88-5.11-1.76-8.64-3.88-10.58-6.53-2.12-2.64-3.17-5.64-3.17-8.99v-461.43c0-3.36.88-6.35 2.64-9 1.59-2.65 4.76-4.76 9.17-6.53 4.59-1.58 10.24-3 17.29-3.88 7.06-.88 16.05-1.23 26.64-1.23 11.11 0 20.1.35 27.34 1.23 7.23.88 12.87 2.3 16.93 3.88 3.88 1.77 6.7 3.88 8.47 6.53 1.76 2.65 2.64 5.64 2.64 9v53.26c25.4-27.51 51.33-47.97 77.79-61.73 26.28-13.76 53.8-20.64 82.37-20.64 31.4 0 57.86 5.12 79.38 15.52 21.52 10.23 38.8 24.35 52.21 42.16 13.23 17.64 22.75 38.45 28.57 62.27 5.82 23.81 8.82 52.38 8.82 85.72zm475.9-73.56c0 9-.18 16.41-.71 22.58-.53 6-1.23 11.11-2.12 15.35-.88 4.05-1.94 7.41-3.17 10.05-1.23 2.65-3.88 5.82-7.94 9.88-4.23 3.88-11.29 8.82-21.16 14.46-10.06 5.65-21.35 10.76-34.22 15.35-12.7 4.41-26.46 8.11-41.45 10.76-15 2.82-30.52 4.23-46.39 4.23-35.46 0-66.86-5.47-94.2-16.58-27.51-10.93-50.44-27.34-69.14-48.86-18.52-21.52-32.63-47.98-41.98-79.02-9.53-31.04-14.29-66.5-14.29-106.54 0-46.21 5.82-86.25 17.29-119.77 11.64-33.69 27.69-61.56 48.33-83.6 20.64-22.05 45.15-38.46 73.38-49.22 28.22-10.76 59.26-16.05 93.13-16.05 13.76 0 27.16 1.24 40.57 3.71 13.23 2.29 25.57 5.64 37.22 9.7 11.46 4.23 21.87 8.82 30.86 13.93 9.18 5.29 15.7 9.7 19.41 13.58 3.88 3.71 6.52 6.88 8.11 9.53 1.41 2.64 2.65 6 3.53 10.05.88 4.24 1.59 9.35 2.11 15.35.53 6.17.71 13.4.71 22.05 0 20.11-1.59 34.22-5.11 42.33-3.53 8.11-7.94 12.17-13.41 12.17-5.82 0-12.17-2.47-18.7-7.23-6.52-4.76-14.29-10.23-23.28-16.05-8.82-5.82-19.58-11.29-31.93-16.05-12.34-4.77-27.16-7.24-44.45-7.24-33.86 0-59.62 13.06-77.61 38.99-17.81 26.1-26.81 64.2-26.81 114.47 0 24.7 2.29 46.57 6.7 65.62 4.59 18.87 11.12 34.75 19.94 47.45s19.75 22.4 32.98 28.75c13.41 6.35 28.75 9.52 46.39 9.52 17.82 0 33.34-2.64 46.21-8.11 12.88-5.29 24.17-11.29 33.87-17.82 9.53-6.52 17.64-12.52 24.34-17.81 6.53-5.47 12-8.11 16.41-8.11 3.17 0 5.64.88 7.76 2.64 2.11 1.77 3.7 4.94 4.94 9.53 1.23 4.76 2.11 10.76 2.82 17.99.7 7.23 1.06 16.58 1.06 28.04zm224.89 73.56c0 3.35-1.06 6.35-3.17 8.99-1.94 2.65-5.47 4.77-10.59 6.53-4.94 1.59-11.64 3-19.75 3.88-8.29.88-18.88 1.23-31.58 1.23s-23.28-.35-31.57-1.23c-8.11-.88-14.82-2.29-19.76-3.88-5.11-1.76-8.64-3.88-10.58-6.53-2.12-2.64-3.17-5.64-3.17-8.99v-460.38c0-3.35 1.05-6.35 3.17-8.99 1.94-2.65 5.47-4.94 10.58-6.7 4.94-1.94 11.65-3.36 19.76-4.41 8.29-1.06 18.87-1.59 31.57-1.59s23.29.53 31.58 1.59c8.11 1.05 14.81 2.47 19.75 4.41 5.12 1.76 8.65 4.05 10.59 6.7 2.11 2.64 3.17 5.64 3.17 8.99zm10.58-618.07c0 26.28-5.29 44.28-16.05 54.33s-30.51 14.99-59.62 14.99c-29.28 0-49.21-4.76-59.26-14.46-10.23-9.7-15.35-27.16-15.35-52.21 0-26.28 5.29-44.45 15.88-54.68 10.4-10.06 30.34-15.17 59.79-15.17 28.93 0 48.69 4.94 59.09 14.82 10.41 9.7 15.52 27.16 15.52 52.38zm444.15 487.54c0 26.11-4.94 49.21-14.81 69.32-9.7 19.93-23.64 36.51-41.63 50.1-17.99 13.4-39.16 23.45-63.68 30.16-24.51 6.7-50.97 10.05-79.55 10.05-17.28 0-33.86-1.23-49.56-3.88-15.7-2.64-29.64-6-42.16-10.05-12.35-3.88-22.75-7.94-31.04-12.17-8.29-4.24-14.29-8.12-18-11.82-3.88-3.71-6.87-9.35-8.82-17.11-2.11-7.59-3.17-19.05-3.17-34.22 0-9.88.35-17.82 1.06-23.81.7-6 1.76-10.94 3-14.47 1.41-3.52 3.17-5.99 5.29-7.23 1.94-1.23 4.58-1.76 7.76-1.76 3.7 0 9.35 2.11 16.76 6.52 7.4 4.41 16.58 9.18 27.69 14.29 10.94 5.29 23.81 10.23 38.45 14.64 14.64 4.59 31.4 6.88 49.92 6.88 11.64 0 22.22-1.23 31.22-3.7 9.17-2.3 17.11-5.82 23.81-10.41 6.71-4.41 11.82-10.05 15.35-17.11 3.35-6.88 5.11-14.82 5.11-23.81 0-10.41-3.17-19.23-9.52-26.64-6.53-7.41-14.99-13.93-25.4-19.4-10.58-5.47-22.58-10.58-35.81-15.52-13.23-4.76-26.98-10.06-40.92-16.05-13.93-5.82-27.69-12.53-40.92-20.11-13.23-7.59-25.23-16.76-35.81-27.87-10.41-10.94-18.87-24.34-25.4-39.69-6.35-15.52-9.52-34.22-9.52-55.91 0-22.05 4.41-42.16 13.05-60.68 8.64-18.35 20.99-34.22 37.22-47.27 16.4-13.06 36.16-23.29 59.44-30.52 23.46-7.23 49.57-10.76 78.67-10.76 14.64 0 28.57 1.06 42.33 3 13.58 2.12 26.11 4.76 37.04 7.76 11.12 3.18 20.47 6.35 28.05 10.06 7.58 3.52 13.05 6.7 16.4 9.17 3.36 2.64 5.65 5.11 7.06 7.76 1.23 2.64 2.29 5.64 3 9.35.7 3.53 1.41 8.11 1.94 13.4s.7 12 .7 19.93c0 9.35-.17 16.94-.7 22.76s-1.41 10.58-2.65 13.93c-1.23 3.53-2.82 5.82-4.94 7.06-2.11 1.23-4.58 1.76-7.23 1.76-3.17 0-8.11-1.76-14.64-5.47-6.52-3.52-14.82-7.4-24.69-11.46-9.88-4.06-21.35-7.94-34.22-11.47-13.05-3.7-27.87-5.46-44.45-5.46-11.82 0-22.05 1.23-30.69 3.52-8.65 2.47-15.7 6-21.35 10.41-5.46 4.41-9.7 9.7-12.34 15.7-2.83 6-4.24 12.52-4.24 19.23 0 10.76 3.35 19.75 9.88 26.98 6.53 7.24 15.17 13.59 25.93 19.05 10.58 5.47 22.93 10.76 36.51 15.53 13.58 4.76 27.52 10.05 41.45 15.69 13.94 5.65 27.87 12.35 41.45 19.94 13.59 7.58 25.93 16.93 36.52 27.87 10.76 11.11 19.4 24.16 25.93 39.51 6.52 15.34 9.87 33.51 9.87 54.5zm445.57 56.97c0 9-.18 16.41-.71 22.58-.53 6-1.23 11.11-2.12 15.35-.88 4.05-1.94 7.41-3.17 10.05-1.23 2.65-3.88 5.82-7.94 9.88-4.23 3.88-11.29 8.82-21.16 14.46-10.06 5.65-21.35 10.76-34.22 15.35-12.7 4.41-26.46 8.11-41.45 10.76-15 2.82-30.52 4.23-46.39 4.23-35.46 0-66.86-5.47-94.2-16.58-27.51-10.93-50.44-27.34-69.14-48.86-18.52-21.52-32.63-47.98-41.98-79.02-9.53-31.04-14.29-66.5-14.29-106.54 0-46.21 5.82-86.25 17.29-119.77 11.64-33.69 27.69-61.56 48.33-83.6 20.64-22.05 45.15-38.46 73.38-49.22 28.22-10.76 59.26-16.05 93.13-16.05 13.76 0 27.16 1.24 40.57 3.71 13.23 2.29 25.57 5.64 37.22 9.7 11.46 4.23 21.87 8.82 30.86 13.93 9.18 5.29 15.7 9.7 19.41 13.58 3.88 3.71 6.52 6.88 8.11 9.53 1.41 2.64 2.65 6 3.53 10.05.88 4.24 1.59 9.35 2.11 15.35.53 6.17.71 13.4.71 22.05 0 20.11-1.59 34.22-5.11 42.33-3.53 8.11-7.94 12.17-13.41 12.17-5.82 0-12.17-2.47-18.7-7.23-6.52-4.76-14.29-10.23-23.28-16.05-8.82-5.82-19.58-11.29-31.93-16.05-12.34-4.77-27.16-7.24-44.45-7.24-33.86 0-59.62 13.06-77.61 38.99-17.81 26.1-26.81 64.2-26.81 114.47 0 24.7 2.29 46.57 6.7 65.62 4.59 18.87 11.12 34.75 19.94 47.45s19.75 22.4 32.98 28.75c13.41 6.35 28.75 9.52 46.39 9.52 17.82 0 33.34-2.64 46.21-8.11 12.88-5.29 24.17-11.29 33.87-17.82 9.53-6.52 17.64-12.52 24.34-17.81 6.53-5.47 12-8.11 16.41-8.11 3.17 0 5.64.88 7.76 2.64 2.11 1.77 3.7 4.94 4.94 9.53 1.23 4.76 2.11 10.76 2.82 17.99.7 7.23 1.06 16.58 1.06 28.04zm555.09-161.74c0 39.15-5.11 74.96-15.52 107.42-10.41 32.28-25.93 60.14-47.1 83.6-20.99 23.46-47.27 41.46-79.02 54.33q-47.625 19.05-111.12 19.05c-41.1 0-76.73-5.64-107.07-17.11-30.34-11.29-55.56-27.87-75.49-49.56-19.94-21.7-34.75-48.33-44.45-80.08-9.71-31.58-14.47-67.74-14.47-108.48 0-39.16 5.29-75.14 15.7-107.6 10.58-32.63 26.28-60.5 47.45-83.78 20.99-23.11 47.27-41.1 78.84-53.98 31.4-12.7 68.44-19.05 110.78-19.05 41.45 0 77.25 5.65 107.59 16.76 30.34 11.29 55.39 27.69 75.14 49.39 19.94 21.69 34.58 48.33 44.28 80.08 9.7 31.57 14.46 67.91 14.46 109.01zm-133.35 5.11c0-22.75-1.76-43.74-5.47-62.79-3.7-19.23-9.7-35.81-18.52-49.92-8.64-14.11-20.11-25.22-34.39-33.16-14.47-7.94-32.46-11.82-54.33-11.82-19.4 0-36.34 3.53-50.98 10.58-14.46 7.06-26.45 17.47-35.8 31.05s-16.41 29.98-20.99 49.03c-4.77 19.23-7.06 40.93-7.06 65.44 0 22.76 1.94 43.75 5.65 62.8 3.88 19.22 10.05 35.8 18.52 49.92 8.46 14.11 19.93 25.04 34.57 32.8 14.46 7.76 32.45 11.65 53.97 11.65 19.76 0 36.87-3.53 51.51-10.59 14.46-7.05 26.46-17.28 35.81-30.69 9.34-13.58 16.22-29.81 20.81-48.86 4.41-19.23 6.7-40.92 6.7-65.44zm941.56-218.02c0 37.75-5.82 70.91-17.64 99.84-11.64 29.1-28.75 53.45-51.33 73.2-22.4 19.93-49.91 34.93-82.55 45.33-32.63 10.41-71.08 15.53-115.35 15.53h-55.92v213.25c0 3.53-1.06 6.53-3.35 9.35-2.29 2.64-6 4.94-11.11 6.7-5.12 1.76-12 3-20.64 4.06-8.47 1.06-19.58 1.58-32.81 1.58-13.05 0-23.99-.52-32.81-1.58s-15.7-2.47-20.81-4.06c-5.12-1.76-8.82-4.06-10.76-6.7-2.12-2.82-3.18-6-3.18-9.35v-601.66c0-16.23 4.24-28.4 12.7-36.51 8.47-8.12 19.58-12.17 33.34-12.17h157.69c15.88 0 31.05.52 45.34 1.76 14.28 1.23 31.39 3.88 51.5 7.76 19.93 4.06 40.22 11.29 60.68 22.05 20.46 10.58 38.1 24.16 52.56 40.57 14.47 16.4 25.58 35.45 33.16 57.5 7.59 21.87 11.29 46.39 11.29 73.55zm-141.81 9.88c0-23.46-4.24-42.86-12.53-58.03s-18.52-26.46-30.69-33.69-24.87-11.82-38.1-13.76c-13.41-1.94-27.16-2.82-41.45-2.82h-58.21v227.54h61.38c21.88 0 40.04-3 54.86-8.82 14.64-5.82 26.81-14.11 36.16-24.69 9.35-10.41 16.4-23.11 21.34-37.75 4.77-14.64 7.24-30.69 7.24-47.98zm274.99 381c0 31.93-5.47 53.62-16.76 64.56-11.11 11.11-31.22 16.58-60.15 16.58s-49.04-5.47-59.97-16.23c-11.11-10.93-16.58-31.57-16.58-61.91 0-32.28 5.64-54.15 16.76-65.09 11.28-11.11 31.57-16.58 60.85-16.58 28.57 0 48.33 5.47 59.44 16.23 10.94 10.94 16.41 31.75 16.41 62.44zm1155.87 56.27c0 3.35-.89 6.53-2.83 9.35-1.94 2.64-5.46 4.94-10.4 6.7-4.94 1.59-11.65 3-19.94 4.06s-18.87 1.58-31.57 1.58c-12.52 0-22.93-.52-31.22-1.58s-14.82-2.47-19.76-4.06c-4.76-1.76-8.29-4.06-10.23-6.7-2.11-2.82-3.17-6-3.17-9.35v-544.51h-1.06l-193.14 543.98c-1.42 4.41-3.53 8.11-6.71 11.11-3.17 3-7.23 5.29-12.7 7.06-5.29 1.59-12.17 2.82-20.28 3.35-8.29.53-18.35.7-29.99.7-11.82 0-21.69-.35-29.98-1.23s-15.17-2.29-20.46-4.23c-5.3-1.94-9.53-4.24-12.7-6.88-3-2.82-5.12-6.18-6.18-9.88l-186.44-543.98h-1.06v544.51c0 3.35-.88 6.53-2.82 9.35-1.94 2.64-5.47 4.94-10.58 6.7-5.3 1.59-12 3-20.11 4.06-8.12 1.06-18.52 1.58-31.22 1.58-12.53 0-22.93-.52-31.22-1.58s-15-2.47-19.94-4.06c-4.93-1.76-8.46-4.06-10.4-6.7-1.94-2.82-2.83-6-2.83-9.35v-596.02c0-17.64 4.59-31.04 13.94-40.39s21.7-13.93 37.39-13.93h88.9c15.88 0 29.64 1.23 40.93 3.88 11.46 2.64 21.34 6.88 29.63 12.87 8.11 6 15.17 13.94 20.64 23.81 5.46 9.88 10.4 22.05 14.46 36.52l144.11 398.46h2.12l149.22-397.58c4.41-14.46 9.35-26.64 14.64-36.69 5.47-9.88 11.64-17.99 18.7-24.16 7.05-6.18 15.52-10.59 25.05-13.23 9.7-2.65 20.99-3.88 33.69-3.88h91.72c9.35 0 17.28 1.23 23.99 3.7 6.7 2.29 12.34 5.82 16.58 10.58 4.41 4.59 7.58 10.23 9.87 16.94 2.3 6.7 3.36 14.46 3.36 23.1zm604.3-234.24c0 39.15-5.11 74.96-15.52 107.42-10.41 32.28-25.93 60.14-47.1 83.6-20.99 23.46-47.27 41.46-79.02 54.33q-47.625 19.05-111.12 19.05c-41.1 0-76.73-5.64-107.07-17.11-30.34-11.29-55.56-27.87-75.49-49.56-19.94-21.7-34.75-48.33-44.45-80.08-9.71-31.58-14.47-67.74-14.47-108.48 0-39.16 5.29-75.14 15.7-107.6 10.58-32.63 26.28-60.5 47.45-83.78 20.99-23.11 47.27-41.1 78.84-53.98 31.4-12.7 68.44-19.05 110.78-19.05 41.45 0 77.25 5.65 107.59 16.76 30.34 11.29 55.39 27.69 75.14 49.39 19.94 21.69 34.58 48.33 44.28 80.08 9.7 31.57 14.46 67.91 14.46 109.01zm-133.35 5.11c0-22.75-1.76-43.74-5.47-62.79-3.7-19.23-9.7-35.81-18.52-49.92-8.64-14.11-20.11-25.22-34.39-33.16-14.47-7.94-32.46-11.82-54.33-11.82-19.4 0-36.34 3.53-50.98 10.58-14.46 7.06-26.45 17.47-35.8 31.05s-16.41 29.98-20.99 49.03c-4.77 19.23-7.06 40.93-7.06 65.44 0 22.76 1.94 43.75 5.65 62.8 3.88 19.22 10.05 35.8 18.52 49.92 8.46 14.11 19.93 25.04 34.57 32.8 14.46 7.76 32.45 11.65 53.97 11.65 19.76 0 36.87-3.53 51.51-10.59 14.46-7.05 26.46-17.28 35.81-30.69 9.34-13.58 16.22-29.81 20.81-48.86 4.41-19.23 6.7-40.92 6.7-65.44zm533.05-188.21c0 12.35-.35 22.58-1.06 30.52s-1.76 14.11-3 18.52c-1.41 4.41-3.35 7.59-5.47 9.35-2.29 1.76-5.11 2.47-8.64 2.47-2.64 0-5.82-.53-9.35-1.77-3.35-1.23-7.23-2.46-11.64-3.88-4.23-1.41-9-2.64-14.11-3.88-5.29-1.23-10.94-1.76-17.11-1.76-7.23 0-14.46 1.41-21.7 4.41-7.23 3-14.81 7.41-22.57 13.76-7.76 6.17-15.88 14.46-24.35 24.69-8.46 10.41-17.46 23.11-27.16 38.28v287.69c0 3.35-1.06 6.35-3.17 8.99-1.94 2.65-5.47 4.77-10.59 6.53-4.94 1.59-11.64 3-19.75 3.88-8.29.88-18.88 1.23-31.58 1.23s-23.28-.35-31.57-1.23c-8.11-.88-14.82-2.29-19.76-3.88-5.11-1.76-8.64-3.88-10.58-6.53-2.12-2.64-3.17-5.64-3.17-8.99v-461.43c0-3.36.88-6.35 2.64-9 1.59-2.65 4.76-4.76 9.17-6.53 4.59-1.58 10.24-3 17.29-3.88 7.06-.88 16.05-1.23 26.64-1.23 11.11 0 20.1.35 27.34 1.23 7.23.88 12.87 2.3 16.93 3.88 3.88 1.77 6.7 3.88 8.47 6.53 1.76 2.65 2.64 5.64 2.64 9v57.5c12-17.29 23.46-31.4 34.04-42.51 10.76-11.11 20.99-20.11 30.52-26.64 9.7-6.52 19.4-11.11 29.1-13.58 9.53-2.64 19.23-3.88 28.93-3.88 4.41 0 9.35.18 14.46.71 5.12.53 10.59 1.41 16.06 2.64 5.46 1.24 10.4 2.65 14.46 4.06 4.23 1.59 7.23 3.17 9.17 4.94 1.77 1.76 3.18 3.7 4.06 5.64.88 2.12 1.59 4.94 2.29 8.65.71 3.52 1.24 8.99 1.59 16.22.35 7.24.53 16.94.53 29.28zm493.36 174.45c0 15.88-3.53 27.52-10.59 35.1-7.05 7.59-16.76 11.47-29.28 11.47h-280.81c0 19.58 2.29 37.22 7.06 53.27 4.58 15.87 11.99 29.46 22.05 40.57 10.23 11.11 23.28 19.58 39.33 25.4s35.1 8.82 57.5 8.82c22.76 0 42.69-1.59 59.97-4.94 17.11-3.35 32.11-6.88 44.63-10.94 12.52-4.05 22.93-7.58 31.22-10.93 8.29-3.36 14.99-4.94 20.11-4.94 3.17 0 5.82.53 7.76 1.76 2.12 1.24 3.88 3.35 5.29 6.53 1.24 3 2.3 7.41 2.82 13.05.53 5.64.71 12.88.71 21.34 0 7.59-.18 14.11-.53 19.41-.35 5.29-.88 9.87-1.59 13.58-.7 3.88-1.58 7.05-3 9.52-1.41 2.65-3.17 5.12-5.46 7.59-2.3 2.29-8.29 5.64-18.35 9.88-10.05 4.23-22.75 8.29-38.27 12.34-15.53 4.06-33.16 7.59-53.1 10.59-19.93 2.99-41.27 4.58-64.03 4.58-41.09 0-76.9-5.11-107.77-15.52-30.69-10.23-56.44-25.93-77.26-46.92-20.63-20.99-35.98-47.62-46.21-79.55-10.05-32.1-15.17-69.67-15.17-112.71 0-40.93 5.29-77.79 16.05-110.77 10.58-32.81 26.11-60.68 46.57-83.61 20.28-22.93 44.98-40.4 74.08-52.39 29.28-12.17 62.09-18.17 98.6-18.17 38.63 0 71.62 5.65 98.96 17.11 27.51 11.29 49.91 27.17 67.55 47.27 17.46 20.11 30.52 44.1 38.81 71.62 8.29 27.51 12.35 57.5 12.35 89.96zm-125.95-37.04c1.06-36.51-6.35-65.26-22.04-86.08-15.7-20.99-39.87-31.39-72.68-31.39-16.58 0-31.04 3.17-43.21 9.34-12.35 6.18-22.58 14.47-30.69 25.05-8.12 10.59-14.29 22.93-18.52 37.22-4.41 14.46-6.88 29.63-7.59 45.86zm673.63 280.99c0 3.35-1.06 6.35-3.17 8.99-1.94 2.65-5.47 4.77-10.23 6.53-4.94 1.59-11.65 3-20.11 3.88-8.47.88-18.88 1.23-31.22 1.23-12.88 0-23.46-.35-31.93-1.23s-15.17-2.29-20.11-3.88c-4.76-1.76-8.29-3.88-10.23-6.53-2.11-2.64-3.17-5.64-3.17-8.99v-263c0-22.4-1.59-40.04-4.94-52.74-3.18-12.87-7.94-23.81-14.11-32.81-6.18-9.17-14.29-16.22-23.99-21.34-9.88-4.94-21.17-7.41-34.22-7.41-16.58 0-33.16 6-50.1 18.17-16.75 12-34.39 29.63-52.56 52.56v306.57c0 3.35-1.06 6.35-3.17 8.99-1.94 2.65-5.47 4.77-10.59 6.53-4.94 1.59-11.64 3-19.75 3.88-8.29.88-18.88 1.23-31.58 1.23s-23.28-.35-31.57-1.23c-8.11-.88-14.82-2.29-19.76-3.88-5.11-1.76-8.64-3.88-10.58-6.53-2.12-2.64-3.17-5.64-3.17-8.99v-461.43c0-3.36.88-6.35 2.64-9 1.59-2.65 4.76-4.76 9.17-6.53 4.59-1.58 10.24-3 17.29-3.88 7.06-.88 16.05-1.23 26.64-1.23 11.11 0 20.1.35 27.34 1.23 7.23.88 12.87 2.3 16.93 3.88 3.88 1.77 6.7 3.88 8.47 6.53 1.76 2.65 2.64 5.64 2.64 9v53.26c25.4-27.51 51.33-47.97 77.79-61.73 26.28-13.76 53.8-20.64 82.37-20.64 31.4 0 57.86 5.12 79.38 15.52 21.52 10.23 38.8 24.35 52.21 42.16 13.23 17.64 22.75 38.45 28.57 62.27 5.82 23.81 8.82 52.38 8.82 85.72zm593.37-235.3c0 39.15-5.11 74.96-15.52 107.42-10.41 32.28-25.93 60.14-47.1 83.6-20.99 23.46-47.27 41.46-79.02 54.33q-47.625 19.05-111.12 19.05c-41.1 0-76.73-5.64-107.07-17.11-30.34-11.29-55.56-27.87-75.49-49.56-19.94-21.7-34.75-48.33-44.45-80.08-9.71-31.58-14.47-67.74-14.47-108.48 0-39.16 5.29-75.14 15.7-107.6 10.58-32.63 26.28-60.5 47.45-83.78 20.99-23.11 47.27-41.1 78.84-53.98 31.4-12.7 68.44-19.05 110.78-19.05 41.45 0 77.25 5.65 107.59 16.76 30.34 11.29 55.39 27.69 75.14 49.39 19.94 21.69 34.58 48.33 44.28 80.08 9.7 31.57 14.46 67.91 14.46 109.01zm-133.35 5.11c0-22.75-1.76-43.74-5.47-62.79-3.7-19.23-9.7-35.81-18.52-49.92-8.64-14.11-20.11-25.22-34.39-33.16-14.47-7.94-32.46-11.82-54.33-11.82-19.4 0-36.34 3.53-50.98 10.58-14.46 7.06-26.45 17.47-35.8 31.05s-16.41 29.98-20.99 49.03c-4.77 19.23-7.06 40.93-7.06 65.44 0 22.76 1.94 43.75 5.65 62.8 3.88 19.22 10.05 35.8 18.52 49.92 8.46 14.11 19.93 25.04 34.57 32.8 14.46 7.76 32.45 11.65 53.97 11.65 19.76 0 36.87-3.53 51.51-10.59 14.46-7.05 26.46-17.28 35.81-30.69 9.34-13.58 16.22-29.81 20.81-48.86 4.41-19.23 6.7-40.92 6.7-65.44z" style="stroke:currentColor;stroke-width:50;stroke-miterlimit:22.9256;fill:currentColor;fill-rule:nonzero"/></g></svg>`

export function LogoEm2Completo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`logo-em2-completo ${className}`}
      role="img"
      aria-label="Escuela Media N.2 - Perito Francisco P. Moreno"
      dangerouslySetInnerHTML={{ __html: logoMarkup }}
    />
  )
}

```

---

## Archivo: `components/ui/button.tsx`

```tsx
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
        outline:
          'border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        ghost:
          'hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50',
        destructive:
          'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default:
          'h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: 'h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        icon: 'size-8',
        'icon-xs':
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        'icon-sm':
          'size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg',
        'icon-lg': 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

```

---

## Archivo: `lib/catalog.ts`

```typescript
export type CatalogResource = {
  id: string
  title: string
  subtitle: string
  category: string
  type: string
  url: string
  imageUrl: string
  tags: string[]
  order: number
  featured: boolean
  publicationDate: string | null
  validityDate: string | null
  isNew: boolean
}

export type CatalogResponse = {
  resources: CatalogResource[]
  updatedAt: string
  stale?: boolean
}

type GvizCell = { v?: unknown }
type GvizRow = { c: Array<GvizCell | null> }
type GvizResponse = { table: { cols: Array<{ label?: string }>; rows: GvizRow[] } }

const DATE_PATTERN = /^Date\((\d+),(\d+),(\d+)\)$/

function parseDate(value: string): Date | null {
  const match = value.match(DATE_PATTERN)
  if (!match) return null
  return new Date(Number(match[1]), Number(match[2]), Number(match[3]))
}

function dateToIso(value: string): string | null {
  const date = parseDate(value)
  return date ? date.toISOString() : null
}

function isTruthy(value: string) {
  return ['si', 'sí', 'true', '1', 'yes'].includes(value.toLowerCase())
}

export function parseCatalogResponse(raw: string): CatalogResource[] {
  const match = raw.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);?\s*$/)
  if (!match) throw new Error('Invalid catalog response')

  const data = JSON.parse(match[1]) as GvizResponse
  const columns = data.table.cols.map((column) => (column.label ?? '').trim())
  const valueAt = (row: GvizRow, name: string) => {
    const index = columns.findIndex((column) => column.toLowerCase() === name.toLowerCase())
    return index >= 0 ? String(row.c[index]?.v ?? '').trim() : ''
  }

  return data.table.rows
    .map((row) => {
      const publicationValue = valueAt(row, 'FechaPublicacion')
      const validityValue = valueAt(row, 'FechaVigencia')
      const publicationDate = parseDate(publicationValue)
      return {
        id: valueAt(row, 'ID') || valueAt(row, 'Titulo'),
        title: valueAt(row, 'Titulo'),
        subtitle: valueAt(row, 'Subtitulo'),
        category: valueAt(row, 'Categoria') || 'General',
        type: valueAt(row, 'Tipo'),
        url: valueAt(row, 'URL'),
        imageUrl: valueAt(row, 'ImagenURL'),
        tags: valueAt(row, 'Etiquetas').split(',').map((tag) => tag.trim()).filter(Boolean),
        order: Number(valueAt(row, 'Orden')) || 0,
        featured: isTruthy(valueAt(row, 'Destacado')),
        publicationDate: dateToIso(publicationValue),
        validityDate: dateToIso(validityValue),
        isNew: Boolean(publicationDate && Date.now() - publicationDate.getTime() <= 14 * 86400000 && publicationDate.getTime() <= Date.now()),
        published: isTruthy(valueAt(row, 'Publicado')),
      } satisfies CatalogResource & { published: boolean }
    })
    .filter((resource) => {
      const validity = resource.validityDate ? new Date(resource.validityDate) : null
      return resource.published && resource.title && resource.url && (!validity || validity >= new Date())
    })
    .sort((a, b) => a.order - b.order)
}

export const CATALOG_SOURCE_URL = process.env.CATALOG_SOURCE_URL || 'https://docs.google.com/spreadsheets/d/1hKsBNZeaNYvO65x0PtKOtH5SiphFgcRM0QL84CgAXdU/gviz/tq?tqx=out:json'
export const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL || 'https://script.google.com/macros/s/AKfycbzYsAlmw9Q_bV8Q3Gt9W0_Qm8bDAGJ9yVuv40izRa1tIEIAO4s2X_oVZ1xc35W0b7Zx/exec'

export async function fetchCatalog(): Promise<CatalogResponse> {
  const response = await fetch(CATALOG_SOURCE_URL, { next: { revalidate: 600 } })
  if (!response.ok) throw new Error(`Catalog source returned ${response.status}`)
  return { resources: parseCatalogResponse(await response.text()), updatedAt: new Date().toISOString() }
}

```

---

## Archivo: `lib/utils.ts`

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

---

## Archivo: `public/apple-icon.png`

[Archivo binario o de imagen, contenido no incluido.]

---

## Archivo: `public/icon-dark-32x32.png`

[Archivo binario o de imagen, contenido no incluido.]

---

## Archivo: `public/icon-light-32x32.png`

[Archivo binario o de imagen, contenido no incluido.]

---

## Archivo: `public/icon.svg`

[Archivo binario o de imagen, contenido no incluido.]

---

## Archivo: `public/logo-em2-optimizado.svg`

[Archivo binario o de imagen, contenido no incluido.]

---

## Archivo: `public/placeholder-logo.png`

[Archivo binario o de imagen, contenido no incluido.]

---

## Archivo: `public/placeholder-logo.svg`

[Archivo binario o de imagen, contenido no incluido.]

---

## Archivo: `public/placeholder-user.jpg`

[Archivo binario o de imagen, contenido no incluido.]

---

## Archivo: `public/placeholder.jpg`

[Archivo binario o de imagen, contenido no incluido.]

---

## Archivo: `public/placeholder.svg`

[Archivo binario o de imagen, contenido no incluido.]

---

