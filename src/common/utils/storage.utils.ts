type LSKey = "token" | "user" | "tenant" | "allTenant";
export const storage = {
  // Set the value in the local storage of the browser
  set: (key: LSKey, data: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  },
  get: (key: LSKey) => {
    const _data = localStorage.getItem(key);
    if (_data) return JSON.parse(_data);
    return _data;
  },
  remove: (key: LSKey) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  },
  getSession: (key: LSKey) => {
    try {
      const _data = sessionStorage.getItem(key);
      if (_data) return JSON.parse(_data);
      return _data;
    } catch (error) {
      console.error(error);
    }
  },
  setSession: (key: LSKey, data: unknown) => {
    sessionStorage.setItem(key, data ? JSON.stringify(data) : "");
  },
  // Clear local storage
  clear: () => {
    localStorage.clear();
    sessionStorage.clear();
  },
  removeSession: (key: LSKey) => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  },
  // Clear session storage
  clearSession: () => {
    sessionStorage.clear();
  },
};
