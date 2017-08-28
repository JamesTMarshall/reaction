import { Migrations } from "/imports/plugins/core/versions";
import { Tags } from "/lib/collections";

Migrations.add({
  version: 6,
  up: function () {
    Tags.update({}, {
      $set: {
        isVisible: true
      }
    }, { multi: true });
  }
});
