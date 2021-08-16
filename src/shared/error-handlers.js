export const showErrorMessage = (id, message) => {
  const errorTag = document.getElementById(id);
  errorTag.style.display = 'block';
  errorTag.innerText = message;
}

export const hideErrorMessage = id => {
  const inputErrorTag = document.getElementById(id);
  inputErrorTag.style.display = 'none';
}
