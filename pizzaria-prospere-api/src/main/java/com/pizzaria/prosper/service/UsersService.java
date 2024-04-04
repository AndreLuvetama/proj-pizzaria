package com.pizzaria.prosper.service;

import com.pizzaria.prosper.dto.UsersDto;

import java.util.List;

public interface UsersService {
    UsersDto createUser(UsersDto usersDto);
    UsersDto getUserById(Long id);
    List<UsersDto> getAllUsers();
    UsersDto updateUsersDto(Long userId, UsersDto usersDto);
    void deleteUser(Long userId);
}
