import assert from 'power-assert'
import HelloLodash from 'lib/hello-lodash'

describe('HelloLodash', function () {
  it('message', function () {
    assert(HelloLodash.message() === 'Hello lodash')
  })
})
