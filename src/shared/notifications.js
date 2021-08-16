export const showNotification = (result, isSuccess) => {
  const notification = document.createElement('div');
  const body = document.getElementsByTagName('body')[0];

  if (isSuccess) {
    notification.className = 'success-notification';
    notification.innerText = result;
  } else {
    notification.innerText = result.response ? result.response.data.error.message : result.message;
    notification.className = 'error-notification';
  }

  body.append(notification);
  setTimeout( () => notification.remove(), 5000);
}
