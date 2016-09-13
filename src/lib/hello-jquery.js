import $ from 'jquery'

export default new class {
  say (element) {
    $(element).text(`${this.message()}: ${$.fn.jquery}`)
  }

  message() {
    return 'Hello jQuery'
  }
}
