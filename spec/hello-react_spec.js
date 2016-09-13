import assert from 'power-assert'
import HelloReact from 'lib/hello-react'

describe('HelloReact', function () {
  it('message', function () {
    assert(HelloReact.message() === 'Hello React')
  })
})
