export const showSpinner = () => {
  console.log('show spinner');
  const body = document.getElementsByTagName('body')[0];
  const wrapperSpinner = document.createElement('div');
  const divSpinner1 = document.createElement('div');
  const divSpinner2 = document.createElement('div');
  const divSpinner3 = document.createElement('div');
  const divSpinner4 = document.createElement('div');
  const divSpinner5 = document.createElement('div');

  wrapperSpinner.className = 'cssload-wrap';
  divSpinner1.className = 'cssload-circle';
  divSpinner2.className = 'cssload-circle';
  divSpinner3.className = 'cssload-circle';
  divSpinner4.className = 'cssload-circle';
  divSpinner5.className = 'cssload-circle';
  body.append(wrapperSpinner);
  wrapperSpinner.append(divSpinner1, divSpinner2, divSpinner3, divSpinner4, divSpinner5);
}

export const hideSpinner = () => {
  const wrapperSpinner = document.querySelector('.cssload-wrap');
  wrapperSpinner.remove();
}
