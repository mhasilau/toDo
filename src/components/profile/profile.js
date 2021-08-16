import { LocalStorageService } from '../../shared/ls-service';
import { routes } from '../../shared/constants/routes';
import { uploadPhoto } from '../../api/api-handlers';
import { setUserInfo } from '../../shared/helpers';

export const logoutBtnHandler = () => {
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.onclick = () => {
    LocalStorageService.clearStorage();
    window.location.href = routes.sign_in;
  };
}

export const profileHandler = () => {
  const photo_input = document.getElementById('photo-input');

  setUserInfo();
  logoutBtnHandler();
  formHandler();

  photo_input.oninput = event => {
    const imgName = document.getElementById('photo-input').value;
    uploadPhoto(event, imgName);
  }

}

export const formHandler = () => {
  const { firstName, lastName, email, birth } = LocalStorageService.getPersonalData();
  const userName = document.getElementById('userName');
  const userSurname = document.getElementById('userSurname');
  const emailInput = document.getElementById('email');
  const birthInput = document.getElementById('birth');
  const saveBtn = document.getElementById('saveBtn');
  const form = document.querySelector('.profile__form');

  userName.value = firstName;
  userSurname.value = lastName;
  emailInput.value = email;
  birthInput.value = birth;

  form.addEventListener('submit', event => {
    event.preventDefault();
  })

  refreshFormPhoto();

}

export const refreshFormPhoto = () => {
  const photoBlock = document.querySelector('.profile__form-photo-img');
  const userPhotoUrl = LocalStorageService.getPersonalData().photo;

  photoBlock.style.backgroundImage = userPhotoUrl ?
    `url("${userPhotoUrl}")` : `url("/src/shared/assets/img/no-photo.png")`;
}
