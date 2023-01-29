var assert = require('assert');
var themesClassName = require('../index')
describe('simple.test.js', function() {
  describe('basic', function() {
    it('dark', function() {
      assert.equal(
          themesClassName({
              themes: 'dark',
              prefixClassName: 'm-modal'
          })
          ,
          'm-modal--themes-dark'
      )
    })
    it('dark big', function() {
      assert.equal(
          themesClassName({
              themes: 'dark big',
              prefixClassName: 'm-modal'
          })
          ,
          "m-modal--themes-dark m-modal--themes-big"
      )
    })
    it('menu', () => {
        assert.equal(
            themesClassName({
                themes: 'dark big',
                prefixClassName: 'm-select'
            }, 'menu')
            ,
            "m-select-menu--themes-dark m-select-menu--themes-big"
        )
    })
  })
})
