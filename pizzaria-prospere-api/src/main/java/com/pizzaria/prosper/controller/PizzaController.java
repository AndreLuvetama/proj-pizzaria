package com.pizzaria.prosper.controller;

import com.pizzaria.prosper.dto.PizzaDto;
import com.pizzaria.prosper.repository.ImagesRepository;
import com.pizzaria.prosper.service.PizzaService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/v1/api/pizza")
public class PizzaController {
    private PizzaService pizzaService;

    @PostMapping
    public ResponseEntity<PizzaDto> insertUser(@RequestParam("file") MultipartFile file,
                                               @RequestParam String title,
                                               @RequestParam String description,
                                               @RequestParam double price){

        PizzaDto insert = pizzaService.createPizza(file,  description, price, title);

        return new ResponseEntity<>(insert, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<PizzaDto>> getAllPizza(){
        List<PizzaDto> pizzaDtos = pizzaService.getAllPizza();

        return ResponseEntity.ok(pizzaDtos);
    }


    @GetMapping("pizzaimages")
    public ResponseEntity<List<PizzaDto>> getAllPizzaWithImg(){
        List<PizzaDto> pizzaDtos = pizzaService.getAllPizzaWimages();
        return ResponseEntity.ok(pizzaDtos);
    }



    @GetMapping("{id}")
    public ResponseEntity<PizzaDto> getPizzaById(@PathVariable("id") Long id){
        PizzaDto pizzaDto = pizzaService.getPizzaById(id);
        return ResponseEntity.ok(pizzaDto);
    }

}