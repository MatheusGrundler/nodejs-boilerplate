import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListUserService from '@modules/users/services/ListUsersService';

let fakeUsersRepository: FakeUsersRepository;
let listUsersService: ListUserService;

describe('List All Users', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listUsersService = new ListUserService(fakeUsersRepository);
  });

  it('should be able to list all users', async () => {
    await fakeUsersRepository.create({
      name: 'Jonh Doe',
      email: 'jonndoe@exemple.com',
      password: '123456',
    });

    const users = await listUsersService.execute();

    expect(users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'jonndoe@exemple.com',
        }),
      ]),
    );
  });
});
