import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent implements OnInit {
 
  ngOnInit(): void {
    
  }

  passwordForm = new FormGroup({
    password: new FormControl()
  });

  passwordStrength: string = '';

  checkPasswordStrength(password: string): void {
    const strength = this.calculatePasswordStrength(password);
    this.passwordStrength = strength;
  }

  calculatePasswordStrength(password: string): string {
    let strength = 0;

    if (password.length >= 8) {
      strength += 1;
    }
    if (/[A-Z]/.test(password)) {
      strength += 1;
    }
    if (/[a-z]/.test(password)) {
      strength += 1;
    }
    if (/[0-9]/.test(password)) {
      strength += 1;
    }
    if (/[^A-Za-z0-9]/.test(password)) {
      strength += 1;
    }

    switch (strength) {
      case 1:
      case 2:
        return 'Weak';
      case 3:
      case 4:
        return 'Medium';
      case 5:
        return 'Strong';
      default:
        return '';
    }
  }
}

