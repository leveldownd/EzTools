# Welcome!

We're glad you're trying to contribute to EzTools. We're currently in development, but we are definitely accepting pull requests for new sites!

We will have 2 branches, 1 for contributions and 1 that the actual site deploys on. Please make sure to commit to the correct branch or your pull request will be denied, the idea of this is to make sure the pull request are confirmed to work, once that is checked then we will merge your code to the main branch. Also, please do not commit if you do not know what you are doing, please take some time to browse through the code and see how the website works. Alternatively, you may also create an issue with the issue templates to request us to add a site.

In this directory, you'll find a directory called [categoryName](categoryName), which (if not already existing in [the contents directory](../contents/)) you should create.

Inside the directory, you'll find [sitename.json](categoryName/sitename.json), and you can fill in all the blanks. For the `platforms` array, there are only 4 valid options - `"web"`, `"macos"`, `"windows"`, and `"linux"`. Other than that will be ignored and not rendered, and thus we will likely request changes on your pull request.
