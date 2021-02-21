const addDataLocalStorage = (name, data) => {
    if (!localStorage.getItem(name)) {
        localStorage.setItem(name, JSON.stringify(data))
    }
}

const removeDataLocalStorage = name => {
      if (localStorage.getItem(name).length > 0) {
          localStorage.removeItem(name)
    }
} 

export {addDataLocalStorage,removeDataLocalStorage}