var Marionette = require('backbone.marionette'),
    ResumeController = require('../../public/scripts/resume/resume.controller');

describe('resume controller', function () {
  it('should exist', function () {
    expect(ResumeController).toBeDefined();
  });

  it('should throw an exception if no region is provided', function () {
    expect(function () {
      return new ResumeController()
    }).toThrow(new Error('No region provided'));
  });

  it('should call to auth when unauthorized', function () {
    var ctrl = new ResumeController({
      region : 'main'
    });

    spyOn(ctrl, 'auth');

    ctrl.show();

    expect(ctrl.auth).toHaveBeenCalled();
  });

  it('should accept a region', function () {
    var ctrl = new ResumeController({
      region : new Marionette.Region({
        el: document.createElement('main')
      })
    });

    expect(ctrl.region).toEqual(jasmine.any(Marionette.Region));
  });
});