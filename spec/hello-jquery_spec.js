import assert from 'power-assert'

describe('HelloJQuery', function () {
  it('message', function () {
    // import だと最初に実行されてしまうためrequireを使用している
    const HelloJQuery = require('lib/hello-jquery').default
    assert(HelloJQuery.message() === 'Hello jQuery')
  })
})
