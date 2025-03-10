
# Adding a New Proof of Concept (POC) to the Malectrica POCs Page

This guide explains how to add a new proof-of-concept (POC) exploit to the `POCsPage` component in `page.tsx`.

---

## Steps to Add a New POC

### 1. **Locate the POCs Array**  
In `page.tsx`, find the section where POCs are listed inside an array. It should look something like this:

```tsx
const pocs = [
  {
    title: "XSS Vulnerability in Web Framework",
    description: "This POC demonstrates a cross-site scripting vulnerability...",
    fullDescription: "This proof-of-concept demonstrates a severe XSS vulnerability...",
    language: "JavaScript",
    date: "2023-12-01",
    author: "Alex Chen",
    cve: "CVE-2023-32156",
    affected: "WebFrame 5.2.0 - 5.4.3",
    impact: "High",
    mitigation: "Upgrade to WebFrame 5.4.4...",
    verifiedWorks: true,
    views: 3241,
    downloads: 876,
    tags: ["XSS", "Web Security", "Client-Side"],
  },
];
```

---

### 2. **Add a New POC**  
Create a new object following the same structure as the existing ones. Replace the placeholder values with the new POC’s details.

```tsx
{
  title: "Remote Code Execution in Cloud API",
  description: "This POC demonstrates an RCE vulnerability in CloudAPI service...",
  fullDescription: "A critical vulnerability in CloudAPI versions 1.0.0 to 1.2.3...",
  language: "Python",
  date: "2024-03-10",
  author: "Jane Doe",
  cve: "CVE-2024-12345",
  affected: "CloudAPI 1.0.0 - 1.2.3",
  impact: "Critical",
  mitigation: "Upgrade to CloudAPI 1.2.4 or later...",
  verifiedWorks: true,
  views: 5023,
  downloads: 1342,
  tags: ["RCE", "Cloud", "API Security"],
}
```

---

### 3. **Available Tags & How to Add a New Tag**  
Tags help categorize the POCs, making them easier to filter. Here are the **existing** tags:

- **Web Security:** `"XSS"`, `"SQL Injection"`, `"Path Traversal"`, `"OAuth"`, `"Authentication"`
- **Network Security:** `"SSRF"`, `"DNS Hijacking"`, `"MITM"`, `"Port Scanning"`
- **Application Security:** `"API Security"`, `"File Upload"`, `"JWT"`
- **Exploitation:** `"RCE"`, `"Buffer Overflow"`, `"Privilege Escalation"`
- **Cloud & Containers:** `"Cloud"`, `"Kubernetes"`, `"Docker"`, `"Container Escape"`
- **Crypto & Secrets:** `"Encryption"`, `"Secrets Management"`, `"JWT Forgery"`
- **Miscellaneous:** `"Firmware"`, `"IoT"`, `"E-commerce"`, `"Database"`

#### **How to Add a New Tag**  
If a new category is needed, simply add a new tag to the `tags` array for the POC.

Example:
```tsx
tags: ["New Category", "Custom Tag"]
```
If you're adding a **new category that should be filterable**, update the filter dropdown logic in `page.tsx` to include it.

---

### 4. **Supported Languages**  
When adding a POC, you must define the `language`. The supported values are:

- `"JavaScript"`
- `"Python"`
- `"C"`
- `"C++"`
- `"PHP"`
- `"Bash"`
- `"Go"`
- `"Rust"`

Make sure the language matches one of the **supported values** so it is correctly categorized.

---

### 5. **Assign the Correct Fields**  
- **`cve`**: The official CVE ID (if available). If not, use `"N/A"`.
- **`impact`**: The severity level (`"Critical"`, `"High"`, `"Medium"`, `"Low"`).
- **`tags`**: Keywords that categorize the POC (see above for valid tags).
- **`verifiedWorks`**: Set to `true` if the POC has been tested and confirmed to work.
