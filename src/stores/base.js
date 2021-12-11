import { makeObservable, observable } from 'mobx'

const defaults = {
  Table: {
    data: [],
    loading: false,
    errors: [],
  },
  CRUD: {
    data: {},
    loading: false,
    errors: [],
  },
}

class BaseStore {
  constructor(service) {
    this.service = service

    makeObservable(this, {
      Table: observable,
      CRUD: observable,
    })
  }

  Table = defaults.Table
  CRUD = defaults.CRUD

  fetchTable = async payload => {
    this.Table.errors = []
    this.Table.loading = true

    const { data, errors } = await this.service.fetchTable(payload)

    this.Table.loading = false
    if (data && !errors.length) {
      this.Table = {
        ...this.Table,
        data: data.hits || [],
        totalCount: data.count,
        hasMore: data.more,
        lastRow: data.to,
        loading: false,
      }
    } else {
      this.CRUD.errors = errors
    }
    return !errors.length && data
  }

  getById = async id => {
    this.CRUD.errors = []
    this.CRUD.loading = true

    const { data, errors } = await this.service.getById(id)

    this.CRUD.loading = false
    if (data && !errors.length) {
      this.CRUD.data = data
    } else {
      this.CRUD.errors = errors
    }
    return !errors.length && data
  }

  clearErrorMessages = () => {
    this.CRUD.errors = []
  }

  resetCRUD = () => {
    this.CRUD = defaults.CRUD
  }

  resetTable = () => {
    this.Table = defaults.Table
  }

  reset() {
    this.Table = defaults.Table
    this.CRUD = defaults.CRUD
  }
}

export default BaseStore
