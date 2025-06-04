# API User Journey Diagram

```mermaid
journey
    title User Fetches and Views Users List
    section Start
      User opens page: 5: User
    section Fetch Users
      User triggers fetchUsers(): 4: System
      System sends API request: 4: System
      API returns users data: 4: System
    section Display Users
      System parses data: 3: System
      System creates user elements: 3: System
      System displays users on page: 5: User
```
