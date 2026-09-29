import Swal from 'sweetalert2'

const showSuccessAlert = (title = 'Success!', message = 'Your action was completed successfully.') => {
  return Swal.fire({
    title,
    html: `
      <div class="success-alert-pedestrian-video" role="img" aria-label="Animated pedestrian crossing safely">
        <div class="success-alert-sun">&#9728;</div>
        <div class="success-alert-heart">&#9829;</div>
        <div class="success-alert-skyline"></div>
        <div class="success-alert-crosswalk"></div>
        <div class="success-alert-pedestrian">
          <span class="pedestrian-head"></span>
          <span class="pedestrian-body"></span>
          <span class="pedestrian-arm pedestrian-arm-left"></span>
          <span class="pedestrian-arm pedestrian-arm-right"></span>
          <span class="pedestrian-leg pedestrian-leg-left"></span>
          <span class="pedestrian-leg pedestrian-leg-right"></span>
        </div>
      </div>
      <div class="success-alert-shell">
        <div class="success-alert-emoji">✓</div>
        <div class="success-alert-copy">${message}</div>
      </div>
    `,
    width: 420,
    confirmButtonText: 'Continue',
    confirmButtonColor: '#10b981',
    background: '#0f172a',
    color: '#e2e8f0',
    customClass: {
      popup: 'success-swal-popup',
      title: 'success-swal-title',
      confirmButton: 'success-swal-button',
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

export default showSuccessAlert
