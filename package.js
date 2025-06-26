Package.describe({
  name    : "sylido:computed-field",
  summary : "Reactively computed field for Meteor",
  version : "0.11.0",
  git     : "https://github.com/sylido/meteor-computed-field.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@3.2.2");

  // Core dependencies.
  api.use([
    "ecmascript",
    "tracker@1.3.4",
    "reactive-var@1.0.13",
    "underscore@1.6.4"
  ]);

  api.use([
    "blaze@3.0.2"
  ], {weak: true});

  api.export("ComputedField");

  api.mainModule("lib.js");
});

Package.onTest(function (api) {
  api.versionsFrom("METEOR@3.2.2");

  // Core dependencies.
  api.use([
    "coffeescript@2.4.1",
    "ecmascript",
    "tracker",
    "reactive-var",
    "templating",
    "blaze@2.2.1",
    "spacebars",
    "underscore",
    "jquery"
  ]);

  // Internal dependencies.
  api.use([
    "sylido:computed-field"
  ]);

  // 3rd party dependencies.
  api.use([
    "sylido:classy-test@0.4.0"
  ]);

  api.addFiles([
    "tests.coffee"
  ]);

  api.addFiles([
    "tests_client.html",
    "tests_client.coffee",
    "tests_client.css"
  ], "client");
});
