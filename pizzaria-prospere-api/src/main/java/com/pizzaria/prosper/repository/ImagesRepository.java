package com.pizzaria.prosper.repository;

import com.pizzaria.prosper.entity.Images;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImageRepository extends JpaRepository<Images, Long> {
    Optional<Images> findByName(String name);
}
