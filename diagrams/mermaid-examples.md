# 📌 Mermaid Diagrams Cheat Sheet

## 1. Flowchart
```mermaid
flowchart TD
    A[Start] --> B{Is it working?}
    B -- Yes --> C[Keep using it]
    B -- No --> D[Fix it]
    D --> B
```

---

## 2. Sequence Diagram
```mermaid
sequenceDiagram
    participant User
    participant Server
    User->>Server: Login Request
    Server-->>User: Authentication Token
    User->>Server: Get Data
    Server-->>User: Response Data
```

---

## 3. Gantt Chart
```mermaid
gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Planning
    Research       :a1, 2025-09-22, 5d
    Design         :after a1, 3d
    section Development
    Implementation :2025-09-30, 10d
    Testing        :2025-10-10, 5d
```

---

## 4. ER Diagram (Database)
```mermaid
erDiagram
    USER ||--o{ ORDER : places
    ORDER ||--|{ LINE_ITEM : contains
    USER {
        int id
        string name
        string email
    }
    ORDER {
        int id
        date orderDate
    }
    LINE_ITEM {
        int id
        int quantity
    }
```

---

## 5. State Diagram
```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Running : Start
    Running --> Idle : Stop
    Running --> Error : Crash
    Error --> Idle : Reset
```

---

## 6. Pie Chart
```mermaid
pie title Programming Language Popularity
    "JavaScript" : 40
    "Python" : 30
    "Java" : 20
    "C++" : 10
```

---

## 7. User Journey
```mermaid
journey
    title Shopping Experience
    section Browse
      User: Happy : 5
      Website: Confused : 2
    section Checkout
      User: Frustrated : 3
      Website: Neutral : 3
    section Payment
      User: Satisfied : 4
      Website: Happy : 5
```
