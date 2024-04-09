package com.pizzaria.prosper.controller;

import com.pizzaria.prosper.dto.UsersDto;
import com.pizzaria.prosper.service.UsersService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/v1/api/users")
public class UserController {
    private UsersService usersService;

    @PostMapping("/insert")
    public ResponseEntity<UsersDto> insertUser(@RequestBody UsersDto usersDto){
        UsersDto insert = usersService.createUser(usersDto);
        return new ResponseEntity<>(insert, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<UsersDto>> getAllUsers(){
        List<UsersDto> usersDtos = usersService.getAllUsers();
        return ResponseEntity.ok(usersDtos);
      }

      @GetMapping("{id}")
      public ResponseEntity<UsersDto> getUserById(@PathVariable("id") Long id){
            UsersDto usersDto = usersService.getUserById(id);
            return ResponseEntity.ok(usersDto);
      }

}
