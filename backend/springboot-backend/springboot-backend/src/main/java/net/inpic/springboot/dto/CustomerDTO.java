package net.inpic.springboot.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data


public class CustomerDTO {
    private int customerId;
    private String name;
    private String email;
    private String tel;
    private String street;
    private String city;
}
