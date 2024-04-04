package com.pizzaria.prosper.mapper;

import com.pizzaria.prosper.dto.UsersDto;
import com.pizzaria.prosper.entity.Users;

public class UsersMapper {
    public static UsersDto mapUserToDto(Users users){
        return  new UsersDto(
                users.getId(),
                users.getNomeUsuario(),
                users.getEmail(),
                users.getPassword()
        );
    }
    public static Users mapUsers(UsersDto usersDto){
        return  new Users(
                usersDto.getId(),
                usersDto.getNomeUsuario(),
                usersDto.getEmail(),
                usersDto.getPassword()
        );
    }
}
