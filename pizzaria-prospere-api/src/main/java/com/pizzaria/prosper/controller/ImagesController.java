package com.pizzaria.prosper.controller;


import com.pizzaria.prosper.service.impl.ImageServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/v1/api/images")
public class ImageController {
    private ImageServiceImpl imageService;

    @PostMapping
    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file,
                                         @RequestParam("name") String name,
                                         @RequestParam("tags") List<String> tags) {
        return ResponseEntity.ok().build();

    }


}
