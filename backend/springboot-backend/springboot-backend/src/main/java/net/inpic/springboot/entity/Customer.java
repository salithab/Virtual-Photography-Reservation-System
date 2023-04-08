package net.inpic.springboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Customer {
    @Id
    private int customerId;
    private String name;
    private String email;
    private String tel;
    private String street;
    private String city;


}
