
# :building_construction: Contributing Guide

Hey, there :wave:! I'm really excited to see that someone is interested in contributing to Pinpoint! Before submitting your contribution, please read the following guide.

## :man_technologist: Repo Setup

To develop locally, fork the Pinpoint repository and clone it in your local machine. The package manager used to install and link dependencies must be [pnpm](https://pnpm.io/).

> :warning: **Warning:** Before running the project make sure to add your IPDATA API key to the .env file (.env.example).

- Clone the repository to your local machine.
- Run `pnpm i` in the project directory to install the required dependencies.
- Run `pnpm run dev` to get the project started.
- Open [http://localhost:5173](http://localhost:5173) (or the address shown in your console) in your web browser to view the app.

## :file_folder: Folder structure

```
.
├── src
|   ├── utils       # Contains all modules that provide generic utility functionality.
|   ├── styles      # Contains all global styles of the application including color tokens etc...
|   ├── services    # Contains all modules to retrieve data from external APIs, such as RESTful or GraphQL APIs.
|   ├── pages       # Contains all Application pages (As this application is a single page application, there will only be one page).
|   ├── locales     # contains all translations of page strings into different languages.
|   ├── libs        # Contains all Modules and configuration of third-party libraries or created by me.
|   ├── layout      # Contains all the components that define the structure and basic appearance of the page.
|   ├── contexts    # Contains all information will be shared globally.
|   ├── components  # Contains all page components. 
|   └── @types      # Contains all type definitions for third-party libraries or frameworks.
|
├── public          # Contains all static files that will be served directly by the web server.
└── .husky          # Contains configuration files that define which Git hooks will be used and what scripts they should execute.
```

## :bug: Report bugs

If you are interested in fixing some bugs that you probably found in the application, please check the steps below

- `Identify the bug`:

     - Clearly describe the incorrect behavior you are seeing.
     - Write down the steps to reproduce the bug.

- `Check if the bug has already been reported`:

     - Before reporting the bug, check if it has been previously reported. Many bug tracking systems have search features to make this easier.

- `Gather information`:

     - Note the operating system, browser, software version, and any other relevant information that could help reproduce the bug.
     - If possible, capture screenshots or screen recordings to demonstrate the incorrect behavior.

- `Report the bug`:

     - Use a bug tracking system to report the bug.
     - If there is no formal system, report the bug through the appropriate channel, such as email or creating an issue.
     - Please fill out the bug report with as much detail as possible, including:
         - Descriptive title of the bug
         - Detailed description of the incorrect behavior
         - Steps to reproduce the bug
         - System information (OS, browser, version)
         - Screenshots or screen recordings (optional)

- `Track Progress`:

     - The person responsible for fixing the bug may contact you for clarification. Respond promptly to any questions.
     - You can periodically check the status of the bug to see if it has been fixed in a future release.

## :construction_worker_man: Pull Request Guidelines

- Checkout a topic branch from a base branch (e.g. `main`), and merge back against that branch.

- If adding a new feature:
	- Add accompanying test case.
	- Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first, and have it approved before working on it.

- If fixing a bug:

  - If you are resolving a special issue, add `(fix #xxxx[,#xxxx])` (#xxxx is the issue id) in your PR title for a better release log (e.g. `fix: update entities encoding/decoding (fix #3899)`).
  - Provide a detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.

- It's OK to have multiple small commits as you work on the PR. GitHub can automatically squash them before merging.

- Make sure tests pass!

- No need to worry about code style as long as you have installed the dev dependencies. Modified files are automatically formatted with Prettier on commit.

- PR title must follow the [commit message convention](./.github/commit-convention.md) so that changelogs can be automatically generated.

---

**Thank you for your contribution!** :heart:
