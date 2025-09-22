```mermaid

stateDiagram-v2

&nbsp;   \[\*] --> Idle

&nbsp;   Idle --> Running : Start

&nbsp;   Running --> Idle : Stop

&nbsp;   Running --> Error : Crash

&nbsp;   Error --> Idle : Reset

```



