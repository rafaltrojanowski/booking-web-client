import { validatePresence, validateNumber } from 'ember-changeset-validations/validators';

export default {
  name: validatePresence(true),
  dailyRate: [
    validatePresence(true),
    validateNumber({gte: 1, lte: 999999}),
    validateNumber({integer: true})
  ]
}
