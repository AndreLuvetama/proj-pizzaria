package com.pizzaria.prosper.service;

import com.pizzaria.prosper.dto.PizzaDto;
import com.pizzaria.prosper.dto.UsersDto;

import java.util.List;

public interface PizzaService {
    PizzaDto createPizza(PizzaDto pizzaDto);
    PizzaDto getPizzaById(Long id);
    List<PizzaDto> getAllPizza();
    PizzaDto updatePizza(Long pizzaId, PizzaDto pizzaDto);
    void deletePizza(Long pizzaId);
}
