const data = {
    listQr: [],
    listQrCreate:[]
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

export const removeItemQr= (id) => {
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

export const addItemQrCreate = (item) => {
    initialStore()
    const storage = JSON.parse(localStorage.getItem('QrStore'))
    storage.listQrCreate.push(item)
    localStorage.setItem('QrStore', JSON.stringify(storage))
}

export const removeItemQrCreate = (id) => {
    initialStore()
    const storage = JSON.parse(localStorage.getItem('QrStore'))
    storage.listQrCreate = storage.listQrCreate.filter(item => item.id !== id)
    localStorage.setItem('QrStore', JSON.stringify(storage))
}

export const getListQrCreate = () => {
    initialStore()
    const storage = JSON.parse(localStorage.getItem('QrStore'))
    return storage.listQrCreate
}