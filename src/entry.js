import HelloJQuery from 'lib/hello-jquery'
import HelloLodash from 'lib/hello-lodash'
import HelloReact from 'lib/hello-react'

const say = element => element.textContent = 'Hello World'

say(document.getElementById('hello'))
HelloJQuery.say(document.getElementById('jquery'))
HelloLodash.say(document.getElementById('lodash'))
HelloReact.say(document.getElementById('react'))
