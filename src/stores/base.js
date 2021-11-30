import { decorate, observable } from 'mobx'

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

class BaseRepository {
  constructor(service) {
    this.service = service
  }

  Table = defaults.Table
  CRUD = defaults.CRUD

  fetchTable = async payload => {
    this.Table = {
      ...this.Table,
      loading: true,
      errors: [],
    }

    const { data, errors } = await this.service.fetchTable(payload)
    if (data && !errors.length) {
      this.Table = {
        ...this.Table,
        data: data.hits || [],
        totalCount: data.count,
        hasMore: data.more,
        lastRow: data.to,
        loading: false,
        errors: [],
      }
      return true
    } else {
      this.Table = {
        ...this.Table,
        loading: false,
        errors,
      }
    }
    return false
  }

  getById = async id => {
    this.CRUD = {
      ...this.CRUD,
      loading: true,
      errors: [],
    }

    const { data, errors } = await this.service.getById(id)
    if (data && !errors.length) {
      this.CRUD = {
        ...this.CRUD,
        data,
        loading: false,
        errors: [],
      }

      return true
    } else {
      this.CRUD = {
        ...this.CRUD,
        loading: false,
        errors,
      }
    }
    return false
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

export default decorate(BaseRepository, {
  Table: observable,
  CRUD: observable,
})
