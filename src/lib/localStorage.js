const data = {
    listQr: []
}

export const initialStore = () => {
    if (!(localStorage.getItem('QrStore'))) {
        localStorage.setItem('QrStore', JSON.stringify(data))
    }
}

export const addItemQr = (item) => {
    initialStore()
    const storage = JSON.parse(localStorage.getItem('QrStore'))
    storage.listQr.push(item)
    localStorage.setItem('QrStore', JSON.stringify(storage))
}

export const removeItem = (id) => {
    initialStore()
    const storage = JSON.parse(localStorage.getItem('QrStore'))
    storage.listQr = storage.listQr.filter(item => item.id !== id)
    localStorage.setItem('QrStore', JSON.stringify(storage))
}

export const getListQr = () => {
    initialStore()
    const storage = JSON.parse(localStorage.getItem('QrStore'))
    return storage.listQr
}