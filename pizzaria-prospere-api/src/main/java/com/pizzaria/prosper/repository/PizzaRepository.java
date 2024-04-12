package com.pizzaria.prosper.repository;

import com.pizzaria.prosper.entity.Pizza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PizzaRepository extends JpaRepository<Pizza, Long> {

   /* @Query(value = "SELECT pz.description, pz.images_id, pz.price, pz.title, img.file, img.id FROM tb_pizza pz INNER JOIN tb_images img WHERE pz.images_id = img.id", nativeQuery = true)
    List<Pizza> findAllPizzasWithImages();*/
}
