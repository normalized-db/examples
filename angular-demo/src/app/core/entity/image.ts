import { DateEntity } from './base-entity';

export class Image extends DateEntity {
  name?: string;
  data: ArrayBuffer;
  mimeType: string;
}
