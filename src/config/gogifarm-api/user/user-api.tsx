import GogifarmInstance from "../gogifarm-axios-config";

export const getUser = (userId: number) => {
  return GogifarmInstance.get<undefined, UserDto>(
    '/v1/users/'
  );
}

export interface UserDto {

}

export const login = (userEmail: string, password: string) => {
  return GogifarmInstance.get<undefined, void>(
    '/v1/login', {
      params: {
        id: userEmail,
        password
      }
    }
  )
}


