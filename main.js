Hooks.on("init", () => {
  game.settings.register("warbler", "soundFile", {
    name: game.i18n.localize("warbler.settings.soundFile.name"),
    hint: game.i18n.localize("warbler.settings.soundFile.description"),
    scope: "world",
    config: true,
    default: "sounds/notify.wav",
    type: String,
    requiresReload: true,
  });

  game.settings.register("warbler", "enabled", {
    name: game.i18n.localize("warbler.settings.enabled.name"),
    hint: game.i18n.localize("warbler.settings.enabled.description"),
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });

  game.settings.register("warbler", "muteActive", {
    name: game.i18n.localize("warbler.settings.muteActive.name"),
    hint: game.i18n.localize("warbler.settings.muteActive.description"),
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register("warbler", "muteRolls", {
    name: game.i18n.localize("warbler.settings.muteRolls.name"),
    hint: game.i18n.localize("warbler.settings.muteRolls.description"),
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
});

Hooks.on("renderChatMessage", async (message, html, messageData) => {
  const chatIsActive = ui.sidebar.activeTab === "chat";
  const muteActive = game.settings.get("warbler", "muteActive");
  const muteRolls = game.settings.get("warbler", "muteRolls");
  const mute = !enabled || (message.isRoll && muteRolls) || (chatIsActive && muteActive);

  if (!mute) {
    message.data.sound = game.settings.get("warbler", "soundFile");
  }
});
