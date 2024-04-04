package com.pizzaria.prosper.repository;

import com.pizzaria.prosper.entity.Pizza;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PizzaRepository extends JpaRepository<Pizza, Long> {
}
