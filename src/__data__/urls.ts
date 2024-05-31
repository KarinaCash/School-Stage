import { getNavigationsValue, getConfigValue } from '@ijl/cli';
import { generatePath } from 'react-router-dom';

const baseUrl = getNavigationsValue('school-stage.main');

export const URLs = {
  about: getNavigationsValue('school-stage.about') && `${baseUrl}${getNavigationsValue('school-stage.about')}`,
  teachers: getNavigationsValue('school-stage.teachers') && `${baseUrl}${getNavigationsValue('school-stage.teachers')}`,
  baseUrl,
  ui: {
    account: {
      url: `${baseUrl}${getNavigationsValue('school-stage.account.login')}`,
      on: Boolean(getNavigationsValue('school-stage.account.login')),
      getUrl: (login) => generatePath(`${baseUrl}${getNavigationsValue('school-stage.account.login')}`, { login })
    }
  },
  api: {
    main: getConfigValue('school-stage.api')
  },
}
