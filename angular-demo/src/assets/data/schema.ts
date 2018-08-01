import { ISchemaConfig, LogMode } from '@normalized-db/core';

export const schemaConfig: ISchemaConfig = {
  _defaults: {
    key: 'id',
    autoKey: false,
    logging: {
      mode: LogMode.Simple,
      keys: ["1", "2", "mmuster"]
    }
  },
  _authored: {
    targets: {
      author: 'user'
    },
    logging: {
      mode: LogMode.Disabled
    }
  },
  role: true,
  user: {
    key: 'userName',
    targets: {
      role: 'role'
    }
  },
  article: {
    parent: '_authored',
    targets: {
      comments: {
        type: 'comment',
        cascadeRemoval: true,
        isArray: true
      }
    },
    logging: {
      mode: LogMode.Full,
      eventSelection: ['created', 'cleared']
    }
  },
  comment: '_authored'
};
