Now your form structure lives in JSON (form-schema.json).

You can fetch it from backend API later.

You can add/modify fields without touching Angular code.

This scales easily to 20, 50, or 100+ fields.

CommonModule is not required for new control flow syntax (@if, @for, @switch).

The second error (NG0100) means Angular rendered your template, then you changed the form controls after first change detection (probably inside ngOnInit when loading schema async).

That’s expected because you are patching form controls after the view is already created.

ChangeDetectorRef.detectChanges() used after async schema load → fixes ExpressionChangedAfterItHasBeenCheckedError.

Form built only after schema arrives.