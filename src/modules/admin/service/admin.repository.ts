import { Injectable } from '@nestjs/common';
import { Admin } from '../module/admin';

@Injectable()
export class AdminRepository {
  private readonly admins: Admin[];
  constructor() {
    this.admins = [
      {
        id: 1,
        login: 'root',
        password: 'root',
      },
    ];
  }
  async findByLogin(login: string): Promise<Admin | undefined> {
    return this.admins.find((admin) => admin.login === login);
  }

  async find(id: number): Promise<Admin | undefined> {
    return this.admins.find((admin) => admin.id === id);
  }
}
