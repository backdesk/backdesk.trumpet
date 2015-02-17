var Marionette = require('backbone.marionette'),
    UserController = require('../../public/scripts/user/user.controller');

describe('user controller', function () {
  it('should exist', function () {
    expect(UserController).toBeDefined();
  });

  xit('should provide a user token when request', function () {
    var ctrl = new UserController({
      region : new Marionette.Region({
        el: $('main')
      })
    });
  });
});