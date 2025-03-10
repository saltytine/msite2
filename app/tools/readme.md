## To add another tool, use the following template:

```typescript
{
      icon: <Terminal className="h-10 w-10 text-malectrica-purple" />,
      // there are a few icon options. terminal is the safest but you can look through to see if one fits better.
      title: "APIGuard",
      description: "API security testing and monitoring toolkit",
      longDescription:
        "APIGuard helps security teams test and monitor API endpoints for common vulnerabilities. It can be integrated into CI/CD pipelines for continuous security validation.",
      language: "JavaScript",
      // options: JavaScript, Python, Rust, Go, C/C++. again, feel free to add more
      stars: 204,
      forks: 48,
      lastUpdate: "2023-09-28",
      readme:
        "# APIGuard\n\nAPI security testing and monitoring toolkit.\n\n## Features\n\n- REST API vulnerability scanning\n- Authentication testing\n- Rate limiting verification\n- Input validation testing\n- CI/CD integration",
      tags: ["API", "Web Security", "Testing", "JavaScript"],
      // options right now are: Network, Encryption, Detection, Cloud, Application. more will be added
    },
```
feel free to add a language or category 
the lists look like this as of writing:

lang
```typescript
<SelectItem value="all">All Languages</SelectItem>
<SelectItem value="python">Python</SelectItem>
<SelectItem value="rust">Rust</SelectItem>
<SelectItem value="go">Go</SelectItem>
<SelectItem value="javascript">JavaScript</SelectItem>
<SelectItem value="cpp">C/C++</SelectItem>
```

category
```typescript
<SelectItem value="all">All Categories</SelectItem>
<SelectItem value="network">Network</SelectItem>
<SelectItem value="encryption">Encryption</SelectItem>
<SelectItem value="detection">Detection</SelectItem>
<SelectItem value="cloud">Cloud</SelectItem>
<SelectItem value="app">Application</SelectItem>
```
