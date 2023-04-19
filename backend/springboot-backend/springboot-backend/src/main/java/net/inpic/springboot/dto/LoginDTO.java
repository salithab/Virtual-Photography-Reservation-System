package net.inpic.springboot.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter
public class LoginDTO {
    private String email;
    private String password;
}
