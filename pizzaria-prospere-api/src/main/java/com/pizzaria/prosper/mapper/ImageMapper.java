package com.pizzaria.prosper.mapper;


import com.pizzaria.prosper.dto.ImagesDto;
import com.pizzaria.prosper.entity.Images;
import com.pizzaria.prosper.enuns.ImageExtension;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Component
public class ImageMapper {
    public Images mapToImages(MultipartFile file, String name, List<String> tags) throws IOException {
       return Images.builder().
                name(name).
                tags(String.join(",", tags)).
                size(file.getSize()).
                extension(ImageExtension.valueOf(MediaType.valueOf(file.getContentType()))).
                file(file.getBytes()).
                build();

    }

    public ImagesDto imagesToDto(Images images, String url){
        return ImagesDto.builder().
                url(url).
                extension(images.getExtension().name()).
                name(images.getName()).
                size(images.getSize()).
                uploadDate(images.getUploadDate()).
                build();

    }

}
