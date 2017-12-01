export class DateEntity {
  createdDate?: Date = new Date();
  lastModified?: Date = new Date();
}

export class IdEntity extends DateEntity {
  id?: number;
}
