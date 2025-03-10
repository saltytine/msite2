## To add another vulnerability, use the following template:

{
      title: "Open Redirect in Authentication Flow",
      severity: "Low",
      // options: Critical, High, Medium, Low
      date: "2023-04-08", 
      // year-month-day
      vendor: "Company",
      cve: "CVE-2023-23456",
      // if applicable
      status: "Patched",
      // there shouldn't be anything else here :>
      description:
        "An open redirect vulnerability in Company's login flow allows attackers to redirect users to arbitrary external domains after authentication.",
      impact:
        "This vulnerability can be exploited for phishing attacks by redirecting users to malicious websites after a legitimate login.",
      affected_versions: "AuthPortal 1.5.0 - 1.8.3",
      references: [
        "https://authportal.com/security/bulletins/CVE-2023-23456",
        "https://nvd.nist.gov/vuln/detail/CVE-2023-23456",
      ],
      discovery_date: "2023-03-22",
      disclosure_date: "2023-04-08",
      patch_date: "2023-04-05",
      category: "Open Redirect",
      // options: Injection, Authentication, Cross-Site Scripting, Buffer Overflow, Information Disclosure. if you see an important option missing, you can add it to the list which starts at line 245. if you couldn't tell this will not show up under any of those, so we can add it's category there as well.
    },
