# Adding a New Write-up to the Malectrica Write-ups Page

This guide explains how to add a new technical write-up to the `WriteUpsPage` component in `page.tsx`.

---

## Steps to Add a New Write-up

### 1. **Locate the Write-ups Array**  
In `page.tsx`, find the section where write-ups are listed inside an array. It should look something like this:

```tsx
const writeups = [
  {
    title: "Bypassing WAF Protection: A Case Study",
    excerpt: "An analysis of how we discovered and exploited weaknesses in popular web application firewalls...",
    content: "In this comprehensive case study, we examine multiple techniques for bypassing modern web application firewalls...",
    date: "2023-12-05",
    author: "Jamie Wilson",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorTitle: "Senior Security Researcher",
    readTime: "15 min read",
    tags: ["WAF", "Bypass", "Web Security", "Defense Evasion", "Penetration Testing"],
    relatedCVEs: ["CVE-2023-12345", "CVE-2023-23456"],
    category: "Web Security",
    views: 4562,
  },
];
```

---

### 2. **Add a New Write-up**  
Create a new object following the same structure as the existing ones. Replace the placeholder values with the new write-up details.

```tsx
{
  title: "Exploiting SSRF in Cloud APIs",
  excerpt: "A deep dive into how an SSRF vulnerability in a cloud provider’s API exposed internal services...",
  content: "This write-up documents our research into a server-side request forgery (SSRF) vulnerability...",
  date: "2024-03-10",
  author: "Jane Doe",
  authorImage: "/images/jane-doe.jpg",
  authorTitle: "Cloud Security Engineer",
  readTime: "12 min read",
  tags: ["SSRF", "Cloud Security", "API Security", "Pentesting"],
  relatedCVEs: ["CVE-2024-56789"],
  category: "Cloud Security",
  views: 3127,
}
```

---

### 3. **Available Categories & Tags**  

#### **Categories:**  
Each write-up must belong to one of the following categories:  

- `"Web Security"` → Vulnerabilities in web applications  
- `"Cloud Security"` → Misconfigurations, exploits, and best practices in cloud environments  
- `"Authentication"` → Issues related to identity, authentication, and authorization  
- `"Blockchain Security"` → Smart contract vulnerabilities and attacks on decentralized systems  
- `"IoT Security"` → Security flaws in embedded devices and IoT networks  
- `"Mobile Security"` → Attacks and defenses for Android/iOS apps  
- `"Software Supply Chain"` → Threats related to open-source and dependency management  

#### **Tags:**  
Tags help categorize write-ups for better filtering. Here are some **common tags**:  

- **Web & App Security:** `"XSS"`, `"SQL Injection"`, `"OAuth"`, `"SAML"`, `"JWT"`  
- **Cloud & Infrastructure:** `"Cloud Security"`, `"AWS"`, `"Azure"`, `"GCP"`, `"SSRF"`  
- **Authentication & Identity:** `"Password Security"`, `"MFA"`, `"SSO"`  
- **Exploitation & Research:** `"Reverse Engineering"`, `"Binary Exploitation"`, `"Privilege Escalation"`  
- **IoT & Embedded:** `"Firmware Analysis"`, `"IoT"`, `"Hardware Security"`  
- **Blockchain & DeFi:** `"Ethereum"`, `"Smart Contracts"`, `"DeFi"`  

##### **How to Add a New Tag**  
If a new tag is needed, simply add it to the `tags` array for the write-up:

```tsx
tags: ["New Tag", "Additional Category"]
```
If you want the tag to be **filterable**, update the filter dropdown logic in `page.tsx` accordingly.

---

### 4. **Assign the Correct Fields**  
- **`relatedCVEs`**: If the write-up discusses specific vulnerabilities, list the related CVEs. If none, use `[]`.  
- **`category`**: Pick the best category from the list above.  
- **`tags`**: Choose multiple relevant keywords.  
- **`views`**: Set an initial value (e.g., `0`), and it will update dynamically over time.  
