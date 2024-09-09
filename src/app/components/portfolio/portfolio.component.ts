import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactFromService } from '../../services/contact-from.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {


  isHovered = false;
  animationClass = '';

  selectedTab = 'ui-designs';
  contactForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private viewPortScroller: ViewportScroller,  private contactService: ContactFromService) { 
    this.contactForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        to_name: 'Admin',
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required]],
        message: ['', [Validators.required]],
    })
  }


  ngOnInit(): void {  
  }

  scrollToSection(sectionId: string) {
    this.viewPortScroller.scrollToAnchor(sectionId)
  }

  uiDesignProjects = [
    { title: 'UI Design 1', description: 'Description for UI Design 1',  },
    { title: 'UI Design 2', description: 'Description for UI Design 2' },
    { title: 'UI Design 3', description: 'Description for UI Design 3' },
    { title: 'UI Design 4', description: 'Description for UI Design 4' },
    { title: 'UI Design 5', description: 'Description for UI Design 5' },
    // Add more projects as needed
  ];

  webDevProjects = [
    { title: 'Web Dev Project 1', description: 'Description for Web Dev Project 1' },
    { title: 'Web Dev Project 2', description: 'Description for Web Dev Project 2' },
    { title: 'Web Dev Project 3', description: 'Description for Web Dev Project 3' },
    { title: 'Web Dev Project 4', description: 'Description for Web Dev Project 4' },
    // Add more projects as needed
  ];

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  addAnimation() {
    this.animationClass = 'animate__animated animate__pulse'; // Set animation class
  }

  removeAnimation() {
    this.animationClass = ''; // Reset animation class to allow replay
  }

  onSubmit(contactForm:any) {
    this.contactService.SendMessage(this.contactForm.value).subscribe(response => {
      location.href = 'mailthis.to/confirm';
      console.log(response);
    },
      error => {
        console.warn(error.responseText)
        console.log({ error })
      }

    )

  }


  async sendEmail() {
    emailjs.init('6wwyiaDZqKtwPMnpr');
   let response = await  emailjs.send("service_vyu0i99", "template_lvrh4fe", {
      first_name: this.contactForm.value.firstName,
      last_name: this.contactForm.value.lastName,
      to_name: this.contactForm.value.to_name,
      from_email: this.contactForm.value.email,
      from_numbers: this.contactForm.value.phoneNumbers,
      message: this.contactForm.value.message,
    });

    console.log('we passed the first part')

    alert ('Message has been sent.'); {
      this.contactForm.reset();
    }

  }

}
