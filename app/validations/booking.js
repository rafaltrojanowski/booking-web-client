import { validatePresence } from 'ember-changeset-validations/validators';

export default {
  clientEmail: validatePresence(true),
  startAt: validatePresence(true),
  endAt: validatePresence(true),
}
