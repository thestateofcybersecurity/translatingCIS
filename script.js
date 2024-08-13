// Embed the JSON data directly into the script
const controlsData = [
    {
        "subcategory": "1.1: Establish and Maintain Detailed Enterprise Asset Inventory",
        "metaphor": "Keeping a detailed list of all your household appliances, so you know what you have and can maintain them properly.",
        "translation": "The family keeps an up-to-date inventory of all the devices and appliances they own, ensuring everything is accounted for and can be maintained effectively."
    },
    {
        "subcategory": "1.2: Address Unauthorized Assets",
        "metaphor": "Removing any uninvited guests from your home to maintain security.",
        "translation": "The family ensures that any unauthorized or unknown devices are promptly removed or blocked from the home’s network to keep it secure."
    },
    {
        "subcategory": "1.3: Utilize an Active Discovery Tool",
        "metaphor": "Regularly walking around your house to check if all doors and windows are secure.",
        "translation": "The family actively checks the home network daily to identify any new or unauthorized devices connected, ensuring everything is secure."
    },
    {
        "subcategory": "1.4: Use Dynamic Host Configuration Protocol (DHCP) Logging to Update Enterprise Asset Inventory",
        "metaphor": "Using your home's visitor log to update your list of guests regularly.",
        "translation": "The family uses logs of who’s connected to the home’s network to update their inventory of devices, ensuring it’s always current."
    },
    {
        "subcategory": "1.5: Use a Passive Asset Discovery Tool",
        "metaphor": "Keeping an ear out for unusual noises in the house to detect if someone is there without your knowledge.",
        "translation": "The family uses passive tools to listen for any new or unauthorized devices on the network, updating their records at least weekly."
    },
    {
        "subcategory": "2.1: Establish and Maintain a Software Inventory",
        "metaphor": "Making a list of all the apps and programs installed on your family’s devices, so you know what’s there and why.",
        "translation": "The family keeps a detailed inventory of all software on their devices, knowing what’s installed, when, and for what purpose."
    },
    {
        "subcategory": "2.2: Ensure Authorized Software is Currently Supported",
        "metaphor": "Making sure all your household appliances are still under warranty and supported by the manufacturer.",
        "translation": "The family ensures that all the software they use is still supported and up-to-date, removing or documenting exceptions for anything outdated."
    },
    {
        "subcategory": "2.3: Address Unauthorized Software",
        "metaphor": "Getting rid of any unwanted or unapproved apps that kids might have installed on the family computer.",
        "translation": "The family ensures that any unauthorized software is promptly removed or properly documented if it must be kept."
    },
    {
        "subcategory": "2.4: Utilize Automated Software Inventory Tools",
        "metaphor": "Using a tool to automatically list all the apps installed on your family’s devices.",
        "translation": "The family uses automated tools to keep track of all software installed across their devices, ensuring the inventory is always accurate."
    },
    {
        "subcategory": "2.5: Allowlist Authorized Software",
        "metaphor": "Only allowing pre-approved people into your home.",
        "translation": "The family ensures that only pre-approved software is allowed to run on their devices, blocking anything unauthorized."
    },
    {
        "subcategory": "2.6: Allowlist Authorized Libraries",
        "metaphor": "Allowing only approved books in the family library.",
        "translation": "The family ensures that only authorized software libraries are allowed to be used on their devices, blocking any that are unauthorized."
    },
    {
        "subcategory": "2.7: Allowlist Authorized Scripts",
        "metaphor": "Allowing only trusted recipes in the family cookbook.",
        "translation": "The family ensures that only authorized scripts are allowed to run on their devices, blocking any unauthorized ones."
    },
    {
        "subcategory": "3.1: Establish and Maintain a Data Management Process",
        "metaphor": "Creating a system for organizing and handling important family documents.",
        "translation": "The family establishes a process for managing their data, including who owns it, how it’s handled, and how long it’s kept."
    },
    {
        "subcategory": "3.2: Establish and Maintain a Data Inventory",
        "metaphor": "Keeping a detailed list of all important documents in the house.",
        "translation": "The family keeps an inventory of all sensitive and important data they possess, ensuring it’s updated regularly."
    },
    {
        "subcategory": "3.3: Configure Data Access Control Lists",
        "metaphor": "Setting rules about who can access which rooms in the house.",
        "translation": "The family sets access controls to ensure that only those who need to access certain data can do so."
    },
    {
        "subcategory": "3.4: Enforce Data Retention",
        "metaphor": "Keeping important documents for a set number of years before safely discarding them.",
        "translation": "The family enforces data retention policies to ensure data is kept for the required amount of time and then properly disposed of."
    },
    {
        "subcategory": "3.5: Securely Dispose of Data",
        "metaphor": "Shredding old documents that are no longer needed.",
        "translation": "The family securely disposes of data when it’s no longer needed, ensuring it’s done in a way that prevents any unauthorized access."
    },
    {
        "subcategory": "3.6: Encrypt Data on End-User Devices",
        "metaphor": "Locking important documents in a safe.",
        "translation": "The family ensures that sensitive data on their devices is encrypted, so it’s secure even if the device is lost or stolen."
    },
    {
        "subcategory": "3.7: Establish and Maintain a Data Classification Scheme",
        "metaphor": "Labeling documents as 'Sensitive,' 'Confidential,' or 'Public' based on their importance.",
        "translation": "The family classifies their data according to its sensitivity, ensuring it’s handled appropriately based on its classification."
    },
    {
        "subcategory": "3.8: Document Data Flows",
        "metaphor": "Mapping out how information moves through the house, like how mail gets from the mailbox to the right person.",
        "translation": "The family documents how data flows through their systems, ensuring they understand where data is stored, processed, and transmitted."
    },
    {
        "subcategory": "3.9: Encrypt Data on Removable Media",
        "metaphor": "Locking important documents in a briefcase before taking them out of the house.",
        "translation": "The family encrypts data on any removable media, such as USB drives, to protect it if the media is lost or stolen."
    },
    {
        "subcategory": "3.10: Encrypt Sensitive Data in Transit",
        "metaphor": "Using a locked box to send sensitive documents through the mail.",
        "translation": "The family ensures that sensitive data is encrypted while it’s being transmitted, protecting it from interception."
    },
    {
        "subcategory": "3.11: Encrypt Sensitive Data at Rest",
        "metaphor": "Locking up important documents in a secure filing cabinet when they’re not being used.",
        "translation": "The family ensures that sensitive data stored on devices is encrypted, keeping it secure even when not in use."
    },
    {
        "subcategory": "3.12: Segment Data Processing and Storage Based on Sensitivity",
        "metaphor": "Keeping valuable items in a separate, secure area of the house.",
        "translation": "The family separates the processing and storage of sensitive data from less critical data, ensuring it’s more secure."
    },
    {
        "subcategory": "3.13: Deploy a Data Loss Prevention Solution",
        "metaphor": "Using a security system to monitor for anything valuable leaving the house without permission.",
        "translation": "The family uses tools to monitor and prevent the unauthorized transfer of sensitive data out of their systems."
    },
    {
        "subcategory": "3.14: Log Sensitive Data Access",
        "metaphor": "Keeping a log of who accessed the family safe and when.",
        "translation": "The family logs every time sensitive data is accessed, ensuring they have a record of who accessed what and when."
    },
    {
        "subcategory": "4.1: Establish and Maintain a Secure Configuration Process",
        "metaphor": "Setting rules for how to organize and secure the house, like where keys are kept and how doors are locked.",
        "translation": "The family establishes and maintains a process to ensure all devices and software are securely configured and kept up to date."
    },
    {
        "subcategory": "4.2: Establish and Maintain a Secure Configuration Process for Network Infrastructure",
        "metaphor": "Ensuring that the home’s internet and Wi-Fi are set up securely, with strong passwords and proper settings.",
        "translation": "The family sets and maintains secure configurations for all network devices, ensuring everything is protected from potential threats."
    },
    {
        "subcategory": "4.3: Configure Automatic Session Locking on Enterprise Assets",
        "metaphor": "Setting a timer to automatically lock the front door if it’s left open for too long.",
        "translation": "The family configures devices to automatically lock after a set period of inactivity, ensuring they’re secure even if someone forgets to lock them manually."
    },
    {
        "subcategory": "4.4: Implement and Manage a Firewall on Servers",
        "metaphor": "Building a fence around the house to keep out unwanted visitors.",
        "translation": "The family installs and manages a firewall on their servers to block unauthorized access and protect their systems from outside threats."
    },
    {
        "subcategory": "4.5: Implement and Manage a Firewall on End-User Devices",
        "metaphor": "Putting locks on all the doors and windows of the house.",
        "translation": "The family ensures that all personal devices have a firewall in place, blocking any unauthorized connections and keeping their data safe."
    },
    {
        "subcategory": "4.6: Securely Manage Enterprise Assets and Software",
        "metaphor": "Using a strong password to lock the main door of your house and only giving the key to trusted people.",
        "translation": "The family manages all their devices and software securely, using strong access controls and only allowing trusted individuals to make changes."
    },
    {
        "subcategory": "4.7: Manage Default Accounts on Enterprise Assets and Software",
        "metaphor": "Changing the default lock on the front door after moving into a new house.",
        "translation": "The family changes the default accounts and settings on all devices and software, ensuring they’re not vulnerable to attacks using default credentials."
    },
    {
        "subcategory": "4.8: Uninstall or Disable Unnecessary Services on Enterprise Assets and Software",
        "metaphor": "Turning off unused appliances in the house to save energy and prevent fire hazards.",
        "translation": "The family disables or uninstalls any unnecessary services on their devices and software to reduce potential vulnerabilities and improve security."
    },
    {
        "subcategory": "4.9: Configure Trusted DNS Servers on Enterprise Assets",
        "metaphor": "Using a trusted postal service to deliver important letters.",
        "translation": "The family configures their devices to use trusted DNS servers, ensuring their internet traffic is directed safely and reliably."
    },
    {
        "subcategory": "4.10: Enforce Automatic Device Lockout on Portable End-User Devices",
        "metaphor": "Automatically locking the car doors if someone tries to force them open too many times.",
        "translation": "The family configures their portable devices to automatically lock after a set number of failed login attempts, protecting them from unauthorized access."
    },
    {
        "subcategory": "4.11: Enforce Remote Wipe Capability on Portable End-User Devices",
        "metaphor": "Having the ability to erase all personal information from your phone if it gets lost or stolen.",
        "translation": "The family ensures they can remotely wipe data from their devices if they are lost or stolen, protecting sensitive information from being accessed."
    },
    {
        "subcategory": "4.12: Separate Enterprise Workspaces on Mobile End-User Devices",
        "metaphor": "Using a separate room in the house for work, keeping it distinct from personal spaces.",
        "translation": "The family separates work-related data and applications from personal ones on their mobile devices, ensuring that sensitive work information is kept secure and separate from personal use."
    },
    {
        "subcategory": "5.1: Establish and Maintain an Inventory of Accounts",
        "metaphor": "Keeping a list of everyone who has a key to your house.",
        "translation": "The family maintains a detailed inventory of all user and administrator accounts, ensuring they know exactly who has access to their systems and data."
    },
    {
        "subcategory": "5.2: Use Unique Passwords",
        "metaphor": "Using different keys for different doors in your house.",
        "translation": "The family uses unique passwords for all accounts to ensure that if one key (password) is compromised, it doesn’t unlock every door (account)."
    },
    {
        "subcategory": "5.3: Disable Dormant Accounts",
        "metaphor": "Changing the locks on the house after someone moves out.",
        "translation": "The family disables or deletes any accounts that are no longer in use, reducing the risk of unauthorized access."
    },
    {
        "subcategory": "5.4: Restrict Administrator Privileges to Dedicated Administrator Accounts",
        "metaphor": "Only giving the master key to trusted family members and not using it for everyday tasks.",
        "translation": "The family restricts administrator privileges to specific accounts used only for critical tasks, ensuring these high-level permissions aren’t used unnecessarily."
    },
    {
        "subcategory": "5.5: Establish and Maintain an Inventory of Service Accounts",
        "metaphor": "Keeping a list of all service providers who have access to your home for maintenance.",
        "translation": "The family maintains an inventory of service accounts, including details about who manages them and their purpose, ensuring that all accounts are authorized and monitored."
    },
    {
        "subcategory": "5.6: Centralize Account Management",
        "metaphor": "Managing all household keys from a single secure location.",
        "translation": "The family centralizes the management of all accounts, using a directory or identity service, to ensure consistent control and oversight."
    },
    {
        "subcategory": "6.1: Establish an Access Granting Process",
        "metaphor": "Creating a checklist before giving someone a key to your house.",
        "translation": "The family establishes a clear process for granting access to their home (enterprise assets) when a new member joins or their role changes, ensuring that only authorized individuals receive access."
    },
    {
        "subcategory": "6.2: Establish an Access Revoking Process",
        "metaphor": "Taking back the key when someone moves out.",
        "translation": "The family ensures that access is revoked immediately when someone no longer needs it, such as when they leave the household or change roles, to maintain security."
    },
    {
        "subcategory": "6.3: Require MFA for Externally-Exposed Applications",
        "metaphor": "Using a second lock on the front door for added security.",
        "translation": "The family requires a second layer of protection (MFA) for accessing applications that can be reached from outside the home, ensuring extra security against unauthorized access."
    },
    {
        "subcategory": "6.4: Require MFA for Remote Network Access",
        "metaphor": "Making sure the doorbell has a camera before letting someone in remotely.",
        "translation": "The family ensures that anyone trying to access the home network remotely must verify their identity through a second method (MFA) to prevent unauthorized entry."
    },
    {
        "subcategory": "6.5: Require MFA for Administrative Access",
        "metaphor": "Using a master key that requires both a key and a code to open the safe.",
        "translation": "The family requires multi-factor authentication for accounts with administrative privileges, adding an extra layer of security for the most critical access points."
    },
    {
        "subcategory": "6.6: Establish and Maintain an Inventory of Authentication and Authorization Systems",
        "metaphor": "Keeping a list of all locks and security systems in the house.",
        "translation": "The family maintains an inventory of all systems that manage access to the home, ensuring they are kept up-to-date and reviewed regularly."
    },
    {
        "subcategory": "6.7: Centralize Access Control",
        "metaphor": "Controlling all locks in the house from a central security panel.",
        "translation": "The family centralizes control of all access to their home, using a single system to manage who can enter and what they can access."
    },
    {
        "subcategory": "6.8: Define and Maintain Role-Based Access Control",
        "metaphor": "Deciding which family members get keys to different rooms based on their responsibilities.",
        "translation": "The family defines and regularly reviews who needs access to what in the home, ensuring that everyone only has the access necessary for their role."
    },
    {
        "subcategory": "7.1: Establish and Maintain a Vulnerability Management Process",
        "metaphor": "Regularly checking your home for cracks in the foundation.",
        "translation": "The family establishes and maintains a routine process for identifying and addressing weaknesses in their home (enterprise assets), ensuring that any potential vulnerabilities are promptly detected and fixed."
    },
    {
        "subcategory": "7.2: Establish and Maintain a Remediation Process",
        "metaphor": "Having a plan to fix cracks in the foundation as soon as they’re found.",
        "translation": "The family sets up a strategy to prioritize and address identified weaknesses in their home, making sure repairs are done quickly and effectively."
    },
    {
        "subcategory": "7.3: Perform Automated Operating System Patch Management",
        "metaphor": "Automatically updating your home’s security system whenever new features are available.",
        "translation": "The family ensures their home’s security (operating system) is always up to date by automating the process of applying important updates and patches."
    },
    {
        "subcategory": "7.4: Perform Automated Application Patch Management",
        "metaphor": "Automatically updating all the appliances in your home to ensure they’re running safely.",
        "translation": "The family keeps all their household devices and appliances up to date by automating the installation of updates and patches, ensuring everything functions safely and efficiently."
    },
    {
        "subcategory": "7.5: Perform Automated Vulnerability Scans of Internal Enterprise Assets",
        "metaphor": "Regularly inspecting the inside of your home to catch any hidden issues.",
        "translation": "The family regularly scans the inside of their home (internal enterprise assets) to identify any vulnerabilities that might not be immediately visible, ensuring any problems are caught early."
    },
    {
        "subcategory": "7.6: Perform Automated Vulnerability Scans of Externally-Exposed Enterprise Assets",
        "metaphor": "Checking the exterior of your home for any signs of damage or wear.",
        "translation": "The family regularly inspects the outside of their home (externally-exposed assets) to identify any vulnerabilities that could be exploited from the outside, ensuring the home remains secure."
    },
    {
        "subcategory": "7.7: Remediate Detected Vulnerabilities",
        "metaphor": "Fixing any cracks or issues found during your home inspections.",
        "translation": "The family takes immediate action to repair any vulnerabilities found during inspections, ensuring their home remains safe and secure."
    },
    {
        "subcategory": "8.1: Establish and Maintain an Audit Log Management Process",
        "metaphor": "Keeping a detailed diary of daily activities in your home.",
        "translation": "The family establishes a process for recording and reviewing important events and activities in their home (audit logs), ensuring they can track and understand what has happened over time."
    },
    {
        "subcategory": "8.2: Collect Audit Logs",
        "metaphor": "Recording everything that happens in the house to catch any unusual activity.",
        "translation": "The family collects detailed records of daily activities and events in their home (audit logs) to monitor for any suspicious or unexpected occurrences."
    },
    {
        "subcategory": "8.3: Ensure Adequate Audit Log Storage",
        "metaphor": "Keeping enough storage space in your home diary to record all important events.",
        "translation": "The family ensures they have sufficient space to store all their recorded activities and events (audit logs) over time."
    },
    {
        "subcategory": "8.4: Standardize Time Synchronization",
        "metaphor": "Making sure all the clocks in your home show the same time.",
        "translation": "The family standardizes timekeeping across all devices in their home (enterprise assets) to ensure all recorded events (audit logs) are accurately time-stamped and synchronized."
    },
    {
        "subcategory": "8.5: Collect Detailed Audit Logs",
        "metaphor": "Writing down everything that happens in your home, including who did what and when.",
        "translation": "The family collects detailed records of all important activities and events (audit logs), including who was involved and when they occurred, to help with any future investigations."
    },
    {
        "subcategory": "8.6: Collect DNS Query Audit Logs",
        "metaphor": "Keeping track of every time someone in your house looks up information online.",
        "translation": "The family records every online search or lookup (DNS queries) made from their home to monitor and review any potentially risky behavior."
    },
    {
        "subcategory": "8.7: Collect URL Request Audit Logs",
        "metaphor": "Recording every website visited by anyone in your house.",
        "translation": "The family keeps a log of all websites accessed from their home, allowing them to monitor and review online activity for any potential security risks."
    },
    {
        "subcategory": "8.8: Collect Command-Line Audit Logs",
        "metaphor": "Tracking every command given to your home’s smart devices.",
        "translation": "The family records every command or instruction issued to their smart devices, helping them monitor and review how these devices are being used."
    },
    {
        "subcategory": "8.9: Centralize Audit Logs",
        "metaphor": "Keeping all your home records in one central place for easy review.",
        "translation": "The family stores all their recorded activities and events (audit logs) in one central location, making it easier to monitor and analyze what’s happening in the home."
    },
    {
        "subcategory": "8.10: Retain Audit Logs",
        "metaphor": "Keeping your home diary for at least three months before deciding whether to archive or discard it.",
        "translation": "The family ensures that all recorded activities and events (audit logs) are kept for a minimum of 90 days, providing a sufficient historical record for any necessary reviews or investigations."
    },
    {
        "subcategory": "8.11: Conduct Audit Log Reviews",
        "metaphor": "Regularly reviewing your home diary to spot any unusual or concerning events.",
        "translation": "The family routinely reviews their recorded activities and events (audit logs) to identify any anomalies or incidents that could indicate a security issue."
    },
    {
        "subcategory": "8.12: Collect Service Provider Logs",
        "metaphor": "Keeping records of all services provided to your home, like repairs or deliveries.",
        "translation": "The family records all interactions with service providers, such as repair services or deliveries, to ensure all activities are tracked and can be reviewed if needed."
    },
    {
        "subcategory": "9.1: Ensure Use of Only Fully Supported Browsers and Email Clients",
        "metaphor": "Using only the latest, safest locks on your doors and windows.",
        "translation": "The family ensures they are using only the most current and secure tools (browsers and email clients) to protect their home from potential threats."
    },
    {
        "subcategory": "9.2: Use DNS Filtering Services",
        "metaphor": "Setting up a neighborhood watch to block unwanted visitors.",
        "translation": "The family uses filtering services to block access to dangerous or unwanted websites, just as they would prevent unknown or suspicious people from entering their neighborhood."
    },
    {
        "subcategory": "9.3: Maintain and Enforce Network-Based URL Filters",
        "metaphor": "Putting up a fence around your home to keep out potential threats.",
        "translation": "The family enforces rules that prevent access to potentially harmful or unapproved websites, similar to erecting a fence to keep unwanted elements out of their property."
    },
    {
        "subcategory": "9.4: Restrict Unnecessary or Unauthorized Browser and Email Client Extensions",
        "metaphor": "Removing unnecessary gadgets from your home that could be used to break in.",
        "translation": "The family removes or disables any unnecessary or unauthorized tools (browser and email extensions) that could be exploited to compromise their security."
    },
    {
        "subcategory": "9.5: Implement DMARC",
        "metaphor": "Installing caller ID to verify who is really calling your home.",
        "translation": "The family uses verification tools to ensure that any emails claiming to be from trusted sources are genuine, just as they would use caller ID to verify the identity of a phone caller."
    },
    {
        "subcategory": "9.6: Block Unnecessary File Types",
        "metaphor": "Not allowing suspicious packages to be delivered to your home.",
        "translation": "The family blocks the delivery of certain types of files (or packages) that could be harmful, ensuring that only safe and necessary items enter their home."
    },
    {
        "subcategory": "9.7: Deploy and Maintain Email Server Anti-Malware Protections",
        "metaphor": "Having a guard dog that checks all mail and packages before they enter your house.",
        "translation": "The family uses anti-malware tools to scan all emails and attachments for threats, just as a guard dog would inspect all deliveries for potential dangers."
    },
    {
        "subcategory": "10.1: Deploy and Maintain Anti-Malware Software",
        "metaphor": "Setting up a security system to detect and stop intruders.",
        "translation": "The family installs and maintains anti-malware software to detect and prevent malicious threats, just as they would install a home security system to protect against break-ins."
    },
    {
        "subcategory": "10.2: Configure Automatic Anti-Malware Signature Updates",
        "metaphor": "Regularly updating your security system to recognize new types of threats.",
        "translation": "The family ensures their anti-malware software is always up to date by configuring automatic updates, just as they would update their home security system to detect new types of intruders."
    },
    {
        "subcategory": "10.3: Disable Autorun and Autoplay for Removable Media",
        "metaphor": "Preventing anyone from automatically opening your door without your permission.",
        "translation": "The family disables automatic functions that could allow threats to enter their home without their knowledge, just as they would prevent doors from being opened automatically."
    },
    {
        "subcategory": "10.4: Configure Automatic Anti-Malware Scanning of Removable Media",
        "metaphor": "Inspecting every package that comes into your home for hidden dangers.",
        "translation": "The family sets up their anti-malware software to automatically scan any removable media for threats, just as they would check every package delivered to their home."
    },
    {
        "subcategory": "10.5: Enable Anti-Exploitation Features",
        "metaphor": "Adding extra locks to doors to prevent burglars from picking them.",
        "translation": "The family enables features that prevent the exploitation of vulnerabilities, just as they would add extra locks to their doors to make it harder for burglars to break in."
    },
    {
        "subcategory": "10.6: Centrally Manage Anti-Malware Software",
        "metaphor": "Having a central control panel for all the locks and alarms in your home.",
        "translation": "The family manages all their anti-malware protections from a central location, ensuring that every device in the home is protected and monitored efficiently."
    },
    {
        "subcategory": "10.7: Use Behavior-Based Anti-Malware Software",
        "metaphor": "Training your security system to recognize suspicious behavior and take action.",
        "translation": "The family uses anti-malware software that can detect and respond to suspicious behavior, just as they would train a security system to react to unusual activity in and around their home."
    },
    {
        "subcategory": "11.1: Establish and Maintain a Data Recovery Process",
        "metaphor": "Creating a plan to rebuild your home in case of a disaster.",
        "translation": "The family establishes a process to recover important data in case of a loss, just as they would create a plan to rebuild their home after a disaster."
    },
    {
        "subcategory": "11.2: Perform Automated Backups",
        "metaphor": "Regularly making copies of your family photos and important documents and storing them in a safe place.",
        "translation": "The family ensures that backups of their important data are created automatically and regularly, so they can restore their information if something goes wrong."
    },
    {
        "subcategory": "11.3: Protect Recovery Data",
        "metaphor": "Storing backup copies of important documents in a fireproof safe.",
        "translation": "The family protects their backup data with the same level of security as the original data, ensuring that it is safe from harm and accessible when needed."
    },
    {
        "subcategory": "11.4: Establish and Maintain an Isolated Instance of Recovery Data",
        "metaphor": "Keeping a backup set of keys in a locked box away from your house.",
        "translation": "The family maintains a separate, secure instance of their recovery data, just as they would keep a backup set of keys in a secure location away from their home."
    },
    {
        "subcategory": "11.5: Test Data Recovery",
        "metaphor": "Regularly checking that your spare keys still work.",
        "translation": "The family regularly tests their backup and recovery processes to ensure that they can successfully restore their data when needed, just as they would check that their spare keys still work."
    },
    {
        "subcategory": "12.1: Ensure Network Infrastructure is Up-to-Date",
        "metaphor": "Regularly inspecting and upgrading the wiring in your home.",
        "translation": "The family ensures that their network infrastructure is always up-to-date by regularly reviewing and applying the latest updates, just as they would inspect and upgrade the wiring in their home to prevent electrical issues."
    },
    {
        "subcategory": "12.2: Establish and Maintain a Secure Network Architecture",
        "metaphor": "Designing your home layout to maximize safety and security.",
        "translation": "The family establishes and maintains a secure design for their network, ensuring that the structure supports safe and secure operations, just as they would design their home layout with security in mind."
    },
    {
        "subcategory": "12.3: Securely Manage Network Infrastructure",
        "metaphor": "Locking the control panel that manages your home’s security system.",
        "translation": "The family manages their network infrastructure securely, ensuring that only authorized individuals have access to make changes, just as they would lock the control panel for their home’s security system."
    },
    {
        "subcategory": "12.4: Establish and Maintain Architecture Diagram(s)",
        "metaphor": "Drawing a detailed map of your home’s layout, including wiring and plumbing.",
        "translation": "The family maintains detailed diagrams and documentation of their network’s architecture, ensuring they have a clear understanding of how everything is connected, just as they would have a map of their home’s layout."
    },
    {
        "subcategory": "12.5: Centralize Network Authentication, Authorization, and Auditing (AAA)",
        "metaphor": "Using a master key to control access to all the locks in your house.",
        "translation": "The family centralizes the management of network access and controls, ensuring that all authentication and authorization are managed from a single point, just as they would use a master key to manage all the locks in their home."
    },
    {
        "subcategory": "12.6: Use Secure Network Management and Communication Protocols",
        "metaphor": "Communicating with family members using encrypted messages that only they can understand.",
        "translation": "The family uses secure communication protocols to manage their network and ensure that all data exchanges are protected, just as they would use encrypted messages to communicate securely with family members."
    },
    {
        "subcategory": "12.7: Ensure Remote Devices Utilize a VPN and are Connecting to an Enterprise’s AAA Infrastructure",
        "metaphor": "Ensuring that any remote workers or visitors check in through a secure gate before entering your home.",
        "translation": "The family ensures that any devices connecting remotely to their network go through a secure verification process, similar to how visitors must check in at a secure gate before entering the property."
    },
    {
        "subcategory": "12.8: Establish and Maintain Dedicated Computing Resources for All Administrative Work",
        "metaphor": "Having a separate, secure office for important family documents and decisions.",
        "translation": "The family uses dedicated, secure devices for sensitive administrative tasks, just as they would keep important documents and decisions confined to a secure office in the home."
    },
    {
        "subcategory": "13.1: Centralize Security Event Alerting",
        "metaphor": "Setting up a central alarm system that alerts you to any unusual activity in the house.",
        "translation": "The family centralizes all security alerts to ensure they are notified immediately of any suspicious activity, just as they would use a central alarm system to monitor their home."
    },
    {
        "subcategory": "13.2: Deploy a Host-Based Intrusion Detection Solution",
        "metaphor": "Installing motion detectors in each room of your house.",
        "translation": "The family installs intrusion detection software on individual devices to monitor for unusual activity, similar to how they would use motion detectors to detect movement in each room."
    },
    {
        "subcategory": "13.3: Deploy a Network Intrusion Detection Solution",
        "metaphor": "Installing security cameras around the perimeter of your home.",
        "translation": "The family uses network-based intrusion detection to monitor for threats across the entire network, just as they would install security cameras to watch the perimeter of their home."
    },
    {
        "subcategory": "13.4: Perform Traffic Filtering Between Network Segments",
        "metaphor": "Using different keys for different rooms in your house to control who can access them.",
        "translation": "The family filters network traffic between different segments to control access, similar to how they would use different keys to restrict access to certain rooms in the house."
    },
    {
        "subcategory": "13.5: Manage Access Control for Remote Assets",
        "metaphor": "Only allowing family members with proper ID to access certain parts of the house when they're away.",
        "translation": "The family ensures that only authorized devices can access the network remotely, similar to requiring proper identification for family members to access restricted areas when they're not home."
    },
    {
        "subcategory": "13.6: Collect Network Traffic Flow Logs",
        "metaphor": "Keeping a detailed record of who comes and goes from your house.",
        "translation": "The family logs network traffic to monitor and review activities, just as they would keep a record of everyone who enters and exits their home."
    },
    {
        "subcategory": "13.7: Deploy a Host-Based Intrusion Prevention Solution",
        "metaphor": "Setting up automatic locks on your doors that engage if someone tries to break in.",
        "translation": "The family uses intrusion prevention tools on their devices to automatically block malicious activities, similar to having doors that lock automatically if someone attempts to break in."
    },
    {
        "subcategory": "13.8: Deploy a Network Intrusion Prevention Solution",
        "metaphor": "Installing a security fence that stops intruders before they reach your house.",
        "translation": "The family uses network-based intrusion prevention to block threats before they can affect the network, just as they would install a security fence to stop intruders before they reach their home."
    },
    {
        "subcategory": "13.9: Deploy Port-Level Access Control",
        "metaphor": "Locking certain doors and windows to prevent unauthorized entry.",
        "translation": "The family controls access to specific network ports to prevent unauthorized access, similar to locking certain doors and windows in their home."
    },
    {
        "subcategory": "13.10: Perform Application Layer Filtering",
        "metaphor": "Installing a screen door to filter out bugs while still letting in fresh air.",
        "translation": "The family uses application layer filtering to block harmful content while allowing safe and necessary traffic through, just as a screen door keeps bugs out while letting fresh air in."
    },
    {
        "subcategory": "13.11: Tune Security Event Alerting Thresholds",
        "metaphor": "Adjusting your home security system to reduce false alarms while still catching real threats.",
        "translation": "The family fine-tunes their security alert system to minimize false positives and ensure real threats are detected, just as they would adjust their home security system to reduce unnecessary alarms."
    },
    {
        "subcategory": "14.1: Establish and Maintain a Security Awareness Program",
        "metaphor": "Teaching your family the importance of locking doors and windows before leaving the house.",
        "translation": "The family establishes a program to educate everyone about security practices, ensuring they understand the importance of protecting their home, just as they would teach them to lock up before leaving."
    },
    {
        "subcategory": "14.2: Train Workforce Members to Recognize Social Engineering Attacks",
        "metaphor": "Teaching your family to recognize when someone is pretending to be a friend to gain access to your home.",
        "translation": "The family trains everyone to recognize and respond to social engineering tactics, just as they would teach them to spot someone pretending to be a friend to gain access to their house."
    },
    {
        "subcategory": "14.3: Train Workforce Members on Authentication Best Practices",
        "metaphor": "Teaching your family to use strong, unique keys for each door in the house.",
        "translation": "The family trains everyone on the best practices for creating and managing secure passwords and authentication methods, just as they would ensure each door in the house has a strong, unique key."
    },
    {
        "subcategory": "14.4: Train Workforce on Data Handling Best Practices",
        "metaphor": "Teaching your family how to safely store and dispose of important documents.",
        "translation": "The family educates everyone on how to handle sensitive data properly, including storage and disposal, just as they would teach them how to manage important documents securely."
    },
    {
        "subcategory": "14.5: Train Workforce Members on Causes of Unintentional Data Exposure",
        "metaphor": "Making sure everyone in the house knows not to leave the front door open by accident.",
        "translation": "The family trains everyone to avoid unintentional data exposure by understanding the risks and taking precautions, just as they would ensure no one leaves the front door open by mistake."
    },
    {
        "subcategory": "14.6: Train Workforce Members on Recognizing and Reporting Security Incidents",
        "metaphor": "Teaching your family how to recognize a break-in and report it immediately.",
        "translation": "The family trains everyone to recognize signs of a security incident and report it promptly, just as they would teach them to notice and report a break-in."
    },
    {
        "subcategory": "14.7: Train Workforce on How to Identify and Report if Their Enterprise Assets are Missing Security Updates",
        "metaphor": "Teaching your family to notice if the home security system isn’t working properly and report it.",
        "translation": "The family ensures everyone knows how to check for and report missing updates on their devices, just as they would ensure the home security system is functioning correctly."
    },
    {
        "subcategory": "14.8: Train Workforce on the Dangers of Connecting to and Transmitting Enterprise Data Over Insecure Networks",
        "metaphor": "Warning your family not to share sensitive information over a public phone line.",
        "translation": "The family educates everyone about the dangers of using insecure networks to transmit sensitive data, just as they would warn against sharing private information over a public phone line."
    },
    {
        "subcategory": "14.9: Conduct Role-Specific Security Awareness and Skills Training",
        "metaphor": "Teaching different family members specific skills, like how to manage the alarm system or handle emergency repairs.",
        "translation": "The family provides specialized security training to each member based on their role and responsibilities, similar to how they would teach specific family members to handle the alarm system or emergency repairs."
    },
    {
        "subcategory": "15.1: Establish and Maintain an Inventory of Service Providers",
        "metaphor": "Keeping a list of all the trusted service providers you use for home repairs.",
        "translation": "The family maintains a detailed inventory of all service providers who have access to their home, just as they would keep a list of trusted repair services."
    },
    {
        "subcategory": "15.2: Establish and Maintain a Service Provider Management Policy",
        "metaphor": "Setting rules for how and when service providers can access your home.",
        "translation": "The family creates and maintains a policy that outlines how service providers should be managed and monitored, just as they would establish rules for when and how repairmen can enter their home."
    },
    {
        "subcategory": "15.4: Ensure Service Provider Contracts Include Security Requirements",
        "metaphor": "Making sure your contractor agrees to follow your house rules before starting any work.",
        "translation": "The family ensures that all agreements with service providers include specific security requirements, just as they would make sure a contractor agrees to follow the house rules before starting any work."
    },
    {
        "subcategory": "15.5: Assess Service Providers",
        "metaphor": "Checking references and reviews before hiring someone to work on your house.",
        "translation": "The family regularly assesses their service providers to ensure they meet the necessary standards, just as they would check references and reviews before hiring someone to work on their home."
    },
    {
        "subcategory": "15.6: Monitor Service Providers",
        "metaphor": "Keeping an eye on workers while they’re doing repairs in your home.",
        "translation": "The family monitors the activities of their service providers to ensure they continue to meet expectations, just as they would supervise workers while they’re doing repairs."
    },
    {
        "subcategory": "15.7: Securely Decommission Service Providers",
        "metaphor": "Changing the locks after a service provider finishes work at your house.",
        "translation": "The family ensures that all access is securely removed and any related information is disposed of properly when a service provider is no longer needed, just as they would change the locks after a contractor finishes work."
    },
    {
        "subcategory": "16.1: Establish and Maintain a Secure Application Development Process",
        "metaphor": "Creating a blueprint and building plan to ensure your new house is safe from the start.",
        "translation": "The family establishes a secure process for developing new software applications, just as they would carefully plan and build a house to ensure it’s safe from the ground up."
    },
    {
        "subcategory": "16.2: Establish and Maintain a Process to Accept and Address Software Vulnerabilities",
        "metaphor": "Having a process for identifying and fixing weak spots in your home’s security.",
        "translation": "The family maintains a process to identify and address vulnerabilities in their software, just as they would have a plan to identify and fix weak spots in their home’s security."
    },
    {
        "subcategory": "16.3: Perform Root Cause Analysis on Security Vulnerabilities",
        "metaphor": "Finding out why a door was easy to break into and fixing the underlying issue, not just the door itself.",
        "translation": "The family investigates the root causes of security vulnerabilities to prevent them from recurring, just as they would figure out why a door was easily broken into and fix the underlying problem."
    },
    {
        "subcategory": "16.4: Establish and Manage an Inventory of Third-Party Software Components",
        "metaphor": "Keeping a list of all the materials used to build your house and checking their quality regularly.",
        "translation": "The family maintains an inventory of all third-party software components they use and regularly checks their quality, just as they would keep track of all building materials used in their home."
    },
    {
        "subcategory": "16.5: Use Up-to-Date and Trusted Third-Party Software Components",
        "metaphor": "Only using high-quality, up-to-date materials when making home improvements.",
        "translation": "The family ensures that all third-party software components are trustworthy and up-to-date, just as they would only use high-quality materials for home improvements."
    },
    {
        "subcategory": "16.6: Establish and Maintain a Severity Rating System and Process for Application Vulnerabilities",
        "metaphor": "Ranking home repairs by importance and urgency.",
        "translation": "The family creates a system to prioritize the fixing of software vulnerabilities, similar to how they would rank home repairs by importance and urgency."
    },
    {
        "subcategory": "16.7: Use Standard Hardening Configuration Templates for Application Infrastructure",
        "metaphor": "Following a proven construction plan to ensure your home is sturdy and secure.",
        "translation": "The family uses standardized templates to secure their application infrastructure, just as they would follow a proven construction plan to build a sturdy and secure home."
    },
    {
        "subcategory": "16.8: Separate Production and Non-Production Systems",
        "metaphor": "Keeping your toolshed separate from your living space.",
        "translation": "The family keeps their production and non-production environments separate, just as they would keep their toolshed separate from their living areas."
    },
    {
        "subcategory": "16.9: Train Developers in Application Security Concepts and Secure Coding",
        "metaphor": "Teaching your builders the best practices for constructing a safe and secure home.",
        "translation": "The family ensures that their developers are trained in secure coding and application security, just as they would teach builders the best practices for constructing a safe home."
    },
    {
        "subcategory": "16.10: Apply Secure Design Principles in Application Architectures",
        "metaphor": "Designing your home with safety in mind, like placing fire extinguishers and emergency exits in key locations.",
        "translation": "The family applies secure design principles to their software architectures, just as they would design their home to include safety features like fire extinguishers and emergency exits."
    },
    {
        "subcategory": "16.11: Leverage Vetted Modules or Services for Application Security Components",
        "metaphor": "Using pre-approved, reliable materials when building your home to ensure it’s safe.",
        "translation": "The family uses trusted and vetted modules for critical security components in their applications, just as they would use reliable materials when building their home."
    },
    {
        "subcategory": "16.12: Implement Code-Level Security Checks",
        "metaphor": "Inspecting every brick as your house is built to ensure none are cracked or weak.",
        "translation": "The family uses code-level security checks throughout the development process to catch vulnerabilities early, just as they would inspect every brick during construction to ensure quality."
    },
    {
        "subcategory": "16.13: Conduct Application Penetration Testing",
        "metaphor": "Hiring a security expert to try breaking into your home to find weak points.",
        "translation": "The family conducts penetration testing on their applications to identify vulnerabilities, just as they would hire a security expert to test the security of their home."
    },
    {
        "subcategory": "16.14: Conduct Threat Modeling",
        "metaphor": "Planning for potential break-ins by identifying the weakest points in your home’s layout.",
        "translation": "The family conducts threat modeling to identify and mitigate potential risks in their software designs, just as they would plan for possible break-ins by identifying weak points in their home’s layout."
    },
    {
        "subcategory": "17.1: Designate Personnel to Manage Incident Handling",
        "metaphor": "Assigning a family member to be in charge during an emergency.",
        "translation": "The family designates specific individuals to manage incident response, just as they would assign someone to take charge during an emergency."
    },
    {
        "subcategory": "17.2: Establish and Maintain Contact Information for Reporting Security Incidents",
        "metaphor": "Keeping a list of emergency contacts on the fridge for everyone to see.",
        "translation": "The family keeps an updated list of contacts for reporting security incidents, just as they would maintain a list of emergency contacts in a visible place."
    },
    {
        "subcategory": "17.3: Establish and Maintain an Enterprise Process for Reporting Incidents",
        "metaphor": "Setting up a family plan for how to report emergencies, like a fire or break-in.",
        "translation": "The family establishes a clear process for reporting security incidents within the organization, just as they would create a plan for reporting emergencies at home."
    },
    {
        "subcategory": "17.4: Establish and Maintain an Incident Response Process",
        "metaphor": "Creating a step-by-step plan for how to respond if there’s a break-in at your house.",
        "translation": "The family establishes a detailed process for responding to security incidents, just as they would create a plan for how to handle a break-in."
    },
    {
        "subcategory": "17.5: Assign Key Roles and Responsibilities",
        "metaphor": "Assigning each family member a specific role during an emergency, like who calls the police or checks on the kids.",
        "translation": "The family assigns specific roles and responsibilities for responding to incidents, just as they would decide who does what during a home emergency."
    },
    {
        "subcategory": "17.6: Define Mechanisms for Communicating During Incident Response",
        "metaphor": "Agreeing on how to communicate with each other during an emergency, like using walkie-talkies or a group chat.",
        "translation": "The family decides on the best ways to communicate during an incident, just as they would choose how to stay in touch during a home emergency."
    },
    {
        "subcategory": "17.7: Conduct Routine Incident Response Exercises",
        "metaphor": "Practicing fire drills with your family to make sure everyone knows what to do.",
        "translation": "The family regularly practices incident response scenarios to ensure everyone knows their role, just as they would practice fire drills at home."
    },
    {
        "subcategory": "17.8: Conduct Post-Incident Reviews",
        "metaphor": "Talking about what went right and wrong after an emergency drill to improve next time.",
        "translation": "The family discusses what worked and what didn’t after an incident, just as they would review the outcomes of an emergency drill to improve their response for the future."
    },
    {
        "subcategory": "17.9: Establish and Maintain Security Incident Thresholds",
        "metaphor": "Setting criteria for when to call the police versus when to handle a situation yourself.",
        "translation": "The family establishes clear guidelines to determine when a security issue is severe enough to escalate, just as they would decide when an issue at home requires outside help versus handling it themselves."
    },
    {
        "subcategory": "18.1: Establish and Maintain a Penetration Testing Program",
        "metaphor": "Regularly hiring a security expert to try breaking into your house to find weak spots.",
        "translation": "The family sets up a routine for testing the security of their systems by simulating attacks, just as they would regularly hire a security expert to test their home’s defenses."
    },
    {
        "subcategory": "18.2: Perform Periodic External Penetration Tests",
        "metaphor": "Getting an outsider to try and break into your house to see if your security measures hold up.",
        "translation": "The family conducts regular penetration tests from an external perspective to uncover vulnerabilities, just as they would have an outsider test their home security."
    },
    {
        "subcategory": "18.3: Remediate Penetration Test Findings",
        "metaphor": "Fixing any weak spots found in your home’s defenses after a security test.",
        "translation": "The family addresses any vulnerabilities discovered during penetration testing, just as they would repair weak spots in their home’s security after a test."
    },
    {
        "subcategory": "18.4: Validate Security Measures",
        "metaphor": "Double-checking that all the locks and alarms work after making improvements to your home’s security.",
        "translation": "The family verifies that all security measures are effective after changes are made, just as they would ensure all locks and alarms are functioning properly after an upgrade."
    },
    {
        "subcategory": "18.5: Perform Periodic Internal Penetration Tests",
        "metaphor": "Testing your home security from the inside to make sure everything is secure even if someone gets in.",
        "translation": "The family regularly tests their security measures from within the organization to ensure internal defenses are strong, just as they would check their home’s security from the inside."
    }
]


