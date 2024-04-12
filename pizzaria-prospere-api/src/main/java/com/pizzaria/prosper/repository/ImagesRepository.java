package com.pizzaria.prosper.repository;

import com.pizzaria.prosper.entity.Images;
import com.pizzaria.prosper.enuns.ImageExtension;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;
import java.util.Optional;

public interface ImagesRepository extends JpaRepository<Images, String>, JpaSpecificationExecutor<Images> {
    Optional<Images> findByName(String name);


    default List<Images> findByExtensionAndNameOrTagsLike(ImageExtension extension, String query) {
        return findAll();
    }
}
