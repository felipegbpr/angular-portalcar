import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    })

  }

  onSubmit() {
    console.log(this.form.value);

    if (this.form.valid) {
      this.http
        .post("https://httpbin.org/post", JSON.stringify(this.form.value))
        .subscribe((data) => {
          console.log(data);

          this.toReset();
        },
        (error: any) => alert("error")
      );
    } else {
      console.log("Invalid form!");
    }
  }

  toReset() {
    this.form.reset();
  }


}
