package com.pizzaria.prosper.controller;

import com.pizzaria.prosper.dto.PizzaDto;
import com.pizzaria.prosper.dto.VendaDto;
import com.pizzaria.prosper.service.impl.VendaService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/v1/api/venda")
public class VendaController {
    private VendaService vendaService;

    @PostMapping
    public ResponseEntity<VendaDto> createVenda(@RequestBody VendaDto vendaDto){
        VendaDto insert = vendaService.createVenda(vendaDto);
        return new ResponseEntity<>(insert, HttpStatus.CREATED);
    }

}
