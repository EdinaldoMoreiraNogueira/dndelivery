package com.devnaldo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devnaldo.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
