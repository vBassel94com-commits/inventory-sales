package com.example.inventorysales.repository;

import com.example.inventorysales.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    @Query("SELECT i FROM Item i ORDER BY i.quantity DESC")
    List<Item> findTopSellingItems();

    @Query("SELECT i FROM Item i WHERE i.name LIKE %:name%")
    List<Item> searchItemsByName(@Param("name") String name);
}
