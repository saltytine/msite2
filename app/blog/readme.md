# Adding a New Blog Post to the Malectrica Blog Page

This guide explains how to add a new blog post to the `BlogPage` component in `page.tsx`.

---

## Steps to Add a New Blog Post

### 1. **Locate the Blog Posts Array**  
In `page.tsx`, find the section where blog posts are listed inside an array. It should look something like this:

```tsx
const blogPosts = [
  {
    title: "The Rise of Supply Chain Attacks",
    excerpt: "How attackers are increasingly targeting software supply chains...",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-12-10",
    author: "Robin Chang",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorTitle: "Security Researcher",
    category: "Trends",
    likes: 124,
    comments: 32,
    readTime: "8 min",
    tags: ["Supply Chain", "Software Security", "DevSecOps"],
  },
];
```

---

### 2. **Add a New Blog Post**  
Create a new object following the same structure as the existing ones. Replace the placeholder values with the new blog post details.

```tsx
{
  title: "Breaking Down Ransomware Trends in 2024",
  excerpt: "An in-depth analysis of how ransomware tactics are evolving...",
  image: "/images/ransomware-trends.jpg",
  date: "2024-03-10",
  author: "Jane Doe",
  authorImage: "/images/jane-doe.jpg",
  authorTitle: "Cybersecurity Analyst",
  category: "Threat Intelligence",
  likes: 85,
  comments: 21,
  readTime: "12 min",
  tags: ["Ransomware", "Threat Intelligence", "Incident Response"],
}
```

---

### 3. **Available Categories & Tags**  

#### **Categories:**  
Each blog post must belong to one of the following categories:  

- `"Trends"` → Industry developments and emerging threats  
- `"Cloud Security"` → Security for cloud-based applications  
- `"Web Security"` → Web app security topics  
- `"Mobile Security"` → Security risks for mobile platforms  
- `"Cryptography"` → Encryption and secure communication  
- `"Architecture"` → Secure system and network architecture  
- `"Security Operations"` → SOC and monitoring best practices  

#### **Tags:**  
Tags help categorize posts for better filtering. You can use multiple tags per post. Here are some **common tags**:  

- **Threats & Exploits:** `"XSS"`, `"SQL Injection"`, `"Ransomware"`, `"Malware"`, `"Zero-Day"`  
- **Cloud & DevSecOps:** `"Cloud Security"`, `"DevSecOps"`, `"Kubernetes"`, `"Containers"`  
- **Security Best Practices:** `"Authentication"`, `"Zero Trust"`, `"SOC"`  
- **Research & Insights:** `"Threat Intelligence"`, `"Reverse Engineering"`, `"Incident Response"`  

##### **How to Add a New Tag**  
If a new tag is needed, simply add it to the `tags` array for the blog post:

```tsx
tags: ["Custom Tag", "New Category"]
```
If you want the tag to be **filterable**, update the filter dropdown logic in `page.tsx` accordingly.
