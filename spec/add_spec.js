import assert from 'power-assert'

function add (a, b) {
  return a + b
}

describe('add 関数のテスト', function () {
  it('1 + 1 は 2', function () {
    assert(add(1, 1) === 2)
  })
  it('1 + 4 は 5', function () {
    assert(add(1, 4) === 5)
  })
})
