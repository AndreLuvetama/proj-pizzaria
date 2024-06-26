package com.pizzaria.prosper.mapper;

import com.pizzaria.prosper.dto.ImagesDto;
import com.pizzaria.prosper.dto.PizzaDto;
import com.pizzaria.prosper.entity.Pizza;

public class PizzaMapper {
    public static PizzaDto mapPizzaToDto(Pizza pizza){
        return  new PizzaDto(
                pizza.getId(),
                pizza.getTitle(),
                pizza.getDescription(),
                pizza.getPrice(),
                pizza.getFile()
        );


    }
    public static Pizza mapPizza(PizzaDto pizzaDto){
        Pizza pizza = new Pizza();
               // pizza.setId(pizzaDto.getId());
                pizza.setTitle(pizzaDto.getTitle());
                pizza.setPrice(pizzaDto.getPrice());
                pizza.setDescription(pizzaDto.getDescription());
                pizza.setFile(pizzaDto.getFile());
        return pizza;
    }

}
