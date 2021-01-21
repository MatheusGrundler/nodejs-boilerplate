import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/User';
import { injectable, inject } from 'tsyringe';

@injectable()
class CreateUserService {
  private usersRepository: IUsersRepository;

  constructor(
    @inject('UsersRepository')
    usersRepository: IUsersRepository,
  ) {
    this.usersRepository = usersRepository;
  }

  public async execute(): Promise<User[] | unknown> {
    const users = await this.usersRepository.findAll();

    return users;
  }
}

export default CreateUserService;
