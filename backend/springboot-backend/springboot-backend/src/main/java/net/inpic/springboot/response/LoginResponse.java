package net.inpic.springboot.response;

import lombok.*;
import net.inpic.springboot.dto.CustomerDTO;
import net.inpic.springboot.entity.Customer;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class LoginResponse {
    Customer customer;
    String message;
    Boolean status;

}
