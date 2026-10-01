import Swal from 'sweetalert2'

const createCustomPopup = ({
  title,
  message,
  type,
  confirmButtonText = 'Continue',
}) => {
  const isAlert = type === 'alert'

  return Swal.fire({
    title,
    html: `
      <div class="${isAlert ? 'alert' : 'success'}-alert-pedestrian-video" role="img" aria-label="${isAlert ? 'Urgent traffic alert animation' : 'Animated pedestrian crossing safely'}">
        <div class="${isAlert ? 'alert' : 'success'}-alert-sun">&#9728;</div>
        <div class="${isAlert ? 'alert' : 'success'}-alert-heart">&#9829;</div>
        <div class="${isAlert ? 'alert' : 'success'}-alert-skyline"></div>
        <div class="${isAlert ? 'alert' : 'success'}-alert-crosswalk"></div>
        <div class="${isAlert ? 'alert' : 'success'}-alert-pedestrian">
          <span class="pedestrian-head"></span>
          <span class="pedestrian-body"></span>
          <span class="pedestrian-arm pedestrian-arm-left"></span>
          <span class="pedestrian-arm pedestrian-arm-right"></span>
          <span class="pedestrian-leg pedestrian-leg-left"></span>
          <span class="pedestrian-leg pedestrian-leg-right"></span>
        </div>
      </div>
      <div class="${isAlert ? 'alert' : 'success'}-alert-shell">
        <div class="${isAlert ? 'alert' : 'success'}-alert-emoji">${isAlert ? '!' : '✓'}</div>
        <div class="${isAlert ? 'alert' : 'success'}-alert-copy">${message}</div>
      </div>
    `,
    width: 420,
    confirmButtonText,
    confirmButtonColor: isAlert ? '#ef4444' : '#10b981',
    background: '#0b1120',
    color: '#f8fafc',
    customClass: {
      popup: isAlert ? 'alert-swal-popup' : 'success-swal-popup',
      title: isAlert ? 'alert-swal-title' : 'success-swal-title',
      confirmButton: isAlert ? 'alert-swal-button' : 'success-swal-button',
      htmlContainer: 'success-swal-html',
    },
    buttonsStyling: false,
    showClass: {
      popup: 'swal2-show swal2-animate-success',
    },
    hideClass: {
      popup: 'swal2-hide',
    },
  })
}

const showSuccessAlert = (title = 'Success!', message = 'Your action was completed successfully.') => {
  return createCustomPopup({ title, message, type: 'success' })
}

export const showWarningAlert = (title = 'Alert!', message = 'Warning message.') => {
  return createCustomPopup({ title, message, type: 'alert', confirmButtonText: 'Continue' })
}

export default showSuccessAlert
