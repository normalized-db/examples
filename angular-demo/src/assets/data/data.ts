import { Article } from '../../app/core/entity/article';
import { Comment } from '../../app/core/entity/comment';
import { Role } from '../../app/core/entity/role';
import { User } from '../../app/core/entity/user';

export const role1: Role = {
  id: '1',
  label: 'Subscriber',
  createdDate: new Date('2017-07-05 10:14:13.000000'),
  lastModified: new Date('2017-07-05 10:14:13.000000')
};

export const role2: Role = {
  id: '2',
  label: 'Journalist',
  createdDate: new Date('2017-07-05 10:14:13.000000'),
  lastModified: new Date('2017-07-05 10:14:13.000000')
};

export const role3: Role = {
  id: '3',
  label: 'Freelancer',
  createdDate: new Date('2017-07-05 10:14:13.000000'),
  lastModified: new Date('2017-07-05 10:14:13.000000')
};

export const userAlexk: User = {
  userName: 'alexk',
  firstName: 'Alexandra',
  lastName: 'König',
  email: 'alex.koenig@domain.at',
  role: role1,
  profileImage: 'http://lorempixel.com/150/150/people/1',
  createdDate: new Date('2017-07-05 10:14:13.000000'),
  lastModified: new Date('2017-07-05 10:14:13.000000')
};

export const userMmuster: User = {
  userName: 'mmuster',
  firstName: 'Max',
  lastName: 'Mustermann',
  email: 'mmuster@newspaper.at',
  role: role2,
  profileImage: 'http://lorempixel.com/150/150/people/2',
  createdDate: new Date('2017-07-05 10:14:13.000000'),
  lastModified: new Date('2017-07-05 10:14:13.000000')
};

export const userPlustig: User = {
  userName: 'plustig',
  firstName: 'Petra',
  lastName: 'Lustig',
  email: 'office@lustig-news.at',
  role: role3,
  profileImage: 'http://lorempixel.com/150/150/people/3',
  createdDate: new Date('2017-07-05 10:14:13.000000'),
  lastModified: new Date('2017-07-05 10:14:13.000000')
};

export const userTimler42: User = {
  userName: 'timler42',
  firstName: 'Tim',
  lastName: 'Müller',
  email: 'timmueller@mail.com',
  role: role1,
  profileImage: 'http://lorempixel.com/150/150/people/4',
  createdDate: new Date('2017-07-05 10:14:13.000000'),
  lastModified: new Date('2017-07-05 10:14:13.000000')
};

export const comment1: Comment = {
  id: '1',
  text: 'Comment #1',
  createdDate: new Date('2017-07-05 10:14:13.000000'),
  lastModified: new Date('2017-07-05 10:14:13.000000'),
  author: userTimler42
};

export const comment2: Comment = {
  id: '3',
  text: 'Comment #3',
  createdDate: new Date('2017-07-05 10:38:03.000000'),
  lastModified: new Date('2017-07-05 10:38:03.000000'),
  author: userAlexk
};

export const comment3: Comment = {
  id: '2',
  text: 'Comment #2',
  createdDate: new Date('2017-07-07 14:01:31.000000'),
  lastModified: new Date('2017-07-07 14:01:31.000000'),
  author: userAlexk
};

export const post1: Article = {
  id: '1',
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, ne fugit voluptatum ullamcorper qui, reformidans definitionem ei his.',
  createdDate: new Date('2017-07-05 09:08:22.000000'),
  lastModified: new Date('2017-07-05 09:08:22.000000'),
  author: userMmuster,
  comments: [
    comment1,
    comment2
  ]
};

export const post2: Article = {
  id: '2',
  title: 'Bacon ipsum',
  text: 'Bacon ipsum dolor amet kevin biltong andouille pig jerky.',
  createdDate: new Date('2017-07-07 14:01:31.000000'),
  lastModified: new Date('2017-07-07 14:01:31.000000'),
  author: userPlustig,
  comments: [comment3]
};

export const post3: Article = {
  id: '3',
  title: 'Cupcake ipsum',
  text: 'Cupcake ipsum dolor. Sit amet marshmallow sesame snaps donut dessert',
  createdDate: new Date('2017-07-07 16:45:01.000000'),
  lastModified: new Date('2017-07-07 16:45:01.000000'),
  author: userMmuster
};
