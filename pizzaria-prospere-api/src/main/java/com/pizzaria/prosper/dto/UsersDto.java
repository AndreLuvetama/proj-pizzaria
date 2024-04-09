package com.pizzaria.prosper.dto;

import com.pizzaria.prosper.entity.Role;
import jakarta.persistence.Column;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsersDto {
    private Long id;
    private String username;
    private String email;
    private String password;
    private Long role;
    
}
