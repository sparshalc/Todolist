import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.modal = new bootstrap.Modal(this.element, {
      keyboard: false
    })  
    this.modal.show()
  }
  disconnect(){
    this.modal.hide()
  }
  submitEnd(event){
    this.modal.hide()
  }
}