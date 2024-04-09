package com.pizzaria.prosper.service;


import com.pizzaria.prosper.dto.JwtAuthResponse;
import com.pizzaria.prosper.dto.LoginDto;
import com.pizzaria.prosper.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);
    JwtAuthResponse login(LoginDto loginDto);
}
