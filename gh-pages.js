const ghpages = require("gh-pages");

ghpages.publish(
  "_site",
  {
    branch: "gh-pages",
    repo: "git@github.com:veehj/veehj.github.io.git",
    message: 'Auto-generated commit',
    dotfiles: true
  },
  function (err) {
    if (err) {
      console.error(err);
    }
  }
);