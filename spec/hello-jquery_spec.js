// サンプルとしてjQueryの関連のテスト（？）もここに書いているが、
// ブラウザに関する機能はkarma経由でテストした方が良さそう
import assert from 'power-assert'

describe('HelloJQuery', function () {
  it('message', function () {
    // import だと最初に実行されてしまうためrequireを使用している
    const HelloJQuery = require('lib/hello-jquery').default
    assert(HelloJQuery.message() === 'Hello jQuery')
  })
})
