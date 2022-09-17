/**
 * Copyright (c) 2022 Arseniy Chereda, aka arschedev
 */

//! pageAction | Button
browser.tabs.onUpdated.addListener((_tabId, _changeInfo, tab) => {
  browser.pageAction.setTitle({ tabId: tab.id, title: 'Google Translate Anywhere' });
  browser.pageAction.setIcon({ tabId: tab.id, path: './icons/icon_page.png' });
  browser.pageAction.show(tab.id);
});

//! browserAction | Click
browser.browserAction.onClicked.addListener((tab) => {
  browser.tabs.update({ url: `https://translate.google.com/translate?u=${tab.url}` });
});

//! pageAction | Click
browser.pageAction.onClicked.addListener((tab) => {
  browser.tabs.update({ url: `https://translate.google.com/translate?u=${tab.url}` });
});
