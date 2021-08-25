import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	submitted = false;
	public formContact: FormGroup;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {

		this.formContact = this.formBuilder.group({
			name: ['', 
				[
					Validators.required,
					Validators.minLength(3)
				]
			],
			lastName: ['', 
				[
					Validators.required,
					Validators.minLength(3)
				]
			],
			email: ['', 
				[
					Validators.required,
					Validators.email,
					Validators.minLength(3)
				]
			],
			birthdate: ['', 
				[
					Validators.required,
					Validators.minLength(3)
				]
			],
			terms: ['', 
				[
					Validators.required,
					Validators.requiredTrue
				]
			],
		})

	}

	//controls: Manejo de errores
	get f() { return this.formContact.controls; }

	onSubmit() {

		this.submitted = true;
  
		// Si el formulario no es valido
		if (this.formContact.invalid) {
			return;
		}

	}
	
}

