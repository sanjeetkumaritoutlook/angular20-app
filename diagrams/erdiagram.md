```mermaid

erDiagram

&nbsp;   USER ||--o{ ORDER : places

&nbsp;   ORDER ||--|{ LINE\_ITEM : contains

&nbsp;   USER {

&nbsp;       int id

&nbsp;       string name

&nbsp;       string email

&nbsp;   }

&nbsp;   ORDER {

&nbsp;       int id

&nbsp;       date orderDate

&nbsp;   }

&nbsp;   LINE\_ITEM {

&nbsp;       int id

&nbsp;       int quantity

&nbsp;   }

```



