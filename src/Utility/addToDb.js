const storedApp = () => {
  const storedAppSTR = localStorage.getItem("installed");
  if (storedAppSTR) {
    try {
      return JSON.parse(storedAppSTR);
    } catch (err) {
      console.error("Failed to parse stored apps:", err);
      return [];
    }
  }
  return [];
};

const addToStoredDB = (id) => {
  const storedAppData = storedApp();

  const normalizedId = Number(id);

  if (!storedAppData.includes(normalizedId)) {
    storedAppData.push(normalizedId);
    localStorage.setItem("installed", JSON.stringify(storedAppData));
  }
};

export { addToStoredDB, storedApp };
