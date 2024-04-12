package com.pizzaria.prosper.service;

import com.pizzaria.prosper.dto.PizzaDto;
import com.pizzaria.prosper.dto.UsersDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PizzaService {
    PizzaDto createPizza(MultipartFile file, String description, double price, String name);
    PizzaDto getPizzaById(Long id);
    List<PizzaDto> getAllPizza();
    List<PizzaDto> getAllPizzaWimages();
    PizzaDto updatePizza(Long pizzaId, PizzaDto pizzaDto);
    void deletePizza(Long pizzaId);
}