//API
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const apiQuery = urlParams.get('query');

    if (apiQuery) {
        searchByAPI(apiQuery);
    }
});

function searchByAPI(query) {
    const result = controlData.find(item => item.subcategory.toLowerCase() === query.toLowerCase());

    if (result) {
        displayAPIResult(result);
    } else {
        document.body.textContent = `No results found for query: ${query}`;
    }
}

function displayAPIResult(result) {
    const resultContainer = document.createElement('div');

    const subcategoryElement = document.createElement('h2');
    subcategoryElement.textContent = result.subcategory;
    resultContainer.appendChild(subcategoryElement);

    const metaphorElement = document.createElement('p');
    metaphorElement.textContent = `Metaphor: ${result.metaphor}`;
    resultContainer.appendChild(metaphorElement);

    const translationElement = document.createElement('p');
    translationElement.textContent = `Translation: ${result.translation}`;
    resultContainer.appendChild(translationElement);

    document.body.appendChild(resultContainer);
}

// Sanitize user input to prevent XSS
function sanitizeHTML(str) {
    var temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// Get metaphor and translation of the entered control
function getMetaphorTranslation() {
    const control = sanitizeHTML(document.getElementById('searchInput').value.trim().toUpperCase());
    if (!control || !isValidInput(control)) {
        return;
    }
    const results = findMatchingControls(control);
    console.log("Search results:", results);  // Debugging line
    displayResults(control, results);
}

// Validate input to allow only alphanumeric characters, spaces, and hyphens
function isValidInput(input) {
    const regex = /^[a-zA-Z0-9\s\-]+$/;
    return regex.test(input);
}

// Find matching controls with relaxed criteria for non-exact matches
function findMatchingControls(query) {
    const results = [];
    const lowerCaseQuery = query.toLowerCase();
    
    for (const control of controlsData) {
        console.log("Checking control:", control);  // Debugging line
        const subcategoryLower = control.subcategory.toLowerCase();
        const metaphorLower = control.metaphor.toLowerCase();
        const translationLower = control.translation.toLowerCase();
        
        if (
            subcategoryLower.includes(lowerCaseQuery) ||
            metaphorLower.includes(lowerCaseQuery) ||
            translationLower.includes(lowerCaseQuery)
        ) {
            results.push(control);
        }
    }
    
    return results;
}

// Display search results
function displayResults(query, results) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = ''; // Clear any previous results

    if (results.length === 0) {
        const noMatch = document.createElement('p');
        noMatch.textContent = `No matches found for ${query}.`;
        resultDiv.appendChild(noMatch);
        return;
    }

    results.forEach(result => {
        const resultContainer = document.createElement('div');

        const controlElement = document.createElement('h2');
        controlElement.textContent = result.subcategory;
        resultContainer.appendChild(controlElement);

        const metaphorElement = document.createElement('p');
        metaphorElement.textContent = `Metaphor: ${result.metaphor}`;
        resultContainer.appendChild(metaphorElement);
        
        const translationElement = document.createElement('p');
        translationElement.textContent = `Translation: ${result.translation}`;
        resultContainer.appendChild(translationElement);

        resultDiv.appendChild(resultContainer);
    });
}

