import SecureLS from 'secure-ls'

const developing = process.env.NODE_ENV === 'development'

const defaultOpts = {
  encodingType: developing ? '' : 'aes',
  isCompression: developing ? false : true,
  encryptionSecret: 'aitmed@lucas@23332',
  encryptionNamespace: null,
}

const secureLs = (function() {
  let ls: any
  // Keep cache of fetched data so we can improve performance
  const cache = {}
  // Keep record of removed keys for convenience purposes
  const removed = []

  function _createEncrypter(opts = {}) {
    try {
      ls = new SecureLS({
        ...defaultOpts,
        ...opts,
      })
      return ls
    } catch (error) {
      return ls
    }
  }

  ls = _createEncrypter()

  return {
    set: (key: string, data: string) => {
      try {
        ls.set(key, data)
        cache[key] = data
        return ls
      } catch (error) {
        throw error
      }
    },
    get: (key: string) => {
      // Gets data back from specified key from the localStorage library. If the key is not provided, the library will warn
      let data
      try {
        data = ls.get(key)
        if (!cache[key]) {
          cache[key] = data
        }
      } catch (err) {
        console.error(err)
        return null
      }
      return data || null
    },
    remove: (key: string) => {
      // Removes the value of a key from the localStorage.
      ls.remove(key)
      removed.push(key)
      return ls
    },
    clear: () => {
      // Removes all the keys ever created for that particular domain. Remember localStorage works differently for http and https protocol
      ls.clear()
      return ls
    },
    getAllKeys: () => {
      // Gets the list of keys that were created using the secure-ls library. Helpful when data needs to be retrieved for all the keys or when keys name are not known(dynamically created keys)
      // Return type: string[]
      return ls.getAllKeys()
    },
    removeAll: () => {
      // Removes all the keys that were created by the secure-ls library, even the meta key
      ls.removeAll()
      return ls
    },
    changeEncodingType: (encodingType: string) => {
      if (!encodingType) return
      ls = _createEncrypter({ encodingType })
      return ls
    },
    createNewEncrypter: (...args: any[]) => {
      return _createEncrypter(...args)
    },
  }
})()

export default secureLs
