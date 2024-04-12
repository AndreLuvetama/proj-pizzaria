package com.pizzaria.prosper.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tb_pizza")
public class Pizza {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private double price;

    //@OneToOne(cascade = CascadeType.ALL)
   // @JoinColumn(name = "images_id", referencedColumnName = "id")
    @Lob
    @Column(columnDefinition = "MEDIUMBLOB")
    private String file;



}
