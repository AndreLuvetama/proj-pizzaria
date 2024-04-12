package com.pizzaria.prosper.dto;

import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class ImagesDto {
    private String type;
    private String name;
    private Long size;
    private String url;
    private String extension;
    private LocalDate uploadDate;
}