// Display all controls
function displayAllControls() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = ''; // Clear any previous results

    controlsData.forEach(result => {
        const resultContainer = document.createElement('div');

        const controlElement = document.createElement('h2');
        controlElement.textContent = result.subcategory;
        resultContainer.appendChild(controlElement);

        const metaphorElement = document.createElement('p');
        metaphorElement.textContent = `Metaphor: ${result.metaphor}`;
        resultContainer.appendChild(metaphorElement);

        const translationElement = document.createElement('p');
        translationElement.textContent = `Translation: ${result.translation}`;
        resultContainer.appendChild(translationElement);

        resultDiv.appendChild(resultContainer);
    });
}

// Trigger search on Enter key press
function checkEnter(event) {
    if (event.key === 'Enter') {
        getMetaphorTranslation();
    }
}

// Event listeners for search and displaying all controls
document.getElementById('searchInput').addEventListener('keypress', checkEnter);
document.getElementById('searchButton').addEventListener('click', getMetaphorTranslation);
document.getElementById('allControlsButton').addEventListener('click', displayAllControls);

// Display Soup of the Day
function displaySoupOfTheDay() {
    const today = new Date().toISOString().slice(0, 10);
    let soupOfTheDay = JSON.parse(localStorage.getItem('soupOfTheDay'));

    // Check if there's no Soup of the Day or if the stored date isn't today
    if (!soupOfTheDay || soupOfTheDay.date !== today) {
        const controls = Object.keys(controlsData);
        const randomControl = controls[Math.floor(Math.random() * controls.length)];
        soupOfTheDay = {
            date: today,
            subcategory: controlsData[randomControl].subcategory,
            metaphor: controlsData[randomControl].metaphor,
            translation: controlsData[randomControl].translation
        };
        localStorage.setItem('soupOfTheDay', JSON.stringify(soupOfTheDay));
    }

    const soupControl = document.getElementById('soupControl');

    // Clear any previous content
    soupControl.textContent = '';

    // Create the elements safely
    const strongElement = document.createElement('strong');
    strongElement.textContent = soupOfTheDay.subcategory;
    soupControl.appendChild(strongElement);

    // Display the metaphor
    const metaphorElement = document.createElement('p');
    metaphorElement.textContent = `Metaphor: ${soupOfTheDay.metaphor}`;
    soupControl.appendChild(metaphorElement);

    // Display the translation
    const translationElement = document.createElement('p');
    translationElement.textContent = `Translation: ${soupOfTheDay.translation}`;
    soupControl.appendChild(translationElement);
}


// Load the controls data when the page loads
window.onload = displaySoupOfTheDay;
