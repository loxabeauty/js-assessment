# Loxa Beauty: JS Assessment

## Guidelines

Fork this repository.

Create a log.txt file that includes the following information:
    Start Time: [unix timestamp]
    
    This should be your first commit.

Please take no longer than 48 hours from first commit unless otherwise requested.

You will need to install [Node](https://nodejs.org/). Note that on Windows, there are some reports that you will need to restart
after installing Node - refer to NodeJS documentation for further details.

From the root directory of this project, run:

    npm install
    npm start

You can then view the tests in your browser at
[http://localhost:4444](http://localhost:4444).

When you visit that page, all of the tests should be failing; you are expected to
get the tests to pass. To do this, you'll need to refer to the tests in the
files in the `tests/app` directory, and edit the files in the `app/` directory.
Once you update a test, you can reload the test page in the browser to see
whether it worked.

You can also run (most of) the tests on the command line:

    npm test

This project includes jQuery and Underscore. You can use these
libraries when writing your solutions.

### Data-driven tests

If your tests need data that can be fetched via XHR, add a `.json` file in
the `data` directory; you can access it at `/data/<filename>.json`.

### Project Submission

Submit a pull request with your first name in the title. Notify us regarding your pull request submission via email.
