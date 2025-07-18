# Angular20App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.0.

## Set up Angular v20 application
```bash
npm install -g @angular/cli@20

ng new angular20-app

```

✅ node version required  ->  minimum of v20.19.

option in v20:

√ Do you want to create a 'zoneless' application without zone.js (Developer Preview)? Yes

√ Angular 20 encourages signals for reactive state management.

🧠 Signals for Reactive State

🎨 Angular 20 introduces new control flow syntax  (@for, @if)

📝 Typed reactive forms

💾 Local storage sync

https://stackblitz.com/edit/demo-angular-standalone-components?file=README.md

Enable File Name Suffixes (Optional)

Angular 20 disables suffixes by default. If you want to enable suffixes (e.g., app.component.ts), edit your

angular.json as shown earlier or run:

```bash
ng config schematics.@schematics/angular:component.suffix "Component"
```
## generate environments folder
ng generate environments

ng generate environments --development --staging

## Github marketplace (LLM models)

https://github.com/marketplace

https://github.com/marketplace/models/azure-openai/gpt-4-1

https://github.com/marketplace/models/azure-openai/gpt-4o

https://github.com/marketplace?type=models

playground:

https://github.com/marketplace/models

https://huggingface.co/models

best LLM:

https://zapier.com/blog/best-llm/

https://github.com/openai/gpt-2

replit

Github actions:

https://github.com/marketplace?type=actions

https://github.com/marketplace/actions/checkout

## Roadmap

https://roadmap.sh/ai-engineer

https://roadmap.sh/angular

https://roadmap.sh/react

https://roadmap.sh/typescript

https://roadmap.sh/python

https://roadmap.sh/frontend 

## ollama local model runner

LLaMA 3, Mistral, Gemma, etc., on your own machine (Mac, Linux, Windows). 

It provides an HTTP API — but only on localhost by default.

Remote API Access? Out-of-the-box:

❌ No hosted API like Gemini, OpenAI, or Claude.

❌ No API key model.

✅ Only runs locally and exposes an API at http://localhost:11434.

Use cloud services that host open models, such as:

Replicate – https://replicate.com/

Together.ai – https://www.together.ai/

Groq – https://groq.com/

https://console.groq.com/keys

Fireworks.ai – https://fireworks.ai/

Perplexity API (for LLaMA-3) - https://playground.perplexity.ai/

These give you API keys and hosted endpoints.

https://pypi.org/project/ollama/

https://github.com/meta-llama/llama

https://github.com/ollama/ollama

https://www.reddit.com/r/ollama/comments/1b608mf/ollama_api/


## Free models in India
https://aistudio.google.com/apikey

https://generativelanguage.googleapis.com/v1/models?key=YOUR_API_KEY 

https://huggingface.co/models

https://github.com/marketplace?type=models

https://ai.google.dev/gemini-api/docs/models

https://ai.google.dev/gemini-api/docs/rate-limits

https://ai.google.dev/gemini-api/docs/available-regions

google cloud console

https://console.cloud.google.

✔️Use different Google Cloud projects if you need separate quotas for each API key.
✔️ Monitor usage in Google Cloud Console → APIs & Services → Dashboard.
✔️ Restrict API keys to specific apps or IPs for security.

A Google Cloud project is created inside a Google Cloud account.

A single Gmail account (Google account) can own or manage multiple projects.

You can create multiple projects under the same Gmail, each with its own API keys and quotas.

Each project has its own separate billing, quotas, and API keys (unless they share the same billing account).

https://platform.openai.com/docs/models

## Llama models Explore https://ollama.com/library
## Run gemma:2b
ollama run gemma:2b
gemma:2b uses just ~2–3 GB RAM.
## Run mistral
ollama run mistral
mistral only needs ~4 GB of RAM and still performs quite well for general tasks.
## Run llama3
ollama run llama3
Ollama runs models like llama3 entirely on your machine, in memory.
Even though it's optimized, LLaMA 3 still needs at least ~6 GB of RAM free, and ideally more (8–12 GB total system RAM recommended).
## List downloaded models: ollama list
## Pull other models: ollama pull mistral
ollama pull codellama

## Stop running model:
ollama stop

using LangChain with Ollama RAG

## Stencil Enterprise : Design Systems at scale

https://ionic.io/resources/webinars/stencil-enterprise-design-systems-at-scale

https://agado.dev/en/blog/enterprise-design-system-with-stencil/

https://ionic.io/blog/announcing-stencil-enterprise

https://ionic.io/resources/case-studies/volkswagen-group

## Two more design systems on stenciljs

npm install @telekom/scale-components@next


https://github.com/telekom/scale

https://www.npmjs.com/package/@telekom/scale-components 

https://www.npmjs.com/package/@telekom/scale-components-neutral

https://telekom.github.io/scale/?path=/docs/scale-design-system--page&globals=locale:en;colorMode:light

https://digitaldesign.volkswagen-group.com/auth/?referer=%2F

https://www.npmjs.com/package/protean-elements


https://github.com/proteanstudio/design-system

https://design.protean.studio/#/

https://protean.studio/


## using porsche design system
https://designsystem.porsche.com/v3/news/changelog/

https://www.npmjs.com/package/@porsche-design-system/components-angular

## Chinese Design system
https://www.npmjs.com/package/@aircomponents/components


https://github.com/openwebstudio/AirUI

https://github.com/openwebstudio/Air-Docs


https://github.com/SisyphusZheng/Components

https://github.com/SisyphusZheng?tab=repositories


npm install air-components

https://air.js.org/docs/intro

https://air.js.org/docs/feature-components/chat

SiliconFlow, a China AI infrastructure startup

import { defineCustomElements } from 'air-components/loader';

defineCustomElements();

Zhi Zheng

https://zhi.deno.dev/resume/?lang=en

https://zhi.deno.dev/

https://github.com/SisyphusZheng

## Microsoft Fabric UX design system
https://www.npmjs.com/package/@fabric-msft/fabric-angular

https://www.npmjs.com/package/@fabric-msft/fabric-web?activeTab=readme


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
