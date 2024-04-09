package com.pizzaria.prosper.service.impl;

import com.pizzaria.prosper.dto.UsersDto;
import com.pizzaria.prosper.entity.Users;
import com.pizzaria.prosper.exception.ResourceNotFoundException;
import com.pizzaria.prosper.mapper.UsersMapper;
import com.pizzaria.prosper.repository.UserRepository;
import com.pizzaria.prosper.service.UsersService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UsersService {
    private UserRepository userRepository;

    @Override
    public UsersDto createUser(UsersDto usersDto) {
        Users users = UsersMapper.mapUsers(usersDto);
        Users saveUsers = userRepository.save(users);

        return UsersMapper.mapUserToDto(saveUsers);
    }

    @Override
    public UsersDto getUserById(Long id) {
        Users users = userRepository.findById(id).orElseThrow(()->
                new ResourceNotFoundException("Usuário não encontrado " +id));
        return UsersMapper.mapUserToDto(users);
    }

    @Override
    public List<UsersDto> getAllUsers() {
        List<Users> users = userRepository.findAll();


        return users.stream().map((user)-> UsersMapper.mapUserToDto(user)).collect(
                Collectors.toList());
    }

    @Override
    public UsersDto updateUsersDto(Long userId, UsersDto usersDto) {
        return null;
    }

    @Override
    public void deleteUser(Long userId) {

    }
}
