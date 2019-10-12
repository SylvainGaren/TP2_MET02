import { Component, OnInit } from '@angular/core';
import { NgForm, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(userForm:NgForm) {
    var nom = false;
    var prenom = false;
    var adresse = false;
    var cp = false;
    var login = false;
    var email = false;
    var tel = false;
    var pwd = false;
    var confirmPdw = false;
    var recap: string;

    if (userForm.value.Name.length > 1) {
      nom = true;
      console.log("name ok");
    }
    else {
      alert("Le nom doit être renseigné et faire plus de 1 caractere");
    }

    if (userForm.value.Prenom.length > 1) {
      prenom = true;
      console.log("Prenom ok");
    }
    else {
      alert("Le prenom doit être renseigné et faire plus de 1 caractere");
    }

    if (userForm.value.Adresse.length > 5) {
      adresse = true;
      console.log("Adresse ok");
    }
    else {
      alert("L'adresse doit être renseignée et faire plus de 5 caracteres");
    }

    if (userForm.value.Cp.length == 5) {
      cp = true;
      console.log("Cp ok");
    }
    else {
      alert("Le code postal doit etre de 5 caracteres");
    }

    if (userForm.value.Login.length > 2) {
      login = true;
      console.log("Login ok");
    }
    else {
      alert("Le login doit etre supérieur à 2 caracteres");
    }
    
    if (this.checkEmail(userForm.value.Email)) {
      email = true;
      console.log("Email ok");
    }
    else {
      alert("Erreur dans l'email");
    }
    if (this.checkTel(userForm.value.Tel)) {
      tel = true;
      console.log("Tel ok");
    }
    else {
      alert("Erreur dans le tel");
    }
    if (this.checkPassword(userForm.value.Pwd, userForm.value.ConfirmPass)) {
      pwd = true;
      confirmPdw = true;
      console.log("ok");
    }
    else {
      alert("Les mots de passes doivent être les mêmes et supérieurs à 7 caracteres");
    }
    if (nom && prenom && adresse && cp && login && email && tel && pwd && confirmPdw) {
      alert("Tout est bon");
      recap = "Nom : " + nom + ", prenom : " + prenom + ", adresse : " + adresse + ", cp : " + cp + ", login : " + login + ", email : " + email + ", tel : " + tel;
    }
    else {
      alert("Vérifiez vos saisies");
    }
  }

  // ma fonction qui vérifie le champ password
  checkPassword(pass: string, confirmPass: string) {
    let valid = false;
    if (pass.length >= 8) {
      if (pass != "" && pass == confirmPass) {
        valid = true;
      }
      else {
        valid = false;
      }
    }
    else {
      valid = false;
    }
    return valid;
  }

  // ma fonction qui vérifie l'adresse mail
  checkEmail(mail: string) {
    var emailRegex = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$';
    var valid = false;
    if (mail.match(emailRegex)) {
      valid = true;
    }
    return valid;
  }

  // ma fonction qui vérifie le champ telephone
  checkTel(tel: string) {
    var phoneNumber = /[0-9-()+]{3,20}/;
    var valid = false;
    if (tel.match(phoneNumber)) {
      valid = true;
    }
    return valid;
  }

  // vérifier que tous les champs sont renseignés
  checkFields(tab: Array<string>) {
    tab.forEach(function(elem) {
      console.log(elem);
    });
    return false;
  }

  resetUserForm(userForm: NgForm) {
    userForm.resetForm();
  }

}
