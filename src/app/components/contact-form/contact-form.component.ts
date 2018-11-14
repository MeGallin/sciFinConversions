import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { IContactForm } from "./iForm";
import { TypeWriterService } from "src/app/services/type-writer.service";
import { ContactFormService } from "src/app/services/contact-form.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  thankYouMessage: string = "";
  signature = "Gary";
  typeWriter;
 
  constructor(
    private typeWriter$: TypeWriterService,
    private contactFormService: ContactFormService
  ) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      hiddenName: new FormControl(""),
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      message: new FormControl("", Validators.required)
    });
  } // End of ngOnInIt

  sendMessage(message) {
    // console.log(e);
   // console.log(JSON.stringify(message));
    this.contactFormService.sendMail(JSON.stringify(message)).subscribe(res => {
   //   console.log("Contact form done", res);
    },  
    (err) => {
    //  console.log('There was an error', err);
      return err;
    });

    this.thankYouMessage =
      "Thank you for your submission. I will be in contact shortly.";
    setInterval(() => {
      this.typeWriter = this.typeWriter$.typeWriter(this.signature);
    }, 1000);

    this.contactForm.reset();
    setTimeout(() => {
      this.thankYouMessage = "";
    }, 5000);
  }
}
