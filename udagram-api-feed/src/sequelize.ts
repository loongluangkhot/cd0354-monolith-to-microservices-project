import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';
import { SequelizeConfig } from 'sequelize-typescript/lib/types/SequelizeConfig';

let sequelizeConfig: SequelizeConfig = {
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,
  'dialect': config.dialect,
  'dialectOptions': {
    'ssl': {
      'require': true,
      'rejectUnauthorized': false,
    },
  },
  'storage': ':memory:',
};

export const sequelize = new Sequelize(sequelizeConfig);
