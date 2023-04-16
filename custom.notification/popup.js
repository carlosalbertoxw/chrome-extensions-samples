document.getElementById("clickMe").addEventListener("click", () => {
  showCustomNotification();
});

function showCustomNotification() {
  const width = 350;
  const height = 150;
  const left = screen.width - width - 10;
  const top = screen.height - height - 50;

  window.open(
    "custom_notification.html",
    "customNotification",
    `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
  );

  setTimeout(() => {
    const customNotification = window.open("", "customNotification");
    if (customNotification) {
      customNotification.close();
    }
  }, 5000);
}
