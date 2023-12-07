# Warbler

![FoundryVTT](https://img.shields.io/badge/FoundryVTT-v10.0.0+-orangered?logo=data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDgwMCA4MDAiCiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsODAwKSBzY2FsZSgwLjEsLTAuMSkiIGZpbGw9IiNmZmYiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik0xODMwIDUxMDUgbDAgLTgyNSAyOCAtMzAgYzIxIC0yMyA2NiAtNDQgMTk3IC05MSAzMTIgLTExMiA0NDEgLTIwMQo1MjEgLTM1OSAxMDcgLTIxMyAtNTAgLTYxNSAtMzUzIC05MDEgLTc5IC03NSAtMTY2IC0xNDMgLTI0MCAtMTg4IC0yOSAtMTgKLTUzIC0zNSAtNTMgLTM3IDAgLTIgNzI1IC00IDE2MTIgLTQgbDE2MTEgMCAtODEgNTggYy0xOTQgMTM4IC0zNTYgMjkwIC00NjUKNDM0IC0xNTUgMjA2IC0xOTEgNDE4IC0xMDUgNjIzIDc4IDE4NyAyMDIgMjcyIDUwNiAzNDUgMTQ5IDM2IDE3OCA1MyAxOTIgMTE1CjYgMjMgMTAgMzk2IDEwIDg2MyBsMCA4MjIgLTE2OTAgMCAtMTY5MCAwIDAgLTgyNXoiLz4KPHBhdGggZD0iTTIxNCA1NzMzIGMtMjggLTMgLTQ5IC0xMiAtNjQgLTI5IGwtMjMgLTI0IDczIC0zOTcgYzQwIC0yMTkgNzkKLTQxNCA4NSAtNDMzIDYgLTE5IDIzIC00MiAzNiAtNTIgMjggLTIxIDEzOTAgLTM4MCAxNDAyIC0zNjkgNCA0IDYgMjk5IDUgNjU3CmwtMyA2NDkgLTczNSAxIGMtNDA0IDAgLTc1NCAtMSAtNzc2IC0zeiIvPgo8cGF0aCBkPSJNNTM0MCA1MDM1IGMwIC02NTYgMSAtNjk1IDE4IC02OTUgNDAgMCA5MDQgMjYyIDEwNjAgMzIxIDUwNCAxOTIKMTAyNCA1MDMgMTI5OCA3NzcgMTAzIDEwMyAxNDEgMTU3IDE1MCAyMTAgNiAzNiA0IDQyIC0yMiA1OSAtMjcgMTcgLTgyIDE4Ci0xMjY2IDIxIGwtMTIzOCAyIDAgLTY5NXoiLz4KPHBhdGggZD0iTTE2NzAgMjMyNSBsMCAtMjU1IDE4OTMgMiAxODkyIDMgMCAyNTAgMCAyNTAgLTE4OTIgMyAtMTg5MyAyIDAKLTI1NXoiLz4KPC9nPgo8L3N2Zz4=)

Warbler is a chat notifier module for FoundryVTT. If enabled, it will play a sound whenever a message is posted to chat. It was inspired by the Squeaker module and updated to be compatible with the newest versions of Foundry.

### Installation
Enter the manifest link below into the Module Manager's "Install Module" tab.
```
https://raw.githubusercontent.com/keneth-dev/foundry-warbler/main/module.json
```
If you wish to install the module manually, you can download the repository as a zip file and extract it to your Foundry's `Data/modules` folder. You will need to rename the extracted folder to `warbler`.

### Configuration
The module supports the following settings:
- `world` **Notification Sound:** The sound that plays when a chat message is posted.
- `client` **Enable Chat Notifications:** Enables or disables the notifications for the client.
- `client` **Mute Active:** Will mute notifications if the chat tab is currently active.
- `client` **Mute Rolls:** Will mute notifications for roll messages.