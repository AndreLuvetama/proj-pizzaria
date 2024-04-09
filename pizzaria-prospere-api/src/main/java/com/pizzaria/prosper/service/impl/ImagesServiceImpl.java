package com.pizzaria.prosper.service.impl;

import com.pizzaria.prosper.entity.Images;
import com.pizzaria.prosper.repository.ImagesRepository;
import com.pizzaria.prosper.service.ImagesService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@AllArgsConstructor
public class ImagesServiceImpl implements ImagesService {
    @Autowired
    private ImagesRepository imageRepository;


    @Override
    @Transactional
    public Images saveImage(Images images) {

        return imageRepository.save(images);
    }

    @Override
    public Optional<Images> getById(String id) {
        return imageRepository.findById(id);
    }
}