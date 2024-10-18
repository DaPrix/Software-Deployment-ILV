# Lab 1: Azure ARM Template Deployment

## Projektbeschreibung

Dieses Projekt enthält ein ARM (Azure Resource Manager) Template, das die Erstellung folgender Ressourcen in Microsoft Azure automatisiert:
1. **Azure Storage Account** (Free Tier)
2. **Azure Web App** (Free Tier)

Die Konfiguration der Ressourcen wird durch Parameter gesteuert, wie z. B.:
- Name des Storage Accounts
- Name der Resource Group
- Standort (Location)
- Name der Web App

## Voraussetzungen

Um das Template erfolgreich bereitstellen zu können, sind folgende Schritte notwendig:
1. Installierung der **Azure CLI**. [Anleitung zur Installation](https://learn.microsoft.com/de-de/cli/azure/install-azure-cli)
2. Anmelden bei dem Azure-Konto über die CLI:
    ```bash
    az login
    ```

## Deploy-Anleitung

Um die Azure-Ressourcen mit der CLI zu erstellen:

### 1. Resource Group erstellen
```bash
az group create --name <ResourceGroupName> --location <Location>
az group create --name MyResourceGroup --location westeurope
```

### 2. Deployment der Ressourcen
Durch folgendes Kommando können azuredeploy.json und azuredeploy.parameters.json deployed werden:

```bash
az deployment group create --resource-group <ResourceGroupName> --template-file azuredeploy.json --parameters azuredeploy.parameters.json
```