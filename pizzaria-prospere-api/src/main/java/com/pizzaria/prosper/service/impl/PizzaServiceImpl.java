package com.pizzaria.prosper.service.impl;

import com.pizzaria.prosper.dto.PizzaDto;
import com.pizzaria.prosper.entity.Images;
import com.pizzaria.prosper.entity.Pizza;
import com.pizzaria.prosper.exception.ResourceNotFoundException;
import com.pizzaria.prosper.mapper.PizzaMapper;
import com.pizzaria.prosper.repository.ImagesRepository;
import com.pizzaria.prosper.repository.PizzaRepository;
import com.pizzaria.prosper.service.PizzaService;
import io.micrometer.common.util.StringUtils;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PizzaServiceImpl implements PizzaService {

    private PizzaRepository pizzaRepository;
    private ImagesRepository imagesRepository;
    @Override
    public PizzaDto createPizza(MultipartFile file, String description, double price, String title) {


        //Pizza pizza = PizzaMapper.mapPizza(pizzaDto);
        Pizza pizza = new Pizza();
        String fileName = file.getOriginalFilename();
        if(fileName.contains("..")){
            new ResourceNotFoundException("Arquivo invalido");
        }
        try{
            pizza.setFile(Base64.getEncoder().encodeToString(file.getBytes()));
        } catch (IOException e){
            e.printStackTrace();
        }
        pizza.setDescription(description);
        pizza.setTitle(title);
        pizza.setPrice(price);


        Pizza savePizza = pizzaRepository.save(pizza);

       return PizzaMapper.mapPizzaToDto(savePizza);
    }



    @Override
    public PizzaDto getPizzaById(Long id) {
        Pizza pizza = pizzaRepository.findById(id).
                orElseThrow(()-> new ResourceNotFoundException("Pizza não encontrada"+ id));
        return PizzaMapper.mapPizzaToDto(pizza);
    }

    @Override
    public List<PizzaDto> getAllPizza() {
        List<Pizza> pizza = pizzaRepository.findAll();

        return pizza.stream().map((pizzas)-> PizzaMapper.mapPizzaToDto(pizzas)).collect(
                Collectors.toList());
    }

    @Override
    public List<PizzaDto> getAllPizzaWimages() {
        List<Pizza> pizzaResult = pizzaRepository.findAll();

        return pizzaResult.stream().map((pizzas)-> PizzaMapper.mapPizzaToDto(pizzas)).collect(
                Collectors.toList());

       /** List<Pizza> pizza = pizzaRepository.findAll();
        return pizza.stream().map((pizzas)-> PizzaMapper.mapPizzaToDto(pizzas)).collect(
                Collectors.toList());*/
    }



    @Override
    public PizzaDto updatePizza(Long pizzaId, PizzaDto pizzaDto) {
        return null;
    }

    @Override
    public void deletePizza(Long pizzaId) {

    }
}
