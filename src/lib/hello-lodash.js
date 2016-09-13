import _ from 'lodash'

export default new class {
  say(element) {
    element.textContent = `${this.message()}: ${_.VERSION}`
  }

  message() {
    return _.escape('Hello lodash')
  }
}
