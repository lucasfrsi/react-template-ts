/* istanbul ignore file */

/**
 * Function to check if localStorage is both supported and available
 * Source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#testing_for_availability
 */

const storageAvailable = (type: string) => {
  let storage: Storage | undefined;
  try {
    storage = window[type as keyof Window];
    const x = '__storage_test__';
    storage!.setItem(x, x);
    storage!.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      (e.code === 22 ||
        e.code === 1014 ||
        e.name === 'QuotaExceededError' ||
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      storage &&
      storage.length !== 0
    );
  }
};

export const localStorageAvailable = storageAvailable('localStorage');
