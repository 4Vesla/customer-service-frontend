export type User = {
  id: number,
  name: string
  surname: string
  email: string
  phoneNumber: string
  birthDate: string
  profilePicture: string
}

export const users: User[] = [
  {
    id: 1,
    name: 'Ihor',
    surname: 'Pidhorny',
    email: 'krasava@gmail.com',
    phoneNumber: '+38032423432',
    birthDate: '04-02-2003',
    profilePicture:
      'https://media-exp1.licdn.com/dms/image/C4E03AQFOUej7C4JGkA/profile-displayphoto-shrink_400_400/0/1623622308101?e=1663804800&v=beta&t=Db9eqjUzZePmkHDQaiYz-SCU6zpUuDkShZo-OcomCd0',
  },
  {
    id: 2,
    name: 'Yarik',
    surname: 'Pidhorny',
    email: 'loshara@gmail.com',
    phoneNumber: '+38032423432',
    birthDate: '04-02-2001',
    profilePicture:
      'https://media-exp1.licdn.com/dms/image/C4E03AQHzKn5gOtqFIA/profile-displayphoto-shrink_400_400/0/1637363139484?e=1663804800&v=beta&t=va4X5MOvRKiq5PCQoq8ybscua6Z1DdgSG4YqhsDU0eo',
  },
  {
    id: 3,
    name: 'Rus',
    surname: 'Humenyk',
    email: 'rys@gmail.com',
    phoneNumber: '+380ff2423432',
    birthDate: '04-02-2005',
    profilePicture:
      'https://media-exp1.licdn.com/dms/image/C4D03AQGWoogMhUaHzw/profile-displayphoto-shrink_400_400/0/1647931681146?e=1663804800&v=beta&t=_Xk9KMOvhfTPEDES5y9sbFJBnfhWmJb6m4QTEhCEy14',
  },
]
