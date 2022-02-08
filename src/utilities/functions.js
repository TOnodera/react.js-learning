const convertStorageUrl = (storageName, fileName) => {
  return `${process.env.REACT_APP_BACKEND_SERVER_URL}/${process.env.REACT_APP_STORAGES}/${storageName}/${fileName}`
}

export { convertStorageUrl }
