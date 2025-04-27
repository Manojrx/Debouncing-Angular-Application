🌐 
Debouncing Angular Application
This is a simple Angular application demonstrating the concept of debouncing in the context of API calls. It listens to changes in an input field and triggers an API call after a delay when the input value length exceeds a specified number of characters. The purpose of this application is to avoid unnecessary API calls on every keystroke and instead batch requests after the user stops typing for a set amount of time.
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.8.

🚀 Key Features:
🔄 Debouncing: The application uses debouncing to wait for 3 seconds after the user stops typing before triggering the API call.

🔧 Reactive Forms: Utilizes Angular's ReactiveFormsModule and FormControl to bind the input field and handle form control changes.

🌍 API Call: Makes an API request to https://fake-json-api.mock.beeceptor.com/users after debouncing input.

[NOTE : For a detailed guide on debouncing and API calls in Angular, please refer to the [video] in the git]

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
