package com.pizzaria.prosper.mapper;

import com.pizzaria.prosper.dto.UsersDto;
import com.pizzaria.prosper.entity.Users;
import org.modelmapper.ModelMapper;

public class UsersMapper {
    private static ModelMapper modelMapper;

    public static UsersDto mapUserToDto(Users users){
      UsersDto usersDto = modelMapper.map(users, UsersDto.class);

            return  usersDto;
       /* return  new UsersDto(
                users.getId(),
                users.getUsername(),
                users.getEmail(),
                users.getPassword(),
                users.getRoles()
        );*/
    }
    public static Users mapUsers(UsersDto usersDto){
        Users users = modelMapper.map(usersDto, Users.class);

        return users;

        /* return  new Users(

                usersDto.getId(),
                usersDto.getUsername(),
                usersDto.getEmail(),
                usersDto.getPassword()
        );*/
    }
}
