package com.pizzaria.prosper.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PizzaDto {
    private Long id;
    private String title;
    private String description;
    private String price;
    private String ulrImage;
}
