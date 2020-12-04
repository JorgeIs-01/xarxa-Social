import { FormGroup } from '@angular/forms';


export function ConfirmarContrasenas(password, confirmarP)
  {
    return (formGroup: FormGroup) => {
            const control = formGroup.controls[password];
            const matchingControl = formGroup.controls[confirmarP];

            if (matchingControl.errors && !matchingControl.errors.confirmarContrasenas) {
                // return if another validator has already found an error on the matchingControl
                return;
            }

            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ confirmarContrasenas: true });
            } else {
                matchingControl.setErrors(null);
            }
        }
}

