package com.pizzaria.prosper.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VendaDto {
    private Long id;
    private Long numeropedido;
    private String description;
    private double qtdTotal;
    private Long pizzaId;
    private Long usersId;


}
