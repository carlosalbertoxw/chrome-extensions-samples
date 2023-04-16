document.getElementById("clickMe").addEventListener("click", () => {
  showNotification("Notification title", "notification body");
});

function showNotification(title, message) {
  const notificationId = `issue-${Date.now()}`;
  chrome.notifications.create(notificationId, {
    type: "basic",
    iconUrl: "images/icon-48.png",
    title: title,
    message: message,
  });
}
