package net.inpic.springboot.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter

@Table(name = "customer")
public class Customer {
    @Id
    @Column(name="customerId",length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int customerId;
    @Column(name = "name", length = 225)
    private String name;
    @Column(name = "email", length = 225)
    private String email;
    @Column(name = "tel", length = 225)
    private String tel;
    @Column(name = "street", length = 225)
    private String street;
    @Column(name = "city",  length = 225)
    private String city;
    @Column(name = "password",  length = 225)
    private String password;

}
