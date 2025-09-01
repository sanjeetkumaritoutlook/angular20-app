A dynamic form generated from a JSON schema.

20+ different fields (text, number, date, select, radio, checkbox, textarea).

Required validation where specified.

Logs all values to console on submit.

Angular does not allow complex expressions like .push() or .filter() directly in the template.
That’s why you got the Parser Error.

For checkboxes, we should instead handle selection in a component method.

Has 20 different fields (text, number, date, select, radio, checkbox, textarea).

Handles checkboxes correctly via onCheckboxChange.

Submits values properly.

CommonModule is not required for new control flow syntax (@if, @for, @switch).

To show required field error messages when the user clicks submit, we need two things:

=========

Mark all controls as touched on submit so Angular shows validation errors.

Add error display in the template with Angular 20 control flow (@if).

enhancements:

=========

how to make this form schema-driven from an external JSON file (so you don’t hardcode fields in TS, but load them dynamically from backend or config)

use Angular Material UI (with <mat-form-field>, mat-select, mat-radio-group, mat-datepicker), so it looks modern instead of plain HTML?

o add real-time validation (errors shown immediately when the user leaves a required field), or only after submit?
