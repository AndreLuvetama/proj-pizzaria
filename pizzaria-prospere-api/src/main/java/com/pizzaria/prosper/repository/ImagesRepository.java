package com.pizzaria.prosper.repository;

import com.pizzaria.prosper.entity.Images;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImagesRepository extends JpaRepository<Images, String> {
    Optional<Images> findByName(String name);
}
