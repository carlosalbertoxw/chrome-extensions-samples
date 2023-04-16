document.addEventListener("DOMContentLoaded", () => {
  const someSetting = document.getElementById("someSetting");

  chrome.storage.local.get("someSettingData", (result) => {
    someSetting.checked = result.someSettingData !== false;
  });

  someSetting.addEventListener("change", (event) => {
    chrome.storage.local.set({ someSettingData: event.target.checked });
  });
});
