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
