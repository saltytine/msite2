# Adding a New Team Member to the Malectrica Teams Page

This guide explains how to add a new team member to the `TeamPage` component in `page.tsx`.

## Steps to Add a New Team Member

**Locate the Team Members Array**  
In `page.tsx`, find the section where team members are listed inside an array. It should look something like this:

   ```tsx
   [
     {
       name: "Alex Winters",
       role: "Co-Founder & Chief Security Researcher",
       image: "/placeholder.svg?height=400&width=400",
       bio: "Former NSA security analyst...",
       hackerone: "alexw1nt3rs",
       bugcrowd: "alexwinters",
       github: "alexw1nt3rs",
       specialties: ["Web Security", "Mobile Security", "Network Penetration"],
       type: "founders",
     },
   ]
   ```

**Add a New Team Member**  
Create a new object following the same structure as the existing ones. Replace the placeholder values with the new team member's details. Example:

   ```tsx
   {
     name: "Jane Doe",
     role: "Cybersecurity Engineer",
     image: "/images/janedoe.jpg",
     bio: "Expert in network security and incident response.",
     hackerone: "janedoe",
     bugcrowd: "jdoe",
     github: "janedoe-sec",
     specialties: ["Network Security", "Incident Response", "Forensics"],
     type: "researchers",
   }
   ```

**Assign the Correct Type**  
  - `founders` → Founders of the company  
  - `researchers` → Security researchers  
  - `developers` → Software engineers & tool developers  

 Make sure the `type` field matches the correct category so the team member appears under the right tab.
