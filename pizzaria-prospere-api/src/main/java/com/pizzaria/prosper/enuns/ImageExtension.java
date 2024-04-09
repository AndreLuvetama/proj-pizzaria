package com.pizzaria.prosper.enuns;

import lombok.Getter;
import org.springframework.http.MediaType;

import java.util.Arrays;

public enum ImageExtension {

    JPEG(MediaType.IMAGE_JPEG),
    PNG(MediaType.IMAGE_PNG),
    GIF(MediaType.IMAGE_GIF);

    @Getter
    private MediaType mediaType;

    ImageExtension(MediaType mediaType){
        this.mediaType = mediaType;
    }
    public static ImageExtension valueOf(MediaType mediaType){
        return Arrays.stream(values()).filter(ie -> ie.mediaType.equals(mediaType)).findFirst().orElse(null);
    }
}
