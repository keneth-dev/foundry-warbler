Hooks.on("init", () => {
  game.settings.register("warbler", "soundFile", {
    name: game.i18n.localize("warbler.settings.soundFile.title"),
    hint: game.i18n.localize("warbler.settings.soundFile.description"),
    scope: "world",
    config: true,
    default: "sounds/notify.wav",
    type: String,
    requiresReload: true,
  });

  game.settings.register("warbler", "enabled", {
    name: game.i18n.localize("warbler.settings.enabled.title"),
    hint: game.i18n.localize("warbler.settings.enabled.description"),
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });

  game.settings.register("warbler", "muteActive", {
    name: game.i18n.localize("warbler.settings.muteActive.title"),
    hint: game.i18n.localize("warbler.settings.muteActive.description"),
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register("warbler", "muteRolls", {
    name: game.i18n.localize("warbler.settings.muteRolls.title"),
    hint: game.i18n.localize("warbler.settings.muteRolls.description"),
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
});

Hooks.on("renderChatMessage", async (message, html, messageData) => {
  if (game.settings.get("warbler", "enabled")) {
    const chatIsActive = ui.sidebar.activeTab === "chat";
    const muteActive = game.settings.get("warbler", "muteActive");
    const muteRolls = game.settings.get("warbler", "muteRolls");
    const mute = (message.isRoll && muteRolls) || (chatIsActive && muteActive);
  
    if (!mute) {
      message.sound = game.settings.get("warbler", "soundFile");
    }
  }
});
