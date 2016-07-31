export const FILTER_TYPE_RANGE = 'range';
export const FILTER_TYPE_VALUE = 'value';
export const FILTER_TYPES = [FILTER_TYPE_VALUE, FILTER_TYPE_RANGE];
export const FIELDS = {
  canciones: {
    allowedFilters: ['value', 'range'],
    label: 'Canciones'
  },
  edad: {
    allowedFilters: ['value', 'range'],
    label: 'Edad'
  },
  sexo: {
    allowedFilters: ['value'],
    label: 'Sexo'
  },
  likes: {
    allowedFilters: ['value', 'range'],
    label: 'Likes'
  },
  clasico: {
    allowedFilters: ['value', 'range'],
    label: 'Clásico'
  }, 
  country: {
    allowedFilters: ['value', 'range'],
    label: 'Country'
  },
  rock: {
    allowedFilters: ['value', 'range'],
    label: 'Rock'
  },
  cumbia: {
    allowedFilters: ['value', 'range'],
    label: 'Cumbia'
  },
  pop: {
    allowedFilters: ['value', 'range'],
    label: 'Pop'
  },
  boleros: {
    allowedFilters: ['value', 'range'],
    label: 'Boleros'
  }
};

export const COMPARATORS = ['eq', 'gt', 'lt', 'gte', 'lte'];