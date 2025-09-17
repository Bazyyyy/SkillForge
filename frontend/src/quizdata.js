export const questions = [
  {
    question: "Ein Unternehmen plant, ein Amazon Snowball Edge-Gerät zu verwenden, um Dateien in die AWS Cloud zu übertragen.\nWelche Aktivitäten im Zusammenhang mit einem Snowball Edge-Gerät sind für das Unternehmen kostenlos verfügbar?",
    options: [
      "A. Nutzung des Snowball Edge-Geräts für einen Zeitraum von 10 Tagen",
      "B. Übertragung von Daten aus Amazon S3 auf das Snowball Edge-Gerät",
      "C. Übertragung von Daten vom Snowball Edge-Gerät in Amazon S3",
      "D. Tägliche Nutzung des Snowball Edge-Geräts nach 10 Tagen"
    ],
    answer: "C. Übertragung von Daten vom Snowball Edge-Gerät in Amazon S3"
  },
  {
    question: "Ein Unternehmen hat Anwendungen auf Amazon EC2-Instanzen bereitgestellt. Das Unternehmen muss Anwendungsschwachstellen bewerten und Infrastruktur-Bereitstellungen identifizieren, die nicht den Best Practices entsprechen.\nWelchen AWS-Dienst kann das Unternehmen verwenden, um diese Anforderungen zu erfüllen?",
    options: [
      "A. AWS Trusted Advisor",
      "B. Amazon Inspector",
      "C. AWS Config",
      "D. Amazon GuardDuty"
    ],
    answer: "B. Amazon Inspector"
  },
  {
    question: "Ein Unternehmen hat eine zentrale Benutzergruppe mit großem Speicherbedarf, der den verfügbaren Speicherplatz vor Ort überschritten hat. Das Unternehmen möchte die Dateispeicherkapazitäten für diese Gruppe erweitern und gleichzeitig die Vorteile lokaler Performance beibehalten.\nWas ist die betrieblich effizienteste AWS-Lösung für dieses Szenario?",
    options: [
      "A. Erstellen eines Amazon S3-Buckets für jeden Benutzer. Jeden Bucket mit einem S3-Dateisystem-Mounting-Tool einbinden.",
      "B. Konfigurieren und Bereitstellen eines AWS Storage Gateway File Gateway. Jede Workstation des Benutzers mit dem File Gateway verbinden.",
      "C. Arbeitsumgebung jedes Benutzers zu Amazon WorkSpaces migrieren. Ein Amazon WorkDocs-Konto für jeden Benutzer einrichten.",
      "D. Eine Amazon EC2-Instanz bereitstellen und ein Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS-Volume anhängen. Das EBS-Volume direkt mit den Benutzern teilen."
    ],
    answer: "B. Konfigurieren und Bereitstellen eines AWS Storage Gateway File Gateway. Jede Workstation des Benutzers mit dem File Gateway verbinden."
  },
  {
    question: "Gemäß den Sicherheits-Best Practices: Wie sollte einer Amazon EC2-Instanz Zugriff auf einen Amazon S3-Bucket gewährt werden?",
    options: [
      "A. IAM-Benutzerschlüssel direkt in den Anwendungscode schreiben und die Datei hochladen.",
      "B. Die IAM-Benutzerschlüssel in einer Textdatei auf der EC2-Instanz speichern, auslesen und dann die Datei hochladen.",
      "C. Die EC2-Instanz eine Rolle übernehmen lassen, um die Berechtigungen zum Hochladen der Datei zu erhalten.",
      "D. Die S3-Bucket-Richtlinie so ändern, dass jeder Dienst jederzeit hochladen kann."
    ],
    answer: "C. Die EC2-Instanz eine Rolle übernehmen lassen, um die Berechtigungen zum Hochladen der Datei zu erhalten."
  },
  {
    question: "Welche Option ist eine Kundenverantwortung bei der Nutzung von Amazon DynamoDB im Rahmen des AWS Shared Responsibility Model?",
    options: [
      "A. Physische Sicherheit von DynamoDB",
      "B. Patchen von DynamoDB",
      "C. Zugriff auf DynamoDB-Tabellen",
      "D. Verschlüsselung von Daten im Ruhezustand in DynamoDB"
    ],
    answer: "C. Zugriff auf DynamoDB-Tabellen"
  },
  {
    question: "Welche Option ist eine Perspektive, die grundlegende Fähigkeiten des AWS Cloud Adoption Framework (AWS CAF) umfasst?",
    options: [
      "A. Nachhaltigkeit",
      "B. Performance-Effizienz",
      "C. Governance",
      "D. Zuverlässigkeit"
    ],
    answer: "C. Governance"
  },
  {
    question: "Ein Unternehmen betreibt und verwaltet seine eigene Docker-Umgebung auf Amazon EC2-Instanzen. Es sucht nach einer Alternative, um Clustergröße, Planung und Wartung der Umgebung zu verwalten.\nWelcher AWS-Dienst erfüllt diese Anforderungen?",
    options: [
      "A. AWS Lambda",
      "B. Amazon RDS",
      "C. AWS Fargate",
      "D. Amazon Athena"
    ],
    answer: "C. AWS Fargate"
  },
  {
    question: "Ein Unternehmen möchte eine NoSQL-Datenbank auf Amazon EC2-Instanzen betreiben.\nWelche Aufgabe liegt in der Verantwortung von AWS in diesem Szenario?",
    options: [
      "A. Aktualisieren des Gastbetriebssystems der EC2-Instanzen",
      "B. Sicherstellen der hohen Verfügbarkeit auf Datenbankebene",
      "C. Patchen der physischen Infrastruktur, auf der die EC2-Instanzen laufen",
      "D. Konfigurieren der Firewall der Sicherheitsgruppe"
    ],
    answer: "C. Patchen der physischen Infrastruktur, auf der die EC2-Instanzen laufen"
  },
  {
    question: "Welche AWS-Dienste oder -Tools können Möglichkeiten zur Anpassung der Größe von Amazon EC2-Instanzen identifizieren? (Wählen Sie zwei.)",
    options: [
      "A. AWS Cost Explorer",
      "B. AWS Billing Conductor",
      "C. Amazon CodeGuru",
      "D. Amazon SageMaker",
      "E. AWS Compute Optimizer"
    ],
    answer: ["A. AWS Cost Explorer", "E. AWS Compute Optimizer"]
  },
  {
    question: "Welche der folgenden Vorteile bietet AWS Trusted Advisor? (Wählen Sie zwei.)",
    options: [
      "A. Bereitstellung von leistungsstarkem Container-Orchestrierungsservice",
      "B. Erstellen und Rotieren von Verschlüsselungsschlüsseln",
      "C. Erkennen von ungenutzten Ressourcen zur Kosteneinsparung",
      "D. Verbesserung der Sicherheit durch proaktive Überwachung der AWS-Umgebung",
      "E. Durchsetzung von Tagging-Richtlinien für AWS-Ressourcen"
    ],
    answer: ["C. Erkennen von ungenutzten Ressourcen zur Kosteneinsparung", "D. Verbesserung der Sicherheit durch proaktive Überwachung der AWS-Umgebung"]
  },
  {
    question: "Welchen Vorteil haben Benutzer, wenn sie lokale Workloads in die AWS Cloud verschieben?",
    options: [
      "A. Beseitigung der Kosten für den Betrieb und die Wartung von Rechenzentren",
      "B. Preisnachlässe, die identisch mit Rabatten von Hardwareanbietern sind",
      "C. Verlagerung aller betrieblichen Kontrollen auf AWS",
      "D. Beseitigung der Betriebskosten"
    ],
    answer: "A. Beseitigung der Kosten für den Betrieb und die Wartung von Rechenzentren"
  },
  {
    question: "Ein Unternehmen möchte bereitgestellte IT-Dienste verwalten und seine Infrastruktur-als-Code (IaC)-Vorlagen steuern.\nWelcher AWS-Dienst erfüllt diese Anforderung?",
    options: [
      "A. AWS Resource Explorer",
      "B. AWS Service Catalog",
      "C. AWS Organizations",
      "D. AWS Systems Manager"
    ],
    answer: "B. AWS Service Catalog"
  },
  {
    question: "Welcher AWS-Dienst oder welches Tool hilft Benutzern dabei, Ausgaben und Nutzung im Zeitverlauf zu visualisieren, zu verstehen und zu verwalten?",
    options: [
      "A. AWS Organizations",
      "B. AWS Pricing Calculator",
      "C. AWS Cost Explorer",
      "D. AWS Service Catalog"
    ],
    answer: "C. AWS Cost Explorer"
  },
  {
    question: "Ein Unternehmen verwendet eine zentrale Datenplattform, um verschiedene Datentypen für seine Kunden zu verwalten. Es möchte AWS-Dienste verwenden, um die Daten zu entdecken, zu transformieren und zu visualisieren.\nWelche Kombination von AWS-Diensten sollte das Unternehmen verwenden? (Wählen Sie zwei.)",
    options: [
      "A. AWS Glue",
      "B. Amazon Elastic File System (Amazon EFS)",
      "C. Amazon Redshift",
      "D. Amazon QuickSight",
      "E. Amazon Quantum Ledger Database (Amazon QLDB)"
    ],
    answer: ["A. AWS Glue", "D. Amazon QuickSight"]
  },
  {
    question: "Ein globales Unternehmen möchte seine Drittanbieteranwendungen in die AWS Cloud migrieren. Es möchte Unterstützung von einem globalen Expertenteam, um die Migration schneller und zuverlässiger gemäß den internen Best Practices von AWS abzuschließen.\nWelcher AWS-Dienst oder welche Ressource erfüllt diese Anforderung?",
    options: [
      "A. AWS Support",
      "B. AWS Professional Services",
      "C. AWS Launch Wizard",
      "D. AWS Managed Services (AMS)"
    ],
    answer: "B. AWS Professional Services"
  },
  {
    question: "Eine E-Learning-Plattform muss eine Anwendung zwei Monate pro Jahr ausführen. Die Anwendung wird auf Amazon EC2-Instanzen bereitgestellt. Jegliche Ausfallzeit während dieser zwei Monate muss vermieden werden.\nWelche EC2-Kaufoption erfüllt diese Anforderungen am kosteneffizientesten?",
    options: [
      "A. Reservierte Instanzen",
      "B. Dedizierte Hosts",
      "C. Spot-Instanzen",
      "D. On-Demand-Instanzen"
    ],
    answer: "D. On-Demand-Instanzen"
  },
  {
    question: "Ein Entwickler möchte eine Anwendung schnell auf AWS bereitstellen, ohne die erforderlichen Ressourcen manuell zu erstellen.\nWelcher AWS-Dienst erfüllt diese Anforderungen?",
    options: [
      "A. Amazon EC2",
      "B. AWS Elastic Beanstalk",
      "C. AWS CodeBuild",
      "D. Amazon Personalize"
    ],
    answer: "B. AWS Elastic Beanstalk"
  },
  {
    question: "Ein Unternehmen speichert vertrauliche Kundendaten in einem Amazon S3-Bucket. Es möchte die Daten vor versehentlichem Löschen oder Überschreiben schützen.\nWelche S3-Funktion sollte das Unternehmen verwenden, um diese Anforderungen zu erfüllen?",
    options: [
      "A. S3-Lifecycle-Regeln",
      "B. S3-Versionierung",
      "C. S3-Bucket-Richtlinien",
      "D. S3-Server-seitige Verschlüsselung"
    ],
    answer: "B. S3-Versionierung"
  },
  {
    question: "Welcher AWS-Dienst bietet die Möglichkeit, Infrastruktur als Code zu verwalten?",
    options: [
      "A. AWS CodePipeline",
      "B. AWS CodeDeploy",
      "C. AWS Direct Connect",
      "D. AWS CloudFormation"
    ],
    answer: "D. AWS CloudFormation"
  },
  {
    question: "Ein Online-Gaming-Unternehmen muss eine Kaufoption wählen, um seine Amazon EC2-Instanzen für ein Jahr zu betreiben. Der Webverkehr ist konstant, und eventuelle Spitzen sind vorhersehbar. Die EC2-Instanzen müssen ohne Unterbrechung online und verfügbar sein.\nWelche EC2-Kaufoption erfüllt diese Anforderungen am kosteneffizientesten?",
    options: [
      "A. On-Demand-Instanzen",
      "B. Reservierte Instanzen",
      "C. Spot-Instanzen",
      "D. Spot Fleet"
    ],
    answer: "B. Reservierte Instanzen"
  }
];
