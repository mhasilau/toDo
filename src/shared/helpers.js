import { LocalStorageService } from '../shared/ls-service';

export const setUserInfo = () => {
  const photo = document.querySelector('.header__profile-photo');
  const dropdownMenuButton = document.getElementById('dropdownMenuButton');
  const userFullName = 
    `${LocalStorageService.getPersonalData().firstName} ${LocalStorageService.getPersonalData().lastName}`;
  const userPhotoUrl = LocalStorageService.getPersonalData().photo;
  photo.style.backgroundImage = userPhotoUrl ?
    `url("${userPhotoUrl}")` : `url("/src/shared/assets/img/no-photo.png")`;
  dropdownMenuButton.innerText = userFullName;
}
