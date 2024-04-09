package com.pizzaria.prosper.service;

import com.pizzaria.prosper.entity.Images;

import java.util.Optional;

public interface ImagesService {
    Images saveImage(Images images);
    Optional<Images> getById(String id);
}
