@for (item of items; track item) is the replacement for *ngFor.

It is faster and more efficient (better change detection).

track item works like trackBy in *ngFor. Here we’re just tracking by the string itself.

Uses Angular’s new block template syntax

👉 console.table is especially nice for 100 fields because it formats them neatly.