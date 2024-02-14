
export const setUserToLocalStorage = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
};

export const getUserFromLocalStorage = () => {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
};

export const updateUserDataInLocalStorage = (updatedUserData) => {
    const userData = getUserFromLocalStorage();
    if (userData) {
        setUserToLocalStorage({ ...userData, ...updatedUserData });
    }
};