import { toast } from 'bulma-toast'

class Toast {
  static success(message) {
    toast({
      type: 'is-success',
      message: message,
    })
  }
  static danger(message) {
    toast({
      type: 'is-danger',
      message: message,
      duration: 10000,
    })
  }
}

export default Toast
