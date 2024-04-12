package com.pizzaria.prosper.controller;


import com.pizzaria.prosper.dto.ImagesDto;
import com.pizzaria.prosper.entity.Images;
import com.pizzaria.prosper.mapper.ImageMapper;
import com.pizzaria.prosper.service.ImagesService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/v1/api/pizza/images")
public class ImagesController {
    @Autowired
    private ImagesService imageService;
    private ImageMapper mapper;

    @PostMapping
    public ResponseEntity uploadImage(@RequestParam("file") MultipartFile file,
                                      @RequestParam("name") String name,
                                      @RequestParam("tags") List<String> tags) throws IOException {


        log.info("Imagem recebida: name: {}, size: {}", file.getOriginalFilename(), file.getSize());
        log.info("Nome definido para a imagem: name: {}", name);
        log.info("Tags: name: {}", tags);

        Images images = mapper.mapToImages(file, name, tags);


        Images imagesSaved =  imageService.saveImage(images);
        URI imagesUri = imagesURL(imagesSaved);

        return ResponseEntity.created(imagesUri).build();

    }
    private URI imagesURL(Images images){
        String imagesPath = "/" + images.getId();
        return ServletUriComponentsBuilder.fromCurrentRequest()
                .path(imagesPath).build().toUri();
    }

    @GetMapping("{id}")
    public ResponseEntity<byte[]> getImages(@PathVariable("id") String id){
        var images = imageService.getById(id);
        if(images.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        var imagesFound = images.get();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(imagesFound.getExtension().getMediaType());
        headers.setContentLength(imagesFound.getSize());
        //inline lado a lado
        headers.setContentDispositionFormData("inline; filename=\"" + imagesFound.getFileName()+ "\"", imagesFound.getFileName());

        return new ResponseEntity<>(imagesFound.getFile(), headers, HttpStatus.OK);
    }


}



