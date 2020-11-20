# Contributing to [github-readme-quotes](https://github.com/shravan20/github-readme-quotes)

Your input is really important for the project.Feel free to contribute to the project whether it be:

- Reporting a issue
- Discussing the current state of the code
- Submitting a fix
- Proposing new features

## All Changes Happen Through Pull Requests

Pull requests are the best way to propose changes. We actively welcome your pull requests:

1. Fork the repo and create your branch from `master`.
1. If you've added code that should be tested, add some tests' example.
1. Make sure your Pull requests have detailed information.
1. Issue that pull request!


## Themes Contribution

GitHub Readme Quotes would appreciate your contribution to new themes!

All you need to do is edit [themes/themes.js](./src/themes/themes.js) file and add your theme at the end of the file.

While creating the pull request make sure to add a screenshot of your theme.That would help us!!

## Layout Contribution

GitHub Readme Quotes would appreciate your contribution to new layouts!

All you need to do is edit [layouts/layout.js](./src/layouts/layout.js) file and add your layout at the end of the file.

Please consider the following steps if you are planning to contribute a new layout:

1. Provide a screenshot of your layout in your Pull Request.
1. The layout has mainly two parts: 
    - Style(CSS of the layout)
    - Structure(HTML of the layout)
1. Make sure you add your layout in this format:
    layout_name:{
        style:()=>{
            `CSS of the Layout`
        }
        structure:()=>{
            `HTML of the Layout`
        }
    }

Check the existing [layouts](./src/layouts/layout.js) for a better understanding.

## Any contributions you make will be under the MIT Software License

In short, when you submit changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report issues/bugs using GitHub's [issues](https://github.com/shravan20/github-readme-quotes/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/shravan20/github-readme-quotes/issues/new/choose); it's that easy!

If the issue is a BUG make sure to follow the guidelines provided in the Bug Report.

You can follow the guidelines below for your Bug Report

### Bug Reports

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Share the snapshot, if possible.
  - GitHub Readme Quotes' live link
- What actually happens
- What you expected would happen
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

### Feature Request

For a new feature request,go to the issues section and create a feature request.You can follow the guidelines below for a new feature request:

**Great Feature Requests** tend to have:

- A quick idea summary
- What & why you wanted to add the specific feature
- Additional Context like images, links to resources to implement the feature etc etc.

## License

By contributing, you agree that your contributions will be licensed under its [MIT License](./LICENSE).
