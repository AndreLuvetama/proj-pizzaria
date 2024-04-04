package com.pizzaria.prosper.repository;

import com.pizzaria.prosper.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Long> {
}
